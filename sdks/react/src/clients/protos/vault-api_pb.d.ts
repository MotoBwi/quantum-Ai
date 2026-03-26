// package: vault_api
// file: vault-api.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as common_pb from "./common_pb";

export class VaultCredential extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): google_protobuf_struct_pb.Struct | undefined;
  setValue(value?: google_protobuf_struct_pb.Struct): void;

  getStatus(): string;
  setStatus(value: string): void;

  getProvider(): string;
  setProvider(value: string): void;

  getOrganizationid(): string;
  setOrganizationid(value: string): void;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastuseddate(): boolean;
  clearLastuseddate(): void;
  getLastuseddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastuseddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VaultCredential.AsObject;
  static toObject(includeInstance: boolean, msg: VaultCredential): VaultCredential.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VaultCredential, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VaultCredential;
  static deserializeBinaryFromReader(message: VaultCredential, reader: jspb.BinaryReader): VaultCredential;
}

export namespace VaultCredential {
  export type AsObject = {
    id: string,
    name: string,
    value?: google_protobuf_struct_pb.Struct.AsObject,
    status: string,
    provider: string,
    organizationid: string,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastuseddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CreateProviderCredentialRequest extends jspb.Message {
  hasCredential(): boolean;
  clearCredential(): void;
  getCredential(): google_protobuf_struct_pb.Struct | undefined;
  setCredential(value?: google_protobuf_struct_pb.Struct): void;

  getName(): string;
  setName(value: string): void;

  getProvider(): string;
  setProvider(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProviderCredentialRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProviderCredentialRequest): CreateProviderCredentialRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateProviderCredentialRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProviderCredentialRequest;
  static deserializeBinaryFromReader(message: CreateProviderCredentialRequest, reader: jspb.BinaryReader): CreateProviderCredentialRequest;
}

export namespace CreateProviderCredentialRequest {
  export type AsObject = {
    credential?: google_protobuf_struct_pb.Struct.AsObject,
    name: string,
    provider: string,
  }
}

export class DeleteCredentialRequest extends jspb.Message {
  getVaultid(): string;
  setVaultid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCredentialRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCredentialRequest): DeleteCredentialRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCredentialRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCredentialRequest;
  static deserializeBinaryFromReader(message: DeleteCredentialRequest, reader: jspb.BinaryReader): DeleteCredentialRequest;
}

export namespace DeleteCredentialRequest {
  export type AsObject = {
    vaultid: string,
  }
}

export class GetAllOrganizationCredentialRequest extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): common_pb.Paginate | undefined;
  setPaginate(value?: common_pb.Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<common_pb.Criteria>;
  setCriteriasList(value: Array<common_pb.Criteria>): void;
  addCriterias(value?: common_pb.Criteria, index?: number): common_pb.Criteria;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllOrganizationCredentialRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllOrganizationCredentialRequest): GetAllOrganizationCredentialRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllOrganizationCredentialRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllOrganizationCredentialRequest;
  static deserializeBinaryFromReader(message: GetAllOrganizationCredentialRequest, reader: jspb.BinaryReader): GetAllOrganizationCredentialRequest;
}

export namespace GetAllOrganizationCredentialRequest {
  export type AsObject = {
    paginate?: common_pb.Paginate.AsObject,
    criteriasList: Array<common_pb.Criteria.AsObject>,
  }
}

export class GetAllOrganizationCredentialResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<VaultCredential>;
  setDataList(value: Array<VaultCredential>): void;
  addData(value?: VaultCredential, index?: number): VaultCredential;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): common_pb.Paginated | undefined;
  setPaginated(value?: common_pb.Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllOrganizationCredentialResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllOrganizationCredentialResponse): GetAllOrganizationCredentialResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllOrganizationCredentialResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllOrganizationCredentialResponse;
  static deserializeBinaryFromReader(message: GetAllOrganizationCredentialResponse, reader: jspb.BinaryReader): GetAllOrganizationCredentialResponse;
}

export namespace GetAllOrganizationCredentialResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<VaultCredential.AsObject>,
    error?: common_pb.Error.AsObject,
    paginated?: common_pb.Paginated.AsObject,
  }
}

export class GetCredentialResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): VaultCredential | undefined;
  setData(value?: VaultCredential): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCredentialResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCredentialResponse): GetCredentialResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCredentialResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCredentialResponse;
  static deserializeBinaryFromReader(message: GetCredentialResponse, reader: jspb.BinaryReader): GetCredentialResponse;
}

export namespace GetCredentialResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: VaultCredential.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class GetCredentialRequest extends jspb.Message {
  getVaultid(): string;
  setVaultid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCredentialRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCredentialRequest): GetCredentialRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCredentialRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCredentialRequest;
  static deserializeBinaryFromReader(message: GetCredentialRequest, reader: jspb.BinaryReader): GetCredentialRequest;
}

export namespace GetCredentialRequest {
  export type AsObject = {
    vaultid: string,
  }
}

