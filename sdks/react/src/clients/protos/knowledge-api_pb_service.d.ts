// package: knowledge_api
// file: knowledge-api.proto

import * as knowledge_api_pb from "./knowledge-api_pb";
import * as common_pb from "./common_pb";
import {grpc} from "@improbable-eng/grpc-web";

type KnowledgeServiceGetKnowledge = {
  readonly methodName: string;
  readonly service: typeof KnowledgeService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof knowledge_api_pb.GetKnowledgeRequest;
  readonly responseType: typeof knowledge_api_pb.GetKnowledgeResponse;
};

type KnowledgeServiceGetAllKnowledge = {
  readonly methodName: string;
  readonly service: typeof KnowledgeService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof knowledge_api_pb.GetAllKnowledgeRequest;
  readonly responseType: typeof knowledge_api_pb.GetAllKnowledgeResponse;
};

type KnowledgeServiceCreateKnowledge = {
  readonly methodName: string;
  readonly service: typeof KnowledgeService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof knowledge_api_pb.CreateKnowledgeRequest;
  readonly responseType: typeof knowledge_api_pb.CreateKnowledgeResponse;
};

type KnowledgeServiceCreateKnowledgeTag = {
  readonly methodName: string;
  readonly service: typeof KnowledgeService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof knowledge_api_pb.CreateKnowledgeTagRequest;
  readonly responseType: typeof knowledge_api_pb.GetKnowledgeResponse;
};

type KnowledgeServiceCreateKnowledgeDocument = {
  readonly methodName: string;
  readonly service: typeof KnowledgeService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof knowledge_api_pb.CreateKnowledgeDocumentRequest;
  readonly responseType: typeof knowledge_api_pb.CreateKnowledgeDocumentResponse;
};

type KnowledgeServiceGetAllKnowledgeDocument = {
  readonly methodName: string;
  readonly service: typeof KnowledgeService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof knowledge_api_pb.GetAllKnowledgeDocumentRequest;
  readonly responseType: typeof knowledge_api_pb.GetAllKnowledgeDocumentResponse;
};

type KnowledgeServiceGetAllKnowledgeDocumentSegment = {
  readonly methodName: string;
  readonly service: typeof KnowledgeService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof knowledge_api_pb.GetAllKnowledgeDocumentSegmentRequest;
  readonly responseType: typeof knowledge_api_pb.GetAllKnowledgeDocumentSegmentResponse;
};

type KnowledgeServiceUpdateKnowledgeDetail = {
  readonly methodName: string;
  readonly service: typeof KnowledgeService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof knowledge_api_pb.UpdateKnowledgeDetailRequest;
  readonly responseType: typeof knowledge_api_pb.GetKnowledgeResponse;
};

type KnowledgeServiceUpdateKnowledgeDocumentSegment = {
  readonly methodName: string;
  readonly service: typeof KnowledgeService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof knowledge_api_pb.UpdateKnowledgeDocumentSegmentRequest;
  readonly responseType: typeof common_pb.BaseResponse;
};

type KnowledgeServiceDeleteKnowledgeDocumentSegment = {
  readonly methodName: string;
  readonly service: typeof KnowledgeService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof knowledge_api_pb.DeleteKnowledgeDocumentSegmentRequest;
  readonly responseType: typeof common_pb.BaseResponse;
};

type KnowledgeServiceGetAllKnowledgeLog = {
  readonly methodName: string;
  readonly service: typeof KnowledgeService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof knowledge_api_pb.GetAllKnowledgeLogRequest;
  readonly responseType: typeof knowledge_api_pb.GetAllKnowledgeLogResponse;
};

type KnowledgeServiceGetKnowledgeLog = {
  readonly methodName: string;
  readonly service: typeof KnowledgeService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof knowledge_api_pb.GetKnowledgeLogRequest;
  readonly responseType: typeof knowledge_api_pb.GetKnowledgeLogResponse;
};

