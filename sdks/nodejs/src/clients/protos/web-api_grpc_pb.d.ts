// GENERATED CODE -- DO NOT EDIT!

// package: web_api
// file: web-api.proto

import * as web_api_pb from "./web-api_pb";
import * as common_pb from "./common_pb";
import * as grpc from "grpc";

interface IAuthenticationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  authenticate: grpc.MethodDefinition<web_api_pb.AuthenticateRequest, web_api_pb.AuthenticateResponse>;
  registerUser: grpc.MethodDefinition<web_api_pb.RegisterUserRequest, web_api_pb.AuthenticateResponse>;
  authorize: grpc.MethodDefinition<web_api_pb.AuthorizeRequest, web_api_pb.AuthenticateResponse>;
  scopeAuthorize: grpc.MethodDefinition<web_api_pb.ScopeAuthorizeRequest, web_api_pb.ScopedAuthenticationResponse>;
  verifyToken: grpc.MethodDefinition<web_api_pb.VerifyTokenRequest, web_api_pb.VerifyTokenResponse>;
  forgotPassword: grpc.MethodDefinition<web_api_pb.ForgotPasswordRequest, web_api_pb.ForgotPasswordResponse>;
  createPassword: grpc.MethodDefinition<web_api_pb.CreatePasswordRequest, web_api_pb.CreatePasswordResponse>;
  changePassword: grpc.MethodDefinition<web_api_pb.ChangePasswordRequest, web_api_pb.ChangePasswordResponse>;
  getUser: grpc.MethodDefinition<web_api_pb.GetUserRequest, web_api_pb.GetUserResponse>;
  updateUser: grpc.MethodDefinition<web_api_pb.UpdateUserRequest, web_api_pb.UpdateUserResponse>;
  getAllUser: grpc.MethodDefinition<web_api_pb.GetAllUserRequest, web_api_pb.GetAllUserResponse>;
  linkedin: grpc.MethodDefinition<web_api_pb.SocialAuthenticationRequest, web_api_pb.AuthenticateResponse>;
  google: grpc.MethodDefinition<web_api_pb.SocialAuthenticationRequest, web_api_pb.AuthenticateResponse>;
  github: grpc.MethodDefinition<web_api_pb.SocialAuthenticationRequest, web_api_pb.AuthenticateResponse>;
}

export const AuthenticationServiceService: IAuthenticationServiceService;

export interface IAuthenticationServiceServer extends grpc.UntypedServiceImplementation {
  authenticate: grpc.handleUnaryCall<web_api_pb.AuthenticateRequest, web_api_pb.AuthenticateResponse>;
  registerUser: grpc.handleUnaryCall<web_api_pb.RegisterUserRequest, web_api_pb.AuthenticateResponse>;
  authorize: grpc.handleUnaryCall<web_api_pb.AuthorizeRequest, web_api_pb.AuthenticateResponse>;
  scopeAuthorize: grpc.handleUnaryCall<web_api_pb.ScopeAuthorizeRequest, web_api_pb.ScopedAuthenticationResponse>;
  verifyToken: grpc.handleUnaryCall<web_api_pb.VerifyTokenRequest, web_api_pb.VerifyTokenResponse>;
  forgotPassword: grpc.handleUnaryCall<web_api_pb.ForgotPasswordRequest, web_api_pb.ForgotPasswordResponse>;
  createPassword: grpc.handleUnaryCall<web_api_pb.CreatePasswordRequest, web_api_pb.CreatePasswordResponse>;
  changePassword: grpc.handleUnaryCall<web_api_pb.ChangePasswordRequest, web_api_pb.ChangePasswordResponse>;
  getUser: grpc.handleUnaryCall<web_api_pb.GetUserRequest, web_api_pb.GetUserResponse>;
  updateUser: grpc.handleUnaryCall<web_api_pb.UpdateUserRequest, web_api_pb.UpdateUserResponse>;
  getAllUser: grpc.handleUnaryCall<web_api_pb.GetAllUserRequest, web_api_pb.GetAllUserResponse>;
  linkedin: grpc.handleUnaryCall<web_api_pb.SocialAuthenticationRequest, web_api_pb.AuthenticateResponse>;
  google: grpc.handleUnaryCall<web_api_pb.SocialAuthenticationRequest, web_api_pb.AuthenticateResponse>;
  github: grpc.handleUnaryCall<web_api_pb.SocialAuthenticationRequest, web_api_pb.AuthenticateResponse>;
}

