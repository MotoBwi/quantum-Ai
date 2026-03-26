/**
 * Tests for VoiceAgent class
 * 
 * VoiceAgent extends Agent and handles:
 * - Audio input/output management
 * - MediaStream AEC preservation
 * - Device switching
 * - Channel switching (Audio/Text)
 * - Message handling
 */

import { mockMediaDevices, MockMediaStream } from '../setup';

let lastTransportCallbacks: any = null;

// Mock WebRTC Transport
const mockWebRTCTransport = {
  close: jest.fn().mockResolvedValue(undefined),
  setMuted: jest.fn(),
  setVolume: jest.fn(),
  setInputDevice: jest.fn().mockResolvedValue(undefined),
  setOutputDevice: jest.fn().mockResolvedValue(undefined),
  sendConversationConfiguration: jest.fn(),
  disconnectAudioOnly: jest.fn().mockResolvedValue(undefined),
  reconnectAudio: jest.fn().mockResolvedValue(undefined),
  resumeAudio: jest.fn().mockResolvedValue(undefined),
  interruptAudio: jest.fn(),
  sendText: jest.fn(),
  isGrpcConnected: true,
  isAudioConnected: true,
  connected: true,
  inputAnalyser: { frequencyBinCount: 1024, getByteFrequencyData: jest.fn() },
  outputAnalyser: { frequencyBinCount: 1024, getByteFrequencyData: jest.fn() },
  inputAnalyserNode: null,
  outputAnalyserNode: null,
};

jest.mock('@/rapida/audio/webrtc-grpc-transport', () => ({
  WebRTCGrpcTransport: {
    create: jest.fn().mockImplementation(async (_config, callbacks, _textOnly) => {
      lastTransportCallbacks = callbacks;
      // Simulate successful connection by calling onConnectionStateChange
      if (callbacks?.onConnectionStateChange) {
        callbacks.onConnectionStateChange('connected');
      }
      return mockWebRTCTransport;
    }),
  },
  supportsWebRTCGrpcTransport: jest.fn().mockReturnValue(true),
}));

jest.mock('@/rapida/audio/compatibility', () => ({
  isAndroidDevice: jest.fn().mockReturnValue(false),
  isIosDevice: jest.fn().mockReturnValue(false),
}));

jest.mock('@/rapida/devices/device-manager', () => ({
  DeviceManager: {
    getInstance: jest.fn().mockReturnValue({
      getDevices: jest.fn().mockResolvedValue([
        { deviceId: 'default', kind: 'audioinput', label: 'Default Mic' },
        { deviceId: 'device1', kind: 'audiooutput', label: 'Speaker' },
      ]),
    }),
  },
}));

// Mock the Agent base class methods
jest.mock('@/rapida/agents/', () => {
  const EventEmitter = require('events').EventEmitter;

  class MockAgent extends EventEmitter {
    protected connectionState = 'disconnected';
    protected agentConfig: any;
    protected agentCallbacks: any[] = [];
    public agentMessages: any[] = [];

    constructor(connection: any, agentConfig: any, agentCallback?: any) {
      super();
      this.agentConfig = agentConfig;
      if (agentCallback) this.agentCallbacks.push(agentCallback);
    }

    get state() { return this.connectionState; }
    get isConnected() { return this.connectionState === 'connected'; }

    disconnectAgent = jest.fn().mockResolvedValue(undefined);
    changeConversation = jest.fn();
  }

  return { Agent: MockAgent };
});

import { VoiceAgent } from '@/rapida/agents/voice-agent';
import { WebRTCGrpcTransport } from '@/rapida/audio/webrtc-grpc-transport';
import { isAndroidDevice, isIosDevice } from '@/rapida/audio/compatibility';
import { Channel } from '@/rapida/types/channel';
import { AgentEvent } from '@/rapida/types/agent-event';
import { ConnectionState } from '@/rapida/types/connection-state';
import { MessageRole, MessageStatus } from '@/rapida/types/message';
import { ConversationDirective } from '@/rapida/clients/protos/talk-api_pb';

