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

import { WebTalkRequest, WebTalkResponse } from "@/rapida/clients/protos/webrtc_pb";
import { AgentConfig } from "@/rapida/types/agent-config";
import { AgentCallback } from "@/rapida/types/agent-callback";
import {
  CreateConversationMetricRequest,
  CreateMessageMetricRequest,
  ConversationInitialization,
  WebIdentity,
} from "@/rapida/clients/protos/talk-api_pb";
import { ConnectionConfig } from "@/rapida/types/connection-config";
import { ConnectionState } from "@/rapida/types/connection-state";
import { AgentEventCallback } from "@/rapida/types/agent-event-callback";
import { EventEmitter } from "events";
import type TypedEmitter from "typed-emitter";
import {
  AssistantDefinition, Metric,
} from "@/rapida/clients/protos/common_pb";
import { Message as LocalMessage, MessageRole } from "@/rapida/types/message";
import { AgentEvent } from "@/rapida/types/agent-event";
import {
  CreateConversationMetric,
  CreateMessageMetric,
} from "@/rapida/clients/talk";
import { getFeedback } from "@/rapida/types/feedback";
import {
  GetAssistantRequest,
  GetAssistantResponse,
} from "@/rapida/clients/protos/assistant-api_pb";
import { GetAssistant } from "@/rapida/clients/assistant";

import { StreamMode, StreamModeMap } from '../clients/protos/talk-api_pb';
import {
  ConversationConfiguration,
} from '../clients/protos/talk-api_pb';
import { Channel } from "../types/channel";

// ---------------------------------------------------------------------------
// Logging helpers
// ---------------------------------------------------------------------------

/** Human-readable summary of a WebTalkRequest for logging */
export function describeRequest(req: WebTalkRequest): string {
  if (req.hasInitialization()) return "Initialization";
  if (req.hasConfiguration()) return "Configuration";
  if (req.hasMessage()) return `Text("${req.getMessage()?.getText()?.substring(0, 80) ?? ""}")`;
  if (req.hasSignaling()) return "Signaling";
  return "Unknown";
}

/** Human-readable summary of a WebTalkResponse for logging */
export function describeResponse(res: WebTalkResponse): string {
  const parts: string[] = [];
  if (res.hasInitialization()) parts.push("Initialization");
  if (res.hasConfiguration()) parts.push("Configuration");
  if (res.hasAssistant()) parts.push(`Assistant("${res.getAssistant()?.getText()?.substring(0, 80) ?? ""}"`);
  if (res.hasUser()) parts.push(`User("${res.getUser()?.getText()?.substring(0, 80) ?? ""}"`);
  if (res.hasInterruption()) parts.push("Interruption");
  if (res.hasDirective()) parts.push("Directive");
  if (res.hasSignaling()) parts.push("Signaling");
  return parts.length > 0 ? parts.join(" + ") : "Empty";
}

// ---------------------------------------------------------------------------
// Shared message builders
// ---------------------------------------------------------------------------

/** Resolve Channel enum → StreamMode proto value */
export function resolveStreamMode(channel: Channel): StreamModeMap[keyof StreamModeMap] {
  return channel === Channel.Audio
    ? StreamMode.STREAM_MODE_AUDIO
    : channel === Channel.Text
      ? StreamMode.STREAM_MODE_TEXT
      : StreamMode.STREAM_MODE_BOTH;
}

/**
 * Build the ConversationInitialization WebTalkRequest.
 * This is the single source of truth for the initialization proto — used by
 * GrpcSignalingManager for all connection modes (audio and text-only).
 */
