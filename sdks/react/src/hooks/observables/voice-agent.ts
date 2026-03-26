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
import { Subject, map, Observable, startWith, finalize, concat } from "rxjs";
import { VoiceAgent } from "@/rapida/agents/voice-agent";
import { AgentEvent } from "@/rapida/types/agent-event";
import { ConnectionState } from "@/rapida/types/connection-state";
import {
  ConversationConfiguration,
  ConversationInterruption,
  ConversationUserMessage,
  ConversationAssistantMessage,
} from "@/rapida/clients/protos/talk-api_pb";
import { WebTalkResponse } from "@/rapida/clients/protos/webrtc_pb";
/**
 * Utility function to observe a specific agent event.
 * @param agent The voice agent instance.
 * @param event The agent event to observe.
 * @returns Observable emitting the event arguments.
 */
export function agentEventSelector(
  agent: VoiceAgent,
  events: AgentEvent | AgentEvent[]
): Observable<any> {
  const eventArray = Array.isArray(events) ? events : [events];
  return new Observable((subscriber) => {
    const callback = (...args: any[]) => {
      subscriber.next(args);
    };

    eventArray.forEach((event) => agent.on(event, callback));
    return () => {
      eventArray.forEach((event) => agent.off(event, callback));
    };
  });
}

/**
 * Observes voice agent input media device changes.
 */
export function observeAgentInputMediaDeviceChange(
  agent: VoiceAgent
): Observable<string> {
  return agentEventSelector(agent, AgentEvent.InputMediaDeviceChangeEvent).pipe(
    map(([deviceId]: [string]) => deviceId) // Ensure the device ID is retrieved appropriately.
  );
}

/**
 * Observes connection state changes for the agent.
 */
export function observeAgentConnectionState(
  agent: VoiceAgent
): Observable<{ isConnected: boolean; isConnecting: boolean }> {
  return agentEventSelector(agent, AgentEvent.ConnectionStateEvent).pipe(
    map(([state]: [ConnectionState]) => ({
      isConnected: state === ConnectionState.Connected,
      isConnecting: state === ConnectionState.Connecting,
    }))
  );
}

/**
 * Observes mute state changes for the agent.
 */
export function observeAgentMuteState(
  agent: VoiceAgent
): Observable<{ isMuted: boolean }> {
  return agentEventSelector(agent, AgentEvent.MuteStateEvent).pipe(
    map(([isMuted]: [boolean]) => ({
      isMuted,
    })),
    startWith({ isMuted: agent.isMuted })
  );
}

/**
 * Observes server events from the agent.
 */
export function observeAgentServerEvents(agent: VoiceAgent): Observable<{
  eventType?: WebTalkResponse.DataCase;
  argument?:
  | ConversationConfiguration
  | ConversationInterruption
  | ConversationUserMessage
  | ConversationAssistantMessage;
}> {
  return agentEventSelector(agent, AgentEvent.ConversationEvent).pipe(
    map(([eventType, event]) => ({
      eventType,
      argument: event,
    })),
    startWith({ eventType: undefined, argument: undefined })
  );
}

/**
 *
 * @param agent
 * @returns
 */
export function observeAgentMessageEvents(agent: VoiceAgent) {
  const observable = agentEventSelector(agent, [
    AgentEvent.ConversationEvent,
    AgentEvent.FeedbackEvent,
  ]).pipe(
    map((v) => {
      return {
        eventType: v,
        chats: agent.messages,
      };
    }),
    startWith({
      eventType: undefined,
      chats: agent.messages,
    })
  );
  return observable;
}

/**
 * Observes browser media devices changes.
 */
export function observeBrowserMediaDevices(
  kind?: MediaDeviceKind,
  onError?: (error: Error) => void,
  requestPermissions = true
): Observable<MediaDeviceInfo[]> {
  const deviceSubject = new Subject<MediaDeviceInfo[]>();

  const handleDeviceChange = async () => {
    try {
      const devices = await VoiceAgent.getLocalDevices(
        kind,
        requestPermissions
      );
      deviceSubject.next(devices);
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      onError?.(error);
    }
  };

  const observable = deviceSubject.pipe(
    finalize(() =>
      navigator?.mediaDevices?.removeEventListener(
        "devicechange",
        handleDeviceChange
      )
    )
  );

  if (typeof window !== "undefined") {
    if (!window.isSecureContext) {
      throw new Error(
        "Accessing media devices is available only in secure contexts."
      );
    }
    navigator?.mediaDevices?.addEventListener(
      "devicechange",
      handleDeviceChange
    );
  }

  return concat(
    VoiceAgent.getLocalDevices(kind, requestPermissions).catch((err) => {
      const error = err instanceof Error ? err : new Error(String(err));
      onError?.(error);
      return [] as MediaDeviceInfo[];
    }),
    observable
  );
}

/**
 *
 * @param agent
 * @returns
 */
export function observeAgentInputChannel(agent: VoiceAgent) {
  const observable = agentEventSelector(
    agent,
    AgentEvent.InputChannelChangeEvent
  ).pipe(
    map(([channel]) => {
      return { channel: channel };
    })
  );
  return observable;
}

/**
 *
 * @param agent
 * @returns
 */
export function observeAgentError(agent: VoiceAgent): Observable<string> {
  const observable = agentEventSelector(agent, AgentEvent.ErrorEvent).pipe(
    map(([error]) => {
      return error;
    })
  );
  return observable;
}
