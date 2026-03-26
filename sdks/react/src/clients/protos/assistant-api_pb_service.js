// package: assistant_api
// file: assistant-api.proto

var assistant_api_pb = require("./assistant-api_pb");
var common_pb = require("./common_pb");
var assistant_tool_pb = require("./assistant-tool_pb");
var assistant_analysis_pb = require("./assistant-analysis_pb");
var assistant_webhook_pb = require("./assistant-webhook_pb");
var assistant_knowledge_pb = require("./assistant-knowledge_pb");
var assistant_provider_pb = require("./assistant-provider_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AssistantService = (function () {
  function AssistantService() {}
  AssistantService.serviceName = "assistant_api.AssistantService";
  return AssistantService;
}());

AssistantService.GetAssistant = {
  methodName: "GetAssistant",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.GetAssistantRequest,
  responseType: assistant_api_pb.GetAssistantResponse
};

AssistantService.GetAllAssistant = {
  methodName: "GetAllAssistant",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.GetAllAssistantRequest,
  responseType: assistant_api_pb.GetAllAssistantResponse
};

AssistantService.CreateAssistant = {
  methodName: "CreateAssistant",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.CreateAssistantRequest,
  responseType: assistant_api_pb.GetAssistantResponse
};

AssistantService.DeleteAssistant = {
  methodName: "DeleteAssistant",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.DeleteAssistantRequest,
  responseType: assistant_api_pb.GetAssistantResponse
};

AssistantService.GetAllAssistantProvider = {
  methodName: "GetAllAssistantProvider",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_provider_pb.GetAllAssistantProviderRequest,
  responseType: assistant_provider_pb.GetAllAssistantProviderResponse
};

AssistantService.CreateAssistantProvider = {
  methodName: "CreateAssistantProvider",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_provider_pb.CreateAssistantProviderRequest,
  responseType: assistant_provider_pb.GetAssistantProviderResponse
};

AssistantService.CreateAssistantTag = {
  methodName: "CreateAssistantTag",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.CreateAssistantTagRequest,
  responseType: assistant_api_pb.GetAssistantResponse
};

AssistantService.UpdateAssistantVersion = {
  methodName: "UpdateAssistantVersion",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_provider_pb.UpdateAssistantVersionRequest,
  responseType: assistant_api_pb.GetAssistantResponse
};

AssistantService.UpdateAssistantDetail = {
  methodName: "UpdateAssistantDetail",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.UpdateAssistantDetailRequest,
  responseType: assistant_api_pb.GetAssistantResponse
};

AssistantService.GetAllAssistantMessage = {
  methodName: "GetAllAssistantMessage",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.GetAllAssistantMessageRequest,
  responseType: assistant_api_pb.GetAllAssistantMessageResponse
};

AssistantService.GetAllConversationMessage = {
  methodName: "GetAllConversationMessage",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: common_pb.GetAllConversationMessageRequest,
  responseType: common_pb.GetAllConversationMessageResponse
};

AssistantService.GetAllMessage = {
  methodName: "GetAllMessage",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.GetAllMessageRequest,
  responseType: assistant_api_pb.GetAllMessageResponse
};

AssistantService.GetAllAssistantTelemetry = {
  methodName: "GetAllAssistantTelemetry",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.GetAllAssistantTelemetryRequest,
  responseType: assistant_api_pb.GetAllAssistantTelemetryResponse
};

AssistantService.GetAssistantTelemetryProvider = {
  methodName: "GetAssistantTelemetryProvider",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.GetAssistantTelemetryProviderRequest,
  responseType: assistant_api_pb.GetAssistantTelemetryProviderResponse
};

AssistantService.GetAllAssistantTelemetryProvider = {
  methodName: "GetAllAssistantTelemetryProvider",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.GetAllAssistantTelemetryProviderRequest,
  responseType: assistant_api_pb.GetAllAssistantTelemetryProviderResponse
};

AssistantService.CreateAssistantTelemetryProvider = {
  methodName: "CreateAssistantTelemetryProvider",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.CreateAssistantTelemetryProviderRequest,
  responseType: assistant_api_pb.GetAssistantTelemetryProviderResponse
};

