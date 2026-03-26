/**
 * Tests for AudioMediaManager
 *
 * Covers every behavioural change made during the cross-browser reliability pass:
 *
 *  1. setupLocalMedia() — stops existing tracks before re-capturing (mic indicator fix).
 *  2. setupLocalMedia() — retries on BOTH OverconstrainedError (Firefox) and
 *     NotFoundError (Chrome) for missing devices.
 *  3. setupAudioContext() — re-uses an existing non-closed context instead of
 *     creating a new one (prevents AudioContext leak on reconnect).
 *  4. setInputDevice() — sets localStream = null BEFORE getUserMedia so that
 *     a failure doesn't leave a reference to stopped (silent) tracks.
 *  5. setInputDevice() — same cross-platform error retry as setupLocalMedia().
 *  6. interruptPlayback() — waits for the canplay event (or a 200 ms timeout)
 *     before calling play() after srcObject reassignment to avoid AbortError.
 *  7. startPlayback() — only registers the user-interaction autoplay-recovery
 *     handler on NotAllowedError; AbortError is silently ignored.
 *  8. setupUserInteractionHandler() — deduplication guard prevents stacking
 *     multiple click/touchstart listeners on repeated play() failures.
 *  9. disconnectAudio() — resets _userInteractionHandlerRegistered so that
 *     it can be re-registered after a reconnect.
 */

import { AudioMediaManager } from '@/rapida/audio/audio-media-manager';
import { MockMediaStream, MockAudioContext } from '../setup';

// ---------------------------------------------------------------------------
// Module mocks — must come before any import that resolves them
// ---------------------------------------------------------------------------

jest.mock('@/rapida/utils', () => ({
  isWindows: jest.fn().mockReturnValue(false),
  isChrome: jest.fn().mockReturnValue(false),
  isEdge: jest.fn().mockReturnValue(false),
  isSafari: jest.fn().mockReturnValue(false),
  isIOS: jest.fn().mockReturnValue(false),
  isSinkIdSupported: jest.fn().mockReturnValue(false),
}));

import { isWindows, isChrome } from '@/rapida/utils';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function createAgentConfig(device?: string): any {
  return {
    inputOptions: { device, channel: 'audio' },
    outputOptions: { device: undefined, channel: 'audio' },
  };
}

/** Returns a mock HTMLAudioElement whose addEventListener captures the canplay handler */
function createMockAudioElement() {
  const listeners: Record<string, Array<() => void>> = {};

  const el: any = {
    readyState: 3, // HAVE_FUTURE_DATA — already ready by default
    srcObject: null as any,
    volume: 1,
    paused: true,
    autoplay: false,
    preservesPitch: true,
    play: jest.fn().mockResolvedValue(undefined),
    pause: jest.fn(),
    addEventListener: jest.fn((event: string, handler: () => void) => {
      if (!listeners[event]) listeners[event] = [];
      listeners[event].push(handler);
    }),
    removeEventListener: jest.fn(),
    // Test helper — fire a captured event
    _fire(event: string) {
      (listeners[event] ?? []).forEach(h => h());
    },
    _listeners: listeners,
  };
  return el;
}

// ---------------------------------------------------------------------------
// Suite
// ---------------------------------------------------------------------------

