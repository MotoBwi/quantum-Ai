// package: integration_api
// file: audit-logging-api.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";

export class AuditLog extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getIntegrationname(): string;
  setIntegrationname(value: string): void;

  getAssetprefix(): string;
  setAssetprefix(value: string): void;

  getResponsestatus(): number;
  setResponsestatus(value: number): void;

  getTimetaken(): number;
  setTimetaken(value: number): void;

  getStatus(): string;
  setStatus(value: string): void;

  getProjectid(): string;
  setProjectid(value: string): void;

  getOrganizationid(): string;
  setOrganizationid(value: string): void;

  getCredentialid(): string;
  setCredentialid(value: string): void;

  clearExternalauditmetadatasList(): void;
  getExternalauditmetadatasList(): Array<common_pb.Metadata>;
  setExternalauditmetadatasList(value: Array<common_pb.Metadata>): void;
  addExternalauditmetadatas(value?: common_pb.Metadata, index?: number): common_pb.Metadata;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): google_protobuf_struct_pb.Struct | undefined;
  setRequest(value?: google_protobuf_struct_pb.Struct): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): google_protobuf_struct_pb.Struct | undefined;
  setResponse(value?: google_protobuf_struct_pb.Struct): void;

  clearMetricsList(): void;
  getMetricsList(): Array<common_pb.Metric>;
  setMetricsList(value: Array<common_pb.Metric>): void;
  addMetrics(value?: common_pb.Metric, index?: number): common_pb.Metric;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditLog.AsObject;
  static toObject(includeInstance: boolean, msg: AuditLog): AuditLog.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuditLog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditLog;
  static deserializeBinaryFromReader(message: AuditLog, reader: jspb.BinaryReader): AuditLog;
}

export namespace AuditLog {
  export type AsObject = {
    id: string,
    integrationname: string,
    assetprefix: string,
    responsestatus: number,
    timetaken: number,
    status: string,
    projectid: string,
    organizationid: string,
    credentialid: string,
    externalauditmetadatasList: Array<common_pb.Metadata.AsObject>,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    request?: google_protobuf_struct_pb.Struct.AsObject,
    response?: google_protobuf_struct_pb.Struct.AsObject,
    metricsList: Array<common_pb.Metric.AsObject>,
  }
}

export class GetAllAuditLogRequest extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): common_pb.Paginate | undefined;
  setPaginate(value?: common_pb.Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<common_pb.Criteria>;
  setCriteriasList(value: Array<common_pb.Criteria>): void;
  addCriterias(value?: common_pb.Criteria, index?: number): common_pb.Criteria;

  getProjectid(): string;
  setProjectid(value: string): void;

  getOrganizationid(): string;
  setOrganizationid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAuditLogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAuditLogRequest): GetAllAuditLogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAuditLogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAuditLogRequest;
  static deserializeBinaryFromReader(message: GetAllAuditLogRequest, reader: jspb.BinaryReader): GetAllAuditLogRequest;
}

export namespace GetAllAuditLogRequest {
  export type AsObject = {
    paginate?: common_pb.Paginate.AsObject,
    criteriasList: Array<common_pb.Criteria.AsObject>,
    projectid: string,
    organizationid: string,
  }
}

export class GetAllAuditLogResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<AuditLog>;
  setDataList(value: Array<AuditLog>): void;
  addData(value?: AuditLog, index?: number): AuditLog;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): common_pb.Paginated | undefined;
  setPaginated(value?: common_pb.Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAuditLogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAuditLogResponse): GetAllAuditLogResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAuditLogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAuditLogResponse;
  static deserializeBinaryFromReader(message: GetAllAuditLogResponse, reader: jspb.BinaryReader): GetAllAuditLogResponse;
}

export namespace GetAllAuditLogResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<AuditLog.AsObject>,
    error?: common_pb.Error.AsObject,
    paginated?: common_pb.Paginated.AsObject,
  }
}

export class GetAuditLogRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getProjectid(): string;
  setProjectid(value: string): void;

  getOrganizationid(): string;
  setOrganizationid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAuditLogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAuditLogRequest): GetAuditLogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAuditLogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAuditLogRequest;
  static deserializeBinaryFromReader(message: GetAuditLogRequest, reader: jspb.BinaryReader): GetAuditLogRequest;
}

export namespace GetAuditLogRequest {
  export type AsObject = {
    id: string,
    projectid: string,
    organizationid: string,
  }
}

export class GetAuditLogResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): AuditLog | undefined;
  setData(value?: AuditLog): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAuditLogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAuditLogResponse): GetAuditLogResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAuditLogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAuditLogResponse;
  static deserializeBinaryFromReader(message: GetAuditLogResponse, reader: jspb.BinaryReader): GetAuditLogResponse;
}

export namespace GetAuditLogResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: AuditLog.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class CreateMetadataRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAdditionaldataMap(): jspb.Map<string, string>;
  clearAdditionaldataMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMetadataRequest): CreateMetadataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateMetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMetadataRequest;
  static deserializeBinaryFromReader(message: CreateMetadataRequest, reader: jspb.BinaryReader): CreateMetadataRequest;
}

export namespace CreateMetadataRequest {
  export type AsObject = {
    id: string,
    additionaldataMap: Array<[string, string]>,
  }
}

export class CreateMetadataResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): AuditLog | undefined;
  setData(value?: AuditLog): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMetadataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMetadataResponse): CreateMetadataResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateMetadataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMetadataResponse;
  static deserializeBinaryFromReader(message: CreateMetadataResponse, reader: jspb.BinaryReader): CreateMetadataResponse;
}

export namespace CreateMetadataResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: AuditLog.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

