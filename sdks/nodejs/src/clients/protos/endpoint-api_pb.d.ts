// package: endpoint_api
// file: endpoint-api.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";

export class EndpointAttribute extends jspb.Message {
  getSource(): string;
  setSource(value: string): void;

  getSourceidentifier(): string;
  setSourceidentifier(value: string): void;

  getVisibility(): string;
  setVisibility(value: string): void;

  getLanguage(): string;
  setLanguage(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndpointAttribute.AsObject;
  static toObject(includeInstance: boolean, msg: EndpointAttribute): EndpointAttribute.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EndpointAttribute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndpointAttribute;
  static deserializeBinaryFromReader(message: EndpointAttribute, reader: jspb.BinaryReader): EndpointAttribute;
}

export namespace EndpointAttribute {
  export type AsObject = {
    source: string,
    sourceidentifier: string,
    visibility: string,
    language: string,
    name: string,
    description: string,
  }
}

export class EndpointProviderModelAttribute extends jspb.Message {
  getDescription(): string;
  setDescription(value: string): void;

  hasChatcompleteprompt(): boolean;
  clearChatcompleteprompt(): void;
  getChatcompleteprompt(): common_pb.TextChatCompletePrompt | undefined;
  setChatcompleteprompt(value?: common_pb.TextChatCompletePrompt): void;

  getModelprovidername(): string;
  setModelprovidername(value: string): void;

  clearEndpointmodeloptionsList(): void;
  getEndpointmodeloptionsList(): Array<common_pb.Metadata>;
  setEndpointmodeloptionsList(value: Array<common_pb.Metadata>): void;
  addEndpointmodeloptions(value?: common_pb.Metadata, index?: number): common_pb.Metadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndpointProviderModelAttribute.AsObject;
  static toObject(includeInstance: boolean, msg: EndpointProviderModelAttribute): EndpointProviderModelAttribute.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EndpointProviderModelAttribute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndpointProviderModelAttribute;
  static deserializeBinaryFromReader(message: EndpointProviderModelAttribute, reader: jspb.BinaryReader): EndpointProviderModelAttribute;
}

export namespace EndpointProviderModelAttribute {
  export type AsObject = {
    description: string,
    chatcompleteprompt?: common_pb.TextChatCompletePrompt.AsObject,
    modelprovidername: string,
    endpointmodeloptionsList: Array<common_pb.Metadata.AsObject>,
  }
}

export class CreateEndpointRequest extends jspb.Message {
  hasEndpointprovidermodelattribute(): boolean;
  clearEndpointprovidermodelattribute(): void;
  getEndpointprovidermodelattribute(): EndpointProviderModelAttribute | undefined;
  setEndpointprovidermodelattribute(value?: EndpointProviderModelAttribute): void;

  hasEndpointattribute(): boolean;
  clearEndpointattribute(): void;
  getEndpointattribute(): EndpointAttribute | undefined;
  setEndpointattribute(value?: EndpointAttribute): void;

  hasRetryconfiguration(): boolean;
  clearRetryconfiguration(): void;
  getRetryconfiguration(): EndpointRetryConfiguration | undefined;
  setRetryconfiguration(value?: EndpointRetryConfiguration): void;

  hasCacheconfiguration(): boolean;
  clearCacheconfiguration(): void;
  getCacheconfiguration(): EndpointCacheConfiguration | undefined;
  setCacheconfiguration(value?: EndpointCacheConfiguration): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEndpointRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEndpointRequest): CreateEndpointRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEndpointRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEndpointRequest;
  static deserializeBinaryFromReader(message: CreateEndpointRequest, reader: jspb.BinaryReader): CreateEndpointRequest;
}

export namespace CreateEndpointRequest {
  export type AsObject = {
    endpointprovidermodelattribute?: EndpointProviderModelAttribute.AsObject,
    endpointattribute?: EndpointAttribute.AsObject,
    retryconfiguration?: EndpointRetryConfiguration.AsObject,
    cacheconfiguration?: EndpointCacheConfiguration.AsObject,
    tagsList: Array<string>,
  }
}

