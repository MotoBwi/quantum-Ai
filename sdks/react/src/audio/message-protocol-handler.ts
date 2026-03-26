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

import {
  AgentCallback,
  ConversationAssistantMessage as AssistantMessageWrapper,
  ConversationUserMessage as UserMessageWrapper,
} from "@/rapida/types/agent-callback";
import {
  WebTalkResponse,
  ServerSignaling,
  WebRTCSDP,
} from "@/rapida/clients/protos/webrtc_pb";
import type { GrpcSignalingManager } from "./grpc-signaling-manager";
import type { WebRTCPeerManager } from "./webrtc-peer-manager";
import type { AudioMediaManager } from "./audio-media-manager";

/**
 * MessageProtocolHandler — Dispatches incoming WebTalkResponse messages
 *
 * Responsibilities:
 * - Parse each response and route to the correct manager / callback
 * - Handle ServerSignaling (config, SDP, ICE, ready, clear, error)
 * - Handle conversation init/config responses
 * - Handle assistant / user / interruption / directive messages
 *
 * This is pure dispatch logic — it holds no state of its own.
 */
export class MessageProtocolHandler {
  // Serialization chain ensures signaling messages (CONFIG → OFFER → ICE)
  // are processed in order even though gRPC callbacks fire without await.
  private processingChain: Promise<void> = Promise.resolve();

  constructor(
    private callbacks: AgentCallback,
    private signaling: GrpcSignalingManager,
    private peer: WebRTCPeerManager,
    private audio: AudioMediaManager,
  ) { }

  // ---------------------------------------------------------------------------
  // Top-level dispatch
  // ---------------------------------------------------------------------------

  async handleMessage(response: WebTalkResponse): Promise<void> {
    this.processingChain = this.processingChain
      .then(() => this._handleMessage(response))
      .catch(err => console.error("[Protocol] Message processing error", err));
    return this.processingChain;
  }

  private async _handleMessage(response: WebTalkResponse): Promise<void> {
    // Server signaling (SDP, ICE, config, ready, clear, error)
    if (response.hasSignaling()) {
      const sig = response.getSignaling();
      if (sig) await this.handleServerSignaling(sig);
    }

    // Conversation initialization (conversation ID, etc.)
    if (response.hasInitialization()) {
      const init = response.getInitialization();
      if (init) {
        const convId = init.getAssistantconversationid();
        if (convId) this.signaling.setConversationId(convId);
        this.callbacks.onInitialization?.(init.toObject());
      }
    }

    // Conversation configuration (mode switch acknowledgment)
    if (response.hasConfiguration()) {
      const cfg = response.getConfiguration();
      if (cfg) this.callbacks.onConfiguration?.(cfg.toObject());
    }

    // Assistant message
    if (response.hasAssistant()) {
      const assistant = response.getAssistant();
      if (assistant) {
        this.callbacks.onAssistantMessage?.(new AssistantMessageWrapper(assistant));
      }
    }

    // User message echo
    if (response.hasUser()) {
      const user = response.getUser();
      if (user) {
        this.callbacks.onUserMessage?.(new UserMessageWrapper(user));
      }
    }

    // Interruption
    if (response.hasInterruption()) {
      const interruption = response.getInterruption();
      if (interruption) this.callbacks.onInterrupt?.(interruption.toObject());
    }

    // Directive / action
    if (response.hasDirective()) {
      const directive = response.getDirective();
      if (directive) this.callbacks.onDirective?.(directive.toObject());
    }

    // Pipeline conversation event (STT, TTS, LLM, session, etc.)
    if (response.hasEvent()) {
      const event = response.getEvent();
      if (event) this.callbacks.onConversationEvent?.(event.toObject());
    }

    // Conversation error (server-side error with conversation ID and details)
    if (response.hasError()) {
      const error = response.getError();
      if (error) {
        this.callbacks.onError?.(new Error(error.getMessage()));
        this.callbacks.onConversationError?.(error.toObject());
      }
    }

    // Metric (server-side performance/latency data)
    if (response.hasMetric()) {
      const metric = response.getMetric();
      if (metric) this.callbacks.onMetric?.(metric.toObject());
    }
  }

  // ---------------------------------------------------------------------------
  // Server signaling
  // ---------------------------------------------------------------------------

  private async handleServerSignaling(signaling: ServerSignaling): Promise<void> {
    const sessionId = signaling.getSessionid();
    if (sessionId) this.signaling.setSessionId(sessionId);

    const messageCase = signaling.getMessageCase();

    switch (messageCase) {
      case ServerSignaling.MessageCase.CONFIG: {
        const config = signaling.getConfig();
        const iceServers = config?.getIceserversList()?.map(srv => ({
          urls: srv.getUrlsList(),
          username: srv.getUsername() || undefined,
          credential: srv.getCredential() || undefined,
        })) as RTCIceServer[] | undefined;
        this.peer.setup(iceServers);
        break;
      }

      case ServerSignaling.MessageCase.SDP: {
        try {
          const sdpMsg = signaling.getSdp();
          if (!sdpMsg) break;

          const sdpType = sdpMsg.getType();
          const sdp = sdpMsg.getSdp();

          if (sdpType === WebRTCSDP.SDPType.OFFER) {
            // console.log("[Protocol] Handling SDP OFFER");
            await this.peer.handleOffer(sdp, this.audio.mediaStream);
            const answerSdp = this.peer.getLocalSDP();
            if (answerSdp) {
              this.signaling.sendWebRTCAnswer(answerSdp);
            } else {
              console.error("No local SDP after creating answer");
            }
          } else if (sdpType === WebRTCSDP.SDPType.ANSWER) {
            // console.log("[Protocol] Handling SDP ANSWER");
            await this.peer.handleAnswer(sdp);
          }
        } catch (error) {
          console.error("Failed to handle SDP signaling", error);
          this.callbacks.onConnectionStateChange?.("failed");
          this.callbacks.onError?.(new Error(`SDP signaling failed: ${error}`));
        }
        break;
      }

      case ServerSignaling.MessageCase.ICECANDIDATE: {
        try {
          const ice = signaling.getIcecandidate();
          if (ice && ice.getCandidate()) {
            await this.peer.addICECandidate(
              ice.getCandidate(),
              ice.getSdpmid(),
              ice.getSdpmlineindex(),
            );
          }
        } catch (error) {
          console.debug("Failed to add ICE candidate (non-fatal)", error);
        }
        break;
      }

      case ServerSignaling.MessageCase.READY:
        try {
          await this.audio.ensurePlayback();
        } catch (error) {
          console.error("Failed to ensure audio playback", error);
          this.callbacks.onError?.(new Error(`Audio playback setup failed: ${error}`));
        }
        break;

      case ServerSignaling.MessageCase.CLEAR:
        this.callbacks.onInterrupt?.(undefined);
        break;

      case ServerSignaling.MessageCase.ERROR: {
        const errorMsg = signaling.getError();
        this.callbacks.onError?.(new Error(errorMsg || "Signaling error"));
        break;
      }
    }
  }
}
