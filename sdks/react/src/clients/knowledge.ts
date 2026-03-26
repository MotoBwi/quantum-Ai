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
 *  This module provides functions for interacting with the Knowledge API. It
 *  includes methods for creating, retrieving, and updating knowledge documents,
 *  knowledge bases, and knowledge tags.
 */

import {
  BaseResponse,
  Criteria,
  Paginate,
} from "@/rapida/clients/protos/common_pb";
import {
  UserAuthInfo,
  ClientAuthInfo,
  WithAuthContext,
} from "@/rapida/clients";
import { ServiceError } from "@/rapida/clients/types";
import {
  CreateKnowledgeDocumentRequest,
  CreateKnowledgeDocumentResponse,
  CreateKnowledgeRequest,
  CreateKnowledgeResponse,
  CreateKnowledgeTagRequest,
  GetAllKnowledgeDocumentRequest,
  GetAllKnowledgeDocumentResponse,
  GetAllKnowledgeDocumentSegmentRequest,
  GetAllKnowledgeDocumentSegmentResponse,
  GetAllKnowledgeLogRequest,
  GetAllKnowledgeLogResponse,
  GetAllKnowledgeRequest,
  GetAllKnowledgeResponse,
  GetKnowledgeLogRequest,
  GetKnowledgeLogResponse,
  GetKnowledgeRequest,
  GetKnowledgeResponse,
  UpdateKnowledgeDetailRequest,
  UpdateKnowledgeDocumentSegmentRequest,
} from "@/rapida/clients/protos/knowledge-api_pb";
import { DeleteKnowledgeDocumentSegmentRequest, DocumentContent } from './protos/knowledge-api_pb';
import {
  RapidaDocumentPreProcessing,
  RapidaDocumentSource,
  RapidaDocumentType,
} from "@/rapida/utils/rapida_document";
import { ConnectionConfig } from "@/rapida/types/connection-config";

/**
 * Creates a new knowledge entry.
 *
 * @param providerModelId - The ID of the provider model.
 * @param providerId - The ID of the provider.
 * @param name - The name of the knowledge.
 * @param description - A description of the knowledge.
 * @param tags - A list of tags associated with the knowledge.
 * @param authHeader - Authentication headers for the request.
 * @param cb - Callback function to handle the response.
 * @returns UnaryResponse - The gRPC response object.
 */

