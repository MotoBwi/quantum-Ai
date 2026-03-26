// package: document_api
// file: document-api.proto

var document_api_pb = require("./document-api_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var DocumentService = (function () {
  function DocumentService() {}
  DocumentService.serviceName = "document_api.DocumentService";
  return DocumentService;
}());

DocumentService.IndexKnowledgeDocument = {
  methodName: "IndexKnowledgeDocument",
  service: DocumentService,
  requestStream: false,
  responseStream: false,
  requestType: document_api_pb.IndexKnowledgeDocumentRequest,
  responseType: document_api_pb.IndexKnowledgeDocumentResponse
};

exports.DocumentService = DocumentService;

function DocumentServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

DocumentServiceClient.prototype.indexKnowledgeDocument = function indexKnowledgeDocument(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DocumentService.IndexKnowledgeDocument, {
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

exports.DocumentServiceClient = DocumentServiceClient;

