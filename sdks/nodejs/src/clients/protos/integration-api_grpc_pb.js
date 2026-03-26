// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var integration$api_pb = require('./integration-api_pb.js');
var common_pb = require('./common_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');

function serialize_integration_api_ChatRequest(arg) {
  if (!(arg instanceof integration$api_pb.ChatRequest)) {
    throw new Error('Expected argument of type integration_api.ChatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_ChatRequest(buffer_arg) {
  return integration$api_pb.ChatRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_api_ChatResponse(arg) {
  if (!(arg instanceof integration$api_pb.ChatResponse)) {
    throw new Error('Expected argument of type integration_api.ChatResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_ChatResponse(buffer_arg) {
  return integration$api_pb.ChatResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_api_EmbeddingRequest(arg) {
  if (!(arg instanceof integration$api_pb.EmbeddingRequest)) {
    throw new Error('Expected argument of type integration_api.EmbeddingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_EmbeddingRequest(buffer_arg) {
  return integration$api_pb.EmbeddingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_api_EmbeddingResponse(arg) {
  if (!(arg instanceof integration$api_pb.EmbeddingResponse)) {
    throw new Error('Expected argument of type integration_api.EmbeddingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_EmbeddingResponse(buffer_arg) {
  return integration$api_pb.EmbeddingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_api_GetModerationRequest(arg) {
  if (!(arg instanceof integration$api_pb.GetModerationRequest)) {
    throw new Error('Expected argument of type integration_api.GetModerationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_GetModerationRequest(buffer_arg) {
  return integration$api_pb.GetModerationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_api_GetModerationResponse(arg) {
  if (!(arg instanceof integration$api_pb.GetModerationResponse)) {
    throw new Error('Expected argument of type integration_api.GetModerationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_GetModerationResponse(buffer_arg) {
  return integration$api_pb.GetModerationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_api_RerankingRequest(arg) {
  if (!(arg instanceof integration$api_pb.RerankingRequest)) {
    throw new Error('Expected argument of type integration_api.RerankingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_RerankingRequest(buffer_arg) {
  return integration$api_pb.RerankingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_api_RerankingResponse(arg) {
  if (!(arg instanceof integration$api_pb.RerankingResponse)) {
    throw new Error('Expected argument of type integration_api.RerankingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_RerankingResponse(buffer_arg) {
  return integration$api_pb.RerankingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_api_VerifyCredentialRequest(arg) {
  if (!(arg instanceof integration$api_pb.VerifyCredentialRequest)) {
    throw new Error('Expected argument of type integration_api.VerifyCredentialRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_VerifyCredentialRequest(buffer_arg) {
  return integration$api_pb.VerifyCredentialRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_api_VerifyCredentialResponse(arg) {
  if (!(arg instanceof integration$api_pb.VerifyCredentialResponse)) {
    throw new Error('Expected argument of type integration_api.VerifyCredentialResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_VerifyCredentialResponse(buffer_arg) {
  return integration$api_pb.VerifyCredentialResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var BedrockServiceService = exports.BedrockServiceService = {
  embedding: {
    path: '/integration_api.BedrockService/Embedding',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.EmbeddingRequest,
    responseType: integration$api_pb.EmbeddingResponse,
    requestSerialize: serialize_integration_api_EmbeddingRequest,
    requestDeserialize: deserialize_integration_api_EmbeddingRequest,
    responseSerialize: serialize_integration_api_EmbeddingResponse,
    responseDeserialize: deserialize_integration_api_EmbeddingResponse,
  },
  chat: {
    path: '/integration_api.BedrockService/Chat',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.ChatRequest,
    responseType: integration$api_pb.ChatResponse,
    requestSerialize: serialize_integration_api_ChatRequest,
    requestDeserialize: deserialize_integration_api_ChatRequest,
    responseSerialize: serialize_integration_api_ChatResponse,
    responseDeserialize: deserialize_integration_api_ChatResponse,
  },
  verifyCredential: {
    path: '/integration_api.BedrockService/VerifyCredential',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.VerifyCredentialRequest,
    responseType: integration$api_pb.VerifyCredentialResponse,
    requestSerialize: serialize_integration_api_VerifyCredentialRequest,
    requestDeserialize: deserialize_integration_api_VerifyCredentialRequest,
    responseSerialize: serialize_integration_api_VerifyCredentialResponse,
    responseDeserialize: deserialize_integration_api_VerifyCredentialResponse,
  },
};

exports.BedrockServiceClient = grpc.makeGenericClientConstructor(BedrockServiceService, 'BedrockService');
var OpenAiServiceService = exports.OpenAiServiceService = {
  embedding: {
    path: '/integration_api.OpenAiService/Embedding',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.EmbeddingRequest,
    responseType: integration$api_pb.EmbeddingResponse,
    requestSerialize: serialize_integration_api_EmbeddingRequest,
    requestDeserialize: deserialize_integration_api_EmbeddingRequest,
    responseSerialize: serialize_integration_api_EmbeddingResponse,
    responseDeserialize: deserialize_integration_api_EmbeddingResponse,
  },
  chat: {
    path: '/integration_api.OpenAiService/Chat',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.ChatRequest,
    responseType: integration$api_pb.ChatResponse,
    requestSerialize: serialize_integration_api_ChatRequest,
    requestDeserialize: deserialize_integration_api_ChatRequest,
    responseSerialize: serialize_integration_api_ChatResponse,
    responseDeserialize: deserialize_integration_api_ChatResponse,
  },
  streamChat: {
    path: '/integration_api.OpenAiService/StreamChat',
    requestStream: true,
    responseStream: true,
    requestType: integration$api_pb.ChatRequest,
    responseType: integration$api_pb.ChatResponse,
    requestSerialize: serialize_integration_api_ChatRequest,
    requestDeserialize: deserialize_integration_api_ChatRequest,
    responseSerialize: serialize_integration_api_ChatResponse,
    responseDeserialize: deserialize_integration_api_ChatResponse,
  },
  verifyCredential: {
    path: '/integration_api.OpenAiService/VerifyCredential',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.VerifyCredentialRequest,
    responseType: integration$api_pb.VerifyCredentialResponse,
    requestSerialize: serialize_integration_api_VerifyCredentialRequest,
    requestDeserialize: deserialize_integration_api_VerifyCredentialRequest,
    responseSerialize: serialize_integration_api_VerifyCredentialResponse,
    responseDeserialize: deserialize_integration_api_VerifyCredentialResponse,
  },
  getModeration: {
    path: '/integration_api.OpenAiService/GetModeration',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.GetModerationRequest,
    responseType: integration$api_pb.GetModerationResponse,
    requestSerialize: serialize_integration_api_GetModerationRequest,
    requestDeserialize: deserialize_integration_api_GetModerationRequest,
    responseSerialize: serialize_integration_api_GetModerationResponse,
    responseDeserialize: deserialize_integration_api_GetModerationResponse,
  },
};

exports.OpenAiServiceClient = grpc.makeGenericClientConstructor(OpenAiServiceService, 'OpenAiService');
var AzureServiceService = exports.AzureServiceService = {
  embedding: {
    path: '/integration_api.AzureService/Embedding',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.EmbeddingRequest,
    responseType: integration$api_pb.EmbeddingResponse,
    requestSerialize: serialize_integration_api_EmbeddingRequest,
    requestDeserialize: deserialize_integration_api_EmbeddingRequest,
    responseSerialize: serialize_integration_api_EmbeddingResponse,
    responseDeserialize: deserialize_integration_api_EmbeddingResponse,
  },
  chat: {
    path: '/integration_api.AzureService/Chat',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.ChatRequest,
    responseType: integration$api_pb.ChatResponse,
    requestSerialize: serialize_integration_api_ChatRequest,
    requestDeserialize: deserialize_integration_api_ChatRequest,
    responseSerialize: serialize_integration_api_ChatResponse,
    responseDeserialize: deserialize_integration_api_ChatResponse,
  },
  streamChat: {
    path: '/integration_api.AzureService/StreamChat',
    requestStream: true,
    responseStream: true,
    requestType: integration$api_pb.ChatRequest,
    responseType: integration$api_pb.ChatResponse,
    requestSerialize: serialize_integration_api_ChatRequest,
    requestDeserialize: deserialize_integration_api_ChatRequest,
    responseSerialize: serialize_integration_api_ChatResponse,
    responseDeserialize: deserialize_integration_api_ChatResponse,
  },
  verifyCredential: {
    path: '/integration_api.AzureService/VerifyCredential',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.VerifyCredentialRequest,
    responseType: integration$api_pb.VerifyCredentialResponse,
    requestSerialize: serialize_integration_api_VerifyCredentialRequest,
    requestDeserialize: deserialize_integration_api_VerifyCredentialRequest,
    responseSerialize: serialize_integration_api_VerifyCredentialResponse,
    responseDeserialize: deserialize_integration_api_VerifyCredentialResponse,
  },
  getModeration: {
    path: '/integration_api.AzureService/GetModeration',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.GetModerationRequest,
    responseType: integration$api_pb.GetModerationResponse,
    requestSerialize: serialize_integration_api_GetModerationRequest,
    requestDeserialize: deserialize_integration_api_GetModerationRequest,
    responseSerialize: serialize_integration_api_GetModerationResponse,
    responseDeserialize: deserialize_integration_api_GetModerationResponse,
  },
};

exports.AzureServiceClient = grpc.makeGenericClientConstructor(AzureServiceService, 'AzureService');
var GeminiServiceService = exports.GeminiServiceService = {
  embedding: {
    path: '/integration_api.GeminiService/Embedding',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.EmbeddingRequest,
    responseType: integration$api_pb.EmbeddingResponse,
    requestSerialize: serialize_integration_api_EmbeddingRequest,
    requestDeserialize: deserialize_integration_api_EmbeddingRequest,
    responseSerialize: serialize_integration_api_EmbeddingResponse,
    responseDeserialize: deserialize_integration_api_EmbeddingResponse,
  },
  chat: {
    path: '/integration_api.GeminiService/Chat',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.ChatRequest,
    responseType: integration$api_pb.ChatResponse,
    requestSerialize: serialize_integration_api_ChatRequest,
    requestDeserialize: deserialize_integration_api_ChatRequest,
    responseSerialize: serialize_integration_api_ChatResponse,
    responseDeserialize: deserialize_integration_api_ChatResponse,
  },
  streamChat: {
    path: '/integration_api.GeminiService/StreamChat',
    requestStream: true,
    responseStream: true,
    requestType: integration$api_pb.ChatRequest,
    responseType: integration$api_pb.ChatResponse,
    requestSerialize: serialize_integration_api_ChatRequest,
    requestDeserialize: deserialize_integration_api_ChatRequest,
    responseSerialize: serialize_integration_api_ChatResponse,
    responseDeserialize: deserialize_integration_api_ChatResponse,
  },
  verifyCredential: {
    path: '/integration_api.GeminiService/VerifyCredential',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.VerifyCredentialRequest,
    responseType: integration$api_pb.VerifyCredentialResponse,
    requestSerialize: serialize_integration_api_VerifyCredentialRequest,
    requestDeserialize: deserialize_integration_api_VerifyCredentialRequest,
    responseSerialize: serialize_integration_api_VerifyCredentialResponse,
    responseDeserialize: deserialize_integration_api_VerifyCredentialResponse,
  },
};

exports.GeminiServiceClient = grpc.makeGenericClientConstructor(GeminiServiceService, 'GeminiService');
var VertexAiServiceService = exports.VertexAiServiceService = {
  embedding: {
    path: '/integration_api.VertexAiService/Embedding',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.EmbeddingRequest,
    responseType: integration$api_pb.EmbeddingResponse,
    requestSerialize: serialize_integration_api_EmbeddingRequest,
    requestDeserialize: deserialize_integration_api_EmbeddingRequest,
    responseSerialize: serialize_integration_api_EmbeddingResponse,
    responseDeserialize: deserialize_integration_api_EmbeddingResponse,
  },
  chat: {
    path: '/integration_api.VertexAiService/Chat',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.ChatRequest,
    responseType: integration$api_pb.ChatResponse,
    requestSerialize: serialize_integration_api_ChatRequest,
    requestDeserialize: deserialize_integration_api_ChatRequest,
    responseSerialize: serialize_integration_api_ChatResponse,
    responseDeserialize: deserialize_integration_api_ChatResponse,
  },
  streamChat: {
    path: '/integration_api.VertexAiService/StreamChat',
    requestStream: true,
    responseStream: true,
    requestType: integration$api_pb.ChatRequest,
    responseType: integration$api_pb.ChatResponse,
    requestSerialize: serialize_integration_api_ChatRequest,
    requestDeserialize: deserialize_integration_api_ChatRequest,
    responseSerialize: serialize_integration_api_ChatResponse,
    responseDeserialize: deserialize_integration_api_ChatResponse,
  },
  verifyCredential: {
    path: '/integration_api.VertexAiService/VerifyCredential',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.VerifyCredentialRequest,
    responseType: integration$api_pb.VerifyCredentialResponse,
    requestSerialize: serialize_integration_api_VerifyCredentialRequest,
    requestDeserialize: deserialize_integration_api_VerifyCredentialRequest,
    responseSerialize: serialize_integration_api_VerifyCredentialResponse,
    responseDeserialize: deserialize_integration_api_VerifyCredentialResponse,
  },
};

exports.VertexAiServiceClient = grpc.makeGenericClientConstructor(VertexAiServiceService, 'VertexAiService');
var ReplicateServiceService = exports.ReplicateServiceService = {
  chat: {
    path: '/integration_api.ReplicateService/Chat',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.ChatRequest,
    responseType: integration$api_pb.ChatResponse,
    requestSerialize: serialize_integration_api_ChatRequest,
    requestDeserialize: deserialize_integration_api_ChatRequest,
    responseSerialize: serialize_integration_api_ChatResponse,
    responseDeserialize: deserialize_integration_api_ChatResponse,
  },
  streamChat: {
    path: '/integration_api.ReplicateService/StreamChat',
    requestStream: true,
    responseStream: true,
    requestType: integration$api_pb.ChatRequest,
    responseType: integration$api_pb.ChatResponse,
    requestSerialize: serialize_integration_api_ChatRequest,
    requestDeserialize: deserialize_integration_api_ChatRequest,
    responseSerialize: serialize_integration_api_ChatResponse,
    responseDeserialize: deserialize_integration_api_ChatResponse,
  },
  verifyCredential: {
    path: '/integration_api.ReplicateService/VerifyCredential',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.VerifyCredentialRequest,
    responseType: integration$api_pb.VerifyCredentialResponse,
    requestSerialize: serialize_integration_api_VerifyCredentialRequest,
    requestDeserialize: deserialize_integration_api_VerifyCredentialRequest,
    responseSerialize: serialize_integration_api_VerifyCredentialResponse,
    responseDeserialize: deserialize_integration_api_VerifyCredentialResponse,
  },
};

exports.ReplicateServiceClient = grpc.makeGenericClientConstructor(ReplicateServiceService, 'ReplicateService');
var AnthropicServiceService = exports.AnthropicServiceService = {
  chat: {
    path: '/integration_api.AnthropicService/Chat',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.ChatRequest,
    responseType: integration$api_pb.ChatResponse,
    requestSerialize: serialize_integration_api_ChatRequest,
    requestDeserialize: deserialize_integration_api_ChatRequest,
    responseSerialize: serialize_integration_api_ChatResponse,
    responseDeserialize: deserialize_integration_api_ChatResponse,
  },
  streamChat: {
    path: '/integration_api.AnthropicService/StreamChat',
    requestStream: true,
    responseStream: true,
    requestType: integration$api_pb.ChatRequest,
    responseType: integration$api_pb.ChatResponse,
    requestSerialize: serialize_integration_api_ChatRequest,
    requestDeserialize: deserialize_integration_api_ChatRequest,
    responseSerialize: serialize_integration_api_ChatResponse,
    responseDeserialize: deserialize_integration_api_ChatResponse,
  },
  verifyCredential: {
    path: '/integration_api.AnthropicService/VerifyCredential',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.VerifyCredentialRequest,
    responseType: integration$api_pb.VerifyCredentialResponse,
    requestSerialize: serialize_integration_api_VerifyCredentialRequest,
    requestDeserialize: deserialize_integration_api_VerifyCredentialRequest,
    responseSerialize: serialize_integration_api_VerifyCredentialResponse,
    responseDeserialize: deserialize_integration_api_VerifyCredentialResponse,
  },
};

exports.AnthropicServiceClient = grpc.makeGenericClientConstructor(AnthropicServiceService, 'AnthropicService');
var CohereServiceService = exports.CohereServiceService = {
  embedding: {
    path: '/integration_api.CohereService/Embedding',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.EmbeddingRequest,
    responseType: integration$api_pb.EmbeddingResponse,
    requestSerialize: serialize_integration_api_EmbeddingRequest,
    requestDeserialize: deserialize_integration_api_EmbeddingRequest,
    responseSerialize: serialize_integration_api_EmbeddingResponse,
    responseDeserialize: deserialize_integration_api_EmbeddingResponse,
  },
  reranking: {
    path: '/integration_api.CohereService/Reranking',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.RerankingRequest,
    responseType: integration$api_pb.RerankingResponse,
    requestSerialize: serialize_integration_api_RerankingRequest,
    requestDeserialize: deserialize_integration_api_RerankingRequest,
    responseSerialize: serialize_integration_api_RerankingResponse,
    responseDeserialize: deserialize_integration_api_RerankingResponse,
  },
  chat: {
    path: '/integration_api.CohereService/Chat',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.ChatRequest,
    responseType: integration$api_pb.ChatResponse,
    requestSerialize: serialize_integration_api_ChatRequest,
    requestDeserialize: deserialize_integration_api_ChatRequest,
    responseSerialize: serialize_integration_api_ChatResponse,
    responseDeserialize: deserialize_integration_api_ChatResponse,
  },
  streamChat: {
    path: '/integration_api.CohereService/StreamChat',
    requestStream: true,
    responseStream: true,
    requestType: integration$api_pb.ChatRequest,
    responseType: integration$api_pb.ChatResponse,
    requestSerialize: serialize_integration_api_ChatRequest,
    requestDeserialize: deserialize_integration_api_ChatRequest,
    responseSerialize: serialize_integration_api_ChatResponse,
    responseDeserialize: deserialize_integration_api_ChatResponse,
  },
  verifyCredential: {
    path: '/integration_api.CohereService/VerifyCredential',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.VerifyCredentialRequest,
    responseType: integration$api_pb.VerifyCredentialResponse,
    requestSerialize: serialize_integration_api_VerifyCredentialRequest,
    requestDeserialize: deserialize_integration_api_VerifyCredentialRequest,
    responseSerialize: serialize_integration_api_VerifyCredentialResponse,
    responseDeserialize: deserialize_integration_api_VerifyCredentialResponse,
  },
};

exports.CohereServiceClient = grpc.makeGenericClientConstructor(CohereServiceService, 'CohereService');
var HuggingfaceServiceService = exports.HuggingfaceServiceService = {
  chat: {
    path: '/integration_api.HuggingfaceService/Chat',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.ChatRequest,
    responseType: integration$api_pb.ChatResponse,
    requestSerialize: serialize_integration_api_ChatRequest,
    requestDeserialize: deserialize_integration_api_ChatRequest,
    responseSerialize: serialize_integration_api_ChatResponse,
    responseDeserialize: deserialize_integration_api_ChatResponse,
  },
  verifyCredential: {
    path: '/integration_api.HuggingfaceService/VerifyCredential',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.VerifyCredentialRequest,
    responseType: integration$api_pb.VerifyCredentialResponse,
    requestSerialize: serialize_integration_api_VerifyCredentialRequest,
    requestDeserialize: deserialize_integration_api_VerifyCredentialRequest,
    responseSerialize: serialize_integration_api_VerifyCredentialResponse,
    responseDeserialize: deserialize_integration_api_VerifyCredentialResponse,
  },
};

exports.HuggingfaceServiceClient = grpc.makeGenericClientConstructor(HuggingfaceServiceService, 'HuggingfaceService');
var MistralServiceService = exports.MistralServiceService = {
  chat: {
    path: '/integration_api.MistralService/Chat',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.ChatRequest,
    responseType: integration$api_pb.ChatResponse,
    requestSerialize: serialize_integration_api_ChatRequest,
    requestDeserialize: deserialize_integration_api_ChatRequest,
    responseSerialize: serialize_integration_api_ChatResponse,
    responseDeserialize: deserialize_integration_api_ChatResponse,
  },
  streamChat: {
    path: '/integration_api.MistralService/StreamChat',
    requestStream: true,
    responseStream: true,
    requestType: integration$api_pb.ChatRequest,
    responseType: integration$api_pb.ChatResponse,
    requestSerialize: serialize_integration_api_ChatRequest,
    requestDeserialize: deserialize_integration_api_ChatRequest,
    responseSerialize: serialize_integration_api_ChatResponse,
    responseDeserialize: deserialize_integration_api_ChatResponse,
  },
  verifyCredential: {
    path: '/integration_api.MistralService/VerifyCredential',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.VerifyCredentialRequest,
    responseType: integration$api_pb.VerifyCredentialResponse,
    requestSerialize: serialize_integration_api_VerifyCredentialRequest,
    requestDeserialize: deserialize_integration_api_VerifyCredentialRequest,
    responseSerialize: serialize_integration_api_VerifyCredentialResponse,
    responseDeserialize: deserialize_integration_api_VerifyCredentialResponse,
  },
};

exports.MistralServiceClient = grpc.makeGenericClientConstructor(MistralServiceService, 'MistralService');
var StabilityAiServiceService = exports.StabilityAiServiceService = {
  verifyCredential: {
    path: '/integration_api.StabilityAiService/VerifyCredential',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.VerifyCredentialRequest,
    responseType: integration$api_pb.VerifyCredentialResponse,
    requestSerialize: serialize_integration_api_VerifyCredentialRequest,
    requestDeserialize: deserialize_integration_api_VerifyCredentialRequest,
    responseSerialize: serialize_integration_api_VerifyCredentialResponse,
    responseDeserialize: deserialize_integration_api_VerifyCredentialResponse,
  },
};

exports.StabilityAiServiceClient = grpc.makeGenericClientConstructor(StabilityAiServiceService, 'StabilityAiService');
var TogetherAiServiceService = exports.TogetherAiServiceService = {
  chat: {
    path: '/integration_api.TogetherAiService/Chat',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.ChatRequest,
    responseType: integration$api_pb.ChatResponse,
    requestSerialize: serialize_integration_api_ChatRequest,
    requestDeserialize: deserialize_integration_api_ChatRequest,
    responseSerialize: serialize_integration_api_ChatResponse,
    responseDeserialize: deserialize_integration_api_ChatResponse,
  },
  verifyCredential: {
    path: '/integration_api.TogetherAiService/VerifyCredential',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.VerifyCredentialRequest,
    responseType: integration$api_pb.VerifyCredentialResponse,
    requestSerialize: serialize_integration_api_VerifyCredentialRequest,
    requestDeserialize: deserialize_integration_api_VerifyCredentialRequest,
    responseSerialize: serialize_integration_api_VerifyCredentialResponse,
    responseDeserialize: deserialize_integration_api_VerifyCredentialResponse,
  },
};

exports.TogetherAiServiceClient = grpc.makeGenericClientConstructor(TogetherAiServiceService, 'TogetherAiService');
var DeepInfraServiceService = exports.DeepInfraServiceService = {
  verifyCredential: {
    path: '/integration_api.DeepInfraService/VerifyCredential',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.VerifyCredentialRequest,
    responseType: integration$api_pb.VerifyCredentialResponse,
    requestSerialize: serialize_integration_api_VerifyCredentialRequest,
    requestDeserialize: deserialize_integration_api_VerifyCredentialRequest,
    responseSerialize: serialize_integration_api_VerifyCredentialResponse,
    responseDeserialize: deserialize_integration_api_VerifyCredentialResponse,
  },
};

exports.DeepInfraServiceClient = grpc.makeGenericClientConstructor(DeepInfraServiceService, 'DeepInfraService');
var VoyageAiServiceService = exports.VoyageAiServiceService = {
  embedding: {
    path: '/integration_api.VoyageAiService/Embedding',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.EmbeddingRequest,
    responseType: integration$api_pb.EmbeddingResponse,
    requestSerialize: serialize_integration_api_EmbeddingRequest,
    requestDeserialize: deserialize_integration_api_EmbeddingRequest,
    responseSerialize: serialize_integration_api_EmbeddingResponse,
    responseDeserialize: deserialize_integration_api_EmbeddingResponse,
  },
  reranking: {
    path: '/integration_api.VoyageAiService/Reranking',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.RerankingRequest,
    responseType: integration$api_pb.RerankingResponse,
    requestSerialize: serialize_integration_api_RerankingRequest,
    requestDeserialize: deserialize_integration_api_RerankingRequest,
    responseSerialize: serialize_integration_api_RerankingResponse,
    responseDeserialize: deserialize_integration_api_RerankingResponse,
  },
  verifyCredential: {
    path: '/integration_api.VoyageAiService/VerifyCredential',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.VerifyCredentialRequest,
    responseType: integration$api_pb.VerifyCredentialResponse,
    requestSerialize: serialize_integration_api_VerifyCredentialRequest,
    requestDeserialize: deserialize_integration_api_VerifyCredentialRequest,
    responseSerialize: serialize_integration_api_VerifyCredentialResponse,
    responseDeserialize: deserialize_integration_api_VerifyCredentialResponse,
  },
};

exports.VoyageAiServiceClient = grpc.makeGenericClientConstructor(VoyageAiServiceService, 'VoyageAiService');
