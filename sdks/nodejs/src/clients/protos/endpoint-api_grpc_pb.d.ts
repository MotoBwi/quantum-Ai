// GENERATED CODE -- DO NOT EDIT!

// package: endpoint_api
// file: endpoint-api.proto

import * as endpoint_api_pb from "./endpoint-api_pb";
import * as common_pb from "./common_pb";
import * as grpc from "grpc";

interface IEndpointServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getEndpoint: grpc.MethodDefinition<endpoint_api_pb.GetEndpointRequest, endpoint_api_pb.GetEndpointResponse>;
  getAllEndpoint: grpc.MethodDefinition<endpoint_api_pb.GetAllEndpointRequest, endpoint_api_pb.GetAllEndpointResponse>;
  getAllEndpointProviderModel: grpc.MethodDefinition<endpoint_api_pb.GetAllEndpointProviderModelRequest, endpoint_api_pb.GetAllEndpointProviderModelResponse>;
  updateEndpointVersion: grpc.MethodDefinition<endpoint_api_pb.UpdateEndpointVersionRequest, endpoint_api_pb.UpdateEndpointVersionResponse>;
  createEndpoint: grpc.MethodDefinition<endpoint_api_pb.CreateEndpointRequest, endpoint_api_pb.CreateEndpointResponse>;
  createEndpointProviderModel: grpc.MethodDefinition<endpoint_api_pb.CreateEndpointProviderModelRequest, endpoint_api_pb.CreateEndpointProviderModelResponse>;
  createEndpointCacheConfiguration: grpc.MethodDefinition<endpoint_api_pb.CreateEndpointCacheConfigurationRequest, endpoint_api_pb.CreateEndpointCacheConfigurationResponse>;
  createEndpointRetryConfiguration: grpc.MethodDefinition<endpoint_api_pb.CreateEndpointRetryConfigurationRequest, endpoint_api_pb.CreateEndpointRetryConfigurationResponse>;
  createEndpointTag: grpc.MethodDefinition<endpoint_api_pb.CreateEndpointTagRequest, endpoint_api_pb.GetEndpointResponse>;
  forkEndpoint: grpc.MethodDefinition<endpoint_api_pb.ForkEndpointRequest, common_pb.BaseResponse>;
  updateEndpointDetail: grpc.MethodDefinition<endpoint_api_pb.UpdateEndpointDetailRequest, endpoint_api_pb.GetEndpointResponse>;
  getAllEndpointLog: grpc.MethodDefinition<endpoint_api_pb.GetAllEndpointLogRequest, endpoint_api_pb.GetAllEndpointLogResponse>;
  getEndpointLog: grpc.MethodDefinition<endpoint_api_pb.GetEndpointLogRequest, endpoint_api_pb.GetEndpointLogResponse>;
}

export const EndpointServiceService: IEndpointServiceService;

export interface IEndpointServiceServer extends grpc.UntypedServiceImplementation {
  getEndpoint: grpc.handleUnaryCall<endpoint_api_pb.GetEndpointRequest, endpoint_api_pb.GetEndpointResponse>;
  getAllEndpoint: grpc.handleUnaryCall<endpoint_api_pb.GetAllEndpointRequest, endpoint_api_pb.GetAllEndpointResponse>;
  getAllEndpointProviderModel: grpc.handleUnaryCall<endpoint_api_pb.GetAllEndpointProviderModelRequest, endpoint_api_pb.GetAllEndpointProviderModelResponse>;
  updateEndpointVersion: grpc.handleUnaryCall<endpoint_api_pb.UpdateEndpointVersionRequest, endpoint_api_pb.UpdateEndpointVersionResponse>;
  createEndpoint: grpc.handleUnaryCall<endpoint_api_pb.CreateEndpointRequest, endpoint_api_pb.CreateEndpointResponse>;
  createEndpointProviderModel: grpc.handleUnaryCall<endpoint_api_pb.CreateEndpointProviderModelRequest, endpoint_api_pb.CreateEndpointProviderModelResponse>;
  createEndpointCacheConfiguration: grpc.handleUnaryCall<endpoint_api_pb.CreateEndpointCacheConfigurationRequest, endpoint_api_pb.CreateEndpointCacheConfigurationResponse>;
  createEndpointRetryConfiguration: grpc.handleUnaryCall<endpoint_api_pb.CreateEndpointRetryConfigurationRequest, endpoint_api_pb.CreateEndpointRetryConfigurationResponse>;
  createEndpointTag: grpc.handleUnaryCall<endpoint_api_pb.CreateEndpointTagRequest, endpoint_api_pb.GetEndpointResponse>;
  forkEndpoint: grpc.handleUnaryCall<endpoint_api_pb.ForkEndpointRequest, common_pb.BaseResponse>;
  updateEndpointDetail: grpc.handleUnaryCall<endpoint_api_pb.UpdateEndpointDetailRequest, endpoint_api_pb.GetEndpointResponse>;
  getAllEndpointLog: grpc.handleUnaryCall<endpoint_api_pb.GetAllEndpointLogRequest, endpoint_api_pb.GetAllEndpointLogResponse>;
  getEndpointLog: grpc.handleUnaryCall<endpoint_api_pb.GetEndpointLogRequest, endpoint_api_pb.GetEndpointLogResponse>;
}

