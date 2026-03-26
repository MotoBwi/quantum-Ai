/**
 * Jest Test Setup
 * 
 * This file sets up the test environment with necessary mocks for Web APIs
 * that are not available in the Node.js/jsdom environment.
 */

// Ensure protobuf-generated code has a `proto` root object
// which the Google JS protoc output expects when running in Node.
// Without this, importing any _pb.js file throws ReferenceError: proto is not defined.
// We define it globally before anything else is loaded.
if (typeof global.proto === 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (global as any).proto = {};
}

// Mock AudioContext
class MockAudioContext {
  sampleRate = 48000;
  currentTime = 0;
  state: AudioContextState = 'running';
  destination = {} as AudioDestinationNode;

  createAnalyser(): AnalyserNode {
    return {
      frequencyBinCount: 1024,
      getByteFrequencyData: jest.fn(),
      connect: jest.fn().mockReturnThis(),
      disconnect: jest.fn(),
    } as unknown as AnalyserNode;
  }

  createGain(): GainNode {
    return {
      gain: {
        value: 1,
        exponentialRampToValueAtTime: jest.fn(),
      },
      connect: jest.fn().mockReturnThis(),
      disconnect: jest.fn(),
    } as unknown as GainNode;
  }

  createMediaStreamSource(stream: MediaStream): MediaStreamAudioSourceNode {
    return {
      connect: jest.fn().mockReturnThis(),
      disconnect: jest.fn(),
    } as unknown as MediaStreamAudioSourceNode;
  }

  createBufferSource(): AudioBufferSourceNode {
    return {
      buffer: null,
      connect: jest.fn().mockReturnThis(),
      start: jest.fn(),
      stop: jest.fn(),
    } as unknown as AudioBufferSourceNode;
  }

  createBuffer(channels: number, length: number, sampleRate: number): AudioBuffer {
    return {
      numberOfChannels: channels,
      length,
      sampleRate,
      getChannelData: jest.fn().mockReturnValue(new Float32Array(length)),
    } as unknown as AudioBuffer;
  }

  resume = jest.fn().mockResolvedValue(undefined);
  suspend = jest.fn().mockResolvedValue(undefined);
  close = jest.fn().mockResolvedValue(undefined);

  audioWorklet = {
    addModule: jest.fn().mockResolvedValue(undefined),
  };
}

// Mock AudioWorkletNode
class MockAudioWorkletNode {
  port = {
    postMessage: jest.fn(),
    onmessage: null as ((event: MessageEvent) => void) | null,
  };

  connect = jest.fn().mockReturnThis();
  disconnect = jest.fn();
}

// Mock MediaStream
class MockMediaStream {
  private tracks: MediaStreamTrack[] = [];

  constructor() {
    this.tracks = [
      {
        kind: 'audio',
        enabled: true,
        stop: jest.fn(),
        getSettings: () => ({ sampleRate: 48000 }),
      } as unknown as MediaStreamTrack,
    ];
  }

  getTracks(): MediaStreamTrack[] {
    return this.tracks;
  }

  getAudioTracks(): MediaStreamTrack[] {
    return this.tracks.filter(t => t.kind === 'audio');
  }
}

// Mock MediaDevices
const mockMediaDevices = {
  getUserMedia: jest.fn().mockResolvedValue(new MockMediaStream()),
  enumerateDevices: jest.fn().mockResolvedValue([
    { deviceId: 'default', kind: 'audioinput', label: 'Default Microphone', groupId: 'default' },
    { deviceId: 'device1', kind: 'audioinput', label: 'External Microphone', groupId: 'group1' },
    { deviceId: 'default', kind: 'audiooutput', label: 'Default Speaker', groupId: 'default' },
  ] as MediaDeviceInfo[]),
  getSupportedConstraints: jest.fn().mockReturnValue({
    sampleRate: true,
    echoCancellation: true,
    noiseSuppression: true,
  }),
  ondevicechange: null,
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
};

// Set up global mocks
Object.defineProperty(window, 'AudioContext', {
  writable: true,
  value: MockAudioContext,
});

Object.defineProperty(window, 'AudioWorkletNode', {
  writable: true,
  value: MockAudioWorkletNode,
});

Object.defineProperty(navigator, 'mediaDevices', {
  writable: true,
  value: mockMediaDevices,
});

Object.defineProperty(window, 'MediaStream', {
  writable: true,
  value: MockMediaStream,
});

// Mock MessageEvent for worklet communication
global.MessageEvent = class MockMessageEvent extends Event {
  data: any;
  constructor(type: string, eventInitDict?: { data?: any }) {
    super(type);
    this.data = eventInitDict?.data;
  }
} as unknown as typeof MessageEvent;

// Export mocks for use in tests
export {
  MockAudioContext,
  MockAudioWorkletNode,
  MockMediaStream,
  mockMediaDevices,
};

// Reset all mocks before each test
beforeEach(() => {
  jest.clearAllMocks();
});
