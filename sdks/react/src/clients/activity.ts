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
 *  This module provides functions for accessing audit logs via gRPC. It includes
 *  operations for retrieving lists of audit logs and fetching specific audit log entries.
 */

import { Criteria, Paginate } from "@/rapida/clients/protos/common_pb";
import {
  UserAuthInfo,
  ClientAuthInfo,
  WithAuthContext,
} from "@/rapida/clients";
import { ServiceError } from "@/rapida/clients/types";
import {
  GetAllAuditLogRequest,
  GetAllAuditLogResponse,
  GetAuditLogRequest,
  GetAuditLogResponse,
} from "@/rapida/clients/protos/audit-logging-api_pb";
import { ConnectionConfig } from "@/rapida/types/connection-config";

/**
 * Retrieve a paginated list of audit logs with filtering criteria.
 *
 * @param projectId - The ID of the project for which to retrieve audit logs.
 * @param page - The page number for pagination.
 * @param pageSize - The number of logs per page.
 * @param criteria - List of criteria to filter the audit logs.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
export function GetActivities(
  connectionConfig: ConnectionConfig,
  projectId: string,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string; logic: string }[],
  cb: (
    err: ServiceError | null,
    response: GetAllAuditLogResponse | null
  ) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new GetAllAuditLogRequest();
  req.setProjectid(projectId);

  const paginate = new Paginate();
  criteria.forEach(({ key, value, logic }) => {
    const ctr = new Criteria();
    ctr.setKey(key);
    ctr.setValue(value);
    ctr.setLogic(logic);
    req.addCriterias(ctr);
  });

  paginate.setPage(page);
  paginate.setPagesize(pageSize);
  req.setPaginate(paginate);

  return connectionConfig.auditLoggingClient.getAllAuditLog(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 * Retrieve a specific audit log entry by its ID.
 *
 * @param projectId - The ID of the project associated with the audit log.
 * @param auditId - The ID of the audit log entry to retrieve.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
export function GetActivity(
  connectionConfig: ConnectionConfig,
  projectId: string,
  auditId: string,
  cb: (err: ServiceError | null, response: GetAuditLogResponse | null) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new GetAuditLogRequest();
  req.setProjectid(projectId);
  req.setId(auditId);

  return connectionConfig.auditLoggingClient.getAuditLog(
    req,
    WithAuthContext(authHeader),
    cb
  );
}
