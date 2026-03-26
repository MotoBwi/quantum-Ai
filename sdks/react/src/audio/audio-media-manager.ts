/*
 *  Copyright (c) 2024. Rapida
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 *
 *  Author: Prashant <prashant@rapida.ai>
 */

import { AgentConfig } from "@/rapida/types/agent-config";
import { isChrome, isEdge, isWindows, isSafari, isIOS, isSinkIdSupported } from "@/rapida/utils";

/** Sample rate for Opus */
const OPUS_SAMPLE_RATE = 48000;

/**
 * Get the appropriate AudioContext class for the current browser.
 * Handles vendor-prefixed versions for older browsers.
 */
function getAudioContextClass(): typeof AudioContext | null {
  if (typeof window === "undefined") return null;
  return (window as any).AudioContext || (window as any).webkitAudioContext || null;
}

/**
 * AudioMediaManager — Owns local/remote media and playback
 *
 * Responsibilities:
 * - Capture local microphone stream (getUserMedia)
 * - Build audio constraints (device selection, Chrome quirks)
 * - Manage AudioContext + AnalyserNodes for visualization
 * - Manage remote audio playback (HTMLAudioElement)
 * - Device switching (input / output)
 * - Mute / volume control
 * - User-interaction handler for autoplay policy
 */
export class AudioMediaManager {
  private localStream: MediaStream | null = null;
  private remoteStream: MediaStream | null = null;
  private audioElement: HTMLAudioElement | null = null;
  private audioContext: AudioContext | null = null;
  private _inputAnalyser: AnalyserNode | null = null;
  private _outputAnalyser: AnalyserNode | null = null;
  private isMuted = false;
  private _volume = 1;
  // Prevents registering duplicate click/touchstart autoplay-recovery listeners
  private _userInteractionHandlerRegistered = false;

  constructor(private agentConfig: AgentConfig) { }

  // ---------------------------------------------------------------------------
  // Local media
  // ---------------------------------------------------------------------------

  /** Capture the local microphone stream */
  async setupLocalMedia(): Promise<void> {
    // Clean up any existing mic resources before re-capturing.
    // Without this, a second call (e.g. hot reconnect) would overwrite
    // localStream while the old tracks keep running and the mic indicator stays on.
    if (this.localStream) {
      this.localStream.getTracks().forEach(t => t.stop());
      this.localStream = null;
    }
    if (this._inputAnalyser) {
      this._inputAnalyser.disconnect();
      this._inputAnalyser = null;
    }

    const constraints = this.getAudioConstraints();

    try {
      this.localStream = await navigator.mediaDevices.getUserMedia({ audio: constraints, video: false });
    } catch (error: any) {
      // OverconstrainedError — 'exact' deviceId constraint cannot be satisfied
      //   (Firefox throws this when the device is gone)
      // NotFoundError — requested device does not exist
      //   (Chrome throws this for the same situation)
      // Both mean: fall back to the default device rather than failing completely.
      if (error?.name === "OverconstrainedError" || error?.name === "NotFoundError") {
        console.warn("[AudioMediaManager] Retrying with simplified audio constraints:", error.name);
        this.localStream = await navigator.mediaDevices.getUserMedia({
          audio: this.getSimplifiedAudioConstraints(),
          video: false,
        });
      } else {
        throw error;
      }
    }

    const track = this.localStream.getAudioTracks()[0];
    if (track) {
      track.enabled = true;

      // Store the actual device being used when none was explicitly selected
      const settings = track.getSettings();
      if (settings.deviceId && !this.agentConfig.inputOptions.device) {
        this.agentConfig.inputOptions.device = settings.deviceId;
      }
    }

    // Audio context for visualization - use vendor-prefixed version if needed
    await this.setupAudioContext();

    if (this.audioContext && this.localStream) {
      const source = this.audioContext.createMediaStreamSource(this.localStream);
      this._inputAnalyser = this.audioContext.createAnalyser();
      this._inputAnalyser.fftSize = 1024;
      this._inputAnalyser.smoothingTimeConstant = 0.4;
      source.connect(this._inputAnalyser);
    }
  }

