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
 *  This module provides functions for interacting with the Endpoint API. It includes
 *  methods for endpoint management, including creation, retrieval, and configuration.
 */

import { Criteria, Paginate } from "@/rapida/clients/protos/common_pb";
import {
  GetAllEndpointRequest,
  GetAllEndpointResponse,
  CreateEndpointRequest,
  GetAllEndpointProviderModelRequest,
  UpdateEndpointVersionRequest,
  UpdateEndpointVersionResponse,
  GetEndpointRequest,
  GetEndpointResponse,
  CreateEndpointTagRequest,
  EndpointRetryConfiguration,
  EndpointCacheConfiguration,
  CreateEndpointCacheConfigurationRequest,
  CreateEndpointCacheConfigurationResponse,
  CreateEndpointResponse,
  EndpointProviderModelAttribute,
  EndpointAttribute,
  CreateEndpointProviderModelRequest,
  CreateEndpointRetryConfigurationResponse,
  CreateEndpointProviderModelResponse,
  GetAllEndpointProviderModelResponse,
  CreateEndpointRetryConfigurationRequest,
  UpdateEndpointDetailRequest,
  GetAllEndpointLogRequest,
  GetAllEndpointLogResponse,
  GetEndpointLogResponse,
  GetEndpointLogRequest,
} from "@/rapida/clients/protos/endpoint-api_pb";
import {
  UserAuthInfo,
  ClientAuthInfo,
  WithAuthContext,
} from "@/rapida/clients";
import { ServiceError } from "@/rapida/clients/types";
import { ConnectionConfig } from "@/rapida/types/connection-config";

/**
 * Retrieve all endpoints based on pagination and filtering criteria.
 *
 * @param page - The page number for pagination.
 * @param pageSize - The number of results per page.
 * @param criteria - List of filtering criteria.
 * @param authHeader - Authentication headers for the request.
 * @param cb - Callback function to handle the response.
 
 */
