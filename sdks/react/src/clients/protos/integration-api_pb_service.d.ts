// package: integration_api
// file: integration-api.proto

import * as integration_api_pb from "./integration-api_pb";
import {grpc} from "@improbable-eng/grpc-web";

type UnifiedProviderServiceChat = {
  readonly methodName: string;
  readonly service: typeof UnifiedProviderService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof integration_api_pb.ChatRequest;
  readonly responseType: typeof integration_api_pb.ChatResponse;
};

type UnifiedProviderServiceStreamChat = {
  readonly methodName: string;
  readonly service: typeof UnifiedProviderService;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof integration_api_pb.ChatRequest;
  readonly responseType: typeof integration_api_pb.ChatResponse;
};

type UnifiedProviderServiceEmbedding = {
  readonly methodName: string;
  readonly service: typeof UnifiedProviderService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof integration_api_pb.EmbeddingRequest;
  readonly responseType: typeof integration_api_pb.EmbeddingResponse;
};

type UnifiedProviderServiceReranking = {
  readonly methodName: string;
  readonly service: typeof UnifiedProviderService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof integration_api_pb.RerankingRequest;
  readonly responseType: typeof integration_api_pb.RerankingResponse;
};

type UnifiedProviderServiceVerifyCredential = {
  readonly methodName: string;
  readonly service: typeof UnifiedProviderService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof integration_api_pb.VerifyCredentialRequest;
  readonly responseType: typeof integration_api_pb.VerifyCredentialResponse;
};

export class UnifiedProviderService {
  static readonly serviceName: string;
  static readonly Chat: UnifiedProviderServiceChat;
  static readonly StreamChat: UnifiedProviderServiceStreamChat;
  static readonly Embedding: UnifiedProviderServiceEmbedding;
  static readonly Reranking: UnifiedProviderServiceReranking;
  static readonly VerifyCredential: UnifiedProviderServiceVerifyCredential;
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

export class UnifiedProviderServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  chat(
    requestMessage: integration_api_pb.ChatRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.ChatResponse|null) => void
  ): UnaryResponse;
  chat(
    requestMessage: integration_api_pb.ChatRequest,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.ChatResponse|null) => void
  ): UnaryResponse;
  streamChat(metadata?: grpc.Metadata): BidirectionalStream<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  embedding(
    requestMessage: integration_api_pb.EmbeddingRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.EmbeddingResponse|null) => void
  ): UnaryResponse;
  embedding(
    requestMessage: integration_api_pb.EmbeddingRequest,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.EmbeddingResponse|null) => void
  ): UnaryResponse;
  reranking(
    requestMessage: integration_api_pb.RerankingRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.RerankingResponse|null) => void
  ): UnaryResponse;
  reranking(
    requestMessage: integration_api_pb.RerankingRequest,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.RerankingResponse|null) => void
  ): UnaryResponse;
  verifyCredential(
    requestMessage: integration_api_pb.VerifyCredentialRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.VerifyCredentialResponse|null) => void
  ): UnaryResponse;
  verifyCredential(
    requestMessage: integration_api_pb.VerifyCredentialRequest,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.VerifyCredentialResponse|null) => void
  ): UnaryResponse;
}

