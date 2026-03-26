// package: assistant_api
// file: assistant-api.proto

import * as assistant_api_pb from "./assistant-api_pb";
import * as common_pb from "./common_pb";
import * as assistant_tool_pb from "./assistant-tool_pb";
import * as assistant_analysis_pb from "./assistant-analysis_pb";
import * as assistant_webhook_pb from "./assistant-webhook_pb";
import * as assistant_knowledge_pb from "./assistant-knowledge_pb";
import * as assistant_provider_pb from "./assistant-provider_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AssistantServiceGetAssistant = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.GetAssistantRequest;
  readonly responseType: typeof assistant_api_pb.GetAssistantResponse;
};

type AssistantServiceGetAllAssistant = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.GetAllAssistantRequest;
  readonly responseType: typeof assistant_api_pb.GetAllAssistantResponse;
};

type AssistantServiceCreateAssistant = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.CreateAssistantRequest;
  readonly responseType: typeof assistant_api_pb.GetAssistantResponse;
};

type AssistantServiceDeleteAssistant = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.DeleteAssistantRequest;
  readonly responseType: typeof assistant_api_pb.GetAssistantResponse;
};

type AssistantServiceGetAllAssistantProvider = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_provider_pb.GetAllAssistantProviderRequest;
  readonly responseType: typeof assistant_provider_pb.GetAllAssistantProviderResponse;
};

type AssistantServiceCreateAssistantProvider = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_provider_pb.CreateAssistantProviderRequest;
  readonly responseType: typeof assistant_provider_pb.GetAssistantProviderResponse;
};

type AssistantServiceCreateAssistantTag = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.CreateAssistantTagRequest;
  readonly responseType: typeof assistant_api_pb.GetAssistantResponse;
};

type AssistantServiceUpdateAssistantVersion = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_provider_pb.UpdateAssistantVersionRequest;
  readonly responseType: typeof assistant_api_pb.GetAssistantResponse;
};

type AssistantServiceUpdateAssistantDetail = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.UpdateAssistantDetailRequest;
  readonly responseType: typeof assistant_api_pb.GetAssistantResponse;
};

type AssistantServiceGetAllAssistantMessage = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.GetAllAssistantMessageRequest;
  readonly responseType: typeof assistant_api_pb.GetAllAssistantMessageResponse;
};

type AssistantServiceGetAllConversationMessage = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof common_pb.GetAllConversationMessageRequest;
  readonly responseType: typeof common_pb.GetAllConversationMessageResponse;
};

type AssistantServiceGetAllMessage = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.GetAllMessageRequest;
  readonly responseType: typeof assistant_api_pb.GetAllMessageResponse;
};

type AssistantServiceGetAllAssistantTelemetry = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.GetAllAssistantTelemetryRequest;
  readonly responseType: typeof assistant_api_pb.GetAllAssistantTelemetryResponse;
};

type AssistantServiceGetAssistantTelemetryProvider = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.GetAssistantTelemetryProviderRequest;
  readonly responseType: typeof assistant_api_pb.GetAssistantTelemetryProviderResponse;
};

type AssistantServiceGetAllAssistantTelemetryProvider = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.GetAllAssistantTelemetryProviderRequest;
  readonly responseType: typeof assistant_api_pb.GetAllAssistantTelemetryProviderResponse;
};

type AssistantServiceCreateAssistantTelemetryProvider = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.CreateAssistantTelemetryProviderRequest;
  readonly responseType: typeof assistant_api_pb.GetAssistantTelemetryProviderResponse;
};

type AssistantServiceUpdateAssistantTelemetryProvider = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.UpdateAssistantTelemetryProviderRequest;
  readonly responseType: typeof assistant_api_pb.GetAssistantTelemetryProviderResponse;
};

type AssistantServiceDeleteAssistantTelemetryProvider = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.DeleteAssistantTelemetryProviderRequest;
  readonly responseType: typeof assistant_api_pb.GetAssistantTelemetryProviderResponse;
};