export function CreateKnowledge(
  connectionConfig: ConnectionConfig,
  req: CreateKnowledgeRequest,
  authHeader?: UserAuthInfo | ClientAuthInfo
): Promise<CreateKnowledgeResponse> {
  return new Promise((resolve, reject) => {
    connectionConfig.knowledgeClient.createKnowledge(
      req,
      WithAuthContext(connectionConfig.auth || authHeader),
      (err: ServiceError | null, response: CreateKnowledgeResponse | null) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

/**
 * Retrieves a knowledge base by ID.
 *
 * @param knowledgeBaseId - The ID of the knowledge base to retrieve.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
export function GetKnowledgeBase(
  config: ConnectionConfig,
  knowledgeBaseId: string,
  cb: (err: ServiceError | null, response: GetKnowledgeResponse | null) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new GetKnowledgeRequest();
  req.setId(knowledgeBaseId);
  return config.knowledgeClient.getKnowledge(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 * Retrieves all knowledge bases with pagination and filtering.
 *
 * @param page - The page number to retrieve.
 * @param pageSize - The number of items per page.
 * @param criteria - A list of criteria for filtering results.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
export function GetAllKnowledgeBases(
  config: ConnectionConfig,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string; logic: string }[],
  cb: (
    err: ServiceError | null,
    response: GetAllKnowledgeResponse | null
  ) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new GetAllKnowledgeRequest();
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

  return config.knowledgeClient.getAllKnowledge(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 * Creates a new knowledge document.
 *
 * @param knowledgeId - The ID of the knowledge to associate the document with.
 * @param documentSource - The source of the document.
 * @param datasource - The data source for the document.
 * @param preProcessor - The pre-processing method to use.
 * @param DocumentContents - An array of DocumentContent to include in the document.
 * @param separator - The separator used in custom processing.
 * @param maxchunksize - The maximum chunk size for document processing.
 * @param chunkoverlap - The overlap between chunks.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
export function CreateKnowledgeDocument(
  config: ConnectionConfig,
  knowledgeId: string,
  documentSource: RapidaDocumentSource,
  datasource: string,
  documentType: RapidaDocumentType,
  preProcessor: RapidaDocumentPreProcessing,
  DocumentContents: Array<DocumentContent>,
  separator: string,
  maxchunksize: number,
  chunkoverlap: number,
  cb: (
    err: ServiceError | null,
    response: CreateKnowledgeDocumentResponse | null
  ) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new CreateKnowledgeDocumentRequest();

  if (documentSource == RapidaDocumentSource.TOOL) {
    req.setDocumentsource(1);
  }

  if (documentSource == RapidaDocumentSource.MANUAL) {
    req.setDocumentsource(0);
  }
  req.setDocumentstructure(documentType);
  req.setKnowledgeid(knowledgeId);
  req.setDatasource(datasource);
  req.setPreprocess(CreateKnowledgeDocumentRequest.PRE_PROCESS[preProcessor]);
  req.setContentsList(DocumentContents);

  if (preProcessor === RapidaDocumentPreProcessing.CUSTOM) {
    req.setSeparator(separator);
    req.setMaxchunksize(maxchunksize);
    req.setChunkoverlap(chunkoverlap);
  }

  return config.knowledgeClient.createKnowledgeDocument(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 * Retrieves all documents associated with a knowledge base.
 *
 * @param knowledgeId - The ID of the knowledge base.
 * @param page - The page number to retrieve.
 * @param pageSize - The number of items per page.
 * @param criteria - A list of criteria for filtering results.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
export function GetAllKnowledgeDocument(
  config: ConnectionConfig,
  knowledgeId: string,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string }[],
  cb: (
    err: ServiceError | null,
    response: GetAllKnowledgeDocumentResponse | null
  ) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new GetAllKnowledgeDocumentRequest();
  req.setKnowledgeid(knowledgeId);

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

  return config.knowledgeClient.getAllKnowledgeDocument(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 * Retrieves all segments of documents associated with a knowledge base.
 *
 * @param knowledgeId - The ID of the knowledge base.
 * @param page - The page number to retrieve.
 * @param pageSize - The number of items per page.
 * @param criteria - A list of criteria for filtering results.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
export function GetAllKnowledgeDocumentSegment(
  config: ConnectionConfig,
  knowledgeId: string,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string }[],
  cb: (
    err: ServiceError | null,
    response: GetAllKnowledgeDocumentSegmentResponse | null
  ) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new GetAllKnowledgeDocumentSegmentRequest();
  req.setKnowledgeid(knowledgeId);

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

  return config.knowledgeClient.getAllKnowledgeDocumentSegment(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 * Adds tags to a knowledge base.
 *
 * @param knowledgeId - The ID of the knowledge base to tag.
 * @param tags - A list of tags to add.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
export function CreateKnowledgeTag(
  config: ConnectionConfig,
  knowledgeId: string,
  tags: string[],
  cb: (err: ServiceError | null, response: GetKnowledgeResponse | null) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new CreateKnowledgeTagRequest();
  req.setTagsList(tags);
  req.setKnowledgeid(knowledgeId);

  return config.knowledgeClient.createKnowledgeTag(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 * Updates details of an existing knowledge base.
 *
 * @param knowledgeId - The ID of the knowledge base to update.
 * @param name - The new name of the knowledge base.
 * @param description - The new description of the knowledge base.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
export function UpdateKnowledgeDetail(
  config: ConnectionConfig,
  knowledgeId: string,
  name: string,
  description: string,
  cb: (err: ServiceError | null, response: GetKnowledgeResponse | null) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new UpdateKnowledgeDetailRequest();
  req.setKnowledgeid(knowledgeId);
  req.setName(name);
  req.setDescription(description);

  return config.knowledgeClient.updateKnowledgeDetail(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 *
 * @param documentId
 * @param index
 * @param reason
 * @param cb
 * @param authHeader
 * @returns
 */
export function DeleteKnowledgeDocumentSegment(
  config: ConnectionConfig,
  documentId: string,
  index: string,
  reason: string,
  cb: (err: ServiceError | null, response: BaseResponse | null) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new DeleteKnowledgeDocumentSegmentRequest();
  req.setDocumentid(documentId);
  req.setReason(reason);
  req.setIndex(index);
  return config.knowledgeClient.deleteKnowledgeDocumentSegment(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 *
 * @param documentId
 * @param index
 * @param organizationsList
 * @param datesList
 * @param productsList
 * @param eventsList
 * @param peopleList
 * @param timesList
 * @param quantitiesList
 * @param locationsList
 * @param industriesList
 * @param documentName
 * @param cb
 * @param authHeader
 * @returns
 */
export function UpdateKnowledgeDocumentSegment(
  config: ConnectionConfig,
  documentId: string,
  index: string,
  organizationsList: string[],
  datesList: string[],
  productsList: string[],
  eventsList: string[],
  peopleList: string[],
  timesList: string[],
  quantitiesList: string[],
  locationsList: string[],
  industriesList: string[],
  documentName: string,
  cb: (err: ServiceError | null, response: BaseResponse | null) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new UpdateKnowledgeDocumentSegmentRequest();
  req.setOrganizationsList(organizationsList);
  req.setDatesList(datesList);
  req.setProductsList(productsList);
  req.setEventsList(eventsList);
  req.setPeopleList(peopleList);
  req.setTimesList(timesList);
  req.setQuantitiesList(quantitiesList);
  req.setLocationsList(locationsList);
  req.setIndustriesList(industriesList);
  req.setDocumentname(documentName);
  req.setDocumentid(documentId);
  req.setIndex(index);
  return config.knowledgeClient.updateKnowledgeDocumentSegment(
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
export function GetKnowledgeLog(
  clientCfg: ConnectionConfig,
  request: GetKnowledgeLogRequest,
  auth?: ClientAuthInfo | UserAuthInfo
): Promise<GetKnowledgeLogResponse> {
  return new Promise((resolve, reject) => {
    clientCfg.knowledgeClient.getKnowledgeLog(
      request,
      WithAuthContext(clientCfg.auth || auth),
      (err: ServiceError | null, response: GetKnowledgeLogResponse | null) => {
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
export function GetAllKnowledgeLog(
  clientCfg: ConnectionConfig,
  request: GetAllKnowledgeLogRequest,
  auth?: ClientAuthInfo | UserAuthInfo
): Promise<GetAllKnowledgeLogResponse> {
  return new Promise((resolve, reject) => {
    clientCfg.knowledgeClient.getAllKnowledgeLog(
      request,
      WithAuthContext(clientCfg.auth || auth),
      (
        err: ServiceError | null,
        response: GetAllKnowledgeLogResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}
