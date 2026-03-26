// package: endpoint_api
// file: invoker-api.proto

import * as invoker_api_pb from "./invoker-api_pb";
import {grpc} from "@improbable-eng/grpc-web";

type DeploymentInvoke = {
  readonly methodName: string;
  readonly service: typeof Deployment;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof invoker_api_pb.InvokeRequest;
  readonly responseType: typeof invoker_api_pb.InvokeResponse;
};

type DeploymentUpdate = {
  readonly methodName: string;
  readonly service: typeof Deployment;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof invoker_api_pb.UpdateRequest;
  readonly responseType: typeof invoker_api_pb.UpdateResponse;
};

type DeploymentProbe = {
  readonly methodName: string;
  readonly service: typeof Deployment;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof invoker_api_pb.ProbeRequest;
  readonly responseType: typeof invoker_api_pb.ProbeResponse;
};

export class Deployment {
  static readonly serviceName: string;
  static readonly Invoke: DeploymentInvoke;
  static readonly Update: DeploymentUpdate;
  static readonly Probe: DeploymentProbe;
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

export class DeploymentClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  invoke(
    requestMessage: invoker_api_pb.InvokeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: invoker_api_pb.InvokeResponse|null) => void
  ): UnaryResponse;
  invoke(
    requestMessage: invoker_api_pb.InvokeRequest,
    callback: (error: ServiceError|null, responseMessage: invoker_api_pb.InvokeResponse|null) => void
  ): UnaryResponse;
  update(
    requestMessage: invoker_api_pb.UpdateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: invoker_api_pb.UpdateResponse|null) => void
  ): UnaryResponse;
  update(
    requestMessage: invoker_api_pb.UpdateRequest,
    callback: (error: ServiceError|null, responseMessage: invoker_api_pb.UpdateResponse|null) => void
  ): UnaryResponse;
  probe(
    requestMessage: invoker_api_pb.ProbeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: invoker_api_pb.ProbeResponse|null) => void
  ): UnaryResponse;
  probe(
    requestMessage: invoker_api_pb.ProbeRequest,
    callback: (error: ServiceError|null, responseMessage: invoker_api_pb.ProbeResponse|null) => void
  ): UnaryResponse;
}

