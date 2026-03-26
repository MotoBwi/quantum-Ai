// GENERATED CODE -- DO NOT EDIT!

// package: talk_api
// file: webrtc.proto

import * as webrtc_pb from "./webrtc_pb";
import * as grpc from "grpc";

interface IWebRTCService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  webTalk: grpc.MethodDefinition<webrtc_pb.WebTalkRequest, webrtc_pb.WebTalkResponse>;
}

export const WebRTCService: IWebRTCService;

export interface IWebRTCServer extends grpc.UntypedServiceImplementation {
  webTalk: grpc.handleBidiStreamingCall<webrtc_pb.WebTalkRequest, webrtc_pb.WebTalkResponse>;
}

export class WebRTCClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  webTalk(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<webrtc_pb.WebTalkRequest, webrtc_pb.WebTalkResponse>;
  webTalk(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<webrtc_pb.WebTalkRequest, webrtc_pb.WebTalkResponse>;
}
