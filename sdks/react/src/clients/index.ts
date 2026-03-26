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
import { grpc } from "@improbable-eng/grpc-web";
import { ALL_REGION } from "@/rapida/utils/rapida_region";
import { RapidaSource } from "@/rapida/utils/rapida_source";

/**
 * Configures gRPC metadata with platform-specific and environment-specific headers.
 *
 * @param il - The gRPC metadata to configure.
 * @returns The configured gRPC metadata.
 */
export const WithPlatform = (il: grpc.Metadata): grpc.Metadata => {
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
): grpc.Metadata => {
  const metadata = WithClientContext(WithPlatform(new grpc.Metadata()));
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
  [HEADER_USER_AGENT]: string;
  [HEADER_LANGUAGE]: string;
  [HEADER_PLATFORM]: string;
  [HEADER_SCREEN_WIDTH]: number;
  [HEADER_SCREEN_HEIGHT]: number;
  [HEADER_WINDOW_WIDTH]: number;
  [HEADER_WINDOW_HEIGHT]: number;
  [HEADER_TIMEZONE]: string;
  [HEADER_COLOR_DEPTH]: number;
  [HEADER_DEVICE_MEMORY]?: number;
  [HEADER_HARDWARE_CONCURRENCY]?: number;
  [HEADER_CONNECTION_TYPE]?: string;
  [HEADER_CONNECTION_EFFECTIVE_TYPE]?: string;
  [HEADER_COOKIES_ENABLED]: boolean;
  [HEADER_DO_NOT_TRACK]?: string | null;
  [HEADER_REFERRER]: string;
  [HEADER_REMOTE_URL]: string;
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
  const screen_width = window.screen.width;
  const screen_height = window.screen.height;

  const baseInfo: ClientInfo = {
    [HEADER_USER_AGENT]: navigator.userAgent,
    [HEADER_LANGUAGE]: navigator.language,
    [HEADER_PLATFORM]:
      (navigator as any)?.userAgentData?.platform || navigator?.platform,
    [HEADER_SCREEN_WIDTH]: screen_width,
    [HEADER_SCREEN_HEIGHT]: screen_height,
    [HEADER_WINDOW_WIDTH]: window.innerWidth,
    [HEADER_WINDOW_HEIGHT]: window.innerHeight,
    [HEADER_TIMEZONE]: Intl.DateTimeFormat().resolvedOptions().timeZone,
    [HEADER_COLOR_DEPTH]: window.screen.colorDepth,
    [HEADER_DEVICE_MEMORY]: (navigator as any).deviceMemory,
    [HEADER_HARDWARE_CONCURRENCY]: navigator.hardwareConcurrency,
    [HEADER_CONNECTION_TYPE]: (navigator as any).connection?.type,
    [HEADER_CONNECTION_EFFECTIVE_TYPE]: (navigator as any).connection
      ?.effectiveType,
    [HEADER_COOKIES_ENABLED]: navigator.cookieEnabled,
    [HEADER_DO_NOT_TRACK]: navigator.doNotTrack,
    [HEADER_REFERRER]: document.referrer,
    [HEADER_REMOTE_URL]: window.location.href,
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
 * @param {grpc.Metadata} metadata - Optional gRPC metadata object to enhance.
 * @returns {grpc.Metadata} The enhanced metadata object with client context.
 */
export const WithClientContext = (
  metadata: grpc.Metadata = new grpc.Metadata()
): grpc.Metadata => {
  const clientInfo = getClientInfo();

  for (const [key, value] of Object.entries(clientInfo)) {
    if (value !== undefined) {
      metadata.set(key, String(value));
    }
  }
  return metadata;
};
