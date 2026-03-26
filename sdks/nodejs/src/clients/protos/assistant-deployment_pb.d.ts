// package: assistant_api
// file: assistant-deployment.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";

export class DeploymentAudioProvider extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAudioprovider(): string;
  setAudioprovider(value: string): void;

  clearAudiooptionsList(): void;
  getAudiooptionsList(): Array<common_pb.Metadata>;
  setAudiooptionsList(value: Array<common_pb.Metadata>): void;
  addAudiooptions(value?: common_pb.Metadata, index?: number): common_pb.Metadata;

  getStatus(): string;
  setStatus(value: string): void;

  getAudiotype(): string;
  setAudiotype(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeploymentAudioProvider.AsObject;
  static toObject(includeInstance: boolean, msg: DeploymentAudioProvider): DeploymentAudioProvider.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeploymentAudioProvider, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeploymentAudioProvider;
  static deserializeBinaryFromReader(message: DeploymentAudioProvider, reader: jspb.BinaryReader): DeploymentAudioProvider;
}

export namespace DeploymentAudioProvider {
  export type AsObject = {
    id: string,
    audioprovider: string,
    audiooptionsList: Array<common_pb.Metadata.AsObject>,
    status: string,
    audiotype: string,
  }
}

export class AssistantWebpluginDeployment extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasGreeting(): boolean;
  clearGreeting(): void;
  getGreeting(): string;
  setGreeting(value: string): void;

  hasMistake(): boolean;
  clearMistake(): void;
  getMistake(): string;
  setMistake(value: string): void;

  hasInputaudio(): boolean;
  clearInputaudio(): void;
  getInputaudio(): DeploymentAudioProvider | undefined;
  setInputaudio(value?: DeploymentAudioProvider): void;

  hasOutputaudio(): boolean;
  clearOutputaudio(): void;
  getOutputaudio(): DeploymentAudioProvider | undefined;
  setOutputaudio(value?: DeploymentAudioProvider): void;

  clearSuggestionList(): void;
  getSuggestionList(): Array<string>;
  setSuggestionList(value: Array<string>): void;
  addSuggestion(value: string, index?: number): string;

  getHelpcenterenabled(): boolean;
  setHelpcenterenabled(value: boolean): void;

  getProductcatalogenabled(): boolean;
  setProductcatalogenabled(value: boolean): void;

  getArticlecatalogenabled(): boolean;
  setArticlecatalogenabled(value: boolean): void;

  getUploadfileenabled(): boolean;
  setUploadfileenabled(value: boolean): void;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getStatus(): string;
  setStatus(value: string): void;

  getMaxsessionduration(): string;
  setMaxsessionduration(value: string): void;

  getIdealtimeout(): string;
  setIdealtimeout(value: string): void;

  getIdealtimeoutmessage(): string;
  setIdealtimeoutmessage(value: string): void;

  getIdealtimeoutbackoff(): string;
  setIdealtimeoutbackoff(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantWebpluginDeployment.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantWebpluginDeployment): AssistantWebpluginDeployment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantWebpluginDeployment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantWebpluginDeployment;
  static deserializeBinaryFromReader(message: AssistantWebpluginDeployment, reader: jspb.BinaryReader): AssistantWebpluginDeployment;
}

export namespace AssistantWebpluginDeployment {
  export type AsObject = {
    id: string,
    assistantid: string,
    name: string,
    greeting: string,
    mistake: string,
    inputaudio?: DeploymentAudioProvider.AsObject,
    outputaudio?: DeploymentAudioProvider.AsObject,
    suggestionList: Array<string>,
    helpcenterenabled: boolean,
    productcatalogenabled: boolean,
    articlecatalogenabled: boolean,
    uploadfileenabled: boolean,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: string,
    maxsessionduration: string,
    idealtimeout: string,
    idealtimeoutmessage: string,
    idealtimeoutbackoff: string,
  }
}

