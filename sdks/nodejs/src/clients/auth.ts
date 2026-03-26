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
} from "@/rapida/clients/protos/web-api_pb";
import { Criteria, Paginate } from "@/rapida/clients/protos/common_pb";
import { ServiceError } from "@grpc/grpc-js";
import { ConnectionConfig } from "../connections/connection-config";
import {
  UserAuthInfo,
  ClientAuthInfo,
  WithAuthContext,
} from "@/rapida/clients";

export function AuthenticateUser(
  config: ConnectionConfig,
  email: string,
  password: string
): Promise<AuthenticateResponse> {
  return new Promise((resolve, reject) => {
    const requestObject = new AuthenticateRequest();
    requestObject.setEmail(email);
    requestObject.setPassword(password);
    config.authenticationClient.authenticate(
      requestObject,
      (err: ServiceError | null, auth: AuthenticateResponse | null) => {
        if (err) reject(err);
        else resolve(auth!);
      }
    );
  });
}

export function AuthorizeUser(
  config: ConnectionConfig,
  authHeader: ClientAuthInfo | UserAuthInfo
): Promise<AuthenticateResponse> {
  return new Promise((resolve, reject) => {
    config.authenticationClient.authorize(
      new AuthorizeRequest(),
      WithAuthContext(authHeader),
      (err: ServiceError | null, org: AuthenticateResponse | null) => {
        if (err) reject(err);
        else resolve(org!);
      }
    );
  });
}

export function RegisterUser(
  config: ConnectionConfig,
  email: string,
  password: string,
  name: string
): Promise<AuthenticateResponse> {
  return new Promise((resolve, reject) => {
    const requestObject = new RegisterUserRequest();
    requestObject.setEmail(email);
    requestObject.setName(name);
    requestObject.setPassword(password);
    config.authenticationClient.registerUser(
      requestObject,
      (err: ServiceError | null, user: AuthenticateResponse | null) => {
        if (err) reject(err);
        else resolve(user!);
      }
    );
  });
}

export function VerifyToken(
  config: ConnectionConfig,
  token: string,
  tokenType: string
): Promise<VerifyTokenResponse> {
  return new Promise((resolve, reject) => {
    const requestObject = new VerifyTokenRequest();
    requestObject.setToken(token);
    requestObject.setTokentype(tokenType);
    config.authenticationClient.verifyToken(
      requestObject,
      (err: ServiceError | null, tokenResponse: VerifyTokenResponse | null) => {
        if (err) reject(err);
        else resolve(tokenResponse!);
      }
    );
  });
}

export function ForgotPassword(
  config: ConnectionConfig,
  email: string
): Promise<ForgotPasswordResponse> {
  return new Promise((resolve, reject) => {
    const requestObject = new ForgotPasswordRequest();
    requestObject.setEmail(email);
    config.authenticationClient.forgotPassword(
      requestObject,
      (err: ServiceError | null, fpr: ForgotPasswordResponse | null) => {
        if (err) reject(err);
        else resolve(fpr!);
      }
    );
  });
}

export function CreatePassword(
  config: ConnectionConfig,
  token: string,
  password: string
): Promise<CreatePasswordResponse> {
  return new Promise((resolve, reject) => {
    const requestObject = new CreatePasswordRequest();
    requestObject.setToken(token);
    requestObject.setPassword(password);
    config.authenticationClient.createPassword(
      requestObject,
      (err: ServiceError | null, fpr: CreatePasswordResponse | null) => {
        if (err) reject(err);
        else resolve(fpr!);
      }
    );
  });
}

export function GetUser(
  config: ConnectionConfig,
  authHeader: ClientAuthInfo | UserAuthInfo
): Promise<GetUserResponse> {
  return new Promise((resolve, reject) => {
    config.authenticationClient.getUser(
      new GetUserRequest(),
      WithAuthContext(authHeader),
      (err: ServiceError | null, gur: GetUserResponse | null) => {
        if (err) reject(err);
        else resolve(gur!);
      }
    );
  });
}

export function UpdateUser(
  config: ConnectionConfig,
  authHeader: ClientAuthInfo | UserAuthInfo,
  name?: string
): Promise<UpdateUserResponse> {
  return new Promise((resolve, reject) => {
    const requestObject = new UpdateUserRequest();
    if (name) requestObject.setName(name);
    config.authenticationClient.updateUser(
      requestObject,
      WithAuthContext(authHeader),
      (err: ServiceError | null, uur: UpdateUserResponse | null) => {
        if (err) reject(err);
        else resolve(uur!);
      }
    );
  });
}

export function GetAllUser(
  config: ConnectionConfig,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string }[],
  authHeader: ClientAuthInfo | UserAuthInfo
): Promise<GetAllUserResponse> {
  return new Promise((resolve, reject) => {
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

    config.authenticationClient.getAllUser(
      req,
      WithAuthContext(authHeader),
      (err: ServiceError | null, uur: GetAllUserResponse | null) => {
        if (err) reject(err);
        else resolve(uur!);
      }
    );
  });
}

export function Google(
  config: ConnectionConfig,
  state?: string,
  code?: string
): Promise<AuthenticateResponse> {
  return new Promise((resolve, reject) => {
    const requestObject = new SocialAuthenticationRequest();
    if (state) requestObject.setState(state);
    if (code) requestObject.setCode(code);
    config.authenticationClient.google(
      requestObject,
      (err: ServiceError | null, uur: AuthenticateResponse | null) => {
        if (err) reject(err);
        else resolve(uur!);
      }
    );
  });
}

export function Linkedin(
  config: ConnectionConfig,
  state?: string,
  code?: string
): Promise<AuthenticateResponse> {
  return new Promise((resolve, reject) => {
    const requestObject = new SocialAuthenticationRequest();
    if (state) requestObject.setState(state);
    if (code) requestObject.setCode(code);
    config.authenticationClient.linkedin(
      requestObject,
      (err: ServiceError | null, uur: AuthenticateResponse | null) => {
        if (err) reject(err);
        else resolve(uur!);
      }
    );
  });
}

export function Github(
  config: ConnectionConfig,
  state?: string,
  code?: string
): Promise<AuthenticateResponse> {
  return new Promise((resolve, reject) => {
    const requestObject = new SocialAuthenticationRequest();
    if (state) requestObject.setState(state);
    if (code) requestObject.setCode(code);
    config.authenticationClient.github(
      requestObject,
      (err: ServiceError | null, uur: AuthenticateResponse | null) => {
        if (err) reject(err);
        else resolve(uur!);
      }
    );
  });
}
