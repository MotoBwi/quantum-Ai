// GENERATED CODE -- DO NOT EDIT!

// package: knowledge_api
// file: knowledge-api.proto

import * as knowledge_api_pb from "./knowledge-api_pb";
import * as common_pb from "./common_pb";
import * as grpc from "grpc";

interface IKnowledgeServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getKnowledge: grpc.MethodDefinition<knowledge_api_pb.GetKnowledgeRequest, knowledge_api_pb.GetKnowledgeResponse>;
  getAllKnowledge: grpc.MethodDefinition<knowledge_api_pb.GetAllKnowledgeRequest, knowledge_api_pb.GetAllKnowledgeResponse>;
  createKnowledge: grpc.MethodDefinition<knowledge_api_pb.CreateKnowledgeRequest, knowledge_api_pb.CreateKnowledgeResponse>;
  createKnowledgeTag: grpc.MethodDefinition<knowledge_api_pb.CreateKnowledgeTagRequest, knowledge_api_pb.GetKnowledgeResponse>;
  createKnowledgeDocument: grpc.MethodDefinition<knowledge_api_pb.CreateKnowledgeDocumentRequest, knowledge_api_pb.CreateKnowledgeDocumentResponse>;
  getAllKnowledgeDocument: grpc.MethodDefinition<knowledge_api_pb.GetAllKnowledgeDocumentRequest, knowledge_api_pb.GetAllKnowledgeDocumentResponse>;
  getAllKnowledgeDocumentSegment: grpc.MethodDefinition<knowledge_api_pb.GetAllKnowledgeDocumentSegmentRequest, knowledge_api_pb.GetAllKnowledgeDocumentSegmentResponse>;
  updateKnowledgeDetail: grpc.MethodDefinition<knowledge_api_pb.UpdateKnowledgeDetailRequest, knowledge_api_pb.GetKnowledgeResponse>;
  updateKnowledgeDocumentSegment: grpc.MethodDefinition<knowledge_api_pb.UpdateKnowledgeDocumentSegmentRequest, common_pb.BaseResponse>;
  deleteKnowledgeDocumentSegment: grpc.MethodDefinition<knowledge_api_pb.DeleteKnowledgeDocumentSegmentRequest, common_pb.BaseResponse>;
  getAllKnowledgeLog: grpc.MethodDefinition<knowledge_api_pb.GetAllKnowledgeLogRequest, knowledge_api_pb.GetAllKnowledgeLogResponse>;
  getKnowledgeLog: grpc.MethodDefinition<knowledge_api_pb.GetKnowledgeLogRequest, knowledge_api_pb.GetKnowledgeLogResponse>;
}

export const KnowledgeServiceService: IKnowledgeServiceService;

export interface IKnowledgeServiceServer extends grpc.UntypedServiceImplementation {
  getKnowledge: grpc.handleUnaryCall<knowledge_api_pb.GetKnowledgeRequest, knowledge_api_pb.GetKnowledgeResponse>;
  getAllKnowledge: grpc.handleUnaryCall<knowledge_api_pb.GetAllKnowledgeRequest, knowledge_api_pb.GetAllKnowledgeResponse>;
  createKnowledge: grpc.handleUnaryCall<knowledge_api_pb.CreateKnowledgeRequest, knowledge_api_pb.CreateKnowledgeResponse>;
  createKnowledgeTag: grpc.handleUnaryCall<knowledge_api_pb.CreateKnowledgeTagRequest, knowledge_api_pb.GetKnowledgeResponse>;
  createKnowledgeDocument: grpc.handleUnaryCall<knowledge_api_pb.CreateKnowledgeDocumentRequest, knowledge_api_pb.CreateKnowledgeDocumentResponse>;
  getAllKnowledgeDocument: grpc.handleUnaryCall<knowledge_api_pb.GetAllKnowledgeDocumentRequest, knowledge_api_pb.GetAllKnowledgeDocumentResponse>;
  getAllKnowledgeDocumentSegment: grpc.handleUnaryCall<knowledge_api_pb.GetAllKnowledgeDocumentSegmentRequest, knowledge_api_pb.GetAllKnowledgeDocumentSegmentResponse>;
  updateKnowledgeDetail: grpc.handleUnaryCall<knowledge_api_pb.UpdateKnowledgeDetailRequest, knowledge_api_pb.GetKnowledgeResponse>;
  updateKnowledgeDocumentSegment: grpc.handleUnaryCall<knowledge_api_pb.UpdateKnowledgeDocumentSegmentRequest, common_pb.BaseResponse>;
  deleteKnowledgeDocumentSegment: grpc.handleUnaryCall<knowledge_api_pb.DeleteKnowledgeDocumentSegmentRequest, common_pb.BaseResponse>;
  getAllKnowledgeLog: grpc.handleUnaryCall<knowledge_api_pb.GetAllKnowledgeLogRequest, knowledge_api_pb.GetAllKnowledgeLogResponse>;
  getKnowledgeLog: grpc.handleUnaryCall<knowledge_api_pb.GetKnowledgeLogRequest, knowledge_api_pb.GetKnowledgeLogResponse>;
}

