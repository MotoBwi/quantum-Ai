// package: endpoint_api
// file: endpoint-api.proto

import * as endpoint_api_pb from "./endpoint-api_pb";
import * as common_pb from "./common_pb";
import {grpc} from "@improbable-eng/grpc-web";

type EndpointServiceGetEndpoint = {
  readonly methodName: string;
  readonly service: typeof EndpointService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof endpoint_api_pb.GetEndpointRequest;
  readonly responseType: typeof endpoint_api_pb.GetEndpointResponse;
};

type EndpointServiceGetAllEndpoint = {
  readonly methodName: string;
  readonly service: typeof EndpointService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof endpoint_api_pb.GetAllEndpointRequest;
  readonly responseType: typeof endpoint_api_pb.GetAllEndpointResponse;
};

type EndpointServiceGetAllEndpointProviderModel = {
  readonly methodName: string;
  readonly service: typeof EndpointService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof endpoint_api_pb.GetAllEndpointProviderModelRequest;
  readonly responseType: typeof endpoint_api_pb.GetAllEndpointProviderModelResponse;
};

type EndpointServiceUpdateEndpointVersion = {
  readonly methodName: string;
  readonly service: typeof EndpointService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof endpoint_api_pb.UpdateEndpointVersionRequest;
  readonly responseType: typeof endpoint_api_pb.UpdateEndpointVersionResponse;
};

type EndpointServiceCreateEndpoint = {
  readonly methodName: string;
  readonly service: typeof EndpointService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof endpoint_api_pb.CreateEndpointRequest;
  readonly responseType: typeof endpoint_api_pb.CreateEndpointResponse;
};

type EndpointServiceCreateEndpointProviderModel = {
  readonly methodName: string;
  readonly service: typeof EndpointService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof endpoint_api_pb.CreateEndpointProviderModelRequest;
  readonly responseType: typeof endpoint_api_pb.CreateEndpointProviderModelResponse;
};

type EndpointServiceCreateEndpointCacheConfiguration = {
  readonly methodName: string;
  readonly service: typeof EndpointService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof endpoint_api_pb.CreateEndpointCacheConfigurationRequest;
  readonly responseType: typeof endpoint_api_pb.CreateEndpointCacheConfigurationResponse;
};

type EndpointServiceCreateEndpointRetryConfiguration = {
  readonly methodName: string;
  readonly service: typeof EndpointService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof endpoint_api_pb.CreateEndpointRetryConfigurationRequest;
  readonly responseType: typeof endpoint_api_pb.CreateEndpointRetryConfigurationResponse;
};

type EndpointServiceCreateEndpointTag = {
  readonly methodName: string;
  readonly service: typeof EndpointService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof endpoint_api_pb.CreateEndpointTagRequest;
  readonly responseType: typeof endpoint_api_pb.GetEndpointResponse;
};

type EndpointServiceForkEndpoint = {
  readonly methodName: string;
  readonly service: typeof EndpointService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof endpoint_api_pb.ForkEndpointRequest;
  readonly responseType: typeof common_pb.BaseResponse;
};

type EndpointServiceUpdateEndpointDetail = {
  readonly methodName: string;
  readonly service: typeof EndpointService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof endpoint_api_pb.UpdateEndpointDetailRequest;
  readonly responseType: typeof endpoint_api_pb.GetEndpointResponse;
};

type EndpointServiceGetAllEndpointLog = {
  readonly methodName: string;
  readonly service: typeof EndpointService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof endpoint_api_pb.GetAllEndpointLogRequest;
  readonly responseType: typeof endpoint_api_pb.GetAllEndpointLogResponse;
};

type EndpointServiceGetEndpointLog = {
  readonly methodName: string;
  readonly service: typeof EndpointService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof endpoint_api_pb.GetEndpointLogRequest;
  readonly responseType: typeof endpoint_api_pb.GetEndpointLogResponse;
};

