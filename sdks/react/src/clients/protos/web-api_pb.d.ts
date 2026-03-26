// package: web_api
// file: web-api.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";

export class AuthenticateRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticateRequest): AuthenticateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthenticateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticateRequest;
  static deserializeBinaryFromReader(message: AuthenticateRequest, reader: jspb.BinaryReader): AuthenticateRequest;
}

export namespace AuthenticateRequest {
  export type AsObject = {
    email: string,
    password: string,
  }
}

export class RegisterUserRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterUserRequest): RegisterUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterUserRequest;
  static deserializeBinaryFromReader(message: RegisterUserRequest, reader: jspb.BinaryReader): RegisterUserRequest;
}

export namespace RegisterUserRequest {
  export type AsObject = {
    email: string,
    password: string,
    name: string,
  }
}

export class Token extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getToken(): string;
  setToken(value: string): void;

  getTokentype(): string;
  setTokentype(value: string): void;

  getIsexpired(): boolean;
  setIsexpired(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Token.AsObject;
  static toObject(includeInstance: boolean, msg: Token): Token.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Token, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Token;
  static deserializeBinaryFromReader(message: Token, reader: jspb.BinaryReader): Token;
}

export namespace Token {
  export type AsObject = {
    id: string,
    token: string,
    tokentype: string,
    isexpired: boolean,
  }
}

export class OrganizationRole extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getOrganizationid(): string;
  setOrganizationid(value: string): void;

  getRole(): string;
  setRole(value: string): void;

  getOrganizationname(): string;
  setOrganizationname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationRole.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationRole): OrganizationRole.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrganizationRole, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationRole;
  static deserializeBinaryFromReader(message: OrganizationRole, reader: jspb.BinaryReader): OrganizationRole;
}

export namespace OrganizationRole {
  export type AsObject = {
    id: string,
    organizationid: string,
    role: string,
    organizationname: string,
  }
}

export class ProjectRole extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getProjectid(): string;
  setProjectid(value: string): void;

  getRole(): string;
  setRole(value: string): void;

  getProjectname(): string;
  setProjectname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectRole.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectRole): ProjectRole.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProjectRole, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectRole;
  static deserializeBinaryFromReader(message: ProjectRole, reader: jspb.BinaryReader): ProjectRole;
}

export namespace ProjectRole {
  export type AsObject = {
    id: string,
    projectid: string,
    role: string,
    projectname: string,
  }
}

export class FeaturePermission extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getFeature(): string;
  setFeature(value: string): void;

  getIsenable(): boolean;
  setIsenable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeaturePermission.AsObject;
  static toObject(includeInstance: boolean, msg: FeaturePermission): FeaturePermission.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeaturePermission, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeaturePermission;
  static deserializeBinaryFromReader(message: FeaturePermission, reader: jspb.BinaryReader): FeaturePermission;
}

export namespace FeaturePermission {
  export type AsObject = {
    id: string,
    feature: string,
    isenable: boolean,
  }
}

export class Authentication extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): common_pb.User | undefined;
  setUser(value?: common_pb.User): void;

  hasToken(): boolean;
  clearToken(): void;
  getToken(): Token | undefined;
  setToken(value?: Token): void;

  hasOrganizationrole(): boolean;
  clearOrganizationrole(): void;
  getOrganizationrole(): OrganizationRole | undefined;
  setOrganizationrole(value?: OrganizationRole): void;

  clearProjectrolesList(): void;
  getProjectrolesList(): Array<ProjectRole>;
  setProjectrolesList(value: Array<ProjectRole>): void;
  addProjectroles(value?: ProjectRole, index?: number): ProjectRole;

  clearFeaturepermissionsList(): void;
  getFeaturepermissionsList(): Array<FeaturePermission>;
  setFeaturepermissionsList(value: Array<FeaturePermission>): void;
  addFeaturepermissions(value?: FeaturePermission, index?: number): FeaturePermission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Authentication.AsObject;
  static toObject(includeInstance: boolean, msg: Authentication): Authentication.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Authentication, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Authentication;
  static deserializeBinaryFromReader(message: Authentication, reader: jspb.BinaryReader): Authentication;
}

