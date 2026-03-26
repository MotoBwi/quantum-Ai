// package: assistant_api
// file: assistant-provider.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";

export class UpdateAssistantVersionRequest extends jspb.Message {
  getAssistantid(): string;
  setAssistantid(value: string): void;

  getAssistantproviderid(): string;
  setAssistantproviderid(value: string): void;

  getAssistantprovider(): string;
  setAssistantprovider(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAssistantVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAssistantVersionRequest): UpdateAssistantVersionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAssistantVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAssistantVersionRequest;
  static deserializeBinaryFromReader(message: UpdateAssistantVersionRequest, reader: jspb.BinaryReader): UpdateAssistantVersionRequest;
}

export namespace UpdateAssistantVersionRequest {
  export type AsObject = {
    assistantid: string,
    assistantproviderid: string,
    assistantprovider: string,
  }
}

export class CreateAssistantProviderRequest extends jspb.Message {
  getAssistantid(): string;
  setAssistantid(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasModel(): boolean;
  clearModel(): void;
  getModel(): CreateAssistantProviderRequest.CreateAssistantProviderModel | undefined;
  setModel(value?: CreateAssistantProviderRequest.CreateAssistantProviderModel): void;

  hasAgentkit(): boolean;
  clearAgentkit(): void;
  getAgentkit(): CreateAssistantProviderRequest.CreateAssistantProviderAgentkit | undefined;
  setAgentkit(value?: CreateAssistantProviderRequest.CreateAssistantProviderAgentkit): void;

  hasWebsocket(): boolean;
  clearWebsocket(): void;
  getWebsocket(): CreateAssistantProviderRequest.CreateAssistantProviderWebsocket | undefined;
  setWebsocket(value?: CreateAssistantProviderRequest.CreateAssistantProviderWebsocket): void;

  getAssistantproviderCase(): CreateAssistantProviderRequest.AssistantproviderCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAssistantProviderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAssistantProviderRequest): CreateAssistantProviderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAssistantProviderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAssistantProviderRequest;
  static deserializeBinaryFromReader(message: CreateAssistantProviderRequest, reader: jspb.BinaryReader): CreateAssistantProviderRequest;
}

export namespace CreateAssistantProviderRequest {
  export type AsObject = {
    assistantid: string,
    description: string,
    model?: CreateAssistantProviderRequest.CreateAssistantProviderModel.AsObject,
    agentkit?: CreateAssistantProviderRequest.CreateAssistantProviderAgentkit.AsObject,
    websocket?: CreateAssistantProviderRequest.CreateAssistantProviderWebsocket.AsObject,
  }

  export class CreateAssistantProviderModel extends jspb.Message {
    hasTemplate(): boolean;
    clearTemplate(): void;
    getTemplate(): common_pb.TextChatCompletePrompt | undefined;
    setTemplate(value?: common_pb.TextChatCompletePrompt): void;

    getModelprovidername(): string;
    setModelprovidername(value: string): void;

    clearAssistantmodeloptionsList(): void;
    getAssistantmodeloptionsList(): Array<common_pb.Metadata>;
    setAssistantmodeloptionsList(value: Array<common_pb.Metadata>): void;
    addAssistantmodeloptions(value?: common_pb.Metadata, index?: number): common_pb.Metadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAssistantProviderModel.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAssistantProviderModel): CreateAssistantProviderModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAssistantProviderModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAssistantProviderModel;
    static deserializeBinaryFromReader(message: CreateAssistantProviderModel, reader: jspb.BinaryReader): CreateAssistantProviderModel;
  }

  export namespace CreateAssistantProviderModel {
    export type AsObject = {
      template?: common_pb.TextChatCompletePrompt.AsObject,
      modelprovidername: string,
      assistantmodeloptionsList: Array<common_pb.Metadata.AsObject>,
    }
  }

  export class CreateAssistantProviderAgentkit extends jspb.Message {
    getAgentkiturl(): string;
    setAgentkiturl(value: string): void;

    getCertificate(): string;
    setCertificate(value: string): void;

    getMetadataMap(): jspb.Map<string, string>;
    clearMetadataMap(): void;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAssistantProviderAgentkit.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAssistantProviderAgentkit): CreateAssistantProviderAgentkit.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAssistantProviderAgentkit, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAssistantProviderAgentkit;
    static deserializeBinaryFromReader(message: CreateAssistantProviderAgentkit, reader: jspb.BinaryReader): CreateAssistantProviderAgentkit;
  }

  export namespace CreateAssistantProviderAgentkit {
    export type AsObject = {
      agentkiturl: string,
      certificate: string,
      metadataMap: Array<[string, string]>,
    }
  }

  export class CreateAssistantProviderWebsocket extends jspb.Message {
    getWebsocketurl(): string;
    setWebsocketurl(value: string): void;

    getHeadersMap(): jspb.Map<string, string>;
    clearHeadersMap(): void;
    getConnectionparametersMap(): jspb.Map<string, string>;
    clearConnectionparametersMap(): void;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAssistantProviderWebsocket.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAssistantProviderWebsocket): CreateAssistantProviderWebsocket.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAssistantProviderWebsocket, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAssistantProviderWebsocket;
    static deserializeBinaryFromReader(message: CreateAssistantProviderWebsocket, reader: jspb.BinaryReader): CreateAssistantProviderWebsocket;
  }

  export namespace CreateAssistantProviderWebsocket {
    export type AsObject = {
      websocketurl: string,
      headersMap: Array<[string, string]>,
      connectionparametersMap: Array<[string, string]>,
    }
  }

  export enum AssistantproviderCase {
    ASSISTANTPROVIDER_NOT_SET = 0,
    MODEL = 50,
    AGENTKIT = 51,
    WEBSOCKET = 52,
  }
}

