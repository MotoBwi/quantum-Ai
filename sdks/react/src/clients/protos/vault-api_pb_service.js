// package: vault_api
// file: vault-api.proto

var vault_api_pb = require("./vault-api_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var VaultService = (function () {
  function VaultService() {}
  VaultService.serviceName = "vault_api.VaultService";
  return VaultService;
}());

VaultService.CreateProviderCredential = {
  methodName: "CreateProviderCredential",
  service: VaultService,
  requestStream: false,
  responseStream: false,
  requestType: vault_api_pb.CreateProviderCredentialRequest,
  responseType: vault_api_pb.GetCredentialResponse
};

VaultService.GetAllOrganizationCredential = {
  methodName: "GetAllOrganizationCredential",
  service: VaultService,
  requestStream: false,
  responseStream: false,
  requestType: vault_api_pb.GetAllOrganizationCredentialRequest,
  responseType: vault_api_pb.GetAllOrganizationCredentialResponse
};

VaultService.DeleteCredential = {
  methodName: "DeleteCredential",
  service: VaultService,
  requestStream: false,
  responseStream: false,
  requestType: vault_api_pb.DeleteCredentialRequest,
  responseType: vault_api_pb.GetCredentialResponse
};

VaultService.GetCredential = {
  methodName: "GetCredential",
  service: VaultService,
  requestStream: false,
  responseStream: false,
  requestType: vault_api_pb.GetCredentialRequest,
  responseType: vault_api_pb.GetCredentialResponse
};

VaultService.GetOauth2Credential = {
  methodName: "GetOauth2Credential",
  service: VaultService,
  requestStream: false,
  responseStream: false,
  requestType: vault_api_pb.GetCredentialRequest,
  responseType: vault_api_pb.GetCredentialResponse
};

exports.VaultService = VaultService;

function VaultServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

VaultServiceClient.prototype.createProviderCredential = function createProviderCredential(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VaultService.CreateProviderCredential, {
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

VaultServiceClient.prototype.getAllOrganizationCredential = function getAllOrganizationCredential(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VaultService.GetAllOrganizationCredential, {
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

VaultServiceClient.prototype.deleteCredential = function deleteCredential(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VaultService.DeleteCredential, {
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

VaultServiceClient.prototype.getCredential = function getCredential(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VaultService.GetCredential, {
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

VaultServiceClient.prototype.getOauth2Credential = function getOauth2Credential(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VaultService.GetOauth2Credential, {
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

exports.VaultServiceClient = VaultServiceClient;

