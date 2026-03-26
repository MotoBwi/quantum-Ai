/*
 *  Copyright (c) 2024. Rapida
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 *
 *  Author: Prashant <prashant@rapida.ai>
 */

import { ConnectionConfig } from "@/rapida/types/connection-config";
import { AgentConfig } from "@/rapida/types/agent-config";
import { AgentCallback } from "@/rapida/types/agent-callback";
import { WebTalk } from "@/rapida/clients/webrtc";
import {
  ConversationUserMessage,
} from "@/rapida/clients/protos/talk-api_pb";
import {
  WebTalkRequest,
  WebTalkResponse,
  ClientSignaling,
  WebRTCSDP,
  ICECandidate as ProtoICECandidate,
} from "@/rapida/clients/protos/webrtc_pb";
import { BidirectionalStream } from "@/rapida/clients/types";
import {
  buildInitializationRequest,
  buildConfigurationRequest,
  describeRequest,
  describeResponse,
} from "@/rapida/agents";

const LOG_PREFIX = "[Rapida:GrpcSignaling]";

/**
 * GrpcSignalingManager — Owns the gRPC bidirectional stream lifecycle
 *
 * Responsibilities:
 * - Connect/disconnect gRPC stream
 * - Build and send proto messages (Initialization, Configuration, Text, Signaling)
 * - Guarantee initialization is always the first message on any stream
 * - Forward incoming responses to a message handler callback
 */
export class GrpcSignalingManager {
  private grpcStream: BidirectionalStream<WebTalkRequest, WebTalkResponse> | null = null;
  private initializationSent = false;
  private conversationId: string | null = null;
  private sessionId: string | null = null;

  constructor(
    private connectionConfig: ConnectionConfig,
    private agentConfig: AgentConfig,
    private callbacks: AgentCallback,
    private onMessage: (response: WebTalkResponse) => void,
    initialConversationId?: string,
  ) {
    this.conversationId = initialConversationId ?? null;
  }

  // ---------------------------------------------------------------------------
  // Stream lifecycle
  // ---------------------------------------------------------------------------

  /** Connect the gRPC bidirectional stream */
  connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        this.grpcStream = WebTalk(this.connectionConfig);

        this.grpcStream.on("data", (response: WebTalkResponse) => {
          // console.log(`${LOG_PREFIX} ← IN  | ${describeResponse(response)}`);
          this.onMessage(response);
        });

        this.grpcStream.on("end", () => {
          // Null the stream immediately so isConnected returns false.
          // Without this, callers checking isConnected after the stream
          // ends still see true and attempt writes on a dead stream.
          this.grpcStream = null;
          this.initializationSent = false;
          this.callbacks.onConnectionStateChange?.("disconnected");
          this.callbacks.onDisconnected?.();
        });

        this.grpcStream.on("status", (status: any) => {
          if (status.code !== 0) {
            const errorMessage = status.details || `gRPC status code: ${status.code}`;
            this.callbacks.onError?.(new Error(`gRPC error: ${errorMessage}`));
            this.callbacks.onConnectionStateChange?.("failed");
            this.callbacks.onDisconnected?.();
            // Mark stream as disconnected
            this.grpcStream = null;
            this.initializationSent = false;
          }
        });

