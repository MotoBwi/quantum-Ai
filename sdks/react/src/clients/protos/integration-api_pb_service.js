// package: integration_api
// file: integration-api.proto

var integration_api_pb = require("./integration-api_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var UnifiedProviderService = (function () {
  function UnifiedProviderService() {}
  UnifiedProviderService.serviceName = "integration_api.UnifiedProviderService";
  return UnifiedProviderService;
}());

UnifiedProviderService.Chat = {
  methodName: "Chat",
  service: UnifiedProviderService,
  requestStream: false,
  responseStream: false,
  requestType: integration_api_pb.ChatRequest,
  responseType: integration_api_pb.ChatResponse
};

UnifiedProviderService.StreamChat = {
  methodName: "StreamChat",
  service: UnifiedProviderService,
  requestStream: true,
  responseStream: true,
  requestType: integration_api_pb.ChatRequest,
  responseType: integration_api_pb.ChatResponse
};

UnifiedProviderService.Embedding = {
  methodName: "Embedding",
  service: UnifiedProviderService,
  requestStream: false,
  responseStream: false,
  requestType: integration_api_pb.EmbeddingRequest,
  responseType: integration_api_pb.EmbeddingResponse
};

UnifiedProviderService.Reranking = {
  methodName: "Reranking",
  service: UnifiedProviderService,
  requestStream: false,
  responseStream: false,
  requestType: integration_api_pb.RerankingRequest,
  responseType: integration_api_pb.RerankingResponse
};

UnifiedProviderService.VerifyCredential = {
  methodName: "VerifyCredential",
  service: UnifiedProviderService,
  requestStream: false,
  responseStream: false,
  requestType: integration_api_pb.VerifyCredentialRequest,
  responseType: integration_api_pb.VerifyCredentialResponse
};

exports.UnifiedProviderService = UnifiedProviderService;

function UnifiedProviderServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

UnifiedProviderServiceClient.prototype.chat = function chat(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UnifiedProviderService.Chat, {
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

UnifiedProviderServiceClient.prototype.streamChat = function streamChat(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(UnifiedProviderService.StreamChat, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  client.onMessage(function (message) {
    listeners.data.forEach(function (handler) {
      handler(message);
    })
  });
  client.start(metadata);
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

UnifiedProviderServiceClient.prototype.embedding = function embedding(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UnifiedProviderService.Embedding, {
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

UnifiedProviderServiceClient.prototype.reranking = function reranking(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UnifiedProviderService.Reranking, {
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

UnifiedProviderServiceClient.prototype.verifyCredential = function verifyCredential(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UnifiedProviderService.VerifyCredential, {
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

exports.UnifiedProviderServiceClient = UnifiedProviderServiceClient;

