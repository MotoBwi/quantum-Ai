// package: vault_api
// file: vault-api.proto

import * as vault_api_pb from "./vault-api_pb";
import {grpc} from "@improbable-eng/grpc-web";

type VaultServiceCreateProviderCredential = {
  readonly methodName: string;
  readonly service: typeof VaultService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof vault_api_pb.CreateProviderCredentialRequest;
  readonly responseType: typeof vault_api_pb.GetCredentialResponse;
};

type VaultServiceGetAllOrganizationCredential = {
  readonly methodName: string;
  readonly service: typeof VaultService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof vault_api_pb.GetAllOrganizationCredentialRequest;
  readonly responseType: typeof vault_api_pb.GetAllOrganizationCredentialResponse;
};

type VaultServiceDeleteCredential = {
  readonly methodName: string;
  readonly service: typeof VaultService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof vault_api_pb.DeleteCredentialRequest;
  readonly responseType: typeof vault_api_pb.GetCredentialResponse;
};

type VaultServiceGetCredential = {
  readonly methodName: string;
  readonly service: typeof VaultService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof vault_api_pb.GetCredentialRequest;
  readonly responseType: typeof vault_api_pb.GetCredentialResponse;
};

type VaultServiceGetOauth2Credential = {
  readonly methodName: string;
  readonly service: typeof VaultService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof vault_api_pb.GetCredentialRequest;
  readonly responseType: typeof vault_api_pb.GetCredentialResponse;
};

export class VaultService {
  static readonly serviceName: string;
  static readonly CreateProviderCredential: VaultServiceCreateProviderCredential;
  static readonly GetAllOrganizationCredential: VaultServiceGetAllOrganizationCredential;
  static readonly DeleteCredential: VaultServiceDeleteCredential;
  static readonly GetCredential: VaultServiceGetCredential;
  static readonly GetOauth2Credential: VaultServiceGetOauth2Credential;
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

export class VaultServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createProviderCredential(
    requestMessage: vault_api_pb.CreateProviderCredentialRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: vault_api_pb.GetCredentialResponse|null) => void
  ): UnaryResponse;
  createProviderCredential(
    requestMessage: vault_api_pb.CreateProviderCredentialRequest,
    callback: (error: ServiceError|null, responseMessage: vault_api_pb.GetCredentialResponse|null) => void
  ): UnaryResponse;
  getAllOrganizationCredential(
    requestMessage: vault_api_pb.GetAllOrganizationCredentialRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: vault_api_pb.GetAllOrganizationCredentialResponse|null) => void
  ): UnaryResponse;
  getAllOrganizationCredential(
    requestMessage: vault_api_pb.GetAllOrganizationCredentialRequest,
    callback: (error: ServiceError|null, responseMessage: vault_api_pb.GetAllOrganizationCredentialResponse|null) => void
  ): UnaryResponse;
  deleteCredential(
    requestMessage: vault_api_pb.DeleteCredentialRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: vault_api_pb.GetCredentialResponse|null) => void
  ): UnaryResponse;
  deleteCredential(
    requestMessage: vault_api_pb.DeleteCredentialRequest,
    callback: (error: ServiceError|null, responseMessage: vault_api_pb.GetCredentialResponse|null) => void
  ): UnaryResponse;
  getCredential(
    requestMessage: vault_api_pb.GetCredentialRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: vault_api_pb.GetCredentialResponse|null) => void
  ): UnaryResponse;
  getCredential(
    requestMessage: vault_api_pb.GetCredentialRequest,
    callback: (error: ServiceError|null, responseMessage: vault_api_pb.GetCredentialResponse|null) => void
  ): UnaryResponse;
  getOauth2Credential(
    requestMessage: vault_api_pb.GetCredentialRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: vault_api_pb.GetCredentialResponse|null) => void
  ): UnaryResponse;
  getOauth2Credential(
    requestMessage: vault_api_pb.GetCredentialRequest,
    callback: (error: ServiceError|null, responseMessage: vault_api_pb.GetCredentialResponse|null) => void
  ): UnaryResponse;
}

