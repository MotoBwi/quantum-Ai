// package: notification_api
// file: notification-api.proto

import * as notification_api_pb from "./notification-api_pb";
import {grpc} from "@improbable-eng/grpc-web";

type NotificationServiceUpdateNotificationSetting = {
  readonly methodName: string;
  readonly service: typeof NotificationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof notification_api_pb.UpdateNotificationSettingRequest;
  readonly responseType: typeof notification_api_pb.NotificationSettingResponse;
};

type NotificationServiceGetNotificationSettting = {
  readonly methodName: string;
  readonly service: typeof NotificationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof notification_api_pb.GetNotificationSettingRequest;
  readonly responseType: typeof notification_api_pb.NotificationSettingResponse;
};

export class NotificationService {
  static readonly serviceName: string;
  static readonly UpdateNotificationSetting: NotificationServiceUpdateNotificationSetting;
  static readonly GetNotificationSettting: NotificationServiceGetNotificationSettting;
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

export class NotificationServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  updateNotificationSetting(
    requestMessage: notification_api_pb.UpdateNotificationSettingRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: notification_api_pb.NotificationSettingResponse|null) => void
  ): UnaryResponse;
  updateNotificationSetting(
    requestMessage: notification_api_pb.UpdateNotificationSettingRequest,
    callback: (error: ServiceError|null, responseMessage: notification_api_pb.NotificationSettingResponse|null) => void
  ): UnaryResponse;
  getNotificationSettting(
    requestMessage: notification_api_pb.GetNotificationSettingRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: notification_api_pb.NotificationSettingResponse|null) => void
  ): UnaryResponse;
  getNotificationSettting(
    requestMessage: notification_api_pb.GetNotificationSettingRequest,
    callback: (error: ServiceError|null, responseMessage: notification_api_pb.NotificationSettingResponse|null) => void
  ): UnaryResponse;
}

