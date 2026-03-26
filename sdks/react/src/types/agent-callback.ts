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
import {
  ConversationUserMessage as CUMessage,
  ConversationAssistantMessage as CAMessage,
  ConversationConfiguration,
  ConversationInterruption,
  ConversationDirective,
  ConversationInitialization,
  ConversationEvent,
  ConversationMetric,
  ConversationError,
} from "@/rapida/clients/protos/talk-api_pb";

import { AssistantConversationMessage } from "@/rapida/clients/protos/common_pb";

export interface ConversationUserMessage
  extends CUMessage.AsObject {
  messageText?: string;
}

export class ConversationUserMessage {
  constructor(config?: CUMessage) {
    if (config) {
      Object.assign(this, config.toObject());
      switch (config.getMessageCase()) {
        case CUMessage.MessageCase.MESSAGE_NOT_SET:
        case CUMessage.MessageCase.AUDIO:
        case CUMessage.MessageCase.TEXT:
          this.messageText = config.getText();
      }
    }
  }
}

export interface ConversationAssistantMessage
  extends CAMessage.AsObject {
  messageText?: string;
}

export class ConversationAssistantMessage {
  constructor(config?: CAMessage) {
    if (config) {
      Object.assign(this, config.toObject());
      switch (config.getMessageCase()) {
        case CAMessage.MessageCase.MESSAGE_NOT_SET:
        case CAMessage.MessageCase.AUDIO:
        case CAMessage.MessageCase.TEXT:
          this.messageText = config.getText();
      }
    }
  }
}

/**
 *  user friendly interface for message
 */
export interface ConversationMessage
  extends AssistantConversationMessage.AsObject {
  userMessage?: string;
  systemMessage?: string;
}




/**
 * Callbacks for agent events
 */
export interface AgentCallback {

  onInitialization?: (args: ConversationInitialization.AsObject | undefined) => void;

  /** Called when configuration is received (conversation ID, etc.) */
  onConfiguration?: (args: ConversationConfiguration.AsObject | undefined) => void;

  /** Called on interruption */
  onInterrupt?: (args: ConversationInterruption.AsObject | undefined) => void;

  /** Called when assistant message is received */
  onAssistantMessage?: (args: ConversationAssistantMessage | undefined) => void;

  /** Called when user message is received */
  onUserMessage?: (args: ConversationUserMessage | undefined) => void;

  /** Called when directive/action is received */
  onDirective?: (arg?: ConversationDirective.AsObject) => void;

  /** Called when a pipeline conversation event is received (STT, TTS, LLM, session, etc.) */
  onConversationEvent?: (event: ConversationEvent.AsObject) => void;

  /** Called when server-side performance/latency metric data is received */
  onMetric?: (metric: ConversationMetric.AsObject) => void;

  /** Called when connection state changes */
  onConnectionStateChange?: (state: RTCPeerConnectionState) => void;

  /** Called when fully connected */
  onConnected?: () => void;

  /** Called when disconnected */
  onDisconnected?: () => void;

  /** Called when a server-side conversation error is received (with conversation ID and details) */
  onConversationError?: (error: ConversationError.AsObject) => void;

  /** Called on error */
  onError?: (error: Error) => void;

}
