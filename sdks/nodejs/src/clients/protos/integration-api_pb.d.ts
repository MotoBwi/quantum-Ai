// package: integration_api
// file: integration-api.proto

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class Credential extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): google_protobuf_struct_pb.Struct | undefined;
  setValue(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Credential.AsObject;
  static toObject(includeInstance: boolean, msg: Credential): Credential.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Credential, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Credential;
  static deserializeBinaryFromReader(message: Credential, reader: jspb.BinaryReader): Credential;
}

export namespace Credential {
  export type AsObject = {
    id: string,
    value?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class ToolDefinition extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  hasFunctiondefinition(): boolean;
  clearFunctiondefinition(): void;
  getFunctiondefinition(): FunctionDefinition | undefined;
  setFunctiondefinition(value?: FunctionDefinition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToolDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: ToolDefinition): ToolDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ToolDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToolDefinition;
  static deserializeBinaryFromReader(message: ToolDefinition, reader: jspb.BinaryReader): ToolDefinition;
}

export namespace ToolDefinition {
  export type AsObject = {
    type: string,
    functiondefinition?: FunctionDefinition.AsObject,
  }
}

export class FunctionDefinition extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasParameters(): boolean;
  clearParameters(): void;
  getParameters(): FunctionParameter | undefined;
  setParameters(value?: FunctionParameter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FunctionDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: FunctionDefinition): FunctionDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FunctionDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FunctionDefinition;
  static deserializeBinaryFromReader(message: FunctionDefinition, reader: jspb.BinaryReader): FunctionDefinition;
}

export namespace FunctionDefinition {
  export type AsObject = {
    name: string,
    description: string,
    parameters?: FunctionParameter.AsObject,
  }
}

export class FunctionParameter extends jspb.Message {
  clearRequiredList(): void;
  getRequiredList(): Array<string>;
  setRequiredList(value: Array<string>): void;
  addRequired(value: string, index?: number): string;

  getType(): string;
  setType(value: string): void;

  getPropertiesMap(): jspb.Map<string, FunctionParameterProperty>;
  clearPropertiesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FunctionParameter.AsObject;
  static toObject(includeInstance: boolean, msg: FunctionParameter): FunctionParameter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FunctionParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FunctionParameter;
  static deserializeBinaryFromReader(message: FunctionParameter, reader: jspb.BinaryReader): FunctionParameter;
}

export namespace FunctionParameter {
  export type AsObject = {
    requiredList: Array<string>,
    type: string,
    propertiesMap: Array<[string, FunctionParameterProperty.AsObject]>,
  }
}

export class FunctionParameterProperty extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearEnumList(): void;
  getEnumList(): Array<string>;
  setEnumList(value: Array<string>): void;
  addEnum(value: string, index?: number): string;

  hasItems(): boolean;
  clearItems(): void;
  getItems(): FunctionParameter | undefined;
  setItems(value?: FunctionParameter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FunctionParameterProperty.AsObject;
  static toObject(includeInstance: boolean, msg: FunctionParameterProperty): FunctionParameterProperty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FunctionParameterProperty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FunctionParameterProperty;
  static deserializeBinaryFromReader(message: FunctionParameterProperty, reader: jspb.BinaryReader): FunctionParameterProperty;
}

export namespace FunctionParameterProperty {
  export type AsObject = {
    type: string,
    description: string,
    enumList: Array<string>,
    items?: FunctionParameter.AsObject,
  }
}

export class Embedding extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): void;

  clearEmbeddingList(): void;
  getEmbeddingList(): Array<number>;
  setEmbeddingList(value: Array<number>): void;
  addEmbedding(value: number, index?: number): number;

  getBase64(): string;
  setBase64(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Embedding.AsObject;
  static toObject(includeInstance: boolean, msg: Embedding): Embedding.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Embedding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Embedding;
  static deserializeBinaryFromReader(message: Embedding, reader: jspb.BinaryReader): Embedding;
}

export namespace Embedding {
  export type AsObject = {
    index: number,
    embeddingList: Array<number>,
    base64: string,
  }
}

export class EmbeddingRequest extends jspb.Message {
  hasCredential(): boolean;
  clearCredential(): void;
  getCredential(): Credential | undefined;
  setCredential(value?: Credential): void;

  getContentMap(): jspb.Map<number, string>;
  clearContentMap(): void;
  getModelparametersMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearModelparametersMap(): void;
  getAdditionaldataMap(): jspb.Map<string, string>;
  clearAdditionaldataMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmbeddingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EmbeddingRequest): EmbeddingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmbeddingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmbeddingRequest;
  static deserializeBinaryFromReader(message: EmbeddingRequest, reader: jspb.BinaryReader): EmbeddingRequest;
}

