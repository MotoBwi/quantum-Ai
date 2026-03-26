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
 *  This module provides functions for user authentication and management using gRPC.
 *  It includes operations such as user authentication, registration, password management,
 *  and social authentication with Google, LinkedIn, and GitHub.
 */
import { WithAuthContext } from "@/rapida/clients";
import {
  CreateBulkPhoneCallRequest,
  CreateBulkPhoneCallResponse,
  CreatePhoneCallRequest,
  CreatePhoneCallResponse,
} from "@/rapida/clients/protos/talk-api_pb";
import { ConnectionConfig } from "@/rapida/connections/connection-config";
import { ServiceError } from "@grpc/grpc-js";

/**
 *
 * @param clientCfg
 * @param assistantId
 * @param assistantVersion
 * @param params
 * @param args
 * @param options
 * @param metadata
 * @returns
 */
export function CreatePhoneCall(
  clientCfg: ConnectionConfig,
  request: CreatePhoneCallRequest
): Promise<CreatePhoneCallResponse> {
  return new Promise((resolve, reject) => {
    clientCfg.conversationClient.createPhoneCall(
      request,
      WithAuthContext(clientCfg.auth),
      (err: ServiceError | null, response: CreatePhoneCallResponse) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

/**
 *
 * @param clientCfg
 * @param assistantId
 * @param assistantVersion
 * @param params
 * @param args
 * @param options
 * @param metadata
 * @returns
 */
export function CreateBulkPhoneCall(
  clientCfg: ConnectionConfig,
  request: CreateBulkPhoneCallRequest
): Promise<CreateBulkPhoneCallResponse> {
  return new Promise((resolve, reject) => {
    clientCfg.conversationClient.createBulkPhoneCall(
      request,
      WithAuthContext(clientCfg.auth),
      (err: ServiceError, response: CreateBulkPhoneCallResponse) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}
