// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var invoker$api_pb = require('./invoker-api_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
var common_pb = require('./common_pb.js');

function serialize_endpoint_api_InvokeRequest(arg) {
  if (!(arg instanceof invoker$api_pb.InvokeRequest)) {
    throw new Error('Expected argument of type endpoint_api.InvokeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_endpoint_api_InvokeRequest(buffer_arg) {
  return invoker$api_pb.InvokeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_endpoint_api_InvokeResponse(arg) {
  if (!(arg instanceof invoker$api_pb.InvokeResponse)) {
    throw new Error('Expected argument of type endpoint_api.InvokeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_endpoint_api_InvokeResponse(buffer_arg) {
  return invoker$api_pb.InvokeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_endpoint_api_ProbeRequest(arg) {
  if (!(arg instanceof invoker$api_pb.ProbeRequest)) {
    throw new Error('Expected argument of type endpoint_api.ProbeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_endpoint_api_ProbeRequest(buffer_arg) {
  return invoker$api_pb.ProbeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_endpoint_api_ProbeResponse(arg) {
  if (!(arg instanceof invoker$api_pb.ProbeResponse)) {
    throw new Error('Expected argument of type endpoint_api.ProbeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_endpoint_api_ProbeResponse(buffer_arg) {
  return invoker$api_pb.ProbeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_endpoint_api_UpdateRequest(arg) {
  if (!(arg instanceof invoker$api_pb.UpdateRequest)) {
    throw new Error('Expected argument of type endpoint_api.UpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_endpoint_api_UpdateRequest(buffer_arg) {
  return invoker$api_pb.UpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_endpoint_api_UpdateResponse(arg) {
  if (!(arg instanceof invoker$api_pb.UpdateResponse)) {
    throw new Error('Expected argument of type endpoint_api.UpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_endpoint_api_UpdateResponse(buffer_arg) {
  return invoker$api_pb.UpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var DeploymentService = exports.DeploymentService = {
  invoke: {
    path: '/endpoint_api.Deployment/Invoke',
    requestStream: false,
    responseStream: false,
    requestType: invoker$api_pb.InvokeRequest,
    responseType: invoker$api_pb.InvokeResponse,
    requestSerialize: serialize_endpoint_api_InvokeRequest,
    requestDeserialize: deserialize_endpoint_api_InvokeRequest,
    responseSerialize: serialize_endpoint_api_InvokeResponse,
    responseDeserialize: deserialize_endpoint_api_InvokeResponse,
  },
  update: {
    path: '/endpoint_api.Deployment/Update',
    requestStream: false,
    responseStream: false,
    requestType: invoker$api_pb.UpdateRequest,
    responseType: invoker$api_pb.UpdateResponse,
    requestSerialize: serialize_endpoint_api_UpdateRequest,
    requestDeserialize: deserialize_endpoint_api_UpdateRequest,
    responseSerialize: serialize_endpoint_api_UpdateResponse,
    responseDeserialize: deserialize_endpoint_api_UpdateResponse,
  },
  probe: {
    path: '/endpoint_api.Deployment/Probe',
    requestStream: false,
    responseStream: false,
    requestType: invoker$api_pb.ProbeRequest,
    responseType: invoker$api_pb.ProbeResponse,
    requestSerialize: serialize_endpoint_api_ProbeRequest,
    requestDeserialize: deserialize_endpoint_api_ProbeRequest,
    responseSerialize: serialize_endpoint_api_ProbeResponse,
    responseDeserialize: deserialize_endpoint_api_ProbeResponse,
  },
};

exports.DeploymentClient = grpc.makeGenericClientConstructor(DeploymentService, 'Deployment');