export class AssistantProviderAgentkit extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getAssistantid(): number;
  setAssistantid(value: number): void;

  getStatus(): string;
  setStatus(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  getCertificate(): string;
  setCertificate(value: string): void;

  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): void;
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
  toObject(includeInstance?: boolean): AssistantProviderAgentkit.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantProviderAgentkit): AssistantProviderAgentkit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantProviderAgentkit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantProviderAgentkit;
  static deserializeBinaryFromReader(message: AssistantProviderAgentkit, reader: jspb.BinaryReader): AssistantProviderAgentkit;
}

export namespace AssistantProviderAgentkit {
  export type AsObject = {
    id: string,
    description: string,
    assistantid: number,
    status: string,
    url: string,
    certificate: string,
    metadataMap: Array<[string, string]>,
    createdby: string,
    createduser?: common_pb.User.AsObject,
    updatedby: string,
    updateduser?: common_pb.User.AsObject,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class AssistantProviderWebsocket extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getAssistantid(): number;
  setAssistantid(value: number): void;

  getUrl(): string;
  setUrl(value: string): void;

  getHeadersMap(): jspb.Map<string, string>;
  clearHeadersMap(): void;
  getParametersMap(): jspb.Map<string, string>;
  clearParametersMap(): void;
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
  toObject(includeInstance?: boolean): AssistantProviderWebsocket.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantProviderWebsocket): AssistantProviderWebsocket.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantProviderWebsocket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantProviderWebsocket;
  static deserializeBinaryFromReader(message: AssistantProviderWebsocket, reader: jspb.BinaryReader): AssistantProviderWebsocket;
}

export namespace AssistantProviderWebsocket {
  export type AsObject = {
    id: string,
    description: string,
    assistantid: number,
    url: string,
    headersMap: Array<[string, string]>,
    parametersMap: Array<[string, string]>,
    status: string,
    createdby: string,
    createduser?: common_pb.User.AsObject,
    updatedby: string,
    updateduser?: common_pb.User.AsObject,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class AssistantProviderModel extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasTemplate(): boolean;
  clearTemplate(): void;
  getTemplate(): common_pb.TextChatCompletePrompt | undefined;
  setTemplate(value?: common_pb.TextChatCompletePrompt): void;

  getDescription(): string;
  setDescription(value: string): void;

  getAssistantid(): number;
  setAssistantid(value: number): void;

  getModelprovidername(): string;
  setModelprovidername(value: string): void;

  clearAssistantmodeloptionsList(): void;
  getAssistantmodeloptionsList(): Array<common_pb.Metadata>;
  setAssistantmodeloptionsList(value: Array<common_pb.Metadata>): void;
  addAssistantmodeloptions(value?: common_pb.Metadata, index?: number): common_pb.Metadata;

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
  toObject(includeInstance?: boolean): AssistantProviderModel.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantProviderModel): AssistantProviderModel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantProviderModel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantProviderModel;
  static deserializeBinaryFromReader(message: AssistantProviderModel, reader: jspb.BinaryReader): AssistantProviderModel;
}

export namespace AssistantProviderModel {
  export type AsObject = {
    id: string,
    template?: common_pb.TextChatCompletePrompt.AsObject,
    description: string,
    assistantid: number,
    modelprovidername: string,
    assistantmodeloptionsList: Array<common_pb.Metadata.AsObject>,
    status: string,
    createdby: string,
    createduser?: common_pb.User.AsObject,
    updatedby: string,
    updateduser?: common_pb.User.AsObject,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetAllAssistantProviderRequest extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): common_pb.Paginate | undefined;
  setPaginate(value?: common_pb.Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<common_pb.Criteria>;
  setCriteriasList(value: Array<common_pb.Criteria>): void;
  addCriterias(value?: common_pb.Criteria, index?: number): common_pb.Criteria;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantProviderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantProviderRequest): GetAllAssistantProviderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantProviderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantProviderRequest;
  static deserializeBinaryFromReader(message: GetAllAssistantProviderRequest, reader: jspb.BinaryReader): GetAllAssistantProviderRequest;
}

