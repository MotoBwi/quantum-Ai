// package: talk_api
// file: talk-api.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as common_pb from "./common_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ConversationToolCall extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getToolid(): string;
  setToolid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getArgsMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearArgsMap(): void;
  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationToolCall.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationToolCall): ConversationToolCall.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversationToolCall, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationToolCall;
  static deserializeBinaryFromReader(message: ConversationToolCall, reader: jspb.BinaryReader): ConversationToolCall;
}

export namespace ConversationToolCall {
  export type AsObject = {
    id: string,
    toolid: string,
    name: string,
    argsMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ConversationToolResult extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getToolid(): string;
  setToolid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getArgsMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearArgsMap(): void;
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationToolResult.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationToolResult): ConversationToolResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversationToolResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationToolResult;
  static deserializeBinaryFromReader(message: ConversationToolResult, reader: jspb.BinaryReader): ConversationToolResult;
}

export namespace ConversationToolResult {
  export type AsObject = {
    id: string,
    toolid: string,
    name: string,
    argsMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    success: boolean,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ConversationMetric extends jspb.Message {
  getAssistantconversationid(): string;
  setAssistantconversationid(value: string): void;

  clearMetricsList(): void;
  getMetricsList(): Array<common_pb.Metric>;
  setMetricsList(value: Array<common_pb.Metric>): void;
  addMetrics(value?: common_pb.Metric, index?: number): common_pb.Metric;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationMetric.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationMetric): ConversationMetric.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversationMetric, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationMetric;
  static deserializeBinaryFromReader(message: ConversationMetric, reader: jspb.BinaryReader): ConversationMetric;
}

export namespace ConversationMetric {
  export type AsObject = {
    assistantconversationid: string,
    metricsList: Array<common_pb.Metric.AsObject>,
  }
}

export class ConversationMetadata extends jspb.Message {
  getAssistantconversationid(): string;
  setAssistantconversationid(value: string): void;

  clearMetadataList(): void;
  getMetadataList(): Array<common_pb.Metadata>;
  setMetadataList(value: Array<common_pb.Metadata>): void;
  addMetadata(value?: common_pb.Metadata, index?: number): common_pb.Metadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationMetadata): ConversationMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationMetadata;
  static deserializeBinaryFromReader(message: ConversationMetadata, reader: jspb.BinaryReader): ConversationMetadata;
}

export namespace ConversationMetadata {
  export type AsObject = {
    assistantconversationid: string,
    metadataList: Array<common_pb.Metadata.AsObject>,
  }
}

export class ConversationDirective extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getType(): ConversationDirective.DirectiveTypeMap[keyof ConversationDirective.DirectiveTypeMap];
  setType(value: ConversationDirective.DirectiveTypeMap[keyof ConversationDirective.DirectiveTypeMap]): void;

  getArgsMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearArgsMap(): void;
  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationDirective.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationDirective): ConversationDirective.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversationDirective, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationDirective;
  static deserializeBinaryFromReader(message: ConversationDirective, reader: jspb.BinaryReader): ConversationDirective;
}

export namespace ConversationDirective {
  export type AsObject = {
    id: string,
    type: ConversationDirective.DirectiveTypeMap[keyof ConversationDirective.DirectiveTypeMap],
    argsMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export interface DirectiveTypeMap {
    DIRECTIVE_TYPE_UNSPECIFIED: 0;
    END_CONVERSATION: 1;
    TRANSFER_CONVERSATION: 2;
  }

  export const DirectiveType: DirectiveTypeMap;
}

export class ConversationError extends jspb.Message {
  getAssistantconversationid(): string;
  setAssistantconversationid(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  getDetailsMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearDetailsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationError.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationError): ConversationError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversationError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationError;
  static deserializeBinaryFromReader(message: ConversationError, reader: jspb.BinaryReader): ConversationError;
}

export namespace ConversationError {
  export type AsObject = {
    assistantconversationid: string,
    message: string,
    detailsMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
  }
}

export class ConversationEvent extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDataMap(): jspb.Map<string, string>;
  clearDataMap(): void;
  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationEvent): ConversationEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversationEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationEvent;
  static deserializeBinaryFromReader(message: ConversationEvent, reader: jspb.BinaryReader): ConversationEvent;
}

