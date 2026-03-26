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

import { AgentCallback } from "@/rapida/types/agent-callback";

// ============================================================================
// WebRTC Constants
// ============================================================================

const DEFAULT_ICE_SERVERS: RTCIceServer[] = [
  { urls: "stun:stun.l.google.com:19302" },
  { urls: "stun:stun1.l.google.com:19302" },
];
const ICE_TRANSPORT_POLICY: RTCIceTransportPolicy = "all";
const BUNDLE_POLICY: RTCBundlePolicy = "max-bundle";

/**
 * WebRTCPeerManager — Owns the RTCPeerConnection lifecycle
 *
 * Responsibilities:
 * - Create / close the RTCPeerConnection
 * - Handle SDP offer/answer exchange
 * - Handle ICE candidate exchange
 * - Set codec preferences (prefer Opus)
 * - Track connection state and fire callbacks
 */
export class WebRTCPeerManager {
  private peerConnection: RTCPeerConnection | null = null;
  private _isConnected = false;

  constructor(
    private callbacks: AgentCallback,
    private onICECandidate: (candidate: RTCIceCandidateInit) => void,
    private onRemoteTrack: (stream: MediaStream) => void,
  ) { }

  // ---------------------------------------------------------------------------
  // Lifecycle
  // ---------------------------------------------------------------------------

  /** Create a new RTCPeerConnection, optionally using server-provided ICE servers */
  setup(iceServers?: RTCIceServer[]): void {
    // Close existing connection before creating a new one to prevent leaks.
    // Detach handlers BEFORE closing so the "closed" state change does not
    // spuriously fire onDisconnected when the peer is simply being replaced.
    if (this.peerConnection) {
      this.peerConnection.onconnectionstatechange = null;
      this.peerConnection.ontrack = null;
      this.peerConnection.onicecandidate = null;
      try { this.peerConnection.close(); } catch { }
      this.peerConnection = null;
      this._isConnected = false;
    }

    this.peerConnection = new RTCPeerConnection({
      iceServers: iceServers?.length ? iceServers : DEFAULT_ICE_SERVERS,
      iceTransportPolicy: ICE_TRANSPORT_POLICY,
      bundlePolicy: BUNDLE_POLICY,
    });

    // Remote audio track — fallback to wrapping track in stream if server
    // doesn't attach a MediaStream to the track
    this.peerConnection.ontrack = (event) => {
      const stream = event.streams[0] ?? new MediaStream([event.track]);
      this.onRemoteTrack(stream);
    };

    // ICE candidates are NOT sent individually — all candidates are embedded
    // inline in the answer SDP (complete ICE, not trickle ICE). Trickle ICE
    // candidates sent before the server receives the answer SDP cause
    // "InvalidStateError: remote description is not set" on the server.
    // We capture them via waitForIceGathering() instead.
    this.peerConnection.onicecandidate = (_event) => {
      // no-op: candidates are captured via localDescription after gathering
    };

    // Connection state
    this.peerConnection.onconnectionstatechange = () => {
      const state = this.peerConnection?.connectionState;
      this.callbacks.onConnectionStateChange?.(state as RTCPeerConnectionState);

      if (state === "connected") {
        this._isConnected = true;
        this.callbacks.onConnected?.();
      } else if (state === "disconnected" || state === "failed" || state === "closed") {
        this._isConnected = false;
        this.callbacks.onDisconnected?.();
      }
    };
  }

  /** Close the peer connection and reset state */
  close(): void {
    try {
      if (this.peerConnection) {
        // Detach event handlers BEFORE closing so the "closed" state change
        // does not fire onDisconnected — callers decide whether to propagate
        // the disconnect (e.g. disconnectAudioOnly keeps the session alive).
        this.peerConnection.onconnectionstatechange = null;
        this.peerConnection.ontrack = null;
        this.peerConnection.onicecandidate = null;

        // Stop all sender tracks so the browser releases the microphone
        // indicator. RTCPeerConnection.close() alone does not guarantee
        // that tracks are stopped in every browser.
        this.peerConnection.getSenders().forEach(sender => {
          try { sender.track?.stop(); } catch { /* best-effort */ }
        });
        this.peerConnection.close();
      }
    } catch (error) {
      console.warn("Error closing peer connection", error);
    }
    this.peerConnection = null;
    this._isConnected = false;
  }

  get isConnected(): boolean { return this._isConnected; }
  get connection(): RTCPeerConnection | null { return this.peerConnection; }

  // ---------------------------------------------------------------------------
  // SDP / ICE
  // ---------------------------------------------------------------------------

