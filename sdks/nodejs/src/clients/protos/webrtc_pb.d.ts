// package: talk_api
// file: webrtc.proto

import * as jspb from "google-protobuf";
import * as talk_api_pb from "./talk-api_pb";

export class ICEServer extends jspb.Message {
  clearUrlsList(): void;
  getUrlsList(): Array<string>;
  setUrlsList(value: Array<string>): void;
  addUrls(value: string, index?: number): string;

  getUsername(): string;
  setUsername(value: string): void;

  getCredential(): string;
  setCredential(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ICEServer.AsObject;
  static toObject(includeInstance: boolean, msg: ICEServer): ICEServer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ICEServer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ICEServer;
  static deserializeBinaryFromReader(message: ICEServer, reader: jspb.BinaryReader): ICEServer;
}

export namespace ICEServer {
  export type AsObject = {
    urlsList: Array<string>,
    username: string,
    credential: string,
  }
}

export class ICECandidate extends jspb.Message {
  getCandidate(): string;
  setCandidate(value: string): void;

  getSdpmid(): string;
  setSdpmid(value: string): void;

  getSdpmlineindex(): number;
  setSdpmlineindex(value: number): void;

  getUsernamefragment(): string;
  setUsernamefragment(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ICECandidate.AsObject;
  static toObject(includeInstance: boolean, msg: ICECandidate): ICECandidate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ICECandidate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ICECandidate;
  static deserializeBinaryFromReader(message: ICECandidate, reader: jspb.BinaryReader): ICECandidate;
}

export namespace ICECandidate {
  export type AsObject = {
    candidate: string,
    sdpmid: string,
    sdpmlineindex: number,
    usernamefragment: string,
  }
}

export class WebRTCSDP extends jspb.Message {
  getType(): WebRTCSDP.SDPTypeMap[keyof WebRTCSDP.SDPTypeMap];
  setType(value: WebRTCSDP.SDPTypeMap[keyof WebRTCSDP.SDPTypeMap]): void;

  getSdp(): string;
  setSdp(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebRTCSDP.AsObject;
  static toObject(includeInstance: boolean, msg: WebRTCSDP): WebRTCSDP.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebRTCSDP, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebRTCSDP;
  static deserializeBinaryFromReader(message: WebRTCSDP, reader: jspb.BinaryReader): WebRTCSDP;
}

export namespace WebRTCSDP {
  export type AsObject = {
    type: WebRTCSDP.SDPTypeMap[keyof WebRTCSDP.SDPTypeMap],
    sdp: string,
  }

  export interface SDPTypeMap {
    SDP_TYPE_UNSPECIFIED: 0;
    OFFER: 1;
    ANSWER: 2;
  }

  export const SDPType: SDPTypeMap;
}

export class ClientSignaling extends jspb.Message {
  getSessionid(): string;
  setSessionid(value: string): void;

  hasSdp(): boolean;
  clearSdp(): void;
  getSdp(): WebRTCSDP | undefined;
  setSdp(value?: WebRTCSDP): void;

  hasIcecandidate(): boolean;
  clearIcecandidate(): void;
  getIcecandidate(): ICECandidate | undefined;
  setIcecandidate(value?: ICECandidate): void;

  hasDisconnect(): boolean;
  clearDisconnect(): void;
  getDisconnect(): boolean;
  setDisconnect(value: boolean): void;

  getMessageCase(): ClientSignaling.MessageCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientSignaling.AsObject;
  static toObject(includeInstance: boolean, msg: ClientSignaling): ClientSignaling.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientSignaling, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientSignaling;
  static deserializeBinaryFromReader(message: ClientSignaling, reader: jspb.BinaryReader): ClientSignaling;
}

export namespace ClientSignaling {
  export type AsObject = {
    sessionid: string,
    sdp?: WebRTCSDP.AsObject,
    icecandidate?: ICECandidate.AsObject,
    disconnect: boolean,
  }

