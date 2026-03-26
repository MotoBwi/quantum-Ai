// GENERATED CODE -- DO NOT EDIT!

// package: connect_api
// file: connect-api.proto

import * as connect_api_pb from "./connect-api_pb";
import * as grpc from "grpc";

interface IConnectServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  generalConnect: grpc.MethodDefinition<connect_api_pb.GeneralConnectRequest, connect_api_pb.GeneralConnectResponse>;
  getConnectorFiles: grpc.MethodDefinition<connect_api_pb.GetConnectorFilesRequest, connect_api_pb.GetConnectorFilesResponse>;
}

export const ConnectServiceService: IConnectServiceService;

export interface IConnectServiceServer extends grpc.UntypedServiceImplementation {
  generalConnect: grpc.handleUnaryCall<connect_api_pb.GeneralConnectRequest, connect_api_pb.GeneralConnectResponse>;
  getConnectorFiles: grpc.handleUnaryCall<connect_api_pb.GetConnectorFilesRequest, connect_api_pb.GetConnectorFilesResponse>;
}

export class ConnectServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  generalConnect(argument: connect_api_pb.GeneralConnectRequest, callback: grpc.requestCallback<connect_api_pb.GeneralConnectResponse>): grpc.ClientUnaryCall;
  generalConnect(argument: connect_api_pb.GeneralConnectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<connect_api_pb.GeneralConnectResponse>): grpc.ClientUnaryCall;
  generalConnect(argument: connect_api_pb.GeneralConnectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<connect_api_pb.GeneralConnectResponse>): grpc.ClientUnaryCall;
  getConnectorFiles(argument: connect_api_pb.GetConnectorFilesRequest, callback: grpc.requestCallback<connect_api_pb.GetConnectorFilesResponse>): grpc.ClientUnaryCall;
  getConnectorFiles(argument: connect_api_pb.GetConnectorFilesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<connect_api_pb.GetConnectorFilesResponse>): grpc.ClientUnaryCall;
  getConnectorFiles(argument: connect_api_pb.GetConnectorFilesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<connect_api_pb.GetConnectorFilesResponse>): grpc.ClientUnaryCall;
}
