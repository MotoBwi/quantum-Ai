// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var knowledge$api_pb = require('./knowledge-api_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var common_pb = require('./common_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');

function serialize_BaseResponse(arg) {
  if (!(arg instanceof common_pb.BaseResponse)) {
    throw new Error('Expected argument of type BaseResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_BaseResponse(buffer_arg) {
  return common_pb.BaseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_knowledge_api_CreateKnowledgeDocumentRequest(arg) {
  if (!(arg instanceof knowledge$api_pb.CreateKnowledgeDocumentRequest)) {
    throw new Error('Expected argument of type knowledge_api.CreateKnowledgeDocumentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_knowledge_api_CreateKnowledgeDocumentRequest(buffer_arg) {
  return knowledge$api_pb.CreateKnowledgeDocumentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_knowledge_api_CreateKnowledgeDocumentResponse(arg) {
  if (!(arg instanceof knowledge$api_pb.CreateKnowledgeDocumentResponse)) {
    throw new Error('Expected argument of type knowledge_api.CreateKnowledgeDocumentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_knowledge_api_CreateKnowledgeDocumentResponse(buffer_arg) {
  return knowledge$api_pb.CreateKnowledgeDocumentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_knowledge_api_CreateKnowledgeRequest(arg) {
  if (!(arg instanceof knowledge$api_pb.CreateKnowledgeRequest)) {
    throw new Error('Expected argument of type knowledge_api.CreateKnowledgeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_knowledge_api_CreateKnowledgeRequest(buffer_arg) {
  return knowledge$api_pb.CreateKnowledgeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_knowledge_api_CreateKnowledgeResponse(arg) {
  if (!(arg instanceof knowledge$api_pb.CreateKnowledgeResponse)) {
    throw new Error('Expected argument of type knowledge_api.CreateKnowledgeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_knowledge_api_CreateKnowledgeResponse(buffer_arg) {
  return knowledge$api_pb.CreateKnowledgeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_knowledge_api_CreateKnowledgeTagRequest(arg) {
  if (!(arg instanceof knowledge$api_pb.CreateKnowledgeTagRequest)) {
    throw new Error('Expected argument of type knowledge_api.CreateKnowledgeTagRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_knowledge_api_CreateKnowledgeTagRequest(buffer_arg) {
  return knowledge$api_pb.CreateKnowledgeTagRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_knowledge_api_DeleteKnowledgeDocumentSegmentRequest(arg) {
  if (!(arg instanceof knowledge$api_pb.DeleteKnowledgeDocumentSegmentRequest)) {
    throw new Error('Expected argument of type knowledge_api.DeleteKnowledgeDocumentSegmentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_knowledge_api_DeleteKnowledgeDocumentSegmentRequest(buffer_arg) {
  return knowledge$api_pb.DeleteKnowledgeDocumentSegmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_knowledge_api_GetAllKnowledgeDocumentRequest(arg) {
  if (!(arg instanceof knowledge$api_pb.GetAllKnowledgeDocumentRequest)) {
    throw new Error('Expected argument of type knowledge_api.GetAllKnowledgeDocumentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_knowledge_api_GetAllKnowledgeDocumentRequest(buffer_arg) {
  return knowledge$api_pb.GetAllKnowledgeDocumentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_knowledge_api_GetAllKnowledgeDocumentResponse(arg) {
  if (!(arg instanceof knowledge$api_pb.GetAllKnowledgeDocumentResponse)) {
    throw new Error('Expected argument of type knowledge_api.GetAllKnowledgeDocumentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_knowledge_api_GetAllKnowledgeDocumentResponse(buffer_arg) {
  return knowledge$api_pb.GetAllKnowledgeDocumentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_knowledge_api_GetAllKnowledgeDocumentSegmentRequest(arg) {
  if (!(arg instanceof knowledge$api_pb.GetAllKnowledgeDocumentSegmentRequest)) {
    throw new Error('Expected argument of type knowledge_api.GetAllKnowledgeDocumentSegmentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_knowledge_api_GetAllKnowledgeDocumentSegmentRequest(buffer_arg) {
  return knowledge$api_pb.GetAllKnowledgeDocumentSegmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_knowledge_api_GetAllKnowledgeDocumentSegmentResponse(arg) {
  if (!(arg instanceof knowledge$api_pb.GetAllKnowledgeDocumentSegmentResponse)) {
    throw new Error('Expected argument of type knowledge_api.GetAllKnowledgeDocumentSegmentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_knowledge_api_GetAllKnowledgeDocumentSegmentResponse(buffer_arg) {
  return knowledge$api_pb.GetAllKnowledgeDocumentSegmentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_knowledge_api_GetAllKnowledgeLogRequest(arg) {
  if (!(arg instanceof knowledge$api_pb.GetAllKnowledgeLogRequest)) {
    throw new Error('Expected argument of type knowledge_api.GetAllKnowledgeLogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_knowledge_api_GetAllKnowledgeLogRequest(buffer_arg) {
  return knowledge$api_pb.GetAllKnowledgeLogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_knowledge_api_GetAllKnowledgeLogResponse(arg) {
  if (!(arg instanceof knowledge$api_pb.GetAllKnowledgeLogResponse)) {
    throw new Error('Expected argument of type knowledge_api.GetAllKnowledgeLogResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_knowledge_api_GetAllKnowledgeLogResponse(buffer_arg) {
  return knowledge$api_pb.GetAllKnowledgeLogResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_knowledge_api_GetAllKnowledgeRequest(arg) {
  if (!(arg instanceof knowledge$api_pb.GetAllKnowledgeRequest)) {
    throw new Error('Expected argument of type knowledge_api.GetAllKnowledgeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_knowledge_api_GetAllKnowledgeRequest(buffer_arg) {
  return knowledge$api_pb.GetAllKnowledgeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_knowledge_api_GetAllKnowledgeResponse(arg) {
  if (!(arg instanceof knowledge$api_pb.GetAllKnowledgeResponse)) {
    throw new Error('Expected argument of type knowledge_api.GetAllKnowledgeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_knowledge_api_GetAllKnowledgeResponse(buffer_arg) {
  return knowledge$api_pb.GetAllKnowledgeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_knowledge_api_GetKnowledgeLogRequest(arg) {
  if (!(arg instanceof knowledge$api_pb.GetKnowledgeLogRequest)) {
    throw new Error('Expected argument of type knowledge_api.GetKnowledgeLogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_knowledge_api_GetKnowledgeLogRequest(buffer_arg) {
  return knowledge$api_pb.GetKnowledgeLogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_knowledge_api_GetKnowledgeLogResponse(arg) {
  if (!(arg instanceof knowledge$api_pb.GetKnowledgeLogResponse)) {
    throw new Error('Expected argument of type knowledge_api.GetKnowledgeLogResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_knowledge_api_GetKnowledgeLogResponse(buffer_arg) {
  return knowledge$api_pb.GetKnowledgeLogResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_knowledge_api_GetKnowledgeRequest(arg) {
  if (!(arg instanceof knowledge$api_pb.GetKnowledgeRequest)) {
    throw new Error('Expected argument of type knowledge_api.GetKnowledgeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_knowledge_api_GetKnowledgeRequest(buffer_arg) {
  return knowledge$api_pb.GetKnowledgeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_knowledge_api_GetKnowledgeResponse(arg) {
  if (!(arg instanceof knowledge$api_pb.GetKnowledgeResponse)) {
    throw new Error('Expected argument of type knowledge_api.GetKnowledgeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_knowledge_api_GetKnowledgeResponse(buffer_arg) {
  return knowledge$api_pb.GetKnowledgeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_knowledge_api_UpdateKnowledgeDetailRequest(arg) {
  if (!(arg instanceof knowledge$api_pb.UpdateKnowledgeDetailRequest)) {
    throw new Error('Expected argument of type knowledge_api.UpdateKnowledgeDetailRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_knowledge_api_UpdateKnowledgeDetailRequest(buffer_arg) {
  return knowledge$api_pb.UpdateKnowledgeDetailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_knowledge_api_UpdateKnowledgeDocumentSegmentRequest(arg) {
  if (!(arg instanceof knowledge$api_pb.UpdateKnowledgeDocumentSegmentRequest)) {
    throw new Error('Expected argument of type knowledge_api.UpdateKnowledgeDocumentSegmentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_knowledge_api_UpdateKnowledgeDocumentSegmentRequest(buffer_arg) {
  return knowledge$api_pb.UpdateKnowledgeDocumentSegmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var KnowledgeServiceService = exports.KnowledgeServiceService = {
  getKnowledge: {
    path: '/knowledge_api.KnowledgeService/GetKnowledge',
    requestStream: false,
    responseStream: false,
    requestType: knowledge$api_pb.GetKnowledgeRequest,
    responseType: knowledge$api_pb.GetKnowledgeResponse,
    requestSerialize: serialize_knowledge_api_GetKnowledgeRequest,
    requestDeserialize: deserialize_knowledge_api_GetKnowledgeRequest,
    responseSerialize: serialize_knowledge_api_GetKnowledgeResponse,
    responseDeserialize: deserialize_knowledge_api_GetKnowledgeResponse,
  },
  getAllKnowledge: {
    path: '/knowledge_api.KnowledgeService/GetAllKnowledge',
    requestStream: false,
    responseStream: false,
    requestType: knowledge$api_pb.GetAllKnowledgeRequest,
    responseType: knowledge$api_pb.GetAllKnowledgeResponse,
    requestSerialize: serialize_knowledge_api_GetAllKnowledgeRequest,
    requestDeserialize: deserialize_knowledge_api_GetAllKnowledgeRequest,
    responseSerialize: serialize_knowledge_api_GetAllKnowledgeResponse,
    responseDeserialize: deserialize_knowledge_api_GetAllKnowledgeResponse,
  },
  createKnowledge: {
    path: '/knowledge_api.KnowledgeService/CreateKnowledge',
    requestStream: false,
    responseStream: false,
    requestType: knowledge$api_pb.CreateKnowledgeRequest,
    responseType: knowledge$api_pb.CreateKnowledgeResponse,
    requestSerialize: serialize_knowledge_api_CreateKnowledgeRequest,
    requestDeserialize: deserialize_knowledge_api_CreateKnowledgeRequest,
    responseSerialize: serialize_knowledge_api_CreateKnowledgeResponse,
    responseDeserialize: deserialize_knowledge_api_CreateKnowledgeResponse,
  },
  createKnowledgeTag: {
    path: '/knowledge_api.KnowledgeService/CreateKnowledgeTag',
    requestStream: false,
    responseStream: false,
    requestType: knowledge$api_pb.CreateKnowledgeTagRequest,
    responseType: knowledge$api_pb.GetKnowledgeResponse,
    requestSerialize: serialize_knowledge_api_CreateKnowledgeTagRequest,
    requestDeserialize: deserialize_knowledge_api_CreateKnowledgeTagRequest,
    responseSerialize: serialize_knowledge_api_GetKnowledgeResponse,
    responseDeserialize: deserialize_knowledge_api_GetKnowledgeResponse,
  },
  createKnowledgeDocument: {
    path: '/knowledge_api.KnowledgeService/CreateKnowledgeDocument',
    requestStream: false,
    responseStream: false,
    requestType: knowledge$api_pb.CreateKnowledgeDocumentRequest,
    responseType: knowledge$api_pb.CreateKnowledgeDocumentResponse,
    requestSerialize: serialize_knowledge_api_CreateKnowledgeDocumentRequest,
    requestDeserialize: deserialize_knowledge_api_CreateKnowledgeDocumentRequest,
    responseSerialize: serialize_knowledge_api_CreateKnowledgeDocumentResponse,
    responseDeserialize: deserialize_knowledge_api_CreateKnowledgeDocumentResponse,
  },
  getAllKnowledgeDocument: {
    path: '/knowledge_api.KnowledgeService/GetAllKnowledgeDocument',
    requestStream: false,
    responseStream: false,
    requestType: knowledge$api_pb.GetAllKnowledgeDocumentRequest,
    responseType: knowledge$api_pb.GetAllKnowledgeDocumentResponse,
    requestSerialize: serialize_knowledge_api_GetAllKnowledgeDocumentRequest,
    requestDeserialize: deserialize_knowledge_api_GetAllKnowledgeDocumentRequest,
    responseSerialize: serialize_knowledge_api_GetAllKnowledgeDocumentResponse,
    responseDeserialize: deserialize_knowledge_api_GetAllKnowledgeDocumentResponse,
  },
  getAllKnowledgeDocumentSegment: {
    path: '/knowledge_api.KnowledgeService/GetAllKnowledgeDocumentSegment',
    requestStream: false,
    responseStream: false,
    requestType: knowledge$api_pb.GetAllKnowledgeDocumentSegmentRequest,
    responseType: knowledge$api_pb.GetAllKnowledgeDocumentSegmentResponse,
    requestSerialize: serialize_knowledge_api_GetAllKnowledgeDocumentSegmentRequest,
    requestDeserialize: deserialize_knowledge_api_GetAllKnowledgeDocumentSegmentRequest,
    responseSerialize: serialize_knowledge_api_GetAllKnowledgeDocumentSegmentResponse,
    responseDeserialize: deserialize_knowledge_api_GetAllKnowledgeDocumentSegmentResponse,
  },
  updateKnowledgeDetail: {
    path: '/knowledge_api.KnowledgeService/UpdateKnowledgeDetail',
    requestStream: false,
    responseStream: false,
    requestType: knowledge$api_pb.UpdateKnowledgeDetailRequest,
    responseType: knowledge$api_pb.GetKnowledgeResponse,
    requestSerialize: serialize_knowledge_api_UpdateKnowledgeDetailRequest,
    requestDeserialize: deserialize_knowledge_api_UpdateKnowledgeDetailRequest,
    responseSerialize: serialize_knowledge_api_GetKnowledgeResponse,
    responseDeserialize: deserialize_knowledge_api_GetKnowledgeResponse,
  },
  //
updateKnowledgeDocumentSegment: {
    path: '/knowledge_api.KnowledgeService/UpdateKnowledgeDocumentSegment',
    requestStream: false,
    responseStream: false,
    requestType: knowledge$api_pb.UpdateKnowledgeDocumentSegmentRequest,
    responseType: common_pb.BaseResponse,
    requestSerialize: serialize_knowledge_api_UpdateKnowledgeDocumentSegmentRequest,
    requestDeserialize: deserialize_knowledge_api_UpdateKnowledgeDocumentSegmentRequest,
    responseSerialize: serialize_BaseResponse,
    responseDeserialize: deserialize_BaseResponse,
  },
  deleteKnowledgeDocumentSegment: {
    path: '/knowledge_api.KnowledgeService/DeleteKnowledgeDocumentSegment',
    requestStream: false,
    responseStream: false,
    requestType: knowledge$api_pb.DeleteKnowledgeDocumentSegmentRequest,
    responseType: common_pb.BaseResponse,
    requestSerialize: serialize_knowledge_api_DeleteKnowledgeDocumentSegmentRequest,
    requestDeserialize: deserialize_knowledge_api_DeleteKnowledgeDocumentSegmentRequest,
    responseSerialize: serialize_BaseResponse,
    responseDeserialize: deserialize_BaseResponse,
  },
  // knowledge log retrieval log
getAllKnowledgeLog: {
    path: '/knowledge_api.KnowledgeService/GetAllKnowledgeLog',
    requestStream: false,
    responseStream: false,
    requestType: knowledge$api_pb.GetAllKnowledgeLogRequest,
    responseType: knowledge$api_pb.GetAllKnowledgeLogResponse,
    requestSerialize: serialize_knowledge_api_GetAllKnowledgeLogRequest,
    requestDeserialize: deserialize_knowledge_api_GetAllKnowledgeLogRequest,
    responseSerialize: serialize_knowledge_api_GetAllKnowledgeLogResponse,
    responseDeserialize: deserialize_knowledge_api_GetAllKnowledgeLogResponse,
  },
  getKnowledgeLog: {
    path: '/knowledge_api.KnowledgeService/GetKnowledgeLog',
    requestStream: false,
    responseStream: false,
    requestType: knowledge$api_pb.GetKnowledgeLogRequest,
    responseType: knowledge$api_pb.GetKnowledgeLogResponse,
    requestSerialize: serialize_knowledge_api_GetKnowledgeLogRequest,
    requestDeserialize: deserialize_knowledge_api_GetKnowledgeLogRequest,
    responseSerialize: serialize_knowledge_api_GetKnowledgeLogResponse,
    responseDeserialize: deserialize_knowledge_api_GetKnowledgeLogResponse,
  },
};

exports.KnowledgeServiceClient = grpc.makeGenericClientConstructor(KnowledgeServiceService, 'KnowledgeService');
