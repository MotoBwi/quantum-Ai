// package: endpoint_api
// file: endpoint-api.proto

var endpoint_api_pb = require("./endpoint-api_pb");
var common_pb = require("./common_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var EndpointService = (function () {
  function EndpointService() {}
  EndpointService.serviceName = "endpoint_api.EndpointService";
  return EndpointService;
}());

EndpointService.GetEndpoint = {
  methodName: "GetEndpoint",
  service: EndpointService,
  requestStream: false,
  responseStream: false,
  requestType: endpoint_api_pb.GetEndpointRequest,
  responseType: endpoint_api_pb.GetEndpointResponse
};

EndpointService.GetAllEndpoint = {
  methodName: "GetAllEndpoint",
  service: EndpointService,
  requestStream: false,
  responseStream: false,
  requestType: endpoint_api_pb.GetAllEndpointRequest,
  responseType: endpoint_api_pb.GetAllEndpointResponse
};

EndpointService.GetAllEndpointProviderModel = {
  methodName: "GetAllEndpointProviderModel",
  service: EndpointService,
  requestStream: false,
  responseStream: false,
  requestType: endpoint_api_pb.GetAllEndpointProviderModelRequest,
  responseType: endpoint_api_pb.GetAllEndpointProviderModelResponse
};

EndpointService.UpdateEndpointVersion = {
  methodName: "UpdateEndpointVersion",
  service: EndpointService,
  requestStream: false,
  responseStream: false,
  requestType: endpoint_api_pb.UpdateEndpointVersionRequest,
  responseType: endpoint_api_pb.UpdateEndpointVersionResponse
};

EndpointService.CreateEndpoint = {
  methodName: "CreateEndpoint",
  service: EndpointService,
  requestStream: false,
  responseStream: false,
  requestType: endpoint_api_pb.CreateEndpointRequest,
  responseType: endpoint_api_pb.CreateEndpointResponse
};

EndpointService.CreateEndpointProviderModel = {
  methodName: "CreateEndpointProviderModel",
  service: EndpointService,
  requestStream: false,
  responseStream: false,
  requestType: endpoint_api_pb.CreateEndpointProviderModelRequest,
  responseType: endpoint_api_pb.CreateEndpointProviderModelResponse
};

EndpointService.CreateEndpointCacheConfiguration = {
  methodName: "CreateEndpointCacheConfiguration",
  service: EndpointService,
  requestStream: false,
  responseStream: false,
  requestType: endpoint_api_pb.CreateEndpointCacheConfigurationRequest,
  responseType: endpoint_api_pb.CreateEndpointCacheConfigurationResponse
};

EndpointService.CreateEndpointRetryConfiguration = {
  methodName: "CreateEndpointRetryConfiguration",
  service: EndpointService,
  requestStream: false,
  responseStream: false,
  requestType: endpoint_api_pb.CreateEndpointRetryConfigurationRequest,
  responseType: endpoint_api_pb.CreateEndpointRetryConfigurationResponse
};

EndpointService.CreateEndpointTag = {
  methodName: "CreateEndpointTag",
  service: EndpointService,
  requestStream: false,
  responseStream: false,
  requestType: endpoint_api_pb.CreateEndpointTagRequest,
  responseType: endpoint_api_pb.GetEndpointResponse
};

EndpointService.ForkEndpoint = {
  methodName: "ForkEndpoint",
  service: EndpointService,
  requestStream: false,
  responseStream: false,
  requestType: endpoint_api_pb.ForkEndpointRequest,
  responseType: common_pb.BaseResponse
};

EndpointService.UpdateEndpointDetail = {
  methodName: "UpdateEndpointDetail",
  service: EndpointService,
  requestStream: false,
  responseStream: false,
  requestType: endpoint_api_pb.UpdateEndpointDetailRequest,
  responseType: endpoint_api_pb.GetEndpointResponse
};

EndpointService.GetAllEndpointLog = {
  methodName: "GetAllEndpointLog",
  service: EndpointService,
  requestStream: false,
  responseStream: false,
  requestType: endpoint_api_pb.GetAllEndpointLogRequest,
  responseType: endpoint_api_pb.GetAllEndpointLogResponse
};

EndpointService.GetEndpointLog = {
  methodName: "GetEndpointLog",
  service: EndpointService,
  requestStream: false,
  responseStream: false,
  requestType: endpoint_api_pb.GetEndpointLogRequest,
  responseType: endpoint_api_pb.GetEndpointLogResponse
};

exports.EndpointService = EndpointService;

function EndpointServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

EndpointServiceClient.prototype.getEndpoint = function getEndpoint(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EndpointService.GetEndpoint, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

EndpointServiceClient.prototype.getAllEndpoint = function getAllEndpoint(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EndpointService.GetAllEndpoint, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

EndpointServiceClient.prototype.getAllEndpointProviderModel = function getAllEndpointProviderModel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EndpointService.GetAllEndpointProviderModel, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

EndpointServiceClient.prototype.updateEndpointVersion = function updateEndpointVersion(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EndpointService.UpdateEndpointVersion, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

EndpointServiceClient.prototype.createEndpoint = function createEndpoint(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EndpointService.CreateEndpoint, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

EndpointServiceClient.prototype.createEndpointProviderModel = function createEndpointProviderModel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EndpointService.CreateEndpointProviderModel, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

EndpointServiceClient.prototype.createEndpointCacheConfiguration = function createEndpointCacheConfiguration(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EndpointService.CreateEndpointCacheConfiguration, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

EndpointServiceClient.prototype.createEndpointRetryConfiguration = function createEndpointRetryConfiguration(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EndpointService.CreateEndpointRetryConfiguration, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

EndpointServiceClient.prototype.createEndpointTag = function createEndpointTag(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EndpointService.CreateEndpointTag, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

EndpointServiceClient.prototype.forkEndpoint = function forkEndpoint(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EndpointService.ForkEndpoint, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

EndpointServiceClient.prototype.updateEndpointDetail = function updateEndpointDetail(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EndpointService.UpdateEndpointDetail, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

EndpointServiceClient.prototype.getAllEndpointLog = function getAllEndpointLog(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EndpointService.GetAllEndpointLog, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

EndpointServiceClient.prototype.getEndpointLog = function getEndpointLog(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EndpointService.GetEndpointLog, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.EndpointServiceClient = EndpointServiceClient;

