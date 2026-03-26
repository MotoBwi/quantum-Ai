// GENERATED CODE -- DO NOT EDIT!

// package: integration_api
// file: audit-logging-api.proto

import * as audit_logging_api_pb from "./audit-logging-api_pb";
import * as grpc from "grpc";

interface IAuditLoggingServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getAllAuditLog: grpc.MethodDefinition<audit_logging_api_pb.GetAllAuditLogRequest, audit_logging_api_pb.GetAllAuditLogResponse>;
  getAuditLog: grpc.MethodDefinition<audit_logging_api_pb.GetAuditLogRequest, audit_logging_api_pb.GetAuditLogResponse>;
  createMetadata: grpc.MethodDefinition<audit_logging_api_pb.CreateMetadataRequest, audit_logging_api_pb.CreateMetadataResponse>;
}

export const AuditLoggingServiceService: IAuditLoggingServiceService;

export interface IAuditLoggingServiceServer extends grpc.UntypedServiceImplementation {
  getAllAuditLog: grpc.handleUnaryCall<audit_logging_api_pb.GetAllAuditLogRequest, audit_logging_api_pb.GetAllAuditLogResponse>;
  getAuditLog: grpc.handleUnaryCall<audit_logging_api_pb.GetAuditLogRequest, audit_logging_api_pb.GetAuditLogResponse>;
  createMetadata: grpc.handleUnaryCall<audit_logging_api_pb.CreateMetadataRequest, audit_logging_api_pb.CreateMetadataResponse>;
}

export class AuditLoggingServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getAllAuditLog(argument: audit_logging_api_pb.GetAllAuditLogRequest, callback: grpc.requestCallback<audit_logging_api_pb.GetAllAuditLogResponse>): grpc.ClientUnaryCall;
  getAllAuditLog(argument: audit_logging_api_pb.GetAllAuditLogRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<audit_logging_api_pb.GetAllAuditLogResponse>): grpc.ClientUnaryCall;
  getAllAuditLog(argument: audit_logging_api_pb.GetAllAuditLogRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<audit_logging_api_pb.GetAllAuditLogResponse>): grpc.ClientUnaryCall;
  getAuditLog(argument: audit_logging_api_pb.GetAuditLogRequest, callback: grpc.requestCallback<audit_logging_api_pb.GetAuditLogResponse>): grpc.ClientUnaryCall;
  getAuditLog(argument: audit_logging_api_pb.GetAuditLogRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<audit_logging_api_pb.GetAuditLogResponse>): grpc.ClientUnaryCall;
  getAuditLog(argument: audit_logging_api_pb.GetAuditLogRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<audit_logging_api_pb.GetAuditLogResponse>): grpc.ClientUnaryCall;
  createMetadata(argument: audit_logging_api_pb.CreateMetadataRequest, callback: grpc.requestCallback<audit_logging_api_pb.CreateMetadataResponse>): grpc.ClientUnaryCall;
  createMetadata(argument: audit_logging_api_pb.CreateMetadataRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<audit_logging_api_pb.CreateMetadataResponse>): grpc.ClientUnaryCall;
  createMetadata(argument: audit_logging_api_pb.CreateMetadataRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<audit_logging_api_pb.CreateMetadataResponse>): grpc.ClientUnaryCall;
}
