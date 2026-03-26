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
  UserAuthInfo,
  ClientAuthInfo,
  WithAuthContext,
} from "@/rapida/clients";
import {
  IndexKnowledgeDocumentRequest,
  IndexKnowledgeDocumentResponse,
} from "@/rapida/clients/protos/document-api_pb";
import { ConnectionConfig } from "@/rapida/connections/connection-config";
import { ServiceError } from "@grpc/grpc-js";

/**
 * Index a document for knowledge
 *
 * @param knowledgeId - The ID of the knowledge id
 * @param knowledgeDocumentIds - A list of documents
 * @param indexType - an index type
 * @param authHeader - Authentication headers for the request.
 * @param cb - Callback function to handle the response.
 */
export function IndexKnowledgeDocument(
  client: ConnectionConfig,
  knowledgeId: string,
  knowledgeDocumentIds: string[],
  indexType: string
): Promise<IndexKnowledgeDocumentResponse> {
  return new Promise((resolve, reject) => {
    const req = new IndexKnowledgeDocumentRequest();
    req.setKnowledgedocumentidList(knowledgeDocumentIds);
    req.setKnowledgeid(knowledgeId);
    req.setIndextype(indexType);
    client.documentClient.indexKnowledgeDocument(
      req,
      WithAuthContext(client.auth),
      (
        err: ServiceError | null,
        response: IndexKnowledgeDocumentResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}
