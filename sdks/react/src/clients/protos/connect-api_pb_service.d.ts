// package: connect_api
// file: connect-api.proto

import * as connect_api_pb from "./connect-api_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ConnectServiceGeneralConnect = {
  readonly methodName: string;
  readonly service: typeof ConnectService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof connect_api_pb.GeneralConnectRequest;
  readonly responseType: typeof connect_api_pb.GeneralConnectResponse;
};

type ConnectServiceGetConnectorFiles = {
  readonly methodName: string;
  readonly service: typeof ConnectService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof connect_api_pb.GetConnectorFilesRequest;
  readonly responseType: typeof connect_api_pb.GetConnectorFilesResponse;
};

export class ConnectService {
  static readonly serviceName: string;
  static readonly GeneralConnect: ConnectServiceGeneralConnect;
  static readonly GetConnectorFiles: ConnectServiceGetConnectorFiles;
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

export class ConnectServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  generalConnect(
    requestMessage: connect_api_pb.GeneralConnectRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: connect_api_pb.GeneralConnectResponse|null) => void
  ): UnaryResponse;
  generalConnect(
    requestMessage: connect_api_pb.GeneralConnectRequest,
    callback: (error: ServiceError|null, responseMessage: connect_api_pb.GeneralConnectResponse|null) => void
  ): UnaryResponse;
  getConnectorFiles(
    requestMessage: connect_api_pb.GetConnectorFilesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: connect_api_pb.GetConnectorFilesResponse|null) => void
  ): UnaryResponse;
  getConnectorFiles(
    requestMessage: connect_api_pb.GetConnectorFilesRequest,
    callback: (error: ServiceError|null, responseMessage: connect_api_pb.GetConnectorFilesResponse|null) => void
  ): UnaryResponse;
}

