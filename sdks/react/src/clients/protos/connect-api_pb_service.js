// package: connect_api
// file: connect-api.proto

var connect_api_pb = require("./connect-api_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ConnectService = (function () {
  function ConnectService() {}
  ConnectService.serviceName = "connect_api.ConnectService";
  return ConnectService;
}());

ConnectService.GeneralConnect = {
  methodName: "GeneralConnect",
  service: ConnectService,
  requestStream: false,
  responseStream: false,
  requestType: connect_api_pb.GeneralConnectRequest,
  responseType: connect_api_pb.GeneralConnectResponse
};

ConnectService.GetConnectorFiles = {
  methodName: "GetConnectorFiles",
  service: ConnectService,
  requestStream: false,
  responseStream: false,
  requestType: connect_api_pb.GetConnectorFilesRequest,
  responseType: connect_api_pb.GetConnectorFilesResponse
};

exports.ConnectService = ConnectService;

function ConnectServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ConnectServiceClient.prototype.generalConnect = function generalConnect(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ConnectService.GeneralConnect, {
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

ConnectServiceClient.prototype.getConnectorFiles = function getConnectorFiles(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ConnectService.GetConnectorFiles, {
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

exports.ConnectServiceClient = ConnectServiceClient;

