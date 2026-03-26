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
import { VoiceAgent } from "@/rapida/agents/voice-agent";
import { observeAgentMessageEvents } from "@/rapida/hooks/observables/voice-agent"; // Updated function name
import { useObservableState } from "@/rapida/hooks/use-observable-state";

import React from "react";

/**
 * Custom hook for managing agent messages in a voice system.
 * @returns An object containing the agent messages.
 */
export function useAgentMessages(agent: VoiceAgent) {
  // Memoize the observable based on the voice agent instance
  const observable = React.useMemo(
    () => observeAgentMessageEvents(agent), // Updated function name for consistency
    [agent]
  );

  // Extract observable state with initial default chat messages
  const { chats } = useObservableState(observable, {
    eventType: undefined,
    chats: agent.messages,
  });

  // Return updated agent messages
  return { messages: chats };
}