export namespace Authentication {
  export type AsObject = {
    user?: common_pb.User.AsObject,
    token?: Token.AsObject,
    organizationrole?: OrganizationRole.AsObject,
    projectrolesList: Array<ProjectRole.AsObject>,
    featurepermissionsList: Array<FeaturePermission.AsObject>,
  }
}

export class ScopedAuthentication extends jspb.Message {
  getUserid(): number;
  setUserid(value: number): void;

  getOrganizationid(): number;
  setOrganizationid(value: number): void;

  getProjectid(): number;
  setProjectid(value: number): void;

  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScopedAuthentication.AsObject;
  static toObject(includeInstance: boolean, msg: ScopedAuthentication): ScopedAuthentication.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScopedAuthentication, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScopedAuthentication;
  static deserializeBinaryFromReader(message: ScopedAuthentication, reader: jspb.BinaryReader): ScopedAuthentication;
}

export namespace ScopedAuthentication {
  export type AsObject = {
    userid: number,
    organizationid: number,
    projectid: number,
    status: string,
  }
}

export class AuthenticateResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Authentication | undefined;
  setData(value?: Authentication): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticateResponse): AuthenticateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthenticateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticateResponse;
  static deserializeBinaryFromReader(message: AuthenticateResponse, reader: jspb.BinaryReader): AuthenticateResponse;
}

export namespace AuthenticateResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: Authentication.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class ForgotPasswordRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForgotPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ForgotPasswordRequest): ForgotPasswordRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ForgotPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForgotPasswordRequest;
  static deserializeBinaryFromReader(message: ForgotPasswordRequest, reader: jspb.BinaryReader): ForgotPasswordRequest;
}

export namespace ForgotPasswordRequest {
  export type AsObject = {
    email: string,
  }
}

export class ForgotPasswordResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForgotPasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ForgotPasswordResponse): ForgotPasswordResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ForgotPasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForgotPasswordResponse;
  static deserializeBinaryFromReader(message: ForgotPasswordResponse, reader: jspb.BinaryReader): ForgotPasswordResponse;
}

export namespace ForgotPasswordResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    error?: common_pb.Error.AsObject,
  }
}

export class ChangePasswordRequest extends jspb.Message {
  getOldpassword(): string;
  setOldpassword(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangePasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangePasswordRequest): ChangePasswordRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangePasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangePasswordRequest;
  static deserializeBinaryFromReader(message: ChangePasswordRequest, reader: jspb.BinaryReader): ChangePasswordRequest;
}

export namespace ChangePasswordRequest {
  export type AsObject = {
    oldpassword: string,
    password: string,
  }
}

export class ChangePasswordResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangePasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChangePasswordResponse): ChangePasswordResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangePasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangePasswordResponse;
  static deserializeBinaryFromReader(message: ChangePasswordResponse, reader: jspb.BinaryReader): ChangePasswordResponse;
}

export namespace ChangePasswordResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    error?: common_pb.Error.AsObject,
  }
}

export class CreatePasswordRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePasswordRequest): CreatePasswordRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePasswordRequest;
  static deserializeBinaryFromReader(message: CreatePasswordRequest, reader: jspb.BinaryReader): CreatePasswordRequest;
}

export namespace CreatePasswordRequest {
  export type AsObject = {
    token: string,
    password: string,
  }
}

export class CreatePasswordResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePasswordResponse): CreatePasswordResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePasswordResponse;
  static deserializeBinaryFromReader(message: CreatePasswordResponse, reader: jspb.BinaryReader): CreatePasswordResponse;
}

export namespace CreatePasswordResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    error?: common_pb.Error.AsObject,
  }
}

export class VerifyTokenRequest extends jspb.Message {
  getTokentype(): string;
  setTokentype(value: string): void;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyTokenRequest): VerifyTokenRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerifyTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyTokenRequest;
  static deserializeBinaryFromReader(message: VerifyTokenRequest, reader: jspb.BinaryReader): VerifyTokenRequest;
}