  export enum MessageCase {
    MESSAGE_NOT_SET = 0,
    SDP = 2,
    ICECANDIDATE = 3,
    DISCONNECT = 4,
  }
}

export class ServerSignaling extends jspb.Message {
  getSessionid(): string;
  setSessionid(value: string): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): WebRTCConfig | undefined;
  setConfig(value?: WebRTCConfig): void;

  hasSdp(): boolean;
  clearSdp(): void;
  getSdp(): WebRTCSDP | undefined;
  setSdp(value?: WebRTCSDP): void;

  hasIcecandidate(): boolean;
  clearIcecandidate(): void;
  getIcecandidate(): ICECandidate | undefined;
  setIcecandidate(value?: ICECandidate): void;

  hasReady(): boolean;
  clearReady(): void;
  getReady(): boolean;
  setReady(value: boolean): void;

  hasClear(): boolean;
  clearClear(): void;
  getClear(): boolean;
  setClear(value: boolean): void;

  hasError(): boolean;
  clearError(): void;
  getError(): string;
  setError(value: string): void;

  getMessageCase(): ServerSignaling.MessageCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerSignaling.AsObject;
  static toObject(includeInstance: boolean, msg: ServerSignaling): ServerSignaling.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerSignaling, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerSignaling;
  static deserializeBinaryFromReader(message: ServerSignaling, reader: jspb.BinaryReader): ServerSignaling;
}

export namespace ServerSignaling {
  export type AsObject = {
    sessionid: string,
    config?: WebRTCConfig.AsObject,
    sdp?: WebRTCSDP.AsObject,
    icecandidate?: ICECandidate.AsObject,
    ready: boolean,
    clear: boolean,
    error: string,
  }

  export enum MessageCase {
    MESSAGE_NOT_SET = 0,
    CONFIG = 2,
    SDP = 3,
    ICECANDIDATE = 4,
    READY = 5,
    CLEAR = 6,
    ERROR = 7,
  }
}

export class WebRTCConfig extends jspb.Message {
  clearIceserversList(): void;
  getIceserversList(): Array<ICEServer>;
  setIceserversList(value: Array<ICEServer>): void;
  addIceservers(value?: ICEServer, index?: number): ICEServer;

  getAudiocodec(): string;
  setAudiocodec(value: string): void;

  getSamplerate(): number;
  setSamplerate(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebRTCConfig.AsObject;
  static toObject(includeInstance: boolean, msg: WebRTCConfig): WebRTCConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebRTCConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebRTCConfig;
  static deserializeBinaryFromReader(message: WebRTCConfig, reader: jspb.BinaryReader): WebRTCConfig;
}

export namespace WebRTCConfig {
  export type AsObject = {
    iceserversList: Array<ICEServer.AsObject>,
    audiocodec: string,
    samplerate: number,
  }
}

export class WebTalkRequest extends jspb.Message {
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

  hasSignaling(): boolean;
  clearSignaling(): void;
  getSignaling(): ClientSignaling | undefined;
  setSignaling(value?: ClientSignaling): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): talk_api_pb.ConversationMetadata | undefined;
  setMetadata(value?: talk_api_pb.ConversationMetadata): void;

  hasMetric(): boolean;
  clearMetric(): void;
  getMetric(): talk_api_pb.ConversationMetric | undefined;
  setMetric(value?: talk_api_pb.ConversationMetric): void;

  hasDisconnection(): boolean;
  clearDisconnection(): void;
  getDisconnection(): talk_api_pb.ConversationDisconnection | undefined;
  setDisconnection(value?: talk_api_pb.ConversationDisconnection): void;

  getRequestCase(): WebTalkRequest.RequestCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebTalkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WebTalkRequest): WebTalkRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebTalkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebTalkRequest;
  static deserializeBinaryFromReader(message: WebTalkRequest, reader: jspb.BinaryReader): WebTalkRequest;
}

export namespace WebTalkRequest {
  export type AsObject = {
    initialization?: talk_api_pb.ConversationInitialization.AsObject,
    configuration?: talk_api_pb.ConversationConfiguration.AsObject,
    message?: talk_api_pb.ConversationUserMessage.AsObject,
    signaling?: ClientSignaling.AsObject,
    metadata?: talk_api_pb.ConversationMetadata.AsObject,
    metric?: talk_api_pb.ConversationMetric.AsObject,
    disconnection?: talk_api_pb.ConversationDisconnection.AsObject,
  }