export class EndpointServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getEndpoint(argument: endpoint_api_pb.GetEndpointRequest, callback: grpc.requestCallback<endpoint_api_pb.GetEndpointResponse>): grpc.ClientUnaryCall;
  getEndpoint(argument: endpoint_api_pb.GetEndpointRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<endpoint_api_pb.GetEndpointResponse>): grpc.ClientUnaryCall;
  getEndpoint(argument: endpoint_api_pb.GetEndpointRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<endpoint_api_pb.GetEndpointResponse>): grpc.ClientUnaryCall;
  getAllEndpoint(argument: endpoint_api_pb.GetAllEndpointRequest, callback: grpc.requestCallback<endpoint_api_pb.GetAllEndpointResponse>): grpc.ClientUnaryCall;
  getAllEndpoint(argument: endpoint_api_pb.GetAllEndpointRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<endpoint_api_pb.GetAllEndpointResponse>): grpc.ClientUnaryCall;
  getAllEndpoint(argument: endpoint_api_pb.GetAllEndpointRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<endpoint_api_pb.GetAllEndpointResponse>): grpc.ClientUnaryCall;
  getAllEndpointProviderModel(argument: endpoint_api_pb.GetAllEndpointProviderModelRequest, callback: grpc.requestCallback<endpoint_api_pb.GetAllEndpointProviderModelResponse>): grpc.ClientUnaryCall;
  getAllEndpointProviderModel(argument: endpoint_api_pb.GetAllEndpointProviderModelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<endpoint_api_pb.GetAllEndpointProviderModelResponse>): grpc.ClientUnaryCall;
  getAllEndpointProviderModel(argument: endpoint_api_pb.GetAllEndpointProviderModelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<endpoint_api_pb.GetAllEndpointProviderModelResponse>): grpc.ClientUnaryCall;
  updateEndpointVersion(argument: endpoint_api_pb.UpdateEndpointVersionRequest, callback: grpc.requestCallback<endpoint_api_pb.UpdateEndpointVersionResponse>): grpc.ClientUnaryCall;
  updateEndpointVersion(argument: endpoint_api_pb.UpdateEndpointVersionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<endpoint_api_pb.UpdateEndpointVersionResponse>): grpc.ClientUnaryCall;
  updateEndpointVersion(argument: endpoint_api_pb.UpdateEndpointVersionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<endpoint_api_pb.UpdateEndpointVersionResponse>): grpc.ClientUnaryCall;
  createEndpoint(argument: endpoint_api_pb.CreateEndpointRequest, callback: grpc.requestCallback<endpoint_api_pb.CreateEndpointResponse>): grpc.ClientUnaryCall;
  createEndpoint(argument: endpoint_api_pb.CreateEndpointRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<endpoint_api_pb.CreateEndpointResponse>): grpc.ClientUnaryCall;
  createEndpoint(argument: endpoint_api_pb.CreateEndpointRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<endpoint_api_pb.CreateEndpointResponse>): grpc.ClientUnaryCall;
  createEndpointProviderModel(argument: endpoint_api_pb.CreateEndpointProviderModelRequest, callback: grpc.requestCallback<endpoint_api_pb.CreateEndpointProviderModelResponse>): grpc.ClientUnaryCall;
  createEndpointProviderModel(argument: endpoint_api_pb.CreateEndpointProviderModelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<endpoint_api_pb.CreateEndpointProviderModelResponse>): grpc.ClientUnaryCall;
  createEndpointProviderModel(argument: endpoint_api_pb.CreateEndpointProviderModelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<endpoint_api_pb.CreateEndpointProviderModelResponse>): grpc.ClientUnaryCall;
  createEndpointCacheConfiguration(argument: endpoint_api_pb.CreateEndpointCacheConfigurationRequest, callback: grpc.requestCallback<endpoint_api_pb.CreateEndpointCacheConfigurationResponse>): grpc.ClientUnaryCall;
  createEndpointCacheConfiguration(argument: endpoint_api_pb.CreateEndpointCacheConfigurationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<endpoint_api_pb.CreateEndpointCacheConfigurationResponse>): grpc.ClientUnaryCall;
  createEndpointCacheConfiguration(argument: endpoint_api_pb.CreateEndpointCacheConfigurationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<endpoint_api_pb.CreateEndpointCacheConfigurationResponse>): grpc.ClientUnaryCall;
  createEndpointRetryConfiguration(argument: endpoint_api_pb.CreateEndpointRetryConfigurationRequest, callback: grpc.requestCallback<endpoint_api_pb.CreateEndpointRetryConfigurationResponse>): grpc.ClientUnaryCall;
  createEndpointRetryConfiguration(argument: endpoint_api_pb.CreateEndpointRetryConfigurationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<endpoint_api_pb.CreateEndpointRetryConfigurationResponse>): grpc.ClientUnaryCall;
  createEndpointRetryConfiguration(argument: endpoint_api_pb.CreateEndpointRetryConfigurationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<endpoint_api_pb.CreateEndpointRetryConfigurationResponse>): grpc.ClientUnaryCall;
  createEndpointTag(argument: endpoint_api_pb.CreateEndpointTagRequest, callback: grpc.requestCallback<endpoint_api_pb.GetEndpointResponse>): grpc.ClientUnaryCall;
  createEndpointTag(argument: endpoint_api_pb.CreateEndpointTagRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<endpoint_api_pb.GetEndpointResponse>): grpc.ClientUnaryCall;
  createEndpointTag(argument: endpoint_api_pb.CreateEndpointTagRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<endpoint_api_pb.GetEndpointResponse>): grpc.ClientUnaryCall;
  forkEndpoint(argument: endpoint_api_pb.ForkEndpointRequest, callback: grpc.requestCallback<common_pb.BaseResponse>): grpc.ClientUnaryCall;
  forkEndpoint(argument: endpoint_api_pb.ForkEndpointRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_pb.BaseResponse>): grpc.ClientUnaryCall;
  forkEndpoint(argument: endpoint_api_pb.ForkEndpointRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_pb.BaseResponse>): grpc.ClientUnaryCall;
  updateEndpointDetail(argument: endpoint_api_pb.UpdateEndpointDetailRequest, callback: grpc.requestCallback<endpoint_api_pb.GetEndpointResponse>): grpc.ClientUnaryCall;
  updateEndpointDetail(argument: endpoint_api_pb.UpdateEndpointDetailRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<endpoint_api_pb.GetEndpointResponse>): grpc.ClientUnaryCall;
  updateEndpointDetail(argument: endpoint_api_pb.UpdateEndpointDetailRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<endpoint_api_pb.GetEndpointResponse>): grpc.ClientUnaryCall;
  getAllEndpointLog(argument: endpoint_api_pb.GetAllEndpointLogRequest, callback: grpc.requestCallback<endpoint_api_pb.GetAllEndpointLogResponse>): grpc.ClientUnaryCall;
  getAllEndpointLog(argument: endpoint_api_pb.GetAllEndpointLogRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<endpoint_api_pb.GetAllEndpointLogResponse>): grpc.ClientUnaryCall;
  getAllEndpointLog(argument: endpoint_api_pb.GetAllEndpointLogRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<endpoint_api_pb.GetAllEndpointLogResponse>): grpc.ClientUnaryCall;
  getEndpointLog(argument: endpoint_api_pb.GetEndpointLogRequest, callback: grpc.requestCallback<endpoint_api_pb.GetEndpointLogResponse>): grpc.ClientUnaryCall;
  getEndpointLog(argument: endpoint_api_pb.GetEndpointLogRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<endpoint_api_pb.GetEndpointLogResponse>): grpc.ClientUnaryCall;
  getEndpointLog(argument: endpoint_api_pb.GetEndpointLogRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<endpoint_api_pb.GetEndpointLogResponse>): grpc.ClientUnaryCall;
}
