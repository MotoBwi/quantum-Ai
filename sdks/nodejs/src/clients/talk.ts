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
  GetAllConversationMessageRequest,
  GetAllConversationMessageResponse,
  GetAllAssistantConversationResponse,
  GetAllAssistantConversationRequest,
  Metric,
} from "@/rapida/clients/protos/common_pb";
import {
  ClientAuthInfo,
  UserAuthInfo,
  WithAuthContext,
} from "@/rapida/clients";
import { Criteria, Paginate, Message } from "@/rapida/clients/protos/common_pb";
import {
  CreateConversationMetricResponse,
  CreateConversationMetricRequest,
} from "./protos/talk-api_pb";
import {
  CreateMessageMetricResponse,
  CreateMessageMetricRequest,
} from "./protos/talk-api_pb";
import { ConnectionConfig } from "@/rapida/connections/connection-config";
import { TalkServiceClient } from "@/rapida/clients/protos/talk-api_grpc_pb";
import { ServiceError } from "@grpc/grpc-js";

/**
 *
 * @param authHeader
 * @returns
 */
export function AssistantTalk(
  conversationStreamClient: TalkServiceClient,
  authHeader: UserAuthInfo | ClientAuthInfo
) {
  return conversationStreamClient.assistantTalk(WithAuthContext(authHeader));
}

/**
 *
 * @param conversationClient
 * @param assistantId
 * @param assistantConversationId
 * @param assistantConversationMessageId
 * @param cb
 * @param authHeader
 */
export function CreateMessageMetric(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  assistantConversationId: string,
  messageId: string,
  metrics: { name: string; value: string; description: string }[]
): Promise<CreateMessageMetricResponse> {
  return new Promise((resolve, reject) => {
    const req = new CreateMessageMetricRequest();
    req.setAssistantid(assistantId);
    req.setAssistantconversationid(assistantConversationId);
    req.setMessageid(messageId);
    for (var mtr of metrics) {
      const _m = new Metric();
      _m.setName(mtr.name);
      _m.setValue(mtr.value);
      _m.setDescription(mtr.description);
      req.addMetrics(_m);
    }
    connectionConfig.conversationClient.createMessageMetric(
      req,
      WithAuthContext(connectionConfig.auth),
      (err: ServiceError | null, uvcr: CreateMessageMetricResponse) => {
        if (err) reject(err);
        else resolve(uvcr!);
      }
    );
  });
}

/**
 *
 * @param conversationClient
 * @param assistantId
 * @param assistantConversationId
 * @param metrics
 * @param cb
 * @param authHeader
 */
export function CreateConversationMetric(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  assistantConversationId: string,
  metrics: { name: string; value: string; description: string }[]
): Promise<CreateMessageMetricResponse> {
  return new Promise((resolve, reject) => {
    const req = new CreateConversationMetricRequest();
    req.setAssistantid(assistantId);
    req.setAssistantconversationid(assistantConversationId);
    for (var mtr of metrics) {
      const _m = new Metric();
      _m.setName(mtr.name);
      _m.setValue(mtr.value);
      _m.setDescription(mtr.description);
      req.addMetrics(_m);
    }
    connectionConfig.conversationClient.createConversationMetric(
      req,
      WithAuthContext(connectionConfig.auth),
      (
        err: ServiceError | null,
        uvcr: CreateConversationMetricResponse | null
      ) => {
        if (err) reject(err);
        else resolve(uvcr!);
      }
    );
  });
}

/**
 *
 * @param assistantId
 * @param page
 * @param pageSize
 * @param criteria
 * @param cb
 * @param authHeader
 */
export function GetAllAssistantConversation(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string }[]
): Promise<GetAllAssistantConversationResponse> {
  return new Promise((resolve, reject) => {
    const req = new GetAllAssistantConversationRequest();
    req.setAssistantid(assistantId);
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
    connectionConfig.conversationClient.getAllAssistantConversation(
      req,
      WithAuthContext(connectionConfig.auth),
      (
        err: ServiceError | null,
        uvcr: GetAllAssistantConversationResponse | null
      ) => {
        if (err) reject(err);
        else resolve(uvcr!);
      }
    );
  });
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
  criteria: { key: string; value: string }[]
): Promise<GetAllConversationMessageResponse> {
  return new Promise((resolve, reject) => {
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
    connectionConfig.conversationClient.getAllConversationMessage(
      req,
      WithAuthContext(connectionConfig.auth),
      (
        err: ServiceError | null,
        uvcr: GetAllConversationMessageResponse | null
      ) => {
        if (err) reject(err);
        else resolve(uvcr!);
      }
    );
  });
}