export class KnowledgeServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getKnowledge(argument: knowledge_api_pb.GetKnowledgeRequest, callback: grpc.requestCallback<knowledge_api_pb.GetKnowledgeResponse>): grpc.ClientUnaryCall;
  getKnowledge(argument: knowledge_api_pb.GetKnowledgeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<knowledge_api_pb.GetKnowledgeResponse>): grpc.ClientUnaryCall;
  getKnowledge(argument: knowledge_api_pb.GetKnowledgeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<knowledge_api_pb.GetKnowledgeResponse>): grpc.ClientUnaryCall;
  getAllKnowledge(argument: knowledge_api_pb.GetAllKnowledgeRequest, callback: grpc.requestCallback<knowledge_api_pb.GetAllKnowledgeResponse>): grpc.ClientUnaryCall;
  getAllKnowledge(argument: knowledge_api_pb.GetAllKnowledgeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<knowledge_api_pb.GetAllKnowledgeResponse>): grpc.ClientUnaryCall;
  getAllKnowledge(argument: knowledge_api_pb.GetAllKnowledgeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<knowledge_api_pb.GetAllKnowledgeResponse>): grpc.ClientUnaryCall;
  createKnowledge(argument: knowledge_api_pb.CreateKnowledgeRequest, callback: grpc.requestCallback<knowledge_api_pb.CreateKnowledgeResponse>): grpc.ClientUnaryCall;
  createKnowledge(argument: knowledge_api_pb.CreateKnowledgeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<knowledge_api_pb.CreateKnowledgeResponse>): grpc.ClientUnaryCall;
  createKnowledge(argument: knowledge_api_pb.CreateKnowledgeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<knowledge_api_pb.CreateKnowledgeResponse>): grpc.ClientUnaryCall;
  createKnowledgeTag(argument: knowledge_api_pb.CreateKnowledgeTagRequest, callback: grpc.requestCallback<knowledge_api_pb.GetKnowledgeResponse>): grpc.ClientUnaryCall;
  createKnowledgeTag(argument: knowledge_api_pb.CreateKnowledgeTagRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<knowledge_api_pb.GetKnowledgeResponse>): grpc.ClientUnaryCall;
  createKnowledgeTag(argument: knowledge_api_pb.CreateKnowledgeTagRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<knowledge_api_pb.GetKnowledgeResponse>): grpc.ClientUnaryCall;
  createKnowledgeDocument(argument: knowledge_api_pb.CreateKnowledgeDocumentRequest, callback: grpc.requestCallback<knowledge_api_pb.CreateKnowledgeDocumentResponse>): grpc.ClientUnaryCall;
  createKnowledgeDocument(argument: knowledge_api_pb.CreateKnowledgeDocumentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<knowledge_api_pb.CreateKnowledgeDocumentResponse>): grpc.ClientUnaryCall;
  createKnowledgeDocument(argument: knowledge_api_pb.CreateKnowledgeDocumentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<knowledge_api_pb.CreateKnowledgeDocumentResponse>): grpc.ClientUnaryCall;
  getAllKnowledgeDocument(argument: knowledge_api_pb.GetAllKnowledgeDocumentRequest, callback: grpc.requestCallback<knowledge_api_pb.GetAllKnowledgeDocumentResponse>): grpc.ClientUnaryCall;
  getAllKnowledgeDocument(argument: knowledge_api_pb.GetAllKnowledgeDocumentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<knowledge_api_pb.GetAllKnowledgeDocumentResponse>): grpc.ClientUnaryCall;
  getAllKnowledgeDocument(argument: knowledge_api_pb.GetAllKnowledgeDocumentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<knowledge_api_pb.GetAllKnowledgeDocumentResponse>): grpc.ClientUnaryCall;
  getAllKnowledgeDocumentSegment(argument: knowledge_api_pb.GetAllKnowledgeDocumentSegmentRequest, callback: grpc.requestCallback<knowledge_api_pb.GetAllKnowledgeDocumentSegmentResponse>): grpc.ClientUnaryCall;
  getAllKnowledgeDocumentSegment(argument: knowledge_api_pb.GetAllKnowledgeDocumentSegmentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<knowledge_api_pb.GetAllKnowledgeDocumentSegmentResponse>): grpc.ClientUnaryCall;
  getAllKnowledgeDocumentSegment(argument: knowledge_api_pb.GetAllKnowledgeDocumentSegmentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<knowledge_api_pb.GetAllKnowledgeDocumentSegmentResponse>): grpc.ClientUnaryCall;
  updateKnowledgeDetail(argument: knowledge_api_pb.UpdateKnowledgeDetailRequest, callback: grpc.requestCallback<knowledge_api_pb.GetKnowledgeResponse>): grpc.ClientUnaryCall;
  updateKnowledgeDetail(argument: knowledge_api_pb.UpdateKnowledgeDetailRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<knowledge_api_pb.GetKnowledgeResponse>): grpc.ClientUnaryCall;
  updateKnowledgeDetail(argument: knowledge_api_pb.UpdateKnowledgeDetailRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<knowledge_api_pb.GetKnowledgeResponse>): grpc.ClientUnaryCall;
  updateKnowledgeDocumentSegment(argument: knowledge_api_pb.UpdateKnowledgeDocumentSegmentRequest, callback: grpc.requestCallback<common_pb.BaseResponse>): grpc.ClientUnaryCall;
  updateKnowledgeDocumentSegment(argument: knowledge_api_pb.UpdateKnowledgeDocumentSegmentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_pb.BaseResponse>): grpc.ClientUnaryCall;
  updateKnowledgeDocumentSegment(argument: knowledge_api_pb.UpdateKnowledgeDocumentSegmentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_pb.BaseResponse>): grpc.ClientUnaryCall;
  deleteKnowledgeDocumentSegment(argument: knowledge_api_pb.DeleteKnowledgeDocumentSegmentRequest, callback: grpc.requestCallback<common_pb.BaseResponse>): grpc.ClientUnaryCall;
  deleteKnowledgeDocumentSegment(argument: knowledge_api_pb.DeleteKnowledgeDocumentSegmentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_pb.BaseResponse>): grpc.ClientUnaryCall;
  deleteKnowledgeDocumentSegment(argument: knowledge_api_pb.DeleteKnowledgeDocumentSegmentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_pb.BaseResponse>): grpc.ClientUnaryCall;
  getAllKnowledgeLog(argument: knowledge_api_pb.GetAllKnowledgeLogRequest, callback: grpc.requestCallback<knowledge_api_pb.GetAllKnowledgeLogResponse>): grpc.ClientUnaryCall;
  getAllKnowledgeLog(argument: knowledge_api_pb.GetAllKnowledgeLogRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<knowledge_api_pb.GetAllKnowledgeLogResponse>): grpc.ClientUnaryCall;
  getAllKnowledgeLog(argument: knowledge_api_pb.GetAllKnowledgeLogRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<knowledge_api_pb.GetAllKnowledgeLogResponse>): grpc.ClientUnaryCall;
  getKnowledgeLog(argument: knowledge_api_pb.GetKnowledgeLogRequest, callback: grpc.requestCallback<knowledge_api_pb.GetKnowledgeLogResponse>): grpc.ClientUnaryCall;
  getKnowledgeLog(argument: knowledge_api_pb.GetKnowledgeLogRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<knowledge_api_pb.GetKnowledgeLogResponse>): grpc.ClientUnaryCall;
  getKnowledgeLog(argument: knowledge_api_pb.GetKnowledgeLogRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<knowledge_api_pb.GetKnowledgeLogResponse>): grpc.ClientUnaryCall;
}