export class CreateEndpointResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Endpoint | undefined;
  setData(value?: Endpoint): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEndpointResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEndpointResponse): CreateEndpointResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEndpointResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEndpointResponse;
  static deserializeBinaryFromReader(message: CreateEndpointResponse, reader: jspb.BinaryReader): CreateEndpointResponse;
}

export namespace CreateEndpointResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: Endpoint.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class EndpointProviderModel extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasChatcompleteprompt(): boolean;
  clearChatcompleteprompt(): void;
  getChatcompleteprompt(): common_pb.TextChatCompletePrompt | undefined;
  setChatcompleteprompt(value?: common_pb.TextChatCompletePrompt): void;

  getModelprovidername(): string;
  setModelprovidername(value: string): void;

  clearEndpointmodeloptionsList(): void;
  getEndpointmodeloptionsList(): Array<common_pb.Metadata>;
  setEndpointmodeloptionsList(value: Array<common_pb.Metadata>): void;
  addEndpointmodeloptions(value?: common_pb.Metadata, index?: number): common_pb.Metadata;

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

  getEndpointid(): string;
  setEndpointid(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndpointProviderModel.AsObject;
  static toObject(includeInstance: boolean, msg: EndpointProviderModel): EndpointProviderModel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EndpointProviderModel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndpointProviderModel;
  static deserializeBinaryFromReader(message: EndpointProviderModel, reader: jspb.BinaryReader): EndpointProviderModel;
}

export namespace EndpointProviderModel {
  export type AsObject = {
    id: string,
    chatcompleteprompt?: common_pb.TextChatCompletePrompt.AsObject,
    modelprovidername: string,
    endpointmodeloptionsList: Array<common_pb.Metadata.AsObject>,
    status: string,
    createdby: string,
    createduser?: common_pb.User.AsObject,
    updatedby: string,
    updateduser?: common_pb.User.AsObject,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endpointid: string,
    description: string,
  }
}

export class AggregatedEndpointAnalytics extends jspb.Message {
  getCount(): string;
  setCount(value: string): void;

  getTotalinputcost(): number;
  setTotalinputcost(value: number): void;

  getTotaloutputcost(): number;
  setTotaloutputcost(value: number): void;

  getTotaltoken(): string;
  setTotaltoken(value: string): void;

  getSuccesscount(): string;
  setSuccesscount(value: string): void;

  getErrorcount(): string;
  setErrorcount(value: string): void;

  getP50latency(): number;
  setP50latency(value: number): void;

  getP99latency(): number;
  setP99latency(value: number): void;

