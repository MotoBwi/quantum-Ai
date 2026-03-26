// package: endpoint_api
// file: invoker-api.proto

var invoker_api_pb = require("./invoker-api_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Deployment = (function () {
  function Deployment() {}
  Deployment.serviceName = "endpoint_api.Deployment";
  return Deployment;
}());

Deployment.Invoke = {
  methodName: "Invoke",
  service: Deployment,
  requestStream: false,
  responseStream: false,
  requestType: invoker_api_pb.InvokeRequest,
  responseType: invoker_api_pb.InvokeResponse
};

Deployment.Update = {
  methodName: "Update",
  service: Deployment,
  requestStream: false,
  responseStream: false,
  requestType: invoker_api_pb.UpdateRequest,
  responseType: invoker_api_pb.UpdateResponse
};

Deployment.Probe = {
  methodName: "Probe",
  service: Deployment,
  requestStream: false,
  responseStream: false,
  requestType: invoker_api_pb.ProbeRequest,
  responseType: invoker_api_pb.ProbeResponse
};

exports.Deployment = Deployment;

function DeploymentClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

DeploymentClient.prototype.invoke = function invoke(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Deployment.Invoke, {
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

DeploymentClient.prototype.update = function update(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Deployment.Update, {
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

DeploymentClient.prototype.probe = function probe(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Deployment.Probe, {
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

exports.DeploymentClient = DeploymentClient;