describe('VoiceAgent', () => {
  let voiceAgent: VoiceAgent;

  const mockConnectionConfig = {
    endpoint: {
      assistant: 'https://assistant-01.rapida.ai',
    },
    apiKey: 'test-api-key',
  };

  const mockAgentConfig = {
    id: 'test-assistant-id',
    inputOptions: {
      channel: Channel.Audio,
      channels: [Channel.Audio, Channel.Text],
      device: undefined as string | undefined,
    },
    outputOptions: {
      channel: Channel.Audio,
      channels: [Channel.Audio, Channel.Text],
      device: undefined as string | undefined,
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
    lastTransportCallbacks = null;
    mockAgentConfig.inputOptions.channel = Channel.Audio;
    mockAgentConfig.outputOptions.channel = Channel.Audio;
    mockAgentConfig.inputOptions.device = undefined;
    mockAgentConfig.outputOptions.device = undefined;
    mockWebRTCTransport.isGrpcConnected = true;
    mockWebRTCTransport.connected = true;
    mockWebRTCTransport.inputAnalyserNode = null as any;
    mockWebRTCTransport.outputAnalyserNode = null as any;
    voiceAgent = new VoiceAgent(
      mockConnectionConfig as any,
      mockAgentConfig as any
    );
  });

  afterEach(async () => {
    await voiceAgent.disconnect();
  });

  describe('constructor', () => {
    it('should create VoiceAgent instance', () => {
      expect(voiceAgent).toBeInstanceOf(VoiceAgent);
    });

    it('should accept optional callback', () => {
      const callback = { onUserMessage: jest.fn() };
      const agent = new VoiceAgent(
        mockConnectionConfig as any,
        mockAgentConfig as any,
        callback
      );
      expect(agent).toBeInstanceOf(VoiceAgent);
    });
  });

  describe('connect()', () => {
    it('should connect audio when channel is Audio', async () => {
      await voiceAgent.connect();

      expect(WebRTCGrpcTransport.create).toHaveBeenCalled();
    });

    it('should connect with textOnly=true when channel is Text', async () => {
      const textConfig = {
        ...mockAgentConfig,
        inputOptions: { ...mockAgentConfig.inputOptions, channel: Channel.Text },
      };
      const textAgent = new VoiceAgent(
        mockConnectionConfig as any,
        textConfig as any
      );

      await textAgent.connect();

      // WebRTCGrpcTransport should be created for text channel with textOnly=true
      expect(WebRTCGrpcTransport.create).toHaveBeenCalledWith(
        expect.any(Object),
        expect.any(Object),
        true, // textOnly
      );
    });

    it('should only create one WebRTC transport when connect() is called multiple times concurrently', async () => {
      // Call connect multiple times concurrently (simulates React StrictMode or double-clicks)
      const connectPromises = [
        voiceAgent.connect(),
        voiceAgent.connect(),
        voiceAgent.connect(),
      ];

      await Promise.all(connectPromises);

      // WebRTCGrpcTransport.create should only be called once
      expect(WebRTCGrpcTransport.create).toHaveBeenCalledTimes(1);
    });

    it('should not reconnect if already connected', async () => {
      // First connection
      await voiceAgent.connect();
      expect(WebRTCGrpcTransport.create).toHaveBeenCalledTimes(1);

      // Clear mock to track subsequent calls
      (WebRTCGrpcTransport.create as jest.Mock).mockClear();

      // Try to connect again when already connected
      await voiceAgent.connect();

      // Should not create another transport
      expect(WebRTCGrpcTransport.create).not.toHaveBeenCalled();
    });

    it('should clear _connectPromise after connection completes', async () => {
      expect((voiceAgent as any)._connectPromise).toBeNull();

      await voiceAgent.connect();

      // After completion, promise should be cleared
      expect((voiceAgent as any)._connectPromise).toBeNull();
    });

    it('should clear _connectPromise even if connection fails', async () => {
      // Make WebRTCGrpcTransport.create throw an error
      (WebRTCGrpcTransport.create as jest.Mock).mockRejectedValueOnce(new Error('Connection failed'));

      await voiceAgent.connect();

      // Promise should be cleared even after error
      expect((voiceAgent as any)._connectPromise).toBeNull();
    });

    it('should not create second transport when connect is called after first connect returns but before connected state', async () => {
      // Simulate the race condition:
      // 1. First connect() returns (transport created, config sent)
      // 2. But connectionState is still not Connected (WebRTC handshake in progress)
      // 3. Second connect() is called (e.g., from onSendText auto-connect)

      // First connection - transport created but connection state not yet "connected"
      // (mock doesn't call onConnectionStateChange with 'connected')
      const mockTransportNoConnect = {
        ...mockWebRTCTransport,
      };
      (WebRTCGrpcTransport.create as jest.Mock).mockResolvedValueOnce(mockTransportNoConnect);

      await voiceAgent.connect();
      expect(WebRTCGrpcTransport.create).toHaveBeenCalledTimes(1);

      // connectionState is still not Connected, but webrtcTransport exists
      expect(voiceAgent.isConnected).toBe(false);
      expect((voiceAgent as any).webrtcTransport).not.toBeNull();

      // Clear mock to track subsequent calls
      (WebRTCGrpcTransport.create as jest.Mock).mockClear();

      // Second connect attempt - should be blocked by webrtcTransport guard
      await voiceAgent.connect();

      // Should NOT create another transport
      expect(WebRTCGrpcTransport.create).not.toHaveBeenCalled();
    });
  });

  describe('disconnect()', () => {
    it('should disconnect agent and audio', async () => {
      await voiceAgent.connect();
      await voiceAgent.disconnect();

      // Verify cleanup was performed
      expect((voiceAgent as any).disconnectAgent).toHaveBeenCalled();
    });
  });

  describe('disconnectAudio()', () => {
    it('should close WebRTC transport', async () => {
      await voiceAgent.connect();
      await voiceAgent.disconnectAudio();

      // WebRTC transport close should be called
      expect(mockWebRTCTransport.close).toHaveBeenCalled();
    });

    it('should handle errors gracefully', async () => {
      // Should not throw even if cleanup fails
      await expect(voiceAgent.disconnectAudio()).resolves.not.toThrow();
    });
  });

  describe('WebRTC Transport', () => {
    it('should create WebRTC transport with correct config', async () => {
      await voiceAgent.connect();

      expect(WebRTCGrpcTransport.create).toHaveBeenCalledWith(
        expect.objectContaining({
          connectionConfig: expect.any(Object),
          agentConfig: mockAgentConfig,
        }),
        expect.any(Object), // callbacks
        false, // textOnly = false for audio mode
      );
    });

    it('should pass agentConfig to WebRTC transport', async () => {
      await voiceAgent.connect();

      expect(WebRTCGrpcTransport.create).toHaveBeenCalledWith(
        expect.objectContaining({
          agentConfig: mockAgentConfig,
        }),
        expect.any(Object),
        false,
      );
    });
  });

  describe('setInputMediaDevice()', () => {
    it('should change input device and reconnect', async () => {
      await voiceAgent.connect();

      const emitSpy = jest.spyOn(voiceAgent, 'emit');
      await voiceAgent.setInputMediaDevice('new-device-id');

      expect(emitSpy).toHaveBeenCalledWith(
        AgentEvent.InputMediaDeviceChangeEvent,
        'new-device-id'
      );
    });

    it('should not reconnect if device is the same', async () => {
      mockAgentConfig.inputOptions.device = 'same-device';
      const agent = new VoiceAgent(
        mockConnectionConfig as any,
        mockAgentConfig as any
      );

      const connectSpy = jest.spyOn(agent as any, 'connectDevice');
      await agent.setInputMediaDevice('same-device');

      expect(connectSpy).not.toHaveBeenCalled();
    });
  });

  describe('setOutputMediaDevice()', () => {
    it('should change output device and reconnect', async () => {
      await voiceAgent.connect();

      const emitSpy = jest.spyOn(voiceAgent, 'emit');
      await voiceAgent.setOutputMediaDevice('new-output-device');

      expect(emitSpy).toHaveBeenCalledWith(
        AgentEvent.OutputMediaDeviceChangeEvent,
        'new-output-device'
      );
    });
  });

  describe('setInputChannel()', () => {
    it('should switch from Audio to Text channel', async () => {
      await voiceAgent.connect();

      const emitSpy = jest.spyOn(voiceAgent, 'emit');
      await voiceAgent.setInputChannel(Channel.Text);

      expect(emitSpy).toHaveBeenCalledWith(
        AgentEvent.InputChannelChangeEvent,
        Channel.Text
      );
    });

    it('should handle switching to same channel', async () => {
      // Switching to the same channel should not throw
      await expect(voiceAgent.setInputChannel(Channel.Audio)).resolves.not.toThrow();
    });

    it('should reconnect audio when switching to Audio channel while connected', async () => {
      // Start with text channel
      const textConfig = {
        ...mockAgentConfig,
        inputOptions: { ...mockAgentConfig.inputOptions, channel: Channel.Text },
      };
      const agent = new VoiceAgent(
        mockConnectionConfig as any,
        textConfig as any
      );

      await agent.connect();

      // Now switch to audio — should reconnect audio via existing transport
      await agent.setInputChannel(Channel.Audio);

      // reconnectAudio adds audio transport, sendConversationConfiguration tells server
      expect(mockWebRTCTransport.reconnectAudio).toHaveBeenCalled();
      expect(mockWebRTCTransport.sendConversationConfiguration).toHaveBeenCalled();
    });

    it('should disconnect audio when switching to Text channel while connected', async () => {
      // Start with audio channel
      await voiceAgent.connect();

      // Switch to text — should disconnect audio but keep gRPC session
      await voiceAgent.setInputChannel(Channel.Text);

      expect(mockWebRTCTransport.disconnectAudioOnly).toHaveBeenCalled();
      expect(mockWebRTCTransport.sendConversationConfiguration).toHaveBeenCalled();
    });
  });

  describe('onSendText()', () => {
    it('should accept text message', async () => {
      const textConfig = {
        ...mockAgentConfig,
        inputOptions: { ...mockAgentConfig.inputOptions, channel: Channel.Text },
      };
      const agent = new VoiceAgent(
        mockConnectionConfig as any,
        textConfig as any
      );

      // onSendText should not throw when called
      await expect(agent.onSendText('Hello')).resolves.not.toThrow();
    });
  });

  describe('getLocalDevices()', () => {
    it('should return list of media devices', async () => {
      const devices = await VoiceAgent.getLocalDevices();

      expect(devices).toBeInstanceOf(Array);
      expect(devices.length).toBeGreaterThan(0);
    });

    it('should filter by device kind', async () => {
      await VoiceAgent.getLocalDevices('audioinput');

      // Verify DeviceManager was called with correct kind
      const { DeviceManager } = require('@/rapida/devices/device-manager');
      expect(DeviceManager.getInstance().getDevices).toHaveBeenCalledWith('audioinput', true);
    });
  });

  describe('inputMediaDevice getter', () => {
    it('should return current input device', () => {
      mockAgentConfig.inputOptions.device = 'test-device';
      const agent = new VoiceAgent(
        mockConnectionConfig as any,
        mockAgentConfig as any
      );

      expect(agent.inputMediaDevice).toBe('test-device');
    });
  });

  describe('getInputByteFrequencyData()', () => {
    it('should return undefined when input not connected', () => {
      // Without connection, returns undefined
      const data = voiceAgent.getInputByteFrequencyData();
      expect(data).toBeUndefined();
    });
  });

  describe('getOutputByteFrequencyData()', () => {
    it('should return undefined when output not connected', () => {
      // Without connection, returns undefined
      const data = voiceAgent.getOutputByteFrequencyData();
      expect(data).toBeUndefined();
    });
  });

  describe('connection callbacks and events', () => {
    it('transitions to connected on initialization callback', async () => {
      const emitSpy = jest.spyOn(voiceAgent, 'emit');
      await voiceAgent.connect();
      lastTransportCallbacks.onInitialization?.({ assistantconversationid: 'conv-123' });

      expect(voiceAgent.state).toBe(ConnectionState.Connected);
      expect(emitSpy).toHaveBeenCalledWith(
        AgentEvent.ConnectionStateEvent,
        ConnectionState.Connected,
      );
    });

    it('falls back to text mode on disconnected callback while audio channel', async () => {
      await voiceAgent.connect();
      const emitSpy = jest.spyOn(voiceAgent, 'emit');
      lastTransportCallbacks.onDisconnected?.();
      expect(emitSpy).toHaveBeenCalledWith(AgentEvent.InputChannelChangeEvent, Channel.Text);
    });

    it('marks pending assistant message complete on interrupt', async () => {
      await voiceAgent.connect();
      (voiceAgent as any).agentMessages.push({
        id: 'sys-1',
        role: MessageRole.System,
        messages: ['partial'],
        time: new Date(),
        status: MessageStatus.Pending,
      });
      lastTransportCallbacks.onInterrupt?.({});
      expect(mockWebRTCTransport.interruptAudio).toHaveBeenCalled();
      expect((voiceAgent as any).agentMessages[0].status).toBe(MessageStatus.Complete);
    });

    it('disconnects on END_CONVERSATION directive', async () => {
      await voiceAgent.connect();
      const disconnectSpy = jest.spyOn(voiceAgent, 'disconnect');
      lastTransportCallbacks.onDirective?.({
        type: ConversationDirective.DirectiveType.END_CONVERSATION,
      });
      expect(disconnectSpy).toHaveBeenCalled();
    });

    it('routes callback errors to ErrorEvent', async () => {
      await voiceAgent.connect();
      const emitSpy = jest.spyOn(voiceAgent, 'emit');
      lastTransportCallbacks.onError?.(new Error('transport failed'));
      expect(emitSpy).toHaveBeenCalledWith(AgentEvent.ErrorEvent, 'client', 'transport failed');
    });

    it('handles assistant and user streaming message callbacks', async () => {
      const assistantCb = { onAssistantMessage: jest.fn(), onUserMessage: jest.fn() };
      const agent = new VoiceAgent(
        mockConnectionConfig as any,
        mockAgentConfig as any,
        assistantCb as any,
      );
      await agent.connect();

      lastTransportCallbacks.onAssistantMessage?.({
        id: 'a1',
        messageText: 'hel',
        completed: false,
      });
      lastTransportCallbacks.onAssistantMessage?.({
        id: 'a1',
        messageText: 'lo',
        completed: false,
      });
      lastTransportCallbacks.onAssistantMessage?.({
        id: 'a1',
        messageText: 'hello',
        completed: true,
      });

      lastTransportCallbacks.onUserMessage?.({
        id: 'u1',
        messageText: 'hi',
        completed: false,
      });
      lastTransportCallbacks.onUserMessage?.({
        id: 'u1',
        messageText: 'hi there',
        completed: true,
      });

      expect(assistantCb.onAssistantMessage).toHaveBeenCalled();
      expect(assistantCb.onUserMessage).toHaveBeenCalled();
      expect((agent as any).agentMessages.some((m: any) => m.role === MessageRole.System)).toBe(true);
      expect((agent as any).agentMessages.some((m: any) => m.role === MessageRole.User)).toBe(true);
    });
  });

  describe('mute controls', () => {
    it('mutes, unmutes and toggles state', async () => {
      await voiceAgent.connect();
      const emitSpy = jest.spyOn(voiceAgent, 'emit');

      voiceAgent.mute();
      expect(voiceAgent.isMuted).toBe(true);
      expect(mockWebRTCTransport.setMuted).toHaveBeenCalledWith(true);

      voiceAgent.unmute();
      expect(voiceAgent.isMuted).toBe(false);
      expect(mockWebRTCTransport.setMuted).toHaveBeenCalledWith(false);

      const afterToggle1 = voiceAgent.toggleMute();
      const afterToggle2 = voiceAgent.toggleMute();
      expect(afterToggle1).toBe(true);
      expect(afterToggle2).toBe(false);
      expect(emitSpy).toHaveBeenCalledWith(AgentEvent.MuteStateEvent, true);
      expect(emitSpy).toHaveBeenCalledWith(AgentEvent.MuteStateEvent, false);
    });
  });

  describe('switchAgent()', () => {
    it('throws when not connected', async () => {
      await expect(
        voiceAgent.switchAgent({ id: 'new-agent', inputOptions: {}, outputOptions: {} } as any),
      ).rejects.toThrow('Cannot switch agent: not connected');
    });

    it('sends configuration when connected', async () => {
      await voiceAgent.connect();
      (voiceAgent as any).connectionState = ConnectionState.Connected;
      await voiceAgent.switchAgent({
        id: 'new-agent',
        inputOptions: mockAgentConfig.inputOptions,
        outputOptions: mockAgentConfig.outputOptions,
      } as any);
      expect(mockWebRTCTransport.sendConversationConfiguration).toHaveBeenCalled();
    });

    it('throws when grpc transport is unavailable', async () => {
      await voiceAgent.connect();
      (voiceAgent as any).connectionState = ConnectionState.Connected;
      mockWebRTCTransport.isGrpcConnected = false;
      await expect(
        voiceAgent.switchAgent({ id: 'new-agent', inputOptions: {}, outputOptions: {} } as any),
      ).rejects.toThrow('No active connection available for agent switch');
    });
  });

  describe('device switching fallback and resume', () => {
    it('falls back to reconnect when setOutputDevice fails', async () => {
      await voiceAgent.connect();
      mockWebRTCTransport.setOutputDevice.mockRejectedValueOnce(new Error('no sink'));
      const connectDeviceSpy = jest.spyOn(voiceAgent as any, 'connectDevice');
      await voiceAgent.setOutputMediaDevice('out-2');
      expect(connectDeviceSpy).toHaveBeenCalled();
    });

    it('falls back to reconnect when setInputDevice fails', async () => {
      await voiceAgent.connect();
      mockWebRTCTransport.setInputDevice.mockRejectedValueOnce(new Error('no mic'));
      const connectDeviceSpy = jest.spyOn(voiceAgent as any, 'connectDevice');
      await voiceAgent.setInputMediaDevice('in-2');
      expect(connectDeviceSpy).toHaveBeenCalled();
    });

    it('resumeAudio no-ops without transport and calls through with transport', async () => {
      await expect(voiceAgent.resumeAudio()).resolves.not.toThrow();
      await voiceAgent.connect();
      await voiceAgent.resumeAudio();
      expect(mockWebRTCTransport.resumeAudio).toHaveBeenCalled();
    });
  });

  describe('send text and channel switching edge cases', () => {
    it('emits error when grpc disconnects after ensureConnected', async () => {
      await voiceAgent.connect();
      mockWebRTCTransport.isGrpcConnected = false;
      const emitSpy = jest.spyOn(voiceAgent, 'emit');
      await voiceAgent.onSendText('hello');
      expect(emitSpy).toHaveBeenCalledWith(
        AgentEvent.ErrorEvent,
        'client',
        'No connection available to send text',
      );
    });

    it('emits error and clears transport when reconnectAudio fails', async () => {
      const textConfig = {
        ...mockAgentConfig,
        inputOptions: { ...mockAgentConfig.inputOptions, channel: Channel.Text },
        outputOptions: { ...mockAgentConfig.outputOptions, channel: Channel.Text },
      };
      const agent = new VoiceAgent(mockConnectionConfig as any, textConfig as any);
      await agent.connect();
      mockWebRTCTransport.reconnectAudio.mockRejectedValueOnce(new Error('reconnect failed'));
      const emitSpy = jest.spyOn(agent, 'emit');

      await agent.setInputChannel(Channel.Audio);

      expect(emitSpy).toHaveBeenCalledWith(
        AgentEvent.ErrorEvent,
        'client',
        expect.stringContaining('Audio reconnect failed'),
      );
      expect((agent as any).webrtcTransport).toBeNull();
    });
  });

  describe('frequency analyser getters and transport getters', () => {
    it('returns byte frequency data when analysers are available', async () => {
      await voiceAgent.connect();
      const inputGet = jest.fn();
      const outputGet = jest.fn();
      mockWebRTCTransport.inputAnalyserNode = {
        frequencyBinCount: 16,
        getByteFrequencyData: inputGet,
      } as any;
      mockWebRTCTransport.outputAnalyserNode = {
        frequencyBinCount: 32,
        getByteFrequencyData: outputGet,
      } as any;

      const input = voiceAgent.getInputByteFrequencyData();
      const output = voiceAgent.getOutputByteFrequencyData();

      expect(input).toBeInstanceOf(Uint8Array);
      expect(output).toBeInstanceOf(Uint8Array);
      expect(input?.length).toBe(16);
      expect(output?.length).toBe(32);
      expect(inputGet).toHaveBeenCalled();
      expect(outputGet).toHaveBeenCalled();
    });

    it('exposes transport and webrtc connected state', async () => {
      expect(voiceAgent.transport).toBeNull();
      expect(voiceAgent.isWebRTCConnected).toBe(false);
      await voiceAgent.connect();
      expect(voiceAgent.transport).not.toBeNull();
      expect(voiceAgent.isWebRTCConnected).toBe(true);
    });
  });

  describe('platform-specific audio preparation', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('waits on android before creating transport', async () => {
      (isAndroidDevice as jest.Mock).mockReturnValue(true);
      const connectPromise = voiceAgent.connect();
      await Promise.resolve();
      jest.advanceTimersByTime(3000);
      await connectPromise;
      expect(WebRTCGrpcTransport.create).toHaveBeenCalled();
    });

    it('selects preferred iOS input device when available', async () => {
      (isAndroidDevice as jest.Mock).mockReturnValue(false);
      (isIosDevice as jest.Mock).mockReturnValue(true);
      (navigator.mediaDevices.enumerateDevices as jest.Mock).mockResolvedValueOnce([
        { kind: 'audioinput', label: 'Built-in Mic', deviceId: 'mic-1' },
        { kind: 'audioinput', label: 'AirPod Pro', deviceId: 'airpod-1' },
      ]);

      await voiceAgent.connect();
      expect(mockAgentConfig.inputOptions.device).toBe('airpod-1');
    });
  });
});
