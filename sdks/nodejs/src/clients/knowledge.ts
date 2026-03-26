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
  // NOTE: Content type not available in common_pb proto definitions
  // Content,
  Criteria,
  Paginate,
} from "@/rapida/clients/protos/common_pb";
import {
  UserAuthInfo,
  ClientAuthInfo,
  WithAuthContext,
} from "@/rapida/clients";
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
  GetAllKnowledgeRequest,
  GetAllKnowledgeResponse,
  GetKnowledgeRequest,
  GetKnowledgeResponse,
  UpdateKnowledgeDetailRequest,
  UpdateKnowledgeDocumentSegmentRequest,
} from "@/rapida/clients/protos/knowledge-api_pb";
import { DeleteKnowledgeDocumentSegmentRequest } from "./protos/knowledge-api_pb";
import {
  RapidaDocumentPreProcessing,
  RapidaDocumentSource,
  RapidaDocumentType,
} from "@/rapida/utils/rapida_document";
import { ProviderConfig } from "@/rapida/utils";
import { ConnectionConfig } from "@/rapida/connections/connection-config";
import { ServiceError } from "@grpc/grpc-js";

/**
 * Creates a new knowledge entry.
 *
 * @param config - The connection configuration.
 * @param provider - The provider configuration.
 * @param name - The name of the knowledge.
 * @param description - A description of the knowledge.
 * @param tags - A list of tags associated with the knowledge.
 * @param authHeader - Authentication headers for the request.
 * @returns Promise<CreateKnowledgeResponse> - The response containing the created knowledge.
 */