export namespace VerifyTokenRequest {
  export type AsObject = {
    tokentype: string,
    token: string,
  }
}

export class VerifyTokenResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Token | undefined;
  setData(value?: Token): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyTokenResponse): VerifyTokenResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerifyTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyTokenResponse;
  static deserializeBinaryFromReader(message: VerifyTokenResponse, reader: jspb.BinaryReader): VerifyTokenResponse;
}

export namespace VerifyTokenResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: Token.AsObject,
  }
}

export class AuthorizeRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthorizeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthorizeRequest): AuthorizeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthorizeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthorizeRequest;
  static deserializeBinaryFromReader(message: AuthorizeRequest, reader: jspb.BinaryReader): AuthorizeRequest;
}

export namespace AuthorizeRequest {
  export type AsObject = {
  }
}

export class ScopeAuthorizeRequest extends jspb.Message {
  getScope(): string;
  setScope(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScopeAuthorizeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ScopeAuthorizeRequest): ScopeAuthorizeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScopeAuthorizeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScopeAuthorizeRequest;
  static deserializeBinaryFromReader(message: ScopeAuthorizeRequest, reader: jspb.BinaryReader): ScopeAuthorizeRequest;
}

export namespace ScopeAuthorizeRequest {
  export type AsObject = {
    scope: string,
  }
}

export class ScopedAuthenticationResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): ScopedAuthentication | undefined;
  setData(value?: ScopedAuthentication): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScopedAuthenticationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ScopedAuthenticationResponse): ScopedAuthenticationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScopedAuthenticationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScopedAuthenticationResponse;
  static deserializeBinaryFromReader(message: ScopedAuthenticationResponse, reader: jspb.BinaryReader): ScopedAuthenticationResponse;
}

export namespace ScopedAuthenticationResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: ScopedAuthentication.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class GetUserRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserRequest;
  static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
  export type AsObject = {
  }
}

export class GetUserResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): common_pb.User | undefined;
  setData(value?: common_pb.User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserResponse): GetUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserResponse;
  static deserializeBinaryFromReader(message: GetUserResponse, reader: jspb.BinaryReader): GetUserResponse;
}

export namespace GetUserResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: common_pb.User.AsObject,
  }
}

export class UpdateUserRequest extends jspb.Message {
  hasEmail(): boolean;
  clearEmail(): void;
  getEmail(): string;
  setEmail(value: string): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserRequest): UpdateUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserRequest;
  static deserializeBinaryFromReader(message: UpdateUserRequest, reader: jspb.BinaryReader): UpdateUserRequest;
}

export namespace UpdateUserRequest {
  export type AsObject = {
    email: string,
    name: string,
  }
}

export class UpdateUserResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): common_pb.User | undefined;
  setData(value?: common_pb.User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserResponse): UpdateUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserResponse;
  static deserializeBinaryFromReader(message: UpdateUserResponse, reader: jspb.BinaryReader): UpdateUserResponse;
}

export namespace UpdateUserResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: common_pb.User.AsObject,
  }
}

export class SocialAuthenticationRequest extends jspb.Message {
  getState(): string;
  setState(value: string): void;

  getCode(): string;
  setCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SocialAuthenticationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SocialAuthenticationRequest): SocialAuthenticationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SocialAuthenticationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SocialAuthenticationRequest;
  static deserializeBinaryFromReader(message: SocialAuthenticationRequest, reader: jspb.BinaryReader): SocialAuthenticationRequest;
}

export namespace SocialAuthenticationRequest {
  export type AsObject = {
    state: string,
    code: string,
  }
}

export class GetAllUserRequest extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): common_pb.Paginate | undefined;
  setPaginate(value?: common_pb.Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<common_pb.Criteria>;
  setCriteriasList(value: Array<common_pb.Criteria>): void;
  addCriterias(value?: common_pb.Criteria, index?: number): common_pb.Criteria;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllUserRequest): GetAllUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllUserRequest;
  static deserializeBinaryFromReader(message: GetAllUserRequest, reader: jspb.BinaryReader): GetAllUserRequest;
}