export namespace GetAllAssistantProviderRequest {
  export type AsObject = {
    paginate?: common_pb.Paginate.AsObject,
    criteriasList: Array<common_pb.Criteria.AsObject>,
    assistantid: string,
  }
}

export class GetAssistantProviderResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasAssistantprovidermodel(): boolean;
  clearAssistantprovidermodel(): void;
  getAssistantprovidermodel(): AssistantProviderModel | undefined;
  setAssistantprovidermodel(value?: AssistantProviderModel): void;

  hasAssistantprovideragentkit(): boolean;
  clearAssistantprovideragentkit(): void;
  getAssistantprovideragentkit(): AssistantProviderAgentkit | undefined;
  setAssistantprovideragentkit(value?: AssistantProviderAgentkit): void;

  hasAssistantproviderwebsocket(): boolean;
  clearAssistantproviderwebsocket(): void;
  getAssistantproviderwebsocket(): AssistantProviderWebsocket | undefined;
  setAssistantproviderwebsocket(value?: AssistantProviderWebsocket): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  getDataCase(): GetAssistantProviderResponse.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantProviderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantProviderResponse): GetAssistantProviderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantProviderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantProviderResponse;
  static deserializeBinaryFromReader(message: GetAssistantProviderResponse, reader: jspb.BinaryReader): GetAssistantProviderResponse;
}

export namespace GetAssistantProviderResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    assistantprovidermodel?: AssistantProviderModel.AsObject,
    assistantprovideragentkit?: AssistantProviderAgentkit.AsObject,
    assistantproviderwebsocket?: AssistantProviderWebsocket.AsObject,
    error?: common_pb.Error.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    ASSISTANTPROVIDERMODEL = 50,
    ASSISTANTPROVIDERAGENTKIT = 51,
    ASSISTANTPROVIDERWEBSOCKET = 52,
  }
}

export class GetAllAssistantProviderResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<GetAllAssistantProviderResponse.AssistantProvider>;
  setDataList(value: Array<GetAllAssistantProviderResponse.AssistantProvider>): void;
  addData(value?: GetAllAssistantProviderResponse.AssistantProvider, index?: number): GetAllAssistantProviderResponse.AssistantProvider;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): common_pb.Paginated | undefined;
  setPaginated(value?: common_pb.Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantProviderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantProviderResponse): GetAllAssistantProviderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantProviderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantProviderResponse;
  static deserializeBinaryFromReader(message: GetAllAssistantProviderResponse, reader: jspb.BinaryReader): GetAllAssistantProviderResponse;
}

export namespace GetAllAssistantProviderResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<GetAllAssistantProviderResponse.AssistantProvider.AsObject>,
    error?: common_pb.Error.AsObject,
    paginated?: common_pb.Paginated.AsObject,
  }

  export class AssistantProvider extends jspb.Message {
    hasAssistantprovidermodel(): boolean;
    clearAssistantprovidermodel(): void;
    getAssistantprovidermodel(): AssistantProviderModel | undefined;
    setAssistantprovidermodel(value?: AssistantProviderModel): void;

    hasAssistantprovideragentkit(): boolean;
    clearAssistantprovideragentkit(): void;
    getAssistantprovideragentkit(): AssistantProviderAgentkit | undefined;
    setAssistantprovideragentkit(value?: AssistantProviderAgentkit): void;

    hasAssistantproviderwebsocket(): boolean;
    clearAssistantproviderwebsocket(): void;
    getAssistantproviderwebsocket(): AssistantProviderWebsocket | undefined;
    setAssistantproviderwebsocket(value?: AssistantProviderWebsocket): void;

    getAssistantproviderCase(): AssistantProvider.AssistantproviderCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssistantProvider.AsObject;
    static toObject(includeInstance: boolean, msg: AssistantProvider): AssistantProvider.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssistantProvider, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssistantProvider;
    static deserializeBinaryFromReader(message: AssistantProvider, reader: jspb.BinaryReader): AssistantProvider;
  }

  export namespace AssistantProvider {
    export type AsObject = {
      assistantprovidermodel?: AssistantProviderModel.AsObject,
      assistantprovideragentkit?: AssistantProviderAgentkit.AsObject,
      assistantproviderwebsocket?: AssistantProviderWebsocket.AsObject,
    }

    export enum AssistantproviderCase {
      ASSISTANTPROVIDER_NOT_SET = 0,
      ASSISTANTPROVIDERMODEL = 50,
      ASSISTANTPROVIDERAGENTKIT = 51,
      ASSISTANTPROVIDERWEBSOCKET = 52,
    }
  }
}