  /**
   * Setup AudioContext with proper handling for different browsers.
   * Windows browsers (especially Edge) may need special handling.
   */
  private async setupAudioContext(): Promise<void> {
    // Re-use an existing running context rather than silently abandoning it.
    // Callers that need a fresh context (e.g. after close()) must null
    // this.audioContext themselves (disconnectAudio does this).
    if (this.audioContext && this.audioContext.state !== "closed") return;

    const AudioContextClass = getAudioContextClass();
    if (!AudioContextClass) {
      console.warn("[AudioMediaManager] AudioContext not available in this browser");
      return;
    }

    try {
      // No sampleRate option — browser picks native system rate (avoids WASAPI conflict on Windows)
      this.audioContext = new AudioContextClass();

      // Handle suspended state (common due to autoplay policies)
      if (this.audioContext.state === "suspended") {
        try {
          await this.audioContext.resume();
        } catch (resumeError) {
          console.debug("[AudioMediaManager] Initial AudioContext resume failed, will retry on user interaction", resumeError);
        }
      }
    } catch (error) {
      console.error("[AudioMediaManager] Failed to create AudioContext:", error);
      // Don't throw - audio context is optional (for visualization)
      this.audioContext = null;
    }
  }

  /** Simplified audio constraints for Windows fallback */
  private getSimplifiedAudioConstraints(): MediaTrackConstraints {
    const base: MediaTrackConstraints = {
      echoCancellation: true,
      noiseSuppression: true,
      autoGainControl: false,
    };

    if (this.agentConfig.inputOptions.device) {
      // Use 'ideal' instead of 'exact' for better Windows compatibility
      base.deviceId = { ideal: this.agentConfig.inputOptions.device };
    }

    return base;
  }

  /** Build MediaTrackConstraints for getUserMedia */
  private getAudioConstraints(): MediaTrackConstraints {
    const base: MediaTrackConstraints = {
      sampleRate: { ideal: OPUS_SAMPLE_RATE },
      channelCount: { ideal: 1 },
      echoCancellation: true,
      noiseSuppression: true,
      // Disable AGC for voice AI: when the assistant finishes speaking and the
      // user starts talking, AGC would abruptly boost the mic gain (it was
      // suppressed while output was playing), clipping the first syllable and
      // causing a jarring volume jump. The STT model handles normalization.
      autoGainControl: false,
    };

    if (this.agentConfig.inputOptions.device) {
      // On Windows, use 'ideal' instead of 'exact' for better compatibility
      // as some drivers may not support exact device selection
      if (isWindows()) {
        base.deviceId = { ideal: this.agentConfig.inputOptions.device };
      } else {
        base.deviceId = { exact: this.agentConfig.inputOptions.device };
      }
    }

    // On Windows, remove sampleRate constraint — WebRTC handles resampling internally,
    // and forcing 48kHz can conflict with WASAPI on 44100Hz audio hardware.
    // On Safari/iOS, sampleRate is not a supported getUserMedia constraint and must be omitted.
    if (isWindows() || isSafari() || isIOS()) {
      delete base.sampleRate;
    }

    // Chrome and Edge (Chromium-based) support additional constraints
    if (isChrome() || isEdge()) {
      return {
        ...base,
        // @ts-ignore Chrome/Edge-specific
        googEchoCancellation: true,
        // @ts-ignore AGC disabled — matches autoGainControl: false above
        googAutoGainControl: false,
        // @ts-ignore
        googNoiseSuppression: true,
        // @ts-ignore removes low-frequency rumble (fan/AC noise)
        googHighpassFilter: true,
      };
    }

    return base;
  }

  // ---------------------------------------------------------------------------
  // Remote audio playback
  // ---------------------------------------------------------------------------

  /** Attach a remote stream and start playback */
  async setupRemoteAudio(stream: MediaStream): Promise<void> {
    this.remoteStream = stream;
    if (this.audioElement?.srcObject === stream) return;

    if (!this.audioElement) {
      this.audioElement = this.createAudioElement();
      await this.setOutputDeviceOnElement(this.audioElement, this.agentConfig.outputOptions.device);
    }

    this.audioElement.srcObject = stream;
    this.audioElement.volume = this._volume;

    // Setup output analyser for remote audio visualization
    await this.setupOutputAnalyser(stream);

    // Start playback
    await this.startPlayback();
  }