  /**
   * Apply an SDP offer, optionally attach local track, and create the answer.
   *
   * In text-only mode `localStream` is null — we still complete the WebRTC
   * negotiation (the server always requires it) but set the transceiver to
   * `recvonly` so no microphone is needed.
   *
   * After setLocalDescription we wait for local ICE gathering to complete
   * so that the answer SDP contains all client candidates inline. This pairs
   * with the server sending a complete offer (all server candidates inline).
   * Together they eliminate trickle-ICE timing bugs that cause Safari to fail.
   */
  async handleOffer(sdp: string, localStream: MediaStream | null): Promise<void> {
    if (!this.peerConnection) this.setup();
    const pc = this.peerConnection!;

    await pc.setRemoteDescription({ type: "offer", sdp });

    const track = localStream?.getAudioTracks()[0];
    const transceivers = pc.getTransceivers();

    // Safari (pre-14.1) leaves receiver.track null after setRemoteDescription
    // until the first remote packet arrives, so the receiver-track check alone
    // is unreliable. Use a cascade of fallbacks:
    //   1. receiver.track.kind  — Chrome, Firefox, Safari 14.1+
    //   2. sender.track.kind    — if the sender already has a track attached
    //   3. transceivers[0]      — voice-only sessions always have exactly one
    //                             audio m-line, so the first transceiver is it
    const audioTransceiver =
      transceivers.find(t => t.receiver.track?.kind === "audio") ??
      transceivers.find(t => t.sender.track?.kind === "audio") ??
      transceivers[0];

    if (!audioTransceiver) {
      console.warn("No audio transceiver found in offer");
      const answer = await pc.createAnswer();
      await pc.setLocalDescription(answer);
      await this.waitForIceGathering(pc);
      return;
    }

    if (track) {
      // Audio mode — bidirectional.
      audioTransceiver.direction = "sendrecv";

      // replaceTrack attaches the mic track to the transceiver's sender.
      // If it fails (e.g. on older Safari), fall back to recvonly rather
      // than throwing — the answer is still sent and the server can at least
      // push audio to the client (user hears the assistant, doesn't send mic).
      try {
        await audioTransceiver.sender.replaceTrack(track);
      } catch (error) {
        console.warn("[WebRTCPeerManager] replaceTrack failed, falling back to recvonly", error);
        audioTransceiver.direction = "recvonly";
      }

      this.setCodecPreferences(audioTransceiver);
    } else {
      // Text-only mode — receive only (no microphone)
      audioTransceiver.direction = "recvonly";
    }

    const answer = await pc.createAnswer();
    await pc.setLocalDescription(answer);

    // Wait for local ICE gathering to complete so the answer SDP contains
    // all client candidates inline. Safari handles the complete SDP reliably;
    // it often drops or misorders trickle ICE candidates that arrive as
    // separate addIceCandidate() calls after the offer/answer exchange.
    await this.waitForIceGathering(pc);
  }

  /**
   * Wait for the RTCPeerConnection's ICE gathering to reach "complete".
   * Resolves immediately if already complete.
   * Times out after 5 seconds to avoid blocking forever if STUN is unreachable.
   */
  private waitForIceGathering(pc: RTCPeerConnection): Promise<void> {
    if (pc.iceGatheringState === "complete") return Promise.resolve();

    return new Promise<void>((resolve) => {
      const timeout = setTimeout(resolve, 5000);

      const handler = () => {
        if (pc.iceGatheringState === "complete") {
          clearTimeout(timeout);
          pc.removeEventListener("icegatheringstatechange", handler);
          resolve();
        }
      };

      pc.addEventListener("icegatheringstatechange", handler);
    });
  }

  /** Get local SDP (answer) after handleOffer was called */
  getLocalSDP(): string | undefined {
    return this.peerConnection?.localDescription?.sdp;
  }

  /** Apply an SDP answer (unusual server flow) */
  async handleAnswer(sdp: string): Promise<void> {
    if (!this.peerConnection) return;
    await this.peerConnection.setRemoteDescription({ type: "answer", sdp });
  }

  /** Add a remote ICE candidate */
  async addICECandidate(candidate: string, sdpMid: string, sdpMLineIndex: number): Promise<void> {
    if (!this.peerConnection) return;
    await this.peerConnection.addIceCandidate({ candidate, sdpMid, sdpMLineIndex });
  }

  /** Replace the audio track on the existing sender */
  async replaceTrack(track: MediaStreamTrack): Promise<void> {
    if (!this.peerConnection) return;
    const sender = this.peerConnection.getSenders().find(s => s.track?.kind === "audio");
    if (sender) await sender.replaceTrack(track);
  }

  /** Enable / disable the audio sender track (for mute) */
  setAudioEnabled(enabled: boolean): void {
    if (!this.peerConnection) return;
    const sender = this.peerConnection.getSenders().find(s => s.track?.kind === "audio");
    if (sender?.track) sender.track.enabled = enabled;
  }

  // ---------------------------------------------------------------------------
  // Codec preferences
  // ---------------------------------------------------------------------------

  private setCodecPreferences(transceiver: RTCRtpTransceiver): void {
    if (!transceiver.setCodecPreferences) return;
    try {
      // Use sender capabilities for send-side codec preference ordering
      const senderCaps = RTCRtpSender.getCapabilities("audio");
      const receiverCaps = RTCRtpReceiver.getCapabilities("audio");
      const codecs = senderCaps?.codecs ?? receiverCaps?.codecs;
      if (!codecs) return;

      const mimeTypeLower = (c: RTCRtpCodec) => c.mimeType.toLowerCase();
      // Prefer Opus with specific parameters for mono voice
      const opus = codecs.filter(c => mimeTypeLower(c) === "audio/opus");
      const others = codecs.filter(c => mimeTypeLower(c) !== "audio/opus");
      transceiver.setCodecPreferences([...opus, ...others]);
    } catch (error) {
      console.warn("Failed to set codec preferences", error);
    }
  }
}
