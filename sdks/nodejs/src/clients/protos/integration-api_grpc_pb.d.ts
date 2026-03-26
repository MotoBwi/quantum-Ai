// GENERATED CODE -- DO NOT EDIT!

// package: integration_api
// file: integration-api.proto

import * as integration_api_pb from "./integration-api_pb";
import * as grpc from "grpc";

interface IBedrockServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  embedding: grpc.MethodDefinition<integration_api_pb.EmbeddingRequest, integration_api_pb.EmbeddingResponse>;
  chat: grpc.MethodDefinition<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  verifyCredential: grpc.MethodDefinition<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export const BedrockServiceService: IBedrockServiceService;

export interface IBedrockServiceServer extends grpc.UntypedServiceImplementation {
  embedding: grpc.handleUnaryCall<integration_api_pb.EmbeddingRequest, integration_api_pb.EmbeddingResponse>;
  chat: grpc.handleUnaryCall<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  verifyCredential: grpc.handleUnaryCall<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export class BedrockServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  embedding(argument: integration_api_pb.EmbeddingRequest, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  embedding(argument: integration_api_pb.EmbeddingRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  embedding(argument: integration_api_pb.EmbeddingRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
}

interface IOpenAiServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  embedding: grpc.MethodDefinition<integration_api_pb.EmbeddingRequest, integration_api_pb.EmbeddingResponse>;
  chat: grpc.MethodDefinition<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat: grpc.MethodDefinition<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  verifyCredential: grpc.MethodDefinition<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
  getModeration: grpc.MethodDefinition<integration_api_pb.GetModerationRequest, integration_api_pb.GetModerationResponse>;
}

export const OpenAiServiceService: IOpenAiServiceService;

export interface IOpenAiServiceServer extends grpc.UntypedServiceImplementation {
  embedding: grpc.handleUnaryCall<integration_api_pb.EmbeddingRequest, integration_api_pb.EmbeddingResponse>;
  chat: grpc.handleUnaryCall<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat: grpc.handleBidiStreamingCall<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  verifyCredential: grpc.handleUnaryCall<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
  getModeration: grpc.handleUnaryCall<integration_api_pb.GetModerationRequest, integration_api_pb.GetModerationResponse>;
}

export class OpenAiServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  embedding(argument: integration_api_pb.EmbeddingRequest, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  embedding(argument: integration_api_pb.EmbeddingRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  embedding(argument: integration_api_pb.EmbeddingRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  streamChat(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  getModeration(argument: integration_api_pb.GetModerationRequest, callback: grpc.requestCallback<integration_api_pb.GetModerationResponse>): grpc.ClientUnaryCall;
  getModeration(argument: integration_api_pb.GetModerationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GetModerationResponse>): grpc.ClientUnaryCall;
  getModeration(argument: integration_api_pb.GetModerationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GetModerationResponse>): grpc.ClientUnaryCall;
}

interface IAzureServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  embedding: grpc.MethodDefinition<integration_api_pb.EmbeddingRequest, integration_api_pb.EmbeddingResponse>;
  chat: grpc.MethodDefinition<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat: grpc.MethodDefinition<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  verifyCredential: grpc.MethodDefinition<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
  getModeration: grpc.MethodDefinition<integration_api_pb.GetModerationRequest, integration_api_pb.GetModerationResponse>;
}

export const AzureServiceService: IAzureServiceService;

export interface IAzureServiceServer extends grpc.UntypedServiceImplementation {
  embedding: grpc.handleUnaryCall<integration_api_pb.EmbeddingRequest, integration_api_pb.EmbeddingResponse>;
  chat: grpc.handleUnaryCall<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat: grpc.handleBidiStreamingCall<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  verifyCredential: grpc.handleUnaryCall<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
  getModeration: grpc.handleUnaryCall<integration_api_pb.GetModerationRequest, integration_api_pb.GetModerationResponse>;
}

export class AzureServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  embedding(argument: integration_api_pb.EmbeddingRequest, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  embedding(argument: integration_api_pb.EmbeddingRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  embedding(argument: integration_api_pb.EmbeddingRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  streamChat(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  getModeration(argument: integration_api_pb.GetModerationRequest, callback: grpc.requestCallback<integration_api_pb.GetModerationResponse>): grpc.ClientUnaryCall;
  getModeration(argument: integration_api_pb.GetModerationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GetModerationResponse>): grpc.ClientUnaryCall;
  getModeration(argument: integration_api_pb.GetModerationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GetModerationResponse>): grpc.ClientUnaryCall;
}

interface IGeminiServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  embedding: grpc.MethodDefinition<integration_api_pb.EmbeddingRequest, integration_api_pb.EmbeddingResponse>;
  chat: grpc.MethodDefinition<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat: grpc.MethodDefinition<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  verifyCredential: grpc.MethodDefinition<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export const GeminiServiceService: IGeminiServiceService;

export interface IGeminiServiceServer extends grpc.UntypedServiceImplementation {
  embedding: grpc.handleUnaryCall<integration_api_pb.EmbeddingRequest, integration_api_pb.EmbeddingResponse>;
  chat: grpc.handleUnaryCall<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat: grpc.handleBidiStreamingCall<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  verifyCredential: grpc.handleUnaryCall<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export class GeminiServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  embedding(argument: integration_api_pb.EmbeddingRequest, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  embedding(argument: integration_api_pb.EmbeddingRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  embedding(argument: integration_api_pb.EmbeddingRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  streamChat(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
}

interface IVertexAiServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  embedding: grpc.MethodDefinition<integration_api_pb.EmbeddingRequest, integration_api_pb.EmbeddingResponse>;
  chat: grpc.MethodDefinition<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat: grpc.MethodDefinition<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  verifyCredential: grpc.MethodDefinition<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export const VertexAiServiceService: IVertexAiServiceService;

export interface IVertexAiServiceServer extends grpc.UntypedServiceImplementation {
  embedding: grpc.handleUnaryCall<integration_api_pb.EmbeddingRequest, integration_api_pb.EmbeddingResponse>;
  chat: grpc.handleUnaryCall<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat: grpc.handleBidiStreamingCall<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  verifyCredential: grpc.handleUnaryCall<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export class VertexAiServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  embedding(argument: integration_api_pb.EmbeddingRequest, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  embedding(argument: integration_api_pb.EmbeddingRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  embedding(argument: integration_api_pb.EmbeddingRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  streamChat(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
}

interface IReplicateServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  chat: grpc.MethodDefinition<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat: grpc.MethodDefinition<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  verifyCredential: grpc.MethodDefinition<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export const ReplicateServiceService: IReplicateServiceService;

export interface IReplicateServiceServer extends grpc.UntypedServiceImplementation {
  chat: grpc.handleUnaryCall<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat: grpc.handleBidiStreamingCall<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  verifyCredential: grpc.handleUnaryCall<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export class ReplicateServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  chat(argument: integration_api_pb.ChatRequest, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  streamChat(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
}

interface IAnthropicServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  chat: grpc.MethodDefinition<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat: grpc.MethodDefinition<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  verifyCredential: grpc.MethodDefinition<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export const AnthropicServiceService: IAnthropicServiceService;

export interface IAnthropicServiceServer extends grpc.UntypedServiceImplementation {
  chat: grpc.handleUnaryCall<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat: grpc.handleBidiStreamingCall<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  verifyCredential: grpc.handleUnaryCall<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export class AnthropicServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  chat(argument: integration_api_pb.ChatRequest, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  streamChat(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
}

interface ICohereServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  embedding: grpc.MethodDefinition<integration_api_pb.EmbeddingRequest, integration_api_pb.EmbeddingResponse>;
  reranking: grpc.MethodDefinition<integration_api_pb.RerankingRequest, integration_api_pb.RerankingResponse>;
  chat: grpc.MethodDefinition<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat: grpc.MethodDefinition<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  verifyCredential: grpc.MethodDefinition<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export const CohereServiceService: ICohereServiceService;

export interface ICohereServiceServer extends grpc.UntypedServiceImplementation {
  embedding: grpc.handleUnaryCall<integration_api_pb.EmbeddingRequest, integration_api_pb.EmbeddingResponse>;
  reranking: grpc.handleUnaryCall<integration_api_pb.RerankingRequest, integration_api_pb.RerankingResponse>;
  chat: grpc.handleUnaryCall<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat: grpc.handleBidiStreamingCall<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  verifyCredential: grpc.handleUnaryCall<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export class CohereServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  embedding(argument: integration_api_pb.EmbeddingRequest, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  embedding(argument: integration_api_pb.EmbeddingRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  embedding(argument: integration_api_pb.EmbeddingRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  reranking(argument: integration_api_pb.RerankingRequest, callback: grpc.requestCallback<integration_api_pb.RerankingResponse>): grpc.ClientUnaryCall;
  reranking(argument: integration_api_pb.RerankingRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.RerankingResponse>): grpc.ClientUnaryCall;
  reranking(argument: integration_api_pb.RerankingRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.RerankingResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  streamChat(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
}

interface IHuggingfaceServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  chat: grpc.MethodDefinition<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  verifyCredential: grpc.MethodDefinition<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export const HuggingfaceServiceService: IHuggingfaceServiceService;

export interface IHuggingfaceServiceServer extends grpc.UntypedServiceImplementation {
  chat: grpc.handleUnaryCall<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  verifyCredential: grpc.handleUnaryCall<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export class HuggingfaceServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  chat(argument: integration_api_pb.ChatRequest, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
}

interface IMistralServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  chat: grpc.MethodDefinition<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat: grpc.MethodDefinition<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  verifyCredential: grpc.MethodDefinition<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export const MistralServiceService: IMistralServiceService;

export interface IMistralServiceServer extends grpc.UntypedServiceImplementation {
  chat: grpc.handleUnaryCall<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat: grpc.handleBidiStreamingCall<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  verifyCredential: grpc.handleUnaryCall<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export class MistralServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  chat(argument: integration_api_pb.ChatRequest, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  streamChat(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
}

interface IStabilityAiServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  verifyCredential: grpc.MethodDefinition<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export const StabilityAiServiceService: IStabilityAiServiceService;

export interface IStabilityAiServiceServer extends grpc.UntypedServiceImplementation {
  verifyCredential: grpc.handleUnaryCall<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export class StabilityAiServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
}

interface ITogetherAiServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  chat: grpc.MethodDefinition<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  verifyCredential: grpc.MethodDefinition<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export const TogetherAiServiceService: ITogetherAiServiceService;

export interface ITogetherAiServiceServer extends grpc.UntypedServiceImplementation {
  chat: grpc.handleUnaryCall<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  verifyCredential: grpc.handleUnaryCall<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export class TogetherAiServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  chat(argument: integration_api_pb.ChatRequest, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
}

interface IDeepInfraServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  verifyCredential: grpc.MethodDefinition<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export const DeepInfraServiceService: IDeepInfraServiceService;

export interface IDeepInfraServiceServer extends grpc.UntypedServiceImplementation {
  verifyCredential: grpc.handleUnaryCall<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export class DeepInfraServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
}

interface IVoyageAiServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  embedding: grpc.MethodDefinition<integration_api_pb.EmbeddingRequest, integration_api_pb.EmbeddingResponse>;
  reranking: grpc.MethodDefinition<integration_api_pb.RerankingRequest, integration_api_pb.RerankingResponse>;
  verifyCredential: grpc.MethodDefinition<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export const VoyageAiServiceService: IVoyageAiServiceService;

export interface IVoyageAiServiceServer extends grpc.UntypedServiceImplementation {
  embedding: grpc.handleUnaryCall<integration_api_pb.EmbeddingRequest, integration_api_pb.EmbeddingResponse>;
  reranking: grpc.handleUnaryCall<integration_api_pb.RerankingRequest, integration_api_pb.RerankingResponse>;
  verifyCredential: grpc.handleUnaryCall<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export class VoyageAiServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  embedding(argument: integration_api_pb.EmbeddingRequest, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  embedding(argument: integration_api_pb.EmbeddingRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  embedding(argument: integration_api_pb.EmbeddingRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  reranking(argument: integration_api_pb.RerankingRequest, callback: grpc.requestCallback<integration_api_pb.RerankingResponse>): grpc.ClientUnaryCall;
  reranking(argument: integration_api_pb.RerankingRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.RerankingResponse>): grpc.ClientUnaryCall;
  reranking(argument: integration_api_pb.RerankingRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.RerankingResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
}
