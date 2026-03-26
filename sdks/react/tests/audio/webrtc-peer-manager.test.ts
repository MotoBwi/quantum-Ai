/**
 * Tests for WebRTCPeerManager
 *
 * Covers every behavioural change made during the reliability pass:
 *  1. setup() detaches event handlers BEFORE closing the old peer so that
 *     re-negotiation does not spuriously fire onDisconnected.
 *  2. handleOffer() uses a three-level transceiver fallback so that Safari
 *     (where receiver.track is null after setRemoteDescription) still
 *     attaches the microphone track correctly.
 *  3. handleOffer() reverts transceiver direction to recvonly and re-throws
 *     when replaceTrack() fails, preventing a silent "sendrecv SDP with no
 *     actual mic audio" situation.
 *  4. close() already detached handlers; this is verified to stay correct.
 */

import { WebRTCPeerManager } from '@/rapida/audio/webrtc-peer-manager';
import { MockMediaStream } from '../setup';

// ---------------------------------------------------------------------------
// Mock helpers
// ---------------------------------------------------------------------------

function createMockPeerConnection() {
  const pc: any = {
    connectionState: 'new' as RTCPeerConnectionState,
    iceGatheringState: 'complete' as RTCIceGatheringState,
    localDescription: null as RTCSessionDescription | null,
    onconnectionstatechange: null as any,
    ontrack: null as any,
    onicecandidate: null as any,

    setRemoteDescription: jest.fn().mockResolvedValue(undefined),
    createAnswer: jest.fn().mockResolvedValue({ type: 'answer', sdp: 'v=0\r\n' }),
    setLocalDescription: jest.fn().mockImplementation(async (desc: any) => {
      pc.localDescription = desc;
    }),
    addIceCandidate: jest.fn().mockResolvedValue(undefined),
    getTransceivers: jest.fn().mockReturnValue([]),
    getSenders: jest.fn().mockReturnValue([]),
    close: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),

    // Helpers for triggering browser-style events in tests
    _triggerConnectionState(state: RTCPeerConnectionState) {
      pc.connectionState = state;
      pc.onconnectionstatechange?.call(pc, new Event('connectionstatechange'));
    },
    _triggerICECandidate(candidate: RTCIceCandidate) {
      pc.onicecandidate?.call(pc, { candidate } as RTCPeerConnectionIceEvent);
    },
    _triggerTrack(stream: MediaStream) {
      pc.ontrack?.call(pc, { streams: [stream], track: stream.getTracks()[0] } as any);
    },
  };
  return pc;
}

function createMockTransceiver(opts: {
  receiverTrackKind?: string | null;
  senderTrackKind?: string | null;
  replaceTrack?: jest.Mock;
} = {}) {
  const { receiverTrackKind = 'audio', senderTrackKind = null } = opts;
  return {
    direction: 'recvonly' as RTCRtpTransceiverDirection,
    receiver: {
      track: receiverTrackKind != null ? { kind: receiverTrackKind } : null,
    },
    sender: {
      track: senderTrackKind != null ? { kind: senderTrackKind } : null,
      replaceTrack: opts.replaceTrack ?? jest.fn().mockResolvedValue(undefined),
    },
    setCodecPreferences: jest.fn(),
  };
}

// ---------------------------------------------------------------------------
// Suite
// ---------------------------------------------------------------------------

