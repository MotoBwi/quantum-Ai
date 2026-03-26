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
 *  This module provides functions for managing assistants using gRPC. It includes
 *  operations for creating, updating, retrieving, and personalizing assistants,
 *  as well as handling assistant provider models and tags.
 */

import {
  Criteria,
  FieldSelector,
  GetAllAssistantConversationResponse,
  GetAllConversationMessageRequest,
  GetAllConversationMessageResponse,
  Metadata,
  Ordering,
  Paginate,
} from "@/rapida/clients/protos/common_pb";
import {
  GetAllAssistantRequest,
  GetAllAssistantResponse,
  CreateAssistantRequest,
  GetAssistantRequest,
  GetAssistantResponse,
  CreateAssistantTagRequest,
  UpdateAssistantDetailRequest,
  GetAllAssistantMessageRequest,
  GetAllAssistantMessageResponse,
  GetAssistantConversationResponse,
  GetAssistantConversationRequest,
  DeleteAssistantRequest,
  GetAllMessageRequest,
  GetAllMessageResponse,
  GetAssistantTelemetryProviderRequest,
  GetAssistantTelemetryProviderResponse,
  GetAllAssistantTelemetryProviderRequest,
  GetAllAssistantTelemetryProviderResponse,
  CreateAssistantTelemetryProviderRequest,
  UpdateAssistantTelemetryProviderRequest,
  DeleteAssistantTelemetryProviderRequest,
} from "@/rapida/clients/protos/assistant-api_pb";

import {
  CreateAssistantProviderRequest,
  GetAllAssistantProviderResponse,
  GetAssistantProviderResponse,
  GetAllAssistantProviderRequest,
  UpdateAssistantVersionRequest,
} from "@/rapida/clients/protos/assistant-provider_pb";
import {
  GetAssistantAnalysisResponse,
  GetAssistantAnalysisRequest,
  UpdateAssistantAnalysisRequest,
  CreateAssistantAnalysisRequest,
  GetAllAssistantAnalysisResponse,
  GetAllAssistantAnalysisRequest,
  DeleteAssistantAnalysisRequest,
} from "@/rapida/clients/protos/assistant-analysis_pb";

import {
  GetAssistantToolResponse,
  GetAssistantToolRequest,
  UpdateAssistantToolRequest,
  CreateAssistantToolRequest,
  GetAllAssistantToolResponse,
  GetAllAssistantToolRequest,
  DeleteAssistantToolRequest,
  GetAssistantToolLogResponse,
  GetAllAssistantToolLogRequest,
  GetAllAssistantToolLogResponse,
  GetAssistantToolLogRequest,
} from "@/rapida/clients/protos/assistant-tool_pb";

import {
  GetAssistantKnowledgeResponse,
  GetAssistantKnowledgeRequest,
  UpdateAssistantKnowledgeRequest,
  CreateAssistantKnowledgeRequest,
  GetAllAssistantKnowledgeResponse,
  GetAllAssistantKnowledgeRequest,
  DeleteAssistantKnowledgeRequest,
} from "@/rapida/clients/protos/assistant-knowledge_pb";

import {
  DeleteAssistantWebhookRequest,
  GetAssistantWebhookLogRequest,
  GetAllAssistantWebhookLogRequest,
  GetAssistantWebhookLogResponse,
  GetAssistantWebhookResponse,
  CreateAssistantWebhookRequest,
  UpdateAssistantWebhookRequest,
  GetAllAssistantWebhookLogResponse,
  GetAssistantWebhookRequest,
  GetAllAssistantWebhookRequest,
  GetAllAssistantWebhookResponse,
} from "@/rapida/clients/protos/assistant-webhook_pb";
import { AssistantServiceClient } from "@/rapida/clients/protos/assistant-api_pb_service";
import { ServiceError } from "@/rapida/clients/types";
import {
  UserAuthInfo,
  ClientAuthInfo,
  WithAuthContext,
} from "@/rapida/clients";
import { GetAllAssistantConversationRequest } from "@/rapida/clients/protos/common_pb";
import {
  CreateAssistantDeploymentRequest,
  GetAssistantApiDeploymentResponse,
  GetAssistantPhoneDeploymentResponse,
  GetAssistantWebpluginDeploymentResponse,
  GetAssistantDeploymentRequest,
} from "@/rapida/clients/protos/assistant-deployment_pb";
import { GetAssistantWhatsappDeploymentResponse } from "./protos/assistant-deployment_pb";
import { GetAssistantDebuggerDeploymentResponse } from "@/rapida/clients/protos/assistant-deployment_pb";
import { Struct } from "google-protobuf/google/protobuf/struct_pb";
import { ConnectionConfig } from "@/rapida/types/connection-config";

