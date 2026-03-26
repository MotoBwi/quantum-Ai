// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var web$api_pb = require('./web-api_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var common_pb = require('./common_pb.js');

function serialize_BaseResponse(arg) {
  if (!(arg instanceof common_pb.BaseResponse)) {
    throw new Error('Expected argument of type BaseResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_BaseResponse(buffer_arg) {
  return common_pb.BaseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_AddUsersToProjectRequest(arg) {
  if (!(arg instanceof web$api_pb.AddUsersToProjectRequest)) {
    throw new Error('Expected argument of type web_api.AddUsersToProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_AddUsersToProjectRequest(buffer_arg) {
  return web$api_pb.AddUsersToProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_AddUsersToProjectResponse(arg) {
  if (!(arg instanceof web$api_pb.AddUsersToProjectResponse)) {
    throw new Error('Expected argument of type web_api.AddUsersToProjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_AddUsersToProjectResponse(buffer_arg) {
  return web$api_pb.AddUsersToProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_ArchiveProjectRequest(arg) {
  if (!(arg instanceof web$api_pb.ArchiveProjectRequest)) {
    throw new Error('Expected argument of type web_api.ArchiveProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_ArchiveProjectRequest(buffer_arg) {
  return web$api_pb.ArchiveProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_ArchiveProjectResponse(arg) {
  if (!(arg instanceof web$api_pb.ArchiveProjectResponse)) {
    throw new Error('Expected argument of type web_api.ArchiveProjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_ArchiveProjectResponse(buffer_arg) {
  return web$api_pb.ArchiveProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_AuthenticateRequest(arg) {
  if (!(arg instanceof web$api_pb.AuthenticateRequest)) {
    throw new Error('Expected argument of type web_api.AuthenticateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_AuthenticateRequest(buffer_arg) {
  return web$api_pb.AuthenticateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_AuthenticateResponse(arg) {
  if (!(arg instanceof web$api_pb.AuthenticateResponse)) {
    throw new Error('Expected argument of type web_api.AuthenticateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_AuthenticateResponse(buffer_arg) {
  return web$api_pb.AuthenticateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_AuthorizeRequest(arg) {
  if (!(arg instanceof web$api_pb.AuthorizeRequest)) {
    throw new Error('Expected argument of type web_api.AuthorizeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_AuthorizeRequest(buffer_arg) {
  return web$api_pb.AuthorizeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_ChangePasswordRequest(arg) {
  if (!(arg instanceof web$api_pb.ChangePasswordRequest)) {
    throw new Error('Expected argument of type web_api.ChangePasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_ChangePasswordRequest(buffer_arg) {
  return web$api_pb.ChangePasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_ChangePasswordResponse(arg) {
  if (!(arg instanceof web$api_pb.ChangePasswordResponse)) {
    throw new Error('Expected argument of type web_api.ChangePasswordResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_ChangePasswordResponse(buffer_arg) {
  return web$api_pb.ChangePasswordResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_CreateOrganizationRequest(arg) {
  if (!(arg instanceof web$api_pb.CreateOrganizationRequest)) {
    throw new Error('Expected argument of type web_api.CreateOrganizationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_CreateOrganizationRequest(buffer_arg) {
  return web$api_pb.CreateOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_CreateOrganizationResponse(arg) {
  if (!(arg instanceof web$api_pb.CreateOrganizationResponse)) {
    throw new Error('Expected argument of type web_api.CreateOrganizationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_CreateOrganizationResponse(buffer_arg) {
  return web$api_pb.CreateOrganizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_CreatePasswordRequest(arg) {
  if (!(arg instanceof web$api_pb.CreatePasswordRequest)) {
    throw new Error('Expected argument of type web_api.CreatePasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_CreatePasswordRequest(buffer_arg) {
  return web$api_pb.CreatePasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_CreatePasswordResponse(arg) {
  if (!(arg instanceof web$api_pb.CreatePasswordResponse)) {
    throw new Error('Expected argument of type web_api.CreatePasswordResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_CreatePasswordResponse(buffer_arg) {
  return web$api_pb.CreatePasswordResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_CreateProjectCredentialRequest(arg) {
  if (!(arg instanceof web$api_pb.CreateProjectCredentialRequest)) {
    throw new Error('Expected argument of type web_api.CreateProjectCredentialRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_CreateProjectCredentialRequest(buffer_arg) {
  return web$api_pb.CreateProjectCredentialRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_CreateProjectCredentialResponse(arg) {
  if (!(arg instanceof web$api_pb.CreateProjectCredentialResponse)) {
    throw new Error('Expected argument of type web_api.CreateProjectCredentialResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_CreateProjectCredentialResponse(buffer_arg) {
  return web$api_pb.CreateProjectCredentialResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_CreateProjectRequest(arg) {
  if (!(arg instanceof web$api_pb.CreateProjectRequest)) {
    throw new Error('Expected argument of type web_api.CreateProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_CreateProjectRequest(buffer_arg) {
  return web$api_pb.CreateProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_CreateProjectResponse(arg) {
  if (!(arg instanceof web$api_pb.CreateProjectResponse)) {
    throw new Error('Expected argument of type web_api.CreateProjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_CreateProjectResponse(buffer_arg) {
  return web$api_pb.CreateProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_ForgotPasswordRequest(arg) {
  if (!(arg instanceof web$api_pb.ForgotPasswordRequest)) {
    throw new Error('Expected argument of type web_api.ForgotPasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_ForgotPasswordRequest(buffer_arg) {
  return web$api_pb.ForgotPasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_ForgotPasswordResponse(arg) {
  if (!(arg instanceof web$api_pb.ForgotPasswordResponse)) {
    throw new Error('Expected argument of type web_api.ForgotPasswordResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_ForgotPasswordResponse(buffer_arg) {
  return web$api_pb.ForgotPasswordResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_GetAllProjectCredentialRequest(arg) {
  if (!(arg instanceof web$api_pb.GetAllProjectCredentialRequest)) {
    throw new Error('Expected argument of type web_api.GetAllProjectCredentialRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_GetAllProjectCredentialRequest(buffer_arg) {
  return web$api_pb.GetAllProjectCredentialRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_GetAllProjectCredentialResponse(arg) {
  if (!(arg instanceof web$api_pb.GetAllProjectCredentialResponse)) {
    throw new Error('Expected argument of type web_api.GetAllProjectCredentialResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_GetAllProjectCredentialResponse(buffer_arg) {
  return web$api_pb.GetAllProjectCredentialResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_GetAllProjectRequest(arg) {
  if (!(arg instanceof web$api_pb.GetAllProjectRequest)) {
    throw new Error('Expected argument of type web_api.GetAllProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_GetAllProjectRequest(buffer_arg) {
  return web$api_pb.GetAllProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_GetAllProjectResponse(arg) {
  if (!(arg instanceof web$api_pb.GetAllProjectResponse)) {
    throw new Error('Expected argument of type web_api.GetAllProjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_GetAllProjectResponse(buffer_arg) {
  return web$api_pb.GetAllProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_GetAllUserRequest(arg) {
  if (!(arg instanceof web$api_pb.GetAllUserRequest)) {
    throw new Error('Expected argument of type web_api.GetAllUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_GetAllUserRequest(buffer_arg) {
  return web$api_pb.GetAllUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_GetAllUserResponse(arg) {
  if (!(arg instanceof web$api_pb.GetAllUserResponse)) {
    throw new Error('Expected argument of type web_api.GetAllUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_GetAllUserResponse(buffer_arg) {
  return web$api_pb.GetAllUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_GetOrganizationRequest(arg) {
  if (!(arg instanceof web$api_pb.GetOrganizationRequest)) {
    throw new Error('Expected argument of type web_api.GetOrganizationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_GetOrganizationRequest(buffer_arg) {
  return web$api_pb.GetOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_GetOrganizationResponse(arg) {
  if (!(arg instanceof web$api_pb.GetOrganizationResponse)) {
    throw new Error('Expected argument of type web_api.GetOrganizationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_GetOrganizationResponse(buffer_arg) {
  return web$api_pb.GetOrganizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_GetProjectRequest(arg) {
  if (!(arg instanceof web$api_pb.GetProjectRequest)) {
    throw new Error('Expected argument of type web_api.GetProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_GetProjectRequest(buffer_arg) {
  return web$api_pb.GetProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_GetProjectResponse(arg) {
  if (!(arg instanceof web$api_pb.GetProjectResponse)) {
    throw new Error('Expected argument of type web_api.GetProjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_GetProjectResponse(buffer_arg) {
  return web$api_pb.GetProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_GetUserRequest(arg) {
  if (!(arg instanceof web$api_pb.GetUserRequest)) {
    throw new Error('Expected argument of type web_api.GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_GetUserRequest(buffer_arg) {
  return web$api_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_GetUserResponse(arg) {
  if (!(arg instanceof web$api_pb.GetUserResponse)) {
    throw new Error('Expected argument of type web_api.GetUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_GetUserResponse(buffer_arg) {
  return web$api_pb.GetUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_RegisterUserRequest(arg) {
  if (!(arg instanceof web$api_pb.RegisterUserRequest)) {
    throw new Error('Expected argument of type web_api.RegisterUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_RegisterUserRequest(buffer_arg) {
  return web$api_pb.RegisterUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_ScopeAuthorizeRequest(arg) {
  if (!(arg instanceof web$api_pb.ScopeAuthorizeRequest)) {
    throw new Error('Expected argument of type web_api.ScopeAuthorizeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_ScopeAuthorizeRequest(buffer_arg) {
  return web$api_pb.ScopeAuthorizeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_ScopedAuthenticationResponse(arg) {
  if (!(arg instanceof web$api_pb.ScopedAuthenticationResponse)) {
    throw new Error('Expected argument of type web_api.ScopedAuthenticationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_ScopedAuthenticationResponse(buffer_arg) {
  return web$api_pb.ScopedAuthenticationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_SocialAuthenticationRequest(arg) {
  if (!(arg instanceof web$api_pb.SocialAuthenticationRequest)) {
    throw new Error('Expected argument of type web_api.SocialAuthenticationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_SocialAuthenticationRequest(buffer_arg) {
  return web$api_pb.SocialAuthenticationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_UpdateBillingInformationRequest(arg) {
  if (!(arg instanceof web$api_pb.UpdateBillingInformationRequest)) {
    throw new Error('Expected argument of type web_api.UpdateBillingInformationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_UpdateBillingInformationRequest(buffer_arg) {
  return web$api_pb.UpdateBillingInformationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_UpdateOrganizationRequest(arg) {
  if (!(arg instanceof web$api_pb.UpdateOrganizationRequest)) {
    throw new Error('Expected argument of type web_api.UpdateOrganizationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_UpdateOrganizationRequest(buffer_arg) {
  return web$api_pb.UpdateOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_UpdateOrganizationResponse(arg) {
  if (!(arg instanceof web$api_pb.UpdateOrganizationResponse)) {
    throw new Error('Expected argument of type web_api.UpdateOrganizationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_UpdateOrganizationResponse(buffer_arg) {
  return web$api_pb.UpdateOrganizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_UpdateProjectRequest(arg) {
  if (!(arg instanceof web$api_pb.UpdateProjectRequest)) {
    throw new Error('Expected argument of type web_api.UpdateProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_UpdateProjectRequest(buffer_arg) {
  return web$api_pb.UpdateProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_UpdateProjectResponse(arg) {
  if (!(arg instanceof web$api_pb.UpdateProjectResponse)) {
    throw new Error('Expected argument of type web_api.UpdateProjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_UpdateProjectResponse(buffer_arg) {
  return web$api_pb.UpdateProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_UpdateUserRequest(arg) {
  if (!(arg instanceof web$api_pb.UpdateUserRequest)) {
    throw new Error('Expected argument of type web_api.UpdateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_UpdateUserRequest(buffer_arg) {
  return web$api_pb.UpdateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_UpdateUserResponse(arg) {
  if (!(arg instanceof web$api_pb.UpdateUserResponse)) {
    throw new Error('Expected argument of type web_api.UpdateUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_UpdateUserResponse(buffer_arg) {
  return web$api_pb.UpdateUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_VerifyTokenRequest(arg) {
  if (!(arg instanceof web$api_pb.VerifyTokenRequest)) {
    throw new Error('Expected argument of type web_api.VerifyTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_VerifyTokenRequest(buffer_arg) {
  return web$api_pb.VerifyTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_web_api_VerifyTokenResponse(arg) {
  if (!(arg instanceof web$api_pb.VerifyTokenResponse)) {
    throw new Error('Expected argument of type web_api.VerifyTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_web_api_VerifyTokenResponse(buffer_arg) {
  return web$api_pb.VerifyTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthenticationServiceService = exports.AuthenticationServiceService = {
  authenticate: {
    path: '/web_api.AuthenticationService/Authenticate',
    requestStream: false,
    responseStream: false,
    requestType: web$api_pb.AuthenticateRequest,
    responseType: web$api_pb.AuthenticateResponse,
    requestSerialize: serialize_web_api_AuthenticateRequest,
    requestDeserialize: deserialize_web_api_AuthenticateRequest,
    responseSerialize: serialize_web_api_AuthenticateResponse,
    responseDeserialize: deserialize_web_api_AuthenticateResponse,
  },
  registerUser: {
    path: '/web_api.AuthenticationService/RegisterUser',
    requestStream: false,
    responseStream: false,
    requestType: web$api_pb.RegisterUserRequest,
    responseType: web$api_pb.AuthenticateResponse,
    requestSerialize: serialize_web_api_RegisterUserRequest,
    requestDeserialize: deserialize_web_api_RegisterUserRequest,
    responseSerialize: serialize_web_api_AuthenticateResponse,
    responseDeserialize: deserialize_web_api_AuthenticateResponse,
  },
  authorize: {
    path: '/web_api.AuthenticationService/Authorize',
    requestStream: false,
    responseStream: false,
    requestType: web$api_pb.AuthorizeRequest,
    responseType: web$api_pb.AuthenticateResponse,
    requestSerialize: serialize_web_api_AuthorizeRequest,
    requestDeserialize: deserialize_web_api_AuthorizeRequest,
    responseSerialize: serialize_web_api_AuthenticateResponse,
    responseDeserialize: deserialize_web_api_AuthenticateResponse,
  },
  scopeAuthorize: {
    path: '/web_api.AuthenticationService/ScopeAuthorize',
    requestStream: false,
    responseStream: false,
    requestType: web$api_pb.ScopeAuthorizeRequest,
    responseType: web$api_pb.ScopedAuthenticationResponse,
    requestSerialize: serialize_web_api_ScopeAuthorizeRequest,
    requestDeserialize: deserialize_web_api_ScopeAuthorizeRequest,
    responseSerialize: serialize_web_api_ScopedAuthenticationResponse,
    responseDeserialize: deserialize_web_api_ScopedAuthenticationResponse,
  },
  //
verifyToken: {
    path: '/web_api.AuthenticationService/VerifyToken',
    requestStream: false,
    responseStream: false,
    requestType: web$api_pb.VerifyTokenRequest,
    responseType: web$api_pb.VerifyTokenResponse,
    requestSerialize: serialize_web_api_VerifyTokenRequest,
    requestDeserialize: deserialize_web_api_VerifyTokenRequest,
    responseSerialize: serialize_web_api_VerifyTokenResponse,
    responseDeserialize: deserialize_web_api_VerifyTokenResponse,
  },
  forgotPassword: {
    path: '/web_api.AuthenticationService/ForgotPassword',
    requestStream: false,
    responseStream: false,
    requestType: web$api_pb.ForgotPasswordRequest,
    responseType: web$api_pb.ForgotPasswordResponse,
    requestSerialize: serialize_web_api_ForgotPasswordRequest,
    requestDeserialize: deserialize_web_api_ForgotPasswordRequest,
    responseSerialize: serialize_web_api_ForgotPasswordResponse,
    responseDeserialize: deserialize_web_api_ForgotPasswordResponse,
  },
  createPassword: {
    path: '/web_api.AuthenticationService/CreatePassword',
    requestStream: false,
    responseStream: false,
    requestType: web$api_pb.CreatePasswordRequest,
    responseType: web$api_pb.CreatePasswordResponse,
    requestSerialize: serialize_web_api_CreatePasswordRequest,
    requestDeserialize: deserialize_web_api_CreatePasswordRequest,
    responseSerialize: serialize_web_api_CreatePasswordResponse,
    responseDeserialize: deserialize_web_api_CreatePasswordResponse,
  },
  changePassword: {
    path: '/web_api.AuthenticationService/ChangePassword',
    requestStream: false,
    responseStream: false,
    requestType: web$api_pb.ChangePasswordRequest,
    responseType: web$api_pb.ChangePasswordResponse,
    requestSerialize: serialize_web_api_ChangePasswordRequest,
    requestDeserialize: deserialize_web_api_ChangePasswordRequest,
    responseSerialize: serialize_web_api_ChangePasswordResponse,
    responseDeserialize: deserialize_web_api_ChangePasswordResponse,
  },
  //
getUser: {
    path: '/web_api.AuthenticationService/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: web$api_pb.GetUserRequest,
    responseType: web$api_pb.GetUserResponse,
    requestSerialize: serialize_web_api_GetUserRequest,
    requestDeserialize: deserialize_web_api_GetUserRequest,
    responseSerialize: serialize_web_api_GetUserResponse,
    responseDeserialize: deserialize_web_api_GetUserResponse,
  },
  updateUser: {
    path: '/web_api.AuthenticationService/UpdateUser',
    requestStream: false,
    responseStream: false,
    requestType: web$api_pb.UpdateUserRequest,
    responseType: web$api_pb.UpdateUserResponse,
    requestSerialize: serialize_web_api_UpdateUserRequest,
    requestDeserialize: deserialize_web_api_UpdateUserRequest,
    responseSerialize: serialize_web_api_UpdateUserResponse,
    responseDeserialize: deserialize_web_api_UpdateUserResponse,
  },
  getAllUser: {
    path: '/web_api.AuthenticationService/GetAllUser',
    requestStream: false,
    responseStream: false,
    requestType: web$api_pb.GetAllUserRequest,
    responseType: web$api_pb.GetAllUserResponse,
    requestSerialize: serialize_web_api_GetAllUserRequest,
    requestDeserialize: deserialize_web_api_GetAllUserRequest,
    responseSerialize: serialize_web_api_GetAllUserResponse,
    responseDeserialize: deserialize_web_api_GetAllUserResponse,
  },
  linkedin: {
    path: '/web_api.AuthenticationService/Linkedin',
    requestStream: false,
    responseStream: false,
    requestType: web$api_pb.SocialAuthenticationRequest,
    responseType: web$api_pb.AuthenticateResponse,
    requestSerialize: serialize_web_api_SocialAuthenticationRequest,
    requestDeserialize: deserialize_web_api_SocialAuthenticationRequest,
    responseSerialize: serialize_web_api_AuthenticateResponse,
    responseDeserialize: deserialize_web_api_AuthenticateResponse,
  },
  google: {
    path: '/web_api.AuthenticationService/Google',
    requestStream: false,
    responseStream: false,
    requestType: web$api_pb.SocialAuthenticationRequest,
    responseType: web$api_pb.AuthenticateResponse,
    requestSerialize: serialize_web_api_SocialAuthenticationRequest,
    requestDeserialize: deserialize_web_api_SocialAuthenticationRequest,
    responseSerialize: serialize_web_api_AuthenticateResponse,
    responseDeserialize: deserialize_web_api_AuthenticateResponse,
  },
  github: {
    path: '/web_api.AuthenticationService/Github',
    requestStream: false,
    responseStream: false,
    requestType: web$api_pb.SocialAuthenticationRequest,
    responseType: web$api_pb.AuthenticateResponse,
    requestSerialize: serialize_web_api_SocialAuthenticationRequest,
    requestDeserialize: deserialize_web_api_SocialAuthenticationRequest,
    responseSerialize: serialize_web_api_AuthenticateResponse,
    responseDeserialize: deserialize_web_api_AuthenticateResponse,
  },
};

exports.AuthenticationServiceClient = grpc.makeGenericClientConstructor(AuthenticationServiceService, 'AuthenticationService');
var OrganizationServiceService = exports.OrganizationServiceService = {
  createOrganization: {
    path: '/web_api.OrganizationService/CreateOrganization',
    requestStream: false,
    responseStream: false,
    requestType: web$api_pb.CreateOrganizationRequest,
    responseType: web$api_pb.CreateOrganizationResponse,
    requestSerialize: serialize_web_api_CreateOrganizationRequest,
    requestDeserialize: deserialize_web_api_CreateOrganizationRequest,
    responseSerialize: serialize_web_api_CreateOrganizationResponse,
    responseDeserialize: deserialize_web_api_CreateOrganizationResponse,
  },
  getOrganization: {
    path: '/web_api.OrganizationService/GetOrganization',
    requestStream: false,
    responseStream: false,
    requestType: web$api_pb.GetOrganizationRequest,
    responseType: web$api_pb.GetOrganizationResponse,
    requestSerialize: serialize_web_api_GetOrganizationRequest,
    requestDeserialize: deserialize_web_api_GetOrganizationRequest,
    responseSerialize: serialize_web_api_GetOrganizationResponse,
    responseDeserialize: deserialize_web_api_GetOrganizationResponse,
  },
  updateOrganization: {
    path: '/web_api.OrganizationService/UpdateOrganization',
    requestStream: false,
    responseStream: false,
    requestType: web$api_pb.UpdateOrganizationRequest,
    responseType: web$api_pb.UpdateOrganizationResponse,
    requestSerialize: serialize_web_api_UpdateOrganizationRequest,
    requestDeserialize: deserialize_web_api_UpdateOrganizationRequest,
    responseSerialize: serialize_web_api_UpdateOrganizationResponse,
    responseDeserialize: deserialize_web_api_UpdateOrganizationResponse,
  },
  updateBillingInformation: {
    path: '/web_api.OrganizationService/UpdateBillingInformation',
    requestStream: false,
    responseStream: false,
    requestType: web$api_pb.UpdateBillingInformationRequest,
    responseType: common_pb.BaseResponse,
    requestSerialize: serialize_web_api_UpdateBillingInformationRequest,
    requestDeserialize: deserialize_web_api_UpdateBillingInformationRequest,
    responseSerialize: serialize_BaseResponse,
    responseDeserialize: deserialize_BaseResponse,
  },
};

exports.OrganizationServiceClient = grpc.makeGenericClientConstructor(OrganizationServiceService, 'OrganizationService');
var ProjectServiceService = exports.ProjectServiceService = {
  createProject: {
    path: '/web_api.ProjectService/CreateProject',
    requestStream: false,
    responseStream: false,
    requestType: web$api_pb.CreateProjectRequest,
    responseType: web$api_pb.CreateProjectResponse,
    requestSerialize: serialize_web_api_CreateProjectRequest,
    requestDeserialize: deserialize_web_api_CreateProjectRequest,
    responseSerialize: serialize_web_api_CreateProjectResponse,
    responseDeserialize: deserialize_web_api_CreateProjectResponse,
  },
  updateProject: {
    path: '/web_api.ProjectService/UpdateProject',
    requestStream: false,
    responseStream: false,
    requestType: web$api_pb.UpdateProjectRequest,
    responseType: web$api_pb.UpdateProjectResponse,
    requestSerialize: serialize_web_api_UpdateProjectRequest,
    requestDeserialize: deserialize_web_api_UpdateProjectRequest,
    responseSerialize: serialize_web_api_UpdateProjectResponse,
    responseDeserialize: deserialize_web_api_UpdateProjectResponse,
  },
  getProject: {
    path: '/web_api.ProjectService/GetProject',
    requestStream: false,
    responseStream: false,
    requestType: web$api_pb.GetProjectRequest,
    responseType: web$api_pb.GetProjectResponse,
    requestSerialize: serialize_web_api_GetProjectRequest,
    requestDeserialize: deserialize_web_api_GetProjectRequest,
    responseSerialize: serialize_web_api_GetProjectResponse,
    responseDeserialize: deserialize_web_api_GetProjectResponse,
  },
  getAllProject: {
    path: '/web_api.ProjectService/GetAllProject',
    requestStream: false,
    responseStream: false,
    requestType: web$api_pb.GetAllProjectRequest,
    responseType: web$api_pb.GetAllProjectResponse,
    requestSerialize: serialize_web_api_GetAllProjectRequest,
    requestDeserialize: deserialize_web_api_GetAllProjectRequest,
    responseSerialize: serialize_web_api_GetAllProjectResponse,
    responseDeserialize: deserialize_web_api_GetAllProjectResponse,
  },
  addUsersToProject: {
    path: '/web_api.ProjectService/AddUsersToProject',
    requestStream: false,
    responseStream: false,
    requestType: web$api_pb.AddUsersToProjectRequest,
    responseType: web$api_pb.AddUsersToProjectResponse,
    requestSerialize: serialize_web_api_AddUsersToProjectRequest,
    requestDeserialize: deserialize_web_api_AddUsersToProjectRequest,
    responseSerialize: serialize_web_api_AddUsersToProjectResponse,
    responseDeserialize: deserialize_web_api_AddUsersToProjectResponse,
  },
  archiveProject: {
    path: '/web_api.ProjectService/ArchiveProject',
    requestStream: false,
    responseStream: false,
    requestType: web$api_pb.ArchiveProjectRequest,
    responseType: web$api_pb.ArchiveProjectResponse,
    requestSerialize: serialize_web_api_ArchiveProjectRequest,
    requestDeserialize: deserialize_web_api_ArchiveProjectRequest,
    responseSerialize: serialize_web_api_ArchiveProjectResponse,
    responseDeserialize: deserialize_web_api_ArchiveProjectResponse,
  },
  createProjectCredential: {
    path: '/web_api.ProjectService/CreateProjectCredential',
    requestStream: false,
    responseStream: false,
    requestType: web$api_pb.CreateProjectCredentialRequest,
    responseType: web$api_pb.CreateProjectCredentialResponse,
    requestSerialize: serialize_web_api_CreateProjectCredentialRequest,
    requestDeserialize: deserialize_web_api_CreateProjectCredentialRequest,
    responseSerialize: serialize_web_api_CreateProjectCredentialResponse,
    responseDeserialize: deserialize_web_api_CreateProjectCredentialResponse,
  },
  getAllProjectCredential: {
    path: '/web_api.ProjectService/GetAllProjectCredential',
    requestStream: false,
    responseStream: false,
    requestType: web$api_pb.GetAllProjectCredentialRequest,
    responseType: web$api_pb.GetAllProjectCredentialResponse,
    requestSerialize: serialize_web_api_GetAllProjectCredentialRequest,
    requestDeserialize: deserialize_web_api_GetAllProjectCredentialRequest,
    responseSerialize: serialize_web_api_GetAllProjectCredentialResponse,
    responseDeserialize: deserialize_web_api_GetAllProjectCredentialResponse,
  },
};

exports.ProjectServiceClient = grpc.makeGenericClientConstructor(ProjectServiceService, 'ProjectService');