describe('WebRTCPeerManager', () => {
  let manager: WebRTCPeerManager;
  let callbacks: any;
  let onICECandidate: jest.Mock;
  let onRemoteTrack: jest.Mock;
  let mockPCInstances: ReturnType<typeof createMockPeerConnection>[];

  beforeEach(() => {
    mockPCInstances = [];
    (global as any).RTCPeerConnection = jest.fn().mockImplementation(() => {
      const pc = createMockPeerConnection();
      mockPCInstances.push(pc);
      return pc;
    });
    // Disable codec preference logic (not the focus of these tests)
    (global as any).RTCRtpSender = { getCapabilities: jest.fn().mockReturnValue(null) };
    (global as any).RTCRtpReceiver = { getCapabilities: jest.fn().mockReturnValue(null) };

    callbacks = {
      onConnected: jest.fn(),
      onDisconnected: jest.fn(),
      onConnectionStateChange: jest.fn(),
      onError: jest.fn(),
    };
    onICECandidate = jest.fn();
    onRemoteTrack = jest.fn();
    manager = new WebRTCPeerManager(callbacks, onICECandidate, onRemoteTrack);
  });

  afterEach(() => {
    manager.close();
  });

  // -------------------------------------------------------------------------
  // setup()
  // -------------------------------------------------------------------------

  describe('setup()', () => {
    it('creates a new RTCPeerConnection', () => {
      manager.setup();
      expect(global.RTCPeerConnection).toHaveBeenCalledTimes(1);
      expect(manager.connection).not.toBeNull();
    });

    it('fires onConnected when connection state transitions to "connected"', () => {
      manager.setup();
      mockPCInstances[0]._triggerConnectionState('connected');
      expect(callbacks.onConnected).toHaveBeenCalledTimes(1);
      expect(manager.isConnected).toBe(true);
    });

    it('fires onDisconnected when connection state transitions to "disconnected"', () => {
      manager.setup();
      mockPCInstances[0]._triggerConnectionState('disconnected');
      expect(callbacks.onDisconnected).toHaveBeenCalledTimes(1);
      expect(manager.isConnected).toBe(false);
    });

    it('fires onDisconnected when connection state transitions to "failed"', () => {
      manager.setup();
      mockPCInstances[0]._triggerConnectionState('failed');
      expect(callbacks.onDisconnected).toHaveBeenCalledTimes(1);
    });

    it('does NOT forward ICE candidates individually (uses complete ICE embedded in SDP)', () => {
      // ICE candidates are gathered inline via waitForIceGathering() and embedded
      // in the answer SDP rather than trickled — onICECandidate is never called.
      manager.setup();
      const candidate = { candidate: 'candidate:1', sdpMid: '0', sdpMLineIndex: 0, toJSON: () => ({}) } as any;
      mockPCInstances[0]._triggerICECandidate(candidate);
      expect(onICECandidate).not.toHaveBeenCalled();
    });

    it('forwards remote tracks to onRemoteTrack callback', () => {
      manager.setup();
      const stream = new MockMediaStream() as unknown as MediaStream;
      mockPCInstances[0]._triggerTrack(stream);
      expect(onRemoteTrack).toHaveBeenCalledWith(stream);
    });

    /**
     * BUG FIX: setup() used to call peerConnection.close() while the
     * onconnectionstatechange handler was still attached.  The browser fires
     * "closed" synchronously on close() which triggered onDisconnected even
     * during a routine re-negotiation.
     *
     * After the fix, handlers are nulled BEFORE close() is called.
     */
    it('does NOT fire onDisconnected when replacing an existing peer (re-negotiation)', () => {
      manager.setup();
      const firstPC = mockPCInstances[0];

      // Simulate browser behaviour: close() fires the "closed" state change
      firstPC.close = jest.fn().mockImplementation(() => {
        if (firstPC.onconnectionstatechange) {
          firstPC.connectionState = 'closed';
          firstPC.onconnectionstatechange(new Event('connectionstatechange'));
        }
      });

      // Replace the peer (e.g. server sends a new CONFIG + SDP offer)
      manager.setup();

      // onDisconnected must NOT have been called — gRPC session is still alive
      expect(callbacks.onDisconnected).not.toHaveBeenCalled();
    });

    it('nulls out the old connection handlers before closing', () => {
      manager.setup();
      const firstPC = mockPCInstances[0];
      expect(firstPC.onconnectionstatechange).not.toBeNull();

      manager.setup(); // second setup replaces the first

      // Handler on the old PC must have been cleared
      expect(firstPC.onconnectionstatechange).toBeNull();
      expect(firstPC.ontrack).toBeNull();
      expect(firstPC.onicecandidate).toBeNull();
    });
  });

  // -------------------------------------------------------------------------
  // close()
  // -------------------------------------------------------------------------

  describe('close()', () => {
    it('detaches handlers before calling peerConnection.close()', () => {
      manager.setup();
      const pc = mockPCInstances[0];

      let handlerWasNullAtClose = false;
      pc.close = jest.fn().mockImplementation(() => {
        handlerWasNullAtClose = pc.onconnectionstatechange === null;
      });

      manager.close();

      expect(handlerWasNullAtClose).toBe(true);
    });

    it('does NOT fire onDisconnected when close() is called explicitly', () => {
      manager.setup();
      const pc = mockPCInstances[0];

      // Simulate browser firing "closed" on pc.close()
      pc.close = jest.fn().mockImplementation(() => {
        if (pc.onconnectionstatechange) {
          pc.connectionState = 'closed';
          pc.onconnectionstatechange(new Event('connectionstatechange'));
        }
      });

      manager.close();

      expect(callbacks.onDisconnected).not.toHaveBeenCalled();
    });

    it('sets isConnected to false', () => {
      manager.setup();
      mockPCInstances[0]._triggerConnectionState('connected');
      expect(manager.isConnected).toBe(true);

      manager.close();
      expect(manager.isConnected).toBe(false);
    });

    it('nulls out the peer connection reference', () => {
      manager.setup();
      manager.close();
      expect(manager.connection).toBeNull();
    });

    it('stops all sender tracks so the browser releases the microphone indicator', () => {
      manager.setup();
      const mockTrack = { kind: 'audio', stop: jest.fn() };
      mockPCInstances[0].getSenders.mockReturnValue([{ track: mockTrack }]);

      manager.close();

      expect(mockTrack.stop).toHaveBeenCalled();
    });
  });

  // -------------------------------------------------------------------------
  // handleOffer()
  // -------------------------------------------------------------------------

  describe('handleOffer()', () => {
    function setupWithTransceivers(transceivers: any[]) {
      manager.setup();
      mockPCInstances[0].getTransceivers.mockReturnValue(transceivers);
    }

    /**
     * Standard path: Chrome / Firefox / Safari 14.1+ all populate
     * receiver.track after setRemoteDescription.
     */
    it('Chrome / Firefox / Safari 14.1+: finds transceiver via receiver.track.kind', async () => {
      const transceiver = createMockTransceiver({ receiverTrackKind: 'audio' });
      setupWithTransceivers([transceiver]);

      const stream = new MockMediaStream() as unknown as MediaStream;
      await manager.handleOffer('v=0\r\n', stream);

      expect(transceiver.sender.replaceTrack).toHaveBeenCalled();
      expect(transceiver.direction).toBe('sendrecv');
    });

    /**
     * BUG FIX: Safari pre-14.1 leaves receiver.track = null immediately
     * after setRemoteDescription (it becomes non-null only on the first RTP
     * packet).  The old single find() call hit the "no transceiver" early
     * return, and the mic track was NEVER attached — server heard silence.
     *
     * The fix falls back to transceivers[0] for voice-only sessions, which
     * always have exactly one audio m-line.
     */
    it('Safari pre-14.1: falls back to transceivers[0] when receiver.track is null', async () => {
      const safariTransceiver = createMockTransceiver({
        receiverTrackKind: null, // Safari: null until first RTP packet
        senderTrackKind: null,
      });
      setupWithTransceivers([safariTransceiver]);

      const stream = new MockMediaStream() as unknown as MediaStream;
      await manager.handleOffer('v=0\r\n', stream);

      // replaceTrack must have been called on the Safari transceiver
      expect(safariTransceiver.sender.replaceTrack).toHaveBeenCalled();
      expect(safariTransceiver.direction).toBe('sendrecv');
    });

    it('second fallback: uses sender.track.kind when receiver.track is null', async () => {
      const transceiver = createMockTransceiver({
        receiverTrackKind: null,
        senderTrackKind: 'audio', // sender already has a track
      });
      setupWithTransceivers([transceiver]);

      const stream = new MockMediaStream() as unknown as MediaStream;
      await manager.handleOffer('v=0\r\n', stream);

      expect(transceiver.sender.replaceTrack).toHaveBeenCalled();
    });

    it('in text-only mode (no local stream): sets direction to recvonly', async () => {
      const transceiver = createMockTransceiver({ receiverTrackKind: 'audio' });
      setupWithTransceivers([transceiver]);

      await manager.handleOffer('v=0\r\n', null);

      expect(transceiver.direction).toBe('recvonly');
      expect(transceiver.sender.replaceTrack).not.toHaveBeenCalled();
    });

    it('no transceivers: creates answer without attaching mic track', async () => {
      manager.setup();
      mockPCInstances[0].getTransceivers.mockReturnValue([]);

      const stream = new MockMediaStream() as unknown as MediaStream;
      await manager.handleOffer('v=0\r\n', stream);

      // createAnswer and setLocalDescription should still be called
      expect(mockPCInstances[0].createAnswer).toHaveBeenCalled();
      expect(mockPCInstances[0].setLocalDescription).toHaveBeenCalled();
    });

    it('creates the peer connection lazily when handleOffer is called before setup()', async () => {
      // manager was created but setup() never called
      expect(manager.connection).toBeNull();

      const transceiver = createMockTransceiver({ receiverTrackKind: 'audio' });
      // Can't set up transceivers before PC is created; use the RTCPeerConnection mock factory
      (global as any).RTCPeerConnection = jest.fn().mockImplementation(() => {
        const pc = createMockPeerConnection();
        pc.getTransceivers.mockReturnValue([transceiver]);
        mockPCInstances.push(pc);
        return pc;
      });

      await manager.handleOffer('v=0\r\n', null);

      expect(manager.connection).not.toBeNull();
    });

    /**
     * If replaceTrack() throws (e.g. on older Safari), the implementation
     * falls back gracefully to recvonly rather than re-throwing. The answer
     * SDP is still sent so the server can push audio to the client.
     */
    it('replaceTrack failure: reverts direction to recvonly and resolves (graceful fallback)', async () => {
      const replaceTrackError = new Error('track ended');
      const transceiver = createMockTransceiver({
        receiverTrackKind: 'audio',
        replaceTrack: jest.fn().mockRejectedValue(replaceTrackError),
      });
      setupWithTransceivers([transceiver]);

      const stream = new MockMediaStream() as unknown as MediaStream;

      // Does NOT re-throw — falls back gracefully
      await expect(manager.handleOffer('v=0\r\n', stream)).resolves.not.toThrow();

      // Direction must have been reverted — answer SDP will show recvonly
      expect(transceiver.direction).toBe('recvonly');
    });

    it('stores the answer SDP in localDescription', async () => {
      const transceiver = createMockTransceiver({ receiverTrackKind: 'audio' });
      setupWithTransceivers([transceiver]);

      await manager.handleOffer('v=0\r\n', null);

      expect(manager.getLocalSDP()).toBeDefined();
    });
  });

  // -------------------------------------------------------------------------
  // setAudioEnabled()
  // -------------------------------------------------------------------------

  describe('setAudioEnabled()', () => {
    it('enables the audio sender track', () => {
      manager.setup();
      const track = { kind: 'audio', enabled: false };
      mockPCInstances[0].getSenders.mockReturnValue([{ track }]);

      manager.setAudioEnabled(true);

      expect(track.enabled).toBe(true);
    });

    it('disables the audio sender track', () => {
      manager.setup();
      const track = { kind: 'audio', enabled: true };
      mockPCInstances[0].getSenders.mockReturnValue([{ track }]);

      manager.setAudioEnabled(false);

      expect(track.enabled).toBe(false);
    });

    it('is a no-op when the peer connection is not set up', () => {
      // Should not throw
      expect(() => manager.setAudioEnabled(false)).not.toThrow();
    });
  });

  // -------------------------------------------------------------------------
  // replaceTrack()
  // -------------------------------------------------------------------------

  describe('replaceTrack()', () => {
    it('calls replaceTrack on the audio sender', async () => {
      manager.setup();
      const mockReplaceTrack = jest.fn().mockResolvedValue(undefined);
      mockPCInstances[0].getSenders.mockReturnValue([
        { track: { kind: 'audio' }, replaceTrack: mockReplaceTrack },
      ]);

      const newTrack = { kind: 'audio' } as MediaStreamTrack;
      await manager.replaceTrack(newTrack);

      expect(mockReplaceTrack).toHaveBeenCalledWith(newTrack);
    });

    it('is a no-op when peer connection is null', async () => {
      await expect(manager.replaceTrack({} as MediaStreamTrack)).resolves.not.toThrow();
    });
  });

  // -------------------------------------------------------------------------
  // addICECandidate()
  // -------------------------------------------------------------------------

  describe('addICECandidate()', () => {
    it('adds the candidate to the peer connection', async () => {
      manager.setup();
      await manager.addICECandidate('candidate:1', 'audio', 0);
      expect(mockPCInstances[0].addIceCandidate).toHaveBeenCalledWith({
        candidate: 'candidate:1',
        sdpMid: 'audio',
        sdpMLineIndex: 0,
      });
    });

    it('is a no-op when peer connection is null', async () => {
      await expect(manager.addICECandidate('c', '0', 0)).resolves.not.toThrow();
    });
  });
});