export namespace GetAllUserRequest {
  export type AsObject = {
    paginate?: common_pb.Paginate.AsObject,
    criteriasList: Array<common_pb.Criteria.AsObject>,
  }
}

export class GetAllUserResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<common_pb.User>;
  setDataList(value: Array<common_pb.User>): void;
  addData(value?: common_pb.User, index?: number): common_pb.User;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): common_pb.Paginated | undefined;
  setPaginated(value?: common_pb.Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllUserResponse): GetAllUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllUserResponse;
  static deserializeBinaryFromReader(message: GetAllUserResponse, reader: jspb.BinaryReader): GetAllUserResponse;
}

export namespace GetAllUserResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<common_pb.User.AsObject>,
    error?: common_pb.Error.AsObject,
    paginated?: common_pb.Paginated.AsObject,
  }
}

export class CreateOrganizationRequest extends jspb.Message {
  getOrganizationname(): string;
  setOrganizationname(value: string): void;

  getOrganizationsize(): string;
  setOrganizationsize(value: string): void;

  getOrganizationindustry(): string;
  setOrganizationindustry(value: string): void;

  hasOrganizationcontact(): boolean;
  clearOrganizationcontact(): void;
  getOrganizationcontact(): string;
  setOrganizationcontact(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOrganizationRequest): CreateOrganizationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOrganizationRequest;
  static deserializeBinaryFromReader(message: CreateOrganizationRequest, reader: jspb.BinaryReader): CreateOrganizationRequest;
}

export namespace CreateOrganizationRequest {
  export type AsObject = {
    organizationname: string,
    organizationsize: string,
    organizationindustry: string,
    organizationcontact: string,
  }
}

export class UpdateOrganizationRequest extends jspb.Message {
  getOrganizationid(): string;
  setOrganizationid(value: string): void;

  hasOrganizationname(): boolean;
  clearOrganizationname(): void;
  getOrganizationname(): string;
  setOrganizationname(value: string): void;

  hasOrganizationindustry(): boolean;
  clearOrganizationindustry(): void;
  getOrganizationindustry(): string;
  setOrganizationindustry(value: string): void;

  hasOrganizationcontact(): boolean;
  clearOrganizationcontact(): void;
  getOrganizationcontact(): string;
  setOrganizationcontact(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOrganizationRequest): UpdateOrganizationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOrganizationRequest;
  static deserializeBinaryFromReader(message: UpdateOrganizationRequest, reader: jspb.BinaryReader): UpdateOrganizationRequest;
}

export namespace UpdateOrganizationRequest {
  export type AsObject = {
    organizationid: string,
    organizationname: string,
    organizationindustry: string,
    organizationcontact: string,
  }
}

export class GetOrganizationRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrganizationRequest): GetOrganizationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrganizationRequest;
  static deserializeBinaryFromReader(message: GetOrganizationRequest, reader: jspb.BinaryReader): GetOrganizationRequest;
}

export namespace GetOrganizationRequest {
  export type AsObject = {
  }
}

export class GetOrganizationResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): common_pb.Organization | undefined;
  setData(value?: common_pb.Organization): void;

  hasRole(): boolean;
  clearRole(): void;
  getRole(): OrganizationRole | undefined;
  setRole(value?: OrganizationRole): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrganizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrganizationResponse): GetOrganizationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrganizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrganizationResponse;
  static deserializeBinaryFromReader(message: GetOrganizationResponse, reader: jspb.BinaryReader): GetOrganizationResponse;
}

export namespace GetOrganizationResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: common_pb.Organization.AsObject,
    role?: OrganizationRole.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class CreateOrganizationResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): common_pb.Organization | undefined;
  setData(value?: common_pb.Organization): void;

  hasRole(): boolean;
  clearRole(): void;
  getRole(): OrganizationRole | undefined;
  setRole(value?: OrganizationRole): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOrganizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOrganizationResponse): CreateOrganizationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOrganizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOrganizationResponse;
  static deserializeBinaryFromReader(message: CreateOrganizationResponse, reader: jspb.BinaryReader): CreateOrganizationResponse;
}

