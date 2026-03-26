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
import { BidirectionalStream, ServiceError } from "@/rapida/clients/types";
import { Criteria, Paginate } from "@/rapida/clients/protos/common_pb";
import {
  CreateConversationMetricResponse,
  CreateConversationMetricRequest,
  AssistantTalkRequest,
  AssistantTalkResponse,
} from "./protos/talk-api_pb";
import {
  CreateMessageMetricResponse,
  CreateMessageMetricRequest,
} from "./protos/talk-api_pb";
import { ConnectionConfig } from "@/rapida/types/connection-config";

/**
 *
 * @param authHeader
 * @returns
 */

export function AssistantTalk(
  connectionConfig: ConnectionConfig,
  authHeader?: UserAuthInfo | ClientAuthInfo
): BidirectionalStream<AssistantTalkRequest, AssistantTalkResponse> {
  return connectionConfig.streamClient.assistantTalk(
    WithAuthContext(connectionConfig.auth || authHeader)
  );
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
  req: CreateMessageMetricRequest,
  authHeader?: ClientAuthInfo | UserAuthInfo
): Promise<CreateMessageMetricResponse> {
  return new Promise((resolve, reject) => {
    connectionConfig.conversationClient.createMessageMetric(
      req,
      WithAuthContext(connectionConfig.auth || authHeader),
      (
        err: ServiceError | null,
        response: CreateMessageMetricResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
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
  req: CreateConversationMetricRequest,
  authHeader?: ClientAuthInfo | UserAuthInfo
): Promise<CreateConversationMetricResponse> {
  return new Promise((resolve, reject) => {
    connectionConfig.conversationClient.createConversationMetric(
      req,
      WithAuthContext(connectionConfig.auth || authHeader),
      (
        err: ServiceError | null,
        response: CreateConversationMetricResponse | null
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
  criteria: { key: string; value: string }[],
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
    req.addCriterias(ctr);
  });
  paginate.setPage(page);
  paginate.setPagesize(pageSize);
  req.setPaginate(paginate);
  connectionConfig.conversationClient.getAllAssistantConversation(
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
  connectionConfig.conversationClient.getAllConversationMessage(
    req,
    WithAuthContext(authHeader),
    cb
  );
}
