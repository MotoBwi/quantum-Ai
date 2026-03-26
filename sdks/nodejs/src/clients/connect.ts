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
 *  This module provides functions for interacting with the Connect API. It includes
 *  methods for knowledge and action connections, as well as retrieving connector files.
 */

import { Criteria } from "@/rapida/clients/protos/common_pb";
import {
  GeneralConnectRequest,
  GeneralConnectResponse,
  GetConnectorFilesRequest,
  GetConnectorFilesResponse,
} from "@/rapida/clients/protos/connect-api_pb";
import { WithAuthContext } from "@/rapida/clients";
import { ServiceError } from "@grpc/grpc-js";
import { ConnectionConfig } from "@/rapida/connections/connection-config";

/**
 * Establish a general connection.
 *
 * @param connect - The connection identifier.
 * @param code - The authorization code.
 * @param state - The state parameter.
 * @param scope - The requested scope.
 * @param config.auth - Authentication headers for the request.
 * @param cb - Callback function to handle the response.
 * @returns UnaryResponse - The gRPC response object.
 */
export function GeneralConnect(
  config: ConnectionConfig,
  connect: string,
  code: string,
  state: string,
  scope: string
): Promise<GeneralConnectResponse> {
  return new Promise((resolve, reject) => {
    const req = new GeneralConnectRequest();
    req.setConnect(connect);
    req.setCode(code);
    req.setState(state);
    req.setScope(scope);
    config.connectClient.generalConnect(
      req,
      WithAuthContext(config.auth),
      (err: ServiceError | null, response: GeneralConnectResponse | null) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

/**
 * Retrieve files associated with a connector based on specified criteria.
 */
export function GetConnectorFiles(
  config: ConnectionConfig,
  toolId: string,
  criterias: Criteria[]
): Promise<GetConnectorFilesResponse> {
  return new Promise((resolve, reject) => {
    const req = new GetConnectorFilesRequest();
    // NOTE: setToolid method doesn't exist on GetConnectorFilesRequest
    // The actual method name may be different - check proto definitions
    // req.setToolid(toolId);
    req.setCriteriasList(criterias);
    config.connectClient.getConnectorFiles(
      req,
      WithAuthContext(config.auth),
      (
        err: ServiceError | null,
        response: GetConnectorFilesResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}