  /**
   * Create and configure the audio element for playback.
   * Handles Windows-specific settings.
   */
  private createAudioElement(): HTMLAudioElement {
    const audio = new Audio();
    audio.autoplay = true;

    // On Windows, ensure proper audio handling
    if (isWindows()) {
      // Prevent potential audio glitches on Windows
      audio.preservesPitch = false;

      // Add event listeners for Windows-specific audio issues
      audio.addEventListener("stalled", () => {
        console.debug("[AudioMediaManager] Audio stalled, attempting recovery");
        this.recoverAudioPlayback();
      });

      audio.addEventListener("waiting", () => {
        console.debug("[AudioMediaManager] Audio waiting for data");
      });
    }

    return audio;
  }

  /**
   * Set the output device on an audio element.
   * Handles browsers that don't support setSinkId.
   */
  private async setOutputDeviceOnElement(element: HTMLAudioElement, deviceId?: string): Promise<void> {
    if (!deviceId) return;

    if (!isSinkIdSupported()) {
      console.warn("[AudioMediaManager] setSinkId not supported in this browser - using default output device");
      return;
    }

    try {
      await (element as any).setSinkId(deviceId);
    } catch (error: any) {
      if (error?.name === "NotFoundError") {
        console.warn(`[AudioMediaManager] Output device ${deviceId} not found, using default`);
      } else if (error?.name === "NotAllowedError") {
        console.warn("[AudioMediaManager] Permission denied for output device selection");
      } else {
        console.warn("[AudioMediaManager] Failed to set output device:", error);
      }
      // Don't throw - fallback to default device
    }
  }

  /**
   * Setup output analyser for remote audio visualization.
   */
  private async setupOutputAnalyser(stream: MediaStream): Promise<void> {
    try {
      // Ensure AudioContext exists for visualization
      if (!this.audioContext) {
        await this.setupAudioContext();
      }

      if (this.audioContext && !this._outputAnalyser) {
        const remoteSource = this.audioContext.createMediaStreamSource(stream);
        this._outputAnalyser = this.audioContext.createAnalyser();
        this._outputAnalyser.fftSize = 1024;
        this._outputAnalyser.smoothingTimeConstant = 0.4;
        remoteSource.connect(this._outputAnalyser);
      }
    } catch (error) {
      console.debug("[AudioMediaManager] Failed to setup output analyser", error);
      // Non-critical - visualization won't work but audio will still play
    }
  }

  /**
   * Start audio playback with proper error handling.
   */
  private async startPlayback(): Promise<void> {
    if (!this.audioElement) return;

    try {
      await this.audioElement.play();
    } catch (error: any) {
      if (error?.name === "NotAllowedError") {
        // Autoplay policy blocked playback — wait for a user gesture to resume.
        console.debug("[AudioMediaManager] Autoplay blocked, waiting for user interaction");
        this.setupUserInteractionHandler();
      } else if (error?.name !== "AbortError") {
        // AbortError is a transient race (srcObject reassignment); ignore it.
        // Any other error is unexpected and worth logging.
        console.error("[AudioMediaManager] Failed to start playback:", error);
      }
    }
  }

  /**
   * Attempt to recover audio playback after a stall (common on Windows).
   */
  private async recoverAudioPlayback(): Promise<void> {
    if (!this.audioElement || !this.remoteStream) return;

    const el = this.audioElement;
    try {
      el.pause();
      el.srcObject = null;
      el.srcObject = this.remoteStream;

      // Same canplay-wait as interruptPlayback: srcObject reassignment triggers
      // the load algorithm (which internally pauses), so play() must wait until
      // the element is ready or AbortError follows.
      if (el.readyState < 3 /* HAVE_FUTURE_DATA */) {
        await new Promise<void>((resolve) => {
          el.addEventListener('canplay', resolve as EventListener, { once: true });
          setTimeout(resolve, 200);
        });
      }

      await el.play();
    } catch (error) {
      console.debug("[AudioMediaManager] Audio recovery failed:", error);
    }
  }