export namespace ConversationEvent {
  export type AsObject = {
    id: string,
    name: string,
    dataMap: Array<[string, string]>,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class AudioConfig extends jspb.Message {
  getSamplerate(): number;
  setSamplerate(value: number): void;

  getAudioformat(): AudioConfig.AudioFormatMap[keyof AudioConfig.AudioFormatMap];
  setAudioformat(value: AudioConfig.AudioFormatMap[keyof AudioConfig.AudioFormatMap]): void;

  getChannels(): number;
  setChannels(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AudioConfig.AsObject;
  static toObject(includeInstance: boolean, msg: AudioConfig): AudioConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AudioConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AudioConfig;
  static deserializeBinaryFromReader(message: AudioConfig, reader: jspb.BinaryReader): AudioConfig;
}

export namespace AudioConfig {
  export type AsObject = {
    samplerate: number,
    audioformat: AudioConfig.AudioFormatMap[keyof AudioConfig.AudioFormatMap],
    channels: number,
  }

  export interface AudioFormatMap {
    LINEAR16: 0;
    MULAW8: 1;
  }

  export const AudioFormat: AudioFormatMap;
}

export class TextConfig extends jspb.Message {
  getCharset(): string;
  setCharset(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextConfig.AsObject;
  static toObject(includeInstance: boolean, msg: TextConfig): TextConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TextConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextConfig;
  static deserializeBinaryFromReader(message: TextConfig, reader: jspb.BinaryReader): TextConfig;
}

export namespace TextConfig {
  export type AsObject = {
    charset: string,
  }
}

export class StreamConfig extends jspb.Message {
  hasAudio(): boolean;
  clearAudio(): void;
  getAudio(): AudioConfig | undefined;
  setAudio(value?: AudioConfig): void;

  hasText(): boolean;
  clearText(): void;
  getText(): TextConfig | undefined;
  setText(value?: TextConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamConfig.AsObject;
  static toObject(includeInstance: boolean, msg: StreamConfig): StreamConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamConfig;
  static deserializeBinaryFromReader(message: StreamConfig, reader: jspb.BinaryReader): StreamConfig;
}

export namespace StreamConfig {
  export type AsObject = {
    audio?: AudioConfig.AsObject,
    text?: TextConfig.AsObject,
  }
}

export class WebIdentity extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebIdentity.AsObject;
  static toObject(includeInstance: boolean, msg: WebIdentity): WebIdentity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebIdentity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebIdentity;
  static deserializeBinaryFromReader(message: WebIdentity, reader: jspb.BinaryReader): WebIdentity;
}

export namespace WebIdentity {
  export type AsObject = {
    userid: string,
  }
}

export class PhoneIdentity extends jspb.Message {
  getPhonenumber(): string;
  setPhonenumber(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PhoneIdentity.AsObject;
  static toObject(includeInstance: boolean, msg: PhoneIdentity): PhoneIdentity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PhoneIdentity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PhoneIdentity;
  static deserializeBinaryFromReader(message: PhoneIdentity, reader: jspb.BinaryReader): PhoneIdentity;
}

export namespace PhoneIdentity {
  export type AsObject = {
    phonenumber: string,
  }
}

export class ConversationInitialization extends jspb.Message {
  getAssistantconversationid(): string;
  setAssistantconversationid(value: string): void;

  hasAssistant(): boolean;
  clearAssistant(): void;
  getAssistant(): common_pb.AssistantDefinition | undefined;
  setAssistant(value?: common_pb.AssistantDefinition): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getMetadataMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearMetadataMap(): void;
  getArgsMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearArgsMap(): void;
  getOptionsMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearOptionsMap(): void;
  getStreammode(): StreamModeMap[keyof StreamModeMap];
  setStreammode(value: StreamModeMap[keyof StreamModeMap]): void;

  hasPhone(): boolean;
  clearPhone(): void;
  getPhone(): PhoneIdentity | undefined;
  setPhone(value?: PhoneIdentity): void;

  hasWeb(): boolean;
  clearWeb(): void;
  getWeb(): WebIdentity | undefined;
  setWeb(value?: WebIdentity): void;

  getUseridentityCase(): ConversationInitialization.UseridentityCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationInitialization.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationInitialization): ConversationInitialization.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversationInitialization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationInitialization;
  static deserializeBinaryFromReader(message: ConversationInitialization, reader: jspb.BinaryReader): ConversationInitialization;
}

export namespace ConversationInitialization {
  export type AsObject = {
    assistantconversationid: string,
    assistant?: common_pb.AssistantDefinition.AsObject,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    metadataMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    argsMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    optionsMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    streammode: StreamModeMap[keyof StreamModeMap],
    phone?: PhoneIdentity.AsObject,
    web?: WebIdentity.AsObject,
  }

  export enum UseridentityCase {
    USERIDENTITY_NOT_SET = 0,
    PHONE = 10,
    WEB = 11,
  }
}

export class ConversationConfiguration extends jspb.Message {
  getStreammode(): StreamModeMap[keyof StreamModeMap];
  setStreammode(value: StreamModeMap[keyof StreamModeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationConfiguration): ConversationConfiguration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversationConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationConfiguration;
  static deserializeBinaryFromReader(message: ConversationConfiguration, reader: jspb.BinaryReader): ConversationConfiguration;
}

export namespace ConversationConfiguration {
  export type AsObject = {
    streammode: StreamModeMap[keyof StreamModeMap],
  }
}

export class ConversationInterruption extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getType(): ConversationInterruption.InterruptionTypeMap[keyof ConversationInterruption.InterruptionTypeMap];
  setType(value: ConversationInterruption.InterruptionTypeMap[keyof ConversationInterruption.InterruptionTypeMap]): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationInterruption.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationInterruption): ConversationInterruption.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversationInterruption, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationInterruption;
  static deserializeBinaryFromReader(message: ConversationInterruption, reader: jspb.BinaryReader): ConversationInterruption;
}

export namespace ConversationInterruption {
  export type AsObject = {
    id: string,
    type: ConversationInterruption.InterruptionTypeMap[keyof ConversationInterruption.InterruptionTypeMap],
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export interface InterruptionTypeMap {
    INTERRUPTION_TYPE_UNSPECIFIED: 0;
    INTERRUPTION_TYPE_VAD: 1;
    INTERRUPTION_TYPE_WORD: 2;
  }

  export const InterruptionType: InterruptionTypeMap;
}

export class ConversationDisconnection extends jspb.Message {
  getType(): ConversationDisconnection.DisconnectionTypeMap[keyof ConversationDisconnection.DisconnectionTypeMap];
  setType(value: ConversationDisconnection.DisconnectionTypeMap[keyof ConversationDisconnection.DisconnectionTypeMap]): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationDisconnection.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationDisconnection): ConversationDisconnection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversationDisconnection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationDisconnection;
  static deserializeBinaryFromReader(message: ConversationDisconnection, reader: jspb.BinaryReader): ConversationDisconnection;
}

export namespace ConversationDisconnection {
  export type AsObject = {
    type: ConversationDisconnection.DisconnectionTypeMap[keyof ConversationDisconnection.DisconnectionTypeMap],
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export interface DisconnectionTypeMap {
    DISCONNECTION_TYPE_UNSPECIFIED: 0;
    DISCONNECTION_TYPE_TOOL: 1;
    DISCONNECTION_TYPE_USER: 2;
  }

  export const DisconnectionType: DisconnectionTypeMap;
}

export class ConversationAssistantMessage extends jspb.Message {
  hasAudio(): boolean;
  clearAudio(): void;
  getAudio(): Uint8Array | string;
  getAudio_asU8(): Uint8Array;
  getAudio_asB64(): string;
  setAudio(value: Uint8Array | string): void;

  hasText(): boolean;
  clearText(): void;
  getText(): string;
  setText(value: string): void;

  getId(): string;
  setId(value: string): void;

  getCompleted(): boolean;
  setCompleted(value: boolean): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getMessageCase(): ConversationAssistantMessage.MessageCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationAssistantMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationAssistantMessage): ConversationAssistantMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversationAssistantMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationAssistantMessage;
  static deserializeBinaryFromReader(message: ConversationAssistantMessage, reader: jspb.BinaryReader): ConversationAssistantMessage;
}

export namespace ConversationAssistantMessage {
  export type AsObject = {
    audio: Uint8Array | string,
    text: string,
    id: string,
    completed: boolean,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum MessageCase {
    MESSAGE_NOT_SET = 0,
    AUDIO = 10,
    TEXT = 11,
  }
}

export class ConversationUserMessage extends jspb.Message {
  hasAudio(): boolean;
  clearAudio(): void;
  getAudio(): Uint8Array | string;
  getAudio_asU8(): Uint8Array;
  getAudio_asB64(): string;
  setAudio(value: Uint8Array | string): void;

  hasText(): boolean;
  clearText(): void;
  getText(): string;
  setText(value: string): void;

  getId(): string;
  setId(value: string): void;

  getCompleted(): boolean;
  setCompleted(value: boolean): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getMessageCase(): ConversationUserMessage.MessageCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationUserMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationUserMessage): ConversationUserMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversationUserMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationUserMessage;
  static deserializeBinaryFromReader(message: ConversationUserMessage, reader: jspb.BinaryReader): ConversationUserMessage;
}

export namespace ConversationUserMessage {
  export type AsObject = {
    audio: Uint8Array | string,
    text: string,
    id: string,
    completed: boolean,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum MessageCase {
    MESSAGE_NOT_SET = 0,
    AUDIO = 10,
    TEXT = 11,
  }
}

export class ConversationModeChange extends jspb.Message {
  getMode(): ConversationModeChange.ModeTypeMap[keyof ConversationModeChange.ModeTypeMap];
  setMode(value: ConversationModeChange.ModeTypeMap[keyof ConversationModeChange.ModeTypeMap]): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationModeChange.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationModeChange): ConversationModeChange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversationModeChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationModeChange;
  static deserializeBinaryFromReader(message: ConversationModeChange, reader: jspb.BinaryReader): ConversationModeChange;
}

export namespace ConversationModeChange {
  export type AsObject = {
    mode: ConversationModeChange.ModeTypeMap[keyof ConversationModeChange.ModeTypeMap],
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export interface ModeTypeMap {
    MODE_TYPE_UNSPECIFIED: 0;
    MODE_TYPE_AUDIO: 1;
    MODE_TYPE_TEXT: 2;
  }

  export const ModeType: ModeTypeMap;
}

export class AssistantTalkRequest extends jspb.Message {
  hasInitialization(): boolean;
  clearInitialization(): void;
  getInitialization(): ConversationInitialization | undefined;
  setInitialization(value?: ConversationInitialization): void;

  hasConfiguration(): boolean;
  clearConfiguration(): void;
  getConfiguration(): ConversationConfiguration | undefined;
  setConfiguration(value?: ConversationConfiguration): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): ConversationUserMessage | undefined;
  setMessage(value?: ConversationUserMessage): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): ConversationMetadata | undefined;
  setMetadata(value?: ConversationMetadata): void;

  hasMetric(): boolean;
  clearMetric(): void;
  getMetric(): ConversationMetric | undefined;
  setMetric(value?: ConversationMetric): void;

  hasDisconnection(): boolean;
  clearDisconnection(): void;
  getDisconnection(): ConversationDisconnection | undefined;
  setDisconnection(value?: ConversationDisconnection): void;

  getRequestCase(): AssistantTalkRequest.RequestCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantTalkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantTalkRequest): AssistantTalkRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantTalkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantTalkRequest;
  static deserializeBinaryFromReader(message: AssistantTalkRequest, reader: jspb.BinaryReader): AssistantTalkRequest;
}

export namespace AssistantTalkRequest {
  export type AsObject = {
    initialization?: ConversationInitialization.AsObject,
    configuration?: ConversationConfiguration.AsObject,
    message?: ConversationUserMessage.AsObject,
    metadata?: ConversationMetadata.AsObject,
    metric?: ConversationMetric.AsObject,
    disconnection?: ConversationDisconnection.AsObject,
  }

