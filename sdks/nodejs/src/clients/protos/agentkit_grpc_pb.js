// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var agentkit_pb = require('./agentkit_pb.js');
var common_pb = require('./common_pb.js');
var talk$api_pb = require('./talk-api_pb.js');

function serialize_talk_api_TalkInput(arg) {
  if (!(arg instanceof agentkit_pb.TalkInput)) {
    throw new Error('Expected argument of type talk_api.TalkInput');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_talk_api_TalkInput(buffer_arg) {
  return agentkit_pb.TalkInput.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_talk_api_TalkOutput(arg) {
  if (!(arg instanceof agentkit_pb.TalkOutput)) {
    throw new Error('Expected argument of type talk_api.TalkOutput');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_talk_api_TalkOutput(buffer_arg) {
  return agentkit_pb.TalkOutput.deserializeBinary(new Uint8Array(buffer_arg));
}


// AgentKit Service for internal agent messaging and orchestration.
var AgentKitService = exports.AgentKitService = {
  // Bi-directional streaming RPC for agent communication
talk: {
    path: '/talk_api.AgentKit/Talk',
    requestStream: true,
    responseStream: true,
    requestType: agentkit_pb.TalkInput,
    responseType: agentkit_pb.TalkOutput,
    requestSerialize: serialize_talk_api_TalkInput,
    requestDeserialize: deserialize_talk_api_TalkInput,
    responseSerialize: serialize_talk_api_TalkOutput,
    responseDeserialize: deserialize_talk_api_TalkOutput,
  },
};

exports.AgentKitClient = grpc.makeGenericClientConstructor(AgentKitService, 'AgentKit');
