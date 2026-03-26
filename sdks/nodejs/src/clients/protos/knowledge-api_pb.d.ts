// package: knowledge_api
// file: knowledge-api.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class CreateKnowledgeRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  getVisibility(): string;
  setVisibility(value: string): void;

  getEmbeddingmodelprovidername(): string;
  setEmbeddingmodelprovidername(value: string): void;

  clearKnowledgeembeddingmodeloptionsList(): void;
  getKnowledgeembeddingmodeloptionsList(): Array<common_pb.Metadata>;
  setKnowledgeembeddingmodeloptionsList(value: Array<common_pb.Metadata>): void;
  addKnowledgeembeddingmodeloptions(value?: common_pb.Metadata, index?: number): common_pb.Metadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateKnowledgeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateKnowledgeRequest): CreateKnowledgeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateKnowledgeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateKnowledgeRequest;
  static deserializeBinaryFromReader(message: CreateKnowledgeRequest, reader: jspb.BinaryReader): CreateKnowledgeRequest;
}

export namespace CreateKnowledgeRequest {
  export type AsObject = {
    name: string,
    description: string,
    tagsList: Array<string>,
    visibility: string,
    embeddingmodelprovidername: string,
    knowledgeembeddingmodeloptionsList: Array<common_pb.Metadata.AsObject>,
  }
}

export class CreateKnowledgeResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): common_pb.Knowledge | undefined;
  setData(value?: common_pb.Knowledge): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateKnowledgeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateKnowledgeResponse): CreateKnowledgeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateKnowledgeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateKnowledgeResponse;
  static deserializeBinaryFromReader(message: CreateKnowledgeResponse, reader: jspb.BinaryReader): CreateKnowledgeResponse;
}

export namespace CreateKnowledgeResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: common_pb.Knowledge.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class GetAllKnowledgeRequest extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): common_pb.Paginate | undefined;
  setPaginate(value?: common_pb.Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<common_pb.Criteria>;
  setCriteriasList(value: Array<common_pb.Criteria>): void;
  addCriterias(value?: common_pb.Criteria, index?: number): common_pb.Criteria;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllKnowledgeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllKnowledgeRequest): GetAllKnowledgeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllKnowledgeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllKnowledgeRequest;
  static deserializeBinaryFromReader(message: GetAllKnowledgeRequest, reader: jspb.BinaryReader): GetAllKnowledgeRequest;
}

export namespace GetAllKnowledgeRequest {
  export type AsObject = {
    paginate?: common_pb.Paginate.AsObject,
    criteriasList: Array<common_pb.Criteria.AsObject>,
  }
}

export class GetAllKnowledgeResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<common_pb.Knowledge>;
  setDataList(value: Array<common_pb.Knowledge>): void;
  addData(value?: common_pb.Knowledge, index?: number): common_pb.Knowledge;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): common_pb.Paginated | undefined;
  setPaginated(value?: common_pb.Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllKnowledgeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllKnowledgeResponse): GetAllKnowledgeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllKnowledgeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllKnowledgeResponse;
  static deserializeBinaryFromReader(message: GetAllKnowledgeResponse, reader: jspb.BinaryReader): GetAllKnowledgeResponse;
}

export namespace GetAllKnowledgeResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<common_pb.Knowledge.AsObject>,
    error?: common_pb.Error.AsObject,
    paginated?: common_pb.Paginated.AsObject,
  }
}

export class GetKnowledgeRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKnowledgeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetKnowledgeRequest): GetKnowledgeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetKnowledgeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKnowledgeRequest;
  static deserializeBinaryFromReader(message: GetKnowledgeRequest, reader: jspb.BinaryReader): GetKnowledgeRequest;
}

export namespace GetKnowledgeRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetKnowledgeResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): common_pb.Knowledge | undefined;
  setData(value?: common_pb.Knowledge): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKnowledgeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetKnowledgeResponse): GetKnowledgeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetKnowledgeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKnowledgeResponse;
  static deserializeBinaryFromReader(message: GetKnowledgeResponse, reader: jspb.BinaryReader): GetKnowledgeResponse;
}

