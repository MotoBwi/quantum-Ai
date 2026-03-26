// package: document_api
// file: document-api.proto

import * as jspb from "google-protobuf";

export class IndexKnowledgeDocumentRequest extends jspb.Message {
  getKnowledgeid(): string;
  setKnowledgeid(value: string): void;

  clearKnowledgedocumentidList(): void;
  getKnowledgedocumentidList(): Array<string>;
  setKnowledgedocumentidList(value: Array<string>): void;
  addKnowledgedocumentid(value: string, index?: number): string;

  getIndextype(): string;
  setIndextype(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexKnowledgeDocumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IndexKnowledgeDocumentRequest): IndexKnowledgeDocumentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IndexKnowledgeDocumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexKnowledgeDocumentRequest;
  static deserializeBinaryFromReader(message: IndexKnowledgeDocumentRequest, reader: jspb.BinaryReader): IndexKnowledgeDocumentRequest;
}

export namespace IndexKnowledgeDocumentRequest {
  export type AsObject = {
    knowledgeid: string,
    knowledgedocumentidList: Array<string>,
    indextype: string,
  }
}

export class IndexKnowledgeDocumentResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexKnowledgeDocumentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IndexKnowledgeDocumentResponse): IndexKnowledgeDocumentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IndexKnowledgeDocumentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexKnowledgeDocumentResponse;
  static deserializeBinaryFromReader(message: IndexKnowledgeDocumentResponse, reader: jspb.BinaryReader): IndexKnowledgeDocumentResponse;
}

export namespace IndexKnowledgeDocumentResponse {
  export type AsObject = {
    code: number,
    success: boolean,
  }
}