  export enum RequestCase {
    REQUEST_NOT_SET = 0,
    INITIALIZATION = 1,
    CONFIGURATION = 2,
    MESSAGE = 3,
    SIGNALING = 4,
    METADATA = 5,
    METRIC = 6,
    DISCONNECTION = 7,
  }
}

export class WebTalkResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasInitialization(): boolean;
  clearInitialization(): void;
  getInitialization(): talk_api_pb.ConversationInitialization | undefined;
  setInitialization(value?: talk_api_pb.ConversationInitialization): void;

  hasConfiguration(): boolean;
  clearConfiguration(): void;
  getConfiguration(): talk_api_pb.ConversationConfiguration | undefined;
  setConfiguration(value?: talk_api_pb.ConversationConfiguration): void;

  hasInterruption(): boolean;
  clearInterruption(): void;
  getInterruption(): talk_api_pb.ConversationInterruption | undefined;
  setInterruption(value?: talk_api_pb.ConversationInterruption): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): talk_api_pb.ConversationUserMessage | undefined;
  setUser(value?: talk_api_pb.ConversationUserMessage): void;

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
  getError(): talk_api_pb.ConversationError | undefined;
  setError(value?: talk_api_pb.ConversationError): void;

  hasSignaling(): boolean;
  clearSignaling(): void;
  getSignaling(): ServerSignaling | undefined;
  setSignaling(value?: ServerSignaling): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): talk_api_pb.ConversationMetadata | undefined;
  setMetadata(value?: talk_api_pb.ConversationMetadata): void;

  hasMetric(): boolean;
  clearMetric(): void;
  getMetric(): talk_api_pb.ConversationMetric | undefined;
  setMetric(value?: talk_api_pb.ConversationMetric): void;

  hasDisconnection(): boolean;
  clearDisconnection(): void;
  getDisconnection(): talk_api_pb.ConversationDisconnection | undefined;
  setDisconnection(value?: talk_api_pb.ConversationDisconnection): void;

  hasEvent(): boolean;
  clearEvent(): void;
  getEvent(): talk_api_pb.ConversationEvent | undefined;
  setEvent(value?: talk_api_pb.ConversationEvent): void;

  getDataCase(): WebTalkResponse.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebTalkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WebTalkResponse): WebTalkResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebTalkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebTalkResponse;
  static deserializeBinaryFromReader(message: WebTalkResponse, reader: jspb.BinaryReader): WebTalkResponse;
}

export namespace WebTalkResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    initialization?: talk_api_pb.ConversationInitialization.AsObject,
    configuration?: talk_api_pb.ConversationConfiguration.AsObject,
    interruption?: talk_api_pb.ConversationInterruption.AsObject,
    user?: talk_api_pb.ConversationUserMessage.AsObject,
    assistant?: talk_api_pb.ConversationAssistantMessage.AsObject,
    tool?: talk_api_pb.ConversationToolCall.AsObject,
    toolresult?: talk_api_pb.ConversationToolResult.AsObject,
    directive?: talk_api_pb.ConversationDirective.AsObject,
    error?: talk_api_pb.ConversationError.AsObject,
    signaling?: ServerSignaling.AsObject,
    metadata?: talk_api_pb.ConversationMetadata.AsObject,
    metric?: talk_api_pb.ConversationMetric.AsObject,
    disconnection?: talk_api_pb.ConversationDisconnection.AsObject,
    event?: talk_api_pb.ConversationEvent.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    INITIALIZATION = 8,
    CONFIGURATION = 9,
    INTERRUPTION = 10,
    USER = 11,
    ASSISTANT = 12,
    TOOL = 13,
    TOOLRESULT = 14,
    DIRECTIVE = 16,
    ERROR = 15,
    SIGNALING = 17,
    METADATA = 19,
    METRIC = 20,
    DISCONNECTION = 21,
    EVENT = 22,
  }
}

