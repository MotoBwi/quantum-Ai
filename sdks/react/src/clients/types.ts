import { grpc } from "@improbable-eng/grpc-web";

export type ServiceError = {
  message: string;
  code: number;
  metadata: grpc.Metadata;
};
export type Status = { details: string; code: number; metadata: grpc.Metadata };

export interface UnaryResponse {
  cancel(): void;
}
export interface ResponseStream<T> {
  cancel(): void;
  on(type: "data", handler: (message: T) => void): ResponseStream<T>;
  on(type: "end", handler: (status?: Status) => void): ResponseStream<T>;
  on(type: "status", handler: (status: Status) => void): ResponseStream<T>;
}
export interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: "end", handler: (status?: Status) => void): RequestStream<T>;
  on(type: "status", handler: (status: Status) => void): RequestStream<T>;
}
export interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(
    type: "data",
    handler: (message: ResT) => void
  ): BidirectionalStream<ReqT, ResT>;
  on(
    type: "end",
    handler: (status?: Status) => void
  ): BidirectionalStream<ReqT, ResT>;
  on(
    type: "status",
    handler: (status: Status) => void
  ): BidirectionalStream<ReqT, ResT>;
}