  hasLastactivity(): boolean;
  clearLastactivity(): void;
  getLastactivity(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastactivity(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AggregatedEndpointAnalytics.AsObject;
  static toObject(includeInstance: boolean, msg: AggregatedEndpointAnalytics): AggregatedEndpointAnalytics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AggregatedEndpointAnalytics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AggregatedEndpointAnalytics;
  static deserializeBinaryFromReader(message: AggregatedEndpointAnalytics, reader: jspb.BinaryReader): AggregatedEndpointAnalytics;
}

export namespace AggregatedEndpointAnalytics {
  export type AsObject = {
    count: string,
    totalinputcost: number,
    totaloutputcost: number,
    totaltoken: string,
    successcount: string,
    errorcount: string,
    p50latency: number,
    p99latency: number,
    lastactivity?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Endpoint extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  getVisibility(): string;
  setVisibility(value: string): void;

  getSource(): string;
  setSource(value: string): void;

  getSourceidentifier(): string;
  setSourceidentifier(value: string): void;

  getProjectid(): string;
  setProjectid(value: string): void;

  getOrganizationid(): string;
  setOrganizationid(value: string): void;

  getEndpointprovidermodelid(): string;
  setEndpointprovidermodelid(value: string): void;

  hasEndpointprovidermodel(): boolean;
  clearEndpointprovidermodel(): void;
  getEndpointprovidermodel(): EndpointProviderModel | undefined;
  setEndpointprovidermodel(value?: EndpointProviderModel): void;

  hasEndpointanalytics(): boolean;
  clearEndpointanalytics(): void;
  getEndpointanalytics(): AggregatedEndpointAnalytics | undefined;
  setEndpointanalytics(value?: AggregatedEndpointAnalytics): void;

  hasEndpointretry(): boolean;
  clearEndpointretry(): void;
  getEndpointretry(): EndpointRetryConfiguration | undefined;
  setEndpointretry(value?: EndpointRetryConfiguration): void;

  hasEndpointcaching(): boolean;
  clearEndpointcaching(): void;
  getEndpointcaching(): EndpointCacheConfiguration | undefined;
  setEndpointcaching(value?: EndpointCacheConfiguration): void;

  hasEndpointtag(): boolean;
  clearEndpointtag(): void;
  getEndpointtag(): common_pb.Tag | undefined;
  setEndpointtag(value?: common_pb.Tag): void;

  getLanguage(): string;
  setLanguage(value: string): void;

  hasOrganization(): boolean;
  clearOrganization(): void;
  getOrganization(): common_pb.Organization | undefined;
  setOrganization(value?: common_pb.Organization): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

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

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Endpoint.AsObject;
  static toObject(includeInstance: boolean, msg: Endpoint): Endpoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Endpoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Endpoint;
  static deserializeBinaryFromReader(message: Endpoint, reader: jspb.BinaryReader): Endpoint;
}

export namespace Endpoint {
  export type AsObject = {
    id: string,
    status: string,
    visibility: string,
    source: string,
    sourceidentifier: string,
    projectid: string,
    organizationid: string,
    endpointprovidermodelid: string,
    endpointprovidermodel?: EndpointProviderModel.AsObject,
    endpointanalytics?: AggregatedEndpointAnalytics.AsObject,
    endpointretry?: EndpointRetryConfiguration.AsObject,
    endpointcaching?: EndpointCacheConfiguration.AsObject,
    endpointtag?: common_pb.Tag.AsObject,
    language: string,
    organization?: common_pb.Organization.AsObject,
    name: string,
    description: string,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdby: string,
    createduser?: common_pb.User.AsObject,
    updatedby: string,
    updateduser?: common_pb.User.AsObject,
  }
}

export class CreateEndpointProviderModelRequest extends jspb.Message {
  getEndpointid(): string;
  setEndpointid(value: string): void;

  hasEndpointprovidermodelattribute(): boolean;
  clearEndpointprovidermodelattribute(): void;
  getEndpointprovidermodelattribute(): EndpointProviderModelAttribute | undefined;
  setEndpointprovidermodelattribute(value?: EndpointProviderModelAttribute): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEndpointProviderModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEndpointProviderModelRequest): CreateEndpointProviderModelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEndpointProviderModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEndpointProviderModelRequest;
  static deserializeBinaryFromReader(message: CreateEndpointProviderModelRequest, reader: jspb.BinaryReader): CreateEndpointProviderModelRequest;
}

export namespace CreateEndpointProviderModelRequest {
  export type AsObject = {
    endpointid: string,
    endpointprovidermodelattribute?: EndpointProviderModelAttribute.AsObject,
  }
}

export class CreateEndpointProviderModelResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): EndpointProviderModel | undefined;
  setData(value?: EndpointProviderModel): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEndpointProviderModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEndpointProviderModelResponse): CreateEndpointProviderModelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEndpointProviderModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEndpointProviderModelResponse;
  static deserializeBinaryFromReader(message: CreateEndpointProviderModelResponse, reader: jspb.BinaryReader): CreateEndpointProviderModelResponse;
}

export namespace CreateEndpointProviderModelResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: EndpointProviderModel.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class GetEndpointRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasEndpointprovidermodelid(): boolean;
  clearEndpointprovidermodelid(): void;
  getEndpointprovidermodelid(): string;
  setEndpointprovidermodelid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEndpointRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEndpointRequest): GetEndpointRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEndpointRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEndpointRequest;
  static deserializeBinaryFromReader(message: GetEndpointRequest, reader: jspb.BinaryReader): GetEndpointRequest;
}