type AssistantServiceGetAllAssistantConversation = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof common_pb.GetAllAssistantConversationRequest;
  readonly responseType: typeof common_pb.GetAllAssistantConversationResponse;
};

type AssistantServiceGetAssistantConversation = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.GetAssistantConversationRequest;
  readonly responseType: typeof assistant_api_pb.GetAssistantConversationResponse;
};

type AssistantServiceGetAssistantWebhookLog = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_webhook_pb.GetAssistantWebhookLogRequest;
  readonly responseType: typeof assistant_webhook_pb.GetAssistantWebhookLogResponse;
};

type AssistantServiceGetAllAssistantWebhookLog = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_webhook_pb.GetAllAssistantWebhookLogRequest;
  readonly responseType: typeof assistant_webhook_pb.GetAllAssistantWebhookLogResponse;
};

type AssistantServiceGetAllAssistantWebhook = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_webhook_pb.GetAllAssistantWebhookRequest;
  readonly responseType: typeof assistant_webhook_pb.GetAllAssistantWebhookResponse;
};

type AssistantServiceGetAssistantWebhook = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_webhook_pb.GetAssistantWebhookRequest;
  readonly responseType: typeof assistant_webhook_pb.GetAssistantWebhookResponse;
};

type AssistantServiceCreateAssistantWebhook = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_webhook_pb.CreateAssistantWebhookRequest;
  readonly responseType: typeof assistant_webhook_pb.GetAssistantWebhookResponse;
};

type AssistantServiceUpdateAssistantWebhook = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_webhook_pb.UpdateAssistantWebhookRequest;
  readonly responseType: typeof assistant_webhook_pb.GetAssistantWebhookResponse;
};

type AssistantServiceDeleteAssistantWebhook = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_webhook_pb.DeleteAssistantWebhookRequest;
  readonly responseType: typeof assistant_webhook_pb.GetAssistantWebhookResponse;
};

type AssistantServiceGetAssistantToolLog = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_tool_pb.GetAssistantToolLogRequest;
  readonly responseType: typeof assistant_tool_pb.GetAssistantToolLogResponse;
};

type AssistantServiceGetAllAssistantToolLog = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_tool_pb.GetAllAssistantToolLogRequest;
  readonly responseType: typeof assistant_tool_pb.GetAllAssistantToolLogResponse;
};

type AssistantServiceGetAssistantAnalysis = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_analysis_pb.GetAssistantAnalysisRequest;
  readonly responseType: typeof assistant_analysis_pb.GetAssistantAnalysisResponse;
};

type AssistantServiceUpdateAssistantAnalysis = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_analysis_pb.UpdateAssistantAnalysisRequest;
  readonly responseType: typeof assistant_analysis_pb.GetAssistantAnalysisResponse;
};

type AssistantServiceCreateAssistantAnalysis = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_analysis_pb.CreateAssistantAnalysisRequest;
  readonly responseType: typeof assistant_analysis_pb.GetAssistantAnalysisResponse;
};

type AssistantServiceDeleteAssistantAnalysis = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_analysis_pb.DeleteAssistantAnalysisRequest;
  readonly responseType: typeof assistant_analysis_pb.GetAssistantAnalysisResponse;
};

type AssistantServiceGetAllAssistantAnalysis = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_analysis_pb.GetAllAssistantAnalysisRequest;
  readonly responseType: typeof assistant_analysis_pb.GetAllAssistantAnalysisResponse;
};

type AssistantServiceCreateAssistantTool = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_tool_pb.CreateAssistantToolRequest;
  readonly responseType: typeof assistant_tool_pb.GetAssistantToolResponse;
};

type AssistantServiceGetAssistantTool = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_tool_pb.GetAssistantToolRequest;
  readonly responseType: typeof assistant_tool_pb.GetAssistantToolResponse;
};

