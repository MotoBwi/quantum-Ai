// package: assistant_api
// file: assistant-deployment.proto

import * as assistant_deployment_pb from "./assistant-deployment_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AssistantDeploymentServiceCreateAssistantApiDeployment = {
  readonly methodName: string;
  readonly service: typeof AssistantDeploymentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_deployment_pb.CreateAssistantDeploymentRequest;
  readonly responseType: typeof assistant_deployment_pb.GetAssistantApiDeploymentResponse;
};

type AssistantDeploymentServiceGetAssistantApiDeployment = {
  readonly methodName: string;
  readonly service: typeof AssistantDeploymentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_deployment_pb.GetAssistantDeploymentRequest;
  readonly responseType: typeof assistant_deployment_pb.GetAssistantApiDeploymentResponse;
};

type AssistantDeploymentServiceCreateAssistantWebpluginDeployment = {
  readonly methodName: string;
  readonly service: typeof AssistantDeploymentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_deployment_pb.CreateAssistantDeploymentRequest;
  readonly responseType: typeof assistant_deployment_pb.GetAssistantWebpluginDeploymentResponse;
};

type AssistantDeploymentServiceGetAssistantWebpluginDeployment = {
  readonly methodName: string;
  readonly service: typeof AssistantDeploymentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_deployment_pb.GetAssistantDeploymentRequest;
  readonly responseType: typeof assistant_deployment_pb.GetAssistantWebpluginDeploymentResponse;
};

type AssistantDeploymentServiceCreateAssistantDebuggerDeployment = {
  readonly methodName: string;
  readonly service: typeof AssistantDeploymentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_deployment_pb.CreateAssistantDeploymentRequest;
  readonly responseType: typeof assistant_deployment_pb.GetAssistantDebuggerDeploymentResponse;
};

type AssistantDeploymentServiceGetAssistantDebuggerDeployment = {
  readonly methodName: string;
  readonly service: typeof AssistantDeploymentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_deployment_pb.GetAssistantDeploymentRequest;
  readonly responseType: typeof assistant_deployment_pb.GetAssistantDebuggerDeploymentResponse;
};

type AssistantDeploymentServiceCreateAssistantWhatsappDeployment = {
  readonly methodName: string;
  readonly service: typeof AssistantDeploymentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_deployment_pb.CreateAssistantDeploymentRequest;
  readonly responseType: typeof assistant_deployment_pb.GetAssistantWhatsappDeploymentResponse;
};

type AssistantDeploymentServiceGetAssistantWhatsappDeployment = {
  readonly methodName: string;
  readonly service: typeof AssistantDeploymentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_deployment_pb.GetAssistantDeploymentRequest;
  readonly responseType: typeof assistant_deployment_pb.GetAssistantWhatsappDeploymentResponse;
};

type AssistantDeploymentServiceCreateAssistantPhoneDeployment = {
  readonly methodName: string;
  readonly service: typeof AssistantDeploymentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_deployment_pb.CreateAssistantDeploymentRequest;
  readonly responseType: typeof assistant_deployment_pb.GetAssistantPhoneDeploymentResponse;
};

type AssistantDeploymentServiceGetAssistantPhoneDeployment = {
  readonly methodName: string;
  readonly service: typeof AssistantDeploymentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_deployment_pb.GetAssistantDeploymentRequest;
  readonly responseType: typeof assistant_deployment_pb.GetAssistantPhoneDeploymentResponse;
};