        resolve();
      } catch (error) {
        reject(new Error(`gRPC signaling connection failed: ${error}`));
      }
    });
  }

  /** Close the gRPC stream */
  close(): void {
    if (this.grpcStream) {
      const stream = this.grpcStream;
      this.grpcStream = null; // Clear reference first to prevent double-close
      // Use cancel() which is safe even when the underlying WebSocket is
      // already in CLOSING or CLOSED state. Falling back to end() if cancel
      // is somehow unavailable.
      try { stream.cancel(); } catch { try { stream.end(); } catch { } }
    }
    this.initializationSent = false;
    this.sessionId = null;
    this.conversationId = null;
  }

  get isConnected(): boolean {
    return this.grpcStream !== null;
  }

  // ---------------------------------------------------------------------------
  // Outgoing messages
  // ---------------------------------------------------------------------------

  /**
   * Send ConversationInitialization — MUST be the first message on the stream.
   */
  sendConversationInitialization(): void {
    if (!this.grpcStream) return;

    try {
      const request = buildInitializationRequest(this.agentConfig, this.conversationId ?? undefined);
      // console.log(`${LOG_PREFIX} → OUT | ${describeRequest(request)}`);
      this.grpcStream.write(request);
      this.initializationSent = true;
    } catch (error) {
      console.error(`${LOG_PREFIX} Failed to send initialization`, error);
      this.callbacks.onError?.(new Error(`Failed to send initialization: ${error}`));
    }
  }

  /**
   * Send ConversationConfiguration to switch stream mode (audio ↔ text).
   * Only sends the new StreamMode — server already knows the conversation context.
   */
  sendConversationConfiguration(): void {
    if (!this.grpcStream) return;
    this.ensureInitializationSent();

    try {
      const request = buildConfigurationRequest(this.agentConfig.inputOptions.channel);
      // console.log(`${LOG_PREFIX} → OUT | ${describeRequest(request)}`);
      this.grpcStream.write(request);
    } catch (error) {
      console.error(`${LOG_PREFIX} Failed to send configuration`, error);
      this.callbacks.onError?.(new Error(`Failed to send configuration: ${error}`));
    }
  }

  /**
   * Send a text message.
   * Ensures ConversationInitialization is always sent first.
   */
  sendText(text: string): void {
    if (!this.grpcStream) return;
    this.ensureInitializationSent();

    try {
      // console.log(`${LOG_PREFIX} → OUT | Text("${text.substring(0, 80)}")`);
      const request = new WebTalkRequest();
      const userMessage = new ConversationUserMessage();
      userMessage.setText(text);
      userMessage.setId(`msg_${Date.now()}`);
      request.setMessage(userMessage);
      this.grpcStream.write(request);
    } catch (error) {
      console.error(`${LOG_PREFIX} Failed to send text message`, error);
      this.callbacks.onError?.(new Error(`Failed to send text: ${error}`));
    }
  }

  /** Send an SDP answer via ClientSignaling */
  sendWebRTCAnswer(sdp: string): void {
    if (!this.grpcStream) return;

    try {
      // console.log(`${LOG_PREFIX} → OUT | Signaling(SDP Answer)`);
      const request = new WebTalkRequest();
      const signaling = new ClientSignaling();
      if (this.sessionId) signaling.setSessionid(this.sessionId);

      const sdpMsg = new WebRTCSDP();
      sdpMsg.setType(WebRTCSDP.SDPType.ANSWER);
      sdpMsg.setSdp(sdp);
      signaling.setSdp(sdpMsg);

      request.setSignaling(signaling);
      this.grpcStream.write(request);
    } catch (error) {
      console.error(`${LOG_PREFIX} Failed to send WebRTC answer`, error);
      this.callbacks.onError?.(new Error(`Failed to send WebRTC answer: ${error}`));
    }
  }

  /** Send an ICE candidate via ClientSignaling */
  sendICECandidate(candidate: RTCIceCandidateInit): void {
    if (!this.grpcStream) return;

    try {
      // console.log(`${LOG_PREFIX} → OUT | Signaling(ICE ${candidate.candidate?.substring(0, 50) ?? ""})`);
      const request = new WebTalkRequest();
      const signaling = new ClientSignaling();
      if (this.sessionId) signaling.setSessionid(this.sessionId);

      const ice = new ProtoICECandidate();
      ice.setCandidate(candidate.candidate || "");
      ice.setSdpmid(candidate.sdpMid || "");
      ice.setSdpmlineindex(candidate.sdpMLineIndex || 0);
      signaling.setIcecandidate(ice);

      request.setSignaling(signaling);
      this.grpcStream.write(request);
    } catch (error) {
      console.error(`${LOG_PREFIX} Failed to send ICE candidate`, error);
      // Don't fail the entire connection on ICE candidate send failure
    }
  }

  // ---------------------------------------------------------------------------
  // State mutators (called by message handler when server sends data)
  // ---------------------------------------------------------------------------

  setSessionId(id: string): void { this.sessionId = id; }
  getSessionId(): string | null { return this.sessionId; }
  setConversationId(id: string): void { this.conversationId = id; }
  getConversationId(): string | null { return this.conversationId; }

  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------

  private ensureInitializationSent(): void {
    if (!this.initializationSent) {
      this.sendConversationInitialization();
    }
  }
}