  export enum RequestCase {
    REQUEST_NOT_SET = 0,
    INITIALIZATION = 1,
    CONFIGURATION = 2,
    MESSAGE = 3,
    METADATA = 4,
    METRIC = 5,
    DISCONNECTION = 6,
  }
}

export class AssistantTalkResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasInitialization(): boolean;
  clearInitialization(): void;
  getInitialization(): ConversationInitialization | undefined;
  setInitialization(value?: ConversationInitialization): void;

  hasConfiguration(): boolean;
  clearConfiguration(): void;
  getConfiguration(): ConversationConfiguration | undefined;
  setConfiguration(value?: ConversationConfiguration): void;

  hasInterruption(): boolean;
  clearInterruption(): void;
  getInterruption(): ConversationInterruption | undefined;
  setInterruption(value?: ConversationInterruption): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): ConversationUserMessage | undefined;
  setUser(value?: ConversationUserMessage): void;

  hasAssistant(): boolean;
  clearAssistant(): void;
  getAssistant(): ConversationAssistantMessage | undefined;
  setAssistant(value?: ConversationAssistantMessage): void;

  hasToolcall(): boolean;
  clearToolcall(): void;
  getToolcall(): ConversationToolCall | undefined;
  setToolcall(value?: ConversationToolCall): void;

  hasToolresult(): boolean;
  clearToolresult(): void;
  getToolresult(): ConversationToolResult | undefined;
  setToolresult(value?: ConversationToolResult): void;

  hasDirective(): boolean;
  clearDirective(): void;
  getDirective(): ConversationDirective | undefined;
  setDirective(value?: ConversationDirective): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): ConversationMetadata | undefined;
  setMetadata(value?: ConversationMetadata): void;

  hasMetric(): boolean;
  clearMetric(): void;
  getMetric(): ConversationMetric | undefined;
  setMetric(value?: ConversationMetric): void;

  hasDisconnection(): boolean;
  clearDisconnection(): void;
  getDisconnection(): ConversationDisconnection | undefined;
  setDisconnection(value?: ConversationDisconnection): void;

  hasEvent(): boolean;
  clearEvent(): void;
  getEvent(): ConversationEvent | undefined;
  setEvent(value?: ConversationEvent): void;

  hasError(): boolean;
  clearError(): void;
  getError(): ConversationError | undefined;
  setError(value?: ConversationError): void;

  getDataCase(): AssistantTalkResponse.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantTalkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantTalkResponse): AssistantTalkResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantTalkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantTalkResponse;
  static deserializeBinaryFromReader(message: AssistantTalkResponse, reader: jspb.BinaryReader): AssistantTalkResponse;
}