type AssistantServiceGetAllAssistantTool = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_tool_pb.GetAllAssistantToolRequest;
  readonly responseType: typeof assistant_tool_pb.GetAllAssistantToolResponse;
};

type AssistantServiceDeleteAssistantTool = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_tool_pb.DeleteAssistantToolRequest;
  readonly responseType: typeof assistant_tool_pb.GetAssistantToolResponse;
};

type AssistantServiceUpdateAssistantTool = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_tool_pb.UpdateAssistantToolRequest;
  readonly responseType: typeof assistant_tool_pb.GetAssistantToolResponse;
};

type AssistantServiceCreateAssistantKnowledge = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_knowledge_pb.CreateAssistantKnowledgeRequest;
  readonly responseType: typeof assistant_knowledge_pb.GetAssistantKnowledgeResponse;
};

type AssistantServiceGetAssistantKnowledge = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_knowledge_pb.GetAssistantKnowledgeRequest;
  readonly responseType: typeof assistant_knowledge_pb.GetAssistantKnowledgeResponse;
};

type AssistantServiceGetAllAssistantKnowledge = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_knowledge_pb.GetAllAssistantKnowledgeRequest;
  readonly responseType: typeof assistant_knowledge_pb.GetAllAssistantKnowledgeResponse;
};

type AssistantServiceDeleteAssistantKnowledge = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_knowledge_pb.DeleteAssistantKnowledgeRequest;
  readonly responseType: typeof assistant_knowledge_pb.GetAssistantKnowledgeResponse;
};

type AssistantServiceUpdateAssistantKnowledge = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_knowledge_pb.UpdateAssistantKnowledgeRequest;
  readonly responseType: typeof assistant_knowledge_pb.GetAssistantKnowledgeResponse;
};

