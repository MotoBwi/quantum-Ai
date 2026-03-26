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
 *  This module provides a function for creating a lead via the LeadService.
 */

import {
  CreateProviderCredentialRequest,
  GetCredentialResponse,
  DeleteCredentialRequest,
  GetAllOrganizationCredentialResponse,
  GetAllOrganizationCredentialRequest,
  // NOTE: CreateToolCredentialRequest not available in vault-api_pb
  // CreateToolCredentialRequest,
} from "@/rapida/clients/protos/vault-api_pb";
import { Criteria, Paginate } from "@/rapida/clients/protos/common_pb";
import { Struct } from "google-protobuf/google/protobuf/struct_pb";
import {
  UserAuthInfo,
  ClientAuthInfo,
  WithAuthContext,
} from "@/rapida/clients";
import { ConnectionConfig } from "@/rapida/connections/connection-config";
import { ServiceError } from "@grpc/grpc-js";

/**
 *
 * @param providerId
 * @param providerKey
 * @param keyName
 * @param cb
 */
export function CreateProviderKey(
  connectionConfig: ConnectionConfig,
  providerId: string,
  providerName: string,
  credential: {},
  name: string,
  authHeader: ClientAuthInfo | UserAuthInfo
): Promise<GetCredentialResponse> {
  return new Promise((resolve, reject) => {
    const requestObject = new CreateProviderCredentialRequest();
    // NOTE: CreateProviderCredentialRequest only has setProvider() method, not setProviderid/setProvidername
    // Combining provider info into the provider field
    requestObject.setProvider(`${providerId}:${providerName}`);
    requestObject.setCredential(Struct.fromJavaScript(credential));
    requestObject.setName(name);
    connectionConfig.vaultClient.createProviderCredential(
      requestObject,
      WithAuthContext(authHeader),
      (err: ServiceError | null, response: GetCredentialResponse) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}

export function DeleteProviderKey(
  connectionConfig: ConnectionConfig,
  providerKeyId: string,
  authHeader: ClientAuthInfo | UserAuthInfo
): Promise<GetCredentialResponse> {
  return new Promise((resolve, reject) => {
    const requestObject = new DeleteCredentialRequest();
    requestObject.setVaultid(providerKeyId);
    connectionConfig.vaultClient.deleteCredential(
      requestObject,
      WithAuthContext(authHeader),
      (err: ServiceError | null, response: GetCredentialResponse) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}

export function AllOrganizationCredential(
  connectionConfig: ConnectionConfig,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string }[],
  authHeader: ClientAuthInfo | UserAuthInfo
): Promise<GetAllOrganizationCredentialResponse> {
  return new Promise((resolve, reject) => {
    const req = new GetAllOrganizationCredentialRequest();
    const paginate = new Paginate();
    criteria.forEach((x) => {
      let ctr = new Criteria();
      ctr.setKey(x.key);
      ctr.setValue(x.value);
      req.addCriterias(ctr);
    });
    paginate.setPage(page);
    paginate.setPagesize(pageSize);
    req.setPaginate(paginate);
    connectionConfig.vaultClient.getAllOrganizationCredential(
      req,
      WithAuthContext(authHeader),
      (
        err: ServiceError | null,
        response: GetAllOrganizationCredentialResponse
      ) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}