export class AssistantPhoneDeployment extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  hasGreeting(): boolean;
  clearGreeting(): void;
  getGreeting(): string;
  setGreeting(value: string): void;

  hasMistake(): boolean;
  clearMistake(): void;
  getMistake(): string;
  setMistake(value: string): void;

  hasInputaudio(): boolean;
  clearInputaudio(): void;
  getInputaudio(): DeploymentAudioProvider | undefined;
  setInputaudio(value?: DeploymentAudioProvider): void;

  hasOutputaudio(): boolean;
  clearOutputaudio(): void;
  getOutputaudio(): DeploymentAudioProvider | undefined;
  setOutputaudio(value?: DeploymentAudioProvider): void;

  getPhoneprovidername(): string;
  setPhoneprovidername(value: string): void;

  clearPhoneoptionsList(): void;
  getPhoneoptionsList(): Array<common_pb.Metadata>;
  setPhoneoptionsList(value: Array<common_pb.Metadata>): void;
  addPhoneoptions(value?: common_pb.Metadata, index?: number): common_pb.Metadata;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getStatus(): string;
  setStatus(value: string): void;

  getMaxsessionduration(): string;
  setMaxsessionduration(value: string): void;

  getIdealtimeout(): string;
  setIdealtimeout(value: string): void;

  getIdealtimeoutmessage(): string;
  setIdealtimeoutmessage(value: string): void;

  getIdealtimeoutbackoff(): string;
  setIdealtimeoutbackoff(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantPhoneDeployment.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantPhoneDeployment): AssistantPhoneDeployment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantPhoneDeployment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantPhoneDeployment;
  static deserializeBinaryFromReader(message: AssistantPhoneDeployment, reader: jspb.BinaryReader): AssistantPhoneDeployment;
}

export namespace AssistantPhoneDeployment {
  export type AsObject = {
    id: string,
    assistantid: string,
    greeting: string,
    mistake: string,
    inputaudio?: DeploymentAudioProvider.AsObject,
    outputaudio?: DeploymentAudioProvider.AsObject,
    phoneprovidername: string,
    phoneoptionsList: Array<common_pb.Metadata.AsObject>,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: string,
    maxsessionduration: string,
    idealtimeout: string,
    idealtimeoutmessage: string,
    idealtimeoutbackoff: string,
  }
}

export class AssistantWhatsappDeployment extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasGreeting(): boolean;
  clearGreeting(): void;
  getGreeting(): string;
  setGreeting(value: string): void;

  hasMistake(): boolean;
  clearMistake(): void;
  getMistake(): string;
  setMistake(value: string): void;

  hasInputaudio(): boolean;
  clearInputaudio(): void;
  getInputaudio(): DeploymentAudioProvider | undefined;
  setInputaudio(value?: DeploymentAudioProvider): void;

  hasOutputaudio(): boolean;
  clearOutputaudio(): void;
  getOutputaudio(): DeploymentAudioProvider | undefined;
  setOutputaudio(value?: DeploymentAudioProvider): void;

  getWhatsappprovidername(): string;
  setWhatsappprovidername(value: string): void;

  clearWhatsappoptionsList(): void;
  getWhatsappoptionsList(): Array<common_pb.Metadata>;
  setWhatsappoptionsList(value: Array<common_pb.Metadata>): void;
  addWhatsappoptions(value?: common_pb.Metadata, index?: number): common_pb.Metadata;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getStatus(): string;
  setStatus(value: string): void;

  getMaxsessionduration(): string;
  setMaxsessionduration(value: string): void;

  getIdealtimeout(): string;
  setIdealtimeout(value: string): void;

  getIdealtimeoutmessage(): string;
  setIdealtimeoutmessage(value: string): void;

  getIdealtimeoutbackoff(): string;
  setIdealtimeoutbackoff(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantWhatsappDeployment.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantWhatsappDeployment): AssistantWhatsappDeployment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantWhatsappDeployment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantWhatsappDeployment;
  static deserializeBinaryFromReader(message: AssistantWhatsappDeployment, reader: jspb.BinaryReader): AssistantWhatsappDeployment;
}

export namespace AssistantWhatsappDeployment {
  export type AsObject = {
    id: string,
    assistantid: string,
    name: string,
    greeting: string,
    mistake: string,
    inputaudio?: DeploymentAudioProvider.AsObject,
    outputaudio?: DeploymentAudioProvider.AsObject,
    whatsappprovidername: string,
    whatsappoptionsList: Array<common_pb.Metadata.AsObject>,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: string,
    maxsessionduration: string,
    idealtimeout: string,
    idealtimeoutmessage: string,
    idealtimeoutbackoff: string,
  }
}

