// GENERATED CODE -- DO NOT EDIT!

// package: talk_api
// file: agentkit.proto

import * as agentkit_pb from "./agentkit_pb";
import * as grpc from "grpc";

interface IAgentKitService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  talk: grpc.MethodDefinition<agentkit_pb.TalkInput, agentkit_pb.TalkOutput>;
}

export const AgentKitService: IAgentKitService;

export interface IAgentKitServer extends grpc.UntypedServiceImplementation {
  talk: grpc.handleBidiStreamingCall<agentkit_pb.TalkInput, agentkit_pb.TalkOutput>;
}

export class AgentKitClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  talk(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<agentkit_pb.TalkInput, agentkit_pb.TalkOutput>;
  talk(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<agentkit_pb.TalkInput, agentkit_pb.TalkOutput>;
}
