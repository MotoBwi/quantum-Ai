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
 *  Utility functions for working with gRPC metadata in Rapida applications.
 */

import {
  HEADER_ENVIRONMENT_KEY,
  HEADER_SOURCE_KEY,
  HEADER_REGION_KEY,
  HEADER_API_KEY,
  HEADER_AUTH_ID,
  HEADER_PROJECT_ID,
  HEADER_USER_AGENT,
  HEADER_LANGUAGE,
  HEADER_PLATFORM,
  HEADER_SCREEN_WIDTH,
  HEADER_SCREEN_HEIGHT,
  HEADER_WINDOW_WIDTH,
  HEADER_WINDOW_HEIGHT,
  HEADER_TIMEZONE,
  HEADER_COLOR_DEPTH,
  HEADER_DEVICE_MEMORY,
  HEADER_HARDWARE_CONCURRENCY,
  HEADER_CONNECTION_TYPE,
  HEADER_CONNECTION_EFFECTIVE_TYPE,
  HEADER_COOKIES_ENABLED,
  HEADER_DO_NOT_TRACK,
  HEADER_REFERRER,
  HEADER_REMOTE_URL,
  HEADER_LATITUDE,
  HEADER_LONGITUDE,
} from "@/rapida/utils/rapida_header";
import { ALL_REGION } from "@/rapida/utils/rapida_region";
import { RapidaSource } from "@/rapida/utils/rapida_source";
import { Metadata } from "@grpc/grpc-js";
import { Error as APIError } from "@/rapida/clients/protos/common_pb";

/**
 * Configures gRPC metadata with platform-specific and environment-specific headers.
 *
 * @param il - The gRPC metadata to configure.
 * @returns The configured gRPC metadata.
 */
export const WithPlatform = (il: Metadata): Metadata => {
  // Set the source header based on the platform
  // Set the region header to 'all' by default
  il.set(HEADER_REGION_KEY, ALL_REGION);

  return il;
};

/**
 * Configures gRPC metadata with authentication context headers.
 *
 * @param authHeader - A record of authentication headers to add.
 * @returns The configured gRPC metadata with authentication headers.
 */
export const WithAuthContext = (
  authHeader?: ClientAuthInfo | UserAuthInfo
): Metadata => {
  const metadata = WithClientContext(WithPlatform(new Metadata()));
  if (authHeader) {
    for (const [key, value] of Object.entries(authHeader)) {
      if (key === "Client") {
        // Handle nested Client object
        for (const [clientKey, clientValue] of Object.entries(value)) {
          metadata.set(clientKey, clientValue as string);
        }
      } else {
        metadata.set(key, value);
      }
    }
  }
  return metadata;
};
/**
 * an client information that will help to create an authentication token and header informatioan
 */
export interface UserAuthInfo {
  authorization: string;
  [HEADER_AUTH_ID]: string;
  [HEADER_PROJECT_ID]?: string;
  Client?: Partial<ClientInfo>;
}

export interface ClientAuthInfo {
  [HEADER_API_KEY]: string;
  [HEADER_AUTH_ID]?: string;
  Client?: Partial<ClientInfo>;
}

interface ClientInfo {
  [HEADER_SOURCE_KEY]?: RapidaSource;
  [HEADER_USER_AGENT]?: string;
  [HEADER_LANGUAGE]?: string;
  [HEADER_PLATFORM]?: string;
  [HEADER_SCREEN_WIDTH]?: number;
  [HEADER_SCREEN_HEIGHT]?: number;
  [HEADER_WINDOW_WIDTH]?: number;
  [HEADER_WINDOW_HEIGHT]?: number;
  [HEADER_TIMEZONE]?: string;
  [HEADER_COLOR_DEPTH]?: number;
  [HEADER_DEVICE_MEMORY]?: number;
  [HEADER_HARDWARE_CONCURRENCY]?: number;
  [HEADER_CONNECTION_TYPE]?: string;
  [HEADER_CONNECTION_EFFECTIVE_TYPE]?: string;
  [HEADER_COOKIES_ENABLED]?: boolean;
  [HEADER_DO_NOT_TRACK]?: string | null;
  [HEADER_REFERRER]?: string;
  [HEADER_REMOTE_URL]?: string;
  [HEADER_LATITUDE]?: number;
  [HEADER_LONGITUDE]?: number;
}
/**
 * Retrieves client information from the browser.
 *
 * This function gathers various details about the client's device and browser,
 * including screen dimensions, user agent, language, platform, and more.
 * It also attempts to get the geolocation if available and permitted.
 *
 * @returns {ClientInfo} A promise that resolves to an object containing client information.
 */
export const getClientInfo = (
  additionalInfo: Partial<ClientInfo> = {}
): ClientInfo => {
  const baseInfo: ClientInfo = {
    [HEADER_USER_AGENT]: `Node.js/${process.version}`,
    [HEADER_LANGUAGE]: process.env.LANG || "unknown",
    [HEADER_PLATFORM]: process.platform,
    [HEADER_TIMEZONE]: Intl.DateTimeFormat().resolvedOptions().timeZone,
    [HEADER_CONNECTION_TYPE]: undefined,
    [HEADER_CONNECTION_EFFECTIVE_TYPE]: undefined,
    [HEADER_DO_NOT_TRACK]: undefined,
    ...additionalInfo,
  };

  return baseInfo;
};

/**
 * Enhances gRPC metadata with client context information.
 *
 * This function takes an optional gRPC metadata object and enriches it
 * with client information obtained from getClientInfo(). It iterates
 * through the client info and sets each non-undefined value in the
 * metadata object.
 *
 * @param {Metadata} metadata - Optional gRPC metadata object to enhance.
 * @returns {Metadata} The enhanced metadata object with client context.
 */
export const WithClientContext = (
  metadata: Metadata = new Metadata()
): Metadata => {
  const clientInfo = getClientInfo();

  for (const [key, value] of Object.entries(clientInfo)) {
    if (value !== undefined) {
      metadata.set(key, String(value));
    }
  }
  return metadata;
};

/**
 *
 * @param response
 * @returns
 */
export function handleListResponse<T, U>(
  response: T & {
    getSuccess(): boolean;
    getError(): APIError | undefined;
    getDataList(): U[];
  }
): U[] {
  if (!response.getSuccess()) {
    const error = response.getError();
    throw new Error(error ? error.getHumanmessage() : "Unknown error occurred");
  }
  return response.getDataList();
}

/**
 *
 * @param response
 * @returns
 */
export function handleSingleResponse<T, U>(
  response: T & {
    getSuccess(): boolean;
    getError(): APIError | undefined;
    getData(): U;
  }
): U {
  if (!response.getSuccess()) {
    const error = response.getError();
    throw new Error(error ? error.getHumanmessage() : "Unknown error occurred");
  }
  if (response.getData()) return response.getData();
  throw new Error("Empty data returned");
}
