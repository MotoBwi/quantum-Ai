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
 *
 */
import { AssistantDefinition, User } from "@/rapida/clients/protos/common_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import { StringArrayToAny, StringToAny } from "@/rapida/utils/rapida_value";
import { Channel } from "@/rapida/types/channel";
// For constructing default stream options
import {
  StreamConfig,
  AudioConfig,
  TextConfig,
} from "@/rapida/clients/protos/talk-api_pb";

/**
 * Input options for the agent (microphone/recording settings)
 */
export class InputOptions {
  /** Enabled channels for input */
  channels: Channel[] = [Channel.Audio, Channel.Text];

  /** Default input channel */
  channel: Channel = Channel.Audio;

  /** Input device ID (microphone) */
  device?: string;

  /** ICE servers for WebRTC (STUN/TURN) */
  iceServers?: RTCIceServer[];

  /**
   * Returns a default stream configuration based on the currently selected
   * channel.  This mirrors the protobuf `StreamConfig` type used by the
   * backend so consumers can easily build conversation initialization
   * payloads.
   */
  get defaultInputStreamOption(): StreamConfig {
    const cfg = new StreamConfig();
    if (this.channel === Channel.Audio) {
      const audio = new AudioConfig();
      // additional defaults (samplerate, audioformat, channels) may be set by
      // caller after obtaining the config if desired.
      cfg.setAudio(audio);
    } else if (this.channel === Channel.Text) {
      const text = new TextConfig();
      cfg.setText(text);
    }
    return cfg;
  }

  constructor(
    channels: Channel[],
    channel?: Channel,
    deviceId?: string,
    iceServers?: RTCIceServer[]
  ) {
    this.channels = channels;
    if (channel) this.channel = channel;
    if (deviceId) this.device = deviceId;
    this.iceServers = iceServers;
  }

}

/**
 * Output options for the agent (speaker/playback settings)
 */
export class OutputOptions {
  /** Enabled channels for output */
  channels: Channel[] = [Channel.Audio, Channel.Text];

  /** Default output channel */
  channel: Channel = Channel.Audio;

  /** Output device ID (speaker) */
  device?: string;

  /**
   * Default stream configuration for output.  Returns a protobuf-style
   * `StreamConfig` instance matching the current channel.
   */
  get defaultOutputStreamOption(): StreamConfig {
    const cfg = new StreamConfig();
    if (this.channel === Channel.Audio) {
      const audio = new AudioConfig();
      cfg.setAudio(audio);
    } else if (this.channel === Channel.Text) {
      const text = new TextConfig();
      cfg.setText(text);
    }
    return cfg;
  }

  constructor(channels: Channel[], channel?: Channel, deviceId?: string) {
    this.channels = channels;
    if (channel) this.channel = channel;
    if (deviceId) this.device = deviceId;
  }
}

export class UserIdentifier {
  /** User identifier type */
  id: string;

  // name of user identifier
  name?: string;


  constructor(id: string, name?: string) {
    this.id = id;
    this.name = name;

  }
}
/**
 * Represents the configuration settings for an agent.
 * This includes the agent's unique identifier, version, and configurable arguments.
 */
export class AgentConfig {
  /**
   * Unique identifier for the agent.
   */
  id: string;

  /**
   * (Optional) Version number of the agent.
   */
  version?: string;

  /**
   * arguments for assistant
   */
  arguments?: Map<string, google_protobuf_any_pb.Any>;

  /**
   * options for assistants
   */
  options?: Map<string, google_protobuf_any_pb.Any>;

  /**
   * metadata for assistant request
   */
  metadata?: Map<string, google_protobuf_any_pb.Any>;

  /**
   *
   */
  inputOptions: InputOptions;

  /**
   *
   */
  outputOptions: OutputOptions;


  /**
   * user identifier for conversation
   */
  userIdentifier?: UserIdentifier;

  /**
   * Initializes a new instance of `AgentConfig`.
   *
   * @param id - Unique identifier for the agent.
   * @param version - (Optional) Version number of the agent.
   * @param argument - (Optional) Configuration arguments for the agent.
   */
  constructor(
    id: string,
    inputOptions: InputOptions = new InputOptions([
      Channel.Audio,
      Channel.Text,
    ], Channel.Text),
    outputOptions: OutputOptions = new OutputOptions([Channel.Audio, Channel.Text], Channel.Text),
    version?: string,
    argument?: Map<string, google_protobuf_any_pb.Any>,
    options?: Map<string, google_protobuf_any_pb.Any>,
    metadata?: Map<string, google_protobuf_any_pb.Any>,
    userIdentifier?: UserIdentifier,
  ) {
    this.id = id;
    this.version = version;
    this.arguments = argument;
    this.options = options;
    this.metadata = metadata;
    this.inputOptions = inputOptions;
    this.outputOptions = outputOptions;
    this.userIdentifier = userIdentifier;
  }

  /**
   * Retrieves the assistant definition for this agent.
   *
   * @returns {AssistantDefinition} A configured `AssistantDefinition` instance with the agent's details.
   */
  get definition(): AssistantDefinition {
    const def = new AssistantDefinition();
    def.setAssistantid(this.id); // Sets the agent's unique ID.
    if (this.version) {
      def.setVersion(this.version); // Sets the agent's version if provided.
    }

    return def;
  }

  /**
   * for adding custom dictionary
   * it allows user to add custom keywords to given agent it will perform correction
   * @param keywords
   */
  addKeywords(keywords: string[]): this {
    if (this.options == undefined) this.options = new Map();
    this.options["keywords"] = StringArrayToAny(keywords);
    return this;
  }

  /**
   * Want to add other options to override
   * @param k
   * @param otp
   * @returns
   */
  addCustomOption(k: string, otp: google_protobuf_any_pb.Any): this {
    if (this.options == undefined) this.options = new Map();
    this.options.set(k, otp);
    return this;
  }

  /**
   *
   * @param k
   * @param meta
   * @returns
   */
  addMetadata(k: string, meta: google_protobuf_any_pb.Any): this {
    if (this.metadata == undefined) this.metadata = new Map();
    this.metadata.set(k, meta);
    return this;
  }

  /**
   *
   * @param k
   * @param value
   * @returns
   */
  addArgument(k: string, value: string): this {
    if (this.arguments == undefined) this.arguments = new Map();
    this.arguments?.set(k, StringToAny(value));
    return this;
  }

  /**
   * Set the user identifier for the conversation.
   * @param id - Unique user identifier
   * @param name - Optional display name
   * @returns this for chaining
   */
  setUserIdentifier(id: string, name?: string): this {
    this.userIdentifier = new UserIdentifier(id, name);
    return this;
  }

}
