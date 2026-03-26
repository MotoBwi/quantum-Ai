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
 *  This module provides functions for managing assistants using gRPC. It includes
 *  operations for creating, updating, retrieving, and personalizing assistants,
 *  as well as handling assistant provider models and tags.
 */

// NOTE: Content type not available in common_pb proto definitions
// import { Content, Metadata } from "@/rapida/clients/protos/common_pb";
import { Metadata } from "@/rapida/clients/protos/common_pb";

import { ServiceError } from "@grpc/grpc-js";
import {
  ClientAuthInfo,
  UserAuthInfo,
  WithAuthContext,
} from "@/rapida/clients";
import {
  AssistantPhoneDeployment,
  CreateAssistantDeploymentRequest,
  GetAssistantApiDeploymentResponse,
  GetAssistantDebuggerDeploymentResponse,
  GetAssistantPhoneDeploymentResponse,
  GetAssistantWebpluginDeploymentResponse,
  GetAssistantWhatsappDeploymentResponse,
} from "@/rapida/clients/protos/assistant-deployment_pb";
import {
  AssistantDebuggerDeployment,
  GetAssistantDeploymentRequest,
} from "@/rapida/clients/protos/assistant-deployment_pb";
import {
  DeploymentAudioProvider,
  AssistantWebpluginDeployment,
} from "@/rapida/clients/protos/assistant-deployment_pb";
import { ConnectionConfig } from "@/rapida/connections/connection-config";

/**
 *
 * @param assistantId
 * @param cb
 * @param authHeader
 * @returns
 */
export function CreateAssistantDebuggerDeployment(
  clientCfg: ConnectionConfig,
  request: CreateAssistantDeploymentRequest,
  auth?: ClientAuthInfo | UserAuthInfo
): Promise<GetAssistantDebuggerDeploymentResponse> {
  return new Promise((resolve, reject) => {
    clientCfg.assistantDeploymentClient.createAssistantDebuggerDeployment(
      request,
      WithAuthContext(clientCfg.auth || auth),
      (
        err: ServiceError | null,
        response: GetAssistantDebuggerDeploymentResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

/**
 *
 * @param assistantId
 * @param cb
 * @param authHeader
 * @returns
 */
export function GetAssistantDebuggerDeployment(
  connectionConfig: ConnectionConfig,
  request: GetAssistantDeploymentRequest,
  auth?: ClientAuthInfo | UserAuthInfo
): Promise<GetAssistantDebuggerDeploymentResponse> {
  return new Promise((resolve, reject) => {
    connectionConfig.assistantDeploymentClient.getAssistantDebuggerDeployment(
      request,
      WithAuthContext(connectionConfig.auth || auth),
      (
        err: ServiceError | null,
        response: GetAssistantDebuggerDeploymentResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function CreateAssistantApiDeployment(
  clientCfg: ConnectionConfig,
  request: CreateAssistantDeploymentRequest,
  auth?: ClientAuthInfo | UserAuthInfo
): Promise<GetAssistantApiDeploymentResponse> {
  return new Promise((resolve, reject) => {
    clientCfg.assistantDeploymentClient.createAssistantApiDeployment(
      request,
      WithAuthContext(clientCfg.auth || auth),
      (
        err: ServiceError | null,
        response: GetAssistantApiDeploymentResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function GetAssistantApiDeployment(
  clientCfg: ConnectionConfig,
  req: GetAssistantDeploymentRequest,
  auth?: ClientAuthInfo | UserAuthInfo
): Promise<GetAssistantApiDeploymentResponse> {
  return new Promise((resolve, reject) => {
    clientCfg.assistantDeploymentClient.getAssistantApiDeployment(
      req,
      WithAuthContext(clientCfg.auth || auth),
      (
        err: ServiceError | null,
        response: GetAssistantApiDeploymentResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function CreateAssistantWebpluginDeployment(
  clientCfg: ConnectionConfig,
  request: CreateAssistantDeploymentRequest,
  auth?: ClientAuthInfo | UserAuthInfo
): Promise<GetAssistantWebpluginDeploymentResponse> {
  return new Promise((resolve, reject) => {
    clientCfg.assistantDeploymentClient.createAssistantWebpluginDeployment(
      request,
      WithAuthContext(clientCfg.auth || auth),
      (
        err: ServiceError | null,
        response: GetAssistantWebpluginDeploymentResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function GetAssistantWebpluginDeployment(
  clientCfg: ConnectionConfig,
  req: GetAssistantDeploymentRequest,
  auth?: ClientAuthInfo | UserAuthInfo
): Promise<GetAssistantWebpluginDeploymentResponse> {
  return new Promise((resolve, reject) => {
    clientCfg.assistantDeploymentClient.getAssistantWebpluginDeployment(
      req,
      WithAuthContext(clientCfg.auth || auth),
      (
        err: ServiceError | null,
        response: GetAssistantWebpluginDeploymentResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function CreateAssistantPhoneDeployment(
  clientCfg: ConnectionConfig,
  request: CreateAssistantDeploymentRequest,
  auth?: ClientAuthInfo | UserAuthInfo
): Promise<GetAssistantPhoneDeploymentResponse> {
  return new Promise((resolve, reject) => {
    clientCfg.assistantDeploymentClient.createAssistantPhoneDeployment(
      request,
      WithAuthContext(clientCfg.auth || auth),
      (
        err: ServiceError | null,
        response: GetAssistantPhoneDeploymentResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function GetAssistantPhoneDeployment(
  clientCfg: ConnectionConfig,
  req: GetAssistantDeploymentRequest,
  auth?: ClientAuthInfo | UserAuthInfo
): Promise<GetAssistantPhoneDeploymentResponse> {
  return new Promise((resolve, reject) => {
    clientCfg.assistantDeploymentClient.getAssistantPhoneDeployment(
      req,
      WithAuthContext(clientCfg.auth || auth),
      (
        err: ServiceError | null,
        response: GetAssistantPhoneDeploymentResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function CreateAssistantWhatsappDeployment(
  clientCfg: ConnectionConfig,
  request: CreateAssistantDeploymentRequest,
  auth?: ClientAuthInfo | UserAuthInfo
): Promise<GetAssistantWhatsappDeploymentResponse> {
  return new Promise((resolve, reject) => {
    clientCfg.assistantDeploymentClient.createAssistantWhatsappDeployment(
      request,
      WithAuthContext(clientCfg.auth || auth),
      (
        err: ServiceError | null,
        response: GetAssistantWhatsappDeploymentResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function GetAssistantWhatsappDeployment(
  clientCfg: ConnectionConfig,
  req: GetAssistantDeploymentRequest,
  auth?: ClientAuthInfo | UserAuthInfo
): Promise<GetAssistantWhatsappDeploymentResponse> {
  return new Promise((resolve, reject) => {
    clientCfg.assistantDeploymentClient.getAssistantWhatsappDeployment(
      req,
      WithAuthContext(clientCfg.auth || auth),
      (
        err: ServiceError | null,
        response: GetAssistantWhatsappDeploymentResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}