export namespace GetEndpointRequest {
  export type AsObject = {
    id: string,
    endpointprovidermodelid: string,
  }
}

export class GetEndpointResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Endpoint | undefined;
  setData(value?: Endpoint): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEndpointResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEndpointResponse): GetEndpointResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEndpointResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEndpointResponse;
  static deserializeBinaryFromReader(message: GetEndpointResponse, reader: jspb.BinaryReader): GetEndpointResponse;
}

export namespace GetEndpointResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: Endpoint.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class GetAllEndpointRequest extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): common_pb.Paginate | undefined;
  setPaginate(value?: common_pb.Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<common_pb.Criteria>;
  setCriteriasList(value: Array<common_pb.Criteria>): void;
  addCriterias(value?: common_pb.Criteria, index?: number): common_pb.Criteria;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllEndpointRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllEndpointRequest): GetAllEndpointRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllEndpointRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllEndpointRequest;
  static deserializeBinaryFromReader(message: GetAllEndpointRequest, reader: jspb.BinaryReader): GetAllEndpointRequest;
}

export namespace GetAllEndpointRequest {
  export type AsObject = {
    paginate?: common_pb.Paginate.AsObject,
    criteriasList: Array<common_pb.Criteria.AsObject>,
  }
}

export class GetAllEndpointResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<Endpoint>;
  setDataList(value: Array<Endpoint>): void;
  addData(value?: Endpoint, index?: number): Endpoint;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): common_pb.Paginated | undefined;
  setPaginated(value?: common_pb.Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllEndpointResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllEndpointResponse): GetAllEndpointResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllEndpointResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllEndpointResponse;
  static deserializeBinaryFromReader(message: GetAllEndpointResponse, reader: jspb.BinaryReader): GetAllEndpointResponse;
}

export namespace GetAllEndpointResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<Endpoint.AsObject>,
    error?: common_pb.Error.AsObject,
    paginated?: common_pb.Paginated.AsObject,
  }
}

export class GetAllEndpointProviderModelRequest extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): common_pb.Paginate | undefined;
  setPaginate(value?: common_pb.Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<common_pb.Criteria>;
  setCriteriasList(value: Array<common_pb.Criteria>): void;
  addCriterias(value?: common_pb.Criteria, index?: number): common_pb.Criteria;

  getEndpointid(): string;
  setEndpointid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllEndpointProviderModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllEndpointProviderModelRequest): GetAllEndpointProviderModelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllEndpointProviderModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllEndpointProviderModelRequest;
  static deserializeBinaryFromReader(message: GetAllEndpointProviderModelRequest, reader: jspb.BinaryReader): GetAllEndpointProviderModelRequest;
}

export namespace GetAllEndpointProviderModelRequest {
  export type AsObject = {
    paginate?: common_pb.Paginate.AsObject,
    criteriasList: Array<common_pb.Criteria.AsObject>,
    endpointid: string,
  }
}

export class GetAllEndpointProviderModelResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<EndpointProviderModel>;
  setDataList(value: Array<EndpointProviderModel>): void;
  addData(value?: EndpointProviderModel, index?: number): EndpointProviderModel;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): common_pb.Paginated | undefined;
  setPaginated(value?: common_pb.Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllEndpointProviderModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllEndpointProviderModelResponse): GetAllEndpointProviderModelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllEndpointProviderModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllEndpointProviderModelResponse;
  static deserializeBinaryFromReader(message: GetAllEndpointProviderModelResponse, reader: jspb.BinaryReader): GetAllEndpointProviderModelResponse;
}

export namespace GetAllEndpointProviderModelResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<EndpointProviderModel.AsObject>,
    error?: common_pb.Error.AsObject,
    paginated?: common_pb.Paginated.AsObject,
  }
}

export class UpdateEndpointVersionRequest extends jspb.Message {
  getEndpointid(): string;
  setEndpointid(value: string): void;

  getEndpointprovidermodelid(): string;
  setEndpointprovidermodelid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEndpointVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEndpointVersionRequest): UpdateEndpointVersionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateEndpointVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEndpointVersionRequest;
  static deserializeBinaryFromReader(message: UpdateEndpointVersionRequest, reader: jspb.BinaryReader): UpdateEndpointVersionRequest;
}