describe('AudioMediaManager', () => {
  let manager: AudioMediaManager;
  let mockAudioEl: ReturnType<typeof createMockAudioElement>;

  beforeEach(() => {
    mockAudioEl = createMockAudioElement();
    (global as any).Audio = jest.fn(() => mockAudioEl);

    // Ensure utils mocks start from a clean slate
    (isWindows as jest.Mock).mockReturnValue(false);
    (isChrome as jest.Mock).mockReturnValue(false);

    // Reset AudioContext to the mock class — some tests modify window.AudioContext
    // and the change would otherwise bleed into subsequent tests.
    (window as any).AudioContext = MockAudioContext;
    delete (window as any).webkitAudioContext;
  });

  afterEach(async () => {
    await manager?.close();
  });

  // -------------------------------------------------------------------------
  // setupLocalMedia()
  // -------------------------------------------------------------------------

  describe('setupLocalMedia()', () => {
    beforeEach(() => {
      manager = new AudioMediaManager(createAgentConfig());
    });

    it('captures a local microphone stream', async () => {
      await manager.setupLocalMedia();
      expect(navigator.mediaDevices.getUserMedia).toHaveBeenCalledWith(
        expect.objectContaining({ audio: expect.any(Object), video: false }),
      );
      expect(manager.mediaStream).not.toBeNull();
    });

    /**
     * BUG FIX: A second call to setupLocalMedia() (e.g. after a reconnect)
     * used to leave the old tracks running, keeping the mic indicator on and
     * leaking resources.
     */
    it('stops existing tracks before re-capturing', async () => {
      await manager.setupLocalMedia();
      const firstStream = manager.mediaStream!;
      const firstTrack = firstStream.getAudioTracks()[0];

      // Second capture — should stop the first track first
      await manager.setupLocalMedia();
      expect(firstTrack.stop).toHaveBeenCalled();
    });

    it('disconnects the existing input analyser before re-capturing', async () => {
      await manager.setupLocalMedia();
      const analyser = manager.inputAnalyserNode;
      expect(analyser).not.toBeNull();

      await manager.setupLocalMedia();
      // The old analyser must have been disconnected
      expect((analyser as any).disconnect).toHaveBeenCalled();
    });

    /**
     * BUG FIX: Firefox throws OverconstrainedError when an 'exact' deviceId
     * constraint cannot be satisfied.  The fix retries with simplified
     * 'ideal' constraints so the call falls back to the default device.
     */
    it('retries with simplified constraints on OverconstrainedError', async () => {
      const overConstrained = Object.assign(new Error('overconstrained'), { name: 'OverconstrainedError' });
      (navigator.mediaDevices.getUserMedia as jest.Mock)
        .mockRejectedValueOnce(overConstrained)
        .mockResolvedValueOnce(new MockMediaStream());

      const config = createAgentConfig('gone-device-id');
      manager = new AudioMediaManager(config);
      await expect(manager.setupLocalMedia()).resolves.not.toThrow();

      expect(navigator.mediaDevices.getUserMedia).toHaveBeenCalledTimes(2);
      // Second call must use 'ideal' not 'exact'
      const [, secondCall] = (navigator.mediaDevices.getUserMedia as jest.Mock).mock.calls;
      expect(JSON.stringify(secondCall[0].audio)).not.toContain('"exact"');
    });

    /**
     * BUG FIX: Chrome throws NotFoundError for the same situation that
     * Firefox throws OverconstrainedError.  Both must be retried.
     */
    it('retries with simplified constraints on NotFoundError', async () => {
      const notFound = Object.assign(new Error('not found'), { name: 'NotFoundError' });
      (navigator.mediaDevices.getUserMedia as jest.Mock)
        .mockRejectedValueOnce(notFound)
        .mockResolvedValueOnce(new MockMediaStream());

      const config = createAgentConfig('missing-device-id');
      manager = new AudioMediaManager(config);
      await expect(manager.setupLocalMedia()).resolves.not.toThrow();

      expect(navigator.mediaDevices.getUserMedia).toHaveBeenCalledTimes(2);
    });

    it('re-throws errors that are not OverconstrainedError or NotFoundError', async () => {
      const denied = Object.assign(new Error('denied'), { name: 'NotAllowedError' });
      (navigator.mediaDevices.getUserMedia as jest.Mock).mockRejectedValueOnce(denied);

      manager = new AudioMediaManager(createAgentConfig());
      await expect(manager.setupLocalMedia()).rejects.toThrow('denied');
      // Should NOT retry
      expect(navigator.mediaDevices.getUserMedia).toHaveBeenCalledTimes(1);
    });
  });

  // -------------------------------------------------------------------------
  // setupAudioContext() — tested via setupLocalMedia()
  // -------------------------------------------------------------------------

  describe('AudioContext lifecycle (via setupLocalMedia)', () => {
    beforeEach(() => {
      manager = new AudioMediaManager(createAgentConfig());
    });

    it('creates AudioContext on the first call', async () => {
      expect(manager.context).toBeNull();
      await manager.setupLocalMedia();
      expect(manager.context).not.toBeNull();
    });

    /**
     * BUG FIX: setupAudioContext() was unconditionally creating a new
     * AudioContext on every call, leaking the old one.  The fix reuses the
     * existing context when its state is not "closed".
     * Verified by checking that manager.context returns the SAME object
     * after a second setupLocalMedia() call.
     */
    it('reuses existing AudioContext when state is "running" (no leak on reconnect)', async () => {
      await manager.setupLocalMedia();
      const first = manager.context;
      expect(first).not.toBeNull();

      // Second call — context must be the same object, not a new one
      await manager.setupLocalMedia();
      expect(manager.context).toBe(first);
    });

    it('creates a fresh AudioContext when the previous one was closed', async () => {
      await manager.setupLocalMedia();
      const first = manager.context!;

      // Simulate what disconnectAudio() does — marks the context closed
      (first as any).state = 'closed';

      await manager.setupLocalMedia();
      // A new instance must have been created
      expect(manager.context).not.toBe(first);
      expect(manager.context).not.toBeNull();
    });
  });

  // -------------------------------------------------------------------------
  // setInputDevice()
  // -------------------------------------------------------------------------

  describe('setInputDevice()', () => {
    beforeEach(async () => {
      manager = new AudioMediaManager(createAgentConfig());
      await manager.setupLocalMedia(); // establish initial stream
      // Clear call counts accumulated by setupLocalMedia so tests only count
      // the getUserMedia calls they explicitly trigger via setInputDevice().
      (navigator.mediaDevices.getUserMedia as jest.Mock).mockClear();
    });

    /**
     * BUG FIX: setInputDevice() used to call getUserMedia BEFORE setting
     * localStream = null, so a getUserMedia failure left localStream pointing
     * to an array of stopped (silent) tracks.  Any subsequent call to
     * getLocalAudioTrack() would return that dead track and the server would
     * hear silence.
     */
    it('sets localStream to null before calling getUserMedia', async () => {
      let streamWasNullDuringCall = false;
      (navigator.mediaDevices.getUserMedia as jest.Mock).mockImplementationOnce(() => {
        streamWasNullDuringCall = manager.mediaStream === null;
        return Promise.resolve(new MockMediaStream());
      });

      await manager.setInputDevice('new-device-id');
      expect(streamWasNullDuringCall).toBe(true);
    });

    it('returns undefined from getLocalAudioTrack() if getUserMedia fails', async () => {
      const denied = Object.assign(new Error('denied'), { name: 'NotAllowedError' });
      (navigator.mediaDevices.getUserMedia as jest.Mock).mockRejectedValueOnce(denied);

      await expect(manager.setInputDevice('bad-device')).rejects.toThrow();
      // localStream is null after failure — no dead track reference
      expect(manager.getLocalAudioTrack()).toBeUndefined();
    });

    it('retries with simplified constraints on OverconstrainedError', async () => {
      const overConstrained = Object.assign(new Error('overconstrained'), { name: 'OverconstrainedError' });
      (navigator.mediaDevices.getUserMedia as jest.Mock)
        .mockRejectedValueOnce(overConstrained)
        .mockResolvedValueOnce(new MockMediaStream());

      await expect(manager.setInputDevice('bad-device')).resolves.not.toThrow();
      expect(navigator.mediaDevices.getUserMedia).toHaveBeenCalledTimes(2);
    });

    it('retries with simplified constraints on NotFoundError', async () => {
      const notFound = Object.assign(new Error('not found'), { name: 'NotFoundError' });
      (navigator.mediaDevices.getUserMedia as jest.Mock)
        .mockRejectedValueOnce(notFound)
        .mockResolvedValueOnce(new MockMediaStream());

      await expect(manager.setInputDevice('missing-device')).resolves.not.toThrow();
      expect(navigator.mediaDevices.getUserMedia).toHaveBeenCalledTimes(2);
    });

    it('re-throws errors that are not device-not-found errors', async () => {
      const denied = Object.assign(new Error('denied'), { name: 'NotAllowedError' });
      (navigator.mediaDevices.getUserMedia as jest.Mock).mockRejectedValueOnce(denied);

      await expect(manager.setInputDevice('device')).rejects.toThrow('denied');
    });

    it('reconnects the input analyser after a successful device switch', async () => {
      const oldAnalyser = manager.inputAnalyserNode;

      await manager.setInputDevice('new-device');

      // Old analyser disconnected, new one created
      expect((oldAnalyser as any).disconnect).toHaveBeenCalled();
      expect(manager.inputAnalyserNode).not.toBeNull();
    });
  });

  // -------------------------------------------------------------------------
  // interruptPlayback()
  // -------------------------------------------------------------------------

  describe('interruptPlayback()', () => {
    beforeEach(() => {
      manager = new AudioMediaManager(createAgentConfig());
      // Pre-wire the audio element and stream directly
      const mockStream = new MockMediaStream() as unknown as MediaStream;
      (manager as any).audioElement = mockAudioEl;
      (manager as any).remoteStream = mockStream;
      mockAudioEl.srcObject = mockStream;
    });

    it('pauses the element and reassigns srcObject', async () => {
      await manager.interruptPlayback();
      expect(mockAudioEl.pause).toHaveBeenCalled();
      // srcObject is reassigned (null → stream)
      expect(mockAudioEl.srcObject).not.toBeNull();
    });

    it('calls play() after the sequence completes when readyState is already >= 3', async () => {
      mockAudioEl.readyState = 3; // ready immediately — no canplay wait needed
      await manager.interruptPlayback();
      expect(mockAudioEl.play).toHaveBeenCalledTimes(1);
    });

    /**
     * BUG FIX: Reassigning srcObject triggers the browser's internal load
     * algorithm which issues a pause step.  Calling play() before the element
     * settles produces AbortError.  The fix waits for canplay (or 200 ms) before
     * calling play().
     *
     * This test verifies that play() is NOT called until canplay fires.
     */
    it('waits for canplay event before calling play() when readyState < 3', async () => {
      mockAudioEl.readyState = 2; // HAVE_CURRENT_DATA — not ready yet

      // Start but don't await; the code suspends at `await new Promise(canplay|timeout)`
      const promise = manager.interruptPlayback();

      // The Promise constructor ran synchronously, so canplay handler is registered
      expect(mockAudioEl.addEventListener).toHaveBeenCalledWith('canplay', expect.any(Function), { once: true });
      // play() must NOT have been called yet
      expect(mockAudioEl.play).not.toHaveBeenCalled();

      // Fire canplay — resolves the waiting promise
      mockAudioEl._fire('canplay');
      await promise;

      expect(mockAudioEl.play).toHaveBeenCalledTimes(1);
    });

    it('proceeds (and calls play) after 200 ms timeout if canplay never fires', async () => {
      jest.useFakeTimers();
      mockAudioEl.readyState = 1; // will wait for canplay/timeout
      mockAudioEl.addEventListener = jest.fn(); // canplay never fires

      const promise = manager.interruptPlayback();

      // Advance past the 200 ms timeout
      jest.advanceTimersByTime(201);
      await Promise.resolve(); // flush the resolved microtask queue
      await promise;

      expect(mockAudioEl.play).toHaveBeenCalledTimes(1);
      jest.useRealTimers();
    });

    it('silently catches errors from play() (e.g. NotAllowedError after interruption)', async () => {
      mockAudioEl.play.mockRejectedValueOnce(
        Object.assign(new Error('not allowed'), { name: 'NotAllowedError' }),
      );
      await expect(manager.interruptPlayback()).resolves.not.toThrow();
    });

    it('is a no-op when there is no audio element', async () => {
      (manager as any).audioElement = null;
      await expect(manager.interruptPlayback()).resolves.not.toThrow();
    });
  });

  // -------------------------------------------------------------------------
  // startPlayback() / autoplay recovery — tested via private method access
  // -------------------------------------------------------------------------

  describe('autoplay recovery (startPlayback / setupUserInteractionHandler)', () => {
    beforeEach(() => {
      manager = new AudioMediaManager(createAgentConfig());
      // Wire audio element directly
      (manager as any).audioElement = mockAudioEl;
    });

    /**
     * BUG FIX: The old code registered the user-interaction handler for any
     * play() error including AbortError, which is a transient race that
     * resolves on its own.  The fix only installs the handler for
     * NotAllowedError (actual autoplay block).
     */
    it('registers user-interaction handler on NotAllowedError', async () => {
      const addEventSpy = jest.spyOn(document, 'addEventListener');
      mockAudioEl.play.mockRejectedValueOnce(
        Object.assign(new Error('not allowed'), { name: 'NotAllowedError' }),
      );

      await (manager as any).startPlayback();

      const clickCalls = addEventSpy.mock.calls.filter(([ev]) => ev === 'click');
      expect(clickCalls).toHaveLength(1);
      addEventSpy.mockRestore();
    });

    it('does NOT register user-interaction handler on AbortError', async () => {
      const addEventSpy = jest.spyOn(document, 'addEventListener');
      mockAudioEl.play.mockRejectedValueOnce(
        Object.assign(new Error('aborted'), { name: 'AbortError' }),
      );

      await (manager as any).startPlayback();

      const clickCalls = addEventSpy.mock.calls.filter(([ev]) => ev === 'click');
      expect(clickCalls).toHaveLength(0);
      addEventSpy.mockRestore();
    });

    /**
     * BUG FIX: Without the dedup guard, every failed play() call added a
     * new pair of click/touchstart listeners.  The guard ensures only one
     * pair is ever active at once.
     */
    it('does NOT register duplicate user-interaction handlers on repeated failures', () => {
      const addEventSpy = jest.spyOn(document, 'addEventListener');

      // First registration
      (manager as any).setupUserInteractionHandler();
      const afterFirst = addEventSpy.mock.calls.filter(
        ([ev]) => ev === 'click' || ev === 'touchstart',
      ).length;
      expect(afterFirst).toBe(2); // click + touchstart

      // Second call — flag is true, must be a no-op
      (manager as any).setupUserInteractionHandler();
      const afterSecond = addEventSpy.mock.calls.filter(
        ([ev]) => ev === 'click' || ev === 'touchstart',
      ).length;
      expect(afterSecond).toBe(2); // still only 2, no new listeners

      addEventSpy.mockRestore();
    });

    it('resets the dedup flag when the user-interaction handler fires', () => {
      let clickHandler: (() => void) | null = null;
      jest.spyOn(document, 'addEventListener').mockImplementation((event: string, handler: any) => {
        if (event === 'click') clickHandler = handler;
      });

      (manager as any).setupUserInteractionHandler();
      expect((manager as any)._userInteractionHandlerRegistered).toBe(true);

      // Simulate user click
      clickHandler?.();
      expect((manager as any)._userInteractionHandlerRegistered).toBe(false);
    });
  });

  // -------------------------------------------------------------------------
  // setMuted() / getMuted()
  // -------------------------------------------------------------------------

  describe('setMuted()', () => {
    beforeEach(async () => {
      manager = new AudioMediaManager(createAgentConfig());
      await manager.setupLocalMedia();
    });

    it('disables all audio tracks when muted', () => {
      manager.setMuted(true);
      const tracks = manager.mediaStream!.getAudioTracks();
      tracks.forEach(t => expect(t.enabled).toBe(false));
    });

    it('enables all audio tracks when unmuted', () => {
      manager.setMuted(true);
      manager.setMuted(false);
      const tracks = manager.mediaStream!.getAudioTracks();
      tracks.forEach(t => expect(t.enabled).toBe(true));
    });

    it('getMuted() reflects the current mute state', () => {
      expect(manager.getMuted()).toBe(false);
      manager.setMuted(true);
      expect(manager.getMuted()).toBe(true);
    });
  });

  // -------------------------------------------------------------------------
  // setVolume() / getVolume()
  // -------------------------------------------------------------------------

  describe('setVolume()', () => {
    beforeEach(() => {
      manager = new AudioMediaManager(createAgentConfig());
      (manager as any).audioElement = mockAudioEl;
    });

    it('clamps volume to [0, 1]', () => {
      manager.setVolume(1.5);
      expect(manager.getVolume()).toBe(1);
      expect(mockAudioEl.volume).toBe(1);

      manager.setVolume(-0.5);
      expect(manager.getVolume()).toBe(0);
      expect(mockAudioEl.volume).toBe(0);
    });

    it('sets a mid-range volume', () => {
      manager.setVolume(0.6);
      expect(manager.getVolume()).toBe(0.6);
      expect(mockAudioEl.volume).toBe(0.6);
    });
  });

  // -------------------------------------------------------------------------
  // disconnectAudio()
  // -------------------------------------------------------------------------

  describe('disconnectAudio()', () => {
    beforeEach(async () => {
      manager = new AudioMediaManager(createAgentConfig());
      await manager.setupLocalMedia();
      // Wire audio element
      (manager as any).audioElement = mockAudioEl;
      (manager as any)._userInteractionHandlerRegistered = true;
    });

    it('stops all local tracks', async () => {
      const track = manager.mediaStream!.getAudioTracks()[0];
      await manager.disconnectAudio();
      expect(track.stop).toHaveBeenCalled();
    });

    it('nulls the local stream reference', async () => {
      await manager.disconnectAudio();
      expect(manager.mediaStream).toBeNull();
    });

    it('closes the AudioContext', async () => {
      const ctx = manager.context!;
      await manager.disconnectAudio();
      expect(ctx.close).toHaveBeenCalled();
    });

    it('pauses and clears the audio element srcObject', async () => {
      await manager.disconnectAudio();
      expect(mockAudioEl.pause).toHaveBeenCalled();
      expect(mockAudioEl.srcObject).toBeNull();
    });

    /**
     * BUG FIX: Without the reset, the _userInteractionHandlerRegistered
     * flag stayed true after disconnectAudio(), preventing the handler from
     * being re-registered on a subsequent reconnect.
     */
    it('resets _userInteractionHandlerRegistered so handler can re-register on reconnect', async () => {
      expect((manager as any)._userInteractionHandlerRegistered).toBe(true);
      await manager.disconnectAudio();
      expect((manager as any)._userInteractionHandlerRegistered).toBe(false);
    });
  });

  // -------------------------------------------------------------------------
  // Windows-specific constraints
  // -------------------------------------------------------------------------

  describe('getAudioConstraints() — Windows path', () => {
    it('drops sampleRate constraint on Windows to avoid WASAPI conflicts', async () => {
      (isWindows as jest.Mock).mockReturnValue(true);
      manager = new AudioMediaManager(createAgentConfig());

      await manager.setupLocalMedia();

      const [call] = (navigator.mediaDevices.getUserMedia as jest.Mock).mock.calls;
      const audio: MediaTrackConstraints = call[0].audio;
      expect(audio).not.toHaveProperty('sampleRate');
    });

    it('uses ideal deviceId on Windows for driver compatibility', async () => {
      (isWindows as jest.Mock).mockReturnValue(true);
      manager = new AudioMediaManager(createAgentConfig('my-device'));

      await manager.setupLocalMedia();

      const [call] = (navigator.mediaDevices.getUserMedia as jest.Mock).mock.calls;
      const audio: MediaTrackConstraints = call[0].audio;
      expect((audio.deviceId as ConstrainDOMStringParameters)?.ideal).toBe('my-device');
      expect((audio.deviceId as ConstrainDOMStringParameters)?.exact).toBeUndefined();
    });

    it('uses exact deviceId on non-Windows for strict selection', async () => {
      (isWindows as jest.Mock).mockReturnValue(false);
      manager = new AudioMediaManager(createAgentConfig('my-device'));

      await manager.setupLocalMedia();

      const [call] = (navigator.mediaDevices.getUserMedia as jest.Mock).mock.calls;
      const audio: MediaTrackConstraints = call[0].audio;
      expect((audio.deviceId as ConstrainDOMStringParameters)?.exact).toBe('my-device');
    });
  });

  // -------------------------------------------------------------------------
  // Chrome-specific constraints (goog* extensions)
  // -------------------------------------------------------------------------

  describe('getAudioConstraints() — Chrome path', () => {
    it('adds goog* constraints for Chrome', async () => {
      (isChrome as jest.Mock).mockReturnValue(true);
      manager = new AudioMediaManager(createAgentConfig());

      await manager.setupLocalMedia();

      const [call] = (navigator.mediaDevices.getUserMedia as jest.Mock).mock.calls;
      const audio = call[0].audio;
      expect(audio).toHaveProperty('googEchoCancellation', true);
      expect(audio).toHaveProperty('googNoiseSuppression', true);
    });

    it('does NOT add goog* constraints for non-Chrome browsers', async () => {
      (isChrome as jest.Mock).mockReturnValue(false);
      manager = new AudioMediaManager(createAgentConfig());

      await manager.setupLocalMedia();

      const [call] = (navigator.mediaDevices.getUserMedia as jest.Mock).mock.calls;
      const audio = call[0].audio;
      expect(audio).not.toHaveProperty('googEchoCancellation');
    });
  });
});
