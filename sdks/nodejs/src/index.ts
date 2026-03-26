import { Any } from "google-protobuf/google/protobuf/any_pb";
import {
  StringToAny,
  AnyToString,
  FloatToAny,
  AnyToFloat,
  Int32ToAny,
  AnyToInt32,
  BoolToAny,
  AnyToBool,
  BytesToAny,
  JSONToAny,
  AnyToJSON,
  MapToObject,
} from "./utils/rapida_value";
export { RapidaSource } from "./utils/rapida_source";

export {
  Any,
  AnyToString,
  FloatToAny,
  AnyToFloat,
  Int32ToAny,
  AnyToInt32,
  BoolToAny,
  AnyToBool,
  BytesToAny,
  JSONToAny,
  AnyToJSON,
  MapToObject,
  StringToAny,
};

export { ToContentText } from "./utils/rapida_content";
export { ConnectionConfig } from "./connections/connection-config";
export * from "@/rapida/utils/rapida_value";
export * from "@/rapida/utils/rapida_source";

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

/* Client function exports */
export { IndexKnowledgeDocument } from "@/rapida/clients/document";
// NOTE: GetAllDeployment not available - marketplace-api proto definitions don't exist
// export { GetAllDeployment } from "@/rapida/clients/marketplace";
export { Invoke } from "@/rapida/clients/invoke";
export {
  AuthenticateUser,
  AuthorizeUser,
  RegisterUser,
  VerifyToken,
  ForgotPassword,
  CreatePassword,
  GetUser,
  UpdateUser,
  GetAllUser,
  Google,
  Linkedin,
  Github,
} from "@/rapida/clients/auth";
// NOTE: GetAllProvider, GetAllToolProvider not available - provider-api proto definitions don't exist
// export { GetAllProvider, GetAllToolProvider } from "@/rapida/clients/provider";
export {
  WithPlatform,
  WithAuthContext,
  getClientInfo,
  WithClientContext,
} from "@/rapida/clients/index";
export {
  GeneralConnect,
  GetConnectorFiles,
} from "@/rapida/clients/connect";
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
  GetAllAssistantConversation,
  GetAllAssistantConversationMessage,
  GetAllAssistantWebhook,
  CreateWebhook,
  UpdateWebhook,
  GetAssistantWebhook,
  DeleteAssistantWebhook,
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
} from "@/rapida/clients/assistant";

export {
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
} from "@/rapida/clients/deployment";
export { GetActivities, GetActivity } from "@/rapida/clients/activity";
export {
  GetAllEndpoint,
  UpdateEndpointVersion,
  GetAllEndpointProviderModel,
  GetEndpoint,
  CreateEndpointRetryConfiguration,
  GetEndpointLog,
} from "@/rapida/clients/endpoint";
export {
  CreateProviderKey,
  DeleteProviderKey,
  AllOrganizationCredential,
} from "@/rapida/clients/vault";
export {
  AssistantTalk,
  CreateMessageMetric,
  CreateConversationMetric,
} from "@/rapida/clients/talk";

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

export { CreatePhoneCall, CreateBulkPhoneCall } from "./clients/call";

/* ========================================================================== */
/* Proto Message Exports - Common Messages                                    */
/* ========================================================================== */

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
  SystemMessage,
  UserMessage,
  ToolMessage,
  AssistantConversationRecording,
  AssistantConversationTelephonyEvent,
} from "@/rapida/clients/protos/common_pb";

/* ========================================================================== */
/* Proto Message Exports - AgentKit                                           */
/* ========================================================================== */

export {
  TalkInput,
  TalkOutput,
} from "@/rapida/clients/protos/agentkit_pb";

/* ========================================================================== */
/* Proto Message Exports - Assistant API                                     */
/* ========================================================================== */

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
} from "@/rapida/clients/protos/assistant-api_pb";

/* ========================================================================== */
/* Proto Message Exports - Assistant Analysis                                */
/* ========================================================================== */

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

/* ========================================================================== */
/* Proto Message Exports - Assistant Deployment                              */
/* ========================================================================== */

export {
  DeploymentAudioProvider,
  AssistantWebpluginDeployment,
  AssistantPhoneDeployment,
  AssistantWhatsappDeployment,
  AssistantDebuggerDeployment,
  AssistantApiDeployment,
  GetAssistantDeploymentRequest,
  CreateAssistantDeploymentRequest,
  GetAssistantApiDeploymentResponse,
  GetAssistantDebuggerDeploymentResponse,
  GetAssistantPhoneDeploymentResponse,
  GetAssistantWebpluginDeploymentResponse,
  GetAssistantWhatsappDeploymentResponse,
} from "@/rapida/clients/protos/assistant-deployment_pb";

/* ========================================================================== */
/* Proto Message Exports - Assistant Knowledge                               */
/* ========================================================================== */

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

/* ========================================================================== */
/* Proto Message Exports - Assistant Provider                                */
/* ========================================================================== */

export {
  AssistantProviderModel,
  AssistantProviderAgentkit,
  AssistantProviderWebsocket,
} from "@/rapida/clients/protos/assistant-provider_pb";

/* ========================================================================== */
/* Proto Message Exports - Assistant Tool                                    */
/* ========================================================================== */