export namespace EmbeddingRequest {
  export type AsObject = {
    credential?: Credential.AsObject,
    contentMap: Array<[number, string]>,
    modelparametersMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    additionaldataMap: Array<[string, string]>,
  }
}

export class EmbeddingResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getRequestid(): number;
  setRequestid(value: number): void;

  clearDataList(): void;
  getDataList(): Array<Embedding>;
  setDataList(value: Array<Embedding>): void;
  addData(value?: Embedding, index?: number): Embedding;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  clearMetricsList(): void;
  getMetricsList(): Array<common_pb.Metric>;
  setMetricsList(value: Array<common_pb.Metric>): void;
  addMetrics(value?: common_pb.Metric, index?: number): common_pb.Metric;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmbeddingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EmbeddingResponse): EmbeddingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmbeddingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmbeddingResponse;
  static deserializeBinaryFromReader(message: EmbeddingResponse, reader: jspb.BinaryReader): EmbeddingResponse;
}

export namespace EmbeddingResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    requestid: number,
    dataList: Array<Embedding.AsObject>,
    error?: common_pb.Error.AsObject,
    metricsList: Array<common_pb.Metric.AsObject>,
  }
}

export class Reranking extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): void;

  getContent(): string;
  setContent(value: string): void;

  getRelevancescore(): number;
  setRelevancescore(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Reranking.AsObject;
  static toObject(includeInstance: boolean, msg: Reranking): Reranking.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Reranking, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Reranking;
  static deserializeBinaryFromReader(message: Reranking, reader: jspb.BinaryReader): Reranking;
}

export namespace Reranking {
  export type AsObject = {
    index: number,
    content: string,
    relevancescore: number,
  }
}

export class RerankingRequest extends jspb.Message {
  hasCredential(): boolean;
  clearCredential(): void;
  getCredential(): Credential | undefined;
  setCredential(value?: Credential): void;

  getQuery(): string;
  setQuery(value: string): void;

  getContentMap(): jspb.Map<number, string>;
  clearContentMap(): void;
  getModelparametersMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearModelparametersMap(): void;
  getAdditionaldataMap(): jspb.Map<string, string>;
  clearAdditionaldataMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RerankingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RerankingRequest): RerankingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RerankingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RerankingRequest;
  static deserializeBinaryFromReader(message: RerankingRequest, reader: jspb.BinaryReader): RerankingRequest;
}

export namespace RerankingRequest {
  export type AsObject = {
    credential?: Credential.AsObject,
    query: string,
    contentMap: Array<[number, string]>,
    modelparametersMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    additionaldataMap: Array<[string, string]>,
  }
}

export class RerankingResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getRequestid(): number;
  setRequestid(value: number): void;

  clearDataList(): void;
  getDataList(): Array<Reranking>;
  setDataList(value: Array<Reranking>): void;
  addData(value?: Reranking, index?: number): Reranking;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  clearMetricsList(): void;
  getMetricsList(): Array<common_pb.Metric>;
  setMetricsList(value: Array<common_pb.Metric>): void;
  addMetrics(value?: common_pb.Metric, index?: number): common_pb.Metric;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RerankingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RerankingResponse): RerankingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RerankingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RerankingResponse;
  static deserializeBinaryFromReader(message: RerankingResponse, reader: jspb.BinaryReader): RerankingResponse;
}

export namespace RerankingResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    requestid: number,
    dataList: Array<Reranking.AsObject>,
    error?: common_pb.Error.AsObject,
    metricsList: Array<common_pb.Metric.AsObject>,
  }
}

export class ChatResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getRequestid(): string;
  setRequestid(value: string): void;

  hasData(): boolean;
  clearData(): void;
  getData(): common_pb.Message | undefined;
  setData(value?: common_pb.Message): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  clearMetricsList(): void;
  getMetricsList(): Array<common_pb.Metric>;
  setMetricsList(value: Array<common_pb.Metric>): void;
  addMetrics(value?: common_pb.Metric, index?: number): common_pb.Metric;

  getFinishreason(): string;
  setFinishreason(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChatResponse): ChatResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChatResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatResponse;
  static deserializeBinaryFromReader(message: ChatResponse, reader: jspb.BinaryReader): ChatResponse;
}

export namespace ChatResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    requestid: string,
    data?: common_pb.Message.AsObject,
    error?: common_pb.Error.AsObject,
    metricsList: Array<common_pb.Metric.AsObject>,
    finishreason: string,
  }
}

