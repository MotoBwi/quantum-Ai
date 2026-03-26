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
 *  This module provides functions for interacting with the Endpoint API. It includes
 *  methods for endpoint management, including creation, retrieval, and configuration.
 */

import { Criteria, Paginate } from "@/rapida/clients/protos/common_pb";
import {
  GetAllEndpointRequest,
  GetAllEndpointResponse,
  GetAllEndpointProviderModelRequest,
  UpdateEndpointVersionRequest,
  UpdateEndpointVersionResponse,
  GetEndpointRequest,
  GetEndpointResponse,
  CreateEndpointRetryConfigurationResponse,
  GetAllEndpointProviderModelResponse,
  CreateEndpointRetryConfigurationRequest,
  GetEndpointLogResponse,
  GetEndpointLogRequest,
} from "@/rapida/clients/protos/endpoint-api_pb";
import {
  UserAuthInfo,
  ClientAuthInfo,
  WithAuthContext,
} from "@/rapida/clients";
import { ConnectionConfig } from "@/rapida/connections/connection-config";
import { ServiceError } from "@grpc/grpc-js";

/**
 *
 * @param config
 * @param req
 * @param auth
 * @returns
 */
export function GetAllEndpoint(
  config: ConnectionConfig,
  req: GetAllEndpointRequest,
  auth?: UserAuthInfo | ClientAuthInfo
): Promise<GetAllEndpointResponse> {
  return new Promise((resolve, reject) => {
    config.endpointClient.getAllEndpoint(
      req,
      WithAuthContext(auth || config.auth),
      (err: ServiceError, response: GetAllEndpointResponse) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}
export function UpdateEndpointVersion(
  config: ConnectionConfig,
  req: UpdateEndpointVersionRequest,
  auth?: UserAuthInfo | ClientAuthInfo
): Promise<UpdateEndpointVersionResponse> {
  return new Promise((resolve, reject) => {
    config.endpointClient.updateEndpointVersion(
      req,
      WithAuthContext(auth || config.auth),
      (err: ServiceError, response: UpdateEndpointVersionResponse) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}

export function GetAllEndpointProviderModel(
  config: ConnectionConfig,
  req: GetAllEndpointProviderModelRequest,
  auth?: UserAuthInfo | ClientAuthInfo
): Promise<GetAllEndpointProviderModelResponse> {
  return new Promise((resolve, reject) => {
    config.endpointClient.getAllEndpointProviderModel(
      req,
      WithAuthContext(auth || config.auth),
      (err: ServiceError, response: GetAllEndpointProviderModelResponse) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}

export function GetEndpoint(
  config: ConnectionConfig,
  req: GetEndpointRequest,
  auth?: UserAuthInfo | ClientAuthInfo
): Promise<GetEndpointResponse> {
  return new Promise((resolve, reject) => {
    config.endpointClient.getEndpoint(
      req,
      WithAuthContext(auth || config.auth),
      (err: ServiceError, response: GetEndpointResponse) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}

export function CreateEndpointRetryConfiguration(
  config: ConnectionConfig,
  req: CreateEndpointRetryConfigurationRequest,
  auth?: UserAuthInfo | ClientAuthInfo
): Promise<CreateEndpointRetryConfigurationResponse> {
  return new Promise((resolve, reject) => {
    config.endpointClient.createEndpointRetryConfiguration(
      req,
      WithAuthContext(auth || config.auth),
      (
        err: ServiceError,
        response: CreateEndpointRetryConfigurationResponse
      ) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}

// ... existing code ...

export function GetEndpointLog(
  config: ConnectionConfig,
  req: GetEndpointLogRequest,
  auth?: UserAuthInfo | ClientAuthInfo
): Promise<GetEndpointLogResponse> {
  return new Promise((resolve, reject) => {
    config.endpointClient.getEndpointLog(
      req,
      WithAuthContext(auth || config.auth),
      (err: ServiceError, response: GetEndpointLogResponse) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}
