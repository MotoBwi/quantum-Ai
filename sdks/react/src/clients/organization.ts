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
  CreateOrganizationRequest,
  UpdateOrganizationRequest,
  GetOrganizationRequest,
  GetOrganizationResponse,
  CreateOrganizationResponse,
  UpdateOrganizationResponse,
} from "./protos/web-api_pb";
import {
  UserAuthInfo,
  ClientAuthInfo,
  WithAuthContext,
} from "@/rapida/clients";
import { ServiceError } from "@/rapida/clients/types";
import { ConnectionConfig } from "@/rapida/types/connection-config";

/**
 * Create a new organization.
 *
 * @param name - The name of the organization.
 * @param size - The size of the organization.
 * @param industry - The industry the organization operates in.
 * @param authHeader - Authentication headers for the request.
 * @param cb - Callback function to handle the response.
 * @returns UnaryResponse - The gRPC response object.
 */
export function CreateOrganization(
  connectionConfig: ConnectionConfig,
  name: string,
  size: string,
  industry: string,
  authHeader: ClientAuthInfo | UserAuthInfo,
  cb: (
    err: ServiceError | null,
    response: CreateOrganizationResponse | null
  ) => void
) {
  const requestObject = new CreateOrganizationRequest();
  requestObject.setOrganizationname(name);
  requestObject.setOrganizationsize(size);
  requestObject.setOrganizationindustry(industry);

  return connectionConfig.organizationClient.createOrganization(
    requestObject,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 * Update an existing organization.
 *
 * @param organizationId - The ID of the organization to update.
 * @param authHeader - Authentication headers for the request.
 * @param organizationName - Optional new name for the organization.
 * @param organizationIndustry - Optional new industry for the organization.
 * @param organizationContact - Optional new contact for the organization.
 * @param cb - Callback function to handle the response.
 * @returns UnaryResponse - The gRPC response object.
 */
export function UpdateOrganization(
  connectionConfig: ConnectionConfig,
  organizationId: string,
  authHeader: ClientAuthInfo | UserAuthInfo,
  cb: (
    err: ServiceError | null,
    response: UpdateOrganizationResponse | null
  ) => void,
  organizationName?: string,
  organizationIndustry?: string,
  organizationContact?: string
) {
  const requestObject = new UpdateOrganizationRequest();
  requestObject.setOrganizationid(organizationId);

  if (organizationName) {
    requestObject.setOrganizationname(organizationName);
  }
  if (organizationIndustry) {
    requestObject.setOrganizationindustry(organizationIndustry);
  }
  if (organizationContact) {
    requestObject.setOrganizationcontact(organizationContact);
  }

  return connectionConfig.organizationClient.updateOrganization(
    requestObject,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 * Retrieve details of an organization.
 *
 * @param authHeader - Authentication headers for the request.
 * @param cb - Callback function to handle the response.
 * @returns UnaryResponse - The gRPC response object.
 */
export function GetOrganization(
  connectionConfig: ConnectionConfig,
  authHeader: ClientAuthInfo | UserAuthInfo,
  cb: (
    err: ServiceError | null,
    response: GetOrganizationResponse | null
  ) => void
) {
  const requestObject = new GetOrganizationRequest();

  return connectionConfig.organizationClient.getOrganization(
    requestObject,
    WithAuthContext(authHeader),
    cb
  );
}
