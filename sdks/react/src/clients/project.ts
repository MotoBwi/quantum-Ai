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
 *  This module provides functions for managing projects through the ProjectService.
 */

import {
  AddUsersToProjectRequest,
  CreateProjectRequest,
  CreateProjectResponse,
  GetAllProjectResponse,
  UpdateProjectRequest,
  UpdateProjectResponse,
  GetProjectResponse,
  GetProjectRequest,
  ArchiveProjectResponse,
  ArchiveProjectRequest,
  AddUsersToProjectResponse,
  GetAllProjectCredentialResponse,
  GetAllProjectCredentialRequest,
  CreateProjectCredentialRequest,
  CreateProjectCredentialResponse,
  GetAllProjectRequest,
} from "@/rapida/clients/protos/web-api_pb";
import { Criteria, Paginate } from "@/rapida/clients/protos/common_pb";
import {
  UserAuthInfo,
  ClientAuthInfo,
  WithAuthContext,
} from "@/rapida/clients";
import { ServiceError } from "@/rapida/clients/types";
import { ConnectionConfig } from "@/rapida/types/connection-config";

/**
 * Adds users to a project with specified roles.
 *
 * @param email - The email address of the user to add.
 * @param role - The role to assign to the user.
 * @param projectIds - List of project IDs to which the user will be added.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
export function AddUsersToProject(
  connectionConfig: ConnectionConfig,
  email: string,
  role: string,
  projectIds: string[],
  cb: (
    err: ServiceError | null,
    response: AddUsersToProjectResponse | null
  ) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const requestObject = new AddUsersToProjectRequest();
  requestObject.setEmail(email);
  requestObject.setRole(role);
  requestObject.setProjectidsList(projectIds);

  return connectionConfig.projectClient.addUsersToProject(
    requestObject,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 * Creates a new project with the specified details.
 *
 * @param projectName - The name of the project to create.
 * @param projectDescription - The description of the project.
 * @param authHeader - Authentication headers for the request.
 * @param cb - Callback function to handle the response.
 * @returns UnaryResponse - The gRPC response object.
 */
export function CreateProject(
  connectionConfig: ConnectionConfig,
  projectName: string,
  projectDescription: string,
  authHeader: ClientAuthInfo | UserAuthInfo,
  cb: (err: ServiceError | null, response: CreateProjectResponse | null) => void
) {
  const requestObject = new CreateProjectRequest();
  requestObject.setProjectname(projectName);
  requestObject.setProjectdescription(projectDescription);

  return connectionConfig.projectClient.createProject(
    requestObject,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 * Updates an existing project with the given details.
 *
 * @param projectId - The ID of the project to update.
 * @param projectName - The new name for the project (optional).
 * @param projectDescription - The new description for the project (optional).
 * @param authHeader - Authentication headers for the request.
 * @param cb - Callback function to handle the response.
 * @returns UnaryResponse - The gRPC response object.
 */
export function UpdateProject(
  connectionConfig: ConnectionConfig,
  projectId: string,
  cb: (
    err: ServiceError | null,
    response: UpdateProjectResponse | null
  ) => void,
  authHeader: ClientAuthInfo | UserAuthInfo,
  projectName?: string,
  projectDescription?: string
) {
  const requestObject = new UpdateProjectRequest();
  requestObject.setProjectid(projectId);

  if (projectName) requestObject.setProjectname(projectName);
  if (projectDescription)
    requestObject.setProjectdescription(projectDescription);

  return connectionConfig.projectClient.updateProject(
    requestObject,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 * Retrieves a paginated list of all projects based on specified criteria.
 *
 * @param page - The page number for pagination.
 * @param pageSize - The number of projects per page.
 * @param criteria - List of criteria to filter the projects.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
export function GetAllProject(
  connectionConfig: ConnectionConfig,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string }[],
  cb: (
    err: ServiceError | null,
    response: GetAllProjectResponse | null
  ) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new GetAllProjectRequest();
  const paginate = new Paginate();

  criteria.forEach(({ key, value }) => {
    const ctr = new Criteria();
    ctr.setKey(key);
    ctr.setValue(value);
    req.addCriterias(ctr);
  });

  paginate.setPage(page);
  paginate.setPagesize(pageSize);
  req.setPaginate(paginate);

  return connectionConfig.projectClient.getAllProject(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 * Retrieves the details of a specific project by ID.
 *
 * @param projectId - The ID of the project to retrieve.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
export function GetProject(
  connectionConfig: ConnectionConfig,
  projectId: string,
  cb: (err: ServiceError | null, response: GetProjectResponse | null) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const requestObject = new GetProjectRequest();
  requestObject.setProjectid(projectId);

  return connectionConfig.projectClient.getProject(
    requestObject,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 * Archives a project, effectively deleting it.
 *
 * @param projectId - The ID of the project to archive.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
export function DeleteProject(
  connectionConfig: ConnectionConfig,
  projectId: string,
  cb: (
    err: ServiceError | null,
    response: ArchiveProjectResponse | null
  ) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const requestObject = new ArchiveProjectRequest();
  requestObject.setId(projectId);

  return connectionConfig.projectClient.archiveProject(
    requestObject,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 * Retrieves all credentials associated with a specific project.
 *
 * @param projectId - The ID of the project for which to retrieve credentials.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
export function GetAllProjectCredential(
  connectionConfig: ConnectionConfig,
  projectId: string,
  cb: (
    err: ServiceError | null,
    response: GetAllProjectCredentialResponse | null
  ) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const requestObject = new GetAllProjectCredentialRequest();
  requestObject.setProjectid(projectId);

  return connectionConfig.projectClient.getAllProjectCredential(
    requestObject,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 * Creates a new credential for a specific project.
 *
 * @param projectId - The ID of the project for which to create a credential.
 * @param name - The name of the new credential.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
export function CreateProjectCredential(
  connectionConfig: ConnectionConfig,
  projectId: string,
  name: string,
  cb: (
    err: ServiceError | null,
    response: CreateProjectCredentialResponse | null
  ) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const requestObject = new CreateProjectCredentialRequest();
  requestObject.setProjectid(projectId);
  requestObject.setName(name);

  return connectionConfig.projectClient.createProjectCredential(
    requestObject,
    WithAuthContext(authHeader),
    cb
  );
}
