// GENERATED CODE -- DO NOT EDIT!

// package: notification_api
// file: notification-api.proto

import * as notification_api_pb from "./notification-api_pb";
import * as grpc from "grpc";

interface INotificationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  updateNotificationSetting: grpc.MethodDefinition<notification_api_pb.UpdateNotificationSettingRequest, notification_api_pb.NotificationSettingResponse>;
  getNotificationSettting: grpc.MethodDefinition<notification_api_pb.GetNotificationSettingRequest, notification_api_pb.NotificationSettingResponse>;
}

export const NotificationServiceService: INotificationServiceService;

export interface INotificationServiceServer extends grpc.UntypedServiceImplementation {
  updateNotificationSetting: grpc.handleUnaryCall<notification_api_pb.UpdateNotificationSettingRequest, notification_api_pb.NotificationSettingResponse>;
  getNotificationSettting: grpc.handleUnaryCall<notification_api_pb.GetNotificationSettingRequest, notification_api_pb.NotificationSettingResponse>;
}

export class NotificationServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  updateNotificationSetting(argument: notification_api_pb.UpdateNotificationSettingRequest, callback: grpc.requestCallback<notification_api_pb.NotificationSettingResponse>): grpc.ClientUnaryCall;
  updateNotificationSetting(argument: notification_api_pb.UpdateNotificationSettingRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<notification_api_pb.NotificationSettingResponse>): grpc.ClientUnaryCall;
  updateNotificationSetting(argument: notification_api_pb.UpdateNotificationSettingRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<notification_api_pb.NotificationSettingResponse>): grpc.ClientUnaryCall;
  getNotificationSettting(argument: notification_api_pb.GetNotificationSettingRequest, callback: grpc.requestCallback<notification_api_pb.NotificationSettingResponse>): grpc.ClientUnaryCall;
  getNotificationSettting(argument: notification_api_pb.GetNotificationSettingRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<notification_api_pb.NotificationSettingResponse>): grpc.ClientUnaryCall;
  getNotificationSettting(argument: notification_api_pb.GetNotificationSettingRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<notification_api_pb.NotificationSettingResponse>): grpc.ClientUnaryCall;
}
