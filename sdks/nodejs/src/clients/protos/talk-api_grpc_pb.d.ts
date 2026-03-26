// GENERATED CODE -- DO NOT EDIT!

// package: talk_api
// file: talk-api.proto

import * as talk_api_pb from "./talk-api_pb";
import * as common_pb from "./common_pb";
import * as grpc from "grpc";

interface ITalkServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  assistantTalk: grpc.MethodDefinition<talk_api_pb.AssistantTalkRequest, talk_api_pb.AssistantTalkResponse>;
  getAllAssistantConversation: grpc.MethodDefinition<common_pb.GetAllAssistantConversationRequest, common_pb.GetAllAssistantConversationResponse>;
  getAllConversationMessage: grpc.MethodDefinition<common_pb.GetAllConversationMessageRequest, common_pb.GetAllConversationMessageResponse>;
  createMessageMetric: grpc.MethodDefinition<talk_api_pb.CreateMessageMetricRequest, talk_api_pb.CreateMessageMetricResponse>;
  createConversationMetric: grpc.MethodDefinition<talk_api_pb.CreateConversationMetricRequest, talk_api_pb.CreateConversationMetricResponse>;
  createPhoneCall: grpc.MethodDefinition<talk_api_pb.CreatePhoneCallRequest, talk_api_pb.CreatePhoneCallResponse>;
  createBulkPhoneCall: grpc.MethodDefinition<talk_api_pb.CreateBulkPhoneCallRequest, talk_api_pb.CreateBulkPhoneCallResponse>;
}

export const TalkServiceService: ITalkServiceService;

export interface ITalkServiceServer extends grpc.UntypedServiceImplementation {
  assistantTalk: grpc.handleBidiStreamingCall<talk_api_pb.AssistantTalkRequest, talk_api_pb.AssistantTalkResponse>;
  getAllAssistantConversation: grpc.handleUnaryCall<common_pb.GetAllAssistantConversationRequest, common_pb.GetAllAssistantConversationResponse>;
  getAllConversationMessage: grpc.handleUnaryCall<common_pb.GetAllConversationMessageRequest, common_pb.GetAllConversationMessageResponse>;
  createMessageMetric: grpc.handleUnaryCall<talk_api_pb.CreateMessageMetricRequest, talk_api_pb.CreateMessageMetricResponse>;
  createConversationMetric: grpc.handleUnaryCall<talk_api_pb.CreateConversationMetricRequest, talk_api_pb.CreateConversationMetricResponse>;
  createPhoneCall: grpc.handleUnaryCall<talk_api_pb.CreatePhoneCallRequest, talk_api_pb.CreatePhoneCallResponse>;
  createBulkPhoneCall: grpc.handleUnaryCall<talk_api_pb.CreateBulkPhoneCallRequest, talk_api_pb.CreateBulkPhoneCallResponse>;
}

export class TalkServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  assistantTalk(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<talk_api_pb.AssistantTalkRequest, talk_api_pb.AssistantTalkResponse>;
  assistantTalk(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<talk_api_pb.AssistantTalkRequest, talk_api_pb.AssistantTalkResponse>;
  getAllAssistantConversation(argument: common_pb.GetAllAssistantConversationRequest, callback: grpc.requestCallback<common_pb.GetAllAssistantConversationResponse>): grpc.ClientUnaryCall;
  getAllAssistantConversation(argument: common_pb.GetAllAssistantConversationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_pb.GetAllAssistantConversationResponse>): grpc.ClientUnaryCall;
  getAllAssistantConversation(argument: common_pb.GetAllAssistantConversationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_pb.GetAllAssistantConversationResponse>): grpc.ClientUnaryCall;
  getAllConversationMessage(argument: common_pb.GetAllConversationMessageRequest, callback: grpc.requestCallback<common_pb.GetAllConversationMessageResponse>): grpc.ClientUnaryCall;
  getAllConversationMessage(argument: common_pb.GetAllConversationMessageRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_pb.GetAllConversationMessageResponse>): grpc.ClientUnaryCall;
  getAllConversationMessage(argument: common_pb.GetAllConversationMessageRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_pb.GetAllConversationMessageResponse>): grpc.ClientUnaryCall;
  createMessageMetric(argument: talk_api_pb.CreateMessageMetricRequest, callback: grpc.requestCallback<talk_api_pb.CreateMessageMetricResponse>): grpc.ClientUnaryCall;
  createMessageMetric(argument: talk_api_pb.CreateMessageMetricRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<talk_api_pb.CreateMessageMetricResponse>): grpc.ClientUnaryCall;
  createMessageMetric(argument: talk_api_pb.CreateMessageMetricRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<talk_api_pb.CreateMessageMetricResponse>): grpc.ClientUnaryCall;
  createConversationMetric(argument: talk_api_pb.CreateConversationMetricRequest, callback: grpc.requestCallback<talk_api_pb.CreateConversationMetricResponse>): grpc.ClientUnaryCall;
  createConversationMetric(argument: talk_api_pb.CreateConversationMetricRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<talk_api_pb.CreateConversationMetricResponse>): grpc.ClientUnaryCall;
  createConversationMetric(argument: talk_api_pb.CreateConversationMetricRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<talk_api_pb.CreateConversationMetricResponse>): grpc.ClientUnaryCall;
  createPhoneCall(argument: talk_api_pb.CreatePhoneCallRequest, callback: grpc.requestCallback<talk_api_pb.CreatePhoneCallResponse>): grpc.ClientUnaryCall;
  createPhoneCall(argument: talk_api_pb.CreatePhoneCallRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<talk_api_pb.CreatePhoneCallResponse>): grpc.ClientUnaryCall;
  createPhoneCall(argument: talk_api_pb.CreatePhoneCallRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<talk_api_pb.CreatePhoneCallResponse>): grpc.ClientUnaryCall;
  createBulkPhoneCall(argument: talk_api_pb.CreateBulkPhoneCallRequest, callback: grpc.requestCallback<talk_api_pb.CreateBulkPhoneCallResponse>): grpc.ClientUnaryCall;
  createBulkPhoneCall(argument: talk_api_pb.CreateBulkPhoneCallRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<talk_api_pb.CreateBulkPhoneCallResponse>): grpc.ClientUnaryCall;
  createBulkPhoneCall(argument: talk_api_pb.CreateBulkPhoneCallRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<talk_api_pb.CreateBulkPhoneCallResponse>): grpc.ClientUnaryCall;
}
