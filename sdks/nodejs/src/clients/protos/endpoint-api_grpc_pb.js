// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var endpoint$api_pb = require('./endpoint-api_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var common_pb = require('./common_pb.js');

function serialize_BaseResponse(arg) {
  if (!(arg instanceof common_pb.BaseResponse)) {
    throw new Error('Expected argument of type BaseResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_BaseResponse(buffer_arg) {
  return common_pb.BaseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_endpoint_api_CreateEndpointCacheConfigurationRequest(arg) {
  if (!(arg instanceof endpoint$api_pb.CreateEndpointCacheConfigurationRequest)) {
    throw new Error('Expected argument of type endpoint_api.CreateEndpointCacheConfigurationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_endpoint_api_CreateEndpointCacheConfigurationRequest(buffer_arg) {
  return endpoint$api_pb.CreateEndpointCacheConfigurationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_endpoint_api_CreateEndpointCacheConfigurationResponse(arg) {
  if (!(arg instanceof endpoint$api_pb.CreateEndpointCacheConfigurationResponse)) {
    throw new Error('Expected argument of type endpoint_api.CreateEndpointCacheConfigurationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_endpoint_api_CreateEndpointCacheConfigurationResponse(buffer_arg) {
  return endpoint$api_pb.CreateEndpointCacheConfigurationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_endpoint_api_CreateEndpointProviderModelRequest(arg) {
  if (!(arg instanceof endpoint$api_pb.CreateEndpointProviderModelRequest)) {
    throw new Error('Expected argument of type endpoint_api.CreateEndpointProviderModelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_endpoint_api_CreateEndpointProviderModelRequest(buffer_arg) {
  return endpoint$api_pb.CreateEndpointProviderModelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_endpoint_api_CreateEndpointProviderModelResponse(arg) {
  if (!(arg instanceof endpoint$api_pb.CreateEndpointProviderModelResponse)) {
    throw new Error('Expected argument of type endpoint_api.CreateEndpointProviderModelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_endpoint_api_CreateEndpointProviderModelResponse(buffer_arg) {
  return endpoint$api_pb.CreateEndpointProviderModelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_endpoint_api_CreateEndpointRequest(arg) {
  if (!(arg instanceof endpoint$api_pb.CreateEndpointRequest)) {
    throw new Error('Expected argument of type endpoint_api.CreateEndpointRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_endpoint_api_CreateEndpointRequest(buffer_arg) {
  return endpoint$api_pb.CreateEndpointRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_endpoint_api_CreateEndpointResponse(arg) {
  if (!(arg instanceof endpoint$api_pb.CreateEndpointResponse)) {
    throw new Error('Expected argument of type endpoint_api.CreateEndpointResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_endpoint_api_CreateEndpointResponse(buffer_arg) {
  return endpoint$api_pb.CreateEndpointResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_endpoint_api_CreateEndpointRetryConfigurationRequest(arg) {
  if (!(arg instanceof endpoint$api_pb.CreateEndpointRetryConfigurationRequest)) {
    throw new Error('Expected argument of type endpoint_api.CreateEndpointRetryConfigurationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_endpoint_api_CreateEndpointRetryConfigurationRequest(buffer_arg) {
  return endpoint$api_pb.CreateEndpointRetryConfigurationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_endpoint_api_CreateEndpointRetryConfigurationResponse(arg) {
  if (!(arg instanceof endpoint$api_pb.CreateEndpointRetryConfigurationResponse)) {
    throw new Error('Expected argument of type endpoint_api.CreateEndpointRetryConfigurationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_endpoint_api_CreateEndpointRetryConfigurationResponse(buffer_arg) {
  return endpoint$api_pb.CreateEndpointRetryConfigurationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_endpoint_api_CreateEndpointTagRequest(arg) {
  if (!(arg instanceof endpoint$api_pb.CreateEndpointTagRequest)) {
    throw new Error('Expected argument of type endpoint_api.CreateEndpointTagRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_endpoint_api_CreateEndpointTagRequest(buffer_arg) {
  return endpoint$api_pb.CreateEndpointTagRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_endpoint_api_ForkEndpointRequest(arg) {
  if (!(arg instanceof endpoint$api_pb.ForkEndpointRequest)) {
    throw new Error('Expected argument of type endpoint_api.ForkEndpointRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_endpoint_api_ForkEndpointRequest(buffer_arg) {
  return endpoint$api_pb.ForkEndpointRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_endpoint_api_GetAllEndpointLogRequest(arg) {
  if (!(arg instanceof endpoint$api_pb.GetAllEndpointLogRequest)) {
    throw new Error('Expected argument of type endpoint_api.GetAllEndpointLogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_endpoint_api_GetAllEndpointLogRequest(buffer_arg) {
  return endpoint$api_pb.GetAllEndpointLogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_endpoint_api_GetAllEndpointLogResponse(arg) {
  if (!(arg instanceof endpoint$api_pb.GetAllEndpointLogResponse)) {
    throw new Error('Expected argument of type endpoint_api.GetAllEndpointLogResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_endpoint_api_GetAllEndpointLogResponse(buffer_arg) {
  return endpoint$api_pb.GetAllEndpointLogResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_endpoint_api_GetAllEndpointProviderModelRequest(arg) {
  if (!(arg instanceof endpoint$api_pb.GetAllEndpointProviderModelRequest)) {
    throw new Error('Expected argument of type endpoint_api.GetAllEndpointProviderModelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_endpoint_api_GetAllEndpointProviderModelRequest(buffer_arg) {
  return endpoint$api_pb.GetAllEndpointProviderModelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_endpoint_api_GetAllEndpointProviderModelResponse(arg) {
  if (!(arg instanceof endpoint$api_pb.GetAllEndpointProviderModelResponse)) {
    throw new Error('Expected argument of type endpoint_api.GetAllEndpointProviderModelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_endpoint_api_GetAllEndpointProviderModelResponse(buffer_arg) {
  return endpoint$api_pb.GetAllEndpointProviderModelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_endpoint_api_GetAllEndpointRequest(arg) {
  if (!(arg instanceof endpoint$api_pb.GetAllEndpointRequest)) {
    throw new Error('Expected argument of type endpoint_api.GetAllEndpointRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_endpoint_api_GetAllEndpointRequest(buffer_arg) {
  return endpoint$api_pb.GetAllEndpointRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_endpoint_api_GetAllEndpointResponse(arg) {
  if (!(arg instanceof endpoint$api_pb.GetAllEndpointResponse)) {
    throw new Error('Expected argument of type endpoint_api.GetAllEndpointResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_endpoint_api_GetAllEndpointResponse(buffer_arg) {
  return endpoint$api_pb.GetAllEndpointResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_endpoint_api_GetEndpointLogRequest(arg) {
  if (!(arg instanceof endpoint$api_pb.GetEndpointLogRequest)) {
    throw new Error('Expected argument of type endpoint_api.GetEndpointLogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_endpoint_api_GetEndpointLogRequest(buffer_arg) {
  return endpoint$api_pb.GetEndpointLogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_endpoint_api_GetEndpointLogResponse(arg) {
  if (!(arg instanceof endpoint$api_pb.GetEndpointLogResponse)) {
    throw new Error('Expected argument of type endpoint_api.GetEndpointLogResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_endpoint_api_GetEndpointLogResponse(buffer_arg) {
  return endpoint$api_pb.GetEndpointLogResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_endpoint_api_GetEndpointRequest(arg) {
  if (!(arg instanceof endpoint$api_pb.GetEndpointRequest)) {
    throw new Error('Expected argument of type endpoint_api.GetEndpointRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_endpoint_api_GetEndpointRequest(buffer_arg) {
  return endpoint$api_pb.GetEndpointRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_endpoint_api_GetEndpointResponse(arg) {
  if (!(arg instanceof endpoint$api_pb.GetEndpointResponse)) {
    throw new Error('Expected argument of type endpoint_api.GetEndpointResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_endpoint_api_GetEndpointResponse(buffer_arg) {
  return endpoint$api_pb.GetEndpointResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_endpoint_api_UpdateEndpointDetailRequest(arg) {
  if (!(arg instanceof endpoint$api_pb.UpdateEndpointDetailRequest)) {
    throw new Error('Expected argument of type endpoint_api.UpdateEndpointDetailRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_endpoint_api_UpdateEndpointDetailRequest(buffer_arg) {
  return endpoint$api_pb.UpdateEndpointDetailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_endpoint_api_UpdateEndpointVersionRequest(arg) {
  if (!(arg instanceof endpoint$api_pb.UpdateEndpointVersionRequest)) {
    throw new Error('Expected argument of type endpoint_api.UpdateEndpointVersionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_endpoint_api_UpdateEndpointVersionRequest(buffer_arg) {
  return endpoint$api_pb.UpdateEndpointVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_endpoint_api_UpdateEndpointVersionResponse(arg) {
  if (!(arg instanceof endpoint$api_pb.UpdateEndpointVersionResponse)) {
    throw new Error('Expected argument of type endpoint_api.UpdateEndpointVersionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_endpoint_api_UpdateEndpointVersionResponse(buffer_arg) {
  return endpoint$api_pb.UpdateEndpointVersionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var EndpointServiceService = exports.EndpointServiceService = {
  getEndpoint: {
    path: '/endpoint_api.EndpointService/GetEndpoint',
    requestStream: false,
    responseStream: false,
    requestType: endpoint$api_pb.GetEndpointRequest,
    responseType: endpoint$api_pb.GetEndpointResponse,
    requestSerialize: serialize_endpoint_api_GetEndpointRequest,
    requestDeserialize: deserialize_endpoint_api_GetEndpointRequest,
    responseSerialize: serialize_endpoint_api_GetEndpointResponse,
    responseDeserialize: deserialize_endpoint_api_GetEndpointResponse,
  },
  getAllEndpoint: {
    path: '/endpoint_api.EndpointService/GetAllEndpoint',
    requestStream: false,
    responseStream: false,
    requestType: endpoint$api_pb.GetAllEndpointRequest,
    responseType: endpoint$api_pb.GetAllEndpointResponse,
    requestSerialize: serialize_endpoint_api_GetAllEndpointRequest,
    requestDeserialize: deserialize_endpoint_api_GetAllEndpointRequest,
    responseSerialize: serialize_endpoint_api_GetAllEndpointResponse,
    responseDeserialize: deserialize_endpoint_api_GetAllEndpointResponse,
  },
  getAllEndpointProviderModel: {
    path: '/endpoint_api.EndpointService/GetAllEndpointProviderModel',
    requestStream: false,
    responseStream: false,
    requestType: endpoint$api_pb.GetAllEndpointProviderModelRequest,
    responseType: endpoint$api_pb.GetAllEndpointProviderModelResponse,
    requestSerialize: serialize_endpoint_api_GetAllEndpointProviderModelRequest,
    requestDeserialize: deserialize_endpoint_api_GetAllEndpointProviderModelRequest,
    responseSerialize: serialize_endpoint_api_GetAllEndpointProviderModelResponse,
    responseDeserialize: deserialize_endpoint_api_GetAllEndpointProviderModelResponse,
  },
  updateEndpointVersion: {
    path: '/endpoint_api.EndpointService/UpdateEndpointVersion',
    requestStream: false,
    responseStream: false,
    requestType: endpoint$api_pb.UpdateEndpointVersionRequest,
    responseType: endpoint$api_pb.UpdateEndpointVersionResponse,
    requestSerialize: serialize_endpoint_api_UpdateEndpointVersionRequest,
    requestDeserialize: deserialize_endpoint_api_UpdateEndpointVersionRequest,
    responseSerialize: serialize_endpoint_api_UpdateEndpointVersionResponse,
    responseDeserialize: deserialize_endpoint_api_UpdateEndpointVersionResponse,
  },
  //
createEndpoint: {
    path: '/endpoint_api.EndpointService/CreateEndpoint',
    requestStream: false,
    responseStream: false,
    requestType: endpoint$api_pb.CreateEndpointRequest,
    responseType: endpoint$api_pb.CreateEndpointResponse,
    requestSerialize: serialize_endpoint_api_CreateEndpointRequest,
    requestDeserialize: deserialize_endpoint_api_CreateEndpointRequest,
    responseSerialize: serialize_endpoint_api_CreateEndpointResponse,
    responseDeserialize: deserialize_endpoint_api_CreateEndpointResponse,
  },
  createEndpointProviderModel: {
    path: '/endpoint_api.EndpointService/CreateEndpointProviderModel',
    requestStream: false,
    responseStream: false,
    requestType: endpoint$api_pb.CreateEndpointProviderModelRequest,
    responseType: endpoint$api_pb.CreateEndpointProviderModelResponse,
    requestSerialize: serialize_endpoint_api_CreateEndpointProviderModelRequest,
    requestDeserialize: deserialize_endpoint_api_CreateEndpointProviderModelRequest,
    responseSerialize: serialize_endpoint_api_CreateEndpointProviderModelResponse,
    responseDeserialize: deserialize_endpoint_api_CreateEndpointProviderModelResponse,
  },
  //   next gen
createEndpointCacheConfiguration: {
    path: '/endpoint_api.EndpointService/CreateEndpointCacheConfiguration',
    requestStream: false,
    responseStream: false,
    requestType: endpoint$api_pb.CreateEndpointCacheConfigurationRequest,
    responseType: endpoint$api_pb.CreateEndpointCacheConfigurationResponse,
    requestSerialize: serialize_endpoint_api_CreateEndpointCacheConfigurationRequest,
    requestDeserialize: deserialize_endpoint_api_CreateEndpointCacheConfigurationRequest,
    responseSerialize: serialize_endpoint_api_CreateEndpointCacheConfigurationResponse,
    responseDeserialize: deserialize_endpoint_api_CreateEndpointCacheConfigurationResponse,
  },
  createEndpointRetryConfiguration: {
    path: '/endpoint_api.EndpointService/CreateEndpointRetryConfiguration',
    requestStream: false,
    responseStream: false,
    requestType: endpoint$api_pb.CreateEndpointRetryConfigurationRequest,
    responseType: endpoint$api_pb.CreateEndpointRetryConfigurationResponse,
    requestSerialize: serialize_endpoint_api_CreateEndpointRetryConfigurationRequest,
    requestDeserialize: deserialize_endpoint_api_CreateEndpointRetryConfigurationRequest,
    responseSerialize: serialize_endpoint_api_CreateEndpointRetryConfigurationResponse,
    responseDeserialize: deserialize_endpoint_api_CreateEndpointRetryConfigurationResponse,
  },
  createEndpointTag: {
    path: '/endpoint_api.EndpointService/CreateEndpointTag',
    requestStream: false,
    responseStream: false,
    requestType: endpoint$api_pb.CreateEndpointTagRequest,
    responseType: endpoint$api_pb.GetEndpointResponse,
    requestSerialize: serialize_endpoint_api_CreateEndpointTagRequest,
    requestDeserialize: deserialize_endpoint_api_CreateEndpointTagRequest,
    responseSerialize: serialize_endpoint_api_GetEndpointResponse,
    responseDeserialize: deserialize_endpoint_api_GetEndpointResponse,
  },
  forkEndpoint: {
    path: '/endpoint_api.EndpointService/ForkEndpoint',
    requestStream: false,
    responseStream: false,
    requestType: endpoint$api_pb.ForkEndpointRequest,
    responseType: common_pb.BaseResponse,
    requestSerialize: serialize_endpoint_api_ForkEndpointRequest,
    requestDeserialize: deserialize_endpoint_api_ForkEndpointRequest,
    responseSerialize: serialize_BaseResponse,
    responseDeserialize: deserialize_BaseResponse,
  },
  updateEndpointDetail: {
    path: '/endpoint_api.EndpointService/UpdateEndpointDetail',
    requestStream: false,
    responseStream: false,
    requestType: endpoint$api_pb.UpdateEndpointDetailRequest,
    responseType: endpoint$api_pb.GetEndpointResponse,
    requestSerialize: serialize_endpoint_api_UpdateEndpointDetailRequest,
    requestDeserialize: deserialize_endpoint_api_UpdateEndpointDetailRequest,
    responseSerialize: serialize_endpoint_api_GetEndpointResponse,
    responseDeserialize: deserialize_endpoint_api_GetEndpointResponse,
  },
  getAllEndpointLog: {
    path: '/endpoint_api.EndpointService/GetAllEndpointLog',
    requestStream: false,
    responseStream: false,
    requestType: endpoint$api_pb.GetAllEndpointLogRequest,
    responseType: endpoint$api_pb.GetAllEndpointLogResponse,
    requestSerialize: serialize_endpoint_api_GetAllEndpointLogRequest,
    requestDeserialize: deserialize_endpoint_api_GetAllEndpointLogRequest,
    responseSerialize: serialize_endpoint_api_GetAllEndpointLogResponse,
    responseDeserialize: deserialize_endpoint_api_GetAllEndpointLogResponse,
  },
  getEndpointLog: {
    path: '/endpoint_api.EndpointService/GetEndpointLog',
    requestStream: false,
    responseStream: false,
    requestType: endpoint$api_pb.GetEndpointLogRequest,
    responseType: endpoint$api_pb.GetEndpointLogResponse,
    requestSerialize: serialize_endpoint_api_GetEndpointLogRequest,
    requestDeserialize: deserialize_endpoint_api_GetEndpointLogRequest,
    responseSerialize: serialize_endpoint_api_GetEndpointLogResponse,
    responseDeserialize: deserialize_endpoint_api_GetEndpointLogResponse,
  },
};

exports.EndpointServiceClient = grpc.makeGenericClientConstructor(EndpointServiceService, 'EndpointService');
