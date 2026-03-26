// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var audit$logging$api_pb = require('./audit-logging-api_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var common_pb = require('./common_pb.js');

function serialize_integration_api_CreateMetadataRequest(arg) {
  if (!(arg instanceof audit$logging$api_pb.CreateMetadataRequest)) {
    throw new Error('Expected argument of type integration_api.CreateMetadataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_CreateMetadataRequest(buffer_arg) {
  return audit$logging$api_pb.CreateMetadataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_api_CreateMetadataResponse(arg) {
  if (!(arg instanceof audit$logging$api_pb.CreateMetadataResponse)) {
    throw new Error('Expected argument of type integration_api.CreateMetadataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_CreateMetadataResponse(buffer_arg) {
  return audit$logging$api_pb.CreateMetadataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_api_GetAllAuditLogRequest(arg) {
  if (!(arg instanceof audit$logging$api_pb.GetAllAuditLogRequest)) {
    throw new Error('Expected argument of type integration_api.GetAllAuditLogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_GetAllAuditLogRequest(buffer_arg) {
  return audit$logging$api_pb.GetAllAuditLogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_api_GetAllAuditLogResponse(arg) {
  if (!(arg instanceof audit$logging$api_pb.GetAllAuditLogResponse)) {
    throw new Error('Expected argument of type integration_api.GetAllAuditLogResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_GetAllAuditLogResponse(buffer_arg) {
  return audit$logging$api_pb.GetAllAuditLogResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_api_GetAuditLogRequest(arg) {
  if (!(arg instanceof audit$logging$api_pb.GetAuditLogRequest)) {
    throw new Error('Expected argument of type integration_api.GetAuditLogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_GetAuditLogRequest(buffer_arg) {
  return audit$logging$api_pb.GetAuditLogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_api_GetAuditLogResponse(arg) {
  if (!(arg instanceof audit$logging$api_pb.GetAuditLogResponse)) {
    throw new Error('Expected argument of type integration_api.GetAuditLogResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_GetAuditLogResponse(buffer_arg) {
  return audit$logging$api_pb.GetAuditLogResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuditLoggingServiceService = exports.AuditLoggingServiceService = {
  getAllAuditLog: {
    path: '/integration_api.AuditLoggingService/GetAllAuditLog',
    requestStream: false,
    responseStream: false,
    requestType: audit$logging$api_pb.GetAllAuditLogRequest,
    responseType: audit$logging$api_pb.GetAllAuditLogResponse,
    requestSerialize: serialize_integration_api_GetAllAuditLogRequest,
    requestDeserialize: deserialize_integration_api_GetAllAuditLogRequest,
    responseSerialize: serialize_integration_api_GetAllAuditLogResponse,
    responseDeserialize: deserialize_integration_api_GetAllAuditLogResponse,
  },
  getAuditLog: {
    path: '/integration_api.AuditLoggingService/GetAuditLog',
    requestStream: false,
    responseStream: false,
    requestType: audit$logging$api_pb.GetAuditLogRequest,
    responseType: audit$logging$api_pb.GetAuditLogResponse,
    requestSerialize: serialize_integration_api_GetAuditLogRequest,
    requestDeserialize: deserialize_integration_api_GetAuditLogRequest,
    responseSerialize: serialize_integration_api_GetAuditLogResponse,
    responseDeserialize: deserialize_integration_api_GetAuditLogResponse,
  },
  createMetadata: {
    path: '/integration_api.AuditLoggingService/CreateMetadata',
    requestStream: false,
    responseStream: false,
    requestType: audit$logging$api_pb.CreateMetadataRequest,
    responseType: audit$logging$api_pb.CreateMetadataResponse,
    requestSerialize: serialize_integration_api_CreateMetadataRequest,
    requestDeserialize: deserialize_integration_api_CreateMetadataRequest,
    responseSerialize: serialize_integration_api_CreateMetadataResponse,
    responseDeserialize: deserialize_integration_api_CreateMetadataResponse,
  },
};

exports.AuditLoggingServiceClient = grpc.makeGenericClientConstructor(AuditLoggingServiceService, 'AuditLoggingService');
