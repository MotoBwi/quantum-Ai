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
 *  This module provides functions for interacting with the Deployment API.
 *  It includes methods for invoking requests with specified parameters.
 */

import {
  UserAuthInfo,
  ClientAuthInfo,
  WithAuthContext,
} from "@/rapida/clients";
import { ServiceError } from "@/rapida/clients/types";
import {
  EndpointDefinition,
  InvokeRequest,
  InvokeResponse,
} from "@/rapida/clients/protos/invoker-api_pb";
import p from "google-protobuf/google/protobuf/any_pb";
import { StringToAny } from "@/rapida/utils/rapida_value";
import { ConnectionConfig } from "@/rapida/types/connection-config";

/**
 * Invoke an endpoint with specified parameters.
 *
 * @param endpointId - The ID of the endpoint to invoke.
 * @param endpointProviderModelId - The provider model ID of the endpoint.
 * @param parameters - A map of parameters to pass to the endpoint.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @param metadata - Optional metadata to include in the request.
 * @returns UnaryResponse - The gRPC response object.
 */
export function Invoke(
  clientCfg: ConnectionConfig,
  request: InvokeRequest,
  authHeader?: ClientAuthInfo | UserAuthInfo
): Promise<InvokeResponse> {
  return new Promise((resolve, reject) => {
    return clientCfg.deploymentClient.invoke(
      request,
      WithAuthContext(authHeader || clientCfg.auth),
      (err: ServiceError | null, response: InvokeResponse | null) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}