export namespace GetKnowledgeResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: common_pb.Knowledge.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class CreateKnowledgeTagRequest extends jspb.Message {
  getKnowledgeid(): string;
  setKnowledgeid(value: string): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateKnowledgeTagRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateKnowledgeTagRequest): CreateKnowledgeTagRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateKnowledgeTagRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateKnowledgeTagRequest;
  static deserializeBinaryFromReader(message: CreateKnowledgeTagRequest, reader: jspb.BinaryReader): CreateKnowledgeTagRequest;
}

export namespace CreateKnowledgeTagRequest {
  export type AsObject = {
    knowledgeid: string,
    tagsList: Array<string>,
  }
}

export class KnowledgeDocument extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getKnowledgeid(): string;
  setKnowledgeid(value: string): void;

  getLanguage(): string;
  setLanguage(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasDocumentsource(): boolean;
  clearDocumentsource(): void;
  getDocumentsource(): google_protobuf_struct_pb.Struct | undefined;
  setDocumentsource(value?: google_protobuf_struct_pb.Struct): void;

  getDocumenttype(): string;
  setDocumenttype(value: string): void;

  getDocumentsize(): number;
  setDocumentsize(value: number): void;

  getDocumentpath(): string;
  setDocumentpath(value: string): void;

  getIndexstatus(): string;
  setIndexstatus(value: string): void;

  getRetrievalcount(): number;
  setRetrievalcount(value: number): void;

  getTokencount(): number;
  setTokencount(value: number): void;

  getWordcount(): number;
  setWordcount(value: number): void;

  getDisplaystatus(): string;
  setDisplaystatus(value: string): void;

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
  toObject(includeInstance?: boolean): KnowledgeDocument.AsObject;
  static toObject(includeInstance: boolean, msg: KnowledgeDocument): KnowledgeDocument.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KnowledgeDocument, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KnowledgeDocument;
  static deserializeBinaryFromReader(message: KnowledgeDocument, reader: jspb.BinaryReader): KnowledgeDocument;
}

export namespace KnowledgeDocument {
  export type AsObject = {
    id: string,
    knowledgeid: string,
    language: string,
    name: string,
    description: string,
    documentsource?: google_protobuf_struct_pb.Struct.AsObject,
    documenttype: string,
    documentsize: number,
    documentpath: string,
    indexstatus: string,
    retrievalcount: number,
    tokencount: number,
    wordcount: number,
    displaystatus: string,
    status: string,
    createdby: string,
    createduser?: common_pb.User.AsObject,
    updatedby: string,
    updateduser?: common_pb.User.AsObject,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetAllKnowledgeDocumentRequest extends jspb.Message {
  getKnowledgeid(): string;
  setKnowledgeid(value: string): void;

  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): common_pb.Paginate | undefined;
  setPaginate(value?: common_pb.Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<common_pb.Criteria>;
  setCriteriasList(value: Array<common_pb.Criteria>): void;
  addCriterias(value?: common_pb.Criteria, index?: number): common_pb.Criteria;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllKnowledgeDocumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllKnowledgeDocumentRequest): GetAllKnowledgeDocumentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllKnowledgeDocumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllKnowledgeDocumentRequest;
  static deserializeBinaryFromReader(message: GetAllKnowledgeDocumentRequest, reader: jspb.BinaryReader): GetAllKnowledgeDocumentRequest;
}

export namespace GetAllKnowledgeDocumentRequest {
  export type AsObject = {
    knowledgeid: string,
    paginate?: common_pb.Paginate.AsObject,
    criteriasList: Array<common_pb.Criteria.AsObject>,
  }
}

export class GetAllKnowledgeDocumentResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<KnowledgeDocument>;
  setDataList(value: Array<KnowledgeDocument>): void;
  addData(value?: KnowledgeDocument, index?: number): KnowledgeDocument;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): common_pb.Paginated | undefined;
  setPaginated(value?: common_pb.Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllKnowledgeDocumentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllKnowledgeDocumentResponse): GetAllKnowledgeDocumentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllKnowledgeDocumentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllKnowledgeDocumentResponse;
  static deserializeBinaryFromReader(message: GetAllKnowledgeDocumentResponse, reader: jspb.BinaryReader): GetAllKnowledgeDocumentResponse;
}

export namespace GetAllKnowledgeDocumentResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<KnowledgeDocument.AsObject>,
    error?: common_pb.Error.AsObject,
    paginated?: common_pb.Paginated.AsObject,
  }
}

export class DocumentContent extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getContenttype(): string;
  setContenttype(value: string): void;

  getContentformat(): string;
  setContentformat(value: string): void;

  getContent(): Uint8Array | string;
  getContent_asU8(): Uint8Array;
  getContent_asB64(): string;
  setContent(value: Uint8Array | string): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): google_protobuf_struct_pb.Struct | undefined;
  setMeta(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentContent.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentContent): DocumentContent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DocumentContent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentContent;
  static deserializeBinaryFromReader(message: DocumentContent, reader: jspb.BinaryReader): DocumentContent;
}

export namespace DocumentContent {
  export type AsObject = {
    name: string,
    contenttype: string,
    contentformat: string,
    content: Uint8Array | string,
    meta?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class CreateKnowledgeDocumentRequest extends jspb.Message {
  getKnowledgeid(): string;
  setKnowledgeid(value: string): void;

  getDocumentsource(): CreateKnowledgeDocumentRequest.DOCUMENT_SOURCEMap[keyof CreateKnowledgeDocumentRequest.DOCUMENT_SOURCEMap];
  setDocumentsource(value: CreateKnowledgeDocumentRequest.DOCUMENT_SOURCEMap[keyof CreateKnowledgeDocumentRequest.DOCUMENT_SOURCEMap]): void;

  getDatasource(): string;
  setDatasource(value: string): void;

  clearContentsList(): void;
  getContentsList(): Array<DocumentContent>;
  setContentsList(value: Array<DocumentContent>): void;
  addContents(value?: DocumentContent, index?: number): DocumentContent;

  getPreprocess(): CreateKnowledgeDocumentRequest.PRE_PROCESSMap[keyof CreateKnowledgeDocumentRequest.PRE_PROCESSMap];
  setPreprocess(value: CreateKnowledgeDocumentRequest.PRE_PROCESSMap[keyof CreateKnowledgeDocumentRequest.PRE_PROCESSMap]): void;

  getSeparator(): string;
  setSeparator(value: string): void;

  getMaxchunksize(): number;
  setMaxchunksize(value: number): void;

  getChunkoverlap(): number;
  setChunkoverlap(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getDocumentstructure(): string;
  setDocumentstructure(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateKnowledgeDocumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateKnowledgeDocumentRequest): CreateKnowledgeDocumentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateKnowledgeDocumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateKnowledgeDocumentRequest;
  static deserializeBinaryFromReader(message: CreateKnowledgeDocumentRequest, reader: jspb.BinaryReader): CreateKnowledgeDocumentRequest;
}

export namespace CreateKnowledgeDocumentRequest {
  export type AsObject = {
    knowledgeid: string,
    documentsource: CreateKnowledgeDocumentRequest.DOCUMENT_SOURCEMap[keyof CreateKnowledgeDocumentRequest.DOCUMENT_SOURCEMap],
    datasource: string,
    contentsList: Array<DocumentContent.AsObject>,
    preprocess: CreateKnowledgeDocumentRequest.PRE_PROCESSMap[keyof CreateKnowledgeDocumentRequest.PRE_PROCESSMap],
    separator: string,
    maxchunksize: number,
    chunkoverlap: number,
    name: string,
    description: string,
    documentstructure: string,
  }

  export interface PRE_PROCESSMap {
    AUTOMATIC: 0;
    CUSTOM: 1;
  }

  export const PRE_PROCESS: PRE_PROCESSMap;

  export interface DOCUMENT_SOURCEMap {
    DOCUMENT_SOURCE_MANUAL: 0;
    DOCUMENT_SOURCE_TOOL: 1;
  }

  export const DOCUMENT_SOURCE: DOCUMENT_SOURCEMap;
}

export class CreateKnowledgeDocumentResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<KnowledgeDocument>;
  setDataList(value: Array<KnowledgeDocument>): void;
  addData(value?: KnowledgeDocument, index?: number): KnowledgeDocument;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): common_pb.Paginated | undefined;
  setPaginated(value?: common_pb.Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateKnowledgeDocumentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateKnowledgeDocumentResponse): CreateKnowledgeDocumentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateKnowledgeDocumentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateKnowledgeDocumentResponse;
  static deserializeBinaryFromReader(message: CreateKnowledgeDocumentResponse, reader: jspb.BinaryReader): CreateKnowledgeDocumentResponse;
}

export namespace CreateKnowledgeDocumentResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<KnowledgeDocument.AsObject>,
    error?: common_pb.Error.AsObject,
    paginated?: common_pb.Paginated.AsObject,
  }
}