export namespace AssistantTalkResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    initialization?: ConversationInitialization.AsObject,
    configuration?: ConversationConfiguration.AsObject,
    interruption?: ConversationInterruption.AsObject,
    user?: ConversationUserMessage.AsObject,
    assistant?: ConversationAssistantMessage.AsObject,
    toolcall?: ConversationToolCall.AsObject,
    toolresult?: ConversationToolResult.AsObject,
    directive?: ConversationDirective.AsObject,
    metadata?: ConversationMetadata.AsObject,
    metric?: ConversationMetric.AsObject,
    disconnection?: ConversationDisconnection.AsObject,
    event?: ConversationEvent.AsObject,
    error?: ConversationError.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    INITIALIZATION = 8,
    CONFIGURATION = 9,
    INTERRUPTION = 10,
    USER = 11,
    ASSISTANT = 12,
    TOOLCALL = 13,
    TOOLRESULT = 14,
    DIRECTIVE = 16,
    METADATA = 17,
    METRIC = 18,
    DISCONNECTION = 19,
    EVENT = 20,
    ERROR = 15,
  }
}

export class CreateMessageMetricRequest extends jspb.Message {
  getAssistantid(): string;
  setAssistantid(value: string): void;

  getAssistantconversationid(): string;
  setAssistantconversationid(value: string): void;

