// package: assistant_api
// file: assistant-analysis.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";

export class AssistantAnalysis extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getEndpointid(): string;
  setEndpointid(value: string): void;

  getEndpointversion(): string;
  setEndpointversion(value: string): void;

  getEndpointparametersMap(): jspb.Map<string, string>;
  clearEndpointparametersMap(): void;
  getAssistantid(): string;
  setAssistantid(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  getCreatedby(): string;
  setCreatedby(value: string): void;

  hasCreateduser(): boolean;
  clearCreateduser(): void;
  getCreateduser(): common_pb.User | undefined;
  setCreateduser(value?: common_pb.User): void;

  getUpdatedby(): string;
  setUpdatedby(value: string): void;

  hasUpdateduser(): boolean;
  clearUpdateduser(): void;
  getUpdateduser(): common_pb.User | undefined;
  setUpdateduser(value?: common_pb.User): void;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getExecutionpriority(): number;
  setExecutionpriority(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantAnalysis.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantAnalysis): AssistantAnalysis.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantAnalysis, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantAnalysis;
  static deserializeBinaryFromReader(message: AssistantAnalysis, reader: jspb.BinaryReader): AssistantAnalysis;
}

export namespace AssistantAnalysis {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    endpointid: string,
    endpointversion: string,
    endpointparametersMap: Array<[string, string]>,
    assistantid: string,
    status: string,
    createdby: string,
    createduser?: common_pb.User.AsObject,
    updatedby: string,
    updateduser?: common_pb.User.AsObject,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    executionpriority: number,
  }
}

export class CreateAssistantAnalysisRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getEndpointid(): string;
  setEndpointid(value: string): void;

  getEndpointversion(): string;
  setEndpointversion(value: string): void;

  getEndpointparametersMap(): jspb.Map<string, string>;
  clearEndpointparametersMap(): void;
  getAssistantid(): string;
  setAssistantid(value: string): void;

  getExecutionpriority(): number;
  setExecutionpriority(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAssistantAnalysisRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAssistantAnalysisRequest): CreateAssistantAnalysisRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAssistantAnalysisRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAssistantAnalysisRequest;
  static deserializeBinaryFromReader(message: CreateAssistantAnalysisRequest, reader: jspb.BinaryReader): CreateAssistantAnalysisRequest;
}

export namespace CreateAssistantAnalysisRequest {
  export type AsObject = {
    name: string,
    description: string,
    endpointid: string,
    endpointversion: string,
    endpointparametersMap: Array<[string, string]>,
    assistantid: string,
    executionpriority: number,
  }
}

export class UpdateAssistantAnalysisRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getEndpointid(): string;
  setEndpointid(value: string): void;

  getEndpointversion(): string;
  setEndpointversion(value: string): void;

  getEndpointparametersMap(): jspb.Map<string, string>;
  clearEndpointparametersMap(): void;
  getAssistantid(): string;
  setAssistantid(value: string): void;

  getExecutionpriority(): number;
  setExecutionpriority(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAssistantAnalysisRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAssistantAnalysisRequest): UpdateAssistantAnalysisRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAssistantAnalysisRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAssistantAnalysisRequest;
  static deserializeBinaryFromReader(message: UpdateAssistantAnalysisRequest, reader: jspb.BinaryReader): UpdateAssistantAnalysisRequest;
}

export namespace UpdateAssistantAnalysisRequest {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    endpointid: string,
    endpointversion: string,
    endpointparametersMap: Array<[string, string]>,
    assistantid: string,
    executionpriority: number,
  }
}

export class GetAssistantAnalysisRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantAnalysisRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantAnalysisRequest): GetAssistantAnalysisRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantAnalysisRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantAnalysisRequest;
  static deserializeBinaryFromReader(message: GetAssistantAnalysisRequest, reader: jspb.BinaryReader): GetAssistantAnalysisRequest;
}

export namespace GetAssistantAnalysisRequest {
  export type AsObject = {
    id: string,
    assistantid: string,
  }
}

export class DeleteAssistantAnalysisRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAssistantAnalysisRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAssistantAnalysisRequest): DeleteAssistantAnalysisRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAssistantAnalysisRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAssistantAnalysisRequest;
  static deserializeBinaryFromReader(message: DeleteAssistantAnalysisRequest, reader: jspb.BinaryReader): DeleteAssistantAnalysisRequest;
}

export namespace DeleteAssistantAnalysisRequest {
  export type AsObject = {
    id: string,
    assistantid: string,
  }
}

export class GetAssistantAnalysisResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): AssistantAnalysis | undefined;
  setData(value?: AssistantAnalysis): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantAnalysisResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantAnalysisResponse): GetAssistantAnalysisResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantAnalysisResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantAnalysisResponse;
  static deserializeBinaryFromReader(message: GetAssistantAnalysisResponse, reader: jspb.BinaryReader): GetAssistantAnalysisResponse;
}

export namespace GetAssistantAnalysisResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: AssistantAnalysis.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class GetAllAssistantAnalysisRequest extends jspb.Message {
  getAssistantid(): string;
  setAssistantid(value: string): void;

  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): common_pb.Paginate | undefined;
  setPaginate(value?: common_pb.Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<common_pb.Criteria>;
  setCriteriasList(value: Array<common_pb.Criteria>): void;
  addCriterias(value?: common_pb.Criteria, index?: number): common_pb.Criteria;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantAnalysisRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantAnalysisRequest): GetAllAssistantAnalysisRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantAnalysisRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantAnalysisRequest;
  static deserializeBinaryFromReader(message: GetAllAssistantAnalysisRequest, reader: jspb.BinaryReader): GetAllAssistantAnalysisRequest;
}

export namespace GetAllAssistantAnalysisRequest {
  export type AsObject = {
    assistantid: string,
    paginate?: common_pb.Paginate.AsObject,
    criteriasList: Array<common_pb.Criteria.AsObject>,
  }
}

export class GetAllAssistantAnalysisResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<AssistantAnalysis>;
  setDataList(value: Array<AssistantAnalysis>): void;
  addData(value?: AssistantAnalysis, index?: number): AssistantAnalysis;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): common_pb.Paginated | undefined;
  setPaginated(value?: common_pb.Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantAnalysisResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantAnalysisResponse): GetAllAssistantAnalysisResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantAnalysisResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantAnalysisResponse;
  static deserializeBinaryFromReader(message: GetAllAssistantAnalysisResponse, reader: jspb.BinaryReader): GetAllAssistantAnalysisResponse;
}

export namespace GetAllAssistantAnalysisResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<AssistantAnalysis.AsObject>,
    error?: common_pb.Error.AsObject,
    paginated?: common_pb.Paginated.AsObject,
  }
}

