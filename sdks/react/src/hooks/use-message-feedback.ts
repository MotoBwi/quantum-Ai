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
import { Feedback } from "@/rapida/types/feedback";

/**
 * Custom hook for managing agent connection in a voice system.
 * @returns An object containing the connection handler and connection status.
 */
export function useMessageFeedback(agent: VoiceAgent) {
  // Set up the connect agent and memoize the result
  const { handleMessageFeedback, handleHelpfulnessFeedback } = React.useMemo(
    () => setupMessageFeedback(agent),
    []
  );

  // Return the connection handler and the current connection status
  return { handleMessageFeedback, handleHelpfulnessFeedback };
}

/**
 * Sets up the connection for a voice agent.
 *
 * @returns An object containing the agent connection state observable and a function to handle agent connection.
 */
function setupMessageFeedback(agent: VoiceAgent) {
  /**
   * Handles the connection of a voice agent.
   *
   * @param agent - The VoiceAgent to be connected.
   * @returns A promise that resolves when the agent is connected.
   */
  const handleMessageFeedback = async (
    messageId: string,
    name: string,
    description: string,
    value: string
  ) => {
    await agent.createMessageMetric(messageId, [
      {
        name: name,
        description: description,
        value: value,
      },
    ]);
  };

  const handleHelpfulnessFeedback = async (
    messageId: string,
    value: Feedback
  ) => {
    await agent.createMessageMetric(messageId, [
      {
        name: "feedback",
        description: "feedback given by end-user",
        value: value,
      },
    ]);
  };

  return {
    handleHelpfulnessFeedback,
    handleMessageFeedback,
  };
}
