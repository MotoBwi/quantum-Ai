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
import { ConnectionConfig } from "@/rapida/connections/connection-config";
import { ServiceError } from "@grpc/grpc-js";
/**
 * Create a new organization.
 *
 * @param connectionConfig - The connection configuration.
 * @param name - The name of the organization.
 * @param size - The size of the organization.
 * @param industry - The industry the organization operates in.
 * @param authHeader - Authentication headers for the request.
 * @returns Promise<CreateOrganizationResponse> - The response containing the created organization.
 */
export function CreateOrganization(
  connectionConfig: ConnectionConfig,
  name: string,
  size: string,
  industry: string,
  authHeader: ClientAuthInfo | UserAuthInfo
): Promise<CreateOrganizationResponse> {
  return new Promise((resolve, reject) => {
    const requestObject = new CreateOrganizationRequest();
    requestObject.setOrganizationname(name);
    requestObject.setOrganizationsize(size);
    requestObject.setOrganizationindustry(industry);

    connectionConfig.organizationClient.createOrganization(
      requestObject,
      WithAuthContext(authHeader),
      (err: ServiceError, response: CreateOrganizationResponse) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}

/**
 * Update an existing organization.
 *
 * @param connectionConfig - The connection configuration.
 * @param organizationId - The ID of the organization to update.
 * @param authHeader - Authentication headers for the request.
 * @param organizationName - Optional new name for the organization.
 * @param organizationIndustry - Optional new industry for the organization.
 * @param organizationContact - Optional new contact for the organization.
 * @returns Promise<UpdateOrganizationResponse> - The response containing the updated organization.
 */
export function UpdateOrganization(
  connectionConfig: ConnectionConfig,
  organizationId: string,
  authHeader: ClientAuthInfo | UserAuthInfo,
  organizationName?: string,
  organizationIndustry?: string,
  organizationContact?: string
): Promise<UpdateOrganizationResponse> {
  return new Promise((resolve, reject) => {
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

    connectionConfig.organizationClient.updateOrganization(
      requestObject,
      WithAuthContext(authHeader),
      (err: ServiceError, response: UpdateOrganizationResponse) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}

/**
 * Retrieve details of an organization.
 *
 * @param connectionConfig - The connection configuration.
 * @param authHeader - Authentication headers for the request.
 * @returns Promise<GetOrganizationResponse> - The response containing the organization details.
 */
export function GetOrganization(
  connectionConfig: ConnectionConfig,
  authHeader: ClientAuthInfo | UserAuthInfo
): Promise<GetOrganizationResponse> {
  return new Promise((resolve, reject) => {
    const requestObject = new GetOrganizationRequest();

    connectionConfig.organizationClient.getOrganization(
      requestObject,
      WithAuthContext(authHeader),
      (err: ServiceError, response: GetOrganizationResponse) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}
