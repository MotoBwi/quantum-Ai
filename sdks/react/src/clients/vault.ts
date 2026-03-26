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
} from "@/rapida/clients/protos/vault-api_pb";
import { Criteria, Paginate } from "@/rapida/clients/protos/common_pb";
import { ServiceError } from "@/rapida/clients/types";
import {
  UserAuthInfo,
  ClientAuthInfo,
  WithAuthContext,
} from "@/rapida/clients";
import { ConnectionConfig } from "@/rapida/types/connection-config";

/**
 *
 * @param providerId
 * @param providerKey
 * @param keyName
 * @param cb
 */
export function CreateProviderKey(
  connectionConfig: ConnectionConfig,
  req: CreateProviderCredentialRequest,
  authHeader?: ClientAuthInfo | UserAuthInfo
): Promise<GetCredentialResponse> {
  return new Promise((resolve, reject) => {
    connectionConfig.vaultClient.createProviderCredential(
      req,
      WithAuthContext(connectionConfig.auth || authHeader),
      (err: ServiceError | null, response: GetCredentialResponse | null) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

/**
 *
 * @param providerKeyId
 * @param providerId
 * @param providerKey
 * @param keyName
 * @param cb
 */
export function DeleteProviderKey(
  connectionConfig: ConnectionConfig,
  providerKeyId: string,
  cb: (err: ServiceError | null, dpr: GetCredentialResponse | null) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const requestObject = new DeleteCredentialRequest();
  requestObject.setVaultid(providerKeyId);
  connectionConfig.vaultClient.deleteCredential(
    requestObject,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 *
 * @param cb
 */
export function GetAllOrganizationCredential(
  connectionConfig: ConnectionConfig,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string; logic: string }[],
  cb: (
    err: ServiceError | null,
    pcs: GetAllOrganizationCredentialResponse | null
  ) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new GetAllOrganizationCredentialRequest();
  const paginate = new Paginate();
  criteria.forEach((x) => {
    let ctr = new Criteria();
    ctr.setKey(x.key);
    ctr.setValue(x.value);
    ctr.setLogic(x.logic);
    req.addCriterias(ctr);
  });
  paginate.setPage(page);
  paginate.setPagesize(pageSize);
  req.setPaginate(paginate);
  connectionConfig.vaultClient.getAllOrganizationCredential(
    req,
    WithAuthContext(authHeader),
    cb
  );
}
