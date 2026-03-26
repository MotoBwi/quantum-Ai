// package: assistant_api
// file: assistant-knowledge.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";

export class AssistantKnowledge extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getKnowledgeid(): string;
  setKnowledgeid(value: string): void;

  getRerankerenable(): boolean;
  setRerankerenable(value: boolean): void;

  getTopk(): number;
  setTopk(value: number): void;

  getScorethreshold(): number;
  setScorethreshold(value: number): void;

  hasKnowledge(): boolean;
  clearKnowledge(): void;
  getKnowledge(): common_pb.Knowledge | undefined;
  setKnowledge(value?: common_pb.Knowledge): void;

  getRetrievalmethod(): string;
  setRetrievalmethod(value: string): void;

  getRerankermodelproviderid(): string;
  setRerankermodelproviderid(value: string): void;

  getRerankermodelprovidername(): string;
  setRerankermodelprovidername(value: string): void;

  clearAssistantknowledgererankeroptionsList(): void;
  getAssistantknowledgererankeroptionsList(): Array<common_pb.Metadata>;
  setAssistantknowledgererankeroptionsList(value: Array<common_pb.Metadata>): void;
  addAssistantknowledgererankeroptions(value?: common_pb.Metadata, index?: number): common_pb.Metadata;

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

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantKnowledge.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantKnowledge): AssistantKnowledge.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantKnowledge, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantKnowledge;
  static deserializeBinaryFromReader(message: AssistantKnowledge, reader: jspb.BinaryReader): AssistantKnowledge;
}

export namespace AssistantKnowledge {
  export type AsObject = {
    id: string,
    knowledgeid: string,
    rerankerenable: boolean,
    topk: number,
    scorethreshold: number,
    knowledge?: common_pb.Knowledge.AsObject,
    retrievalmethod: string,
    rerankermodelproviderid: string,
    rerankermodelprovidername: string,
    assistantknowledgererankeroptionsList: Array<common_pb.Metadata.AsObject>,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: string,
  }
}

export class CreateAssistantKnowledgeRequest extends jspb.Message {
  getKnowledgeid(): string;
  setKnowledgeid(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  getRerankermodelproviderid(): string;
  setRerankermodelproviderid(value: string): void;

  getRerankermodelprovidername(): string;
  setRerankermodelprovidername(value: string): void;

  clearAssistantknowledgererankeroptionsList(): void;
  getAssistantknowledgererankeroptionsList(): Array<common_pb.Metadata>;
  setAssistantknowledgererankeroptionsList(value: Array<common_pb.Metadata>): void;
  addAssistantknowledgererankeroptions(value?: common_pb.Metadata, index?: number): common_pb.Metadata;

  getTopk(): number;
  setTopk(value: number): void;

  getScorethreshold(): number;
  setScorethreshold(value: number): void;

  getRetrievalmethod(): string;
  setRetrievalmethod(value: string): void;

  getRerankerenable(): boolean;
  setRerankerenable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAssistantKnowledgeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAssistantKnowledgeRequest): CreateAssistantKnowledgeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAssistantKnowledgeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAssistantKnowledgeRequest;
  static deserializeBinaryFromReader(message: CreateAssistantKnowledgeRequest, reader: jspb.BinaryReader): CreateAssistantKnowledgeRequest;
}

export namespace CreateAssistantKnowledgeRequest {
  export type AsObject = {
    knowledgeid: string,
    assistantid: string,
    rerankermodelproviderid: string,
    rerankermodelprovidername: string,
    assistantknowledgererankeroptionsList: Array<common_pb.Metadata.AsObject>,
    topk: number,
    scorethreshold: number,
    retrievalmethod: string,
    rerankerenable: boolean,
  }
}

export class UpdateAssistantKnowledgeRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getKnowledgeid(): string;
  setKnowledgeid(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  getRerankermodelproviderid(): string;
  setRerankermodelproviderid(value: string): void;

  getRerankermodelprovidername(): string;
  setRerankermodelprovidername(value: string): void;

  clearAssistantknowledgererankeroptionsList(): void;
  getAssistantknowledgererankeroptionsList(): Array<common_pb.Metadata>;
  setAssistantknowledgererankeroptionsList(value: Array<common_pb.Metadata>): void;
  addAssistantknowledgererankeroptions(value?: common_pb.Metadata, index?: number): common_pb.Metadata;

  getScorethreshold(): number;
  setScorethreshold(value: number): void;

  getTopk(): number;
  setTopk(value: number): void;

  getRetrievalmethod(): string;
  setRetrievalmethod(value: string): void;

  getRerankerenable(): boolean;
  setRerankerenable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAssistantKnowledgeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAssistantKnowledgeRequest): UpdateAssistantKnowledgeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAssistantKnowledgeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAssistantKnowledgeRequest;
  static deserializeBinaryFromReader(message: UpdateAssistantKnowledgeRequest, reader: jspb.BinaryReader): UpdateAssistantKnowledgeRequest;
}

export namespace UpdateAssistantKnowledgeRequest {
  export type AsObject = {
    id: string,
    knowledgeid: string,
    assistantid: string,
    rerankermodelproviderid: string,
    rerankermodelprovidername: string,
    assistantknowledgererankeroptionsList: Array<common_pb.Metadata.AsObject>,
    scorethreshold: number,
    topk: number,
    retrievalmethod: string,
    rerankerenable: boolean,
  }
}

export class GetAssistantKnowledgeRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantKnowledgeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantKnowledgeRequest): GetAssistantKnowledgeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantKnowledgeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantKnowledgeRequest;
  static deserializeBinaryFromReader(message: GetAssistantKnowledgeRequest, reader: jspb.BinaryReader): GetAssistantKnowledgeRequest;
}

export namespace GetAssistantKnowledgeRequest {
  export type AsObject = {
    id: string,
    assistantid: string,
  }
}

export class DeleteAssistantKnowledgeRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAssistantKnowledgeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAssistantKnowledgeRequest): DeleteAssistantKnowledgeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAssistantKnowledgeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAssistantKnowledgeRequest;
  static deserializeBinaryFromReader(message: DeleteAssistantKnowledgeRequest, reader: jspb.BinaryReader): DeleteAssistantKnowledgeRequest;
}

export namespace DeleteAssistantKnowledgeRequest {
  export type AsObject = {
    id: string,
    assistantid: string,
  }
}

export class GetAssistantKnowledgeResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): AssistantKnowledge | undefined;
  setData(value?: AssistantKnowledge): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantKnowledgeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantKnowledgeResponse): GetAssistantKnowledgeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantKnowledgeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantKnowledgeResponse;
  static deserializeBinaryFromReader(message: GetAssistantKnowledgeResponse, reader: jspb.BinaryReader): GetAssistantKnowledgeResponse;
}

export namespace GetAssistantKnowledgeResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: AssistantKnowledge.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class GetAllAssistantKnowledgeRequest extends jspb.Message {
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
  toObject(includeInstance?: boolean): GetAllAssistantKnowledgeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantKnowledgeRequest): GetAllAssistantKnowledgeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantKnowledgeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantKnowledgeRequest;
  static deserializeBinaryFromReader(message: GetAllAssistantKnowledgeRequest, reader: jspb.BinaryReader): GetAllAssistantKnowledgeRequest;
}

export namespace GetAllAssistantKnowledgeRequest {
  export type AsObject = {
    assistantid: string,
    paginate?: common_pb.Paginate.AsObject,
    criteriasList: Array<common_pb.Criteria.AsObject>,
  }
}

export class GetAllAssistantKnowledgeResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<AssistantKnowledge>;
  setDataList(value: Array<AssistantKnowledge>): void;
  addData(value?: AssistantKnowledge, index?: number): AssistantKnowledge;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): common_pb.Paginated | undefined;
  setPaginated(value?: common_pb.Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantKnowledgeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantKnowledgeResponse): GetAllAssistantKnowledgeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantKnowledgeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantKnowledgeResponse;
  static deserializeBinaryFromReader(message: GetAllAssistantKnowledgeResponse, reader: jspb.BinaryReader): GetAllAssistantKnowledgeResponse;
}

export namespace GetAllAssistantKnowledgeResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<AssistantKnowledge.AsObject>,
    error?: common_pb.Error.AsObject,
    paginated?: common_pb.Paginated.AsObject,
  }
}

