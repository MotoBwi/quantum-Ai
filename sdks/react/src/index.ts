import { TelemetryEvent } from './clients/protos/assistant-api_pb';
/*
 *  Copyright (c) 2024. Rapida
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 *
 *  Author: Prashant <prashant@rapida.ai>
 *
 */
export { VoiceAgent } from "@/rapida/agents/voice-agent";
export {
  WebRTCGrpcTransport,
  supportsWebRTCGrpcTransport,
  type WebRTCGrpcTransportConfig,
} from "@/rapida/audio/webrtc-grpc-transport";
export {
  isIosDevice,
  isAndroidDevice,
  isWindowsDevice,
  hasKnownAudioIssues,
  getRecommendedAudioSettings,
} from "@/rapida/audio/compatibility";
export {
  isWindows,
  isLinux,
  isSinkIdSupported,
  hasFullWebRTCAudioSupport,
} from "@/rapida/utils";
export { useMessageFeedback } from "@/rapida/hooks/use-message-feedback";
export { useConversationFeedback } from "@/rapida/hooks/use-conversation-feedback";
export { useConnectAgent } from "@/rapida/hooks/use-connect-agent";
export { useInputModeToggleAgent } from "@/rapida/hooks/use-input-mode-toggle-agent";
export { useSelectInputDeviceAgent } from "@/rapida/hooks/use-select-input-device-agent";
export { useMuteAgent } from "@/rapida/hooks/use-mute-agent";
export { ConnectionState } from "@/rapida/types/connection-state";
export { Channel } from "@/rapida/types/channel";
export { MediaDeviceFailure } from "@/rapida/types/device-failure";
export {
  InputOptions,
  OutputOptions,
  AgentConfig,
  UserIdentifier,
} from "@/rapida/types/agent-config";
export { AgentCallback } from "@/rapida/types/agent-callback";
export { Message, MessageRole, MessageStatus } from "@/rapida/types/message";
export { Feedback } from "@/rapida/types/feedback";
export {
  useMultiband3DSpeakerTrackVolume,
  useMultibandMicrophoneTrackVolume,
} from "@/rapida/hooks/use-multiband-track-volume";
export { ConnectionConfig } from "@/rapida/types/connection-config";
export * from "@/rapida/utils/rapida_value";
export * from "@/rapida/utils/rapida_source";
export * from "@/rapida/types/agent-deployment";
export { useAgentMessages } from "@/rapida/hooks/use-agent-message";
export {
  HEADER_ENVIRONMENT_KEY,
  HEADER_SOURCE_KEY,
  HEADER_REGION_KEY,
  HEADER_API_KEY,
  HEADER_AUTH_ID,
  HEADER_PROJECT_ID,
  HEADER_USER_AGENT,
  HEADER_LANGUAGE,
  HEADER_PLATFORM,
  HEADER_SCREEN_WIDTH,
  HEADER_SCREEN_HEIGHT,
  HEADER_WINDOW_WIDTH,
  HEADER_WINDOW_HEIGHT,
  HEADER_TIMEZONE,
  HEADER_COLOR_DEPTH,
  HEADER_DEVICE_MEMORY,
  HEADER_HARDWARE_CONCURRENCY,
  HEADER_CONNECTION_TYPE,
  HEADER_CONNECTION_EFFECTIVE_TYPE,
  HEADER_COOKIES_ENABLED,
  HEADER_DO_NOT_TRACK,
  HEADER_REFERRER,
  HEADER_REMOTE_URL,
  HEADER_LATITUDE,
  HEADER_LONGITUDE,
} from "@/rapida/utils/rapida_header";
export { IndexKnowledgeDocument } from "@/rapida/clients/document";
export { Invoke } from "@/rapida/clients/invoke";
export {
  AuthenticateUser,
  AuthorizeUser,
  RegisterUser,
  VerifyToken,
  ForgotPassword,
  CreatePassword,
  ChangePassword,
  GetUser,
  UpdateUser,
  GetAllUser,
  Google,
  Linkedin,
  Github,
} from "@/rapida/clients/auth";
export {
  WithPlatform,
  WithAuthContext,
  getClientInfo,
  WithClientContext,
} from "@/rapida/clients/index";
export { TelemetryEvent, TelemetryMetric, TelemetryRecord } from "@/rapida/clients/protos/assistant-api_pb";
export { GeneralConnect, GetConnectorFiles } from "@/rapida/clients/connect";
export {
  CreateOrganization,
  UpdateOrganization,
  GetOrganization,
} from "@/rapida/clients/organization";
export {
  GetAllAssistant,
  UpdateAssistantVersion,
  GetAssistant,
  CreateAssistant,
  CreateAssistantTag,
  UpdateAssistantDetail,
  GetAssistantMessages,
  GetMessages,
  GetAllAssistantConversationMessage,
  CreateAssistantDebuggerDeployment,
  GetAssistantDebuggerDeployment,
  CreateAssistantApiDeployment,
  GetAssistantApiDeployment,
  CreateAssistantWebpluginDeployment,
  GetAssistantWebpluginDeployment,
  CreateAssistantPhoneDeployment,
  GetAssistantPhoneDeployment,
  CreateAssistantWhatsappDeployment,
  GetAssistantWhatsappDeployment,
  GetAllAssistantWebhook,
  CreateWebhook,
  UpdateWebhook,
  GetAssistantWebhook,
  DeleteAssistantWebhook,
  GetAllAssistantTelemetryProvider,
  CreateAssistantTelemetryProvider,
  UpdateAssistantTelemetryProvider,
  GetAssistantTelemetryProvider,
  DeleteAssistantTelemetryProvider,
  GetAssistantConversation,
  DeleteAssistant,
  GetAllAssistantAnalysis,
  CreateAnalysis,
  UpdateAnalysis,
  GetAssistantAnalysis,
  DeleteAssistantAnalysis,
  GetAllWebhookLog,
  GetWebhookLog,
  GetAllAssistantTool,
  CreateAssistantTool,
  UpdateAssistantTool,
  GetAssistantTool,
  DeleteAssistantTool,
  GetAllAssistantKnowledge,
  CreateAssistantKnowledge,
  UpdateAssistantKnowledge,
  GetAssistantKnowledge,
  DeleteAssistantKnowledge,
  GetAssistantToolLog,
  GetAllAssistantToolLog,
  CreateAssistantProvider,
  GetAllAssistantProvider,
  GetAllAssistantConversation,
} from "@/rapida/clients/assistant";
export { GetActivities, GetActivity } from "@/rapida/clients/activity";
export {
  GetAllEndpoint,
  UpdateEndpointVersion,
  GetAllEndpointProviderModel,
  GetEndpoint,
  CreateEndpointProviderModel,
  CreateEndpoint,
  CreateEndpointTag,
  UpdateEndpointDetail,
  CreateEndpointRetryConfiguration,
  CreateEndpointCacheConfiguration,
  GetAllEndpointLog,
  GetEndpointLog,
} from "@/rapida/clients/endpoint";
export {
  CreateProviderKey,
  DeleteProviderKey,
  GetAllOrganizationCredential,
} from "@/rapida/clients/vault";
export {
  AssistantTalk,
  CreateMessageMetric,
  CreateConversationMetric,
} from "@/rapida/clients/talk";
export { WebTalk } from '@/rapida/clients/webrtc';
export {
  CreateKnowledge,
  GetKnowledgeBase,
  GetAllKnowledgeBases,
  CreateKnowledgeDocument,
  GetAllKnowledgeDocument,
  GetAllKnowledgeDocumentSegment,
  CreateKnowledgeTag,
  UpdateKnowledgeDetail,
  DeleteKnowledgeDocumentSegment,
  UpdateKnowledgeDocumentSegment,
  GetKnowledgeLog,
  GetAllKnowledgeLog,
} from "@/rapida/clients/knowledge";
export {
  AddUsersToProject,
  CreateProject,
  UpdateProject,
  GetAllProject,
  GetProject,
  DeleteProject,
  GetAllProjectCredential,
  CreateProjectCredential,
} from "@/rapida/clients/project";

