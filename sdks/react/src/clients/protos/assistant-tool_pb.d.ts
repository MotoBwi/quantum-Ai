// package: assistant_api
// file: assistant-tool.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class AssistantTool extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasFields(): boolean;
  clearFields(): void;
  getFields(): google_protobuf_struct_pb.Struct | undefined;
  setFields(value?: google_protobuf_struct_pb.Struct): void;

  getExecutionmethod(): string;
  setExecutionmethod(value: string): void;

  clearExecutionoptionsList(): void;
  getExecutionoptionsList(): Array<common_pb.Metadata>;
  setExecutionoptionsList(value: Array<common_pb.Metadata>): void;
  addExecutionoptions(value?: common_pb.Metadata, index?: number): common_pb.Metadata;

  getStatus(): string;
  setStatus(value: string): void;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantTool.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantTool): AssistantTool.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantTool, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantTool;
  static deserializeBinaryFromReader(message: AssistantTool, reader: jspb.BinaryReader): AssistantTool;
}

export namespace AssistantTool {
  export type AsObject = {
    id: string,
    assistantid: string,
    name: string,
    description: string,
    fields?: google_protobuf_struct_pb.Struct.AsObject,
    executionmethod: string,
    executionoptionsList: Array<common_pb.Metadata.AsObject>,
    status: string,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CreateAssistantToolRequest extends jspb.Message {
  getAssistantid(): string;
  setAssistantid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasFields(): boolean;
  clearFields(): void;
  getFields(): google_protobuf_struct_pb.Struct | undefined;
  setFields(value?: google_protobuf_struct_pb.Struct): void;

  getExecutionmethod(): string;
  setExecutionmethod(value: string): void;

  clearExecutionoptionsList(): void;
  getExecutionoptionsList(): Array<common_pb.Metadata>;
  setExecutionoptionsList(value: Array<common_pb.Metadata>): void;
  addExecutionoptions(value?: common_pb.Metadata, index?: number): common_pb.Metadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAssistantToolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAssistantToolRequest): CreateAssistantToolRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAssistantToolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAssistantToolRequest;
  static deserializeBinaryFromReader(message: CreateAssistantToolRequest, reader: jspb.BinaryReader): CreateAssistantToolRequest;
}

export namespace CreateAssistantToolRequest {
  export type AsObject = {
    assistantid: string,
    name: string,
    description: string,
    fields?: google_protobuf_struct_pb.Struct.AsObject,
    executionmethod: string,
    executionoptionsList: Array<common_pb.Metadata.AsObject>,
  }
}

export class UpdateAssistantToolRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasFields(): boolean;
  clearFields(): void;
  getFields(): google_protobuf_struct_pb.Struct | undefined;
  setFields(value?: google_protobuf_struct_pb.Struct): void;

  getExecutionmethod(): string;
  setExecutionmethod(value: string): void;

  clearExecutionoptionsList(): void;
  getExecutionoptionsList(): Array<common_pb.Metadata>;
  setExecutionoptionsList(value: Array<common_pb.Metadata>): void;
  addExecutionoptions(value?: common_pb.Metadata, index?: number): common_pb.Metadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAssistantToolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAssistantToolRequest): UpdateAssistantToolRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAssistantToolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAssistantToolRequest;
  static deserializeBinaryFromReader(message: UpdateAssistantToolRequest, reader: jspb.BinaryReader): UpdateAssistantToolRequest;
}

export namespace UpdateAssistantToolRequest {
  export type AsObject = {
    id: string,
    assistantid: string,
    name: string,
    description: string,
    fields?: google_protobuf_struct_pb.Struct.AsObject,
    executionmethod: string,
    executionoptionsList: Array<common_pb.Metadata.AsObject>,
  }
}

export class GetAssistantToolRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantToolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantToolRequest): GetAssistantToolRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantToolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantToolRequest;
  static deserializeBinaryFromReader(message: GetAssistantToolRequest, reader: jspb.BinaryReader): GetAssistantToolRequest;
}

export namespace GetAssistantToolRequest {
  export type AsObject = {
    id: string,
    assistantid: string,
  }
}

export class DeleteAssistantToolRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAssistantToolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAssistantToolRequest): DeleteAssistantToolRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAssistantToolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAssistantToolRequest;
  static deserializeBinaryFromReader(message: DeleteAssistantToolRequest, reader: jspb.BinaryReader): DeleteAssistantToolRequest;
}

export namespace DeleteAssistantToolRequest {
  export type AsObject = {
    id: string,
    assistantid: string,
  }
}

export class GetAssistantToolResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): AssistantTool | undefined;
  setData(value?: AssistantTool): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantToolResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantToolResponse): GetAssistantToolResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantToolResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantToolResponse;
  static deserializeBinaryFromReader(message: GetAssistantToolResponse, reader: jspb.BinaryReader): GetAssistantToolResponse;
}

export namespace GetAssistantToolResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: AssistantTool.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class GetAllAssistantToolRequest extends jspb.Message {
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
  toObject(includeInstance?: boolean): GetAllAssistantToolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantToolRequest): GetAllAssistantToolRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantToolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantToolRequest;
  static deserializeBinaryFromReader(message: GetAllAssistantToolRequest, reader: jspb.BinaryReader): GetAllAssistantToolRequest;
}

export namespace GetAllAssistantToolRequest {
  export type AsObject = {
    assistantid: string,
    paginate?: common_pb.Paginate.AsObject,
    criteriasList: Array<common_pb.Criteria.AsObject>,
  }
}

