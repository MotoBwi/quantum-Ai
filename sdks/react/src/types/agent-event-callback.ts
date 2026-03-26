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
 *
 */
import { Feedback } from "@/rapida/types/feedback";
import { Channel } from "@/rapida/types/channel";
import { Assistant } from "@/rapida/clients/protos/assistant-api_pb";
import {
  ConversationAssistantMessage,
  ConversationConfiguration,
  ConversationInterruption,
  ConversationUserMessage,
} from "@/rapida/clients/protos/talk-api_pb";
import { WebTalkResponse } from "@/rapida/clients/protos/webrtc_pb";
import { ConnectionState } from "@/rapida/types/connection-state";
/**
 * Defines the structure for callback functions used in voice agent events.
 *
 * This type encapsulates various event handlers that can be triggered during
 * the lifecycle of a voice agent connection. It includes callbacks for:
 *
 * - Connection establishment and termination
 * - Data reception
 * - Active device changes
 * - Mute status changes
 * - Connection state updates
 * - Server-side events
 *
 * These callbacks allow for fine-grained control and monitoring of the voice
 * agent's state and interactions, enabling developers to build responsive
 * and interactive voice-enabled applications.
 */
export type AgentEventCallback = {
  onAssistantChangeEvent: (assistant: Assistant) => void;
  onConnectionStateEvent: (state: ConnectionState) => void;

  onInputMediaDeviceChangeEvent: (deviceId: string) => void;
  onOutputMediaDeviceChangeEvent: (deviceId: string) => void;

  onInputChannelChangeEvent: (cnl: Channel) => void;
  onOutputChannelChangeEvent: (cnl: Channel) => void;

  // mute state change event
  onMuteStateEvent: (isMuted: boolean) => void;

  // when server sent an event to client
  onConversationEvent: (
    eventType?: WebTalkResponse.DataCase,
    event?:
      | ConversationConfiguration
      | ConversationUserMessage
      | ConversationAssistantMessage
      | ConversationInterruption
  ) => void;

  // feedback of conversation
  onFeedbackEvent: (
    type: "conversation" | "message",
    feedback: Feedback
  ) => void;

  // on error event
  onErrorEvent: (type: "server" | "client", error: string) => void;
};
