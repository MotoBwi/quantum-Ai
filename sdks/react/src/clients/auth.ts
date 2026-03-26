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
 *  This module provides functions for user authentication and management using gRPC.
 *  It includes operations such as user authentication, registration, password management,
 *  and social authentication with Google, LinkedIn, and GitHub.
 */

import {
  AuthenticateRequest,
  AuthenticateResponse,
  RegisterUserRequest,
  ForgotPasswordRequest,
  VerifyTokenRequest,
  VerifyTokenResponse,
  AuthorizeRequest,
  GetUserResponse,
  GetUserRequest,
  UpdateUserResponse,
  UpdateUserRequest,
  ForgotPasswordResponse,
  SocialAuthenticationRequest,
  CreatePasswordRequest,
  CreatePasswordResponse,
  GetAllUserRequest,
  GetAllUserResponse,
  ChangePasswordRequest,
  ChangePasswordResponse,
} from "@/rapida/clients/protos/web-api_pb";
import { Criteria, Paginate } from "@/rapida/clients/protos/common_pb";
import { AuthenticationServiceClient } from "@/rapida/clients/protos/web-api_pb_service";
import { ServiceError } from "@/rapida/clients/types";
import { ConnectionConfig } from "../types/connection-config";
import {
  UserAuthInfo,
  ClientAuthInfo,
  WithAuthContext,
} from "@/rapida/clients";

/**
 * Authenticate a user with email and password.
 *
 * @param email - The email address of the user.
 * @param password - The password of the user.
 * @param cb - Callback function to handle the response.
 */
export function AuthenticateUser(
  config: ConnectionConfig,
  email: string,
  password: string,
  cb: (err: ServiceError | null, auth: AuthenticateResponse | null) => void
) {
  const requestObject = new AuthenticateRequest();
  requestObject.setEmail(email);
  requestObject.setPassword(password);
  return config.authenticationClient.authenticate(requestObject, cb);
}

/**
 * Authorize or reauthorize the user with headers.
 *
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 */
export function AuthorizeUser(
  config: ConnectionConfig,
  cb: (err: ServiceError | null, org: AuthenticateResponse | null) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  return config.authenticationClient.authorize(
    new AuthorizeRequest(),
    WithAuthContext(authHeader),
    cb
  );
}

/**
 * Register a new user with email, password, and name.
 *
 * @param email - The email address of the user.
 * @param password - The password for the new user.
 * @param name - The name of the new user.
 * @param cb - Callback function to handle the response.
 */
export function RegisterUser(
  config: ConnectionConfig,
  email: string,
  password: string,
  name: string,
  cb: (err: ServiceError | null, user: AuthenticateResponse | null) => void
) {
  const requestObject = new RegisterUserRequest();
  requestObject.setEmail(email);
  requestObject.setName(name);
  requestObject.setPassword(password);
  return config.authenticationClient.registerUser(requestObject, cb);
}

/**
 * Verify a token for authentication or authorization.
 *
 * @param token - The token to verify.
 * @param tokenType - The type of the token.
 * @param cb - Callback function to handle the response.
 */
export function VerifyToken(
  config: ConnectionConfig,
  token: string,
  tokenType: string,
  cb: (
    err: ServiceError | null,
    tokenResponse: VerifyTokenResponse | null
  ) => void
) {
  const requestObject = new VerifyTokenRequest();
  requestObject.setToken(token);
  requestObject.setTokentype(tokenType);
  return config.authenticationClient.verifyToken(requestObject, cb);
}

/**
 * Request a password reset for a user.
 *
 * @param email - The email address of the user.
 * @param cb - Callback function to handle the response.
 */
export function ForgotPassword(
  config: ConnectionConfig,
  email: string,
  cb: (err: ServiceError | null, fpr: ForgotPasswordResponse | null) => void
) {
  const requestObject = new ForgotPasswordRequest();
  requestObject.setEmail(email);
  return config.authenticationClient.forgotPassword(requestObject, cb);
}

