/**
 * Tests for main SDK exports
 * 
 * Verifies that all important modules are correctly exported
 * from the package's main entry point.
 */

describe('SDK Exports', () => {
  it('should export VoiceAgent', async () => {
    const module = await import('@/rapida/agents/voice-agent');
    expect(module.VoiceAgent).toBeDefined();
  });

  it('should export Agent base class', async () => {
    const module = await import('@/rapida/agents/');
    expect(module.Agent).toBeDefined();
  });

  // The SDK no longer exposes standalone Input/Output modules under
  // `@/rapida/audio`.  Input and output behaviour is represented by the
  // `InputOptions`/`OutputOptions` classes exported from the agent-config
  // package; the following tests assert their presence indirectly.
  it('should export InputOptions via agent-config', async () => {
    const module = await import('@/rapida/types/agent-config');
    expect(module.InputOptions).toBeDefined();
  });

  it('should export OutputOptions via agent-config', async () => {
    const module = await import('@/rapida/types/agent-config');
    expect(module.OutputOptions).toBeDefined();
  });

  it('should export DeviceManager', async () => {
    const module = await import('@/rapida/devices/device-manager');
    expect(module.DeviceManager).toBeDefined();
  });

  it('should export Channel enum', async () => {
    const module = await import('@/rapida/types/channel');
    expect(module.Channel).toBeDefined();
    expect(module.Channel.Audio).toBe('audio');
    expect(module.Channel.Text).toBe('text');
  });

  it('should export ConnectionState enum', async () => {
    const module = await import('@/rapida/types/connection-state');
    expect(module.ConnectionState).toBeDefined();
    expect(module.ConnectionState.Connected).toBe('connected');
    expect(module.ConnectionState.Connecting).toBe('connecting');
    expect(module.ConnectionState.Disconnected).toBe('disconnected');
  });

  it('should export MessageRole enum', async () => {
    const module = await import('@/rapida/types/message');
    expect(module.MessageRole).toBeDefined();
    expect(module.MessageRole.User).toBe('user');
    expect(module.MessageRole.System).toBe('system');
  });

  it('should export MessageStatus enum', async () => {
    const module = await import('@/rapida/types/message');
    expect(module.MessageStatus).toBeDefined();
    expect(module.MessageStatus.Pending).toBe('pending');
    expect(module.MessageStatus.Complete).toBe('complete');
  });

  it('should export AgentEvent enum', async () => {
    const module = await import('@/rapida/types/agent-event');
    expect(module.AgentEvent).toBeDefined();
  });

  it('should export utility functions', async () => {
    const module = await import('@/rapida/utils');
    expect(module.isSafari).toBeDefined();
    expect(module.isChrome).toBeDefined();
    expect(module.toDate).toBeDefined();
  });

  it('should export audio compatibility functions', async () => {
    const module = await import('@/rapida/audio/compatibility');
    expect(module.isAndroidDevice).toBeDefined();
    expect(module.isIosDevice).toBeDefined();
  });

  it('should export InputOptions class', async () => {
    const module = await import('@/rapida/types/agent-config');
    expect(module.InputOptions).toBeDefined();
  });

  it('should export OutputOptions class', async () => {
    const module = await import('@/rapida/types/agent-config');
    expect(module.OutputOptions).toBeDefined();
  });
});

describe('SDK Type Definitions', () => {
  it('should have InputOptions class', async () => {
    const { InputOptions } = await import('@/rapida/types/agent-config');
    const { Channel } = await import('@/rapida/types/channel');
    const options = new InputOptions([Channel.Audio]);
    expect(options.channel).toBe(Channel.Audio);
  });

  it('should have OutputOptions class', async () => {
    const { OutputOptions } = await import('@/rapida/types/agent-config');
    const { Channel } = await import('@/rapida/types/channel');
    const options = new OutputOptions([Channel.Audio]);
    expect(options.channel).toBe(Channel.Audio);
  });

  it('should have Message interface', async () => {
    const { MessageRole, MessageStatus } = await import('@/rapida/types/message');
    const message: import('@/rapida/types/message').Message = {
      id: 'test',
      role: MessageRole.User,
      messages: ['Hello'],
      time: new Date(),
      status: MessageStatus.Complete,
    };
    expect(message.id).toBe('test');
  });
});

describe('Main Entry Point', () => {
  it('loads src/index.ts and exposes key SDK exports', async () => {
    const sdk = await import('@/rapida/index');

    expect(sdk.VoiceAgent).toBeDefined();
    expect(sdk.AgentConfig).toBeDefined();
    expect(sdk.InputOptions).toBeDefined();
    expect(sdk.OutputOptions).toBeDefined();
    expect(sdk.Channel).toBeDefined();
    expect(sdk.ConnectionState).toBeDefined();
    expect(sdk.isWindows).toBeDefined();
    expect(sdk.isLinux).toBeDefined();
    expect(sdk.hasFullWebRTCAudioSupport).toBeDefined();
    expect(sdk.getRecommendedAudioSettings).toBeDefined();
    expect(sdk.CreateMessageMetric).toBeDefined();
    expect(sdk.GetAssistant).toBeDefined();
  });
});