export class KnowledgeDocumentSegment extends jspb.Message {
  getIndex(): string;
  setIndex(value: string): void;

  getDocumentHash(): string;
  setDocumentHash(value: string): void;

  getDocumentId(): string;
  setDocumentId(value: string): void;

  getText(): string;
  setText(value: string): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): KnowledgeDocumentSegment.Metadata | undefined;
  setMetadata(value?: KnowledgeDocumentSegment.Metadata): void;

  hasEntities(): boolean;
  clearEntities(): void;
  getEntities(): KnowledgeDocumentSegment.Entities | undefined;
  setEntities(value?: KnowledgeDocumentSegment.Entities): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KnowledgeDocumentSegment.AsObject;
  static toObject(includeInstance: boolean, msg: KnowledgeDocumentSegment): KnowledgeDocumentSegment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KnowledgeDocumentSegment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KnowledgeDocumentSegment;
  static deserializeBinaryFromReader(message: KnowledgeDocumentSegment, reader: jspb.BinaryReader): KnowledgeDocumentSegment;
}

export namespace KnowledgeDocumentSegment {
  export type AsObject = {
    index: string,
    documentHash: string,
    documentId: string,
    text: string,
    metadata?: KnowledgeDocumentSegment.Metadata.AsObject,
    entities?: KnowledgeDocumentSegment.Entities.AsObject,
  }

  export class Metadata extends jspb.Message {
    getDocumentHash(): string;
    setDocumentHash(value: string): void;

    getDocumentId(): string;
    setDocumentId(value: string): void;

    getKnowledgeDocumentId(): string;
    setKnowledgeDocumentId(value: string): void;

    getKnowledgeId(): string;
    setKnowledgeId(value: string): void;

    getProjectId(): string;
    setProjectId(value: string): void;

    getOrganizationId(): string;
    setOrganizationId(value: string): void;

    getDocumentName(): string;
    setDocumentName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Metadata.AsObject;
    static toObject(includeInstance: boolean, msg: Metadata): Metadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Metadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Metadata;
    static deserializeBinaryFromReader(message: Metadata, reader: jspb.BinaryReader): Metadata;
  }

  export namespace Metadata {
    export type AsObject = {
      documentHash: string,
      documentId: string,
      knowledgeDocumentId: string,
      knowledgeId: string,
      projectId: string,
      organizationId: string,
      documentName: string,
    }
  }

  export class Entities extends jspb.Message {
    clearOrganizationsList(): void;
    getOrganizationsList(): Array<string>;
    setOrganizationsList(value: Array<string>): void;
    addOrganizations(value: string, index?: number): string;

    clearDatesList(): void;
    getDatesList(): Array<string>;
    setDatesList(value: Array<string>): void;
    addDates(value: string, index?: number): string;

    clearProductsList(): void;
    getProductsList(): Array<string>;
    setProductsList(value: Array<string>): void;
    addProducts(value: string, index?: number): string;