export class AssistantService {
  static readonly serviceName: string;
  static readonly GetAssistant: AssistantServiceGetAssistant;
  static readonly GetAllAssistant: AssistantServiceGetAllAssistant;
  static readonly CreateAssistant: AssistantServiceCreateAssistant;
  static readonly DeleteAssistant: AssistantServiceDeleteAssistant;
  static readonly GetAllAssistantProvider: AssistantServiceGetAllAssistantProvider;
  static readonly CreateAssistantProvider: AssistantServiceCreateAssistantProvider;
  static readonly CreateAssistantTag: AssistantServiceCreateAssistantTag;
  static readonly UpdateAssistantVersion: AssistantServiceUpdateAssistantVersion;
  static readonly UpdateAssistantDetail: AssistantServiceUpdateAssistantDetail;
  static readonly GetAllAssistantMessage: AssistantServiceGetAllAssistantMessage;
  static readonly GetAllConversationMessage: AssistantServiceGetAllConversationMessage;
  static readonly GetAllMessage: AssistantServiceGetAllMessage;
  static readonly GetAllAssistantTelemetry: AssistantServiceGetAllAssistantTelemetry;
  static readonly GetAssistantTelemetryProvider: AssistantServiceGetAssistantTelemetryProvider;
  static readonly GetAllAssistantTelemetryProvider: AssistantServiceGetAllAssistantTelemetryProvider;
  static readonly CreateAssistantTelemetryProvider: AssistantServiceCreateAssistantTelemetryProvider;
  static readonly UpdateAssistantTelemetryProvider: AssistantServiceUpdateAssistantTelemetryProvider;
  static readonly DeleteAssistantTelemetryProvider: AssistantServiceDeleteAssistantTelemetryProvider;
  static readonly GetAllAssistantConversation: AssistantServiceGetAllAssistantConversation;
  static readonly GetAssistantConversation: AssistantServiceGetAssistantConversation;
  static readonly GetAssistantWebhookLog: AssistantServiceGetAssistantWebhookLog;
  static readonly GetAllAssistantWebhookLog: AssistantServiceGetAllAssistantWebhookLog;
  static readonly GetAllAssistantWebhook: AssistantServiceGetAllAssistantWebhook;
  static readonly GetAssistantWebhook: AssistantServiceGetAssistantWebhook;
  static readonly CreateAssistantWebhook: AssistantServiceCreateAssistantWebhook;
  static readonly UpdateAssistantWebhook: AssistantServiceUpdateAssistantWebhook;
  static readonly DeleteAssistantWebhook: AssistantServiceDeleteAssistantWebhook;
  static readonly GetAssistantToolLog: AssistantServiceGetAssistantToolLog;
  static readonly GetAllAssistantToolLog: AssistantServiceGetAllAssistantToolLog;
  static readonly GetAssistantAnalysis: AssistantServiceGetAssistantAnalysis;
  static readonly UpdateAssistantAnalysis: AssistantServiceUpdateAssistantAnalysis;
  static readonly CreateAssistantAnalysis: AssistantServiceCreateAssistantAnalysis;
  static readonly DeleteAssistantAnalysis: AssistantServiceDeleteAssistantAnalysis;
  static readonly GetAllAssistantAnalysis: AssistantServiceGetAllAssistantAnalysis;
  static readonly CreateAssistantTool: AssistantServiceCreateAssistantTool;
  static readonly GetAssistantTool: AssistantServiceGetAssistantTool;
  static readonly GetAllAssistantTool: AssistantServiceGetAllAssistantTool;
  static readonly DeleteAssistantTool: AssistantServiceDeleteAssistantTool;
  static readonly UpdateAssistantTool: AssistantServiceUpdateAssistantTool;
  static readonly CreateAssistantKnowledge: AssistantServiceCreateAssistantKnowledge;
  static readonly GetAssistantKnowledge: AssistantServiceGetAssistantKnowledge;
  static readonly GetAllAssistantKnowledge: AssistantServiceGetAllAssistantKnowledge;
  static readonly DeleteAssistantKnowledge: AssistantServiceDeleteAssistantKnowledge;
  static readonly UpdateAssistantKnowledge: AssistantServiceUpdateAssistantKnowledge;
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

export class AssistantServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getAssistant(
    requestMessage: assistant_api_pb.GetAssistantRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantResponse|null) => void
  ): UnaryResponse;
  getAssistant(
    requestMessage: assistant_api_pb.GetAssistantRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantResponse|null) => void
  ): UnaryResponse;
  getAllAssistant(
    requestMessage: assistant_api_pb.GetAllAssistantRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAllAssistantResponse|null) => void
  ): UnaryResponse;
  getAllAssistant(
    requestMessage: assistant_api_pb.GetAllAssistantRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAllAssistantResponse|null) => void
  ): UnaryResponse;
  createAssistant(
    requestMessage: assistant_api_pb.CreateAssistantRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantResponse|null) => void
  ): UnaryResponse;
  createAssistant(
    requestMessage: assistant_api_pb.CreateAssistantRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantResponse|null) => void
  ): UnaryResponse;
  deleteAssistant(
    requestMessage: assistant_api_pb.DeleteAssistantRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantResponse|null) => void
  ): UnaryResponse;
  deleteAssistant(
    requestMessage: assistant_api_pb.DeleteAssistantRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantResponse|null) => void
  ): UnaryResponse;
  getAllAssistantProvider(
    requestMessage: assistant_provider_pb.GetAllAssistantProviderRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_provider_pb.GetAllAssistantProviderResponse|null) => void
  ): UnaryResponse;
  getAllAssistantProvider(
    requestMessage: assistant_provider_pb.GetAllAssistantProviderRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_provider_pb.GetAllAssistantProviderResponse|null) => void
  ): UnaryResponse;
  createAssistantProvider(
    requestMessage: assistant_provider_pb.CreateAssistantProviderRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_provider_pb.GetAssistantProviderResponse|null) => void
  ): UnaryResponse;
  createAssistantProvider(
    requestMessage: assistant_provider_pb.CreateAssistantProviderRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_provider_pb.GetAssistantProviderResponse|null) => void
  ): UnaryResponse;
  createAssistantTag(
    requestMessage: assistant_api_pb.CreateAssistantTagRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantResponse|null) => void
  ): UnaryResponse;
  createAssistantTag(
    requestMessage: assistant_api_pb.CreateAssistantTagRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantResponse|null) => void
  ): UnaryResponse;
  updateAssistantVersion(
    requestMessage: assistant_provider_pb.UpdateAssistantVersionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantResponse|null) => void
  ): UnaryResponse;
  updateAssistantVersion(
    requestMessage: assistant_provider_pb.UpdateAssistantVersionRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantResponse|null) => void
  ): UnaryResponse;
  updateAssistantDetail(
    requestMessage: assistant_api_pb.UpdateAssistantDetailRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantResponse|null) => void
  ): UnaryResponse;
  updateAssistantDetail(
    requestMessage: assistant_api_pb.UpdateAssistantDetailRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantResponse|null) => void
  ): UnaryResponse;
  getAllAssistantMessage(
    requestMessage: assistant_api_pb.GetAllAssistantMessageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAllAssistantMessageResponse|null) => void
  ): UnaryResponse;
  getAllAssistantMessage(
    requestMessage: assistant_api_pb.GetAllAssistantMessageRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAllAssistantMessageResponse|null) => void
  ): UnaryResponse;
  getAllConversationMessage(
    requestMessage: common_pb.GetAllConversationMessageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: common_pb.GetAllConversationMessageResponse|null) => void
  ): UnaryResponse;
  getAllConversationMessage(
    requestMessage: common_pb.GetAllConversationMessageRequest,
    callback: (error: ServiceError|null, responseMessage: common_pb.GetAllConversationMessageResponse|null) => void
  ): UnaryResponse;
  getAllMessage(
    requestMessage: assistant_api_pb.GetAllMessageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAllMessageResponse|null) => void
  ): UnaryResponse;
  getAllMessage(
    requestMessage: assistant_api_pb.GetAllMessageRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAllMessageResponse|null) => void
  ): UnaryResponse;
  getAllAssistantTelemetry(
    requestMessage: assistant_api_pb.GetAllAssistantTelemetryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAllAssistantTelemetryResponse|null) => void
  ): UnaryResponse;
  getAllAssistantTelemetry(
    requestMessage: assistant_api_pb.GetAllAssistantTelemetryRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAllAssistantTelemetryResponse|null) => void
  ): UnaryResponse;
  getAssistantTelemetryProvider(
    requestMessage: assistant_api_pb.GetAssistantTelemetryProviderRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantTelemetryProviderResponse|null) => void
  ): UnaryResponse;
  getAssistantTelemetryProvider(
    requestMessage: assistant_api_pb.GetAssistantTelemetryProviderRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantTelemetryProviderResponse|null) => void
  ): UnaryResponse;
  getAllAssistantTelemetryProvider(
    requestMessage: assistant_api_pb.GetAllAssistantTelemetryProviderRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAllAssistantTelemetryProviderResponse|null) => void
  ): UnaryResponse;
  getAllAssistantTelemetryProvider(
    requestMessage: assistant_api_pb.GetAllAssistantTelemetryProviderRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAllAssistantTelemetryProviderResponse|null) => void
  ): UnaryResponse;
  createAssistantTelemetryProvider(
    requestMessage: assistant_api_pb.CreateAssistantTelemetryProviderRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantTelemetryProviderResponse|null) => void
  ): UnaryResponse;
  createAssistantTelemetryProvider(
    requestMessage: assistant_api_pb.CreateAssistantTelemetryProviderRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantTelemetryProviderResponse|null) => void
  ): UnaryResponse;
  updateAssistantTelemetryProvider(
    requestMessage: assistant_api_pb.UpdateAssistantTelemetryProviderRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantTelemetryProviderResponse|null) => void
  ): UnaryResponse;
  updateAssistantTelemetryProvider(
    requestMessage: assistant_api_pb.UpdateAssistantTelemetryProviderRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantTelemetryProviderResponse|null) => void
  ): UnaryResponse;
  deleteAssistantTelemetryProvider(
    requestMessage: assistant_api_pb.DeleteAssistantTelemetryProviderRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantTelemetryProviderResponse|null) => void
  ): UnaryResponse;
  deleteAssistantTelemetryProvider(
    requestMessage: assistant_api_pb.DeleteAssistantTelemetryProviderRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantTelemetryProviderResponse|null) => void
  ): UnaryResponse;
  getAllAssistantConversation(
    requestMessage: common_pb.GetAllAssistantConversationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: common_pb.GetAllAssistantConversationResponse|null) => void
  ): UnaryResponse;
  getAllAssistantConversation(
    requestMessage: common_pb.GetAllAssistantConversationRequest,
    callback: (error: ServiceError|null, responseMessage: common_pb.GetAllAssistantConversationResponse|null) => void
  ): UnaryResponse;
  getAssistantConversation(
    requestMessage: assistant_api_pb.GetAssistantConversationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantConversationResponse|null) => void
  ): UnaryResponse;
  getAssistantConversation(
    requestMessage: assistant_api_pb.GetAssistantConversationRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantConversationResponse|null) => void
  ): UnaryResponse;
  getAssistantWebhookLog(
    requestMessage: assistant_webhook_pb.GetAssistantWebhookLogRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_webhook_pb.GetAssistantWebhookLogResponse|null) => void
  ): UnaryResponse;
  getAssistantWebhookLog(
    requestMessage: assistant_webhook_pb.GetAssistantWebhookLogRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_webhook_pb.GetAssistantWebhookLogResponse|null) => void
  ): UnaryResponse;
  getAllAssistantWebhookLog(
    requestMessage: assistant_webhook_pb.GetAllAssistantWebhookLogRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_webhook_pb.GetAllAssistantWebhookLogResponse|null) => void
  ): UnaryResponse;
  getAllAssistantWebhookLog(
    requestMessage: assistant_webhook_pb.GetAllAssistantWebhookLogRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_webhook_pb.GetAllAssistantWebhookLogResponse|null) => void
  ): UnaryResponse;
  getAllAssistantWebhook(
    requestMessage: assistant_webhook_pb.GetAllAssistantWebhookRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_webhook_pb.GetAllAssistantWebhookResponse|null) => void
  ): UnaryResponse;
  getAllAssistantWebhook(
    requestMessage: assistant_webhook_pb.GetAllAssistantWebhookRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_webhook_pb.GetAllAssistantWebhookResponse|null) => void
  ): UnaryResponse;
  getAssistantWebhook(
    requestMessage: assistant_webhook_pb.GetAssistantWebhookRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_webhook_pb.GetAssistantWebhookResponse|null) => void
  ): UnaryResponse;
  getAssistantWebhook(
    requestMessage: assistant_webhook_pb.GetAssistantWebhookRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_webhook_pb.GetAssistantWebhookResponse|null) => void
  ): UnaryResponse;
  createAssistantWebhook(
    requestMessage: assistant_webhook_pb.CreateAssistantWebhookRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_webhook_pb.GetAssistantWebhookResponse|null) => void
  ): UnaryResponse;
  createAssistantWebhook(
    requestMessage: assistant_webhook_pb.CreateAssistantWebhookRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_webhook_pb.GetAssistantWebhookResponse|null) => void
  ): UnaryResponse;
  updateAssistantWebhook(
    requestMessage: assistant_webhook_pb.UpdateAssistantWebhookRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_webhook_pb.GetAssistantWebhookResponse|null) => void
  ): UnaryResponse;
  updateAssistantWebhook(
    requestMessage: assistant_webhook_pb.UpdateAssistantWebhookRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_webhook_pb.GetAssistantWebhookResponse|null) => void
  ): UnaryResponse;
  deleteAssistantWebhook(
    requestMessage: assistant_webhook_pb.DeleteAssistantWebhookRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_webhook_pb.GetAssistantWebhookResponse|null) => void
  ): UnaryResponse;
  deleteAssistantWebhook(
    requestMessage: assistant_webhook_pb.DeleteAssistantWebhookRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_webhook_pb.GetAssistantWebhookResponse|null) => void
  ): UnaryResponse;
  getAssistantToolLog(
    requestMessage: assistant_tool_pb.GetAssistantToolLogRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_tool_pb.GetAssistantToolLogResponse|null) => void
  ): UnaryResponse;
  getAssistantToolLog(
    requestMessage: assistant_tool_pb.GetAssistantToolLogRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_tool_pb.GetAssistantToolLogResponse|null) => void
  ): UnaryResponse;
  getAllAssistantToolLog(
    requestMessage: assistant_tool_pb.GetAllAssistantToolLogRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_tool_pb.GetAllAssistantToolLogResponse|null) => void
  ): UnaryResponse;
  getAllAssistantToolLog(
    requestMessage: assistant_tool_pb.GetAllAssistantToolLogRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_tool_pb.GetAllAssistantToolLogResponse|null) => void
  ): UnaryResponse;
  getAssistantAnalysis(
    requestMessage: assistant_analysis_pb.GetAssistantAnalysisRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_analysis_pb.GetAssistantAnalysisResponse|null) => void
  ): UnaryResponse;
  getAssistantAnalysis(
    requestMessage: assistant_analysis_pb.GetAssistantAnalysisRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_analysis_pb.GetAssistantAnalysisResponse|null) => void
  ): UnaryResponse;
  updateAssistantAnalysis(
    requestMessage: assistant_analysis_pb.UpdateAssistantAnalysisRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_analysis_pb.GetAssistantAnalysisResponse|null) => void
  ): UnaryResponse;
  updateAssistantAnalysis(
    requestMessage: assistant_analysis_pb.UpdateAssistantAnalysisRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_analysis_pb.GetAssistantAnalysisResponse|null) => void
  ): UnaryResponse;
  createAssistantAnalysis(
    requestMessage: assistant_analysis_pb.CreateAssistantAnalysisRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_analysis_pb.GetAssistantAnalysisResponse|null) => void
  ): UnaryResponse;
  createAssistantAnalysis(
    requestMessage: assistant_analysis_pb.CreateAssistantAnalysisRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_analysis_pb.GetAssistantAnalysisResponse|null) => void
  ): UnaryResponse;
  deleteAssistantAnalysis(
    requestMessage: assistant_analysis_pb.DeleteAssistantAnalysisRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_analysis_pb.GetAssistantAnalysisResponse|null) => void
  ): UnaryResponse;
  deleteAssistantAnalysis(
    requestMessage: assistant_analysis_pb.DeleteAssistantAnalysisRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_analysis_pb.GetAssistantAnalysisResponse|null) => void
  ): UnaryResponse;
  getAllAssistantAnalysis(
    requestMessage: assistant_analysis_pb.GetAllAssistantAnalysisRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_analysis_pb.GetAllAssistantAnalysisResponse|null) => void
  ): UnaryResponse;
  getAllAssistantAnalysis(
    requestMessage: assistant_analysis_pb.GetAllAssistantAnalysisRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_analysis_pb.GetAllAssistantAnalysisResponse|null) => void
  ): UnaryResponse;
  createAssistantTool(
    requestMessage: assistant_tool_pb.CreateAssistantToolRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_tool_pb.GetAssistantToolResponse|null) => void
  ): UnaryResponse;
  createAssistantTool(
    requestMessage: assistant_tool_pb.CreateAssistantToolRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_tool_pb.GetAssistantToolResponse|null) => void
  ): UnaryResponse;
  getAssistantTool(
    requestMessage: assistant_tool_pb.GetAssistantToolRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_tool_pb.GetAssistantToolResponse|null) => void
  ): UnaryResponse;
  getAssistantTool(
    requestMessage: assistant_tool_pb.GetAssistantToolRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_tool_pb.GetAssistantToolResponse|null) => void
  ): UnaryResponse;
  getAllAssistantTool(
    requestMessage: assistant_tool_pb.GetAllAssistantToolRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_tool_pb.GetAllAssistantToolResponse|null) => void
  ): UnaryResponse;
  getAllAssistantTool(
    requestMessage: assistant_tool_pb.GetAllAssistantToolRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_tool_pb.GetAllAssistantToolResponse|null) => void
  ): UnaryResponse;
  deleteAssistantTool(
    requestMessage: assistant_tool_pb.DeleteAssistantToolRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_tool_pb.GetAssistantToolResponse|null) => void
  ): UnaryResponse;
  deleteAssistantTool(
    requestMessage: assistant_tool_pb.DeleteAssistantToolRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_tool_pb.GetAssistantToolResponse|null) => void
  ): UnaryResponse;
  updateAssistantTool(
    requestMessage: assistant_tool_pb.UpdateAssistantToolRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_tool_pb.GetAssistantToolResponse|null) => void
  ): UnaryResponse;
  updateAssistantTool(
    requestMessage: assistant_tool_pb.UpdateAssistantToolRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_tool_pb.GetAssistantToolResponse|null) => void
  ): UnaryResponse;
  createAssistantKnowledge(
    requestMessage: assistant_knowledge_pb.CreateAssistantKnowledgeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_knowledge_pb.GetAssistantKnowledgeResponse|null) => void
  ): UnaryResponse;
  createAssistantKnowledge(
    requestMessage: assistant_knowledge_pb.CreateAssistantKnowledgeRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_knowledge_pb.GetAssistantKnowledgeResponse|null) => void
  ): UnaryResponse;
  getAssistantKnowledge(
    requestMessage: assistant_knowledge_pb.GetAssistantKnowledgeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_knowledge_pb.GetAssistantKnowledgeResponse|null) => void
  ): UnaryResponse;
  getAssistantKnowledge(
    requestMessage: assistant_knowledge_pb.GetAssistantKnowledgeRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_knowledge_pb.GetAssistantKnowledgeResponse|null) => void
  ): UnaryResponse;
  getAllAssistantKnowledge(
    requestMessage: assistant_knowledge_pb.GetAllAssistantKnowledgeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_knowledge_pb.GetAllAssistantKnowledgeResponse|null) => void
  ): UnaryResponse;
  getAllAssistantKnowledge(
    requestMessage: assistant_knowledge_pb.GetAllAssistantKnowledgeRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_knowledge_pb.GetAllAssistantKnowledgeResponse|null) => void
  ): UnaryResponse;
  deleteAssistantKnowledge(
    requestMessage: assistant_knowledge_pb.DeleteAssistantKnowledgeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_knowledge_pb.GetAssistantKnowledgeResponse|null) => void
  ): UnaryResponse;
  deleteAssistantKnowledge(
    requestMessage: assistant_knowledge_pb.DeleteAssistantKnowledgeRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_knowledge_pb.GetAssistantKnowledgeResponse|null) => void
  ): UnaryResponse;
  updateAssistantKnowledge(
    requestMessage: assistant_knowledge_pb.UpdateAssistantKnowledgeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_knowledge_pb.GetAssistantKnowledgeResponse|null) => void
  ): UnaryResponse;
  updateAssistantKnowledge(
    requestMessage: assistant_knowledge_pb.UpdateAssistantKnowledgeRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_knowledge_pb.GetAssistantKnowledgeResponse|null) => void
  ): UnaryResponse;
}