export class AssistantDebuggerDeployment extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasGreeting(): boolean;
  clearGreeting(): void;
  getGreeting(): string;
  setGreeting(value: string): void;

  hasMistake(): boolean;
  clearMistake(): void;
  getMistake(): string;
  setMistake(value: string): void;

  hasInputaudio(): boolean;
  clearInputaudio(): void;
  getInputaudio(): DeploymentAudioProvider | undefined;
  setInputaudio(value?: DeploymentAudioProvider): void;

  hasOutputaudio(): boolean;
  clearOutputaudio(): void;
  getOutputaudio(): DeploymentAudioProvider | undefined;
  setOutputaudio(value?: DeploymentAudioProvider): void;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getStatus(): string;
  setStatus(value: string): void;

  getMaxsessionduration(): string;
  setMaxsessionduration(value: string): void;

  getIdealtimeout(): string;
  setIdealtimeout(value: string): void;

  getIdealtimeoutmessage(): string;
  setIdealtimeoutmessage(value: string): void;

  getIdealtimeoutbackoff(): string;
  setIdealtimeoutbackoff(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantDebuggerDeployment.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantDebuggerDeployment): AssistantDebuggerDeployment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantDebuggerDeployment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantDebuggerDeployment;
  static deserializeBinaryFromReader(message: AssistantDebuggerDeployment, reader: jspb.BinaryReader): AssistantDebuggerDeployment;
}

export namespace AssistantDebuggerDeployment {
  export type AsObject = {
    id: string,
    assistantid: string,
    name: string,
    greeting: string,
    mistake: string,
    inputaudio?: DeploymentAudioProvider.AsObject,
    outputaudio?: DeploymentAudioProvider.AsObject,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: string,
    maxsessionduration: string,
    idealtimeout: string,
    idealtimeoutmessage: string,
    idealtimeoutbackoff: string,
  }
}

export class AssistantApiDeployment extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  hasGreeting(): boolean;
  clearGreeting(): void;
  getGreeting(): string;
  setGreeting(value: string): void;

  hasMistake(): boolean;
  clearMistake(): void;
  getMistake(): string;
  setMistake(value: string): void;

  hasInputaudio(): boolean;
  clearInputaudio(): void;
  getInputaudio(): DeploymentAudioProvider | undefined;
  setInputaudio(value?: DeploymentAudioProvider): void;

  hasOutputaudio(): boolean;
  clearOutputaudio(): void;
  getOutputaudio(): DeploymentAudioProvider | undefined;
  setOutputaudio(value?: DeploymentAudioProvider): void;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getStatus(): string;
  setStatus(value: string): void;

  getMaxsessionduration(): string;
  setMaxsessionduration(value: string): void;

  getIdealtimeout(): string;
  setIdealtimeout(value: string): void;

  getIdealtimeoutmessage(): string;
  setIdealtimeoutmessage(value: string): void;

  getIdealtimeoutbackoff(): string;
  setIdealtimeoutbackoff(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantApiDeployment.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantApiDeployment): AssistantApiDeployment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantApiDeployment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantApiDeployment;
  static deserializeBinaryFromReader(message: AssistantApiDeployment, reader: jspb.BinaryReader): AssistantApiDeployment;
}

export namespace AssistantApiDeployment {
  export type AsObject = {
    id: string,
    assistantid: string,
    greeting: string,
    mistake: string,
    inputaudio?: DeploymentAudioProvider.AsObject,
    outputaudio?: DeploymentAudioProvider.AsObject,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: string,
    maxsessionduration: string,
    idealtimeout: string,
    idealtimeoutmessage: string,
    idealtimeoutbackoff: string,
  }
}

export class CreateAssistantDeploymentRequest extends jspb.Message {
  hasApi(): boolean;
  clearApi(): void;
  getApi(): AssistantApiDeployment | undefined;
  setApi(value?: AssistantApiDeployment): void;

  hasDebugger(): boolean;
  clearDebugger(): void;
  getDebugger(): AssistantDebuggerDeployment | undefined;
  setDebugger(value?: AssistantDebuggerDeployment): void;

  hasWhatsapp(): boolean;
  clearWhatsapp(): void;
  getWhatsapp(): AssistantWhatsappDeployment | undefined;
  setWhatsapp(value?: AssistantWhatsappDeployment): void;

  hasPhone(): boolean;
  clearPhone(): void;
  getPhone(): AssistantPhoneDeployment | undefined;
  setPhone(value?: AssistantPhoneDeployment): void;

  hasPlugin(): boolean;
  clearPlugin(): void;
  getPlugin(): AssistantWebpluginDeployment | undefined;
  setPlugin(value?: AssistantWebpluginDeployment): void;