export {
  EndpointService,
  EndpointServiceClient,
} from "@/rapida/clients/protos/endpoint-api_pb_service";
export {
  AssistantDeploymentService,
  AssistantDeploymentServiceClient,
} from "@/rapida/clients/protos/assistant-deployment_pb_service";
export {
  ConnectService,
  ConnectServiceClient,
} from "@/rapida/clients/protos/connect-api_pb_service";
export {
  VaultService,
  VaultServiceClient,
} from "@/rapida/clients/protos/vault-api_pb_service";
export {
  Deployment,
  DeploymentClient,
} from "@/rapida/clients/protos/invoker-api_pb_service";
export {
  AssistantKnowledge,
  CreateAssistantKnowledgeRequest,
  UpdateAssistantKnowledgeRequest,
  GetAssistantKnowledgeRequest,
  DeleteAssistantKnowledgeRequest,
  GetAssistantKnowledgeResponse,
  GetAllAssistantKnowledgeRequest,
  GetAllAssistantKnowledgeResponse,
} from "@/rapida/clients/protos/assistant-knowledge_pb";
export {
  UnifiedProviderService
} from "@/rapida/clients/protos/integration-api_pb_service";
export {
  AuditLog,
  GetAllAuditLogRequest,
  GetAllAuditLogResponse,
  GetAuditLogRequest,
  GetAuditLogResponse,
  CreateMetadataRequest,
  CreateMetadataResponse,
} from "@/rapida/clients/protos/audit-logging-api_pb";
export {
  KnowledgeService,
  KnowledgeServiceClient,
} from "@/rapida/clients/protos/knowledge-api_pb_service";
export {
  VaultCredential,
  CreateProviderCredentialRequest,
  GetAllOrganizationCredentialResponse,
  GetAllOrganizationCredentialRequest,
  GetCredentialRequest,
  GetCredentialResponse,
} from "@/rapida/clients/protos/vault-api_pb";
export {
  AssistantTalkRequest,
  AssistantTalkResponse,
  CreateMessageMetricRequest,
  CreateMessageMetricResponse,
  CreateConversationMetricRequest,
  CreateConversationMetricResponse,
} from "@/rapida/clients/protos/talk-api_pb";
export {
  WebTalkRequest,
  WebTalkResponse,
} from "@/rapida/clients/protos/webrtc_pb";
export {
  AssistantAnalysis,
  CreateAssistantAnalysisRequest,
  UpdateAssistantAnalysisRequest,
  GetAssistantAnalysisRequest,
  DeleteAssistantAnalysisRequest,
  GetAssistantAnalysisResponse,
  GetAllAssistantAnalysisRequest,
  GetAllAssistantAnalysisResponse,
} from "@/rapida/clients/protos/assistant-analysis_pb";

