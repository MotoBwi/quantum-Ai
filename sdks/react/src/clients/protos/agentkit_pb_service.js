// package: talk_api
// file: agentkit.proto

var agentkit_pb = require("./agentkit_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AgentKit = (function () {
  function AgentKit() {}
  AgentKit.serviceName = "talk_api.AgentKit";
  return AgentKit;
}());

AgentKit.Talk = {
  methodName: "Talk",
  service: AgentKit,
  requestStream: true,
  responseStream: true,
  requestType: agentkit_pb.TalkInput,
  responseType: agentkit_pb.TalkOutput
};

exports.AgentKit = AgentKit;

function AgentKitClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AgentKitClient.prototype.talk = function talk(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(AgentKit.Talk, {
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

exports.AgentKitClient = AgentKitClient;