export class EndpointService {
  static readonly serviceName: string;
  static readonly GetEndpoint: EndpointServiceGetEndpoint;
  static readonly GetAllEndpoint: EndpointServiceGetAllEndpoint;
  static readonly GetAllEndpointProviderModel: EndpointServiceGetAllEndpointProviderModel;
  static readonly UpdateEndpointVersion: EndpointServiceUpdateEndpointVersion;
  static readonly CreateEndpoint: EndpointServiceCreateEndpoint;
  static readonly CreateEndpointProviderModel: EndpointServiceCreateEndpointProviderModel;
  static readonly CreateEndpointCacheConfiguration: EndpointServiceCreateEndpointCacheConfiguration;
  static readonly CreateEndpointRetryConfiguration: EndpointServiceCreateEndpointRetryConfiguration;
  static readonly CreateEndpointTag: EndpointServiceCreateEndpointTag;
  static readonly ForkEndpoint: EndpointServiceForkEndpoint;
  static readonly UpdateEndpointDetail: EndpointServiceUpdateEndpointDetail;
  static readonly GetAllEndpointLog: EndpointServiceGetAllEndpointLog;
  static readonly GetEndpointLog: EndpointServiceGetEndpointLog;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class EndpointServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getEndpoint(
    requestMessage: endpoint_api_pb.GetEndpointRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: endpoint_api_pb.GetEndpointResponse|null) => void
  ): UnaryResponse;
  getEndpoint(
    requestMessage: endpoint_api_pb.GetEndpointRequest,
    callback: (error: ServiceError|null, responseMessage: endpoint_api_pb.GetEndpointResponse|null) => void
  ): UnaryResponse;
  getAllEndpoint(
    requestMessage: endpoint_api_pb.GetAllEndpointRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: endpoint_api_pb.GetAllEndpointResponse|null) => void
  ): UnaryResponse;
  getAllEndpoint(
    requestMessage: endpoint_api_pb.GetAllEndpointRequest,
    callback: (error: ServiceError|null, responseMessage: endpoint_api_pb.GetAllEndpointResponse|null) => void
  ): UnaryResponse;
  getAllEndpointProviderModel(
    requestMessage: endpoint_api_pb.GetAllEndpointProviderModelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: endpoint_api_pb.GetAllEndpointProviderModelResponse|null) => void
  ): UnaryResponse;
  getAllEndpointProviderModel(
    requestMessage: endpoint_api_pb.GetAllEndpointProviderModelRequest,
    callback: (error: ServiceError|null, responseMessage: endpoint_api_pb.GetAllEndpointProviderModelResponse|null) => void
  ): UnaryResponse;
  updateEndpointVersion(
    requestMessage: endpoint_api_pb.UpdateEndpointVersionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: endpoint_api_pb.UpdateEndpointVersionResponse|null) => void
  ): UnaryResponse;
  updateEndpointVersion(
    requestMessage: endpoint_api_pb.UpdateEndpointVersionRequest,
    callback: (error: ServiceError|null, responseMessage: endpoint_api_pb.UpdateEndpointVersionResponse|null) => void
  ): UnaryResponse;
  createEndpoint(
    requestMessage: endpoint_api_pb.CreateEndpointRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: endpoint_api_pb.CreateEndpointResponse|null) => void
  ): UnaryResponse;
  createEndpoint(
    requestMessage: endpoint_api_pb.CreateEndpointRequest,
    callback: (error: ServiceError|null, responseMessage: endpoint_api_pb.CreateEndpointResponse|null) => void
  ): UnaryResponse;
  createEndpointProviderModel(
    requestMessage: endpoint_api_pb.CreateEndpointProviderModelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: endpoint_api_pb.CreateEndpointProviderModelResponse|null) => void
  ): UnaryResponse;
  createEndpointProviderModel(
    requestMessage: endpoint_api_pb.CreateEndpointProviderModelRequest,
    callback: (error: ServiceError|null, responseMessage: endpoint_api_pb.CreateEndpointProviderModelResponse|null) => void
  ): UnaryResponse;
  createEndpointCacheConfiguration(
    requestMessage: endpoint_api_pb.CreateEndpointCacheConfigurationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: endpoint_api_pb.CreateEndpointCacheConfigurationResponse|null) => void
  ): UnaryResponse;
  createEndpointCacheConfiguration(
    requestMessage: endpoint_api_pb.CreateEndpointCacheConfigurationRequest,
    callback: (error: ServiceError|null, responseMessage: endpoint_api_pb.CreateEndpointCacheConfigurationResponse|null) => void
  ): UnaryResponse;
  createEndpointRetryConfiguration(
    requestMessage: endpoint_api_pb.CreateEndpointRetryConfigurationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: endpoint_api_pb.CreateEndpointRetryConfigurationResponse|null) => void
  ): UnaryResponse;
  createEndpointRetryConfiguration(
    requestMessage: endpoint_api_pb.CreateEndpointRetryConfigurationRequest,
    callback: (error: ServiceError|null, responseMessage: endpoint_api_pb.CreateEndpointRetryConfigurationResponse|null) => void
  ): UnaryResponse;
  createEndpointTag(
    requestMessage: endpoint_api_pb.CreateEndpointTagRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: endpoint_api_pb.GetEndpointResponse|null) => void
  ): UnaryResponse;
  createEndpointTag(
    requestMessage: endpoint_api_pb.CreateEndpointTagRequest,
    callback: (error: ServiceError|null, responseMessage: endpoint_api_pb.GetEndpointResponse|null) => void
  ): UnaryResponse;
  forkEndpoint(
    requestMessage: endpoint_api_pb.ForkEndpointRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: common_pb.BaseResponse|null) => void
  ): UnaryResponse;
  forkEndpoint(
    requestMessage: endpoint_api_pb.ForkEndpointRequest,
    callback: (error: ServiceError|null, responseMessage: common_pb.BaseResponse|null) => void
  ): UnaryResponse;
  updateEndpointDetail(
    requestMessage: endpoint_api_pb.UpdateEndpointDetailRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: endpoint_api_pb.GetEndpointResponse|null) => void
  ): UnaryResponse;
  updateEndpointDetail(
    requestMessage: endpoint_api_pb.UpdateEndpointDetailRequest,
    callback: (error: ServiceError|null, responseMessage: endpoint_api_pb.GetEndpointResponse|null) => void
  ): UnaryResponse;
  getAllEndpointLog(
    requestMessage: endpoint_api_pb.GetAllEndpointLogRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: endpoint_api_pb.GetAllEndpointLogResponse|null) => void
  ): UnaryResponse;
  getAllEndpointLog(
    requestMessage: endpoint_api_pb.GetAllEndpointLogRequest,
    callback: (error: ServiceError|null, responseMessage: endpoint_api_pb.GetAllEndpointLogResponse|null) => void
  ): UnaryResponse;
  getEndpointLog(
    requestMessage: endpoint_api_pb.GetEndpointLogRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: endpoint_api_pb.GetEndpointLogResponse|null) => void
  ): UnaryResponse;
  getEndpointLog(
    requestMessage: endpoint_api_pb.GetEndpointLogRequest,
    callback: (error: ServiceError|null, responseMessage: endpoint_api_pb.GetEndpointLogResponse|null) => void
  ): UnaryResponse;
}