  getMessageid(): string;
  setMessageid(value: string): void;

  clearMetricsList(): void;
  getMetricsList(): Array<common_pb.Metric>;
  setMetricsList(value: Array<common_pb.Metric>): void;
  addMetrics(value?: common_pb.Metric, index?: number): common_pb.Metric;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMessageMetricRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMessageMetricRequest): CreateMessageMetricRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateMessageMetricRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMessageMetricRequest;
  static deserializeBinaryFromReader(message: CreateMessageMetricRequest, reader: jspb.BinaryReader): CreateMessageMetricRequest;
}

export namespace CreateMessageMetricRequest {
  export type AsObject = {
    assistantid: string,
    assistantconversationid: string,
    messageid: string,
    metricsList: Array<common_pb.Metric.AsObject>,
  }
}

export class CreateMessageMetricResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<common_pb.Metric>;
  setDataList(value: Array<common_pb.Metric>): void;
  addData(value?: common_pb.Metric, index?: number): common_pb.Metric;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMessageMetricResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMessageMetricResponse): CreateMessageMetricResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateMessageMetricResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMessageMetricResponse;
  static deserializeBinaryFromReader(message: CreateMessageMetricResponse, reader: jspb.BinaryReader): CreateMessageMetricResponse;
}

export namespace CreateMessageMetricResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<common_pb.Metric.AsObject>,
    error?: common_pb.Error.AsObject,
  }
}

export class CreateConversationMetricRequest extends jspb.Message {
  getAssistantid(): string;
  setAssistantid(value: string): void;

  getAssistantconversationid(): string;
  setAssistantconversationid(value: string): void;

  clearMetricsList(): void;
  getMetricsList(): Array<common_pb.Metric>;
  setMetricsList(value: Array<common_pb.Metric>): void;
  addMetrics(value?: common_pb.Metric, index?: number): common_pb.Metric;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateConversationMetricRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateConversationMetricRequest): CreateConversationMetricRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateConversationMetricRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateConversationMetricRequest;
  static deserializeBinaryFromReader(message: CreateConversationMetricRequest, reader: jspb.BinaryReader): CreateConversationMetricRequest;
}

