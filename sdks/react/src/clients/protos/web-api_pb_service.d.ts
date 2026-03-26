// package: web_api
// file: web-api.proto

import * as web_api_pb from "./web-api_pb";
import * as common_pb from "./common_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AuthenticationServiceAuthenticate = {
  readonly methodName: string;
  readonly service: typeof AuthenticationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.AuthenticateRequest;
  readonly responseType: typeof web_api_pb.AuthenticateResponse;
};

type AuthenticationServiceRegisterUser = {
  readonly methodName: string;
  readonly service: typeof AuthenticationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.RegisterUserRequest;
  readonly responseType: typeof web_api_pb.AuthenticateResponse;
};

type AuthenticationServiceAuthorize = {
  readonly methodName: string;
  readonly service: typeof AuthenticationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.AuthorizeRequest;
  readonly responseType: typeof web_api_pb.AuthenticateResponse;
};

type AuthenticationServiceScopeAuthorize = {
  readonly methodName: string;
  readonly service: typeof AuthenticationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.ScopeAuthorizeRequest;
  readonly responseType: typeof web_api_pb.ScopedAuthenticationResponse;
};

type AuthenticationServiceVerifyToken = {
  readonly methodName: string;
  readonly service: typeof AuthenticationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.VerifyTokenRequest;
  readonly responseType: typeof web_api_pb.VerifyTokenResponse;
};

type AuthenticationServiceForgotPassword = {
  readonly methodName: string;
  readonly service: typeof AuthenticationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.ForgotPasswordRequest;
  readonly responseType: typeof web_api_pb.ForgotPasswordResponse;
};

type AuthenticationServiceCreatePassword = {
  readonly methodName: string;
  readonly service: typeof AuthenticationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.CreatePasswordRequest;
  readonly responseType: typeof web_api_pb.CreatePasswordResponse;
};

type AuthenticationServiceChangePassword = {
  readonly methodName: string;
  readonly service: typeof AuthenticationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.ChangePasswordRequest;
  readonly responseType: typeof web_api_pb.ChangePasswordResponse;
};

type AuthenticationServiceGetUser = {
  readonly methodName: string;
  readonly service: typeof AuthenticationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.GetUserRequest;
  readonly responseType: typeof web_api_pb.GetUserResponse;
};

type AuthenticationServiceUpdateUser = {
  readonly methodName: string;
  readonly service: typeof AuthenticationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.UpdateUserRequest;
  readonly responseType: typeof web_api_pb.UpdateUserResponse;
};

type AuthenticationServiceGetAllUser = {
  readonly methodName: string;
  readonly service: typeof AuthenticationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.GetAllUserRequest;
  readonly responseType: typeof web_api_pb.GetAllUserResponse;
};

type AuthenticationServiceLinkedin = {
  readonly methodName: string;
  readonly service: typeof AuthenticationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.SocialAuthenticationRequest;
  readonly responseType: typeof web_api_pb.AuthenticateResponse;
};

type AuthenticationServiceGoogle = {
  readonly methodName: string;
  readonly service: typeof AuthenticationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.SocialAuthenticationRequest;
  readonly responseType: typeof web_api_pb.AuthenticateResponse;
};

type AuthenticationServiceGithub = {
  readonly methodName: string;
  readonly service: typeof AuthenticationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.SocialAuthenticationRequest;
  readonly responseType: typeof web_api_pb.AuthenticateResponse;
};

export class AuthenticationService {
  static readonly serviceName: string;
  static readonly Authenticate: AuthenticationServiceAuthenticate;
  static readonly RegisterUser: AuthenticationServiceRegisterUser;
  static readonly Authorize: AuthenticationServiceAuthorize;
  static readonly ScopeAuthorize: AuthenticationServiceScopeAuthorize;
  static readonly VerifyToken: AuthenticationServiceVerifyToken;
  static readonly ForgotPassword: AuthenticationServiceForgotPassword;
  static readonly CreatePassword: AuthenticationServiceCreatePassword;
  static readonly ChangePassword: AuthenticationServiceChangePassword;
  static readonly GetUser: AuthenticationServiceGetUser;
  static readonly UpdateUser: AuthenticationServiceUpdateUser;
  static readonly GetAllUser: AuthenticationServiceGetAllUser;
  static readonly Linkedin: AuthenticationServiceLinkedin;
  static readonly Google: AuthenticationServiceGoogle;
  static readonly Github: AuthenticationServiceGithub;
}