export namespace UpdateEndpointVersionRequest {
  export type AsObject = {
    endpointid: string,
    endpointprovidermodelid: string,
  }
}

export class UpdateEndpointVersionResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Endpoint | undefined;
  setData(value?: Endpoint): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEndpointVersionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEndpointVersionResponse): UpdateEndpointVersionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateEndpointVersionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEndpointVersionResponse;
  static deserializeBinaryFromReader(message: UpdateEndpointVersionResponse, reader: jspb.BinaryReader): UpdateEndpointVersionResponse;
}

export namespace UpdateEndpointVersionResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: Endpoint.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class EndpointRetryConfiguration extends jspb.Message {
  getRetrytype(): string;
  setRetrytype(value: string): void;

  getMaxattempts(): string;
  setMaxattempts(value: string): void;

  getDelayseconds(): string;
  setDelayseconds(value: string): void;

  getExponentialbackoff(): boolean;
  setExponentialbackoff(value: boolean): void;

  clearRetryablesList(): void;
  getRetryablesList(): Array<string>;
  setRetryablesList(value: Array<string>): void;
  addRetryables(value: string, index?: number): string;

  getCreatedby(): string;
  setCreatedby(value: string): void;

  getUpdatedby(): string;
  setUpdatedby(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndpointRetryConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: EndpointRetryConfiguration): EndpointRetryConfiguration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EndpointRetryConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndpointRetryConfiguration;
  static deserializeBinaryFromReader(message: EndpointRetryConfiguration, reader: jspb.BinaryReader): EndpointRetryConfiguration;
}

export namespace EndpointRetryConfiguration {
  export type AsObject = {
    retrytype: string,
    maxattempts: string,
    delayseconds: string,
    exponentialbackoff: boolean,
    retryablesList: Array<string>,
    createdby: string,
    updatedby: string,
  }
}

export class EndpointCacheConfiguration extends jspb.Message {
  getCachetype(): string;
  setCachetype(value: string): void;

  getExpiryinterval(): string;
  setExpiryinterval(value: string): void;

  getMatchthreshold(): number;
  setMatchthreshold(value: number): void;

  getCreatedby(): string;
  setCreatedby(value: string): void;

  getUpdatedby(): string;
  setUpdatedby(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndpointCacheConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: EndpointCacheConfiguration): EndpointCacheConfiguration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EndpointCacheConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndpointCacheConfiguration;
  static deserializeBinaryFromReader(message: EndpointCacheConfiguration, reader: jspb.BinaryReader): EndpointCacheConfiguration;
}

export namespace EndpointCacheConfiguration {
  export type AsObject = {
    cachetype: string,
    expiryinterval: string,
    matchthreshold: number,
    createdby: string,
    updatedby: string,
  }
}

export class CreateEndpointRetryConfigurationRequest extends jspb.Message {
  getEndpointid(): string;
  setEndpointid(value: string): void;

  hasData(): boolean;
  clearData(): void;
  getData(): EndpointRetryConfiguration | undefined;
  setData(value?: EndpointRetryConfiguration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEndpointRetryConfigurationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEndpointRetryConfigurationRequest): CreateEndpointRetryConfigurationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEndpointRetryConfigurationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEndpointRetryConfigurationRequest;
  static deserializeBinaryFromReader(message: CreateEndpointRetryConfigurationRequest, reader: jspb.BinaryReader): CreateEndpointRetryConfigurationRequest;
}

export namespace CreateEndpointRetryConfigurationRequest {
  export type AsObject = {
    endpointid: string,
    data?: EndpointRetryConfiguration.AsObject,
  }
}

export class CreateEndpointRetryConfigurationResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): EndpointRetryConfiguration | undefined;
  setData(value?: EndpointRetryConfiguration): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEndpointRetryConfigurationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEndpointRetryConfigurationResponse): CreateEndpointRetryConfigurationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEndpointRetryConfigurationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEndpointRetryConfigurationResponse;
  static deserializeBinaryFromReader(message: CreateEndpointRetryConfigurationResponse, reader: jspb.BinaryReader): CreateEndpointRetryConfigurationResponse;
}

export namespace CreateEndpointRetryConfigurationResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: EndpointRetryConfiguration.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class CreateEndpointCacheConfigurationRequest extends jspb.Message {
  getEndpointid(): string;
  setEndpointid(value: string): void;

  hasData(): boolean;
  clearData(): void;
  getData(): EndpointCacheConfiguration | undefined;
  setData(value?: EndpointCacheConfiguration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEndpointCacheConfigurationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEndpointCacheConfigurationRequest): CreateEndpointCacheConfigurationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEndpointCacheConfigurationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEndpointCacheConfigurationRequest;
  static deserializeBinaryFromReader(message: CreateEndpointCacheConfigurationRequest, reader: jspb.BinaryReader): CreateEndpointCacheConfigurationRequest;
}

export namespace CreateEndpointCacheConfigurationRequest {
  export type AsObject = {
    endpointid: string,
    data?: EndpointCacheConfiguration.AsObject,
  }
}

export class CreateEndpointCacheConfigurationResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): EndpointCacheConfiguration | undefined;
  setData(value?: EndpointCacheConfiguration): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEndpointCacheConfigurationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEndpointCacheConfigurationResponse): CreateEndpointCacheConfigurationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEndpointCacheConfigurationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEndpointCacheConfigurationResponse;
  static deserializeBinaryFromReader(message: CreateEndpointCacheConfigurationResponse, reader: jspb.BinaryReader): CreateEndpointCacheConfigurationResponse;
}

export namespace CreateEndpointCacheConfigurationResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: EndpointCacheConfiguration.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class CreateEndpointTagRequest extends jspb.Message {
  getEndpointid(): string;
  setEndpointid(value: string): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEndpointTagRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEndpointTagRequest): CreateEndpointTagRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEndpointTagRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEndpointTagRequest;
  static deserializeBinaryFromReader(message: CreateEndpointTagRequest, reader: jspb.BinaryReader): CreateEndpointTagRequest;
}

export namespace CreateEndpointTagRequest {
  export type AsObject = {
    endpointid: string,
    tagsList: Array<string>,
  }
}

export class ForkEndpointRequest extends jspb.Message {
  getEndpointid(): string;
  setEndpointid(value: string): void;

  getEndpointproviderid(): string;
  setEndpointproviderid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForkEndpointRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ForkEndpointRequest): ForkEndpointRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ForkEndpointRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForkEndpointRequest;
  static deserializeBinaryFromReader(message: ForkEndpointRequest, reader: jspb.BinaryReader): ForkEndpointRequest;
}

export namespace ForkEndpointRequest {
  export type AsObject = {
    endpointid: string,
    endpointproviderid: string,
  }
}

export class UpdateEndpointDetailRequest extends jspb.Message {
  getEndpointid(): string;
  setEndpointid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEndpointDetailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEndpointDetailRequest): UpdateEndpointDetailRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateEndpointDetailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEndpointDetailRequest;
  static deserializeBinaryFromReader(message: UpdateEndpointDetailRequest, reader: jspb.BinaryReader): UpdateEndpointDetailRequest;
}

export namespace UpdateEndpointDetailRequest {
  export type AsObject = {
    endpointid: string,
    name: string,
    description: string,
  }
}