export namespace CreateConversationMetricRequest {
  export type AsObject = {
    assistantid: string,
    assistantconversationid: string,
    metricsList: Array<common_pb.Metric.AsObject>,
  }
}

export class CreateConversationMetricResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<common_pb.Metric>;
  setDataList(value: Array<common_pb.Metric>): void;
  addData(value?: common_pb.Metric, index?: number): common_pb.Metric;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateConversationMetricResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateConversationMetricResponse): CreateConversationMetricResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateConversationMetricResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateConversationMetricResponse;
  static deserializeBinaryFromReader(message: CreateConversationMetricResponse, reader: jspb.BinaryReader): CreateConversationMetricResponse;
}

export namespace CreateConversationMetricResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<common_pb.Metric.AsObject>,
    error?: common_pb.Error.AsObject,
  }
}

export class CreatePhoneCallRequest extends jspb.Message {
  hasAssistant(): boolean;
  clearAssistant(): void;
  getAssistant(): common_pb.AssistantDefinition | undefined;
  setAssistant(value?: common_pb.AssistantDefinition): void;

  getMetadataMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearMetadataMap(): void;
  getArgsMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearArgsMap(): void;
  getOptionsMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearOptionsMap(): void;
  getFromnumber(): string;
  setFromnumber(value: string): void;

  getTonumber(): string;
  setTonumber(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePhoneCallRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePhoneCallRequest): CreatePhoneCallRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePhoneCallRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePhoneCallRequest;
  static deserializeBinaryFromReader(message: CreatePhoneCallRequest, reader: jspb.BinaryReader): CreatePhoneCallRequest;
}

export namespace CreatePhoneCallRequest {
  export type AsObject = {
    assistant?: common_pb.AssistantDefinition.AsObject,
    metadataMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    argsMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    optionsMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    fromnumber: string,
    tonumber: string,
  }
}

export class CreatePhoneCallResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): common_pb.AssistantConversation | undefined;
  setData(value?: common_pb.AssistantConversation): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePhoneCallResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePhoneCallResponse): CreatePhoneCallResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePhoneCallResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePhoneCallResponse;
  static deserializeBinaryFromReader(message: CreatePhoneCallResponse, reader: jspb.BinaryReader): CreatePhoneCallResponse;
}

export namespace CreatePhoneCallResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: common_pb.AssistantConversation.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class CreateBulkPhoneCallRequest extends jspb.Message {
  clearPhonecallsList(): void;
  getPhonecallsList(): Array<CreatePhoneCallRequest>;
  setPhonecallsList(value: Array<CreatePhoneCallRequest>): void;
  addPhonecalls(value?: CreatePhoneCallRequest, index?: number): CreatePhoneCallRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBulkPhoneCallRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBulkPhoneCallRequest): CreateBulkPhoneCallRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateBulkPhoneCallRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBulkPhoneCallRequest;
  static deserializeBinaryFromReader(message: CreateBulkPhoneCallRequest, reader: jspb.BinaryReader): CreateBulkPhoneCallRequest;
}

export namespace CreateBulkPhoneCallRequest {
  export type AsObject = {
    phonecallsList: Array<CreatePhoneCallRequest.AsObject>,
  }
}

export class CreateBulkPhoneCallResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<common_pb.AssistantConversation>;
  setDataList(value: Array<common_pb.AssistantConversation>): void;
  addData(value?: common_pb.AssistantConversation, index?: number): common_pb.AssistantConversation;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBulkPhoneCallResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBulkPhoneCallResponse): CreateBulkPhoneCallResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateBulkPhoneCallResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBulkPhoneCallResponse;
  static deserializeBinaryFromReader(message: CreateBulkPhoneCallResponse, reader: jspb.BinaryReader): CreateBulkPhoneCallResponse;
}

export namespace CreateBulkPhoneCallResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<common_pb.AssistantConversation.AsObject>,
    error?: common_pb.Error.AsObject,
  }
}

export interface StreamModeMap {
  STREAM_MODE_UNSPECIFIED: 0;
  STREAM_MODE_TEXT: 1;
  STREAM_MODE_AUDIO: 2;
  STREAM_MODE_BOTH: 3;
}

export const StreamMode: StreamModeMap;