export {
  AssistantTool,
  CreateAssistantToolRequest,
  UpdateAssistantToolRequest,
  GetAssistantToolRequest,
  DeleteAssistantToolRequest,
  GetAssistantToolResponse,
  GetAllAssistantToolRequest,
  GetAllAssistantToolResponse,
  AssistantToolLog,
  GetAllAssistantToolLogRequest,
  GetAllAssistantToolLogResponse,
  GetAssistantToolLogRequest,
  GetAssistantToolLogResponse,
} from "@/rapida/clients/protos/assistant-tool_pb";

/* ========================================================================== */
/* Proto Message Exports - Assistant Webhook                                 */
/* ========================================================================== */

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

/* ========================================================================== */
/* Proto Message Exports - Audit Logging API                                 */
/* ========================================================================== */

export {
  AuditLog,
  GetAllAuditLogRequest,
  GetAllAuditLogResponse,
  GetAuditLogRequest,
  GetAuditLogResponse,
  CreateMetadataRequest,
  CreateMetadataResponse,
} from "@/rapida/clients/protos/audit-logging-api_pb";

/* ========================================================================== */
/* Proto Message Exports - Connect API                                       */
/* ========================================================================== */

export {
  GeneralConnectRequest,
  GeneralConnectResponse,
  GetConnectorFilesRequest,
  GetConnectorFilesResponse,
} from "@/rapida/clients/protos/connect-api_pb";

/* ========================================================================== */
/* Proto Message Exports - Document API                                      */
/* ========================================================================== */

export {
  IndexKnowledgeDocumentRequest,
  IndexKnowledgeDocumentResponse,
} from "@/rapida/clients/protos/document-api_pb";

/* ========================================================================== */
/* Proto Message Exports - Endpoint API                                      */
/* ========================================================================== */

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

/* ========================================================================== */
/* Proto Message Exports - Integration API                                   */
/* ========================================================================== */

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

/* ========================================================================== */
/* Proto Message Exports - Invoker API                                       */
/* ========================================================================== */

export {
  EndpointDefinition,
  InvokeRequest,
  InvokeResponse,
  UpdateRequest,
  UpdateResponse,
  ProbeRequest,
  ProbeResponse,
} from "@/rapida/clients/protos/invoker-api_pb";

/* ========================================================================== */
/* Proto Message Exports - Knowledge API                                     */
/* ========================================================================== */

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
  KnowledgeDocumentSegment,
  GetAllKnowledgeDocumentSegmentRequest,
  GetAllKnowledgeDocumentSegmentResponse,
  UpdateKnowledgeDetailRequest,
  UpdateKnowledgeDocumentSegmentRequest,
  DeleteKnowledgeDocumentSegmentRequest,
  KnowledgeLog,
  GetKnowledgeLogRequest,
  GetKnowledgeLogResponse,
  GetAllKnowledgeLogRequest,
  GetAllKnowledgeLogResponse,
} from "@/rapida/clients/protos/knowledge-api_pb";

/* ========================================================================== */
/* Proto Message Exports - Notification API                                  */
/* ========================================================================== */

export {
  NotificationSetting,
  NotificationSettingResponse,
  GetNotificationSettingRequest,
  UpdateNotificationSettingRequest,
} from "@/rapida/clients/protos/notification-api_pb";

/* ========================================================================== */
/* Proto Message Exports - Talk API                                          */
/* ========================================================================== */

export {
  CreateMessageMetricRequest,
  CreateMessageMetricResponse,
  CreateConversationMetricRequest,
  CreateConversationMetricResponse,
  CreatePhoneCallRequest,
  CreatePhoneCallResponse,
  CreateBulkPhoneCallRequest,
  CreateBulkPhoneCallResponse,
  AssistantTalkRequest,
  AssistantTalkResponse,
  ConversationMetric,
  ConversationMetadata,
  ConversationInitialization,
  ConversationDisconnection,
  ConversationUserMessage,
  ConversationAssistantMessage,
  ConversationToolCall,
  ConversationToolResult,
  ConversationDirective,
  ConversationInterruption,
  ConversationModeChange,
  ConversationError,
  PhoneIdentity,
  WebIdentity,
  AudioConfig,
  TextConfig,
  StreamConfig,
} from "@/rapida/clients/protos/talk-api_pb";

/* ========================================================================== */
/* Proto Message Exports - Vault API                                         */
/* ========================================================================== */

export {
  VaultCredential,
  CreateProviderCredentialRequest,
  DeleteCredentialRequest,
  GetAllOrganizationCredentialResponse,
  GetCredentialResponse,
  GetAllOrganizationCredentialRequest,
  GetCredentialRequest,
} from "@/rapida/clients/protos/vault-api_pb";

/* ========================================================================== */
/* Proto Message Exports - Web API                                           */
/* ========================================================================== */

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
  ChangePasswordRequest,
  ChangePasswordResponse,
} from "@/rapida/clients/protos/web-api_pb";

/* ========================================================================== */
/* Proto Message Exports - WebRTC                                            */
/* ========================================================================== */

export {
  ClientSignaling,
  ServerSignaling,
  ICECandidate,
  ICEServer,
  WebRTCConfig,
  WebRTCSDP,
  WebTalkRequest,
  WebTalkResponse,
} from "@/rapida/clients/protos/webrtc_pb";