export class ChatRequest extends jspb.Message {
  hasCredential(): boolean;
  clearCredential(): void;
  getCredential(): Credential | undefined;
  setCredential(value?: Credential): void;

  getRequestid(): string;
  setRequestid(value: string): void;

  clearConversationsList(): void;
  getConversationsList(): Array<common_pb.Message>;
  setConversationsList(value: Array<common_pb.Message>): void;
  addConversations(value?: common_pb.Message, index?: number): common_pb.Message;

  getAdditionaldataMap(): jspb.Map<string, string>;
  clearAdditionaldataMap(): void;
  getModelparametersMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearModelparametersMap(): void;
  clearTooldefinitionsList(): void;
  getTooldefinitionsList(): Array<ToolDefinition>;
  setTooldefinitionsList(value: Array<ToolDefinition>): void;
  addTooldefinitions(value?: ToolDefinition, index?: number): ToolDefinition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChatRequest): ChatRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatRequest;
  static deserializeBinaryFromReader(message: ChatRequest, reader: jspb.BinaryReader): ChatRequest;
}

export namespace ChatRequest {
  export type AsObject = {
    credential?: Credential.AsObject,
    requestid: string,
    conversationsList: Array<common_pb.Message.AsObject>,
    additionaldataMap: Array<[string, string]>,
    modelparametersMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    tooldefinitionsList: Array<ToolDefinition.AsObject>,
  }
}

export class VerifyCredentialRequest extends jspb.Message {
  hasCredential(): boolean;
  clearCredential(): void;
  getCredential(): Credential | undefined;
  setCredential(value?: Credential): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyCredentialRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyCredentialRequest): VerifyCredentialRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerifyCredentialRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyCredentialRequest;
  static deserializeBinaryFromReader(message: VerifyCredentialRequest, reader: jspb.BinaryReader): VerifyCredentialRequest;
}

export namespace VerifyCredentialRequest {
  export type AsObject = {
    credential?: Credential.AsObject,
  }
}

export class VerifyCredentialResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getRequestid(): number;
  setRequestid(value: number): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): string;
  setResponse(value: string): void;

  getErrormessage(): string;
  setErrormessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyCredentialResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyCredentialResponse): VerifyCredentialResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerifyCredentialResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyCredentialResponse;
  static deserializeBinaryFromReader(message: VerifyCredentialResponse, reader: jspb.BinaryReader): VerifyCredentialResponse;
}

export namespace VerifyCredentialResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    requestid: number,
    response: string,
    errormessage: string,
  }
}

export class Moderation extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Moderation.AsObject;
  static toObject(includeInstance: boolean, msg: Moderation): Moderation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Moderation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Moderation;
  static deserializeBinaryFromReader(message: Moderation, reader: jspb.BinaryReader): Moderation;
}

export namespace Moderation {
  export type AsObject = {
    name: string,
    value: string,
  }
}

export class GetModerationRequest extends jspb.Message {
  hasCredential(): boolean;
  clearCredential(): void;
  getCredential(): Credential | undefined;
  setCredential(value?: Credential): void;

  getModel(): string;
  setModel(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  getAdditionaldataMap(): jspb.Map<string, string>;
  clearAdditionaldataMap(): void;
  getModelparametersMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearModelparametersMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModerationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModerationRequest): GetModerationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetModerationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModerationRequest;
  static deserializeBinaryFromReader(message: GetModerationRequest, reader: jspb.BinaryReader): GetModerationRequest;
}

export namespace GetModerationRequest {
  export type AsObject = {
    credential?: Credential.AsObject,
    model: string,
    version: string,
    content: string,
    additionaldataMap: Array<[string, string]>,
    modelparametersMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
  }
}

export class GetModerationResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getRequestid(): number;
  setRequestid(value: number): void;

  clearDataList(): void;
  getDataList(): Array<Moderation>;
  setDataList(value: Array<Moderation>): void;
  addData(value?: Moderation, index?: number): Moderation;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  clearMetricsList(): void;
  getMetricsList(): Array<common_pb.Metric>;
  setMetricsList(value: Array<common_pb.Metric>): void;
  addMetrics(value?: common_pb.Metric, index?: number): common_pb.Metric;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModerationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetModerationResponse): GetModerationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetModerationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModerationResponse;
  static deserializeBinaryFromReader(message: GetModerationResponse, reader: jspb.BinaryReader): GetModerationResponse;
}

export namespace GetModerationResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    requestid: number,
    dataList: Array<Moderation.AsObject>,
    error?: common_pb.Error.AsObject,
    metricsList: Array<common_pb.Metric.AsObject>,
  }
}