AssistantService.UpdateAssistantTelemetryProvider = {
  methodName: "UpdateAssistantTelemetryProvider",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.UpdateAssistantTelemetryProviderRequest,
  responseType: assistant_api_pb.GetAssistantTelemetryProviderResponse
};

AssistantService.DeleteAssistantTelemetryProvider = {
  methodName: "DeleteAssistantTelemetryProvider",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.DeleteAssistantTelemetryProviderRequest,
  responseType: assistant_api_pb.GetAssistantTelemetryProviderResponse
};

AssistantService.GetAllAssistantConversation = {
  methodName: "GetAllAssistantConversation",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: common_pb.GetAllAssistantConversationRequest,
  responseType: common_pb.GetAllAssistantConversationResponse
};

AssistantService.GetAssistantConversation = {
  methodName: "GetAssistantConversation",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.GetAssistantConversationRequest,
  responseType: assistant_api_pb.GetAssistantConversationResponse
};

AssistantService.GetAssistantWebhookLog = {
  methodName: "GetAssistantWebhookLog",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_webhook_pb.GetAssistantWebhookLogRequest,
  responseType: assistant_webhook_pb.GetAssistantWebhookLogResponse
};

AssistantService.GetAllAssistantWebhookLog = {
  methodName: "GetAllAssistantWebhookLog",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_webhook_pb.GetAllAssistantWebhookLogRequest,
  responseType: assistant_webhook_pb.GetAllAssistantWebhookLogResponse
};

AssistantService.GetAllAssistantWebhook = {
  methodName: "GetAllAssistantWebhook",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_webhook_pb.GetAllAssistantWebhookRequest,
  responseType: assistant_webhook_pb.GetAllAssistantWebhookResponse
};

AssistantService.GetAssistantWebhook = {
  methodName: "GetAssistantWebhook",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_webhook_pb.GetAssistantWebhookRequest,
  responseType: assistant_webhook_pb.GetAssistantWebhookResponse
};

AssistantService.CreateAssistantWebhook = {
  methodName: "CreateAssistantWebhook",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_webhook_pb.CreateAssistantWebhookRequest,
  responseType: assistant_webhook_pb.GetAssistantWebhookResponse
};

AssistantService.UpdateAssistantWebhook = {
  methodName: "UpdateAssistantWebhook",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_webhook_pb.UpdateAssistantWebhookRequest,
  responseType: assistant_webhook_pb.GetAssistantWebhookResponse
};

AssistantService.DeleteAssistantWebhook = {
  methodName: "DeleteAssistantWebhook",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_webhook_pb.DeleteAssistantWebhookRequest,
  responseType: assistant_webhook_pb.GetAssistantWebhookResponse
};

AssistantService.GetAssistantToolLog = {
  methodName: "GetAssistantToolLog",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_tool_pb.GetAssistantToolLogRequest,
  responseType: assistant_tool_pb.GetAssistantToolLogResponse
};

AssistantService.GetAllAssistantToolLog = {
  methodName: "GetAllAssistantToolLog",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_tool_pb.GetAllAssistantToolLogRequest,
  responseType: assistant_tool_pb.GetAllAssistantToolLogResponse
};

AssistantService.GetAssistantAnalysis = {
  methodName: "GetAssistantAnalysis",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_analysis_pb.GetAssistantAnalysisRequest,
  responseType: assistant_analysis_pb.GetAssistantAnalysisResponse
};

AssistantService.UpdateAssistantAnalysis = {
  methodName: "UpdateAssistantAnalysis",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_analysis_pb.UpdateAssistantAnalysisRequest,
  responseType: assistant_analysis_pb.GetAssistantAnalysisResponse
};

AssistantService.CreateAssistantAnalysis = {
  methodName: "CreateAssistantAnalysis",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_analysis_pb.CreateAssistantAnalysisRequest,
  responseType: assistant_analysis_pb.GetAssistantAnalysisResponse
};

AssistantService.DeleteAssistantAnalysis = {
  methodName: "DeleteAssistantAnalysis",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_analysis_pb.DeleteAssistantAnalysisRequest,
  responseType: assistant_analysis_pb.GetAssistantAnalysisResponse
};

AssistantService.GetAllAssistantAnalysis = {
  methodName: "GetAllAssistantAnalysis",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_analysis_pb.GetAllAssistantAnalysisRequest,
  responseType: assistant_analysis_pb.GetAllAssistantAnalysisResponse
};

