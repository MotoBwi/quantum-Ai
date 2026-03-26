// package: integration_api
// file: audit-logging-api.proto

import * as audit_logging_api_pb from "./audit-logging-api_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AuditLoggingServiceGetAllAuditLog = {
  readonly methodName: string;
  readonly service: typeof AuditLoggingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof audit_logging_api_pb.GetAllAuditLogRequest;
  readonly responseType: typeof audit_logging_api_pb.GetAllAuditLogResponse;
};

type AuditLoggingServiceGetAuditLog = {
  readonly methodName: string;
  readonly service: typeof AuditLoggingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof audit_logging_api_pb.GetAuditLogRequest;
  readonly responseType: typeof audit_logging_api_pb.GetAuditLogResponse;
};

type AuditLoggingServiceCreateMetadata = {
  readonly methodName: string;
  readonly service: typeof AuditLoggingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof audit_logging_api_pb.CreateMetadataRequest;
  readonly responseType: typeof audit_logging_api_pb.CreateMetadataResponse;
};

export class AuditLoggingService {
  static readonly serviceName: string;
  static readonly GetAllAuditLog: AuditLoggingServiceGetAllAuditLog;
  static readonly GetAuditLog: AuditLoggingServiceGetAuditLog;
  static readonly CreateMetadata: AuditLoggingServiceCreateMetadata;
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

export class AuditLoggingServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getAllAuditLog(
    requestMessage: audit_logging_api_pb.GetAllAuditLogRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: audit_logging_api_pb.GetAllAuditLogResponse|null) => void
  ): UnaryResponse;
  getAllAuditLog(
    requestMessage: audit_logging_api_pb.GetAllAuditLogRequest,
    callback: (error: ServiceError|null, responseMessage: audit_logging_api_pb.GetAllAuditLogResponse|null) => void
  ): UnaryResponse;
  getAuditLog(
    requestMessage: audit_logging_api_pb.GetAuditLogRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: audit_logging_api_pb.GetAuditLogResponse|null) => void
  ): UnaryResponse;
  getAuditLog(
    requestMessage: audit_logging_api_pb.GetAuditLogRequest,
    callback: (error: ServiceError|null, responseMessage: audit_logging_api_pb.GetAuditLogResponse|null) => void
  ): UnaryResponse;
  createMetadata(
    requestMessage: audit_logging_api_pb.CreateMetadataRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: audit_logging_api_pb.CreateMetadataResponse|null) => void
  ): UnaryResponse;
  createMetadata(
    requestMessage: audit_logging_api_pb.CreateMetadataRequest,
    callback: (error: ServiceError|null, responseMessage: audit_logging_api_pb.CreateMetadataResponse|null) => void
  ): UnaryResponse;
}