type OrganizationServiceCreateOrganization = {
  readonly methodName: string;
  readonly service: typeof OrganizationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.CreateOrganizationRequest;
  readonly responseType: typeof web_api_pb.CreateOrganizationResponse;
};

type OrganizationServiceGetOrganization = {
  readonly methodName: string;
  readonly service: typeof OrganizationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.GetOrganizationRequest;
  readonly responseType: typeof web_api_pb.GetOrganizationResponse;
};

type OrganizationServiceUpdateOrganization = {
  readonly methodName: string;
  readonly service: typeof OrganizationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.UpdateOrganizationRequest;
  readonly responseType: typeof web_api_pb.UpdateOrganizationResponse;
};

type OrganizationServiceUpdateBillingInformation = {
  readonly methodName: string;
  readonly service: typeof OrganizationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.UpdateBillingInformationRequest;
  readonly responseType: typeof common_pb.BaseResponse;
};

export class OrganizationService {
  static readonly serviceName: string;
  static readonly CreateOrganization: OrganizationServiceCreateOrganization;
  static readonly GetOrganization: OrganizationServiceGetOrganization;
  static readonly UpdateOrganization: OrganizationServiceUpdateOrganization;
  static readonly UpdateBillingInformation: OrganizationServiceUpdateBillingInformation;
}

type ProjectServiceCreateProject = {
  readonly methodName: string;
  readonly service: typeof ProjectService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.CreateProjectRequest;
  readonly responseType: typeof web_api_pb.CreateProjectResponse;
};

type ProjectServiceUpdateProject = {
  readonly methodName: string;
  readonly service: typeof ProjectService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.UpdateProjectRequest;
  readonly responseType: typeof web_api_pb.UpdateProjectResponse;
};

type ProjectServiceGetProject = {
  readonly methodName: string;
  readonly service: typeof ProjectService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.GetProjectRequest;
  readonly responseType: typeof web_api_pb.GetProjectResponse;
};

type ProjectServiceGetAllProject = {
  readonly methodName: string;
  readonly service: typeof ProjectService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.GetAllProjectRequest;
  readonly responseType: typeof web_api_pb.GetAllProjectResponse;
};

type ProjectServiceAddUsersToProject = {
  readonly methodName: string;
  readonly service: typeof ProjectService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.AddUsersToProjectRequest;
  readonly responseType: typeof web_api_pb.AddUsersToProjectResponse;
};

type ProjectServiceArchiveProject = {
  readonly methodName: string;
  readonly service: typeof ProjectService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.ArchiveProjectRequest;
  readonly responseType: typeof web_api_pb.ArchiveProjectResponse;
};

type ProjectServiceCreateProjectCredential = {
  readonly methodName: string;
  readonly service: typeof ProjectService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.CreateProjectCredentialRequest;
  readonly responseType: typeof web_api_pb.CreateProjectCredentialResponse;
};

type ProjectServiceGetAllProjectCredential = {
  readonly methodName: string;
  readonly service: typeof ProjectService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.GetAllProjectCredentialRequest;
  readonly responseType: typeof web_api_pb.GetAllProjectCredentialResponse;
};