/**
 * Retrieve all assistants with pagination and filtering criteria.
 *
 * @param page - The page number for pagination.
 * @param pageSize - The number of assistants per page.
 * @param criteria - List of criteria to filter assistants.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
export function GetAllAssistant(
  connectionConfig: ConnectionConfig,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string }[],
  cb: (
    err: ServiceError | null,
    response: GetAllAssistantResponse | null
  ) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new GetAllAssistantRequest();
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

  return connectionConfig.assistantClient.getAllAssistant(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 * Update the version of an assistant.
 *
 * @param assistantId - The ID of the assistant to update.
 * @param assistantProviderModelId - The ID of the assistant provider model.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
export function UpdateAssistantVersion(
  connectionConfig: ConnectionConfig,
  req: UpdateAssistantVersionRequest,
  authHeader?: ClientAuthInfo | UserAuthInfo
): Promise<GetAssistantResponse> {
  return new Promise((resolve, reject) => {
    connectionConfig.assistantClient.updateAssistantVersion(
      req,
      WithAuthContext(connectionConfig.auth || authHeader),
      (err: ServiceError | null, response: GetAssistantResponse | null) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

/**
 * Retrieve all assistant provider models with pagination and filtering criteria.
 *
 * @param assistantId - The ID of the assistant.
 * @param page - The page number for pagination.
 * @param pageSize - The number of provider models per page.
 * @param criteria - List of criteria to filter provider models.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
export function GetAllAssistantProvider(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string }[],
  cb: (
    err: ServiceError | null,
    response: GetAllAssistantProviderResponse | null
  ) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new GetAllAssistantProviderRequest();
  req.setAssistantid(assistantId);

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

  return connectionConfig.assistantClient.getAllAssistantProvider(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 * Retrieve details of a specific assistant.
 *
 * @param assistantId - The ID of the assistant to retrieve.
 * @param assistantProviderModelId - Optional ID of the assistant provider model.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
export function GetAssistant(
  connectionConfig: ConnectionConfig,
  req: GetAssistantRequest,
  authHeader?: ClientAuthInfo | UserAuthInfo
): Promise<GetAssistantResponse> {
  return new Promise((resolve, reject) => {
    connectionConfig.assistantClient.getAssistant(
      req,
      WithAuthContext(connectionConfig.auth || authHeader),
      (err: ServiceError | null, response: GetAssistantResponse | null) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

/**
 *
 * @param connectionConfig
 * @param req
 * @param authHeader
 * @returns
 */