export namespace CreateOrganizationResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: common_pb.Organization.AsObject,
    role?: OrganizationRole.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class UpdateOrganizationResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOrganizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOrganizationResponse): UpdateOrganizationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateOrganizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOrganizationResponse;
  static deserializeBinaryFromReader(message: UpdateOrganizationResponse, reader: jspb.BinaryReader): UpdateOrganizationResponse;
}

export namespace UpdateOrganizationResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    error?: common_pb.Error.AsObject,
  }
}

export class UpdateBillingInformationRequest extends jspb.Message {
  getPaymentmethod(): string;
  setPaymentmethod(value: string): void;

  getBillinginterval(): UpdateBillingInformationRequest.BillingIntervalMap[keyof UpdateBillingInformationRequest.BillingIntervalMap];
  setBillinginterval(value: UpdateBillingInformationRequest.BillingIntervalMap[keyof UpdateBillingInformationRequest.BillingIntervalMap]): void;

  getTaxinformation(): string;
  setTaxinformation(value: string): void;

  getAddress(): string;
  setAddress(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBillingInformationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBillingInformationRequest): UpdateBillingInformationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBillingInformationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBillingInformationRequest;
  static deserializeBinaryFromReader(message: UpdateBillingInformationRequest, reader: jspb.BinaryReader): UpdateBillingInformationRequest;
}

export namespace UpdateBillingInformationRequest {
  export type AsObject = {
    paymentmethod: string,
    billinginterval: UpdateBillingInformationRequest.BillingIntervalMap[keyof UpdateBillingInformationRequest.BillingIntervalMap],
    taxinformation: string,
    address: string,
    email: string,
  }

  export interface BillingIntervalMap {
    ANNUALLY: 0;
    MONTHLY: 1;
  }

  export const BillingInterval: BillingIntervalMap;
}

export class Project extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearMembersList(): void;
  getMembersList(): Array<common_pb.User>;
  setMembersList(value: Array<common_pb.User>): void;
  addMembers(value?: common_pb.User, index?: number): common_pb.User;

  getStatus(): string;
  setStatus(value: string): void;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Project.AsObject;
  static toObject(includeInstance: boolean, msg: Project): Project.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Project, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Project;
  static deserializeBinaryFromReader(message: Project, reader: jspb.BinaryReader): Project;
}

export namespace Project {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    membersList: Array<common_pb.User.AsObject>,
    status: string,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CreateProjectRequest extends jspb.Message {
  getProjectname(): string;
  setProjectname(value: string): void;

  hasProjectdescription(): boolean;
  clearProjectdescription(): void;
  getProjectdescription(): string;
  setProjectdescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProjectRequest): CreateProjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProjectRequest;
  static deserializeBinaryFromReader(message: CreateProjectRequest, reader: jspb.BinaryReader): CreateProjectRequest;
}

export namespace CreateProjectRequest {
  export type AsObject = {
    projectname: string,
    projectdescription: string,
  }
}

export class CreateProjectResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Project | undefined;
  setData(value?: Project): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProjectResponse): CreateProjectResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateProjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProjectResponse;
  static deserializeBinaryFromReader(message: CreateProjectResponse, reader: jspb.BinaryReader): CreateProjectResponse;
}

export namespace CreateProjectResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: Project.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class UpdateProjectRequest extends jspb.Message {
  getProjectid(): string;
  setProjectid(value: string): void;

  hasProjectname(): boolean;
  clearProjectname(): void;
  getProjectname(): string;
  setProjectname(value: string): void;

  hasProjectdescription(): boolean;
  clearProjectdescription(): void;
  getProjectdescription(): string;
  setProjectdescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProjectRequest): UpdateProjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProjectRequest;
  static deserializeBinaryFromReader(message: UpdateProjectRequest, reader: jspb.BinaryReader): UpdateProjectRequest;
}

export namespace UpdateProjectRequest {
  export type AsObject = {
    projectid: string,
    projectname: string,
    projectdescription: string,
  }
}