export class ProjectService {
  static readonly serviceName: string;
  static readonly CreateProject: ProjectServiceCreateProject;
  static readonly UpdateProject: ProjectServiceUpdateProject;
  static readonly GetProject: ProjectServiceGetProject;
  static readonly GetAllProject: ProjectServiceGetAllProject;
  static readonly AddUsersToProject: ProjectServiceAddUsersToProject;
  static readonly ArchiveProject: ProjectServiceArchiveProject;
  static readonly CreateProjectCredential: ProjectServiceCreateProjectCredential;
  static readonly GetAllProjectCredential: ProjectServiceGetAllProjectCredential;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class AuthenticationServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  authenticate(
    requestMessage: web_api_pb.AuthenticateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.AuthenticateResponse|null) => void
  ): UnaryResponse;
  authenticate(
    requestMessage: web_api_pb.AuthenticateRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.AuthenticateResponse|null) => void
  ): UnaryResponse;
  registerUser(
    requestMessage: web_api_pb.RegisterUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.AuthenticateResponse|null) => void
  ): UnaryResponse;
  registerUser(
    requestMessage: web_api_pb.RegisterUserRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.AuthenticateResponse|null) => void
  ): UnaryResponse;
  authorize(
    requestMessage: web_api_pb.AuthorizeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.AuthenticateResponse|null) => void
  ): UnaryResponse;
  authorize(
    requestMessage: web_api_pb.AuthorizeRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.AuthenticateResponse|null) => void
  ): UnaryResponse;
  scopeAuthorize(
    requestMessage: web_api_pb.ScopeAuthorizeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.ScopedAuthenticationResponse|null) => void
  ): UnaryResponse;
  scopeAuthorize(
    requestMessage: web_api_pb.ScopeAuthorizeRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.ScopedAuthenticationResponse|null) => void
  ): UnaryResponse;
  verifyToken(
    requestMessage: web_api_pb.VerifyTokenRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.VerifyTokenResponse|null) => void
  ): UnaryResponse;
  verifyToken(
    requestMessage: web_api_pb.VerifyTokenRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.VerifyTokenResponse|null) => void
  ): UnaryResponse;
  forgotPassword(
    requestMessage: web_api_pb.ForgotPasswordRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.ForgotPasswordResponse|null) => void
  ): UnaryResponse;
  forgotPassword(
    requestMessage: web_api_pb.ForgotPasswordRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.ForgotPasswordResponse|null) => void
  ): UnaryResponse;
  createPassword(
    requestMessage: web_api_pb.CreatePasswordRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.CreatePasswordResponse|null) => void
  ): UnaryResponse;
  createPassword(
    requestMessage: web_api_pb.CreatePasswordRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.CreatePasswordResponse|null) => void
  ): UnaryResponse;
  changePassword(
    requestMessage: web_api_pb.ChangePasswordRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.ChangePasswordResponse|null) => void
  ): UnaryResponse;
  changePassword(
    requestMessage: web_api_pb.ChangePasswordRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.ChangePasswordResponse|null) => void
  ): UnaryResponse;
  getUser(
    requestMessage: web_api_pb.GetUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.GetUserResponse|null) => void
  ): UnaryResponse;
  getUser(
    requestMessage: web_api_pb.GetUserRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.GetUserResponse|null) => void
  ): UnaryResponse;
  updateUser(
    requestMessage: web_api_pb.UpdateUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.UpdateUserResponse|null) => void
  ): UnaryResponse;
  updateUser(
    requestMessage: web_api_pb.UpdateUserRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.UpdateUserResponse|null) => void
  ): UnaryResponse;
  getAllUser(
    requestMessage: web_api_pb.GetAllUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.GetAllUserResponse|null) => void
  ): UnaryResponse;
  getAllUser(
    requestMessage: web_api_pb.GetAllUserRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.GetAllUserResponse|null) => void
  ): UnaryResponse;
  linkedin(
    requestMessage: web_api_pb.SocialAuthenticationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.AuthenticateResponse|null) => void
  ): UnaryResponse;
  linkedin(
    requestMessage: web_api_pb.SocialAuthenticationRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.AuthenticateResponse|null) => void
  ): UnaryResponse;
  google(
    requestMessage: web_api_pb.SocialAuthenticationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.AuthenticateResponse|null) => void
  ): UnaryResponse;
  google(
    requestMessage: web_api_pb.SocialAuthenticationRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.AuthenticateResponse|null) => void
  ): UnaryResponse;
  github(
    requestMessage: web_api_pb.SocialAuthenticationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.AuthenticateResponse|null) => void
  ): UnaryResponse;
  github(
    requestMessage: web_api_pb.SocialAuthenticationRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.AuthenticateResponse|null) => void
  ): UnaryResponse;
}