export class AssistantDeploymentService {
  static readonly serviceName: string;
  static readonly CreateAssistantApiDeployment: AssistantDeploymentServiceCreateAssistantApiDeployment;
  static readonly GetAssistantApiDeployment: AssistantDeploymentServiceGetAssistantApiDeployment;
  static readonly CreateAssistantWebpluginDeployment: AssistantDeploymentServiceCreateAssistantWebpluginDeployment;
  static readonly GetAssistantWebpluginDeployment: AssistantDeploymentServiceGetAssistantWebpluginDeployment;
  static readonly CreateAssistantDebuggerDeployment: AssistantDeploymentServiceCreateAssistantDebuggerDeployment;
  static readonly GetAssistantDebuggerDeployment: AssistantDeploymentServiceGetAssistantDebuggerDeployment;
  static readonly CreateAssistantWhatsappDeployment: AssistantDeploymentServiceCreateAssistantWhatsappDeployment;
  static readonly GetAssistantWhatsappDeployment: AssistantDeploymentServiceGetAssistantWhatsappDeployment;
  static readonly CreateAssistantPhoneDeployment: AssistantDeploymentServiceCreateAssistantPhoneDeployment;
  static readonly GetAssistantPhoneDeployment: AssistantDeploymentServiceGetAssistantPhoneDeployment;
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

export class AssistantDeploymentServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createAssistantApiDeployment(
    requestMessage: assistant_deployment_pb.CreateAssistantDeploymentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_deployment_pb.GetAssistantApiDeploymentResponse|null) => void
  ): UnaryResponse;
  createAssistantApiDeployment(
    requestMessage: assistant_deployment_pb.CreateAssistantDeploymentRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_deployment_pb.GetAssistantApiDeploymentResponse|null) => void
  ): UnaryResponse;
  getAssistantApiDeployment(
    requestMessage: assistant_deployment_pb.GetAssistantDeploymentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_deployment_pb.GetAssistantApiDeploymentResponse|null) => void
  ): UnaryResponse;
  getAssistantApiDeployment(
    requestMessage: assistant_deployment_pb.GetAssistantDeploymentRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_deployment_pb.GetAssistantApiDeploymentResponse|null) => void
  ): UnaryResponse;
  createAssistantWebpluginDeployment(
    requestMessage: assistant_deployment_pb.CreateAssistantDeploymentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_deployment_pb.GetAssistantWebpluginDeploymentResponse|null) => void
  ): UnaryResponse;
  createAssistantWebpluginDeployment(
    requestMessage: assistant_deployment_pb.CreateAssistantDeploymentRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_deployment_pb.GetAssistantWebpluginDeploymentResponse|null) => void
  ): UnaryResponse;
  getAssistantWebpluginDeployment(
    requestMessage: assistant_deployment_pb.GetAssistantDeploymentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_deployment_pb.GetAssistantWebpluginDeploymentResponse|null) => void
  ): UnaryResponse;
  getAssistantWebpluginDeployment(
    requestMessage: assistant_deployment_pb.GetAssistantDeploymentRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_deployment_pb.GetAssistantWebpluginDeploymentResponse|null) => void
  ): UnaryResponse;
  createAssistantDebuggerDeployment(
    requestMessage: assistant_deployment_pb.CreateAssistantDeploymentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_deployment_pb.GetAssistantDebuggerDeploymentResponse|null) => void
  ): UnaryResponse;
  createAssistantDebuggerDeployment(
    requestMessage: assistant_deployment_pb.CreateAssistantDeploymentRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_deployment_pb.GetAssistantDebuggerDeploymentResponse|null) => void
  ): UnaryResponse;
  getAssistantDebuggerDeployment(
    requestMessage: assistant_deployment_pb.GetAssistantDeploymentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_deployment_pb.GetAssistantDebuggerDeploymentResponse|null) => void
  ): UnaryResponse;
  getAssistantDebuggerDeployment(
    requestMessage: assistant_deployment_pb.GetAssistantDeploymentRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_deployment_pb.GetAssistantDebuggerDeploymentResponse|null) => void
  ): UnaryResponse;
  createAssistantWhatsappDeployment(
    requestMessage: assistant_deployment_pb.CreateAssistantDeploymentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_deployment_pb.GetAssistantWhatsappDeploymentResponse|null) => void
  ): UnaryResponse;
  createAssistantWhatsappDeployment(
    requestMessage: assistant_deployment_pb.CreateAssistantDeploymentRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_deployment_pb.GetAssistantWhatsappDeploymentResponse|null) => void
  ): UnaryResponse;
  getAssistantWhatsappDeployment(
    requestMessage: assistant_deployment_pb.GetAssistantDeploymentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_deployment_pb.GetAssistantWhatsappDeploymentResponse|null) => void
  ): UnaryResponse;
  getAssistantWhatsappDeployment(
    requestMessage: assistant_deployment_pb.GetAssistantDeploymentRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_deployment_pb.GetAssistantWhatsappDeploymentResponse|null) => void
  ): UnaryResponse;
  createAssistantPhoneDeployment(
    requestMessage: assistant_deployment_pb.CreateAssistantDeploymentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_deployment_pb.GetAssistantPhoneDeploymentResponse|null) => void
  ): UnaryResponse;
  createAssistantPhoneDeployment(
    requestMessage: assistant_deployment_pb.CreateAssistantDeploymentRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_deployment_pb.GetAssistantPhoneDeploymentResponse|null) => void
  ): UnaryResponse;
  getAssistantPhoneDeployment(
    requestMessage: assistant_deployment_pb.GetAssistantDeploymentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_deployment_pb.GetAssistantPhoneDeploymentResponse|null) => void
  ): UnaryResponse;
  getAssistantPhoneDeployment(
    requestMessage: assistant_deployment_pb.GetAssistantDeploymentRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_deployment_pb.GetAssistantPhoneDeploymentResponse|null) => void
  ): UnaryResponse;
}

