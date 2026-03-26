// GENERATED CODE -- DO NOT EDIT!

// package: endpoint_api
// file: invoker-api.proto

import * as invoker_api_pb from "./invoker-api_pb";
import * as grpc from "grpc";

interface IDeploymentService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  invoke: grpc.MethodDefinition<invoker_api_pb.InvokeRequest, invoker_api_pb.InvokeResponse>;
  update: grpc.MethodDefinition<invoker_api_pb.UpdateRequest, invoker_api_pb.UpdateResponse>;
  probe: grpc.MethodDefinition<invoker_api_pb.ProbeRequest, invoker_api_pb.ProbeResponse>;
}

export const DeploymentService: IDeploymentService;

export interface IDeploymentServer extends grpc.UntypedServiceImplementation {
  invoke: grpc.handleUnaryCall<invoker_api_pb.InvokeRequest, invoker_api_pb.InvokeResponse>;
  update: grpc.handleUnaryCall<invoker_api_pb.UpdateRequest, invoker_api_pb.UpdateResponse>;
  probe: grpc.handleUnaryCall<invoker_api_pb.ProbeRequest, invoker_api_pb.ProbeResponse>;
}

export class DeploymentClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  invoke(argument: invoker_api_pb.InvokeRequest, callback: grpc.requestCallback<invoker_api_pb.InvokeResponse>): grpc.ClientUnaryCall;
  invoke(argument: invoker_api_pb.InvokeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<invoker_api_pb.InvokeResponse>): grpc.ClientUnaryCall;
  invoke(argument: invoker_api_pb.InvokeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<invoker_api_pb.InvokeResponse>): grpc.ClientUnaryCall;
  update(argument: invoker_api_pb.UpdateRequest, callback: grpc.requestCallback<invoker_api_pb.UpdateResponse>): grpc.ClientUnaryCall;
  update(argument: invoker_api_pb.UpdateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<invoker_api_pb.UpdateResponse>): grpc.ClientUnaryCall;
  update(argument: invoker_api_pb.UpdateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<invoker_api_pb.UpdateResponse>): grpc.ClientUnaryCall;
  probe(argument: invoker_api_pb.ProbeRequest, callback: grpc.requestCallback<invoker_api_pb.ProbeResponse>): grpc.ClientUnaryCall;
  probe(argument: invoker_api_pb.ProbeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<invoker_api_pb.ProbeResponse>): grpc.ClientUnaryCall;
  probe(argument: invoker_api_pb.ProbeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<invoker_api_pb.ProbeResponse>): grpc.ClientUnaryCall;
}
