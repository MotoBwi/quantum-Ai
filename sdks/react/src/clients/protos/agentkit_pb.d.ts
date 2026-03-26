// package: talk_api
// file: agentkit.proto

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";
import * as talk_api_pb from "./talk-api_pb";

export class TalkInput extends jspb.Message {
  hasInitialization(): boolean;
  clearInitialization(): void;
  getInitialization(): talk_api_pb.ConversationInitialization | undefined;
  setInitialization(value?: talk_api_pb.ConversationInitialization): void;

  hasConfiguration(): boolean;
  clearConfiguration(): void;
  getConfiguration(): talk_api_pb.ConversationConfiguration | undefined;
  setConfiguration(value?: talk_api_pb.ConversationConfiguration): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): talk_api_pb.ConversationUserMessage | undefined;
  setMessage(value?: talk_api_pb.ConversationUserMessage): void;

  hasInterruption(): boolean;
  clearInterruption(): void;
  getInterruption(): talk_api_pb.ConversationInterruption | undefined;
  setInterruption(value?: talk_api_pb.ConversationInterruption): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): talk_api_pb.ConversationMetadata | undefined;
  setMetadata(value?: talk_api_pb.ConversationMetadata): void;

  hasMetric(): boolean;
  clearMetric(): void;
  getMetric(): talk_api_pb.ConversationMetric | undefined;
  setMetric(value?: talk_api_pb.ConversationMetric): void;

  getRequestCase(): TalkInput.RequestCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TalkInput.AsObject;
  static toObject(includeInstance: boolean, msg: TalkInput): TalkInput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TalkInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TalkInput;
  static deserializeBinaryFromReader(message: TalkInput, reader: jspb.BinaryReader): TalkInput;
}

export namespace TalkInput {
  export type AsObject = {
    initialization?: talk_api_pb.ConversationInitialization.AsObject,
    configuration?: talk_api_pb.ConversationConfiguration.AsObject,
    message?: talk_api_pb.ConversationUserMessage.AsObject,
    interruption?: talk_api_pb.ConversationInterruption.AsObject,
    metadata?: talk_api_pb.ConversationMetadata.AsObject,
    metric?: talk_api_pb.ConversationMetric.AsObject,
  }

  export enum RequestCase {
    REQUEST_NOT_SET = 0,
    INITIALIZATION = 1,
    CONFIGURATION = 2,
    MESSAGE = 3,
    INTERRUPTION = 4,
    METADATA = 5,
    METRIC = 6,
  }
}

export class TalkOutput extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasInitialization(): boolean;
  clearInitialization(): void;
  getInitialization(): talk_api_pb.ConversationInitialization | undefined;
  setInitialization(value?: talk_api_pb.ConversationInitialization): void;

  hasInterruption(): boolean;
  clearInterruption(): void;
  getInterruption(): talk_api_pb.ConversationInterruption | undefined;
  setInterruption(value?: talk_api_pb.ConversationInterruption): void;

  hasAssistant(): boolean;
  clearAssistant(): void;
  getAssistant(): talk_api_pb.ConversationAssistantMessage | undefined;
  setAssistant(value?: talk_api_pb.ConversationAssistantMessage): void;

  hasTool(): boolean;
  clearTool(): void;
  getTool(): talk_api_pb.ConversationToolCall | undefined;
  setTool(value?: talk_api_pb.ConversationToolCall): void;

  hasToolresult(): boolean;
  clearToolresult(): void;
  getToolresult(): talk_api_pb.ConversationToolResult | undefined;
  setToolresult(value?: talk_api_pb.ConversationToolResult): void;

  hasDirective(): boolean;
  clearDirective(): void;
  getDirective(): talk_api_pb.ConversationDirective | undefined;
  setDirective(value?: talk_api_pb.ConversationDirective): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  getDataCase(): TalkOutput.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TalkOutput.AsObject;
  static toObject(includeInstance: boolean, msg: TalkOutput): TalkOutput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TalkOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TalkOutput;
  static deserializeBinaryFromReader(message: TalkOutput, reader: jspb.BinaryReader): TalkOutput;
}

export namespace TalkOutput {
  export type AsObject = {
    code: number,
    success: boolean,
    initialization?: talk_api_pb.ConversationInitialization.AsObject,
    interruption?: talk_api_pb.ConversationInterruption.AsObject,
    assistant?: talk_api_pb.ConversationAssistantMessage.AsObject,
    tool?: talk_api_pb.ConversationToolCall.AsObject,
    toolresult?: talk_api_pb.ConversationToolResult.AsObject,
    directive?: talk_api_pb.ConversationDirective.AsObject,
    error?: common_pb.Error.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    INITIALIZATION = 9,
    INTERRUPTION = 10,
    ASSISTANT = 12,
    TOOL = 13,
    TOOLRESULT = 14,
    DIRECTIVE = 16,
    ERROR = 15,
  }
}

