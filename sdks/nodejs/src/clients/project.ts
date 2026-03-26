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
import { ConnectionConfig } from "@/rapida/connections/connection-config";
import { ServiceError } from "@grpc/grpc-js";
/**
 * Adds users to a project with specified roles.
 *
 * @param connectionConfig - The connection configuration.
 * @param email - The email address of the user to add.
 * @param role - The role to assign to the user.
 * @param projectIds - List of project IDs to which the user will be added.
 * @param authHeader - Authentication headers for the request.
 * @returns Promise<AddUsersToProjectResponse> - The response containing the result of adding users.
 */
export function AddUsersToProject(
  connectionConfig: ConnectionConfig,
  email: string,
  role: string,
  projectIds: string[],
  authHeader: ClientAuthInfo | UserAuthInfo
): Promise<AddUsersToProjectResponse> {
  return new Promise((resolve, reject) => {
    const requestObject = new AddUsersToProjectRequest();
    requestObject.setEmail(email);
    requestObject.setRole(role);
    requestObject.setProjectidsList(projectIds);

    connectionConfig.projectClient.addUsersToProject(
      requestObject,
      WithAuthContext(authHeader),
      (err: ServiceError, response: AddUsersToProjectResponse) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}

/**
 * Creates a new project with the specified details.
 *
 * @param connectionConfig - The connection configuration.
 * @param projectName - The name of the project to create.
 * @param projectDescription - The description of the project.
 * @param authHeader - Authentication headers for the request.
 * @returns Promise<CreateProjectResponse> - The response containing the created project.
 */
export function CreateProject(
  connectionConfig: ConnectionConfig,
  projectName: string,
  projectDescription: string,
  authHeader: ClientAuthInfo | UserAuthInfo
): Promise<CreateProjectResponse> {
  return new Promise((resolve, reject) => {
    const requestObject = new CreateProjectRequest();
    requestObject.setProjectname(projectName);
    requestObject.setProjectdescription(projectDescription);

    connectionConfig.projectClient.createProject(
      requestObject,
      WithAuthContext(authHeader),
      (err: ServiceError, response: CreateProjectResponse) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}

/**
 * Updates an existing project with the given details.
 *
 * @param connectionConfig - The connection configuration.
 * @param projectId - The ID of the project to update.
 * @param authHeader - Authentication headers for the request.
 * @param projectName - The new name for the project (optional).
 * @param projectDescription - The new description for the project (optional).
 * @returns Promise<UpdateProjectResponse> - The response containing the updated project.
 */
export function UpdateProject(
  connectionConfig: ConnectionConfig,
  projectId: string,
  authHeader: ClientAuthInfo | UserAuthInfo,
  projectName?: string,
  projectDescription?: string
): Promise<UpdateProjectResponse> {
  return new Promise((resolve, reject) => {
    const requestObject = new UpdateProjectRequest();
    requestObject.setProjectid(projectId);

    if (projectName) requestObject.setProjectname(projectName);
    if (projectDescription)
      requestObject.setProjectdescription(projectDescription);

    connectionConfig.projectClient.updateProject(
      requestObject,
      WithAuthContext(authHeader),
      (err: ServiceError, response: UpdateProjectResponse) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}

/**
 * Retrieves a paginated list of all projects based on specified criteria.
 *
 * @param connectionConfig - The connection configuration.
 * @param page - The page number for pagination.
 * @param pageSize - The number of projects per page.
 * @param criteria - List of criteria to filter the projects.
 * @param authHeader - Authentication headers for the request.
 * @returns Promise<GetAllProjectResponse> - The response containing all projects.
 */
export function GetAllProject(
  connectionConfig: ConnectionConfig,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string }[],
  authHeader: ClientAuthInfo | UserAuthInfo
): Promise<GetAllProjectResponse> {
  return new Promise((resolve, reject) => {
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

    connectionConfig.projectClient.getAllProject(
      req,
      WithAuthContext(authHeader),
      (err: ServiceError, response: GetAllProjectResponse) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}

/**
 * Retrieves the details of a specific project by ID.
 *
 * @param connectionConfig - The connection configuration.
 * @param projectId - The ID of the project to retrieve.
 * @param authHeader - Authentication headers for the request.
 * @returns Promise<GetProjectResponse> - The response containing the project details.
 */
export function GetProject(
  connectionConfig: ConnectionConfig,
  projectId: string,
  authHeader: ClientAuthInfo | UserAuthInfo
): Promise<GetProjectResponse> {
  return new Promise((resolve, reject) => {
    const requestObject = new GetProjectRequest();
    requestObject.setProjectid(projectId);

    connectionConfig.projectClient.getProject(
      requestObject,
      WithAuthContext(authHeader),
      (err: ServiceError, response: GetProjectResponse) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}

/**
 * Archives a project, effectively deleting it.
 *
 * @param connectionConfig - The connection configuration.
 * @param projectId - The ID of the project to archive.
 * @param authHeader - Authentication headers for the request.
 * @returns Promise<ArchiveProjectResponse> - The response containing the result of archiving.
 */
export function DeleteProject(
  connectionConfig: ConnectionConfig,
  projectId: string,
  authHeader: ClientAuthInfo | UserAuthInfo
): Promise<ArchiveProjectResponse> {
  return new Promise((resolve, reject) => {
    const requestObject = new ArchiveProjectRequest();
    requestObject.setId(projectId);

    connectionConfig.projectClient.archiveProject(
      requestObject,
      WithAuthContext(authHeader),
      (err: ServiceError, response: ArchiveProjectResponse) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}

/**
 * Retrieves all credentials associated with a specific project.
 *
 * @param connectionConfig - The connection configuration.
 * @param projectId - The ID of the project for which to retrieve credentials.
 * @param authHeader - Authentication headers for the request.
 * @returns Promise<GetAllProjectCredentialResponse> - The response containing all project credentials.
 */
export function GetAllProjectCredential(
  connectionConfig: ConnectionConfig,
  projectId: string,
  authHeader: ClientAuthInfo | UserAuthInfo
): Promise<GetAllProjectCredentialResponse> {
  return new Promise((resolve, reject) => {
    const requestObject = new GetAllProjectCredentialRequest();
    requestObject.setProjectid(projectId);

    connectionConfig.projectClient.getAllProjectCredential(
      requestObject,
      WithAuthContext(authHeader),
      (err: ServiceError, response: GetAllProjectCredentialResponse) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}

/**
 * Creates a new credential for a specific project.
 *
 * @param connectionConfig - The connection configuration.
 * @param projectId - The ID of the project for which to create a credential.
 * @param name - The name of the new credential.
 * @param authHeader - Authentication headers for the request.
 * @returns Promise<CreateProjectCredentialResponse> - The response containing the created credential.
 */
export function CreateProjectCredential(
  connectionConfig: ConnectionConfig,
  projectId: string,
  name: string,
  authHeader: ClientAuthInfo | UserAuthInfo
): Promise<CreateProjectCredentialResponse> {
  return new Promise((resolve, reject) => {
    const requestObject = new CreateProjectCredentialRequest();
    requestObject.setProjectid(projectId);
    requestObject.setName(name);

    connectionConfig.projectClient.createProjectCredential(
      requestObject,
      WithAuthContext(authHeader),
      (err: ServiceError, response: CreateProjectCredentialResponse) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}