export class OrganizationServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createOrganization(
    requestMessage: web_api_pb.CreateOrganizationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.CreateOrganizationResponse|null) => void
  ): UnaryResponse;
  createOrganization(
    requestMessage: web_api_pb.CreateOrganizationRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.CreateOrganizationResponse|null) => void
  ): UnaryResponse;
  getOrganization(
    requestMessage: web_api_pb.GetOrganizationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.GetOrganizationResponse|null) => void
  ): UnaryResponse;
  getOrganization(
    requestMessage: web_api_pb.GetOrganizationRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.GetOrganizationResponse|null) => void
  ): UnaryResponse;
  updateOrganization(
    requestMessage: web_api_pb.UpdateOrganizationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.UpdateOrganizationResponse|null) => void
  ): UnaryResponse;
  updateOrganization(
    requestMessage: web_api_pb.UpdateOrganizationRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.UpdateOrganizationResponse|null) => void
  ): UnaryResponse;
  updateBillingInformation(
    requestMessage: web_api_pb.UpdateBillingInformationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: common_pb.BaseResponse|null) => void
  ): UnaryResponse;
  updateBillingInformation(
    requestMessage: web_api_pb.UpdateBillingInformationRequest,
    callback: (error: ServiceError|null, responseMessage: common_pb.BaseResponse|null) => void
  ): UnaryResponse;
}

export class ProjectServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createProject(
    requestMessage: web_api_pb.CreateProjectRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.CreateProjectResponse|null) => void
  ): UnaryResponse;
  createProject(
    requestMessage: web_api_pb.CreateProjectRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.CreateProjectResponse|null) => void
  ): UnaryResponse;
  updateProject(
    requestMessage: web_api_pb.UpdateProjectRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.UpdateProjectResponse|null) => void
  ): UnaryResponse;
  updateProject(
    requestMessage: web_api_pb.UpdateProjectRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.UpdateProjectResponse|null) => void
  ): UnaryResponse;
  getProject(
    requestMessage: web_api_pb.GetProjectRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.GetProjectResponse|null) => void
  ): UnaryResponse;
  getProject(
    requestMessage: web_api_pb.GetProjectRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.GetProjectResponse|null) => void
  ): UnaryResponse;
  getAllProject(
    requestMessage: web_api_pb.GetAllProjectRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.GetAllProjectResponse|null) => void
  ): UnaryResponse;
  getAllProject(
    requestMessage: web_api_pb.GetAllProjectRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.GetAllProjectResponse|null) => void
  ): UnaryResponse;
  addUsersToProject(
    requestMessage: web_api_pb.AddUsersToProjectRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.AddUsersToProjectResponse|null) => void
  ): UnaryResponse;
  addUsersToProject(
    requestMessage: web_api_pb.AddUsersToProjectRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.AddUsersToProjectResponse|null) => void
  ): UnaryResponse;
  archiveProject(
    requestMessage: web_api_pb.ArchiveProjectRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.ArchiveProjectResponse|null) => void
  ): UnaryResponse;
  archiveProject(
    requestMessage: web_api_pb.ArchiveProjectRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.ArchiveProjectResponse|null) => void
  ): UnaryResponse;
  createProjectCredential(
    requestMessage: web_api_pb.CreateProjectCredentialRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.CreateProjectCredentialResponse|null) => void
  ): UnaryResponse;
  createProjectCredential(
    requestMessage: web_api_pb.CreateProjectCredentialRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.CreateProjectCredentialResponse|null) => void
  ): UnaryResponse;
  getAllProjectCredential(
    requestMessage: web_api_pb.GetAllProjectCredentialRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.GetAllProjectCredentialResponse|null) => void
  ): UnaryResponse;
  getAllProjectCredential(
    requestMessage: web_api_pb.GetAllProjectCredentialRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.GetAllProjectCredentialResponse|null) => void
  ): UnaryResponse;
}