export {
  EndpointDefinition,
  InvokeRequest,
  InvokeResponse,
  UpdateRequest,
  UpdateResponse,
  ProbeRequest,
  ProbeResponse,
} from "@/rapida/clients/protos/invoker-api_pb";
export {
  AuthenticateRequest,
  RegisterUserRequest,
  Token,
  OrganizationRole,
  ProjectRole,
  FeaturePermission,
  Authentication,
  ScopedAuthentication,
  AuthenticateResponse,
  ForgotPasswordRequest,
  ForgotPasswordResponse,
  CreatePasswordRequest,
  CreatePasswordResponse,
  ChangePasswordRequest,
  ChangePasswordResponse,
  VerifyTokenRequest,
  VerifyTokenResponse,
  AuthorizeRequest,
  ScopeAuthorizeRequest,
  ScopedAuthenticationResponse,
  GetUserRequest,
  GetUserResponse,
  UpdateUserRequest,
  UpdateUserResponse,
  SocialAuthenticationRequest,
  GetAllUserRequest,
  GetAllUserResponse,
  CreateOrganizationRequest,
  UpdateOrganizationRequest,
  GetOrganizationRequest,
  GetOrganizationResponse,
  CreateOrganizationResponse,
  UpdateOrganizationResponse,
  UpdateBillingInformationRequest,
  Project,
  CreateProjectRequest,
  CreateProjectResponse,
  UpdateProjectRequest,
  UpdateProjectResponse,
  GetProjectRequest,
  GetProjectResponse,
  GetAllProjectRequest,
  GetAllProjectResponse,
  AddUsersToProjectRequest,
  ArchiveProjectRequest,
  ArchiveProjectResponse,
  AddUsersToProjectResponse,
  ProjectCredential,
  CreateProjectCredentialRequest,
  GetAllProjectCredentialRequest,
  CreateProjectCredentialResponse,
  GetAllProjectCredentialResponse,
} from "@/rapida/clients/protos/web-api_pb";
export {
  FieldSelector,
  Criteria,
  Error,
  Paginate,
  Paginated,
  Ordering,
  User,
  BaseResponse,
  Metadata,
  Argument,
  Variable,
  Tag,
  Organization,
  Metric,
  Message as ProtoMessage,
  ToolCall,
  FunctionCall,
  Knowledge,
  TextPrompt,
  TextChatCompletePrompt,
  AssistantConversationMessage,
  AssistantConversationContext,
  AssistantConversation,
  GetAllAssistantConversationRequest,
  GetAllAssistantConversationResponse,
  GetAllConversationMessageRequest,
  GetAllConversationMessageResponse,
  AssistantConversationRecording,
  AssistantDefinition,
  AssistantConversationTelephonyEvent,
} from "@/rapida/clients/protos/common_pb";
export {
  AssistantService,
  AssistantServiceClient,
} from "@/rapida/clients/protos/assistant-api_pb_service";
export {
  TalkService,
  TalkServiceClient,
} from "@/rapida/clients/protos/talk-api_pb_service";
export {
  AssistantWebhook,
  AssistantWebhookLog,
  CreateAssistantWebhookRequest,
  UpdateAssistantWebhookRequest,
  GetAssistantWebhookRequest,
  DeleteAssistantWebhookRequest,
  GetAssistantWebhookResponse,
  GetAllAssistantWebhookRequest,
  GetAllAssistantWebhookResponse,
  GetAllAssistantWebhookLogRequest,
  GetAssistantWebhookLogRequest,
  GetAssistantWebhookLogResponse,
  GetAllAssistantWebhookLogResponse,
} from "@/rapida/clients/protos/assistant-webhook_pb";
export {
  GeneralConnectRequest,
  GeneralConnectResponse,
  GetConnectorFilesRequest,
  GetConnectorFilesResponse,
} from "@/rapida/clients/protos/connect-api_pb";
export {
  DocumentService,
  DocumentServiceClient,
} from "@/rapida/clients/protos/document-api_pb_service";
export {
  IndexKnowledgeDocumentRequest,
  IndexKnowledgeDocumentResponse,
} from "@/rapida/clients/protos/document-api_pb";
export {
  EndpointAttribute,
  EndpointProviderModelAttribute,
  CreateEndpointRequest,
  CreateEndpointResponse,
  EndpointProviderModel,
  AggregatedEndpointAnalytics,
  Endpoint,
  CreateEndpointProviderModelRequest,
  CreateEndpointProviderModelResponse,
  GetEndpointRequest,
  GetEndpointResponse,
  GetAllEndpointRequest,
  GetAllEndpointResponse,
  GetAllEndpointProviderModelRequest,
  GetAllEndpointProviderModelResponse,
  UpdateEndpointVersionRequest,
  UpdateEndpointVersionResponse,
  EndpointRetryConfiguration,
  EndpointCacheConfiguration,
  CreateEndpointRetryConfigurationRequest,
  CreateEndpointRetryConfigurationResponse,
  CreateEndpointCacheConfigurationRequest,
  CreateEndpointCacheConfigurationResponse,
  CreateEndpointTagRequest,
  ForkEndpointRequest,
  UpdateEndpointDetailRequest,
  EndpointLog,
  GetAllEndpointLogRequest,
  GetAllEndpointLogResponse,
  GetEndpointLogRequest,
  GetEndpointLogResponse,
} from "@/rapida/clients/protos/endpoint-api_pb";
export {
  AssistantTool,
  AssistantToolLog,
  CreateAssistantToolRequest,
  UpdateAssistantToolRequest,
  GetAssistantToolRequest,
  DeleteAssistantToolRequest,
  GetAssistantToolResponse,
  GetAllAssistantToolRequest,
  GetAllAssistantToolResponse,
  GetAssistantToolLogResponse,
  GetAllAssistantToolLogRequest,
  GetAllAssistantToolLogResponse,
  GetAssistantToolLogRequest,
} from "@/rapida/clients/protos/assistant-tool_pb";
export {
  Credential,
  ToolDefinition,
  FunctionDefinition,
  FunctionParameter,
  FunctionParameterProperty,
  Embedding,
  EmbeddingRequest,
  EmbeddingResponse,
  Reranking,
  RerankingRequest,
  RerankingResponse,
  ChatResponse,
  ChatRequest,
  VerifyCredentialRequest,
  VerifyCredentialResponse,
  Moderation,
  GetModerationRequest,
  GetModerationResponse,
} from "@/rapida/clients/protos/integration-api_pb";
export {
  DeploymentAudioProvider,
  AssistantWebpluginDeployment,
  AssistantPhoneDeployment,
  AssistantWhatsappDeployment,
  AssistantDebuggerDeployment,
  AssistantApiDeployment,
  CreateAssistantDeploymentRequest,
  GetAssistantApiDeploymentResponse,
  GetAssistantPhoneDeploymentResponse,
  GetAssistantWhatsappDeploymentResponse,
  GetAssistantDebuggerDeploymentResponse,
  GetAssistantWebpluginDeploymentResponse,
  GetAssistantDeploymentRequest,
} from "@/rapida/clients/protos/assistant-deployment_pb";
export {
  AuditLoggingService,
  AuditLoggingServiceClient,
} from "@/rapida/clients/protos/audit-logging-api_pb_service";
export {
  CreateKnowledgeRequest,
  CreateKnowledgeResponse,
  GetAllKnowledgeRequest,
  GetAllKnowledgeResponse,
  GetKnowledgeRequest,
  GetKnowledgeResponse,
  CreateKnowledgeTagRequest,
  KnowledgeDocument,
  GetAllKnowledgeDocumentRequest,
  GetAllKnowledgeDocumentResponse,
  CreateKnowledgeDocumentRequest,
  CreateKnowledgeDocumentResponse,
  DocumentContent,
  KnowledgeDocumentSegment,
  GetAllKnowledgeDocumentSegmentRequest,
  GetAllKnowledgeDocumentSegmentResponse,
  UpdateKnowledgeDetailRequest,
  UpdateKnowledgeDocumentSegmentRequest,
  DeleteKnowledgeDocumentSegmentRequest,
  KnowledgeLog,
  GetKnowledgeLogRequest,
  GetAllKnowledgeLogRequest,
  GetKnowledgeLogResponse,
  GetAllKnowledgeLogResponse,
} from "@/rapida/clients/protos/knowledge-api_pb";
export {
  Assistant,
  CreateAssistantRequest,
  CreateAssistantTagRequest,
  GetAssistantRequest,
  DeleteAssistantRequest,
  GetAssistantResponse,
  GetAllAssistantRequest,
  GetAllAssistantResponse,
  GetAllAssistantMessageRequest,
  GetAllAssistantMessageResponse,
  GetAllMessageRequest,
  GetAllMessageResponse,
  UpdateAssistantDetailRequest,
  GetAssistantConversationRequest,
  GetAssistantConversationResponse,
  AssistantTelemetryProvider,
  GetAssistantTelemetryProviderRequest,
  GetAssistantTelemetryProviderResponse,
  GetAllAssistantTelemetryProviderRequest,
  GetAllAssistantTelemetryProviderResponse,
  CreateAssistantTelemetryProviderRequest,
  UpdateAssistantTelemetryProviderRequest,
  DeleteAssistantTelemetryProviderRequest,
} from "@/rapida/clients/protos/assistant-api_pb";
export {
  AuthenticationService,
  OrganizationService,
  ProjectService,
  AuthenticationServiceClient,
  OrganizationServiceClient,
  ProjectServiceClient,
} from "@/rapida/clients/protos/web-api_pb_service";
export { CreatePhoneCall, CreateBulkPhoneCall } from "./clients/call";
export {
  CreateBulkPhoneCallRequest,
  CreateBulkPhoneCallResponse,
  CreatePhoneCallRequest,
  CreatePhoneCallResponse,
} from "@/rapida/clients/protos/talk-api_pb";
export {
  ServiceError,
  Status,
  UnaryResponse,
  ResponseStream,
  RequestStream,
  BidirectionalStream,
} from "@/rapida/clients/types";