  /** Resume audio after user interaction */
  async resumeAudio(): Promise<void> {
    try {
      if (this.audioContext?.state === "suspended") {
        await this.audioContext.resume();
      }
      if (this.audioElement?.paused) {
        await this.audioElement.play();
      }
    } catch (error) {
      console.error("Failed to resume audio", error);
      throw error;
    }
  }

  /**
   * Interrupt audio output — immediately silence stale assistant audio.
   *
   * The server clears its output buffer and stops sending new frames,
   * but frames already in the WebRTC jitter buffer / audio pipeline will
   * keep playing for a noticeable moment.  By briefly pausing the
   * HTMLAudioElement we flush the browser's internal audio buffer so the
   * user hears silence right away instead of trailing assistant speech.
   */
  async interruptPlayback(): Promise<void> {
    if (!this.audioElement) return;

    try {
      // Pause playback to flush the browser's internal audio buffer.
      const el = this.audioElement;
      el.pause();

      // Detach and re-attach the stream to discard any buffered frames.
      const stream = el.srcObject;
      el.srcObject = null;
      el.srcObject = stream;

      // Reassigning srcObject triggers the browser's media load algorithm,
      // which internally issues a pause step. Calling play() before that
      // settles produces an AbortError. Wait for canplay so the load is
      // complete before resuming. 200 ms timeout guards against streams
      // with no active audio tracks where canplay may never fire.
      if (el.readyState < 3 /* HAVE_FUTURE_DATA */) {
        await new Promise<void>((resolve) => {
          el.addEventListener('canplay', resolve as EventListener, { once: true });
          setTimeout(resolve, 200);
        });
      }

      // Resume — new frames from the server (post-interruption) will play
      // as soon as they arrive.
      await el.play();
    } catch (error) {
      // play() may throw NotAllowedError if autoplay policy blocks it;
      // non-fatal since the next server audio will trigger playback anyway.
      console.debug("[AudioMediaManager] interruptPlayback recovery play failed", error);
    }
  }

  /** Ensure audio context is running and element is playing (e.g. on READY signal) */
  async ensurePlayback(): Promise<void> {
    try {
      if (this.audioContext?.state === "suspended") {
        await this.audioContext.resume();
      }
      if (this.audioElement?.paused) {
        try {
          await this.audioElement.play();
        } catch (error) {
          console.debug("Autoplay failed, waiting for user interaction", error);
        }
      }
    } catch (error) {
      console.error("Failed to ensure playback", error);
    }
  }



  private setupUserInteractionHandler(): void {
    // Guard: only one pair of listeners at a time. Without this, every failed
    // play() call (e.g. on repeated reconnects) stacks up duplicate handlers.
    if (this._userInteractionHandlerRegistered) return;
    this._userInteractionHandlerRegistered = true;

    const startAudio = async () => {
      this._userInteractionHandlerRegistered = false;
      try {
        if (this.audioContext?.state === "suspended") await this.audioContext.resume();
        if (this.audioElement?.paused) await this.audioElement.play();
      } catch { }
      // once:true removes the firing listener; manually remove the other one.
      document.removeEventListener("click", startAudio);
      document.removeEventListener("touchstart", startAudio);
    };
    document.addEventListener("click", startAudio, { once: true });
    document.addEventListener("touchstart", startAudio, { once: true });
  }

  // ---------------------------------------------------------------------------
  // Device switching
  // ---------------------------------------------------------------------------

