/**
 * Tests for AgentConfig and related types
 */

import {
  AgentConfig,
  InputOptions,
  OutputOptions,
  UserIdentifier,
} from '@/rapida/types/agent-config';
import { Channel } from '@/rapida/types/channel';
import { Any } from 'google-protobuf/google/protobuf/any_pb';

describe('InputOptions', () => {
  let inputOptions: InputOptions;

  beforeEach(() => {
    inputOptions = new InputOptions([Channel.Audio, Channel.Text]);
  });

  it('should have channels property', () => {
    expect(inputOptions.channels).toBeDefined();
    expect(inputOptions.channels).toContain(Channel.Audio);
  });

  it('should have default channel as Audio', () => {
    expect(inputOptions.channel).toBe(Channel.Audio);
  });

  it('should allow optional device', () => {
    const options = new InputOptions([Channel.Audio], Channel.Audio, 'device-123');
    expect(options.device).toBe('device-123');
  });

  it('should return stream config for audio channel', () => {
    inputOptions.channel = Channel.Audio;

    const streamConfig = inputOptions.defaultInputStreamOption;
    expect(streamConfig).toBeDefined();
    // audio channel should provide an AudioConfig
    expect(streamConfig.getAudio()).toBeDefined();
  });

  it('should handle text channel stream config', () => {
    inputOptions.channel = Channel.Text;

    const streamConfig = inputOptions.defaultInputStreamOption;

    expect(streamConfig).toBeDefined();
    // For text channel, audio config should not be set
    expect(streamConfig.getAudio()).toBeUndefined();
    expect(streamConfig.getText()).toBeDefined();
  });

  it('should keep ice servers when provided', () => {
    const options = new InputOptions(
      [Channel.Audio],
      Channel.Audio,
      'device-123',
      [{ urls: 'stun:example.com' }],
    );
    expect(options.iceServers).toEqual([{ urls: 'stun:example.com' }]);
  });
});

describe('OutputOptions', () => {
  let outputOptions: OutputOptions;

  beforeEach(() => {
    outputOptions = new OutputOptions([Channel.Audio, Channel.Text]);
  });

  it('should have channels property', () => {
    expect(outputOptions.channels).toBeDefined();
    expect(outputOptions.channels).toContain(Channel.Audio);
  });

  it('should have default channel as Audio', () => {
    expect(outputOptions.channel).toBe(Channel.Audio);
  });

  it('should allow optional device', () => {
    const options = new OutputOptions([Channel.Audio], Channel.Audio, 'speaker-456');
    expect(options.device).toBe('speaker-456');
  });

  it('should return stream config for audio channel', () => {
    outputOptions.channel = Channel.Audio;

    const streamConfig = outputOptions.defaultOutputStreamOption;

    expect(streamConfig).toBeDefined();
    expect(streamConfig.getAudio()).toBeDefined();
  });

  it('should return stream config for text channel', () => {
    outputOptions.channel = Channel.Text;
    const streamConfig = outputOptions.defaultOutputStreamOption;
    expect(streamConfig.getAudio()).toBeUndefined();
    expect(streamConfig.getText()).toBeDefined();
  });
});

describe('UserIdentifier', () => {
  it('sets id and optional name', () => {
    const user = new UserIdentifier('u-1', 'Alice');
    expect(user.id).toBe('u-1');
    expect(user.name).toBe('Alice');
  });
});

describe('AgentConfig', () => {
  it('builds assistant definition with id and version', () => {
    const cfg = new AgentConfig(
      'assistant-1',
      new InputOptions([Channel.Audio], Channel.Audio),
      new OutputOptions([Channel.Audio], Channel.Audio),
      'v1',
    );

    const def = cfg.definition;
    expect(def.getAssistantid()).toBe('assistant-1');
    expect(def.getVersion()).toBe('v1');
  });

  it('supports default input/output options', () => {
    const cfg = new AgentConfig('assistant-default');
    expect(cfg.inputOptions.channel).toBe(Channel.Text);
    expect(cfg.outputOptions.channel).toBe(Channel.Text);
  });

  it('addKeywords initializes options and stores keyword any', () => {
    const cfg = new AgentConfig('assistant-2');
    cfg.addKeywords(['alpha', 'beta']);
    expect(cfg.options).toBeDefined();
    // implementation currently stores via object-style indexing.
    expect((cfg.options as any).keywords).toBeDefined();
  });

  it('addCustomOption initializes options map and returns this', () => {
    const cfg = new AgentConfig('assistant-3');
    const anyValue = new Any();
    const returned = cfg.addCustomOption('mode', anyValue);
    expect(returned).toBe(cfg);
    expect(cfg.options?.get('mode')).toBe(anyValue);
  });

  it('addMetadata initializes metadata map and returns this', () => {
    const cfg = new AgentConfig('assistant-4');
    const meta = new Any();
    const returned = cfg.addMetadata('source', meta);
    expect(returned).toBe(cfg);
    expect(cfg.metadata?.get('source')).toBe(meta);
  });

  it('addArgument initializes arguments map and stores string payload', () => {
    const cfg = new AgentConfig('assistant-5');
    const returned = cfg.addArgument('lang', 'en');
    expect(returned).toBe(cfg);
    expect(cfg.arguments?.has('lang')).toBe(true);
  });

  it('setUserIdentifier sets user id and optional name', () => {
    const cfg = new AgentConfig('assistant-6');
    const returned = cfg.setUserIdentifier('user-1', 'Bob');
    expect(returned).toBe(cfg);
    expect(cfg.userIdentifier?.id).toBe('user-1');
    expect(cfg.userIdentifier?.name).toBe('Bob');
  });
});
