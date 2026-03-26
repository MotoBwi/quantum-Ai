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
import { observeAgentMuteState } from "@/rapida/hooks/observables/voice-agent";

/**
 * Custom hook for managing microphone mute state in a voice agent.
 * @param agent The VoiceAgent instance
 * @returns An object containing mute handlers and the current mute state.
 */
export function useMuteAgent(agent: VoiceAgent) {
  // Memoize the mute handlers to ensure stable references
  const { handleMute, handleUnmute, handleToggleMute } = React.useMemo(
    () => ({
      handleMute: () => {
        if (!agent) throw new Error("VoiceAgent instance not available");
        agent.mute();
      },
      handleUnmute: () => {
        if (!agent) throw new Error("VoiceAgent instance not available");
        agent.unmute();
      },
      handleToggleMute: () => {
        if (!agent) throw new Error("VoiceAgent instance not available");
        return agent.toggleMute();
      },
    }),
    [agent]
  );

  // Observe the mute state using RxJS
  const observable = React.useMemo(
    () => (agent ? observeAgentMuteState(agent) : undefined),
    [agent]
  );

  // Subscribe to the observable and manage component state
  const { isMuted } = useObservableState(observable, {
    isMuted: agent?.isMuted ?? false,
  });

  // Return the mute handlers and current mute state
  return { handleMute, handleUnmute, handleToggleMute, isMuted };
}