export function buildInitializationRequest(agentConfig: AgentConfig, conversationId?: string): WebTalkRequest {
  const request = new WebTalkRequest();
  const init = new ConversationInitialization();

  if (conversationId) {
    init.setAssistantconversationid(conversationId);
  }
  init.setAssistant(agentConfig.definition);
  agentConfig.options?.forEach((v, k) => init.getOptionsMap().set(k, v));
  agentConfig.metadata?.forEach((v, k) => init.getMetadataMap().set(k, v));
  agentConfig.arguments?.forEach((v, k) => init.getArgsMap().set(k, v));
  init.setStreammode(resolveStreamMode(agentConfig.inputOptions.channel));

  if (agentConfig.userIdentifier) {
    // later we want to profile the user properly, but for now we just need a unique ID to correlate conversations
    const identity = new WebIdentity();
    identity.setUserid(agentConfig.userIdentifier.id);
    init.setWeb(identity)
  }
  request.setInitialization(init);
  return request;
}

/**
 * Build a ConversationConfiguration WebTalkRequest for mode switching.
 */
export function buildConfigurationRequest(channel: Channel): WebTalkRequest {
  const request = new WebTalkRequest();
  const config = new ConversationConfiguration();
  config.setStreammode(resolveStreamMode(channel));
  request.setConfiguration(config);
  return request;
}

/**
 * Base Agent class for interacting with Rapida AI assistants.
 * Manages bidirectional communication, connection states, metrics, and events.
 */
export class Agent extends (EventEmitter as new () => TypedEmitter<AgentEventCallback>) {
  // Connection and State Management
  protected connectionState: ConnectionState = ConnectionState.Disconnected;

  // conversation id
  private _conversationId?: string;

  // Agent Configuration
  protected agentConfig: AgentConfig;

  // callbacks can have multiple callback
  protected agentCallbacks: AgentCallback[];

  //
  private readonly _connectionConfig: ConnectionConfig;

  // all the messages
  public agentMessages: LocalMessage[] = [];

  /**
   * Creates a new Agent instance
   * @param connection - Connection configuration
   * @param agentConfig - Agent configuration
   * @param agentCallback - Optional callback handler
   */
  protected constructor(
    connection: ConnectionConfig,
    agentConfig: AgentConfig,
    agentCallback?: AgentCallback
  ) {
    super();
    this.agentConfig = agentConfig;
    this._connectionConfig = connection;
    this.agentCallbacks = [];
    if (agentCallback) this.agentCallbacks.push(agentCallback);
  }

  // Public Getters

  /**
   * Current connection state of the agent
   */
  get state(): ConnectionState {
    return this.connectionState;
  }

  /**
   * Current conversation ID, if any
   */
  get conversationId(): string | undefined {
    return this._conversationId;
  }

  /**
   * Array of messages in the current conversation
   */
  get messages(): LocalMessage[] {
    return [...this.agentMessages]; // Return copy to prevent external modification
  }

  /**
   * Whether the agent is currently connected
   */
  get isConnected(): boolean {
    return this.connectionState === ConnectionState.Connected;
  }

  /**
   * this will help user to modify what he wants
   */
  get agentConfiguration(): AgentConfig {
    return this.agentConfig;
  }
  /**
   * Switches to a different agent during an active conversation.
   * Subclasses override this to send the configuration through their transport.
   *
   * @param config - Configuration for the new agent
   * @throws {Error} If agent is not connected
   */
  public async switchAgent(_config: AgentConfig): Promise<void> {
    throw new Error("switchAgent must be implemented by subclass");
  }

  /**
   * Creates metrics for a specific message
   * @param messageId - ID of the message
   * @param metrics - Array of metric objects
   */
  public createMessageMetric(
    messageId: string,
    metrics: Array<{
      name: string;
      description: string;
      value: string;
    }>
  ): void {
    if (!this._conversationId) {
      throw new Error("Cannot create message metric: no active conversation");
    }

    const req = new CreateMessageMetricRequest();
    req.setAssistantid(this.agentConfig.definition.getAssistantid());
    req.setAssistantconversationid(this._conversationId);
    req.setMessageid(messageId);

    for (const mtr of metrics) {
      const _m = new Metric();
      _m.setName(mtr.name);
      _m.setValue(mtr.value);
      _m.setDescription(mtr.description);
      req.addMetrics(_m);
    }

    CreateMessageMetric(this._connectionConfig, req)
      .then(() => {
        const lastMetric = metrics[metrics.length - 1];
        if (!lastMetric) return;
        const feedback = getFeedback(lastMetric.value);
        this._updateMessageFeedback(messageId, feedback);
        this.emit(AgentEvent.FeedbackEvent, "message", feedback);
      })
      .catch(() => {
        // Metric creation failure is non-critical
      });
  }

