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
import { RapidaSource } from "@/rapida/utils/rapida_source";
import { Assistant } from "@/rapida/clients/protos/assistant-api_pb";
import {
  AssistantApiDeployment,
  AssistantDebuggerDeployment,
  AssistantWebpluginDeployment,
} from "@/rapida/clients/protos/assistant-deployment_pb";

export type AgentDeployment =
  | {
    type: "debugger";
    deployment: AssistantDebuggerDeployment;
    inAudio: boolean;
    outAudio: boolean;
  }
  | {
    type: "web-plugin";
    deployment: AssistantWebpluginDeployment;
    inAudio: boolean;
    outAudio: boolean;
  }
  | {
    type: "api";
    deployment: AssistantApiDeployment;
    inAudio: boolean;
    outAudio: boolean;
  };

export const GetDeployment = (
  assistant: Assistant,
  source: RapidaSource
): AgentDeployment | undefined => {
  switch (source) {
    case "debugger": {
      const deployment = assistant.getDebuggerdeployment();
      return deployment
        ? {
          type: "debugger",
          deployment: deployment,
          inAudio: deployment.getInputaudio() != undefined,
          outAudio: deployment.getOutputaudio() != undefined,
        }
        : undefined;
    }
    case "web-plugin": {
      const deployment = assistant.getWebplugindeployment();
      return deployment
        ? {
          type: "web-plugin",
          deployment: deployment,
          inAudio: deployment.getInputaudio() != undefined,
          outAudio: deployment.getOutputaudio() != undefined,
        }
        : undefined;
    }
    default: {
      const deployment = assistant.getApideployment();
      return deployment
        ? {
          type: "api",
          deployment: deployment,
          inAudio: deployment.getInputaudio() != undefined,
          outAudio: deployment.getOutputaudio() != undefined,
        }
        : undefined;
    }
  }
};
