/**
 * Tests for Agent base class
 * 
 * Agent provides:
 * - Connection management
 * - Message handling
 * - Event emission
 * - Metrics and feedback
 * - Agent switching
 */

import { EventEmitter } from 'events';

// Mock the protobuf classes
jest.mock('@/rapida/clients/protos/talk-api_pb', () => ({
  AssistantMessagingRequest: jest.fn(),
  AssistantMessagingResponse: {
    DataCase: {
      DATA_NOT_SET: 0,
      INTERRUPTION: 1,
      USER: 2,
      ASSISTANT: 3,
      CONFIGURATION: 4,
      ACTION: 5,
    },
  },
  CreateConversationMetricRequest: jest.fn().mockImplementation(() => ({
    setAssistantid: jest.fn(),
    setAssistantconversationid: jest.fn(),
    addMetrics: jest.fn(),
  })),
  CreateMessageMetricRequest: jest.fn().mockImplementation(() => ({
    setAssistantid: jest.fn(),
    setAssistantconversationid: jest.fn(),
    setMessageid: jest.fn(),
    addMetrics: jest.fn(),
  })),
  StreamMode: {
    STREAM_MODE_AUDIO: 1,
    STREAM_MODE_TEXT: 2,
    STREAM_MODE_BOTH: 3,
  },
  ConversationInitialization: jest.fn().mockImplementation(() => {
    const options = new Map();
    const metadata = new Map();
    const args = new Map();
    return {
      setAssistantconversationid: jest.fn(),
      setAssistant: jest.fn(),
      getOptionsMap: jest.fn(() => options),
      getMetadataMap: jest.fn(() => metadata),
      getArgsMap: jest.fn(() => args),
      setStreammode: jest.fn(),
      setWeb: jest.fn(),
    };
  }),
  ConversationConfiguration: jest.fn().mockImplementation(() => ({
    setStreammode: jest.fn(),
  })),
  WebIdentity: jest.fn().mockImplementation(() => ({
    setUserid: jest.fn(),
  })),
}));

jest.mock('@/rapida/clients/protos/webrtc_pb', () => ({
  WebTalkRequest: jest.fn().mockImplementation(() => ({
    hasInitialization: jest.fn().mockReturnValue(false),
    hasConfiguration: jest.fn().mockReturnValue(false),
    hasMessage: jest.fn().mockReturnValue(false),
    hasSignaling: jest.fn().mockReturnValue(false),
    getMessage: jest.fn(),
    setInitialization: jest.fn(),
    setConfiguration: jest.fn(),
  })),
  WebTalkResponse: {
    DataCase: {
      USER: 2,
      ASSISTANT: 3,
    },
  },
}));

jest.mock('@/rapida/clients/protos/assistant-api_pb', () => ({
  GetAssistantRequest: jest.fn().mockImplementation(() => ({
    setAssistantdefinition: jest.fn(),
  })),
  GetAssistantResponse: jest.fn(),
}));

jest.mock('@/rapida/clients/protos/common_pb', () => ({
  AssistantDefinition: jest.fn().mockImplementation(() => {
    let assistantId = '';
    let version = '';
    return {
      setAssistantid: jest.fn((v: string) => { assistantId = v; }),
      getAssistantid: jest.fn(() => assistantId),
      setVersion: jest.fn((v: string) => { version = v; }),
      getVersion: jest.fn(() => version),
    };
  }),
  AudioConfig: {
    AudioFormat: { LINEAR16: 1 },
  },
  StreamConfig: jest.fn().mockImplementation(() => ({
    setAudio: jest.fn(),
  })),
  Metric: jest.fn().mockImplementation(() => ({
    setName: jest.fn(),
    setValue: jest.fn(),
    setDescription: jest.fn(),
  })),
  AssistantConversationConfiguration: jest.fn(),
  AssistantConversationMessageTextContent: jest.fn().mockImplementation(() => ({
    setContent: jest.fn(),
  })),
  AssistantConversationUserMessage: jest.fn().mockImplementation(() => ({
    setId: jest.fn(),
    setText: jest.fn(),
  })),
  AssistantConversationMessageAudioContent: jest.fn().mockImplementation(() => ({
    setContent: jest.fn(),
  })),
}));

