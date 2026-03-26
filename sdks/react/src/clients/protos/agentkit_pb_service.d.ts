// package: talk_api
// file: agentkit.proto

import * as agentkit_pb from "./agentkit_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AgentKitTalk = {
  readonly methodName: string;
  readonly service: typeof AgentKit;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof agentkit_pb.TalkInput;
  readonly responseType: typeof agentkit_pb.TalkOutput;
};

export class AgentKit {
  static readonly serviceName: string;
  static readonly Talk: AgentKitTalk;
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

export class AgentKitClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  talk(metadata?: grpc.Metadata): BidirectionalStream<agentkit_pb.TalkInput, agentkit_pb.TalkOutput>;
}