export function CreateAssistantProvider(
  connectionConfig: ConnectionConfig,
  req: CreateAssistantProviderRequest,
  authHeader?: UserAuthInfo | ClientAuthInfo
): Promise<GetAssistantProviderResponse> {
  return new Promise((resolve, reject) => {
    connectionConfig.assistantClient.createAssistantProvider(
      req,
      WithAuthContext(connectionConfig.auth || authHeader),
      (
        err: ServiceError | null,
        response: GetAssistantProviderResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

/**
 *
 * @param connectionConfig
 * @param req
 * @param authHeader
 * @returns
 */
export function CreateAssistant(
  connectionConfig: ConnectionConfig,
  req: CreateAssistantRequest,
  authHeader: UserAuthInfo
): Promise<GetAssistantResponse> {
  return new Promise((resolve, reject) => {
    connectionConfig.assistantClient.createAssistant(
      req,
      WithAuthContext(connectionConfig.auth || authHeader),
      (err: ServiceError | null, response: GetAssistantResponse | null) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

/**
 * Create tags for an assistant.
 *
 * @param assistantId - The ID of the assistant.
 * @param tags - List of tags to add.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
export function CreateAssistantTag(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  tags: string[],
  cb: (err: ServiceError | null, response: GetAssistantResponse | null) => void,
  authHeader: UserAuthInfo
) {
  const req = new CreateAssistantTagRequest();
  req.setTagsList(tags);
  req.setAssistantid(assistantId);

  return connectionConfig.assistantClient.createAssistantTag(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 * Update details of an existing assistant.
 *
 * @param assistantId - The ID of the assistant to update.
 * @param name - The new name for the assistant.
 * @param description - The new description for the assistant.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
export function UpdateAssistantDetail(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  name: string,
  description: string,
  cb: (err: ServiceError | null, response: GetAssistantResponse | null) => void,
  authHeader: UserAuthInfo
) {
  const req = new UpdateAssistantDetailRequest();
  req.setName(name);
  req.setDescription(description);
  req.setAssistantid(assistantId);

  return connectionConfig.assistantClient.updateAssistantDetail(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 *
 * @param assistantId
 * @param page
 * @param pageSize
 * @param criteria
 * @param cb
 * @param authHeader
 * @returns
 */
export function GetAssistantMessages(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string; logic: string }[],
  selectors: ("metadata" | "metric" | "stage" | "request" | "response")[],
  cb: (
    err: ServiceError | null,
    response: GetAllAssistantMessageResponse | null
  ) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new GetAllAssistantMessageRequest();
  const paginate = new Paginate();

  criteria.forEach(({ key, value, logic }) => {
    const ctr = new Criteria();
    ctr.setKey(key);
    ctr.setValue(value);
    ctr.setLogic(logic);
    req.addCriterias(ctr);
  });

  req.setAssistantid(assistantId);

  selectors.forEach((v) => {
    const selectors = new FieldSelector();
    selectors.setField(v);
    req.addSelectors(selectors);
  });
  paginate.setPage(page);
  paginate.setPagesize(pageSize);
  const order = new Ordering();
  order.setColumn("created_date");
  order.setOrder("desc");
  req.setOrder(order);
  req.setPaginate(paginate);
  return connectionConfig.assistantClient.getAllAssistantMessage(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 *
 * @param page
 * @param pageSize
 * @param criteria
 * @param selectors
 * @param cb
 * @param authHeader
 * @returns
 */
export function GetMessages(
  connectionConfig: ConnectionConfig,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string; logic: string }[],
  selectors: ("metadata" | "metric" | "stage" | "request" | "response")[],
  cb: (
    err: ServiceError | null,
    response: GetAllMessageResponse | null
  ) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new GetAllMessageRequest();
  const paginate = new Paginate();

  criteria.forEach(({ key, value, logic }) => {
    const ctr = new Criteria();
    ctr.setKey(key);
    ctr.setValue(value);
    ctr.setLogic(logic);
    req.addCriterias(ctr);
  });

  selectors.forEach((v) => {
    const selectors = new FieldSelector();
    selectors.setField(v);
    req.addSelectors(selectors);
  });
  paginate.setPage(page);
  paginate.setPagesize(pageSize);
  const order = new Ordering();
  order.setColumn("created_date");
  order.setOrder("desc");
  req.setOrder(order);
  req.setPaginate(paginate);
  return connectionConfig.assistantClient.getAllMessage(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 * Retrieves all assistant sessions based on the provided criteria.
 *
 * @param assistantId - The unique identifier of the assistant.
 * @param page - The page number for pagination.
 * @param pageSize - The number of records per page.
 * @param criteria - An array of key-value pairs to filter the assistant sessions.
 * @param cb - A callback function that will be invoked with the result or error.
 * @param authHeader - The authentication header for the request.
 *
 * @returns {void}
 *
 * @callback cb
 * @param {ServiceError | null} err - The error object if an error occurred, otherwise null.
 * @param {GetAllAssistantConversationResponse | null} uvcr - The response object containing the assistant sessions.
 */
export function GetAllAssistantConversation(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string; logic: string }[],
  cb: (
    err: ServiceError | null,
    uvcr: GetAllAssistantConversationResponse | null
  ) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new GetAllAssistantConversationRequest();
  req.setAssistantid(assistantId);
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
  connectionConfig.assistantClient.getAllAssistantConversation(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 *
 * @param assistantId
 * @param assistantConversationId
 * @param page
 * @param pageSize
 * @param criteria
 * @param cb
 * @param authHeader
 */
export function GetAllAssistantConversationMessage(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  assistantConversationId: string,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string }[],
  authHeader: ClientAuthInfo | UserAuthInfo,
  cb: (
    err: ServiceError | null,
    uvcr: GetAllConversationMessageResponse | null
  ) => void
) {
  const req = new GetAllConversationMessageRequest();
  req.setAssistantid(assistantId);
  req.setAssistantconversationid(assistantConversationId);
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
  connectionConfig.assistantClient.getAllConversationMessage(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 *
 * @param assistantId
 * @param cb
 * @param authHeader
 * @returns
 */
export function CreateAssistantDebuggerDeployment(
  clientCfg: ConnectionConfig,
  request: CreateAssistantDeploymentRequest,
  auth?: ClientAuthInfo | UserAuthInfo
): Promise<GetAssistantDebuggerDeploymentResponse> {
  return new Promise((resolve, reject) => {
    clientCfg.assistantDeploymentClient.createAssistantDebuggerDeployment(
      request,
      WithAuthContext(clientCfg.auth || auth),
      (
        err: ServiceError | null,
        response: GetAssistantDebuggerDeploymentResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

/**
 *
 * @param assistantId
 * @param cb
 * @param authHeader
 * @returns
 */
export function GetAssistantDebuggerDeployment(
  connectionConfig: ConnectionConfig,
  request: GetAssistantDeploymentRequest,
  auth?: ClientAuthInfo | UserAuthInfo
): Promise<GetAssistantDebuggerDeploymentResponse> {
  return new Promise((resolve, reject) => {
    connectionConfig.assistantDeploymentClient.getAssistantDebuggerDeployment(
      request,
      WithAuthContext(connectionConfig.auth || auth),
      (
        err: ServiceError | null,
        response: GetAssistantDebuggerDeploymentResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

// ... existing code ...

export function CreateAssistantApiDeployment(
  clientCfg: ConnectionConfig,
  request: CreateAssistantDeploymentRequest,
  auth?: ClientAuthInfo | UserAuthInfo
): Promise<GetAssistantApiDeploymentResponse> {
  return new Promise((resolve, reject) => {
    clientCfg.assistantDeploymentClient.createAssistantApiDeployment(
      request,
      WithAuthContext(clientCfg.auth || auth),
      (
        err: ServiceError | null,
        response: GetAssistantApiDeploymentResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function GetAssistantApiDeployment(
  clientCfg: ConnectionConfig,
  req: GetAssistantDeploymentRequest,
  auth?: ClientAuthInfo | UserAuthInfo
): Promise<GetAssistantApiDeploymentResponse> {
  return new Promise((resolve, reject) => {
    clientCfg.assistantDeploymentClient.getAssistantApiDeployment(
      req,
      WithAuthContext(clientCfg.auth || auth),
      (
        err: ServiceError | null,
        response: GetAssistantApiDeploymentResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function CreateAssistantWebpluginDeployment(
  clientCfg: ConnectionConfig,
  request: CreateAssistantDeploymentRequest,
  auth?: ClientAuthInfo | UserAuthInfo
): Promise<GetAssistantWebpluginDeploymentResponse> {
  return new Promise((resolve, reject) => {
    clientCfg.assistantDeploymentClient.createAssistantWebpluginDeployment(
      request,
      WithAuthContext(clientCfg.auth || auth),
      (
        err: ServiceError | null,
        response: GetAssistantWebpluginDeploymentResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function GetAssistantWebpluginDeployment(
  clientCfg: ConnectionConfig,
  req: GetAssistantDeploymentRequest,
  auth?: ClientAuthInfo | UserAuthInfo
): Promise<GetAssistantWebpluginDeploymentResponse> {
  return new Promise((resolve, reject) => {
    clientCfg.assistantDeploymentClient.getAssistantWebpluginDeployment(
      req,
      WithAuthContext(clientCfg.auth || auth),
      (
        err: ServiceError | null,
        response: GetAssistantWebpluginDeploymentResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function CreateAssistantPhoneDeployment(
  clientCfg: ConnectionConfig,
  request: CreateAssistantDeploymentRequest,
  auth?: ClientAuthInfo | UserAuthInfo
): Promise<GetAssistantPhoneDeploymentResponse> {
  return new Promise((resolve, reject) => {
    clientCfg.assistantDeploymentClient.createAssistantPhoneDeployment(
      request,
      WithAuthContext(clientCfg.auth || auth),
      (
        err: ServiceError | null,
        response: GetAssistantPhoneDeploymentResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function GetAssistantPhoneDeployment(
  clientCfg: ConnectionConfig,
  req: GetAssistantDeploymentRequest,
  auth?: ClientAuthInfo | UserAuthInfo
): Promise<GetAssistantPhoneDeploymentResponse> {
  return new Promise((resolve, reject) => {
    clientCfg.assistantDeploymentClient.getAssistantPhoneDeployment(
      req,
      WithAuthContext(clientCfg.auth || auth),
      (
        err: ServiceError | null,
        response: GetAssistantPhoneDeploymentResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function CreateAssistantWhatsappDeployment(
  clientCfg: ConnectionConfig,
  request: CreateAssistantDeploymentRequest,
  auth?: ClientAuthInfo | UserAuthInfo
): Promise<GetAssistantWhatsappDeploymentResponse> {
  return new Promise((resolve, reject) => {
    clientCfg.assistantDeploymentClient.createAssistantWhatsappDeployment(
      request,
      WithAuthContext(clientCfg.auth || auth),
      (
        err: ServiceError | null,
        response: GetAssistantWhatsappDeploymentResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function GetAssistantWhatsappDeployment(
  clientCfg: ConnectionConfig,
  req: GetAssistantDeploymentRequest,
  auth?: ClientAuthInfo | UserAuthInfo
): Promise<GetAssistantWhatsappDeploymentResponse> {
  return new Promise((resolve, reject) => {
    clientCfg.assistantDeploymentClient.getAssistantWhatsappDeployment(
      req,
      WithAuthContext(clientCfg.auth || auth),
      (
        err: ServiceError | null,
        response: GetAssistantWhatsappDeploymentResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function GetAllAssistantWebhook(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string }[],
  cb: (
    err: ServiceError | null,
    response: GetAllAssistantWebhookResponse | null
  ) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new GetAllAssistantWebhookRequest();
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

  req.setAssistantid(assistantId);
  return connectionConfig.assistantClient.getAllAssistantWebhook(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 *
 * @param assistantId
 * @param method
 * @param endpoint
 * @param headers
 * @param parameters
 * @param events
 * @param retryOnStatus
 * @param maxRetries
 * @param timeout
 * @param priority
 * @param cb
 * @param authHeader
 * @param description
 * @returns
 */
export function CreateWebhook(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  method: string,
  endpoint: string,
  headers: { key: string; value: string }[],
  parameters: { key: string; value: string }[],
  events: string[],
  retryOnStatus: string[],
  maxRetries: number,
  timeout: number,
  priority: number,
  cb: (
    err: ServiceError | null,
    response: GetAssistantWebhookResponse | null
  ) => void,
  authHeader: UserAuthInfo,
  description?: string
) {
  const req = new CreateAssistantWebhookRequest();
  req.setAssistantid(assistantId);
  req.setHttpurl(endpoint);
  req.setHttpmethod(method);
  req.setAssistanteventsList(events);
  headers.forEach((k) => {
    req.getHttpheadersMap().set(k.key, k.value);
  });
  parameters.forEach((k) => {
    req.getHttpbodyMap().set(k.key, k.value);
  });
  req.setRetrystatuscodesList(retryOnStatus);
  req.setMaxretrycount(maxRetries);
  req.setTimeoutsecond(timeout);
  req.setExecutionpriority(priority);
  if (description) req.setDescription(description);
  return connectionConfig.assistantClient.createAssistantWebhook(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 *
 * @param assistantId
 * @param webhookId
 * @param method
 * @param endpoint
 * @param headers
 * @param events
 * @param retryOnStatus
 * @param maxRetries
 * @param timeout
 * @param cb
 * @param authHeader
 * @param description
 * @returns
 */
export function UpdateWebhook(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  webhookId: string,
  method: string,
  endpoint: string,
  headers: { key: string; value: string }[],
  parameters: { key: string; value: string }[],
  events: string[],
  retryOnStatus: string[],
  maxRetries: number,
  timeout: number,
  priority: number,
  cb: (
    err: ServiceError | null,
    response: GetAssistantWebhookResponse | null
  ) => void,
  authHeader: UserAuthInfo,
  description?: string
) {
  const req = new UpdateAssistantWebhookRequest();
  req.setId(webhookId);
  req.setAssistantid(assistantId);
  req.setHttpurl(endpoint);
  req.setHttpmethod(method);
  req.setAssistanteventsList(events);
  headers.forEach((k) => {
    req.getHttpheadersMap().set(k.key, k.value);
  });
  parameters.forEach((k) => {
    req.getHttpbodyMap().set(k.key, k.value);
  });
  req.setRetrystatuscodesList(retryOnStatus);
  req.setMaxretrycount(maxRetries);
  req.setTimeoutsecond(timeout);
  req.setExecutionpriority(priority);
  if (description) req.setDescription(description);
  return connectionConfig.assistantClient.updateAssistantWebhook(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 *
 * @param assistantId
 * @param webhookId
 * @param cb
 * @param authHeader
 * @returns
 */
export function GetAssistantWebhook(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  webhookId: string,
  cb: (
    err: ServiceError | null,
    response: GetAssistantWebhookResponse | null
  ) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new GetAssistantWebhookRequest();
  req.setAssistantid(assistantId);
  req.setId(webhookId);
  return connectionConfig.assistantClient.getAssistantWebhook(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 *
 * @param assistantId
 * @param webhookId
 * @param cb
 * @param authHeader
 * @returns
 */
export function DeleteAssistantWebhook(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  webhookId: string,
  cb: (
    err: ServiceError | null,
    response: GetAssistantWebhookResponse | null
  ) => void,
  authHeader: UserAuthInfo
) {
  const req = new DeleteAssistantWebhookRequest();
  req.setAssistantid(assistantId);
  req.setId(webhookId);
  return connectionConfig.assistantClient.deleteAssistantWebhook(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 *
 * @param assistantId
 * @param page
 * @param pageSize
 * @param criteria
 * @param cb
 * @param authHeader
 * @returns
 */
export function GetAllAssistantTelemetryProvider(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string }[],
  cb: (
    err: ServiceError | null,
    response: GetAllAssistantTelemetryProviderResponse | null
  ) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new GetAllAssistantTelemetryProviderRequest();
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
  req.setAssistantid(assistantId);
  return connectionConfig.assistantClient.getAllAssistantTelemetryProvider(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

export function CreateAssistantTelemetryProvider(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  providerType: string,
  enabled: boolean,
  options: Metadata[],
  cb: (
    err: ServiceError | null,
    response: GetAssistantTelemetryProviderResponse | null
  ) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new CreateAssistantTelemetryProviderRequest();
  req.setAssistantid(assistantId);
  req.setProvidertype(providerType);
  req.setEnabled(enabled);
  options.forEach((opt) => req.addOptions(opt));
  return connectionConfig.assistantClient.createAssistantTelemetryProvider(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

export function UpdateAssistantTelemetryProvider(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  telemetryProviderId: string,
  providerType: string,
  enabled: boolean,
  options: Metadata[],
  cb: (
    err: ServiceError | null,
    response: GetAssistantTelemetryProviderResponse | null
  ) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new UpdateAssistantTelemetryProviderRequest();
  req.setId(telemetryProviderId);
  req.setAssistantid(assistantId);
  req.setProvidertype(providerType);
  req.setEnabled(enabled);
  options.forEach((opt) => req.addOptions(opt));
  return connectionConfig.assistantClient.updateAssistantTelemetryProvider(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

export function GetAssistantTelemetryProvider(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  telemetryProviderId: string,
  cb: (
    err: ServiceError | null,
    response: GetAssistantTelemetryProviderResponse | null
  ) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new GetAssistantTelemetryProviderRequest();
  req.setId(telemetryProviderId);
  req.setAssistantid(assistantId);
  return connectionConfig.assistantClient.getAssistantTelemetryProvider(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

export function DeleteAssistantTelemetryProvider(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  telemetryProviderId: string,
  cb: (
    err: ServiceError | null,
    response: GetAssistantTelemetryProviderResponse | null
  ) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new DeleteAssistantTelemetryProviderRequest();
  req.setId(telemetryProviderId);
  req.setAssistantid(assistantId);
  return connectionConfig.assistantClient.deleteAssistantTelemetryProvider(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 *
 * @param assistantId
 * @param webhookId
 * @param cb
 * @param authHeader
 * @returns
 */
export function GetAssistantConversation(
  connectionConfig: ConnectionConfig,
  req: GetAssistantConversationRequest,
  auth?: ClientAuthInfo | UserAuthInfo
): Promise<GetAssistantConversationResponse> {
  return new Promise((resolve, reject) => {
    connectionConfig.assistantClient.getAssistantConversation(
      req,
      WithAuthContext(connectionConfig.auth || auth),
      (
        err: ServiceError | null,
        response: GetAssistantConversationResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

/**
 *
 * @param assistantId
 * @param cb
 * @param authHeader
 * @returns
 */
export function DeleteAssistant(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  cb: (err: ServiceError | null, response: GetAssistantResponse | null) => void,
  authHeader: UserAuthInfo
) {
  const req = new DeleteAssistantRequest();
  req.setId(assistantId);
  return connectionConfig.assistantClient.deleteAssistant(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 *
 * @param assistantId
 * @param page
 * @param pageSize
 * @param criteria
 * @param cb
 * @param authHeader
 * @returns
 */
export function GetAllAssistantAnalysis(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string }[],
  cb: (
    err: ServiceError | null,
    response: GetAllAssistantAnalysisResponse | null
  ) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new GetAllAssistantAnalysisRequest();
  req.setAssistantid(assistantId);
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

  return connectionConfig.assistantClient.getAllAssistantAnalysis(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 *
 * @param assistantId
 * @param name
 * @param endpointid
 * @param endpointversion
 * @param executionpriority
 * @param parameters
 * @param cb
 * @param authHeader
 * @param description
 * @returns
 */
export function CreateAnalysis(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  name: string,
  endpointid: string,
  endpointversion: string,
  executionpriority: number,
  parameters: { key: string; value: string }[],
  cb: (
    err: ServiceError | null,
    response: GetAssistantAnalysisResponse | null
  ) => void,
  authHeader: UserAuthInfo,
  description?: string
) {
  const req = new CreateAssistantAnalysisRequest();
  req.setAssistantid(assistantId);
  req.setEndpointid(endpointid);
  req.setEndpointversion(endpointversion);
  req.setName(name);
  req.setExecutionpriority(executionpriority);
  parameters.forEach((k) => {
    req.getEndpointparametersMap().set(k.key, k.value);
  });

  if (description) req.setDescription(description);
  return connectionConfig.assistantClient.createAssistantAnalysis(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 *
 * @param assistantId
 * @param webhookId
 * @param method
 * @param endpoint
 * @param headers
 * @param events
 * @param retryOnStatus
 * @param maxRetries
 * @param timeout
 * @param cb
 * @param authHeader
 * @param description
 * @returns
 */
export function UpdateAnalysis(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  AnalysisId: string,
  name: string,
  endpointid: string,
  endpointversion: string,
  executionpriority: number,
  parameters: { key: string; value: string }[],

  cb: (
    err: ServiceError | null,
    response: GetAssistantAnalysisResponse | null
  ) => void,
  authHeader: UserAuthInfo,
  description?: string
) {
  const req = new UpdateAssistantAnalysisRequest();
  req.setId(AnalysisId);
  req.setAssistantid(assistantId);
  req.setEndpointid(endpointid);
  req.setEndpointversion(endpointversion);
  req.setName(name);
  req.setExecutionpriority(executionpriority);
  parameters.forEach((k) => {
    req.getEndpointparametersMap().set(k.key, k.value);
  });
  if (description) req.setDescription(description);
  return connectionConfig.assistantClient.updateAssistantAnalysis(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 *
 * @param assistantId
 * @param webhookId
 * @param cb
 * @param authHeader
 * @returns
 */
export function GetAssistantAnalysis(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  AnalysisId: string,
  cb: (
    err: ServiceError | null,
    response: GetAssistantAnalysisResponse | null
  ) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new GetAssistantAnalysisRequest();
  req.setAssistantid(assistantId);
  req.setId(AnalysisId);
  return connectionConfig.assistantClient.getAssistantAnalysis(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 *
 * @param assistantId
 * @param AnalysisId
 * @param cb
 * @param authHeader
 * @returns
 */
export function DeleteAssistantAnalysis(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  AnalysisId: string,
  cb: (
    err: ServiceError | null,
    response: GetAssistantAnalysisResponse | null
  ) => void,
  authHeader: UserAuthInfo
) {
  const req = new DeleteAssistantAnalysisRequest();
  req.setAssistantid(assistantId);
  req.setId(AnalysisId);
  return connectionConfig.assistantClient.deleteAssistantAnalysis(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 *
 * @param page
 * @param pageSize
 * @param criteria
 * @param cb
 * @param authHeader
 * @returns
 */
export function GetAllWebhookLog(
  connectionConfig: ConnectionConfig,
  projectId: string,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string; logic: string }[],
  cb: (
    err: ServiceError | null,
    response: GetAllAssistantWebhookLogResponse | null
  ) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new GetAllAssistantWebhookLogRequest();
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

  return connectionConfig.assistantClient.getAllAssistantWebhookLog(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 *
 * @param organizationId
 * @param projectId
 * @param webhookLogId
 * @param cb
 * @param authHeader
 * @returns
 */
export function GetWebhookLog(
  connectionConfig: ConnectionConfig,
  projectId: string,
  webhookLogId: string,
  cb: (
    err: ServiceError | null,
    response: GetAssistantWebhookLogResponse | null
  ) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new GetAssistantWebhookLogRequest();
  req.setProjectid(projectId);
  req.setId(webhookLogId);
  return connectionConfig.assistantClient.getAssistantWebhookLog(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 *
 * @param assistantId
 * @param page
 * @param pageSize
 * @param criteria
 * @param cb
 * @param authHeader
 * @returns
 */
export function GetAllAssistantTool(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string }[],
  cb: (
    err: ServiceError | null,
    response: GetAllAssistantToolResponse | null
  ) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new GetAllAssistantToolRequest();
  req.setAssistantid(assistantId);
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

  return connectionConfig.assistantClient.getAllAssistantTool(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 *
 * @param assistantId
 * @param name
 * @param endpointid
 * @param endpointversion
 * @param executionpriority
 * @param parameters
 * @param cb
 * @param authHeader
 * @param description
 * @returns
 */
export function CreateAssistantTool(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  name: string,
  description: string,
  fields: {},
  executionMethod: string,
  executionOptions: Metadata[],
  cb: (
    err: ServiceError | null,
    response: GetAssistantToolResponse | null
  ) => void,
  authHeader: UserAuthInfo
) {
  const req = new CreateAssistantToolRequest();
  req.setAssistantid(assistantId);
  req.setName(name);
  req.setDescription(description);
  req.setFields(Struct.fromJavaScript(fields));
  req.setExecutionmethod(executionMethod);
  executionOptions.forEach((x) => {
    req.addExecutionoptions(x);
  });
  return connectionConfig.assistantClient.createAssistantTool(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 *
 * @param assistantId
 * @param webhookId
 * @param method
 * @param endpoint
 * @param headers
 * @param events
 * @param retryOnStatus
 * @param maxRetries
 * @param timeout
 * @param cb
 * @param authHeader
 * @param description
 * @returns
 */
export function UpdateAssistantTool(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  assistantToolId: string,
  name: string,
  description: string,
  fields: {},
  executionMethod: string,
  executionOptions: Metadata[],
  cb: (
    err: ServiceError | null,
    response: GetAssistantToolResponse | null
  ) => void,
  authHeader: UserAuthInfo
) {
  const req = new UpdateAssistantToolRequest();
  req.setId(assistantToolId);
  req.setAssistantid(assistantId);
  req.setAssistantid(assistantId);
  req.setName(name);
  req.setDescription(description);
  req.setFields(Struct.fromJavaScript(fields));
  req.setExecutionmethod(executionMethod);
  executionOptions.forEach((x) => {
    req.addExecutionoptions(x);
  });
  return connectionConfig.assistantClient.updateAssistantTool(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 *
 * @param assistantId
 * @param webhookId
 * @param cb
 * @param authHeader
 * @returns
 */
export function GetAssistantTool(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  ToolId: string,
  cb: (
    err: ServiceError | null,
    response: GetAssistantToolResponse | null
  ) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new GetAssistantToolRequest();
  req.setAssistantid(assistantId);
  req.setId(ToolId);
  return connectionConfig.assistantClient.getAssistantTool(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 *
 * @param assistantId
 * @param ToolId
 * @param cb
 * @param authHeader
 * @returns
 */
export function DeleteAssistantTool(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  ToolId: string,
  cb: (
    err: ServiceError | null,
    response: GetAssistantToolResponse | null
  ) => void,
  authHeader: UserAuthInfo
) {
  const req = new DeleteAssistantToolRequest();
  req.setAssistantid(assistantId);
  req.setId(ToolId);
  return connectionConfig.assistantClient.deleteAssistantTool(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 *
 * @param assistantId
 * @param page
 * @param pageSize
 * @param criteria
 * @param cb
 * @param authHeader
 * @returns
 */
export function GetAllAssistantKnowledge(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string }[],
  cb: (
    err: ServiceError | null,
    response: GetAllAssistantKnowledgeResponse | null
  ) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new GetAllAssistantKnowledgeRequest();
  req.setAssistantid(assistantId);
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

  return connectionConfig.assistantClient.getAllAssistantKnowledge(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 *
 * @param assistantId
 * @param name
 * @param endpointid
 * @param endpointversion
 * @param executionpriority
 * @param parameters
 * @param cb
 * @param authHeader
 * @param description
 * @returns
 */
export function CreateAssistantKnowledge(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  knowledgeId: string,
  config: {
    searchMethod: "semantic" | "fullText" | "hybrid" | "invertedIndex";
    rerankingEnable: boolean;
    rerankerModelProvider?: string;
    rerankerModelProviderId?: string;
    rerankerModelOptions?: Metadata[];
    topK: number;
    scoreThreshold: number;
  },
  cb: (
    err: ServiceError | null,
    response: GetAssistantKnowledgeResponse | null
  ) => void,
  authHeader: UserAuthInfo
) {
  const req = new CreateAssistantKnowledgeRequest();
  req.setKnowledgeid(knowledgeId);
  req.setAssistantid(assistantId);
  if (config.rerankingEnable) {
    req.setRerankerenable(config.rerankingEnable);
    req.setRerankermodelproviderid(config.rerankerModelProviderId!);
    req.setRerankermodelprovidername(config.rerankerModelProvider!);
    req.setAssistantknowledgererankeroptionsList(config.rerankerModelOptions!);
  }
  req.setTopk(config.topK);
  req.setScorethreshold(config.scoreThreshold);
  req.setRetrievalmethod(config.searchMethod);

  return connectionConfig.assistantClient.createAssistantKnowledge(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 *
 * @param assistantId
 * @param webhookId
 * @param method
 * @param endpoint
 * @param headers
 * @param events
 * @param retryOnStatus
 * @param maxRetries
 * @param timeout
 * @param cb
 * @param authHeader
 * @param description
 * @returns
 */
export function UpdateAssistantKnowledge(
  connectionConfig: ConnectionConfig,
  id: string,
  assistantId: string,
  knowledgeId: string,
  config: {
    searchMethod: "semantic" | "fullText" | "hybrid" | "invertedIndex";
    rerankingEnable: boolean;
    rerankerModelProvider?: string;
    rerankerModelProviderId?: string;
    rerankerModelOptions?: Metadata[];
    topK: number;
    scoreThreshold: number;
  },
  cb: (
    err: ServiceError | null,
    response: GetAssistantKnowledgeResponse | null
  ) => void,
  authHeader: UserAuthInfo
) {
  const req = new UpdateAssistantKnowledgeRequest();
  req.setKnowledgeid(knowledgeId);
  req.setAssistantid(assistantId);
  req.setId(id);
  if (config.rerankingEnable) {
    req.setRerankerenable(config.rerankingEnable);
    req.setRerankermodelproviderid(config.rerankerModelProviderId!);
    req.setRerankermodelprovidername(config.rerankerModelProvider!);
    req.setAssistantknowledgererankeroptionsList(config.rerankerModelOptions!);
  }
  req.setTopk(config.topK);
  req.setScorethreshold(config.scoreThreshold);
  req.setRetrievalmethod(config.searchMethod);

  return connectionConfig.assistantClient.updateAssistantKnowledge(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 *
 * @param assistantId
 * @param webhookId
 * @param cb
 * @param authHeader
 * @returns
 */
export function GetAssistantKnowledge(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  ToolId: string,
  cb: (
    err: ServiceError | null,
    response: GetAssistantKnowledgeResponse | null
  ) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new GetAssistantKnowledgeRequest();
  req.setAssistantid(assistantId);
  req.setId(ToolId);
  return connectionConfig.assistantClient.getAssistantKnowledge(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 *
 * @param assistantId
 * @param ToolId
 * @param cb
 * @param authHeader
 * @returns
 */
export function DeleteAssistantKnowledge(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  knowledgeId: string,
  cb: (
    err: ServiceError | null,
    response: GetAssistantKnowledgeResponse | null
  ) => void,
  authHeader: UserAuthInfo
) {
  const req = new DeleteAssistantKnowledgeRequest();
  req.setAssistantid(assistantId);
  req.setId(knowledgeId);
  return connectionConfig.assistantClient.deleteAssistantKnowledge(
    req,
    WithAuthContext(authHeader),
    cb
  );
}
/**
 *
 * @param clientCfg
 * @param request
 * @returns
 */
export function GetAssistantToolLog(
  clientCfg: ConnectionConfig,
  request: GetAssistantToolLogRequest,
  auth?: ClientAuthInfo | UserAuthInfo
): Promise<GetAssistantToolLogResponse> {
  return new Promise((resolve, reject) => {
    clientCfg.assistantClient.getAssistantToolLog(
      request,
      WithAuthContext(clientCfg.auth || auth),
      (
        err: ServiceError | null,
        response: GetAssistantToolLogResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

/**
 *
 * @param clientCfg
 * @param request
 * @returns
 */
export function GetAllAssistantToolLog(
  clientCfg: ConnectionConfig,
  request: GetAllAssistantToolLogRequest,
  auth?: ClientAuthInfo | UserAuthInfo
): Promise<GetAllAssistantToolLogResponse> {
  return new Promise((resolve, reject) => {
    clientCfg.assistantClient.getAllAssistantToolLog(
      request,
      WithAuthContext(clientCfg.auth || auth),
      (
        err: ServiceError | null,
        response: GetAllAssistantToolLogResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}