jest.mock('@/rapida/clients/talk', () => ({
  AssistantTalk: jest.fn(),
  CreateConversationMetric: jest.fn().mockResolvedValue({}),
  CreateMessageMetric: jest.fn().mockResolvedValue({}),
}));

jest.mock('@/rapida/clients/assistant', () => ({
  GetAssistant: jest.fn().mockResolvedValue({
    getAssistant: () => ({
      getName: () => 'Test Assistant',
      getId: () => 'assistant-123',
    }),
  }),
}));

jest.mock('@/rapida/types/feedback', () => ({
  getFeedback: jest.fn(),
}));

import {
  Agent,
  buildConfigurationRequest,
  buildInitializationRequest,
  describeRequest,
  describeResponse,
  resolveStreamMode,
} from '@/rapida/agents/';
import { ConnectionState } from '@/rapida/types/connection-state';
import { AgentEvent } from '@/rapida/types/agent-event';
import { MessageRole, MessageStatus } from '@/rapida/types/message';
import { CreateConversationMetric, CreateMessageMetric } from '@/rapida/clients/talk';
import { GetAssistant } from '@/rapida/clients/assistant';
import { getFeedback } from '@/rapida/types/feedback';
import { Channel } from '@/rapida/types/channel';

// Create a concrete implementation for testing since Agent may be abstract
class TestAgent extends Agent {
  constructor(connection: any, config: any, callback?: any) {
    super(connection, config, callback);
  }

  // Expose protected methods for testing
  public getConnectionState() {
    return this.connectionState;
  }

  public getAgentConfig() {
    return this.agentConfig;
  }

  public setConversation(id: string) {
    this.changeConversation(id);
  }

  public disconnectBase() {
    return this.disconnectAgent();
  }
}