export function CreateKnowledge(
  config: ConnectionConfig,
  provider: ProviderConfig,
  name: string,
  description: string,
  tags: string[]
): Promise<CreateKnowledgeResponse> {
  return new Promise((resolve, reject) => {
    const req = new CreateKnowledgeRequest();
    // NOTE: setEmbeddingmodelproviderid method doesn't exist on CreateKnowledgeRequest
    // Only setEmbeddingmodelprovidername is available
    // req.setEmbeddingmodelproviderid(provider.providerId);
    req.setEmbeddingmodelprovidername(provider.provider);
    req.setKnowledgeembeddingmodeloptionsList(provider.parameters);
    req.setName(name);
    req.setDescription(description);
    req.setTagsList(tags);
    config.knowledgeClient.createKnowledge(
      req,
      WithAuthContext(config.auth),
      (err: ServiceError, response: CreateKnowledgeResponse) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}

/**
 * Retrieves a knowledge base by ID.
 *
 * @param config - The connection configuration.
 * @param knowledgeBaseId - The ID of the knowledge base to retrieve.
 * @param authHeader - Authentication headers for the request.
 * @returns Promise<GetKnowledgeResponse> - The response containing the knowledge base.
 */
export function GetKnowledgeBase(
  config: ConnectionConfig,
  knowledgeBaseId: string
): Promise<GetKnowledgeResponse> {
  return new Promise((resolve, reject) => {
    const req = new GetKnowledgeRequest();
    req.setId(knowledgeBaseId);
    config.knowledgeClient.getKnowledge(
      req,
      WithAuthContext(config.auth),
      (err: ServiceError, response: GetKnowledgeResponse) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}

/**
 * Retrieves all knowledge bases with pagination and filtering.
 *
 * @param config - The connection configuration.
 * @param page - The page number to retrieve.
 * @param pageSize - The number of items per page.
 * @param criteria - A list of criteria for filtering results.
 * @param authHeader - Authentication headers for the request.
 * @returns Promise<GetAllKnowledgeResponse> - The response containing all knowledge bases.
 */
export function GetAllKnowledgeBases(
  config: ConnectionConfig,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string; logic: string }[]
): Promise<GetAllKnowledgeResponse> {
  return new Promise((resolve, reject) => {
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

    config.knowledgeClient.getAllKnowledge(
      req,
      WithAuthContext(config.auth),
      (err: ServiceError, response: GetAllKnowledgeResponse) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}

/**
 * Creates a new knowledge document.
 *
 * @param config - The connection configuration.
 * @param knowledgeId - The ID of the knowledge to associate the document with.
 * @param documentSource - The source of the document.
 * @param datasource - The data source for the document.
 * @param documentType - The type of the document.
 * @param preProcessor - The pre-processing method to use.
 * @param contents - An array of content to include in the document.
 * @param separator - The separator used in custom processing.
 * @param maxchunksize - The maximum chunk size for document processing.
 * @param chunkoverlap - The overlap between chunks.
 * @param authHeader - Authentication headers for the request.
 * @returns Promise<CreateKnowledgeDocumentResponse> - The response containing the created document.
 */

export function CreateKnowledgeDocument(
  config: ConnectionConfig,
  knowledgeId: string,
  documentSource: RapidaDocumentSource,
  datasource: string,
  documentType: RapidaDocumentType,
  preProcessor: RapidaDocumentPreProcessing,
  contents: Array<any>,  // NOTE: Content type not available
  separator: string,
  maxchunksize: number,
  chunkoverlap: number
): Promise<CreateKnowledgeDocumentResponse> {
  return new Promise((resolve, reject) => {
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
    req.setPreprocess(CreateKnowledgeDocumentRequest.PRE_PROCESS.AUTOMATIC);
    req.setContentsList(contents);

    if (preProcessor === RapidaDocumentPreProcessing.CUSTOM) {
      req.setSeparator(separator);
      req.setMaxchunksize(maxchunksize);
      req.setChunkoverlap(chunkoverlap);
    }

    config.knowledgeClient.createKnowledgeDocument(
      req,
      WithAuthContext(config.auth),
      (err: ServiceError, response: CreateKnowledgeDocumentResponse) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}

/**
 * Retrieves all documents associated with a knowledge base.
 *
 * @param config - The connection configuration.
 * @param knowledgeId - The ID of the knowledge base.
 * @param page - The page number to retrieve.
 * @param pageSize - The number of items per page.
 * @param criteria - A list of criteria for filtering results.
 * @param authHeader - Authentication headers for the request.
 * @returns Promise<GetAllKnowledgeDocumentResponse> - The response containing all documents.
 */
export function GetAllKnowledgeDocument(
  config: ConnectionConfig,
  knowledgeId: string,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string }[]
): Promise<GetAllKnowledgeDocumentResponse> {
  return new Promise((resolve, reject) => {
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

    config.knowledgeClient.getAllKnowledgeDocument(
      req,
      WithAuthContext(config.auth),
      (err: ServiceError, response: GetAllKnowledgeDocumentResponse) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}

/**
 * Retrieves all segments of documents associated with a knowledge base.
 *
 * @param config - The connection configuration.
 * @param knowledgeId - The ID of the knowledge base.
 * @param page - The page number to retrieve.
 * @param pageSize - The number of items per page.
 * @param criteria - A list of criteria for filtering results.
 * @param authHeader - Authentication headers for the request.
 * @returns Promise<GetAllKnowledgeDocumentSegmentResponse> - The response containing all document segments.
 */
export function GetAllKnowledgeDocumentSegment(
  config: ConnectionConfig,
  knowledgeId: string,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string }[]
): Promise<GetAllKnowledgeDocumentSegmentResponse> {
  return new Promise((resolve, reject) => {
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

    config.knowledgeClient.getAllKnowledgeDocumentSegment(
      req,
      WithAuthContext(config.auth),
      (err: ServiceError, response: GetAllKnowledgeDocumentSegmentResponse) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}

/**
 * Adds tags to a knowledge base.
 *
 * @param config - The connection configuration.
 * @param knowledgeId - The ID of the knowledge base to tag.
 * @param tags - A list of tags to add.
 * @param authHeader - Authentication headers for the request.
 * @returns Promise<GetKnowledgeResponse> - The response containing the updated knowledge base.
 */
export function CreateKnowledgeTag(
  config: ConnectionConfig,
  knowledgeId: string,
  tags: string[]
): Promise<GetKnowledgeResponse> {
  return new Promise((resolve, reject) => {
    const req = new CreateKnowledgeTagRequest();
    req.setTagsList(tags);
    req.setKnowledgeid(knowledgeId);

    config.knowledgeClient.createKnowledgeTag(
      req,
      WithAuthContext(config.auth),
      (err: ServiceError, response: GetKnowledgeResponse) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}

/**
 * Updates details of an existing knowledge base.
 *
 * @param config - The connection configuration.
 * @param knowledgeId - The ID of the knowledge base to update.
 * @param name - The new name of the knowledge base.
 * @param description - The new description of the knowledge base.
 * @param authHeader - Authentication headers for the request.
 * @returns Promise<GetKnowledgeResponse> - The response containing the updated knowledge base.
 */
export function UpdateKnowledgeDetail(
  config: ConnectionConfig,
  knowledgeId: string,
  name: string,
  description: string
): Promise<GetKnowledgeResponse> {
  return new Promise((resolve, reject) => {
    const req = new UpdateKnowledgeDetailRequest();
    req.setKnowledgeid(knowledgeId);
    req.setName(name);
    req.setDescription(description);

    config.knowledgeClient.updateKnowledgeDetail(
      req,
      WithAuthContext(config.auth),
      (err: ServiceError, response: GetKnowledgeResponse) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}

/**
 * Deletes a specific segment from a knowledge document.
 *
 * @param config - The connection configuration.
 * @param documentId - The ID of the document.
 * @param index - The index of the segment to delete.
 * @param reason - The reason for deletion.
 * @param authHeader - Authentication headers for the request.
 * @returns Promise<BaseResponse> - The base response indicating success or failure.
 */
export function DeleteKnowledgeDocumentSegment(
  config: ConnectionConfig,
  documentId: string,
  index: string,
  reason: string
): Promise<BaseResponse> {
  return new Promise((resolve, reject) => {
    const req = new DeleteKnowledgeDocumentSegmentRequest();
    req.setDocumentid(documentId);
    req.setReason(reason);
    req.setIndex(index);
    config.knowledgeClient.deleteKnowledgeDocumentSegment(
      req,
      WithAuthContext(config.auth),
      (err: ServiceError, response: BaseResponse) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}

/**
 * Updates metadata for a specific segment of a knowledge document.
 *
 * @param config - The connection configuration.
 * @param documentId - The ID of the document.
 * @param index - The index of the segment to update.
 * @param organizationsList - List of organizations associated with the segment.
 * @param datesList - List of dates associated with the segment.
 * @param productsList - List of products associated with the segment.
 * @param eventsList - List of events associated with the segment.
 * @param peopleList - List of people associated with the segment.
 * @param timesList - List of times associated with the segment.
 * @param quantitiesList - List of quantities associated with the segment.
 * @param locationsList - List of locations associated with the segment.
 * @param industriesList - List of industries associated with the segment.
 * @param documentName - The name of the document.
 * @param authHeader - Authentication headers for the request.
 * @returns Promise<BaseResponse> - The base response indicating success or failure.
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
  documentName: string
): Promise<BaseResponse> {
  return new Promise((resolve, reject) => {
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
    config.knowledgeClient.updateKnowledgeDocumentSegment(
      req,
      WithAuthContext(config.auth),
      (err: ServiceError, response: BaseResponse) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}