/**
 * Create a new password after a password reset link.
 *
 * @param token - The token received for password reset.
 * @param password - The new password.
 * @param cb - Callback function to handle the response.
 */
export function CreatePassword(
  config: ConnectionConfig,
  token: string,
  password: string,
  cb: (err: ServiceError | null, fpr: CreatePasswordResponse | null) => void
) {
  const requestObject = new CreatePasswordRequest();
  requestObject.setToken(token);
  requestObject.setPassword(password);
  return config.authenticationClient.createPassword(requestObject, cb);
}

/**
 * Retrieve user information with authorization headers.
 *
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 */
export function GetUser(
  config: ConnectionConfig,
  cb: (err: ServiceError | null, gur: GetUserResponse | null) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  return config.authenticationClient.getUser(
    new GetUserRequest(),
    WithAuthContext(authHeader),
    cb
  );
}

/**
 * Update user information with optional name and authorization headers.
 *
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @param name - Optional new name for the user.
 */
export function UpdateUser(
  config: ConnectionConfig,
  cb: (err: ServiceError | null, uur: UpdateUserResponse | null) => void,
  authHeader: ClientAuthInfo | UserAuthInfo,
  name?: string
) {
  const requestObject = new UpdateUserRequest();
  if (name) requestObject.setName(name);
  return config.authenticationClient.updateUser(
    requestObject,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 * Retrieve all users with pagination and criteria.
 *
 * @param page - The page number for pagination.
 * @param pageSize - The number of users per page.
 * @param criteria - List of criteria to filter users.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 */
export function GetAllUser(
  config: ConnectionConfig,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string }[],
  cb: (err: ServiceError | null, uur: GetAllUserResponse | null) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new GetAllUserRequest();
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

  return config.authenticationClient.getAllUser(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 * Social authentication with Google.
 *
 * @param cb - Callback function to handle the response.
 * @param state - Optional state parameter for the authentication request.
 * @param code - Optional code parameter for the authentication request.
 */
export function Google(
  config: ConnectionConfig,
  cb: (err: ServiceError | null, uur: AuthenticateResponse | null) => void,
  state?: string,
  code?: string
) {
  const requestObject = new SocialAuthenticationRequest();
  if (state) requestObject.setState(state);
  if (code) requestObject.setCode(code);
  return config.authenticationClient.google(requestObject, cb);
}

/**
 * Social authentication with LinkedIn.
 *
 * @param cb - Callback function to handle the response.
 * @param state - Optional state parameter for the authentication request.
 * @param code - Optional code parameter for the authentication request.
 */
export function Linkedin(
  config: ConnectionConfig,
  cb: (err: ServiceError | null, uur: AuthenticateResponse | null) => void,
  state?: string,
  code?: string
) {
  const requestObject = new SocialAuthenticationRequest();
  if (state) requestObject.setState(state);
  if (code) requestObject.setCode(code);
  return config.authenticationClient.linkedin(requestObject, cb);
}

/**
 * Social authentication with GitHub.
 *
 * @param cb - Callback function to handle the response.
 * @param state - Optional state parameter for the authentication request.
 * @param code - Optional code parameter for the authentication request.
 */
export function Github(
  config: ConnectionConfig,
  cb: (err: ServiceError | null, uur: AuthenticateResponse | null) => void,
  state?: string,
  code?: string
) {
  const requestObject = new SocialAuthenticationRequest();
  if (state) requestObject.setState(state);
  if (code) requestObject.setCode(code);
  return config.authenticationClient.github(requestObject, cb);
}

/**
 *
 * @param clientCfg
 * @param request
 * @param auth
 * @returns
 */
export function ChangePassword(
  clientCfg: ConnectionConfig,
  request: ChangePasswordRequest,
  auth?: ClientAuthInfo | UserAuthInfo
): Promise<ChangePasswordResponse> {
  return new Promise((resolve, reject) => {
    clientCfg.authenticationClient.changePassword(
      request,
      WithAuthContext(clientCfg.auth || auth),
      (err: ServiceError | null, response: ChangePasswordResponse | null) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}
