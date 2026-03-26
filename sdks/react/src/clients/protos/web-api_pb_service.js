// package: web_api
// file: web-api.proto

var web_api_pb = require("./web-api_pb");
var common_pb = require("./common_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AuthenticationService = (function () {
  function AuthenticationService() {}
  AuthenticationService.serviceName = "web_api.AuthenticationService";
  return AuthenticationService;
}());

AuthenticationService.Authenticate = {
  methodName: "Authenticate",
  service: AuthenticationService,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.AuthenticateRequest,
  responseType: web_api_pb.AuthenticateResponse
};

AuthenticationService.RegisterUser = {
  methodName: "RegisterUser",
  service: AuthenticationService,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.RegisterUserRequest,
  responseType: web_api_pb.AuthenticateResponse
};

AuthenticationService.Authorize = {
  methodName: "Authorize",
  service: AuthenticationService,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.AuthorizeRequest,
  responseType: web_api_pb.AuthenticateResponse
};

AuthenticationService.ScopeAuthorize = {
  methodName: "ScopeAuthorize",
  service: AuthenticationService,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.ScopeAuthorizeRequest,
  responseType: web_api_pb.ScopedAuthenticationResponse
};

AuthenticationService.VerifyToken = {
  methodName: "VerifyToken",
  service: AuthenticationService,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.VerifyTokenRequest,
  responseType: web_api_pb.VerifyTokenResponse
};

AuthenticationService.ForgotPassword = {
  methodName: "ForgotPassword",
  service: AuthenticationService,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.ForgotPasswordRequest,
  responseType: web_api_pb.ForgotPasswordResponse
};

AuthenticationService.CreatePassword = {
  methodName: "CreatePassword",
  service: AuthenticationService,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.CreatePasswordRequest,
  responseType: web_api_pb.CreatePasswordResponse
};

AuthenticationService.ChangePassword = {
  methodName: "ChangePassword",
  service: AuthenticationService,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.ChangePasswordRequest,
  responseType: web_api_pb.ChangePasswordResponse
};

AuthenticationService.GetUser = {
  methodName: "GetUser",
  service: AuthenticationService,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.GetUserRequest,
  responseType: web_api_pb.GetUserResponse
};

AuthenticationService.UpdateUser = {
  methodName: "UpdateUser",
  service: AuthenticationService,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.UpdateUserRequest,
  responseType: web_api_pb.UpdateUserResponse
};

AuthenticationService.GetAllUser = {
  methodName: "GetAllUser",
  service: AuthenticationService,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.GetAllUserRequest,
  responseType: web_api_pb.GetAllUserResponse
};

AuthenticationService.Linkedin = {
  methodName: "Linkedin",
  service: AuthenticationService,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.SocialAuthenticationRequest,
  responseType: web_api_pb.AuthenticateResponse
};

AuthenticationService.Google = {
  methodName: "Google",
  service: AuthenticationService,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.SocialAuthenticationRequest,
  responseType: web_api_pb.AuthenticateResponse
};

AuthenticationService.Github = {
  methodName: "Github",
  service: AuthenticationService,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.SocialAuthenticationRequest,
  responseType: web_api_pb.AuthenticateResponse
};

exports.AuthenticationService = AuthenticationService;

function AuthenticationServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AuthenticationServiceClient.prototype.authenticate = function authenticate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthenticationService.Authenticate, {
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

AuthenticationServiceClient.prototype.registerUser = function registerUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthenticationService.RegisterUser, {
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

AuthenticationServiceClient.prototype.authorize = function authorize(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthenticationService.Authorize, {
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

AuthenticationServiceClient.prototype.scopeAuthorize = function scopeAuthorize(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthenticationService.ScopeAuthorize, {
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

AuthenticationServiceClient.prototype.verifyToken = function verifyToken(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthenticationService.VerifyToken, {
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

AuthenticationServiceClient.prototype.forgotPassword = function forgotPassword(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthenticationService.ForgotPassword, {
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

AuthenticationServiceClient.prototype.createPassword = function createPassword(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthenticationService.CreatePassword, {
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

AuthenticationServiceClient.prototype.changePassword = function changePassword(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthenticationService.ChangePassword, {
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

AuthenticationServiceClient.prototype.getUser = function getUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthenticationService.GetUser, {
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

AuthenticationServiceClient.prototype.updateUser = function updateUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthenticationService.UpdateUser, {
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

AuthenticationServiceClient.prototype.getAllUser = function getAllUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthenticationService.GetAllUser, {
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

AuthenticationServiceClient.prototype.linkedin = function linkedin(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthenticationService.Linkedin, {
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

AuthenticationServiceClient.prototype.google = function google(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthenticationService.Google, {
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

AuthenticationServiceClient.prototype.github = function github(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthenticationService.Github, {
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

exports.AuthenticationServiceClient = AuthenticationServiceClient;

var OrganizationService = (function () {
  function OrganizationService() {}
  OrganizationService.serviceName = "web_api.OrganizationService";
  return OrganizationService;
}());

OrganizationService.CreateOrganization = {
  methodName: "CreateOrganization",
  service: OrganizationService,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.CreateOrganizationRequest,
  responseType: web_api_pb.CreateOrganizationResponse
};

OrganizationService.GetOrganization = {
  methodName: "GetOrganization",
  service: OrganizationService,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.GetOrganizationRequest,
  responseType: web_api_pb.GetOrganizationResponse
};

OrganizationService.UpdateOrganization = {
  methodName: "UpdateOrganization",
  service: OrganizationService,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.UpdateOrganizationRequest,
  responseType: web_api_pb.UpdateOrganizationResponse
};

OrganizationService.UpdateBillingInformation = {
  methodName: "UpdateBillingInformation",
  service: OrganizationService,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.UpdateBillingInformationRequest,
  responseType: common_pb.BaseResponse
};

exports.OrganizationService = OrganizationService;

function OrganizationServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

OrganizationServiceClient.prototype.createOrganization = function createOrganization(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationService.CreateOrganization, {
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

OrganizationServiceClient.prototype.getOrganization = function getOrganization(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationService.GetOrganization, {
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

OrganizationServiceClient.prototype.updateOrganization = function updateOrganization(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationService.UpdateOrganization, {
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

OrganizationServiceClient.prototype.updateBillingInformation = function updateBillingInformation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationService.UpdateBillingInformation, {
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

exports.OrganizationServiceClient = OrganizationServiceClient;

var ProjectService = (function () {
  function ProjectService() {}
  ProjectService.serviceName = "web_api.ProjectService";
  return ProjectService;
}());

ProjectService.CreateProject = {
  methodName: "CreateProject",
  service: ProjectService,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.CreateProjectRequest,
  responseType: web_api_pb.CreateProjectResponse
};

ProjectService.UpdateProject = {
  methodName: "UpdateProject",
  service: ProjectService,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.UpdateProjectRequest,
  responseType: web_api_pb.UpdateProjectResponse
};

ProjectService.GetProject = {
  methodName: "GetProject",
  service: ProjectService,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.GetProjectRequest,
  responseType: web_api_pb.GetProjectResponse
};

ProjectService.GetAllProject = {
  methodName: "GetAllProject",
  service: ProjectService,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.GetAllProjectRequest,
  responseType: web_api_pb.GetAllProjectResponse
};

ProjectService.AddUsersToProject = {
  methodName: "AddUsersToProject",
  service: ProjectService,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.AddUsersToProjectRequest,
  responseType: web_api_pb.AddUsersToProjectResponse
};

ProjectService.ArchiveProject = {
  methodName: "ArchiveProject",
  service: ProjectService,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.ArchiveProjectRequest,
  responseType: web_api_pb.ArchiveProjectResponse
};

ProjectService.CreateProjectCredential = {
  methodName: "CreateProjectCredential",
  service: ProjectService,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.CreateProjectCredentialRequest,
  responseType: web_api_pb.CreateProjectCredentialResponse
};

ProjectService.GetAllProjectCredential = {
  methodName: "GetAllProjectCredential",
  service: ProjectService,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.GetAllProjectCredentialRequest,
  responseType: web_api_pb.GetAllProjectCredentialResponse
};

exports.ProjectService = ProjectService;

function ProjectServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ProjectServiceClient.prototype.createProject = function createProject(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProjectService.CreateProject, {
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

ProjectServiceClient.prototype.updateProject = function updateProject(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProjectService.UpdateProject, {
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

ProjectServiceClient.prototype.getProject = function getProject(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProjectService.GetProject, {
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

ProjectServiceClient.prototype.getAllProject = function getAllProject(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProjectService.GetAllProject, {
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

ProjectServiceClient.prototype.addUsersToProject = function addUsersToProject(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProjectService.AddUsersToProject, {
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

ProjectServiceClient.prototype.archiveProject = function archiveProject(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProjectService.ArchiveProject, {
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

ProjectServiceClient.prototype.createProjectCredential = function createProjectCredential(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProjectService.CreateProjectCredential, {
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

ProjectServiceClient.prototype.getAllProjectCredential = function getAllProjectCredential(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProjectService.GetAllProjectCredential, {
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

exports.ProjectServiceClient = ProjectServiceClient;

