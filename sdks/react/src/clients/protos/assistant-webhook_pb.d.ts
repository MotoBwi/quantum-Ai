// package: assistant_api
// file: assistant-webhook.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class AssistantWebhook extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  clearAssistanteventsList(): void;
  getAssistanteventsList(): Array<string>;
  setAssistanteventsList(value: Array<string>): void;
  addAssistantevents(value: string, index?: number): string;

  getDescription(): string;
  setDescription(value: string): void;

  getHttpmethod(): string;
  setHttpmethod(value: string): void;

  getHttpurl(): string;
  setHttpurl(value: string): void;

  getHttpheadersMap(): jspb.Map<string, string>;
  clearHttpheadersMap(): void;
  getHttpbodyMap(): jspb.Map<string, string>;
  clearHttpbodyMap(): void;
  getTimeoutsecond(): number;
  setTimeoutsecond(value: number): void;

  getExecutionpriority(): number;
  setExecutionpriority(value: number): void;

  clearRetrystatuscodesList(): void;
  getRetrystatuscodesList(): Array<string>;
  setRetrystatuscodesList(value: Array<string>): void;
  addRetrystatuscodes(value: string, index?: number): string;

  getRetrycount(): number;
  setRetrycount(value: number): void;

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

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantWebhook.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantWebhook): AssistantWebhook.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantWebhook, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantWebhook;
  static deserializeBinaryFromReader(message: AssistantWebhook, reader: jspb.BinaryReader): AssistantWebhook;
}

export namespace AssistantWebhook {
  export type AsObject = {
    id: string,
    assistanteventsList: Array<string>,
    description: string,
    httpmethod: string,
    httpurl: string,
    httpheadersMap: Array<[string, string]>,
    httpbodyMap: Array<[string, string]>,
    timeoutsecond: number,
    executionpriority: number,
    retrystatuscodesList: Array<string>,
    retrycount: number,
    assistantid: string,
    status: string,
    createdby: string,
    createduser?: common_pb.User.AsObject,
    updatedby: string,
    updateduser?: common_pb.User.AsObject,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class AssistantWebhookLog extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getWebhookid(): string;
  setWebhookid(value: string): void;

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

  getAssetprefix(): string;
  setAssetprefix(value: string): void;

  getEvent(): string;
  setEvent(value: string): void;

  getResponsestatus(): string;
  setResponsestatus(value: string): void;

  getTimetaken(): string;
  setTimetaken(value: string): void;

  getRetrycount(): number;
  setRetrycount(value: number): void;

  getHttpmethod(): string;
  setHttpmethod(value: string): void;

  getHttpurl(): string;
  setHttpurl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantWebhookLog.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantWebhookLog): AssistantWebhookLog.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantWebhookLog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantWebhookLog;
  static deserializeBinaryFromReader(message: AssistantWebhookLog, reader: jspb.BinaryReader): AssistantWebhookLog;
}

export namespace AssistantWebhookLog {
  export type AsObject = {
    id: string,
    webhookid: string,
    request?: google_protobuf_struct_pb.Struct.AsObject,
    response?: google_protobuf_struct_pb.Struct.AsObject,
    status: string,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    assistantid: string,
    projectid: string,
    organizationid: string,
    assistantconversationid: string,
    assetprefix: string,
    event: string,
    responsestatus: string,
    timetaken: string,
    retrycount: number,
    httpmethod: string,
    httpurl: string,
  }
}

export class CreateAssistantWebhookRequest extends jspb.Message {
  clearAssistanteventsList(): void;
  getAssistanteventsList(): Array<string>;
  setAssistanteventsList(value: Array<string>): void;
  addAssistantevents(value: string, index?: number): string;

  getDescription(): string;
  setDescription(value: string): void;

  getHttpmethod(): string;
  setHttpmethod(value: string): void;

  getHttpurl(): string;
  setHttpurl(value: string): void;

  getHttpheadersMap(): jspb.Map<string, string>;
  clearHttpheadersMap(): void;
  getHttpbodyMap(): jspb.Map<string, string>;
  clearHttpbodyMap(): void;
  getTimeoutsecond(): number;
  setTimeoutsecond(value: number): void;