    clearEventsList(): void;
    getEventsList(): Array<string>;
    setEventsList(value: Array<string>): void;
    addEvents(value: string, index?: number): string;

    clearPeopleList(): void;
    getPeopleList(): Array<string>;
    setPeopleList(value: Array<string>): void;
    addPeople(value: string, index?: number): string;

    clearTimesList(): void;
    getTimesList(): Array<string>;
    setTimesList(value: Array<string>): void;
    addTimes(value: string, index?: number): string;

    clearQuantitiesList(): void;
    getQuantitiesList(): Array<string>;
    setQuantitiesList(value: Array<string>): void;
    addQuantities(value: string, index?: number): string;

    clearLocationsList(): void;
    getLocationsList(): Array<string>;
    setLocationsList(value: Array<string>): void;
    addLocations(value: string, index?: number): string;

    clearIndustriesList(): void;
    getIndustriesList(): Array<string>;
    setIndustriesList(value: Array<string>): void;
    addIndustries(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Entities.AsObject;
    static toObject(includeInstance: boolean, msg: Entities): Entities.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Entities, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Entities;
    static deserializeBinaryFromReader(message: Entities, reader: jspb.BinaryReader): Entities;
  }

  export namespace Entities {
    export type AsObject = {
      organizationsList: Array<string>,
      datesList: Array<string>,
      productsList: Array<string>,
      eventsList: Array<string>,
      peopleList: Array<string>,
      timesList: Array<string>,
      quantitiesList: Array<string>,
      locationsList: Array<string>,
      industriesList: Array<string>,
    }
  }
}

export class GetAllKnowledgeDocumentSegmentRequest extends jspb.Message {
  getKnowledgeid(): string;
  setKnowledgeid(value: string): void;

  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): common_pb.Paginate | undefined;
  setPaginate(value?: common_pb.Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<common_pb.Criteria>;
  setCriteriasList(value: Array<common_pb.Criteria>): void;
  addCriterias(value?: common_pb.Criteria, index?: number): common_pb.Criteria;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllKnowledgeDocumentSegmentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllKnowledgeDocumentSegmentRequest): GetAllKnowledgeDocumentSegmentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllKnowledgeDocumentSegmentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllKnowledgeDocumentSegmentRequest;
  static deserializeBinaryFromReader(message: GetAllKnowledgeDocumentSegmentRequest, reader: jspb.BinaryReader): GetAllKnowledgeDocumentSegmentRequest;
}

export namespace GetAllKnowledgeDocumentSegmentRequest {
  export type AsObject = {
    knowledgeid: string,
    paginate?: common_pb.Paginate.AsObject,
    criteriasList: Array<common_pb.Criteria.AsObject>,
  }
}

export class GetAllKnowledgeDocumentSegmentResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<KnowledgeDocumentSegment>;
  setDataList(value: Array<KnowledgeDocumentSegment>): void;
  addData(value?: KnowledgeDocumentSegment, index?: number): KnowledgeDocumentSegment;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): common_pb.Paginated | undefined;
  setPaginated(value?: common_pb.Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllKnowledgeDocumentSegmentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllKnowledgeDocumentSegmentResponse): GetAllKnowledgeDocumentSegmentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllKnowledgeDocumentSegmentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllKnowledgeDocumentSegmentResponse;
  static deserializeBinaryFromReader(message: GetAllKnowledgeDocumentSegmentResponse, reader: jspb.BinaryReader): GetAllKnowledgeDocumentSegmentResponse;
}

export namespace GetAllKnowledgeDocumentSegmentResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<KnowledgeDocumentSegment.AsObject>,
    error?: common_pb.Error.AsObject,
    paginated?: common_pb.Paginated.AsObject,
  }
}

export class UpdateKnowledgeDetailRequest extends jspb.Message {
  getKnowledgeid(): string;
  setKnowledgeid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateKnowledgeDetailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateKnowledgeDetailRequest): UpdateKnowledgeDetailRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateKnowledgeDetailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateKnowledgeDetailRequest;
  static deserializeBinaryFromReader(message: UpdateKnowledgeDetailRequest, reader: jspb.BinaryReader): UpdateKnowledgeDetailRequest;
}