export class UpdateProjectResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Project | undefined;
  setData(value?: Project): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProjectResponse): UpdateProjectResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateProjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProjectResponse;
  static deserializeBinaryFromReader(message: UpdateProjectResponse, reader: jspb.BinaryReader): UpdateProjectResponse;
}

export namespace UpdateProjectResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: Project.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class GetProjectRequest extends jspb.Message {
  getProjectid(): string;
  setProjectid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProjectRequest): GetProjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProjectRequest;
  static deserializeBinaryFromReader(message: GetProjectRequest, reader: jspb.BinaryReader): GetProjectRequest;
}

export namespace GetProjectRequest {
  export type AsObject = {
    projectid: string,
  }
}

export class GetProjectResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Project | undefined;
  setData(value?: Project): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetProjectResponse): GetProjectResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProjectResponse;
  static deserializeBinaryFromReader(message: GetProjectResponse, reader: jspb.BinaryReader): GetProjectResponse;
}

export namespace GetProjectResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: Project.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class GetAllProjectRequest extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): common_pb.Paginate | undefined;
  setPaginate(value?: common_pb.Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<common_pb.Criteria>;
  setCriteriasList(value: Array<common_pb.Criteria>): void;
  addCriterias(value?: common_pb.Criteria, index?: number): common_pb.Criteria;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllProjectRequest): GetAllProjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllProjectRequest;
  static deserializeBinaryFromReader(message: GetAllProjectRequest, reader: jspb.BinaryReader): GetAllProjectRequest;
}

export namespace GetAllProjectRequest {
  export type AsObject = {
    paginate?: common_pb.Paginate.AsObject,
    criteriasList: Array<common_pb.Criteria.AsObject>,
  }
}

export class GetAllProjectResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<Project>;
  setDataList(value: Array<Project>): void;
  addData(value?: Project, index?: number): Project;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): common_pb.Paginated | undefined;
  setPaginated(value?: common_pb.Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllProjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllProjectResponse): GetAllProjectResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllProjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllProjectResponse;
  static deserializeBinaryFromReader(message: GetAllProjectResponse, reader: jspb.BinaryReader): GetAllProjectResponse;
}

export namespace GetAllProjectResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<Project.AsObject>,
    error?: common_pb.Error.AsObject,
    paginated?: common_pb.Paginated.AsObject,
  }
}

export class AddUsersToProjectRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getRole(): string;
  setRole(value: string): void;

  clearProjectidsList(): void;
  getProjectidsList(): Array<string>;
  setProjectidsList(value: Array<string>): void;
  addProjectids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddUsersToProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddUsersToProjectRequest): AddUsersToProjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddUsersToProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddUsersToProjectRequest;
  static deserializeBinaryFromReader(message: AddUsersToProjectRequest, reader: jspb.BinaryReader): AddUsersToProjectRequest;
}

export namespace AddUsersToProjectRequest {
  export type AsObject = {
    email: string,
    role: string,
    projectidsList: Array<string>,
  }
}

export class ArchiveProjectRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArchiveProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ArchiveProjectRequest): ArchiveProjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArchiveProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArchiveProjectRequest;
  static deserializeBinaryFromReader(message: ArchiveProjectRequest, reader: jspb.BinaryReader): ArchiveProjectRequest;
}

export namespace ArchiveProjectRequest {
  export type AsObject = {
    id: string,
  }
}

export class ArchiveProjectResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getId(): string;
  setId(value: string): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArchiveProjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ArchiveProjectResponse): ArchiveProjectResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArchiveProjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArchiveProjectResponse;
  static deserializeBinaryFromReader(message: ArchiveProjectResponse, reader: jspb.BinaryReader): ArchiveProjectResponse;
}

export namespace ArchiveProjectResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    id: string,
    error?: common_pb.Error.AsObject,
  }
}