export class EndpointLog extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getEndpointid(): string;
  setEndpointid(value: string): void;

  getSource(): string;
  setSource(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  getProjectid(): string;
  setProjectid(value: string): void;

  getOrganizationid(): string;
  setOrganizationid(value: string): void;

  getEndpointprovidermodelid(): string;
  setEndpointprovidermodelid(value: string): void;

  getTimetaken(): string;
  setTimetaken(value: string): void;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearMetricsList(): void;
  getMetricsList(): Array<common_pb.Metric>;
  setMetricsList(value: Array<common_pb.Metric>): void;
  addMetrics(value?: common_pb.Metric, index?: number): common_pb.Metric;

  clearMetadataList(): void;
  getMetadataList(): Array<common_pb.Metadata>;
  setMetadataList(value: Array<common_pb.Metadata>): void;
  addMetadata(value?: common_pb.Metadata, index?: number): common_pb.Metadata;

  clearArgumentsList(): void;
  getArgumentsList(): Array<common_pb.Argument>;
  setArgumentsList(value: Array<common_pb.Argument>): void;
  addArguments(value?: common_pb.Argument, index?: number): common_pb.Argument;

  clearOptionsList(): void;
  getOptionsList(): Array<common_pb.Metadata>;
  setOptionsList(value: Array<common_pb.Metadata>): void;
  addOptions(value?: common_pb.Metadata, index?: number): common_pb.Metadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndpointLog.AsObject;
  static toObject(includeInstance: boolean, msg: EndpointLog): EndpointLog.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EndpointLog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndpointLog;
  static deserializeBinaryFromReader(message: EndpointLog, reader: jspb.BinaryReader): EndpointLog;
}

export namespace EndpointLog {
  export type AsObject = {
    id: string,
    endpointid: string,
    source: string,
    status: string,
    projectid: string,
    organizationid: string,
    endpointprovidermodelid: string,
    timetaken: string,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    metricsList: Array<common_pb.Metric.AsObject>,
    metadataList: Array<common_pb.Metadata.AsObject>,
    argumentsList: Array<common_pb.Argument.AsObject>,
    optionsList: Array<common_pb.Metadata.AsObject>,
  }
}

export class GetAllEndpointLogRequest extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): common_pb.Paginate | undefined;
  setPaginate(value?: common_pb.Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<common_pb.Criteria>;
  setCriteriasList(value: Array<common_pb.Criteria>): void;
  addCriterias(value?: common_pb.Criteria, index?: number): common_pb.Criteria;

  getEndpointid(): string;
  setEndpointid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllEndpointLogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllEndpointLogRequest): GetAllEndpointLogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllEndpointLogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllEndpointLogRequest;
  static deserializeBinaryFromReader(message: GetAllEndpointLogRequest, reader: jspb.BinaryReader): GetAllEndpointLogRequest;
}

export namespace GetAllEndpointLogRequest {
  export type AsObject = {
    paginate?: common_pb.Paginate.AsObject,
    criteriasList: Array<common_pb.Criteria.AsObject>,
    endpointid: string,
  }
}

export class GetAllEndpointLogResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<EndpointLog>;
  setDataList(value: Array<EndpointLog>): void;
  addData(value?: EndpointLog, index?: number): EndpointLog;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): common_pb.Paginated | undefined;
  setPaginated(value?: common_pb.Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllEndpointLogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllEndpointLogResponse): GetAllEndpointLogResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllEndpointLogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllEndpointLogResponse;
  static deserializeBinaryFromReader(message: GetAllEndpointLogResponse, reader: jspb.BinaryReader): GetAllEndpointLogResponse;
}

export namespace GetAllEndpointLogResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<EndpointLog.AsObject>,
    error?: common_pb.Error.AsObject,
    paginated?: common_pb.Paginated.AsObject,
  }
}

export class GetEndpointLogRequest extends jspb.Message {
  getEndpointid(): string;
  setEndpointid(value: string): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEndpointLogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEndpointLogRequest): GetEndpointLogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEndpointLogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEndpointLogRequest;
  static deserializeBinaryFromReader(message: GetEndpointLogRequest, reader: jspb.BinaryReader): GetEndpointLogRequest;
}

export namespace GetEndpointLogRequest {
  export type AsObject = {
    endpointid: string,
    id: string,
  }
}

export class GetEndpointLogResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): EndpointLog | undefined;
  setData(value?: EndpointLog): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEndpointLogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEndpointLogResponse): GetEndpointLogResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEndpointLogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEndpointLogResponse;
  static deserializeBinaryFromReader(message: GetEndpointLogResponse, reader: jspb.BinaryReader): GetEndpointLogResponse;
}

export namespace GetEndpointLogResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: EndpointLog.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