  getDeploymentCase(): CreateAssistantDeploymentRequest.DeploymentCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAssistantDeploymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAssistantDeploymentRequest): CreateAssistantDeploymentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAssistantDeploymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAssistantDeploymentRequest;
  static deserializeBinaryFromReader(message: CreateAssistantDeploymentRequest, reader: jspb.BinaryReader): CreateAssistantDeploymentRequest;
}

export namespace CreateAssistantDeploymentRequest {
  export type AsObject = {
    api?: AssistantApiDeployment.AsObject,
    pb_debugger?: AssistantDebuggerDeployment.AsObject,
    whatsapp?: AssistantWhatsappDeployment.AsObject,
    phone?: AssistantPhoneDeployment.AsObject,
    plugin?: AssistantWebpluginDeployment.AsObject,
  }

  export enum DeploymentCase {
    DEPLOYMENT_NOT_SET = 0,
    API = 1,
    DEBUGGER = 2,
    WHATSAPP = 3,
    PHONE = 4,
    PLUGIN = 5,
  }
}

export class GetAssistantApiDeploymentResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): AssistantApiDeployment | undefined;
  setData(value?: AssistantApiDeployment): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantApiDeploymentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantApiDeploymentResponse): GetAssistantApiDeploymentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantApiDeploymentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantApiDeploymentResponse;
  static deserializeBinaryFromReader(message: GetAssistantApiDeploymentResponse, reader: jspb.BinaryReader): GetAssistantApiDeploymentResponse;
}

export namespace GetAssistantApiDeploymentResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: AssistantApiDeployment.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class GetAssistantPhoneDeploymentResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): AssistantPhoneDeployment | undefined;
  setData(value?: AssistantPhoneDeployment): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantPhoneDeploymentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantPhoneDeploymentResponse): GetAssistantPhoneDeploymentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantPhoneDeploymentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantPhoneDeploymentResponse;
  static deserializeBinaryFromReader(message: GetAssistantPhoneDeploymentResponse, reader: jspb.BinaryReader): GetAssistantPhoneDeploymentResponse;
}

export namespace GetAssistantPhoneDeploymentResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: AssistantPhoneDeployment.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class GetAssistantWhatsappDeploymentResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): AssistantWhatsappDeployment | undefined;
  setData(value?: AssistantWhatsappDeployment): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantWhatsappDeploymentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantWhatsappDeploymentResponse): GetAssistantWhatsappDeploymentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantWhatsappDeploymentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantWhatsappDeploymentResponse;
  static deserializeBinaryFromReader(message: GetAssistantWhatsappDeploymentResponse, reader: jspb.BinaryReader): GetAssistantWhatsappDeploymentResponse;
}

export namespace GetAssistantWhatsappDeploymentResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: AssistantWhatsappDeployment.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class GetAssistantDebuggerDeploymentResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): AssistantDebuggerDeployment | undefined;
  setData(value?: AssistantDebuggerDeployment): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantDebuggerDeploymentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantDebuggerDeploymentResponse): GetAssistantDebuggerDeploymentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantDebuggerDeploymentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantDebuggerDeploymentResponse;
  static deserializeBinaryFromReader(message: GetAssistantDebuggerDeploymentResponse, reader: jspb.BinaryReader): GetAssistantDebuggerDeploymentResponse;
}

export namespace GetAssistantDebuggerDeploymentResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: AssistantDebuggerDeployment.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class GetAssistantWebpluginDeploymentResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): AssistantWebpluginDeployment | undefined;
  setData(value?: AssistantWebpluginDeployment): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantWebpluginDeploymentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantWebpluginDeploymentResponse): GetAssistantWebpluginDeploymentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantWebpluginDeploymentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantWebpluginDeploymentResponse;
  static deserializeBinaryFromReader(message: GetAssistantWebpluginDeploymentResponse, reader: jspb.BinaryReader): GetAssistantWebpluginDeploymentResponse;
}

export namespace GetAssistantWebpluginDeploymentResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: AssistantWebpluginDeployment.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class GetAssistantDeploymentRequest extends jspb.Message {
  getAssistantid(): string;
  setAssistantid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantDeploymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantDeploymentRequest): GetAssistantDeploymentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantDeploymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantDeploymentRequest;
  static deserializeBinaryFromReader(message: GetAssistantDeploymentRequest, reader: jspb.BinaryReader): GetAssistantDeploymentRequest;
}

export namespace GetAssistantDeploymentRequest {
  export type AsObject = {
    assistantid: string,
  }
}