describe('Agent', () => {
  let agent: TestAgent;

  const mockConnectionConfig = {
    endpoint: 'https://api.test.com',
    onConnectionChange: jest.fn(),
  };

  const mockAgentConfig = {
    id: 'test-agent',
    inputOptions: {
      channel: 'audio',
      recorderOption: { sampleRate: 16000, format: 'pcm' },
    },
    outputOptions: {
      channel: 'audio',
      playerOption: { sampleRate: 24000, format: 'pcm' },
    },
    definition: {
      getAssistantid: () => 'test-agent',
    },
    version: 'v1',
  };

  beforeEach(() => {
    jest.clearAllMocks();
    agent = new TestAgent(mockConnectionConfig, mockAgentConfig);
  });

  describe('constructor', () => {
    it('should initialize with correct config', () => {
      expect(agent.getAgentConfig()).toBe(mockAgentConfig);
    });

    it('should initialize with disconnected state', () => {
      expect(agent.state).toBe(ConnectionState.Disconnected);
    });

    it('should accept optional callback', () => {
      const callback = { onUserMessage: jest.fn() };
      const agentWithCallback = new TestAgent(mockConnectionConfig, mockAgentConfig, callback);

      expect(agentWithCallback).toBeInstanceOf(Agent);
    });

    it('should initialize empty messages array', () => {
      expect(agent.messages).toEqual([]);
    });
  });

  describe('state getter', () => {
    it('should return current connection state', () => {
      expect(agent.state).toBe(ConnectionState.Disconnected);
    });
  });

  describe('isConnected getter', () => {
    it('should return false when disconnected', () => {
      expect(agent.isConnected).toBe(false);
    });
  });

  describe('conversationId getter', () => {
    it('should return undefined initially', () => {
      expect(agent.conversationId).toBeUndefined();
    });
  });

  describe('messages getter', () => {
    it('should return copy of messages array', () => {
      const messages = agent.messages;
      expect(messages).toEqual([]);

      // Modifying the returned array should not affect the internal array
      messages.push({ id: 'test', role: MessageRole.User, messages: [], time: new Date(), status: MessageStatus.Complete });
      expect(agent.messages).toEqual([]);
    });
  });

  describe('agentConfiguration getter', () => {
    it('should return agent config', () => {
      expect(agent.agentConfiguration).toBe(mockAgentConfig);
    });
  });

  describe('event emission', () => {
    it('should emit events', () => {
      const listener = jest.fn();
      agent.on(AgentEvent.ConnectionChanged, listener);

      agent.emit(AgentEvent.ConnectionChanged, ConnectionState.Connected);

      expect(listener).toHaveBeenCalledWith(ConnectionState.Connected);
    });

    it('should support multiple listeners', () => {
      const listener1 = jest.fn();
      const listener2 = jest.fn();

      agent.on(AgentEvent.ConnectionChanged, listener1);
      agent.on(AgentEvent.ConnectionChanged, listener2);

      agent.emit(AgentEvent.ConnectionChanged, ConnectionState.Connected);

      expect(listener1).toHaveBeenCalled();
      expect(listener2).toHaveBeenCalled();
    });

    it('should allow removing listeners', () => {
      const listener = jest.fn();
      agent.on(AgentEvent.ConnectionChanged, listener);
      agent.off(AgentEvent.ConnectionChanged, listener);

      agent.emit(AgentEvent.ConnectionChanged, ConnectionState.Connected);

      expect(listener).not.toHaveBeenCalled();
    });
  });

  describe('agentMessages', () => {
    it('should store messages', () => {
      const message = {
        id: 'msg-1',
        role: MessageRole.User,
        messages: ['Hello'],
        time: new Date(),
        status: MessageStatus.Complete,
      };

      agent.agentMessages.push(message);

      expect(agent.agentMessages).toHaveLength(1);
      expect(agent.agentMessages[0]).toEqual(message);
    });

    it('should handle multiple messages', () => {
      const userMessage = {
        id: 'msg-1',
        role: MessageRole.User,
        messages: ['Hello'],
        time: new Date(),
        status: MessageStatus.Complete,
      };

      const systemMessage = {
        id: 'msg-2',
        role: MessageRole.System,
        messages: ['Hi there!'],
        time: new Date(),
        status: MessageStatus.Complete,
      };

      agent.agentMessages.push(userMessage);
      agent.agentMessages.push(systemMessage);

      expect(agent.agentMessages).toHaveLength(2);
      expect(agent.agentMessages[0].role).toBe(MessageRole.User);
      expect(agent.agentMessages[1].role).toBe(MessageRole.System);
    });

    it('should handle pending messages', () => {
      const pendingMessage = {
        id: 'msg-pending',
        role: MessageRole.System,
        messages: ['Processing...'],
        time: new Date(),
        status: MessageStatus.Pending,
      };

      agent.agentMessages.push(pendingMessage);

      expect(agent.agentMessages[0].status).toBe(MessageStatus.Pending);
    });
  });

  describe('advanced agent behavior', () => {
    it('throws on base switchAgent()', async () => {
      await expect(agent.switchAgent(mockAgentConfig as any)).rejects.toThrow(
        'switchAgent must be implemented by subclass',
      );
    });

    it('registers callback', () => {
      const cb = { onUserMessage: jest.fn() };
      agent.registerCallback(cb as any);
      expect((agent as any).agentCallbacks).toContain(cb);
    });

    it('disconnectAgent() is idempotent when already disconnected', async () => {
      await agent.disconnectBase();
      expect(mockConnectionConfig.onConnectionChange).not.toHaveBeenCalled();
    });

    it('createMessageMetric throws without active conversation', () => {
      expect(() =>
        agent.createMessageMetric('m-1', [{ name: 'n', description: 'd', value: 'good' }]),
      ).toThrow('Cannot create message metric: no active conversation');
    });

    it('createConversationMetric throws without active conversation', () => {
      expect(() =>
        agent.createConversationMetric([{ name: 'n', description: 'd', value: 'good' }]),
      ).toThrow('Cannot create conversation metric: no active conversation');
    });

    it('creates message metric and emits feedback', async () => {
      (getFeedback as jest.Mock).mockReturnValue('POSITIVE');
      const feedbackListener = jest.fn();
      agent.on(AgentEvent.FeedbackEvent, feedbackListener);
      agent.setConversation('conv-1');
      agent.agentMessages = [
        {
          id: 'msg-1',
          role: MessageRole.System,
          messages: ['hello'],
          time: new Date(),
          status: MessageStatus.Complete,
        } as any,
      ];

      agent.createMessageMetric('msg-1', [
        { name: 'quality', description: 'score', value: 'good' },
      ]);

      await Promise.resolve();

      expect(CreateMessageMetric).toHaveBeenCalled();
      expect(feedbackListener).toHaveBeenCalledWith('message', 'POSITIVE');
      expect((agent.agentMessages[0] as any).feedback).toBe('POSITIVE');
    });

    it('handles empty message metrics safely', async () => {
      agent.setConversation('conv-1');
      agent.createMessageMetric('msg-1', []);
      await Promise.resolve();
      expect(CreateMessageMetric).toHaveBeenCalled();
    });

    it('creates conversation metric when conversation exists', () => {
      agent.setConversation('conv-2');
      agent.createConversationMetric([
        { name: 'latency', description: 'ms', value: '123' },
      ]);
      expect(CreateConversationMetric).toHaveBeenCalled();
    });

    it('returns assistant from getAssistant()', async () => {
      const result = await agent.getAssistant();
      expect(GetAssistant).toHaveBeenCalled();
      expect(result).toBeDefined();
    });

    it('changeConversation sets conversation once', () => {
      agent.setConversation('conv-1');
      agent.setConversation('conv-2');
      expect(agent.conversationId).toBe('conv-1');
    });
  });

  describe('request/response helpers', () => {
    it('describeRequest formats known request types', () => {
      expect(
        describeRequest({
          hasInitialization: () => true,
          hasConfiguration: () => false,
          hasMessage: () => false,
          hasSignaling: () => false,
        } as any),
      ).toBe('Initialization');

      expect(
        describeRequest({
          hasInitialization: () => false,
          hasConfiguration: () => false,
          hasMessage: () => true,
          getMessage: () => ({ getText: () => 'hello world' }),
          hasSignaling: () => false,
        } as any),
      ).toContain('Text(');
    });

    it('describeResponse formats empty and mixed responses', () => {
      expect(
        describeResponse({
          hasInitialization: () => false,
          hasConfiguration: () => false,
          hasAssistant: () => false,
          hasUser: () => false,
          hasInterruption: () => false,
          hasDirective: () => false,
          hasSignaling: () => false,
        } as any),
      ).toBe('Empty');

      const mixed = describeResponse({
        hasInitialization: () => true,
        hasConfiguration: () => true,
        hasAssistant: () => true,
        getAssistant: () => ({ getText: () => 'assistant text' }),
        hasUser: () => true,
        getUser: () => ({ getText: () => 'user text' }),
        hasInterruption: () => true,
        hasDirective: () => true,
        hasSignaling: () => true,
      } as any);

      expect(mixed).toContain('Initialization');
      expect(mixed).toContain('Configuration');
      expect(mixed).toContain('Assistant(');
      expect(mixed).toContain('User(');
      expect(mixed).toContain('Interruption');
      expect(mixed).toContain('Directive');
      expect(mixed).toContain('Signaling');
    });

    it('resolveStreamMode maps channels', () => {
      expect(resolveStreamMode(Channel.Audio)).toBeDefined();
      expect(resolveStreamMode(Channel.Text)).toBeDefined();
      expect(resolveStreamMode('unknown' as any)).toBeDefined();
    });

    it('builds initialization/configuration requests', () => {
      const config = {
        definition: {},
        options: new Map([['k1', { x: 1 }]]),
        metadata: new Map([['k2', { y: 2 }]]),
        arguments: new Map([['k3', { z: 3 }]]),
        inputOptions: { channel: Channel.Text },
        userIdentifier: { id: 'user-1' },
      } as any;

      const initReq = buildInitializationRequest(config, 'conv-10');
      expect(initReq).toBeDefined();

      const confReq = buildConfigurationRequest(Channel.Audio);
      expect(confReq).toBeDefined();
    });
  });
});