export class AuthenticationServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  authenticate(argument: web_api_pb.AuthenticateRequest, callback: grpc.requestCallback<web_api_pb.AuthenticateResponse>): grpc.ClientUnaryCall;
  authenticate(argument: web_api_pb.AuthenticateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.AuthenticateResponse>): grpc.ClientUnaryCall;
  authenticate(argument: web_api_pb.AuthenticateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.AuthenticateResponse>): grpc.ClientUnaryCall;
  registerUser(argument: web_api_pb.RegisterUserRequest, callback: grpc.requestCallback<web_api_pb.AuthenticateResponse>): grpc.ClientUnaryCall;
  registerUser(argument: web_api_pb.RegisterUserRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.AuthenticateResponse>): grpc.ClientUnaryCall;
  registerUser(argument: web_api_pb.RegisterUserRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.AuthenticateResponse>): grpc.ClientUnaryCall;
  authorize(argument: web_api_pb.AuthorizeRequest, callback: grpc.requestCallback<web_api_pb.AuthenticateResponse>): grpc.ClientUnaryCall;
  authorize(argument: web_api_pb.AuthorizeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.AuthenticateResponse>): grpc.ClientUnaryCall;
  authorize(argument: web_api_pb.AuthorizeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.AuthenticateResponse>): grpc.ClientUnaryCall;
  scopeAuthorize(argument: web_api_pb.ScopeAuthorizeRequest, callback: grpc.requestCallback<web_api_pb.ScopedAuthenticationResponse>): grpc.ClientUnaryCall;
  scopeAuthorize(argument: web_api_pb.ScopeAuthorizeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.ScopedAuthenticationResponse>): grpc.ClientUnaryCall;
  scopeAuthorize(argument: web_api_pb.ScopeAuthorizeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.ScopedAuthenticationResponse>): grpc.ClientUnaryCall;
  verifyToken(argument: web_api_pb.VerifyTokenRequest, callback: grpc.requestCallback<web_api_pb.VerifyTokenResponse>): grpc.ClientUnaryCall;
  verifyToken(argument: web_api_pb.VerifyTokenRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.VerifyTokenResponse>): grpc.ClientUnaryCall;
  verifyToken(argument: web_api_pb.VerifyTokenRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.VerifyTokenResponse>): grpc.ClientUnaryCall;
  forgotPassword(argument: web_api_pb.ForgotPasswordRequest, callback: grpc.requestCallback<web_api_pb.ForgotPasswordResponse>): grpc.ClientUnaryCall;
  forgotPassword(argument: web_api_pb.ForgotPasswordRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.ForgotPasswordResponse>): grpc.ClientUnaryCall;
  forgotPassword(argument: web_api_pb.ForgotPasswordRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.ForgotPasswordResponse>): grpc.ClientUnaryCall;
  createPassword(argument: web_api_pb.CreatePasswordRequest, callback: grpc.requestCallback<web_api_pb.CreatePasswordResponse>): grpc.ClientUnaryCall;
  createPassword(argument: web_api_pb.CreatePasswordRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.CreatePasswordResponse>): grpc.ClientUnaryCall;
  createPassword(argument: web_api_pb.CreatePasswordRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.CreatePasswordResponse>): grpc.ClientUnaryCall;
  changePassword(argument: web_api_pb.ChangePasswordRequest, callback: grpc.requestCallback<web_api_pb.ChangePasswordResponse>): grpc.ClientUnaryCall;
  changePassword(argument: web_api_pb.ChangePasswordRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.ChangePasswordResponse>): grpc.ClientUnaryCall;
  changePassword(argument: web_api_pb.ChangePasswordRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.ChangePasswordResponse>): grpc.ClientUnaryCall;
  getUser(argument: web_api_pb.GetUserRequest, callback: grpc.requestCallback<web_api_pb.GetUserResponse>): grpc.ClientUnaryCall;
  getUser(argument: web_api_pb.GetUserRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.GetUserResponse>): grpc.ClientUnaryCall;
  getUser(argument: web_api_pb.GetUserRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.GetUserResponse>): grpc.ClientUnaryCall;
  updateUser(argument: web_api_pb.UpdateUserRequest, callback: grpc.requestCallback<web_api_pb.UpdateUserResponse>): grpc.ClientUnaryCall;
  updateUser(argument: web_api_pb.UpdateUserRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.UpdateUserResponse>): grpc.ClientUnaryCall;
  updateUser(argument: web_api_pb.UpdateUserRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.UpdateUserResponse>): grpc.ClientUnaryCall;
  getAllUser(argument: web_api_pb.GetAllUserRequest, callback: grpc.requestCallback<web_api_pb.GetAllUserResponse>): grpc.ClientUnaryCall;
  getAllUser(argument: web_api_pb.GetAllUserRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.GetAllUserResponse>): grpc.ClientUnaryCall;
  getAllUser(argument: web_api_pb.GetAllUserRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.GetAllUserResponse>): grpc.ClientUnaryCall;
  linkedin(argument: web_api_pb.SocialAuthenticationRequest, callback: grpc.requestCallback<web_api_pb.AuthenticateResponse>): grpc.ClientUnaryCall;
  linkedin(argument: web_api_pb.SocialAuthenticationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.AuthenticateResponse>): grpc.ClientUnaryCall;
  linkedin(argument: web_api_pb.SocialAuthenticationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.AuthenticateResponse>): grpc.ClientUnaryCall;
  google(argument: web_api_pb.SocialAuthenticationRequest, callback: grpc.requestCallback<web_api_pb.AuthenticateResponse>): grpc.ClientUnaryCall;
  google(argument: web_api_pb.SocialAuthenticationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.AuthenticateResponse>): grpc.ClientUnaryCall;
  google(argument: web_api_pb.SocialAuthenticationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.AuthenticateResponse>): grpc.ClientUnaryCall;
  github(argument: web_api_pb.SocialAuthenticationRequest, callback: grpc.requestCallback<web_api_pb.AuthenticateResponse>): grpc.ClientUnaryCall;
  github(argument: web_api_pb.SocialAuthenticationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.AuthenticateResponse>): grpc.ClientUnaryCall;
  github(argument: web_api_pb.SocialAuthenticationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.AuthenticateResponse>): grpc.ClientUnaryCall;
}

