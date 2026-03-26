// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var webrtc_pb = require('./webrtc_pb.js');
var talk$api_pb = require('./talk-api_pb.js');

function serialize_talk_api_WebTalkRequest(arg) {
  if (!(arg instanceof webrtc_pb.WebTalkRequest)) {
    throw new Error('Expected argument of type talk_api.WebTalkRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_talk_api_WebTalkRequest(buffer_arg) {
  return webrtc_pb.WebTalkRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_talk_api_WebTalkResponse(arg) {
  if (!(arg instanceof webrtc_pb.WebTalkResponse)) {
    throw new Error('Expected argument of type talk_api.WebTalkResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_talk_api_WebTalkResponse(buffer_arg) {
  return webrtc_pb.WebTalkResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// ============================================================================
// WebRTC Service
// ============================================================================
//
// WebRTC Service for browser-based real-time communication.
var WebRTCService = exports.WebRTCService = {
  // Bi-directional streaming RPC for WebRTC-based conversation
webTalk: {
    path: '/talk_api.WebRTC/WebTalk',
    requestStream: true,
    responseStream: true,
    requestType: webrtc_pb.WebTalkRequest,
    responseType: webrtc_pb.WebTalkResponse,
    requestSerialize: serialize_talk_api_WebTalkRequest,
    requestDeserialize: deserialize_talk_api_WebTalkRequest,
    responseSerialize: serialize_talk_api_WebTalkResponse,
    responseDeserialize: deserialize_talk_api_WebTalkResponse,
  },
};

exports.WebRTCClient = grpc.makeGenericClientConstructor(WebRTCService, 'WebRTC');