  clearRetrystatuscodesList(): void;
  getRetrystatuscodesList(): Array<string>;
  setRetrystatuscodesList(value: Array<string>): void;
  addRetrystatuscodes(value: string, index?: number): string;

  getMaxretrycount(): number;
  setMaxretrycount(value: number): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  getExecutionpriority(): number;
  setExecutionpriority(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAssistantWebhookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAssistantWebhookRequest): CreateAssistantWebhookRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAssistantWebhookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAssistantWebhookRequest;
  static deserializeBinaryFromReader(message: CreateAssistantWebhookRequest, reader: jspb.BinaryReader): CreateAssistantWebhookRequest;
}

export namespace CreateAssistantWebhookRequest {
  export type AsObject = {
    assistanteventsList: Array<string>,
    description: string,
    httpmethod: string,
    httpurl: string,
    httpheadersMap: Array<[string, string]>,
    httpbodyMap: Array<[string, string]>,
    timeoutsecond: number,
    retrystatuscodesList: Array<string>,
    maxretrycount: number,
    assistantid: string,
    executionpriority: number,
  }
}

export class UpdateAssistantWebhookRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  clearAssistanteventsList(): void;
  getAssistanteventsList(): Array<string>;
  setAssistanteventsList(value: Array<string>): void;
  addAssistantevents(value: string, index?: number): string;

  getDescription(): string;
  setDescription(value: string): void;

  getHttpmethod(): string;
  setHttpmethod(value: string): void;

  getHttpurl(): string;
  setHttpurl(value: string): void;

  getHttpheadersMap(): jspb.Map<string, string>;
  clearHttpheadersMap(): void;
  getHttpbodyMap(): jspb.Map<string, string>;
  clearHttpbodyMap(): void;
  getTimeoutsecond(): number;
  setTimeoutsecond(value: number): void;

  clearRetrystatuscodesList(): void;
  getRetrystatuscodesList(): Array<string>;
  setRetrystatuscodesList(value: Array<string>): void;
  addRetrystatuscodes(value: string, index?: number): string;

  getMaxretrycount(): number;
  setMaxretrycount(value: number): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  getExecutionpriority(): number;
  setExecutionpriority(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAssistantWebhookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAssistantWebhookRequest): UpdateAssistantWebhookRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAssistantWebhookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAssistantWebhookRequest;
  static deserializeBinaryFromReader(message: UpdateAssistantWebhookRequest, reader: jspb.BinaryReader): UpdateAssistantWebhookRequest;
}

export namespace UpdateAssistantWebhookRequest {
  export type AsObject = {
    id: string,
    assistanteventsList: Array<string>,
    description: string,
    httpmethod: string,
    httpurl: string,
    httpheadersMap: Array<[string, string]>,
    httpbodyMap: Array<[string, string]>,
    timeoutsecond: number,
    retrystatuscodesList: Array<string>,
    maxretrycount: number,
    assistantid: string,
    executionpriority: number,
  }
}

export class GetAssistantWebhookRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantWebhookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantWebhookRequest): GetAssistantWebhookRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantWebhookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantWebhookRequest;
  static deserializeBinaryFromReader(message: GetAssistantWebhookRequest, reader: jspb.BinaryReader): GetAssistantWebhookRequest;
}

export namespace GetAssistantWebhookRequest {
  export type AsObject = {
    id: string,
    assistantid: string,
  }
}

export class DeleteAssistantWebhookRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAssistantWebhookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAssistantWebhookRequest): DeleteAssistantWebhookRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAssistantWebhookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAssistantWebhookRequest;
  static deserializeBinaryFromReader(message: DeleteAssistantWebhookRequest, reader: jspb.BinaryReader): DeleteAssistantWebhookRequest;
}

export namespace DeleteAssistantWebhookRequest {
  export type AsObject = {
    id: string,
    assistantid: string,
  }
}

export class GetAssistantWebhookResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): AssistantWebhook | undefined;
  setData(value?: AssistantWebhook): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantWebhookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantWebhookResponse): GetAssistantWebhookResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantWebhookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantWebhookResponse;
  static deserializeBinaryFromReader(message: GetAssistantWebhookResponse, reader: jspb.BinaryReader): GetAssistantWebhookResponse;
}