  /** Switch the input (microphone) device */
  async setInputDevice(deviceId: string): Promise<void> {
    this.agentConfig.inputOptions.device = deviceId;
    this.localStream?.getTracks().forEach(t => t.stop());
    // Null immediately so that if getUserMedia throws, getLocalAudioTrack()
    // returns undefined rather than a stream full of stopped (silent) tracks.
    this.localStream = null;

    try {
      this.localStream = await navigator.mediaDevices.getUserMedia({
        audio: this.getAudioConstraints(),
        video: false,
      });
    } catch (error: any) {
      // Same cross-platform fallback as setupLocalMedia:
      // Chrome → NotFoundError, Firefox → OverconstrainedError, for missing 'exact' device.
      if (error?.name === "OverconstrainedError" || error?.name === "NotFoundError") {
        console.warn("[AudioMediaManager] Device selection failed, retrying with simplified constraints:", error.name);
        this.localStream = await navigator.mediaDevices.getUserMedia({
          audio: this.getSimplifiedAudioConstraints(),
          video: false,
        });
      } else {
        throw error;
      }
    }

    // Reconnect analyser (disconnect old source first to avoid leaking audio nodes)
    if (this.audioContext && this._inputAnalyser && this.localStream) {
      this._inputAnalyser.disconnect();
      const source = this.audioContext.createMediaStreamSource(this.localStream);
      this._inputAnalyser = this.audioContext.createAnalyser();
      this._inputAnalyser.fftSize = 1024;
      this._inputAnalyser.smoothingTimeConstant = 0.4;
      source.connect(this._inputAnalyser);
    }
  }

  /** Switch the output (speaker) device */
  async setOutputDevice(deviceId: string): Promise<void> {
    this.agentConfig.outputOptions.device = deviceId;

    if (!this.audioElement) return;

    await this.setOutputDeviceOnElement(this.audioElement, deviceId);
  }

  // ---------------------------------------------------------------------------
  // Mute / volume
  // ---------------------------------------------------------------------------

  setMuted(muted: boolean): void {
    this.isMuted = muted;
    this.localStream?.getAudioTracks().forEach(t => { t.enabled = !muted; });
  }

  getMuted(): boolean { return this.isMuted; }

  setVolume(volume: number): void {
    this._volume = Math.max(0, Math.min(1, volume));
    if (this.audioElement) this.audioElement.volume = this._volume;
  }

  getVolume(): number { return this._volume; }

  // ---------------------------------------------------------------------------
  // Getters
  // ---------------------------------------------------------------------------

  get inputAnalyserNode(): AnalyserNode | null { return this._inputAnalyser; }
  get outputAnalyserNode(): AnalyserNode | null { return this._outputAnalyser; }
  get mediaStream(): MediaStream | null { return this.localStream; }
  get remoteMediaStream(): MediaStream | null { return this.remoteStream; }
  get context(): AudioContext | null { return this.audioContext; }

  /** Get the new audio track after setInputDevice (caller wires it to peer) */
  getLocalAudioTrack(): MediaStreamTrack | undefined {
    return this.localStream?.getAudioTracks()[0];
  }

  // ---------------------------------------------------------------------------
  // Cleanup
  // ---------------------------------------------------------------------------

  /** Disconnect audio (for text mode) - stops local media but keeps gRPC stream */
  async disconnectAudio(): Promise<void> {
    try {
      // Stop all microphone tracks so the browser releases the mic indicator
      this.localStream?.getTracks().forEach(t => t.stop());
      this.localStream = null;

      // Close the AudioContext that holds a MediaStreamSource reference to the
      // microphone.  Without this, browsers (especially Chrome) keep the mic
      // indicator active even after tracks have been stopped.
      if (this.audioContext && this.audioContext.state !== "closed") {
        await this.audioContext.close();
      }
      this.audioContext = null;
      this._inputAnalyser = null;
      this._outputAnalyser = null;

      if (this.audioElement) {
        this.audioElement.pause();
        this.audioElement.srcObject = null;
      }

      // Allow the user-interaction handler to re-register after a reconnect.
      this._userInteractionHandlerRegistered = false;
      this.remoteStream = null;
    } catch (error) {
      console.error("Failed to disconnect audio", error);
    }
  }

  /** Full cleanup - closes audio context and clears all resources */
  async close(): Promise<void> {
    try {
      // disconnectAudio() already handles AudioContext, analysers, and remoteStream
      await this.disconnectAudio();
    } catch (error) {
      console.error("Error during audio cleanup", error);
    }
  }
}