  /**
   * Creates metrics for the entire conversation
   * @param metrics - Array of metric objects
   */
  public createConversationMetric(
    metrics: Array<{
      name: string;
      description: string;
      value: string;
    }>
  ): void {
    if (!this._conversationId) {
      throw new Error(
        "Cannot create conversation metric: no active conversation"
      );
    }

    const req = new CreateConversationMetricRequest();
    req.setAssistantid(this.agentConfig.definition.getAssistantid());
    req.setAssistantconversationid(this._conversationId);

    for (const mtr of metrics) {
      const _m = new Metric();
      _m.setName(mtr.name);
      _m.setValue(mtr.value);
      _m.setDescription(mtr.description);
      req.addMetrics(_m);
    }

    CreateConversationMetric(this._connectionConfig, req).catch(() => {
      // Metric creation failure is non-critical
    });
  }

  /**
   * Emits a typed event
   *
   * @param event - Event name
   * @param args - Event arguments
   * @returns Whether the event had listeners
   */
  public emit<E extends keyof AgentEventCallback>(
    event: E,
    ...args: Parameters<AgentEventCallback[E]>
  ): boolean {
    return super.emit(event, ...args);
  }

  // Protected Methods



  // Private Methods

  /**
   * Initializes the agent by fetching assistant data
   */
  public async getAssistant(): Promise<GetAssistantResponse> {
    return this._fetchAssistant(this.agentConfig.id, this.agentConfig.version);
  }

  /**
   * Updates connection state and emits events
   */
  private _setAndEmitConnectionState(state: ConnectionState): boolean {
    if (state === this.connectionState) {
      return false;
    }

    this.connectionState = state;
    this.emit(AgentEvent.ConnectionStateEvent, this.connectionState);
    this._connectionConfig.onConnectionChange(state);
    return true;
  }

  /**
   * Handles conversation ID changes
   */
  protected changeConversation = (assistantConversationId: string): void => {
    if (this._conversationId) return;
    this._conversationId = assistantConversationId;
  };

  /**
   * Disconnects from the assistant.
   * Subclasses should override `disconnect()` to tear down their transport
   * and then call this to update state.
   */
  protected async disconnectAgent(): Promise<void> {
    if (this.connectionState === ConnectionState.Disconnected) {
      return;
    }
    this._setAndEmitConnectionState(ConnectionState.Disconnected);
  }

  /**
   * Fetches assistant data for a specific agent ID and version
   */
  private async _fetchAssistant(
    agentId: string,
    version?: string
  ): Promise<GetAssistantResponse> {
    const req = new GetAssistantRequest();
    const assistantDef = new AssistantDefinition();
    assistantDef.setAssistantid(agentId);
    if (version) {
      assistantDef.setVersion(version);
    }
    req.setAssistantdefinition(assistantDef);
    return GetAssistant(this._connectionConfig, req);
  }

  /**
   * Updates message feedback in the local message store
   */
  private _updateMessageFeedback(messageId: string, feedback: any): void {
    this.agentMessages = this.agentMessages.map((message) => {
      if (message.id === messageId && message.role === MessageRole.System) {
        return { ...message, feedback };
      }
      return message;
    });
  }

  public registerCallback = (agentCallback: AgentCallback) => {
    // adding another callack
    this.agentCallbacks.push(agentCallback);
  };
}
