// package: talk_api
// file: talk-api.proto

import * as talk_api_pb from "./talk-api_pb";
import * as common_pb from "./common_pb";
import {grpc} from "@improbable-eng/grpc-web";

type TalkServiceAssistantTalk = {
  readonly methodName: string;
  readonly service: typeof TalkService;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof talk_api_pb.AssistantTalkRequest;
  readonly responseType: typeof talk_api_pb.AssistantTalkResponse;
};

type TalkServiceGetAllAssistantConversation = {
  readonly methodName: string;
  readonly service: typeof TalkService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof common_pb.GetAllAssistantConversationRequest;
  readonly responseType: typeof common_pb.GetAllAssistantConversationResponse;
};

type TalkServiceGetAllConversationMessage = {
  readonly methodName: string;
  readonly service: typeof TalkService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof common_pb.GetAllConversationMessageRequest;
  readonly responseType: typeof common_pb.GetAllConversationMessageResponse;
};

type TalkServiceCreateMessageMetric = {
  readonly methodName: string;
  readonly service: typeof TalkService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof talk_api_pb.CreateMessageMetricRequest;
  readonly responseType: typeof talk_api_pb.CreateMessageMetricResponse;
};

type TalkServiceCreateConversationMetric = {
  readonly methodName: string;
  readonly service: typeof TalkService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof talk_api_pb.CreateConversationMetricRequest;
  readonly responseType: typeof talk_api_pb.CreateConversationMetricResponse;
};

type TalkServiceCreatePhoneCall = {
  readonly methodName: string;
  readonly service: typeof TalkService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof talk_api_pb.CreatePhoneCallRequest;
  readonly responseType: typeof talk_api_pb.CreatePhoneCallResponse;
};

type TalkServiceCreateBulkPhoneCall = {
  readonly methodName: string;
  readonly service: typeof TalkService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof talk_api_pb.CreateBulkPhoneCallRequest;
  readonly responseType: typeof talk_api_pb.CreateBulkPhoneCallResponse;
};

export class TalkService {
  static readonly serviceName: string;
  static readonly AssistantTalk: TalkServiceAssistantTalk;
  static readonly GetAllAssistantConversation: TalkServiceGetAllAssistantConversation;
  static readonly GetAllConversationMessage: TalkServiceGetAllConversationMessage;
  static readonly CreateMessageMetric: TalkServiceCreateMessageMetric;
  static readonly CreateConversationMetric: TalkServiceCreateConversationMetric;
  static readonly CreatePhoneCall: TalkServiceCreatePhoneCall;
  static readonly CreateBulkPhoneCall: TalkServiceCreateBulkPhoneCall;
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

export class TalkServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  assistantTalk(metadata?: grpc.Metadata): BidirectionalStream<talk_api_pb.AssistantTalkRequest, talk_api_pb.AssistantTalkResponse>;
  getAllAssistantConversation(
    requestMessage: common_pb.GetAllAssistantConversationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: common_pb.GetAllAssistantConversationResponse|null) => void
  ): UnaryResponse;
  getAllAssistantConversation(
    requestMessage: common_pb.GetAllAssistantConversationRequest,
    callback: (error: ServiceError|null, responseMessage: common_pb.GetAllAssistantConversationResponse|null) => void
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
  createMessageMetric(
    requestMessage: talk_api_pb.CreateMessageMetricRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: talk_api_pb.CreateMessageMetricResponse|null) => void
  ): UnaryResponse;
  createMessageMetric(
    requestMessage: talk_api_pb.CreateMessageMetricRequest,
    callback: (error: ServiceError|null, responseMessage: talk_api_pb.CreateMessageMetricResponse|null) => void
  ): UnaryResponse;
  createConversationMetric(
    requestMessage: talk_api_pb.CreateConversationMetricRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: talk_api_pb.CreateConversationMetricResponse|null) => void
  ): UnaryResponse;
  createConversationMetric(
    requestMessage: talk_api_pb.CreateConversationMetricRequest,
    callback: (error: ServiceError|null, responseMessage: talk_api_pb.CreateConversationMetricResponse|null) => void
  ): UnaryResponse;
  createPhoneCall(
    requestMessage: talk_api_pb.CreatePhoneCallRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: talk_api_pb.CreatePhoneCallResponse|null) => void
  ): UnaryResponse;
  createPhoneCall(
    requestMessage: talk_api_pb.CreatePhoneCallRequest,
    callback: (error: ServiceError|null, responseMessage: talk_api_pb.CreatePhoneCallResponse|null) => void
  ): UnaryResponse;
  createBulkPhoneCall(
    requestMessage: talk_api_pb.CreateBulkPhoneCallRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: talk_api_pb.CreateBulkPhoneCallResponse|null) => void
  ): UnaryResponse;
  createBulkPhoneCall(
    requestMessage: talk_api_pb.CreateBulkPhoneCallRequest,
    callback: (error: ServiceError|null, responseMessage: talk_api_pb.CreateBulkPhoneCallResponse|null) => void
  ): UnaryResponse;
}

