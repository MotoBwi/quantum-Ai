// GENERATED CODE -- DO NOT EDIT!

// package: document_api
// file: document-api.proto

import * as document_api_pb from "./document-api_pb";
import * as grpc from "grpc";

interface IDocumentServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  indexKnowledgeDocument: grpc.MethodDefinition<document_api_pb.IndexKnowledgeDocumentRequest, document_api_pb.IndexKnowledgeDocumentResponse>;
}

export const DocumentServiceService: IDocumentServiceService;

export interface IDocumentServiceServer extends grpc.UntypedServiceImplementation {
  indexKnowledgeDocument: grpc.handleUnaryCall<document_api_pb.IndexKnowledgeDocumentRequest, document_api_pb.IndexKnowledgeDocumentResponse>;
}

export class DocumentServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  indexKnowledgeDocument(argument: document_api_pb.IndexKnowledgeDocumentRequest, callback: grpc.requestCallback<document_api_pb.IndexKnowledgeDocumentResponse>): grpc.ClientUnaryCall;
  indexKnowledgeDocument(argument: document_api_pb.IndexKnowledgeDocumentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<document_api_pb.IndexKnowledgeDocumentResponse>): grpc.ClientUnaryCall;
  indexKnowledgeDocument(argument: document_api_pb.IndexKnowledgeDocumentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<document_api_pb.IndexKnowledgeDocumentResponse>): grpc.ClientUnaryCall;
}