export namespace GetAssistantWebhookResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: AssistantWebhook.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class GetAllAssistantWebhookRequest extends jspb.Message {
  getWebhookid(): string;
  setWebhookid(value: string): void;

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
  toObject(includeInstance?: boolean): GetAllAssistantWebhookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantWebhookRequest): GetAllAssistantWebhookRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantWebhookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantWebhookRequest;
  static deserializeBinaryFromReader(message: GetAllAssistantWebhookRequest, reader: jspb.BinaryReader): GetAllAssistantWebhookRequest;
}

export namespace GetAllAssistantWebhookRequest {
  export type AsObject = {
    webhookid: string,
    assistantid: string,
    paginate?: common_pb.Paginate.AsObject,
    criteriasList: Array<common_pb.Criteria.AsObject>,
  }
}

export class GetAllAssistantWebhookResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<AssistantWebhook>;
  setDataList(value: Array<AssistantWebhook>): void;
  addData(value?: AssistantWebhook, index?: number): AssistantWebhook;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): common_pb.Paginated | undefined;
  setPaginated(value?: common_pb.Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantWebhookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantWebhookResponse): GetAllAssistantWebhookResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantWebhookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantWebhookResponse;
  static deserializeBinaryFromReader(message: GetAllAssistantWebhookResponse, reader: jspb.BinaryReader): GetAllAssistantWebhookResponse;
}

export namespace GetAllAssistantWebhookResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<AssistantWebhook.AsObject>,
    error?: common_pb.Error.AsObject,
    paginated?: common_pb.Paginated.AsObject,
  }
}

export class GetAllAssistantWebhookLogRequest extends jspb.Message {
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
  toObject(includeInstance?: boolean): GetAllAssistantWebhookLogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantWebhookLogRequest): GetAllAssistantWebhookLogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantWebhookLogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantWebhookLogRequest;
  static deserializeBinaryFromReader(message: GetAllAssistantWebhookLogRequest, reader: jspb.BinaryReader): GetAllAssistantWebhookLogRequest;
}

export namespace GetAllAssistantWebhookLogRequest {
  export type AsObject = {
    projectid: string,
    paginate?: common_pb.Paginate.AsObject,
    criteriasList: Array<common_pb.Criteria.AsObject>,
    order?: common_pb.Ordering.AsObject,
  }
}

export class GetAssistantWebhookLogRequest extends jspb.Message {
  getProjectid(): string;
  setProjectid(value: string): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantWebhookLogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantWebhookLogRequest): GetAssistantWebhookLogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantWebhookLogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantWebhookLogRequest;
  static deserializeBinaryFromReader(message: GetAssistantWebhookLogRequest, reader: jspb.BinaryReader): GetAssistantWebhookLogRequest;
}

export namespace GetAssistantWebhookLogRequest {
  export type AsObject = {
    projectid: string,
    id: string,
  }
}

export class GetAssistantWebhookLogResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): AssistantWebhookLog | undefined;
  setData(value?: AssistantWebhookLog): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantWebhookLogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantWebhookLogResponse): GetAssistantWebhookLogResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantWebhookLogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantWebhookLogResponse;
  static deserializeBinaryFromReader(message: GetAssistantWebhookLogResponse, reader: jspb.BinaryReader): GetAssistantWebhookLogResponse;
}

export namespace GetAssistantWebhookLogResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: AssistantWebhookLog.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class GetAllAssistantWebhookLogResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<AssistantWebhookLog>;
  setDataList(value: Array<AssistantWebhookLog>): void;
  addData(value?: AssistantWebhookLog, index?: number): AssistantWebhookLog;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): common_pb.Paginated | undefined;
  setPaginated(value?: common_pb.Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantWebhookLogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantWebhookLogResponse): GetAllAssistantWebhookLogResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantWebhookLogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantWebhookLogResponse;
  static deserializeBinaryFromReader(message: GetAllAssistantWebhookLogResponse, reader: jspb.BinaryReader): GetAllAssistantWebhookLogResponse;
}

export namespace GetAllAssistantWebhookLogResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<AssistantWebhookLog.AsObject>,
    error?: common_pb.Error.AsObject,
    paginated?: common_pb.Paginated.AsObject,
  }
}