interface IOrganizationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createOrganization: grpc.MethodDefinition<web_api_pb.CreateOrganizationRequest, web_api_pb.CreateOrganizationResponse>;
  getOrganization: grpc.MethodDefinition<web_api_pb.GetOrganizationRequest, web_api_pb.GetOrganizationResponse>;
  updateOrganization: grpc.MethodDefinition<web_api_pb.UpdateOrganizationRequest, web_api_pb.UpdateOrganizationResponse>;
  updateBillingInformation: grpc.MethodDefinition<web_api_pb.UpdateBillingInformationRequest, common_pb.BaseResponse>;
}

export const OrganizationServiceService: IOrganizationServiceService;

export interface IOrganizationServiceServer extends grpc.UntypedServiceImplementation {
  createOrganization: grpc.handleUnaryCall<web_api_pb.CreateOrganizationRequest, web_api_pb.CreateOrganizationResponse>;
  getOrganization: grpc.handleUnaryCall<web_api_pb.GetOrganizationRequest, web_api_pb.GetOrganizationResponse>;
  updateOrganization: grpc.handleUnaryCall<web_api_pb.UpdateOrganizationRequest, web_api_pb.UpdateOrganizationResponse>;
  updateBillingInformation: grpc.handleUnaryCall<web_api_pb.UpdateBillingInformationRequest, common_pb.BaseResponse>;
}

