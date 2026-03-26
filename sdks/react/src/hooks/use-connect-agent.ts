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
import * as React from "react";
import { VoiceAgent } from "@/rapida/agents/voice-agent";
import { useObservableState } from "@/rapida/hooks/use-observable-state";
import { observeAgentConnectionState } from "@/rapida/hooks/observables/voice-agent";
import { ConnectionState } from "@/rapida/types/connection-state";

/**
 * Custom hook for managing agent connection in a voice system.
 * @returns An object containing the connection handler and connection status.
 */
export function useConnectAgent(agent: VoiceAgent) {
  // Ensure the VoiceAgent instance is available

  // Memoize the connection handlers to ensure stable references
  const { handleConnectAgent, handleDisconnectAgent } = React.useMemo(
    () => ({
      handleConnectAgent: async () => {
        if (!agent) throw new Error("VoiceAgent instance not available");
        await agent.connect();
      },
      handleDisconnectAgent: async () => {
        if (!agent) throw new Error("VoiceAgent instance not available");
        await agent.disconnect();
      },
    }),
    [agent] // Re-create handlers only when agent changes
  );

  // Observe the connection state using RxJS
  const observable = React.useMemo(
    () => (agent ? observeAgentConnectionState(agent) : undefined),
    [agent] // Update observable when agent changes
  );

  // Subscribe to the observable and manage component state
  const { isConnected, isConnecting } = useObservableState(observable, {
    isConnected: agent?.isConnected ?? false, // Default connection state
    isConnecting: agent?.state === ConnectionState.Connecting,
  });

  // Return the connection handlers and current connection state
  return { handleConnectAgent, handleDisconnectAgent, isConnected, isConnecting };
}