export function GetAllEndpoint(
  config: ConnectionConfig,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string; logic: string }[],
  cb: (
    err: ServiceError | null,
    response: GetAllEndpointResponse | null
  ) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new GetAllEndpointRequest();
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
  return config.endpointClient.getAllEndpoint(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 * Update the version of an endpoint.
 *
 * @param endpointId - The ID of the endpoint to update.
 * @param endpointProviderModelId - The ID of the endpoint provider model.
 * @param authHeader - Authentication headers for the request.
 * @param cb - Callback function to handle the response.
 
 */
export function UpdateEndpointVersion(
  config: ConnectionConfig,
  endpointId: string,
  endpointProviderModelId: string,
  authHeader: ClientAuthInfo | UserAuthInfo,
  cb: (
    err: ServiceError | null,
    response: UpdateEndpointVersionResponse | null
  ) => void
) {
  const req = new UpdateEndpointVersionRequest();
  req.setEndpointid(endpointId);
  req.setEndpointprovidermodelid(endpointProviderModelId);
  return config.endpointClient.updateEndpointVersion(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 * Retrieve all endpoint provider models for a specific endpoint.
 *
 * @param endpointId - The ID of the endpoint.
 * @param page - The page number for pagination.
 * @param pageSize - The number of results per page.
 * @param criteria - List of filtering criteria.
 * @param authHeader - Authentication headers for the request.
 * @param cb - Callback function to handle the response.
 
 */
export function GetAllEndpointProviderModel(
  config: ConnectionConfig,
  endpointId: string,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string }[],
  cb: (
    err: ServiceError | null,
    response: GetAllEndpointProviderModelResponse | null
  ) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new GetAllEndpointProviderModelRequest();
  req.setEndpointid(endpointId);
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
  return config.endpointClient.getAllEndpointProviderModel(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 * Retrieve details of a specific endpoint.
 *
 * @param endpointId - The ID of the endpoint.
 * @param endpointProviderModelId - Optional ID of the endpoint provider model.
 * @param authHeader - Authentication headers for the request.
 * @param cb - Callback function to handle the response.
 
 */
export function GetEndpoint(
  config: ConnectionConfig,
  endpointId: string,
  endpointProviderModelId: string | null,
  authHeader: ClientAuthInfo | UserAuthInfo,
  cb: (err: ServiceError | null, response: GetEndpointResponse | null) => void
) {
  const req = new GetEndpointRequest();
  req.setId(endpointId);
  if (endpointProviderModelId) {
    req.setEndpointprovidermodelid(endpointProviderModelId);
  }
  return config.endpointClient.getEndpoint(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 * Create a new endpoint provider model.
 *
 * @param endpointId - The ID of the endpoint.
 * @param endpointProviderModel - The provider model attributes.
 * @param authHeader - Authentication headers for the request.
 * @param cb - Callback function to handle the response.
 
 */
export function CreateEndpointProviderModel(
  config: ConnectionConfig,
  endpointId: string,
  endpointProviderModel: EndpointProviderModelAttribute,
  authHeader: ClientAuthInfo | UserAuthInfo,
  cb: (
    err: ServiceError | null,
    response: CreateEndpointProviderModelResponse | null
  ) => void
) {
  const req = new CreateEndpointProviderModelRequest();
  req.setEndpointid(endpointId);
  req.setEndpointprovidermodelattribute(endpointProviderModel);
  return config.endpointClient.createEndpointProviderModel(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 * Create a new endpoint with specified configurations.
 *
 * @param endpointProviderModel - The provider model attributes.
 * @param endpointAttributes - The attributes of the endpoint.
 * @param retryConfig - Optional retry configuration.
 * @param cacheConfig - Optional cache configuration.
 * @param tags - List of tags to associate with the endpoint.
 * @param authHeader - Authentication headers for the request.
 * @param cb - Callback function to handle the response.
 
 */
export function CreateEndpoint(
  config: ConnectionConfig,
  endpointProviderModel: EndpointProviderModelAttribute,
  endpointAttributes: EndpointAttribute,
  tags: string[],
  authHeader: ClientAuthInfo | UserAuthInfo,
  cb: (
    err: ServiceError | null,
    response: CreateEndpointResponse | null
  ) => void,
  retryConfig?: EndpointRetryConfiguration,
  cacheConfig?: EndpointCacheConfiguration
) {
  const req = new CreateEndpointRequest();
  req.setEndpointattribute(endpointAttributes);
  req.setEndpointprovidermodelattribute(endpointProviderModel);
  if (cacheConfig) req.setCacheconfiguration(cacheConfig);
  if (retryConfig) req.setRetryconfiguration(retryConfig);
  req.setTagsList(tags);
  return config.endpointClient.createEndpoint(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 * Add tags to an existing endpoint.
 *
 * @param endpointId - The ID of the endpoint.
 * @param tags - List of tags to add.
 * @param authHeader - Authentication headers for the request.
 * @param cb - Callback function to handle the response.
 
 */
export function CreateEndpointTag(
  config: ConnectionConfig,
  endpointId: string,
  tags: string[],
  authHeader: ClientAuthInfo | UserAuthInfo,
  cb: (err: ServiceError | null, response: GetEndpointResponse | null) => void
) {
  const req = new CreateEndpointTagRequest();
  req.setTagsList(tags);
  req.setEndpointid(endpointId);
  return config.endpointClient.createEndpointTag(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 * Update the details of an endpoint.
 *
 * @param endpointId - The ID of the endpoint to update.
 * @param name - The new name for the endpoint.
 * @param description - The new description for the endpoint.
 * @param authHeader - Authentication headers for the request.
 * @param cb - Callback function to handle the response.
 
 */
export function UpdateEndpointDetail(
  config: ConnectionConfig,
  endpointId: string,
  name: string,
  description: string,
  authHeader: ClientAuthInfo | UserAuthInfo,
  cb: (err: ServiceError | null, response: GetEndpointResponse | null) => void
) {
  const req = new UpdateEndpointDetailRequest();
  req.setName(name);
  req.setDescription(description);
  req.setEndpointid(endpointId);
  return config.endpointClient.updateEndpointDetail(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 * Create a retry configuration for an endpoint.
 *
 * @param endpointId - The ID of the endpoint.
 * @param retryType - The type of retry configuration.
 * @param maxAttempts - The maximum number of retry attempts.
 * @param delaySeconds - The delay between retry attempts in seconds.
 * @param exponentialBackoff - Whether to use exponential backoff.
 * @param retryables - List of error codes that should trigger a retry.
 * @param authHeader - Authentication headers for the request.
 * @param cb - Callback function to handle the response.
 
 */
export function CreateEndpointRetryConfiguration(
  config: ConnectionConfig,
  endpointId: string,
  retryType: string,
  maxAttempts: string,
  delaySeconds: string,
  exponentialBackoff: boolean,
  retryables: string[],
  authHeader: ClientAuthInfo | UserAuthInfo,
  cb: (
    err: ServiceError | null,
    response: CreateEndpointRetryConfigurationResponse | null
  ) => void
) {
  const request = new CreateEndpointRetryConfigurationRequest();
  const data = new EndpointRetryConfiguration();
  data.setRetryablesList(retryables);
  data.setExponentialbackoff(exponentialBackoff);
  data.setDelayseconds(delaySeconds);
  data.setMaxattempts(maxAttempts);
  data.setRetrytype(retryType);
  request.setEndpointid(endpointId);
  request.setData(data);
  return config.endpointClient.createEndpointRetryConfiguration(
    request,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 * Create a cache configuration for an endpoint.
 *
 * @param endpointId - The ID of the endpoint.
 * @param cacheType - The type of cache configuration.
 * @param expiryInterval - The cache expiry interval.
 * @param matchThreshold - The threshold for cache match.
 * @param authHeader - Authentication headers for the request.
 * @param cb - Callback function to handle the response.
 
 */
export function CreateEndpointCacheConfiguration(
  config: ConnectionConfig,
  endpointId: string,
  cacheType: string,
  expiryInterval: string,
  matchThreshold: number,
  authHeader: ClientAuthInfo | UserAuthInfo,
  cb: (
    err: ServiceError | null,
    response: CreateEndpointCacheConfigurationResponse | null
  ) => void
) {
  const request = new CreateEndpointCacheConfigurationRequest();
  const data = new EndpointCacheConfiguration();
  data.setMatchthreshold(matchThreshold);
  data.setExpiryinterval(expiryInterval);
  data.setCachetype(cacheType);
  request.setEndpointid(endpointId);
  request.setData(data);
  return config.endpointClient.createEndpointCacheConfiguration(
    request,
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
export function GetAllEndpointLog(
  config: ConnectionConfig,
  endpointId: string,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string; logic: string }[],
  cb: (
    err: ServiceError | null,
    response: GetAllEndpointLogResponse | null
  ) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new GetAllEndpointLogRequest();
  req.setEndpointid(endpointId);
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

  return config.endpointClient.getAllEndpointLog(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 *
 * @param organizationId
 * @param projectId
 * @param logId
 * @param cb
 * @param authHeader
 * @returns
 */
export function GetEndpointLog(
  config: ConnectionConfig,
  endpointId: string,
  logId: string,
  cb: (
    err: ServiceError | null,
    response: GetEndpointLogResponse | null
  ) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new GetEndpointLogRequest();
  req.setEndpointid(endpointId);
  req.setId(logId);
  return config.endpointClient.getEndpointLog(
    req,
    WithAuthContext(authHeader),
    cb
  );
}