export class OrganizationServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createOrganization(argument: web_api_pb.CreateOrganizationRequest, callback: grpc.requestCallback<web_api_pb.CreateOrganizationResponse>): grpc.ClientUnaryCall;
  createOrganization(argument: web_api_pb.CreateOrganizationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.CreateOrganizationResponse>): grpc.ClientUnaryCall;
  createOrganization(argument: web_api_pb.CreateOrganizationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.CreateOrganizationResponse>): grpc.ClientUnaryCall;
  getOrganization(argument: web_api_pb.GetOrganizationRequest, callback: grpc.requestCallback<web_api_pb.GetOrganizationResponse>): grpc.ClientUnaryCall;
  getOrganization(argument: web_api_pb.GetOrganizationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.GetOrganizationResponse>): grpc.ClientUnaryCall;
  getOrganization(argument: web_api_pb.GetOrganizationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.GetOrganizationResponse>): grpc.ClientUnaryCall;
  updateOrganization(argument: web_api_pb.UpdateOrganizationRequest, callback: grpc.requestCallback<web_api_pb.UpdateOrganizationResponse>): grpc.ClientUnaryCall;
  updateOrganization(argument: web_api_pb.UpdateOrganizationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.UpdateOrganizationResponse>): grpc.ClientUnaryCall;
  updateOrganization(argument: web_api_pb.UpdateOrganizationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.UpdateOrganizationResponse>): grpc.ClientUnaryCall;
  updateBillingInformation(argument: web_api_pb.UpdateBillingInformationRequest, callback: grpc.requestCallback<common_pb.BaseResponse>): grpc.ClientUnaryCall;
  updateBillingInformation(argument: web_api_pb.UpdateBillingInformationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_pb.BaseResponse>): grpc.ClientUnaryCall;
  updateBillingInformation(argument: web_api_pb.UpdateBillingInformationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_pb.BaseResponse>): grpc.ClientUnaryCall;
}

interface IProjectServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createProject: grpc.MethodDefinition<web_api_pb.CreateProjectRequest, web_api_pb.CreateProjectResponse>;
  updateProject: grpc.MethodDefinition<web_api_pb.UpdateProjectRequest, web_api_pb.UpdateProjectResponse>;
  getProject: grpc.MethodDefinition<web_api_pb.GetProjectRequest, web_api_pb.GetProjectResponse>;
  getAllProject: grpc.MethodDefinition<web_api_pb.GetAllProjectRequest, web_api_pb.GetAllProjectResponse>;
  addUsersToProject: grpc.MethodDefinition<web_api_pb.AddUsersToProjectRequest, web_api_pb.AddUsersToProjectResponse>;
  archiveProject: grpc.MethodDefinition<web_api_pb.ArchiveProjectRequest, web_api_pb.ArchiveProjectResponse>;
  createProjectCredential: grpc.MethodDefinition<web_api_pb.CreateProjectCredentialRequest, web_api_pb.CreateProjectCredentialResponse>;
  getAllProjectCredential: grpc.MethodDefinition<web_api_pb.GetAllProjectCredentialRequest, web_api_pb.GetAllProjectCredentialResponse>;
}

export const ProjectServiceService: IProjectServiceService;

export interface IProjectServiceServer extends grpc.UntypedServiceImplementation {
  createProject: grpc.handleUnaryCall<web_api_pb.CreateProjectRequest, web_api_pb.CreateProjectResponse>;
  updateProject: grpc.handleUnaryCall<web_api_pb.UpdateProjectRequest, web_api_pb.UpdateProjectResponse>;
  getProject: grpc.handleUnaryCall<web_api_pb.GetProjectRequest, web_api_pb.GetProjectResponse>;
  getAllProject: grpc.handleUnaryCall<web_api_pb.GetAllProjectRequest, web_api_pb.GetAllProjectResponse>;
  addUsersToProject: grpc.handleUnaryCall<web_api_pb.AddUsersToProjectRequest, web_api_pb.AddUsersToProjectResponse>;
  archiveProject: grpc.handleUnaryCall<web_api_pb.ArchiveProjectRequest, web_api_pb.ArchiveProjectResponse>;
  createProjectCredential: grpc.handleUnaryCall<web_api_pb.CreateProjectCredentialRequest, web_api_pb.CreateProjectCredentialResponse>;
  getAllProjectCredential: grpc.handleUnaryCall<web_api_pb.GetAllProjectCredentialRequest, web_api_pb.GetAllProjectCredentialResponse>;
}

