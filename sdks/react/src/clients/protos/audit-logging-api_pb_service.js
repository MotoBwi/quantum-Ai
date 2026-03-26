// package: integration_api
// file: audit-logging-api.proto

var audit_logging_api_pb = require("./audit-logging-api_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AuditLoggingService = (function () {
  function AuditLoggingService() {}
  AuditLoggingService.serviceName = "integration_api.AuditLoggingService";
  return AuditLoggingService;
}());

AuditLoggingService.GetAllAuditLog = {
  methodName: "GetAllAuditLog",
  service: AuditLoggingService,
  requestStream: false,
  responseStream: false,
  requestType: audit_logging_api_pb.GetAllAuditLogRequest,
  responseType: audit_logging_api_pb.GetAllAuditLogResponse
};

AuditLoggingService.GetAuditLog = {
  methodName: "GetAuditLog",
  service: AuditLoggingService,
  requestStream: false,
  responseStream: false,
  requestType: audit_logging_api_pb.GetAuditLogRequest,
  responseType: audit_logging_api_pb.GetAuditLogResponse
};

AuditLoggingService.CreateMetadata = {
  methodName: "CreateMetadata",
  service: AuditLoggingService,
  requestStream: false,
  responseStream: false,
  requestType: audit_logging_api_pb.CreateMetadataRequest,
  responseType: audit_logging_api_pb.CreateMetadataResponse
};

exports.AuditLoggingService = AuditLoggingService;

function AuditLoggingServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AuditLoggingServiceClient.prototype.getAllAuditLog = function getAllAuditLog(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuditLoggingService.GetAllAuditLog, {
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

AuditLoggingServiceClient.prototype.getAuditLog = function getAuditLog(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuditLoggingService.GetAuditLog, {
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

AuditLoggingServiceClient.prototype.createMetadata = function createMetadata(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuditLoggingService.CreateMetadata, {
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

exports.AuditLoggingServiceClient = AuditLoggingServiceClient;