export namespace UpdateKnowledgeDetailRequest {
  export type AsObject = {
    knowledgeid: string,
    name: string,
    description: string,
  }
}

export class UpdateKnowledgeDocumentSegmentRequest extends jspb.Message {
  clearOrganizationsList(): void;
  getOrganizationsList(): Array<string>;
  setOrganizationsList(value: Array<string>): void;
  addOrganizations(value: string, index?: number): string;

  clearDatesList(): void;
  getDatesList(): Array<string>;
  setDatesList(value: Array<string>): void;
  addDates(value: string, index?: number): string;

  clearProductsList(): void;
  getProductsList(): Array<string>;
  setProductsList(value: Array<string>): void;
  addProducts(value: string, index?: number): string;

  clearEventsList(): void;
  getEventsList(): Array<string>;
  setEventsList(value: Array<string>): void;
  addEvents(value: string, index?: number): string;

  clearPeopleList(): void;
  getPeopleList(): Array<string>;
  setPeopleList(value: Array<string>): void;
  addPeople(value: string, index?: number): string;

  clearTimesList(): void;
  getTimesList(): Array<string>;
  setTimesList(value: Array<string>): void;
  addTimes(value: string, index?: number): string;

  clearQuantitiesList(): void;
  getQuantitiesList(): Array<string>;
  setQuantitiesList(value: Array<string>): void;
  addQuantities(value: string, index?: number): string;

  clearLocationsList(): void;
  getLocationsList(): Array<string>;
  setLocationsList(value: Array<string>): void;
  addLocations(value: string, index?: number): string;

  clearIndustriesList(): void;
  getIndustriesList(): Array<string>;
  setIndustriesList(value: Array<string>): void;
  addIndustries(value: string, index?: number): string;

  getDocumentname(): string;
  setDocumentname(value: string): void;

  getDocumentid(): string;
  setDocumentid(value: string): void;

  getIndex(): string;
  setIndex(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateKnowledgeDocumentSegmentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateKnowledgeDocumentSegmentRequest): UpdateKnowledgeDocumentSegmentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateKnowledgeDocumentSegmentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateKnowledgeDocumentSegmentRequest;
  static deserializeBinaryFromReader(message: UpdateKnowledgeDocumentSegmentRequest, reader: jspb.BinaryReader): UpdateKnowledgeDocumentSegmentRequest;
}

export namespace UpdateKnowledgeDocumentSegmentRequest {
  export type AsObject = {
    organizationsList: Array<string>,
    datesList: Array<string>,
    productsList: Array<string>,
    eventsList: Array<string>,
    peopleList: Array<string>,
    timesList: Array<string>,
    quantitiesList: Array<string>,
    locationsList: Array<string>,
    industriesList: Array<string>,
    documentname: string,
    documentid: string,
    index: string,
  }
}

export class DeleteKnowledgeDocumentSegmentRequest extends jspb.Message {
  getDocumentid(): string;
  setDocumentid(value: string): void;

  getIndex(): string;
  setIndex(value: string): void;

  getReason(): string;
  setReason(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteKnowledgeDocumentSegmentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteKnowledgeDocumentSegmentRequest): DeleteKnowledgeDocumentSegmentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteKnowledgeDocumentSegmentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteKnowledgeDocumentSegmentRequest;
  static deserializeBinaryFromReader(message: DeleteKnowledgeDocumentSegmentRequest, reader: jspb.BinaryReader): DeleteKnowledgeDocumentSegmentRequest;
}

export namespace DeleteKnowledgeDocumentSegmentRequest {
  export type AsObject = {
    documentid: string,
    index: string,
    reason: string,
  }
}

export class GetAllKnowledgeLogRequest extends jspb.Message {
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
  toObject(includeInstance?: boolean): GetAllKnowledgeLogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllKnowledgeLogRequest): GetAllKnowledgeLogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllKnowledgeLogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllKnowledgeLogRequest;
  static deserializeBinaryFromReader(message: GetAllKnowledgeLogRequest, reader: jspb.BinaryReader): GetAllKnowledgeLogRequest;
}