export class AddUsersToProjectResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<Project>;
  setDataList(value: Array<Project>): void;
  addData(value?: Project, index?: number): Project;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddUsersToProjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddUsersToProjectResponse): AddUsersToProjectResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddUsersToProjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddUsersToProjectResponse;
  static deserializeBinaryFromReader(message: AddUsersToProjectResponse, reader: jspb.BinaryReader): AddUsersToProjectResponse;
}

export namespace AddUsersToProjectResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<Project.AsObject>,
    error?: common_pb.Error.AsObject,
  }
}

export class ProjectCredential extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getProjectid(): string;
  setProjectid(value: string): void;

  getOrganizationid(): string;
  setOrganizationid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  getCreatedby(): string;
  setCreatedby(value: string): void;

  getUpdatedby(): string;
  setUpdatedby(value: string): void;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCreateduser(): boolean;
  clearCreateduser(): void;
  getCreateduser(): common_pb.User | undefined;
  setCreateduser(value?: common_pb.User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectCredential.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectCredential): ProjectCredential.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProjectCredential, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectCredential;
  static deserializeBinaryFromReader(message: ProjectCredential, reader: jspb.BinaryReader): ProjectCredential;
}

export namespace ProjectCredential {
  export type AsObject = {
    id: string,
    projectid: string,
    organizationid: string,
    name: string,
    key: string,
    status: string,
    createdby: string,
    updatedby: string,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createduser?: common_pb.User.AsObject,
  }
}

export class CreateProjectCredentialRequest extends jspb.Message {
  getProjectid(): string;
  setProjectid(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProjectCredentialRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProjectCredentialRequest): CreateProjectCredentialRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateProjectCredentialRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProjectCredentialRequest;
  static deserializeBinaryFromReader(message: CreateProjectCredentialRequest, reader: jspb.BinaryReader): CreateProjectCredentialRequest;
}

export namespace CreateProjectCredentialRequest {
  export type AsObject = {
    projectid: string,
    name: string,
  }
}

export class GetAllProjectCredentialRequest extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): common_pb.Paginate | undefined;
  setPaginate(value?: common_pb.Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<common_pb.Criteria>;
  setCriteriasList(value: Array<common_pb.Criteria>): void;
  addCriterias(value?: common_pb.Criteria, index?: number): common_pb.Criteria;

  getProjectid(): string;
  setProjectid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllProjectCredentialRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllProjectCredentialRequest): GetAllProjectCredentialRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllProjectCredentialRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllProjectCredentialRequest;
  static deserializeBinaryFromReader(message: GetAllProjectCredentialRequest, reader: jspb.BinaryReader): GetAllProjectCredentialRequest;
}

export namespace GetAllProjectCredentialRequest {
  export type AsObject = {
    paginate?: common_pb.Paginate.AsObject,
    criteriasList: Array<common_pb.Criteria.AsObject>,
    projectid: string,
  }
}

export class CreateProjectCredentialResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): ProjectCredential | undefined;
  setData(value?: ProjectCredential): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProjectCredentialResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProjectCredentialResponse): CreateProjectCredentialResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateProjectCredentialResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProjectCredentialResponse;
  static deserializeBinaryFromReader(message: CreateProjectCredentialResponse, reader: jspb.BinaryReader): CreateProjectCredentialResponse;
}

export namespace CreateProjectCredentialResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: ProjectCredential.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class GetAllProjectCredentialResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<ProjectCredential>;
  setDataList(value: Array<ProjectCredential>): void;
  addData(value?: ProjectCredential, index?: number): ProjectCredential;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): common_pb.Paginated | undefined;
  setPaginated(value?: common_pb.Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllProjectCredentialResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllProjectCredentialResponse): GetAllProjectCredentialResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllProjectCredentialResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllProjectCredentialResponse;
  static deserializeBinaryFromReader(message: GetAllProjectCredentialResponse, reader: jspb.BinaryReader): GetAllProjectCredentialResponse;
}

export namespace GetAllProjectCredentialResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<ProjectCredential.AsObject>,
    error?: common_pb.Error.AsObject,
    paginated?: common_pb.Paginated.AsObject,
  }
}

