// package: knowledge_api
// file: knowledge-api.proto

var knowledge_api_pb = require("./knowledge-api_pb");
var common_pb = require("./common_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var KnowledgeService = (function () {
  function KnowledgeService() {}
  KnowledgeService.serviceName = "knowledge_api.KnowledgeService";
  return KnowledgeService;
}());

KnowledgeService.GetKnowledge = {
  methodName: "GetKnowledge",
  service: KnowledgeService,
  requestStream: false,
  responseStream: false,
  requestType: knowledge_api_pb.GetKnowledgeRequest,
  responseType: knowledge_api_pb.GetKnowledgeResponse
};

KnowledgeService.GetAllKnowledge = {
  methodName: "GetAllKnowledge",
  service: KnowledgeService,
  requestStream: false,
  responseStream: false,
  requestType: knowledge_api_pb.GetAllKnowledgeRequest,
  responseType: knowledge_api_pb.GetAllKnowledgeResponse
};

KnowledgeService.CreateKnowledge = {
  methodName: "CreateKnowledge",
  service: KnowledgeService,
  requestStream: false,
  responseStream: false,
  requestType: knowledge_api_pb.CreateKnowledgeRequest,
  responseType: knowledge_api_pb.CreateKnowledgeResponse
};

KnowledgeService.CreateKnowledgeTag = {
  methodName: "CreateKnowledgeTag",
  service: KnowledgeService,
  requestStream: false,
  responseStream: false,
  requestType: knowledge_api_pb.CreateKnowledgeTagRequest,
  responseType: knowledge_api_pb.GetKnowledgeResponse
};

KnowledgeService.CreateKnowledgeDocument = {
  methodName: "CreateKnowledgeDocument",
  service: KnowledgeService,
  requestStream: false,
  responseStream: false,
  requestType: knowledge_api_pb.CreateKnowledgeDocumentRequest,
  responseType: knowledge_api_pb.CreateKnowledgeDocumentResponse
};

KnowledgeService.GetAllKnowledgeDocument = {
  methodName: "GetAllKnowledgeDocument",
  service: KnowledgeService,
  requestStream: false,
  responseStream: false,
  requestType: knowledge_api_pb.GetAllKnowledgeDocumentRequest,
  responseType: knowledge_api_pb.GetAllKnowledgeDocumentResponse
};

KnowledgeService.GetAllKnowledgeDocumentSegment = {
  methodName: "GetAllKnowledgeDocumentSegment",
  service: KnowledgeService,
  requestStream: false,
  responseStream: false,
  requestType: knowledge_api_pb.GetAllKnowledgeDocumentSegmentRequest,
  responseType: knowledge_api_pb.GetAllKnowledgeDocumentSegmentResponse
};

KnowledgeService.UpdateKnowledgeDetail = {
  methodName: "UpdateKnowledgeDetail",
  service: KnowledgeService,
  requestStream: false,
  responseStream: false,
  requestType: knowledge_api_pb.UpdateKnowledgeDetailRequest,
  responseType: knowledge_api_pb.GetKnowledgeResponse
};

KnowledgeService.UpdateKnowledgeDocumentSegment = {
  methodName: "UpdateKnowledgeDocumentSegment",
  service: KnowledgeService,
  requestStream: false,
  responseStream: false,
  requestType: knowledge_api_pb.UpdateKnowledgeDocumentSegmentRequest,
  responseType: common_pb.BaseResponse
};

KnowledgeService.DeleteKnowledgeDocumentSegment = {
  methodName: "DeleteKnowledgeDocumentSegment",
  service: KnowledgeService,
  requestStream: false,
  responseStream: false,
  requestType: knowledge_api_pb.DeleteKnowledgeDocumentSegmentRequest,
  responseType: common_pb.BaseResponse
};

KnowledgeService.GetAllKnowledgeLog = {
  methodName: "GetAllKnowledgeLog",
  service: KnowledgeService,
  requestStream: false,
  responseStream: false,
  requestType: knowledge_api_pb.GetAllKnowledgeLogRequest,
  responseType: knowledge_api_pb.GetAllKnowledgeLogResponse
};

KnowledgeService.GetKnowledgeLog = {
  methodName: "GetKnowledgeLog",
  service: KnowledgeService,
  requestStream: false,
  responseStream: false,
  requestType: knowledge_api_pb.GetKnowledgeLogRequest,
  responseType: knowledge_api_pb.GetKnowledgeLogResponse
};

exports.KnowledgeService = KnowledgeService;

function KnowledgeServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

KnowledgeServiceClient.prototype.getKnowledge = function getKnowledge(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(KnowledgeService.GetKnowledge, {
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

KnowledgeServiceClient.prototype.getAllKnowledge = function getAllKnowledge(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(KnowledgeService.GetAllKnowledge, {
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

KnowledgeServiceClient.prototype.createKnowledge = function createKnowledge(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(KnowledgeService.CreateKnowledge, {
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

KnowledgeServiceClient.prototype.createKnowledgeTag = function createKnowledgeTag(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(KnowledgeService.CreateKnowledgeTag, {
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

KnowledgeServiceClient.prototype.createKnowledgeDocument = function createKnowledgeDocument(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(KnowledgeService.CreateKnowledgeDocument, {
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

KnowledgeServiceClient.prototype.getAllKnowledgeDocument = function getAllKnowledgeDocument(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(KnowledgeService.GetAllKnowledgeDocument, {
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

KnowledgeServiceClient.prototype.getAllKnowledgeDocumentSegment = function getAllKnowledgeDocumentSegment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(KnowledgeService.GetAllKnowledgeDocumentSegment, {
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

KnowledgeServiceClient.prototype.updateKnowledgeDetail = function updateKnowledgeDetail(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(KnowledgeService.UpdateKnowledgeDetail, {
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

KnowledgeServiceClient.prototype.updateKnowledgeDocumentSegment = function updateKnowledgeDocumentSegment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(KnowledgeService.UpdateKnowledgeDocumentSegment, {
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

KnowledgeServiceClient.prototype.deleteKnowledgeDocumentSegment = function deleteKnowledgeDocumentSegment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(KnowledgeService.DeleteKnowledgeDocumentSegment, {
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

KnowledgeServiceClient.prototype.getAllKnowledgeLog = function getAllKnowledgeLog(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(KnowledgeService.GetAllKnowledgeLog, {
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

KnowledgeServiceClient.prototype.getKnowledgeLog = function getKnowledgeLog(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(KnowledgeService.GetKnowledgeLog, {
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

exports.KnowledgeServiceClient = KnowledgeServiceClient;

