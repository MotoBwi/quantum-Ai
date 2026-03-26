// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var notification$api_pb = require('./notification-api_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var common_pb = require('./common_pb.js');

function serialize_notification_api_GetNotificationSettingRequest(arg) {
  if (!(arg instanceof notification$api_pb.GetNotificationSettingRequest)) {
    throw new Error('Expected argument of type notification_api.GetNotificationSettingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_notification_api_GetNotificationSettingRequest(buffer_arg) {
  return notification$api_pb.GetNotificationSettingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_notification_api_NotificationSettingResponse(arg) {
  if (!(arg instanceof notification$api_pb.NotificationSettingResponse)) {
    throw new Error('Expected argument of type notification_api.NotificationSettingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_notification_api_NotificationSettingResponse(buffer_arg) {
  return notification$api_pb.NotificationSettingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_notification_api_UpdateNotificationSettingRequest(arg) {
  if (!(arg instanceof notification$api_pb.UpdateNotificationSettingRequest)) {
    throw new Error('Expected argument of type notification_api.UpdateNotificationSettingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_notification_api_UpdateNotificationSettingRequest(buffer_arg) {
  return notification$api_pb.UpdateNotificationSettingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var NotificationServiceService = exports.NotificationServiceService = {
  updateNotificationSetting: {
    path: '/notification_api.NotificationService/UpdateNotificationSetting',
    requestStream: false,
    responseStream: false,
    requestType: notification$api_pb.UpdateNotificationSettingRequest,
    responseType: notification$api_pb.NotificationSettingResponse,
    requestSerialize: serialize_notification_api_UpdateNotificationSettingRequest,
    requestDeserialize: deserialize_notification_api_UpdateNotificationSettingRequest,
    responseSerialize: serialize_notification_api_NotificationSettingResponse,
    responseDeserialize: deserialize_notification_api_NotificationSettingResponse,
  },
  getNotificationSettting: {
    path: '/notification_api.NotificationService/GetNotificationSettting',
    requestStream: false,
    responseStream: false,
    requestType: notification$api_pb.GetNotificationSettingRequest,
    responseType: notification$api_pb.NotificationSettingResponse,
    requestSerialize: serialize_notification_api_GetNotificationSettingRequest,
    requestDeserialize: deserialize_notification_api_GetNotificationSettingRequest,
    responseSerialize: serialize_notification_api_NotificationSettingResponse,
    responseDeserialize: deserialize_notification_api_NotificationSettingResponse,
  },
};

exports.NotificationServiceClient = grpc.makeGenericClientConstructor(NotificationServiceService, 'NotificationService');