// component export
export { DeviceSelectorComponent } from "@/rapida/components/device-selector";
export { MultibandAudioVisualizerComponent } from "@/rapida/components/visualization/multiband-audio-visualizer";

// event
export { agentEventSelector } from "@/rapida/hooks/observables/voice-agent";
export { AgentEvent } from "./types/agent-event";
export {
  GetAllAssistantTelemetryRequest,
  GetAllAssistantTelemetryResponse,
} from "@/rapida/clients/protos/assistant-api_pb";

export {
  GetNotificationSettingRequest,
  UpdateNotificationSettingRequest,
  NotificationSettingResponse,
  NotificationSetting,
} from "@/rapida/clients/protos/notification-api_pb";

export { GetAllAssistantTelemetry } from "./clients/telemetry";
export {
  AssistantProviderModel,
  AssistantProviderAgentkit,
  AssistantProviderWebsocket,
  CreateAssistantProviderRequest,
  GetAssistantProviderResponse,
  GetAllAssistantProviderRequest,
  UpdateAssistantVersionRequest,
  GetAllAssistantProviderResponse,
} from "@/rapida/clients/protos/assistant-provider_pb";
export {
  GetNotificationSetting,
  UpdateNotificationSetting,
} from "./clients/notification";


export {
  ConversationConfiguration,
  ConversationInterruption,
  ConversationAssistantMessage,
  ConversationUserMessage,
  ConversationToolCall,
  ConversationToolResult,
  ConversationDirective,
  ConversationMetric,
  ConversationEvent,
  ConversationError,
} from "@/rapida/clients/protos/talk-api_pb";