export class GetAllAssistantToolResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<AssistantTool>;
  setDataList(value: Array<AssistantTool>): void;
  addData(value?: AssistantTool, index?: number): AssistantTool;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): common_pb.Paginated | undefined;
  setPaginated(value?: common_pb.Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantToolResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantToolResponse): GetAllAssistantToolResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantToolResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantToolResponse;
  static deserializeBinaryFromReader(message: GetAllAssistantToolResponse, reader: jspb.BinaryReader): GetAllAssistantToolResponse;
}

export namespace GetAllAssistantToolResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<AssistantTool.AsObject>,
    error?: common_pb.Error.AsObject,
    paginated?: common_pb.Paginated.AsObject,
  }
}

export class GetAllAssistantToolLogRequest extends jspb.Message {
  getProjectid(): string;
  setProjectid(value: string): void;

  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): common_pb.Paginate | undefined;
  setPaginate(value?: common_pb.Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<common_pb.Criteria>;
  setCriteriasList(value: Array<common_pb.Criteria>): void;
  addCriterias(value?: common_pb.Criteria, index?: number): common_pb.Criteria;

  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): common_pb.Ordering | undefined;
  setOrder(value?: common_pb.Ordering): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantToolLogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantToolLogRequest): GetAllAssistantToolLogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantToolLogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantToolLogRequest;
  static deserializeBinaryFromReader(message: GetAllAssistantToolLogRequest, reader: jspb.BinaryReader): GetAllAssistantToolLogRequest;
}

export namespace GetAllAssistantToolLogRequest {
  export type AsObject = {
    projectid: string,
    paginate?: common_pb.Paginate.AsObject,
    criteriasList: Array<common_pb.Criteria.AsObject>,
    order?: common_pb.Ordering.AsObject,
  }
}

export class GetAssistantToolLogRequest extends jspb.Message {
  getProjectid(): string;
  setProjectid(value: string): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantToolLogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantToolLogRequest): GetAssistantToolLogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantToolLogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantToolLogRequest;
  static deserializeBinaryFromReader(message: GetAssistantToolLogRequest, reader: jspb.BinaryReader): GetAssistantToolLogRequest;
}

export namespace GetAssistantToolLogRequest {
  export type AsObject = {
    projectid: string,
    id: string,
  }
}

export class GetAssistantToolLogResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): AssistantToolLog | undefined;
  setData(value?: AssistantToolLog): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantToolLogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantToolLogResponse): GetAssistantToolLogResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantToolLogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantToolLogResponse;
  static deserializeBinaryFromReader(message: GetAssistantToolLogResponse, reader: jspb.BinaryReader): GetAssistantToolLogResponse;
}

export namespace GetAssistantToolLogResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: AssistantToolLog.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class GetAllAssistantToolLogResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<AssistantToolLog>;
  setDataList(value: Array<AssistantToolLog>): void;
  addData(value?: AssistantToolLog, index?: number): AssistantToolLog;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): common_pb.Paginated | undefined;
  setPaginated(value?: common_pb.Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantToolLogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantToolLogResponse): GetAllAssistantToolLogResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantToolLogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantToolLogResponse;
  static deserializeBinaryFromReader(message: GetAllAssistantToolLogResponse, reader: jspb.BinaryReader): GetAllAssistantToolLogResponse;
}

export namespace GetAllAssistantToolLogResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<AssistantToolLog.AsObject>,
    error?: common_pb.Error.AsObject,
    paginated?: common_pb.Paginated.AsObject,
  }
}

export class AssistantToolLog extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasAction(): boolean;
  clearAction(): void;
  getAction(): google_protobuf_struct_pb.Struct | undefined;
  setAction(value?: google_protobuf_struct_pb.Struct): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): google_protobuf_struct_pb.Struct | undefined;
  setRequest(value?: google_protobuf_struct_pb.Struct): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): google_protobuf_struct_pb.Struct | undefined;
  setResponse(value?: google_protobuf_struct_pb.Struct): void;

  getStatus(): string;
  setStatus(value: string): void;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  getProjectid(): string;
  setProjectid(value: string): void;

  getOrganizationid(): string;
  setOrganizationid(value: string): void;

  getAssistantconversationid(): string;
  setAssistantconversationid(value: string): void;

  getAssistantconversationmessageid(): string;
  setAssistantconversationmessageid(value: string): void;

  getAssetprefix(): string;
  setAssetprefix(value: string): void;

  getTimetaken(): string;
  setTimetaken(value: string): void;

  getAssistanttoolname(): string;
  setAssistanttoolname(value: string): void;

  getToolcallid(): string;
  setToolcallid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantToolLog.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantToolLog): AssistantToolLog.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantToolLog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantToolLog;
  static deserializeBinaryFromReader(message: AssistantToolLog, reader: jspb.BinaryReader): AssistantToolLog;
}

export namespace AssistantToolLog {
  export type AsObject = {
    id: string,
    action?: google_protobuf_struct_pb.Struct.AsObject,
    request?: google_protobuf_struct_pb.Struct.AsObject,
    response?: google_protobuf_struct_pb.Struct.AsObject,
    status: string,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    assistantid: string,
    projectid: string,
    organizationid: string,
    assistantconversationid: string,
    assistantconversationmessageid: string,
    assetprefix: string,
    timetaken: string,
    assistanttoolname: string,
    toolcallid: string,
  }
}

