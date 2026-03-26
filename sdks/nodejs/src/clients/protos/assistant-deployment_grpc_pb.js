// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var assistant$deployment_pb = require('./assistant-deployment_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var common_pb = require('./common_pb.js');

function serialize_assistant_api_CreateAssistantDeploymentRequest(arg) {
  if (!(arg instanceof assistant$deployment_pb.CreateAssistantDeploymentRequest)) {
    throw new Error('Expected argument of type assistant_api.CreateAssistantDeploymentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_CreateAssistantDeploymentRequest(buffer_arg) {
  return assistant$deployment_pb.CreateAssistantDeploymentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAssistantApiDeploymentResponse(arg) {
  if (!(arg instanceof assistant$deployment_pb.GetAssistantApiDeploymentResponse)) {
    throw new Error('Expected argument of type assistant_api.GetAssistantApiDeploymentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAssistantApiDeploymentResponse(buffer_arg) {
  return assistant$deployment_pb.GetAssistantApiDeploymentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAssistantDebuggerDeploymentResponse(arg) {
  if (!(arg instanceof assistant$deployment_pb.GetAssistantDebuggerDeploymentResponse)) {
    throw new Error('Expected argument of type assistant_api.GetAssistantDebuggerDeploymentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAssistantDebuggerDeploymentResponse(buffer_arg) {
  return assistant$deployment_pb.GetAssistantDebuggerDeploymentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAssistantDeploymentRequest(arg) {
  if (!(arg instanceof assistant$deployment_pb.GetAssistantDeploymentRequest)) {
    throw new Error('Expected argument of type assistant_api.GetAssistantDeploymentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAssistantDeploymentRequest(buffer_arg) {
  return assistant$deployment_pb.GetAssistantDeploymentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAssistantPhoneDeploymentResponse(arg) {
  if (!(arg instanceof assistant$deployment_pb.GetAssistantPhoneDeploymentResponse)) {
    throw new Error('Expected argument of type assistant_api.GetAssistantPhoneDeploymentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAssistantPhoneDeploymentResponse(buffer_arg) {
  return assistant$deployment_pb.GetAssistantPhoneDeploymentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAssistantWebpluginDeploymentResponse(arg) {
  if (!(arg instanceof assistant$deployment_pb.GetAssistantWebpluginDeploymentResponse)) {
    throw new Error('Expected argument of type assistant_api.GetAssistantWebpluginDeploymentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAssistantWebpluginDeploymentResponse(buffer_arg) {
  return assistant$deployment_pb.GetAssistantWebpluginDeploymentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAssistantWhatsappDeploymentResponse(arg) {
  if (!(arg instanceof assistant$deployment_pb.GetAssistantWhatsappDeploymentResponse)) {
    throw new Error('Expected argument of type assistant_api.GetAssistantWhatsappDeploymentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAssistantWhatsappDeploymentResponse(buffer_arg) {
  return assistant$deployment_pb.GetAssistantWhatsappDeploymentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AssistantDeploymentServiceService = exports.AssistantDeploymentServiceService = {
  createAssistantApiDeployment: {
    path: '/assistant_api.AssistantDeploymentService/CreateAssistantApiDeployment',
    requestStream: false,
    responseStream: false,
    requestType: assistant$deployment_pb.CreateAssistantDeploymentRequest,
    responseType: assistant$deployment_pb.GetAssistantApiDeploymentResponse,
    requestSerialize: serialize_assistant_api_CreateAssistantDeploymentRequest,
    requestDeserialize: deserialize_assistant_api_CreateAssistantDeploymentRequest,
    responseSerialize: serialize_assistant_api_GetAssistantApiDeploymentResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantApiDeploymentResponse,
  },
  getAssistantApiDeployment: {
    path: '/assistant_api.AssistantDeploymentService/GetAssistantApiDeployment',
    requestStream: false,
    responseStream: false,
    requestType: assistant$deployment_pb.GetAssistantDeploymentRequest,
    responseType: assistant$deployment_pb.GetAssistantApiDeploymentResponse,
    requestSerialize: serialize_assistant_api_GetAssistantDeploymentRequest,
    requestDeserialize: deserialize_assistant_api_GetAssistantDeploymentRequest,
    responseSerialize: serialize_assistant_api_GetAssistantApiDeploymentResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantApiDeploymentResponse,
  },
  createAssistantWebpluginDeployment: {
    path: '/assistant_api.AssistantDeploymentService/CreateAssistantWebpluginDeployment',
    requestStream: false,
    responseStream: false,
    requestType: assistant$deployment_pb.CreateAssistantDeploymentRequest,
    responseType: assistant$deployment_pb.GetAssistantWebpluginDeploymentResponse,
    requestSerialize: serialize_assistant_api_CreateAssistantDeploymentRequest,
    requestDeserialize: deserialize_assistant_api_CreateAssistantDeploymentRequest,
    responseSerialize: serialize_assistant_api_GetAssistantWebpluginDeploymentResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantWebpluginDeploymentResponse,
  },
  getAssistantWebpluginDeployment: {
    path: '/assistant_api.AssistantDeploymentService/GetAssistantWebpluginDeployment',
    requestStream: false,
    responseStream: false,
    requestType: assistant$deployment_pb.GetAssistantDeploymentRequest,
    responseType: assistant$deployment_pb.GetAssistantWebpluginDeploymentResponse,
    requestSerialize: serialize_assistant_api_GetAssistantDeploymentRequest,
    requestDeserialize: deserialize_assistant_api_GetAssistantDeploymentRequest,
    responseSerialize: serialize_assistant_api_GetAssistantWebpluginDeploymentResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantWebpluginDeploymentResponse,
  },
  createAssistantDebuggerDeployment: {
    path: '/assistant_api.AssistantDeploymentService/CreateAssistantDebuggerDeployment',
    requestStream: false,
    responseStream: false,
    requestType: assistant$deployment_pb.CreateAssistantDeploymentRequest,
    responseType: assistant$deployment_pb.GetAssistantDebuggerDeploymentResponse,
    requestSerialize: serialize_assistant_api_CreateAssistantDeploymentRequest,
    requestDeserialize: deserialize_assistant_api_CreateAssistantDeploymentRequest,
    responseSerialize: serialize_assistant_api_GetAssistantDebuggerDeploymentResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantDebuggerDeploymentResponse,
  },
  getAssistantDebuggerDeployment: {
    path: '/assistant_api.AssistantDeploymentService/GetAssistantDebuggerDeployment',
    requestStream: false,
    responseStream: false,
    requestType: assistant$deployment_pb.GetAssistantDeploymentRequest,
    responseType: assistant$deployment_pb.GetAssistantDebuggerDeploymentResponse,
    requestSerialize: serialize_assistant_api_GetAssistantDeploymentRequest,
    requestDeserialize: deserialize_assistant_api_GetAssistantDeploymentRequest,
    responseSerialize: serialize_assistant_api_GetAssistantDebuggerDeploymentResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantDebuggerDeploymentResponse,
  },
  createAssistantWhatsappDeployment: {
    path: '/assistant_api.AssistantDeploymentService/CreateAssistantWhatsappDeployment',
    requestStream: false,
    responseStream: false,
    requestType: assistant$deployment_pb.CreateAssistantDeploymentRequest,
    responseType: assistant$deployment_pb.GetAssistantWhatsappDeploymentResponse,
    requestSerialize: serialize_assistant_api_CreateAssistantDeploymentRequest,
    requestDeserialize: deserialize_assistant_api_CreateAssistantDeploymentRequest,
    responseSerialize: serialize_assistant_api_GetAssistantWhatsappDeploymentResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantWhatsappDeploymentResponse,
  },
  getAssistantWhatsappDeployment: {
    path: '/assistant_api.AssistantDeploymentService/GetAssistantWhatsappDeployment',
    requestStream: false,
    responseStream: false,
    requestType: assistant$deployment_pb.GetAssistantDeploymentRequest,
    responseType: assistant$deployment_pb.GetAssistantWhatsappDeploymentResponse,
    requestSerialize: serialize_assistant_api_GetAssistantDeploymentRequest,
    requestDeserialize: deserialize_assistant_api_GetAssistantDeploymentRequest,
    responseSerialize: serialize_assistant_api_GetAssistantWhatsappDeploymentResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantWhatsappDeploymentResponse,
  },
  createAssistantPhoneDeployment: {
    path: '/assistant_api.AssistantDeploymentService/CreateAssistantPhoneDeployment',
    requestStream: false,
    responseStream: false,
    requestType: assistant$deployment_pb.CreateAssistantDeploymentRequest,
    responseType: assistant$deployment_pb.GetAssistantPhoneDeploymentResponse,
    requestSerialize: serialize_assistant_api_CreateAssistantDeploymentRequest,
    requestDeserialize: deserialize_assistant_api_CreateAssistantDeploymentRequest,
    responseSerialize: serialize_assistant_api_GetAssistantPhoneDeploymentResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantPhoneDeploymentResponse,
  },
  getAssistantPhoneDeployment: {
    path: '/assistant_api.AssistantDeploymentService/GetAssistantPhoneDeployment',
    requestStream: false,
    responseStream: false,
    requestType: assistant$deployment_pb.GetAssistantDeploymentRequest,
    responseType: assistant$deployment_pb.GetAssistantPhoneDeploymentResponse,
    requestSerialize: serialize_assistant_api_GetAssistantDeploymentRequest,
    requestDeserialize: deserialize_assistant_api_GetAssistantDeploymentRequest,
    responseSerialize: serialize_assistant_api_GetAssistantPhoneDeploymentResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantPhoneDeploymentResponse,
  },
};

exports.AssistantDeploymentServiceClient = grpc.makeGenericClientConstructor(AssistantDeploymentServiceService, 'AssistantDeploymentService');