export class KnowledgeService {
  static readonly serviceName: string;
  static readonly GetKnowledge: KnowledgeServiceGetKnowledge;
  static readonly GetAllKnowledge: KnowledgeServiceGetAllKnowledge;
  static readonly CreateKnowledge: KnowledgeServiceCreateKnowledge;
  static readonly CreateKnowledgeTag: KnowledgeServiceCreateKnowledgeTag;
  static readonly CreateKnowledgeDocument: KnowledgeServiceCreateKnowledgeDocument;
  static readonly GetAllKnowledgeDocument: KnowledgeServiceGetAllKnowledgeDocument;
  static readonly GetAllKnowledgeDocumentSegment: KnowledgeServiceGetAllKnowledgeDocumentSegment;
  static readonly UpdateKnowledgeDetail: KnowledgeServiceUpdateKnowledgeDetail;
  static readonly UpdateKnowledgeDocumentSegment: KnowledgeServiceUpdateKnowledgeDocumentSegment;
  static readonly DeleteKnowledgeDocumentSegment: KnowledgeServiceDeleteKnowledgeDocumentSegment;
  static readonly GetAllKnowledgeLog: KnowledgeServiceGetAllKnowledgeLog;
  static readonly GetKnowledgeLog: KnowledgeServiceGetKnowledgeLog;
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

export class KnowledgeServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getKnowledge(
    requestMessage: knowledge_api_pb.GetKnowledgeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: knowledge_api_pb.GetKnowledgeResponse|null) => void
  ): UnaryResponse;
  getKnowledge(
    requestMessage: knowledge_api_pb.GetKnowledgeRequest,
    callback: (error: ServiceError|null, responseMessage: knowledge_api_pb.GetKnowledgeResponse|null) => void
  ): UnaryResponse;
  getAllKnowledge(
    requestMessage: knowledge_api_pb.GetAllKnowledgeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: knowledge_api_pb.GetAllKnowledgeResponse|null) => void
  ): UnaryResponse;
  getAllKnowledge(
    requestMessage: knowledge_api_pb.GetAllKnowledgeRequest,
    callback: (error: ServiceError|null, responseMessage: knowledge_api_pb.GetAllKnowledgeResponse|null) => void
  ): UnaryResponse;
  createKnowledge(
    requestMessage: knowledge_api_pb.CreateKnowledgeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: knowledge_api_pb.CreateKnowledgeResponse|null) => void
  ): UnaryResponse;
  createKnowledge(
    requestMessage: knowledge_api_pb.CreateKnowledgeRequest,
    callback: (error: ServiceError|null, responseMessage: knowledge_api_pb.CreateKnowledgeResponse|null) => void
  ): UnaryResponse;
  createKnowledgeTag(
    requestMessage: knowledge_api_pb.CreateKnowledgeTagRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: knowledge_api_pb.GetKnowledgeResponse|null) => void
  ): UnaryResponse;
  createKnowledgeTag(
    requestMessage: knowledge_api_pb.CreateKnowledgeTagRequest,
    callback: (error: ServiceError|null, responseMessage: knowledge_api_pb.GetKnowledgeResponse|null) => void
  ): UnaryResponse;
  createKnowledgeDocument(
    requestMessage: knowledge_api_pb.CreateKnowledgeDocumentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: knowledge_api_pb.CreateKnowledgeDocumentResponse|null) => void
  ): UnaryResponse;
  createKnowledgeDocument(
    requestMessage: knowledge_api_pb.CreateKnowledgeDocumentRequest,
    callback: (error: ServiceError|null, responseMessage: knowledge_api_pb.CreateKnowledgeDocumentResponse|null) => void
  ): UnaryResponse;
  getAllKnowledgeDocument(
    requestMessage: knowledge_api_pb.GetAllKnowledgeDocumentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: knowledge_api_pb.GetAllKnowledgeDocumentResponse|null) => void
  ): UnaryResponse;
  getAllKnowledgeDocument(
    requestMessage: knowledge_api_pb.GetAllKnowledgeDocumentRequest,
    callback: (error: ServiceError|null, responseMessage: knowledge_api_pb.GetAllKnowledgeDocumentResponse|null) => void
  ): UnaryResponse;
  getAllKnowledgeDocumentSegment(
    requestMessage: knowledge_api_pb.GetAllKnowledgeDocumentSegmentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: knowledge_api_pb.GetAllKnowledgeDocumentSegmentResponse|null) => void
  ): UnaryResponse;
  getAllKnowledgeDocumentSegment(
    requestMessage: knowledge_api_pb.GetAllKnowledgeDocumentSegmentRequest,
    callback: (error: ServiceError|null, responseMessage: knowledge_api_pb.GetAllKnowledgeDocumentSegmentResponse|null) => void
  ): UnaryResponse;
  updateKnowledgeDetail(
    requestMessage: knowledge_api_pb.UpdateKnowledgeDetailRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: knowledge_api_pb.GetKnowledgeResponse|null) => void
  ): UnaryResponse;
  updateKnowledgeDetail(
    requestMessage: knowledge_api_pb.UpdateKnowledgeDetailRequest,
    callback: (error: ServiceError|null, responseMessage: knowledge_api_pb.GetKnowledgeResponse|null) => void
  ): UnaryResponse;
  updateKnowledgeDocumentSegment(
    requestMessage: knowledge_api_pb.UpdateKnowledgeDocumentSegmentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: common_pb.BaseResponse|null) => void
  ): UnaryResponse;
  updateKnowledgeDocumentSegment(
    requestMessage: knowledge_api_pb.UpdateKnowledgeDocumentSegmentRequest,
    callback: (error: ServiceError|null, responseMessage: common_pb.BaseResponse|null) => void
  ): UnaryResponse;
  deleteKnowledgeDocumentSegment(
    requestMessage: knowledge_api_pb.DeleteKnowledgeDocumentSegmentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: common_pb.BaseResponse|null) => void
  ): UnaryResponse;
  deleteKnowledgeDocumentSegment(
    requestMessage: knowledge_api_pb.DeleteKnowledgeDocumentSegmentRequest,
    callback: (error: ServiceError|null, responseMessage: common_pb.BaseResponse|null) => void
  ): UnaryResponse;
  getAllKnowledgeLog(
    requestMessage: knowledge_api_pb.GetAllKnowledgeLogRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: knowledge_api_pb.GetAllKnowledgeLogResponse|null) => void
  ): UnaryResponse;
  getAllKnowledgeLog(
    requestMessage: knowledge_api_pb.GetAllKnowledgeLogRequest,
    callback: (error: ServiceError|null, responseMessage: knowledge_api_pb.GetAllKnowledgeLogResponse|null) => void
  ): UnaryResponse;
  getKnowledgeLog(
    requestMessage: knowledge_api_pb.GetKnowledgeLogRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: knowledge_api_pb.GetKnowledgeLogResponse|null) => void
  ): UnaryResponse;
  getKnowledgeLog(
    requestMessage: knowledge_api_pb.GetKnowledgeLogRequest,
    callback: (error: ServiceError|null, responseMessage: knowledge_api_pb.GetKnowledgeLogResponse|null) => void
  ): UnaryResponse;
}

