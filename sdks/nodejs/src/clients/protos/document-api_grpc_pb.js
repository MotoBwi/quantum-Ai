// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var document$api_pb = require('./document-api_pb.js');

function serialize_document_api_IndexKnowledgeDocumentRequest(arg) {
  if (!(arg instanceof document$api_pb.IndexKnowledgeDocumentRequest)) {
    throw new Error('Expected argument of type document_api.IndexKnowledgeDocumentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_document_api_IndexKnowledgeDocumentRequest(buffer_arg) {
  return document$api_pb.IndexKnowledgeDocumentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_document_api_IndexKnowledgeDocumentResponse(arg) {
  if (!(arg instanceof document$api_pb.IndexKnowledgeDocumentResponse)) {
    throw new Error('Expected argument of type document_api.IndexKnowledgeDocumentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_document_api_IndexKnowledgeDocumentResponse(buffer_arg) {
  return document$api_pb.IndexKnowledgeDocumentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var DocumentServiceService = exports.DocumentServiceService = {
  indexKnowledgeDocument: {
    path: '/document_api.DocumentService/IndexKnowledgeDocument',
    requestStream: false,
    responseStream: false,
    requestType: document$api_pb.IndexKnowledgeDocumentRequest,
    responseType: document$api_pb.IndexKnowledgeDocumentResponse,
    requestSerialize: serialize_document_api_IndexKnowledgeDocumentRequest,
    requestDeserialize: deserialize_document_api_IndexKnowledgeDocumentRequest,
    responseSerialize: serialize_document_api_IndexKnowledgeDocumentResponse,
    responseDeserialize: deserialize_document_api_IndexKnowledgeDocumentResponse,
  },
};

exports.DocumentServiceClient = grpc.makeGenericClientConstructor(DocumentServiceService, 'DocumentService');