export class ProjectServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createProject(argument: web_api_pb.CreateProjectRequest, callback: grpc.requestCallback<web_api_pb.CreateProjectResponse>): grpc.ClientUnaryCall;
  createProject(argument: web_api_pb.CreateProjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.CreateProjectResponse>): grpc.ClientUnaryCall;
  createProject(argument: web_api_pb.CreateProjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.CreateProjectResponse>): grpc.ClientUnaryCall;
  updateProject(argument: web_api_pb.UpdateProjectRequest, callback: grpc.requestCallback<web_api_pb.UpdateProjectResponse>): grpc.ClientUnaryCall;
  updateProject(argument: web_api_pb.UpdateProjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.UpdateProjectResponse>): grpc.ClientUnaryCall;
  updateProject(argument: web_api_pb.UpdateProjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.UpdateProjectResponse>): grpc.ClientUnaryCall;
  getProject(argument: web_api_pb.GetProjectRequest, callback: grpc.requestCallback<web_api_pb.GetProjectResponse>): grpc.ClientUnaryCall;
  getProject(argument: web_api_pb.GetProjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.GetProjectResponse>): grpc.ClientUnaryCall;
  getProject(argument: web_api_pb.GetProjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.GetProjectResponse>): grpc.ClientUnaryCall;
  getAllProject(argument: web_api_pb.GetAllProjectRequest, callback: grpc.requestCallback<web_api_pb.GetAllProjectResponse>): grpc.ClientUnaryCall;
  getAllProject(argument: web_api_pb.GetAllProjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.GetAllProjectResponse>): grpc.ClientUnaryCall;
  getAllProject(argument: web_api_pb.GetAllProjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.GetAllProjectResponse>): grpc.ClientUnaryCall;
  addUsersToProject(argument: web_api_pb.AddUsersToProjectRequest, callback: grpc.requestCallback<web_api_pb.AddUsersToProjectResponse>): grpc.ClientUnaryCall;
  addUsersToProject(argument: web_api_pb.AddUsersToProjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.AddUsersToProjectResponse>): grpc.ClientUnaryCall;
  addUsersToProject(argument: web_api_pb.AddUsersToProjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.AddUsersToProjectResponse>): grpc.ClientUnaryCall;
  archiveProject(argument: web_api_pb.ArchiveProjectRequest, callback: grpc.requestCallback<web_api_pb.ArchiveProjectResponse>): grpc.ClientUnaryCall;
  archiveProject(argument: web_api_pb.ArchiveProjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.ArchiveProjectResponse>): grpc.ClientUnaryCall;
  archiveProject(argument: web_api_pb.ArchiveProjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.ArchiveProjectResponse>): grpc.ClientUnaryCall;
  createProjectCredential(argument: web_api_pb.CreateProjectCredentialRequest, callback: grpc.requestCallback<web_api_pb.CreateProjectCredentialResponse>): grpc.ClientUnaryCall;
  createProjectCredential(argument: web_api_pb.CreateProjectCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.CreateProjectCredentialResponse>): grpc.ClientUnaryCall;
  createProjectCredential(argument: web_api_pb.CreateProjectCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.CreateProjectCredentialResponse>): grpc.ClientUnaryCall;
  getAllProjectCredential(argument: web_api_pb.GetAllProjectCredentialRequest, callback: grpc.requestCallback<web_api_pb.GetAllProjectCredentialResponse>): grpc.ClientUnaryCall;
  getAllProjectCredential(argument: web_api_pb.GetAllProjectCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.GetAllProjectCredentialResponse>): grpc.ClientUnaryCall;
  getAllProjectCredential(argument: web_api_pb.GetAllProjectCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<web_api_pb.GetAllProjectCredentialResponse>): grpc.ClientUnaryCall;
}
