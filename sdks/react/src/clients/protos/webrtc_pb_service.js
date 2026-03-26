// package: talk_api
// file: webrtc.proto

var webrtc_pb = require("./webrtc_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var WebRTC = (function () {
  function WebRTC() {}
  WebRTC.serviceName = "talk_api.WebRTC";
  return WebRTC;
}());

WebRTC.WebTalk = {
  methodName: "WebTalk",
  service: WebRTC,
  requestStream: true,
  responseStream: true,
  requestType: webrtc_pb.WebTalkRequest,
  responseType: webrtc_pb.WebTalkResponse
};

exports.WebRTC = WebRTC;

function WebRTCClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

WebRTCClient.prototype.webTalk = function webTalk(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(WebRTC.WebTalk, {
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

exports.WebRTCClient = WebRTCClient;