export namespace GetAllKnowledgeLogRequest {
  export type AsObject = {
    projectid: string,
    paginate?: common_pb.Paginate.AsObject,
    criteriasList: Array<common_pb.Criteria.AsObject>,
    order?: common_pb.Ordering.AsObject,
  }
}

export class GetKnowledgeLogRequest extends jspb.Message {
  getProjectid(): string;
  setProjectid(value: string): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKnowledgeLogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetKnowledgeLogRequest): GetKnowledgeLogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetKnowledgeLogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKnowledgeLogRequest;
  static deserializeBinaryFromReader(message: GetKnowledgeLogRequest, reader: jspb.BinaryReader): GetKnowledgeLogRequest;
}

export namespace GetKnowledgeLogRequest {
  export type AsObject = {
    projectid: string,
    id: string,
  }
}

export class GetKnowledgeLogResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): KnowledgeLog | undefined;
  setData(value?: KnowledgeLog): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKnowledgeLogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetKnowledgeLogResponse): GetKnowledgeLogResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetKnowledgeLogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKnowledgeLogResponse;
  static deserializeBinaryFromReader(message: GetKnowledgeLogResponse, reader: jspb.BinaryReader): GetKnowledgeLogResponse;
}

export namespace GetKnowledgeLogResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: KnowledgeLog.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class GetAllKnowledgeLogResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<KnowledgeLog>;
  setDataList(value: Array<KnowledgeLog>): void;
  addData(value?: KnowledgeLog, index?: number): KnowledgeLog;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): common_pb.Paginated | undefined;
  setPaginated(value?: common_pb.Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllKnowledgeLogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllKnowledgeLogResponse): GetAllKnowledgeLogResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllKnowledgeLogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllKnowledgeLogResponse;
  static deserializeBinaryFromReader(message: GetAllKnowledgeLogResponse, reader: jspb.BinaryReader): GetAllKnowledgeLogResponse;
}

export namespace GetAllKnowledgeLogResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<KnowledgeLog.AsObject>,
    error?: common_pb.Error.AsObject,
    paginated?: common_pb.Paginated.AsObject,
  }
}

export class KnowledgeLog extends jspb.Message {
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

  getKnowledgeid(): string;
  setKnowledgeid(value: string): void;

  getProjectid(): string;
  setProjectid(value: string): void;

  getOrganizationid(): string;
  setOrganizationid(value: string): void;

  getTopk(): number;
  setTopk(value: number): void;

  getScorethreshold(): number;
  setScorethreshold(value: number): void;

  getDocumentcount(): number;
  setDocumentcount(value: number): void;

  getAssetprefix(): string;
  setAssetprefix(value: string): void;

  getRetrievalmethod(): string;
  setRetrievalmethod(value: string): void;

  getTimetaken(): string;
  setTimetaken(value: string): void;

  getAdditionaldataMap(): jspb.Map<string, string>;
  clearAdditionaldataMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KnowledgeLog.AsObject;
  static toObject(includeInstance: boolean, msg: KnowledgeLog): KnowledgeLog.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KnowledgeLog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KnowledgeLog;
  static deserializeBinaryFromReader(message: KnowledgeLog, reader: jspb.BinaryReader): KnowledgeLog;
}

export namespace KnowledgeLog {
  export type AsObject = {
    id: string,
    action?: google_protobuf_struct_pb.Struct.AsObject,
    request?: google_protobuf_struct_pb.Struct.AsObject,
    response?: google_protobuf_struct_pb.Struct.AsObject,
    status: string,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    knowledgeid: string,
    projectid: string,
    organizationid: string,
    topk: number,
    scorethreshold: number,
    documentcount: number,
    assetprefix: string,
    retrievalmethod: string,
    timetaken: string,
    additionaldataMap: Array<[string, string]>,
  }
}

