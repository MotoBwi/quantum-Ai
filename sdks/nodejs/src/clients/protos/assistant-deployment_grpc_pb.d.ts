// GENERATED CODE -- DO NOT EDIT!

// package: assistant_api
// file: assistant-deployment.proto

import * as assistant_deployment_pb from "./assistant-deployment_pb";
import * as grpc from "grpc";

interface IAssistantDeploymentServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createAssistantApiDeployment: grpc.MethodDefinition<assistant_deployment_pb.CreateAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantApiDeploymentResponse>;
  getAssistantApiDeployment: grpc.MethodDefinition<assistant_deployment_pb.GetAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantApiDeploymentResponse>;
  createAssistantWebpluginDeployment: grpc.MethodDefinition<assistant_deployment_pb.CreateAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantWebpluginDeploymentResponse>;
  getAssistantWebpluginDeployment: grpc.MethodDefinition<assistant_deployment_pb.GetAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantWebpluginDeploymentResponse>;
  createAssistantDebuggerDeployment: grpc.MethodDefinition<assistant_deployment_pb.CreateAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantDebuggerDeploymentResponse>;
  getAssistantDebuggerDeployment: grpc.MethodDefinition<assistant_deployment_pb.GetAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantDebuggerDeploymentResponse>;
  createAssistantWhatsappDeployment: grpc.MethodDefinition<assistant_deployment_pb.CreateAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantWhatsappDeploymentResponse>;
  getAssistantWhatsappDeployment: grpc.MethodDefinition<assistant_deployment_pb.GetAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantWhatsappDeploymentResponse>;
  createAssistantPhoneDeployment: grpc.MethodDefinition<assistant_deployment_pb.CreateAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantPhoneDeploymentResponse>;
  getAssistantPhoneDeployment: grpc.MethodDefinition<assistant_deployment_pb.GetAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantPhoneDeploymentResponse>;
}

export const AssistantDeploymentServiceService: IAssistantDeploymentServiceService;

export interface IAssistantDeploymentServiceServer extends grpc.UntypedServiceImplementation {
  createAssistantApiDeployment: grpc.handleUnaryCall<assistant_deployment_pb.CreateAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantApiDeploymentResponse>;
  getAssistantApiDeployment: grpc.handleUnaryCall<assistant_deployment_pb.GetAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantApiDeploymentResponse>;
  createAssistantWebpluginDeployment: grpc.handleUnaryCall<assistant_deployment_pb.CreateAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantWebpluginDeploymentResponse>;
  getAssistantWebpluginDeployment: grpc.handleUnaryCall<assistant_deployment_pb.GetAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantWebpluginDeploymentResponse>;
  createAssistantDebuggerDeployment: grpc.handleUnaryCall<assistant_deployment_pb.CreateAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantDebuggerDeploymentResponse>;
  getAssistantDebuggerDeployment: grpc.handleUnaryCall<assistant_deployment_pb.GetAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantDebuggerDeploymentResponse>;
  createAssistantWhatsappDeployment: grpc.handleUnaryCall<assistant_deployment_pb.CreateAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantWhatsappDeploymentResponse>;
  getAssistantWhatsappDeployment: grpc.handleUnaryCall<assistant_deployment_pb.GetAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantWhatsappDeploymentResponse>;
  createAssistantPhoneDeployment: grpc.handleUnaryCall<assistant_deployment_pb.CreateAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantPhoneDeploymentResponse>;
  getAssistantPhoneDeployment: grpc.handleUnaryCall<assistant_deployment_pb.GetAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantPhoneDeploymentResponse>;
}

export class AssistantDeploymentServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createAssistantApiDeployment(argument: assistant_deployment_pb.CreateAssistantDeploymentRequest, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantApiDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantApiDeployment(argument: assistant_deployment_pb.CreateAssistantDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantApiDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantApiDeployment(argument: assistant_deployment_pb.CreateAssistantDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantApiDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantApiDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantApiDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantApiDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantApiDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantApiDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantApiDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantWebpluginDeployment(argument: assistant_deployment_pb.CreateAssistantDeploymentRequest, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantWebpluginDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantWebpluginDeployment(argument: assistant_deployment_pb.CreateAssistantDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantWebpluginDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantWebpluginDeployment(argument: assistant_deployment_pb.CreateAssistantDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantWebpluginDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantWebpluginDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantWebpluginDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantWebpluginDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantWebpluginDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantWebpluginDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantWebpluginDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantDebuggerDeployment(argument: assistant_deployment_pb.CreateAssistantDeploymentRequest, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantDebuggerDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantDebuggerDeployment(argument: assistant_deployment_pb.CreateAssistantDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantDebuggerDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantDebuggerDeployment(argument: assistant_deployment_pb.CreateAssistantDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantDebuggerDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantDebuggerDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantDebuggerDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantDebuggerDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantDebuggerDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantDebuggerDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantDebuggerDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantWhatsappDeployment(argument: assistant_deployment_pb.CreateAssistantDeploymentRequest, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantWhatsappDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantWhatsappDeployment(argument: assistant_deployment_pb.CreateAssistantDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantWhatsappDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantWhatsappDeployment(argument: assistant_deployment_pb.CreateAssistantDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantWhatsappDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantWhatsappDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantWhatsappDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantWhatsappDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantWhatsappDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantWhatsappDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantWhatsappDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantPhoneDeployment(argument: assistant_deployment_pb.CreateAssistantDeploymentRequest, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantPhoneDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantPhoneDeployment(argument: assistant_deployment_pb.CreateAssistantDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantPhoneDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantPhoneDeployment(argument: assistant_deployment_pb.CreateAssistantDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantPhoneDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantPhoneDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantPhoneDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantPhoneDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantPhoneDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantPhoneDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantPhoneDeploymentResponse>): grpc.ClientUnaryCall;
}
