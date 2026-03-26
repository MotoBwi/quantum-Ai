// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var vault$api_pb = require('./vault-api_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var common_pb = require('./common_pb.js');

function serialize_vault_api_CreateProviderCredentialRequest(arg) {
  if (!(arg instanceof vault$api_pb.CreateProviderCredentialRequest)) {
    throw new Error('Expected argument of type vault_api.CreateProviderCredentialRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vault_api_CreateProviderCredentialRequest(buffer_arg) {
  return vault$api_pb.CreateProviderCredentialRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_api_DeleteCredentialRequest(arg) {
  if (!(arg instanceof vault$api_pb.DeleteCredentialRequest)) {
    throw new Error('Expected argument of type vault_api.DeleteCredentialRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vault_api_DeleteCredentialRequest(buffer_arg) {
  return vault$api_pb.DeleteCredentialRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_api_GetAllOrganizationCredentialRequest(arg) {
  if (!(arg instanceof vault$api_pb.GetAllOrganizationCredentialRequest)) {
    throw new Error('Expected argument of type vault_api.GetAllOrganizationCredentialRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vault_api_GetAllOrganizationCredentialRequest(buffer_arg) {
  return vault$api_pb.GetAllOrganizationCredentialRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_api_GetAllOrganizationCredentialResponse(arg) {
  if (!(arg instanceof vault$api_pb.GetAllOrganizationCredentialResponse)) {
    throw new Error('Expected argument of type vault_api.GetAllOrganizationCredentialResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vault_api_GetAllOrganizationCredentialResponse(buffer_arg) {
  return vault$api_pb.GetAllOrganizationCredentialResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_api_GetCredentialRequest(arg) {
  if (!(arg instanceof vault$api_pb.GetCredentialRequest)) {
    throw new Error('Expected argument of type vault_api.GetCredentialRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vault_api_GetCredentialRequest(buffer_arg) {
  return vault$api_pb.GetCredentialRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_api_GetCredentialResponse(arg) {
  if (!(arg instanceof vault$api_pb.GetCredentialResponse)) {
    throw new Error('Expected argument of type vault_api.GetCredentialResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vault_api_GetCredentialResponse(buffer_arg) {
  return vault$api_pb.GetCredentialResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var VaultServiceService = exports.VaultServiceService = {
  createProviderCredential: {
    path: '/vault_api.VaultService/CreateProviderCredential',
    requestStream: false,
    responseStream: false,
    requestType: vault$api_pb.CreateProviderCredentialRequest,
    responseType: vault$api_pb.GetCredentialResponse,
    requestSerialize: serialize_vault_api_CreateProviderCredentialRequest,
    requestDeserialize: deserialize_vault_api_CreateProviderCredentialRequest,
    responseSerialize: serialize_vault_api_GetCredentialResponse,
    responseDeserialize: deserialize_vault_api_GetCredentialResponse,
  },
  getAllOrganizationCredential: {
    path: '/vault_api.VaultService/GetAllOrganizationCredential',
    requestStream: false,
    responseStream: false,
    requestType: vault$api_pb.GetAllOrganizationCredentialRequest,
    responseType: vault$api_pb.GetAllOrganizationCredentialResponse,
    requestSerialize: serialize_vault_api_GetAllOrganizationCredentialRequest,
    requestDeserialize: deserialize_vault_api_GetAllOrganizationCredentialRequest,
    responseSerialize: serialize_vault_api_GetAllOrganizationCredentialResponse,
    responseDeserialize: deserialize_vault_api_GetAllOrganizationCredentialResponse,
  },
  deleteCredential: {
    path: '/vault_api.VaultService/DeleteCredential',
    requestStream: false,
    responseStream: false,
    requestType: vault$api_pb.DeleteCredentialRequest,
    responseType: vault$api_pb.GetCredentialResponse,
    requestSerialize: serialize_vault_api_DeleteCredentialRequest,
    requestDeserialize: deserialize_vault_api_DeleteCredentialRequest,
    responseSerialize: serialize_vault_api_GetCredentialResponse,
    responseDeserialize: deserialize_vault_api_GetCredentialResponse,
  },
  getCredential: {
    path: '/vault_api.VaultService/GetCredential',
    requestStream: false,
    responseStream: false,
    requestType: vault$api_pb.GetCredentialRequest,
    responseType: vault$api_pb.GetCredentialResponse,
    requestSerialize: serialize_vault_api_GetCredentialRequest,
    requestDeserialize: deserialize_vault_api_GetCredentialRequest,
    responseSerialize: serialize_vault_api_GetCredentialResponse,
    responseDeserialize: deserialize_vault_api_GetCredentialResponse,
  },
  getOauth2Credential: {
    path: '/vault_api.VaultService/GetOauth2Credential',
    requestStream: false,
    responseStream: false,
    requestType: vault$api_pb.GetCredentialRequest,
    responseType: vault$api_pb.GetCredentialResponse,
    requestSerialize: serialize_vault_api_GetCredentialRequest,
    requestDeserialize: deserialize_vault_api_GetCredentialRequest,
    responseSerialize: serialize_vault_api_GetCredentialResponse,
    responseDeserialize: deserialize_vault_api_GetCredentialResponse,
  },
};

exports.VaultServiceClient = grpc.makeGenericClientConstructor(VaultServiceService, 'VaultService');
