// package: notification_api
// file: notification-api.proto

var notification_api_pb = require("./notification-api_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var NotificationService = (function () {
  function NotificationService() {}
  NotificationService.serviceName = "notification_api.NotificationService";
  return NotificationService;
}());

NotificationService.UpdateNotificationSetting = {
  methodName: "UpdateNotificationSetting",
  service: NotificationService,
  requestStream: false,
  responseStream: false,
  requestType: notification_api_pb.UpdateNotificationSettingRequest,
  responseType: notification_api_pb.NotificationSettingResponse
};

NotificationService.GetNotificationSettting = {
  methodName: "GetNotificationSettting",
  service: NotificationService,
  requestStream: false,
  responseStream: false,
  requestType: notification_api_pb.GetNotificationSettingRequest,
  responseType: notification_api_pb.NotificationSettingResponse
};

exports.NotificationService = NotificationService;

function NotificationServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

NotificationServiceClient.prototype.updateNotificationSetting = function updateNotificationSetting(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NotificationService.UpdateNotificationSetting, {
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

NotificationServiceClient.prototype.getNotificationSettting = function getNotificationSettting(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NotificationService.GetNotificationSettting, {
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

exports.NotificationServiceClient = NotificationServiceClient;

