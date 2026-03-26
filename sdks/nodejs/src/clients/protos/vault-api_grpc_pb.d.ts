// GENERATED CODE -- DO NOT EDIT!

// package: vault_api
// file: vault-api.proto

import * as vault_api_pb from "./vault-api_pb";
import * as grpc from "grpc";

interface IVaultServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createProviderCredential: grpc.MethodDefinition<vault_api_pb.CreateProviderCredentialRequest, vault_api_pb.GetCredentialResponse>;
  getAllOrganizationCredential: grpc.MethodDefinition<vault_api_pb.GetAllOrganizationCredentialRequest, vault_api_pb.GetAllOrganizationCredentialResponse>;
  deleteCredential: grpc.MethodDefinition<vault_api_pb.DeleteCredentialRequest, vault_api_pb.GetCredentialResponse>;
  getCredential: grpc.MethodDefinition<vault_api_pb.GetCredentialRequest, vault_api_pb.GetCredentialResponse>;
  getOauth2Credential: grpc.MethodDefinition<vault_api_pb.GetCredentialRequest, vault_api_pb.GetCredentialResponse>;
}

export const VaultServiceService: IVaultServiceService;

export interface IVaultServiceServer extends grpc.UntypedServiceImplementation {
  createProviderCredential: grpc.handleUnaryCall<vault_api_pb.CreateProviderCredentialRequest, vault_api_pb.GetCredentialResponse>;
  getAllOrganizationCredential: grpc.handleUnaryCall<vault_api_pb.GetAllOrganizationCredentialRequest, vault_api_pb.GetAllOrganizationCredentialResponse>;
  deleteCredential: grpc.handleUnaryCall<vault_api_pb.DeleteCredentialRequest, vault_api_pb.GetCredentialResponse>;
  getCredential: grpc.handleUnaryCall<vault_api_pb.GetCredentialRequest, vault_api_pb.GetCredentialResponse>;
  getOauth2Credential: grpc.handleUnaryCall<vault_api_pb.GetCredentialRequest, vault_api_pb.GetCredentialResponse>;
}

export class VaultServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createProviderCredential(argument: vault_api_pb.CreateProviderCredentialRequest, callback: grpc.requestCallback<vault_api_pb.GetCredentialResponse>): grpc.ClientUnaryCall;
  createProviderCredential(argument: vault_api_pb.CreateProviderCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vault_api_pb.GetCredentialResponse>): grpc.ClientUnaryCall;
  createProviderCredential(argument: vault_api_pb.CreateProviderCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vault_api_pb.GetCredentialResponse>): grpc.ClientUnaryCall;
  getAllOrganizationCredential(argument: vault_api_pb.GetAllOrganizationCredentialRequest, callback: grpc.requestCallback<vault_api_pb.GetAllOrganizationCredentialResponse>): grpc.ClientUnaryCall;
  getAllOrganizationCredential(argument: vault_api_pb.GetAllOrganizationCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vault_api_pb.GetAllOrganizationCredentialResponse>): grpc.ClientUnaryCall;
  getAllOrganizationCredential(argument: vault_api_pb.GetAllOrganizationCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vault_api_pb.GetAllOrganizationCredentialResponse>): grpc.ClientUnaryCall;
  deleteCredential(argument: vault_api_pb.DeleteCredentialRequest, callback: grpc.requestCallback<vault_api_pb.GetCredentialResponse>): grpc.ClientUnaryCall;
  deleteCredential(argument: vault_api_pb.DeleteCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vault_api_pb.GetCredentialResponse>): grpc.ClientUnaryCall;
  deleteCredential(argument: vault_api_pb.DeleteCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vault_api_pb.GetCredentialResponse>): grpc.ClientUnaryCall;
  getCredential(argument: vault_api_pb.GetCredentialRequest, callback: grpc.requestCallback<vault_api_pb.GetCredentialResponse>): grpc.ClientUnaryCall;
  getCredential(argument: vault_api_pb.GetCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vault_api_pb.GetCredentialResponse>): grpc.ClientUnaryCall;
  getCredential(argument: vault_api_pb.GetCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vault_api_pb.GetCredentialResponse>): grpc.ClientUnaryCall;
  getOauth2Credential(argument: vault_api_pb.GetCredentialRequest, callback: grpc.requestCallback<vault_api_pb.GetCredentialResponse>): grpc.ClientUnaryCall;
  getOauth2Credential(argument: vault_api_pb.GetCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vault_api_pb.GetCredentialResponse>): grpc.ClientUnaryCall;
  getOauth2Credential(argument: vault_api_pb.GetCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vault_api_pb.GetCredentialResponse>): grpc.ClientUnaryCall;
}