AssistantService.CreateAssistantTool = {
  methodName: "CreateAssistantTool",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_tool_pb.CreateAssistantToolRequest,
  responseType: assistant_tool_pb.GetAssistantToolResponse
};

AssistantService.GetAssistantTool = {
  methodName: "GetAssistantTool",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_tool_pb.GetAssistantToolRequest,
  responseType: assistant_tool_pb.GetAssistantToolResponse
};

AssistantService.GetAllAssistantTool = {
  methodName: "GetAllAssistantTool",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_tool_pb.GetAllAssistantToolRequest,
  responseType: assistant_tool_pb.GetAllAssistantToolResponse
};

AssistantService.DeleteAssistantTool = {
  methodName: "DeleteAssistantTool",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_tool_pb.DeleteAssistantToolRequest,
  responseType: assistant_tool_pb.GetAssistantToolResponse
};

AssistantService.UpdateAssistantTool = {
  methodName: "UpdateAssistantTool",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_tool_pb.UpdateAssistantToolRequest,
  responseType: assistant_tool_pb.GetAssistantToolResponse
};

AssistantService.CreateAssistantKnowledge = {
  methodName: "CreateAssistantKnowledge",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_knowledge_pb.CreateAssistantKnowledgeRequest,
  responseType: assistant_knowledge_pb.GetAssistantKnowledgeResponse
};

AssistantService.GetAssistantKnowledge = {
  methodName: "GetAssistantKnowledge",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_knowledge_pb.GetAssistantKnowledgeRequest,
  responseType: assistant_knowledge_pb.GetAssistantKnowledgeResponse
};

AssistantService.GetAllAssistantKnowledge = {
  methodName: "GetAllAssistantKnowledge",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_knowledge_pb.GetAllAssistantKnowledgeRequest,
  responseType: assistant_knowledge_pb.GetAllAssistantKnowledgeResponse
};

AssistantService.DeleteAssistantKnowledge = {
  methodName: "DeleteAssistantKnowledge",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_knowledge_pb.DeleteAssistantKnowledgeRequest,
  responseType: assistant_knowledge_pb.GetAssistantKnowledgeResponse
};

AssistantService.UpdateAssistantKnowledge = {
  methodName: "UpdateAssistantKnowledge",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_knowledge_pb.UpdateAssistantKnowledgeRequest,
  responseType: assistant_knowledge_pb.GetAssistantKnowledgeResponse
};

exports.AssistantService = AssistantService;

function AssistantServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AssistantServiceClient.prototype.getAssistant = function getAssistant(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAssistant, {
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

AssistantServiceClient.prototype.getAllAssistant = function getAllAssistant(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAllAssistant, {
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

AssistantServiceClient.prototype.createAssistant = function createAssistant(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.CreateAssistant, {
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

AssistantServiceClient.prototype.deleteAssistant = function deleteAssistant(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.DeleteAssistant, {
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

AssistantServiceClient.prototype.getAllAssistantProvider = function getAllAssistantProvider(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAllAssistantProvider, {
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

AssistantServiceClient.prototype.createAssistantProvider = function createAssistantProvider(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.CreateAssistantProvider, {
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

AssistantServiceClient.prototype.createAssistantTag = function createAssistantTag(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.CreateAssistantTag, {
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

AssistantServiceClient.prototype.updateAssistantVersion = function updateAssistantVersion(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.UpdateAssistantVersion, {
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

AssistantServiceClient.prototype.updateAssistantDetail = function updateAssistantDetail(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.UpdateAssistantDetail, {
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

AssistantServiceClient.prototype.getAllAssistantMessage = function getAllAssistantMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAllAssistantMessage, {
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

AssistantServiceClient.prototype.getAllConversationMessage = function getAllConversationMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAllConversationMessage, {
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

AssistantServiceClient.prototype.getAllMessage = function getAllMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAllMessage, {
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

AssistantServiceClient.prototype.getAllAssistantTelemetry = function getAllAssistantTelemetry(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAllAssistantTelemetry, {
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

AssistantServiceClient.prototype.getAssistantTelemetryProvider = function getAssistantTelemetryProvider(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAssistantTelemetryProvider, {
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

AssistantServiceClient.prototype.getAllAssistantTelemetryProvider = function getAllAssistantTelemetryProvider(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAllAssistantTelemetryProvider, {
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

AssistantServiceClient.prototype.createAssistantTelemetryProvider = function createAssistantTelemetryProvider(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.CreateAssistantTelemetryProvider, {
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

AssistantServiceClient.prototype.updateAssistantTelemetryProvider = function updateAssistantTelemetryProvider(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.UpdateAssistantTelemetryProvider, {
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

AssistantServiceClient.prototype.deleteAssistantTelemetryProvider = function deleteAssistantTelemetryProvider(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.DeleteAssistantTelemetryProvider, {
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

AssistantServiceClient.prototype.getAllAssistantConversation = function getAllAssistantConversation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAllAssistantConversation, {
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

AssistantServiceClient.prototype.getAssistantConversation = function getAssistantConversation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAssistantConversation, {
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

AssistantServiceClient.prototype.getAssistantWebhookLog = function getAssistantWebhookLog(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAssistantWebhookLog, {
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

AssistantServiceClient.prototype.getAllAssistantWebhookLog = function getAllAssistantWebhookLog(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAllAssistantWebhookLog, {
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

AssistantServiceClient.prototype.getAllAssistantWebhook = function getAllAssistantWebhook(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAllAssistantWebhook, {
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

AssistantServiceClient.prototype.getAssistantWebhook = function getAssistantWebhook(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAssistantWebhook, {
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

AssistantServiceClient.prototype.createAssistantWebhook = function createAssistantWebhook(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.CreateAssistantWebhook, {
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

AssistantServiceClient.prototype.updateAssistantWebhook = function updateAssistantWebhook(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.UpdateAssistantWebhook, {
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

AssistantServiceClient.prototype.deleteAssistantWebhook = function deleteAssistantWebhook(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.DeleteAssistantWebhook, {
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

AssistantServiceClient.prototype.getAssistantToolLog = function getAssistantToolLog(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAssistantToolLog, {
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

AssistantServiceClient.prototype.getAllAssistantToolLog = function getAllAssistantToolLog(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAllAssistantToolLog, {
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

AssistantServiceClient.prototype.getAssistantAnalysis = function getAssistantAnalysis(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAssistantAnalysis, {
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

AssistantServiceClient.prototype.updateAssistantAnalysis = function updateAssistantAnalysis(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.UpdateAssistantAnalysis, {
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

AssistantServiceClient.prototype.createAssistantAnalysis = function createAssistantAnalysis(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.CreateAssistantAnalysis, {
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

AssistantServiceClient.prototype.deleteAssistantAnalysis = function deleteAssistantAnalysis(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.DeleteAssistantAnalysis, {
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

AssistantServiceClient.prototype.getAllAssistantAnalysis = function getAllAssistantAnalysis(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAllAssistantAnalysis, {
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

AssistantServiceClient.prototype.createAssistantTool = function createAssistantTool(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.CreateAssistantTool, {
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

AssistantServiceClient.prototype.getAssistantTool = function getAssistantTool(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAssistantTool, {
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

AssistantServiceClient.prototype.getAllAssistantTool = function getAllAssistantTool(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAllAssistantTool, {
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

AssistantServiceClient.prototype.deleteAssistantTool = function deleteAssistantTool(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.DeleteAssistantTool, {
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

AssistantServiceClient.prototype.updateAssistantTool = function updateAssistantTool(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.UpdateAssistantTool, {
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

AssistantServiceClient.prototype.createAssistantKnowledge = function createAssistantKnowledge(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.CreateAssistantKnowledge, {
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

AssistantServiceClient.prototype.getAssistantKnowledge = function getAssistantKnowledge(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAssistantKnowledge, {
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

AssistantServiceClient.prototype.getAllAssistantKnowledge = function getAllAssistantKnowledge(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAllAssistantKnowledge, {
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

AssistantServiceClient.prototype.deleteAssistantKnowledge = function deleteAssistantKnowledge(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.DeleteAssistantKnowledge, {
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

AssistantServiceClient.prototype.updateAssistantKnowledge = function updateAssistantKnowledge(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.UpdateAssistantKnowledge, {
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

exports.AssistantServiceClient = AssistantServiceClient;

