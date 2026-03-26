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
 */
import { TalkServiceClient } from "@/rapida/clients/protos/talk-api_pb_service";
import { grpc } from "@improbable-eng/grpc-web";
import {
  ASSISTANT_API,
  LOCAL_ASSISTANT_API,
  WEB_API,
  LOCAL_WEB_API,
  ENDPOINT_API,
  LOCAL_ENDPOINT_API,
} from "@/rapida/constants";
import { ClientAuthInfo, getClientInfo, UserAuthInfo } from "@/rapida/clients";
import { ConnectionState } from "./connection-state";
import { AssistantServiceClient } from "@/rapida/clients/protos/assistant-api_pb_service";
import { ProjectServiceClient } from "@/rapida/clients/protos/web-api_pb_service";
import { KnowledgeServiceClient } from "@/rapida/clients/protos/knowledge-api_pb_service";
import { DocumentServiceClient } from "@/rapida/clients/protos/document-api_pb_service";
import { VaultServiceClient } from "@/rapida/clients/protos/vault-api_pb_service";
import { EndpointServiceClient } from "@/rapida/clients/protos/endpoint-api_pb_service";
import { AuditLoggingServiceClient } from "@/rapida/clients/protos/audit-logging-api_pb_service";
import { AssistantDeploymentServiceClient } from "@/rapida/clients/protos/assistant-deployment_pb_service";
import { OrganizationServiceClient } from "@/rapida/clients/protos/web-api_pb_service";
import { ConnectServiceClient } from "@/rapida/clients/protos/connect-api_pb_service";
import { AuthenticationServiceClient } from "@/rapida/clients/protos/web-api_pb_service";
import { DeploymentClient } from "@/rapida/clients/protos/invoker-api_pb_service";

import {
  DEBUGGER_SOURCE,
  SDK_SOURCE,
  WEB_PLUGIN_SOURCE,
} from "../utils/rapida_source";
import {
  HEADER_API_KEY,
  HEADER_AUTH_ID,
  HEADER_PROJECT_ID,
  HEADER_SOURCE_KEY,
} from "@/rapida/utils/rapida_header";
import { NotificationServiceClient } from "@/rapida/clients/protos/notification-api_pb_service";
import { WebRTCClient } from "@/rapida/clients/protos/webrtc_pb_service";

/**
 *
 */
interface ConnectionCallback {
  /**
   *
   * @returns
   */
  onError?: () => void;

  /**
   *
   * @returns
   */
  onConnect?: () => void;

  /**
   *
   * @returns
   */
  onDisconnect?: () => void;
}

export class ConnectionConfig {
  /**
   * an utils for debugger credentials
   * @param param0
   * @returns
   */
  static WithDebugger({
    authorization,
    userId,
    projectId,
  }: {
    authorization: string;
    userId: string;
    projectId: string;
  }): UserAuthInfo {
    return {
      authorization,
      [HEADER_AUTH_ID]: userId,
      [HEADER_PROJECT_ID]: projectId,
      Client: {
        [HEADER_SOURCE_KEY]: DEBUGGER_SOURCE,
      },
    };
  }

  /**
   *
   * @param param0
   * @returns
   */
  static WithPersonalToken({
    Authorization,
    AuthId,
    ProjectId,
  }: {
    Authorization: string;
    AuthId: string;
    ProjectId: string;
  }): UserAuthInfo {
    return {
      authorization: Authorization,
      [HEADER_AUTH_ID]: AuthId,
      [HEADER_PROJECT_ID]: ProjectId,
      Client: {
        [HEADER_SOURCE_KEY]: DEBUGGER_SOURCE,
      },
    };
  }

  /**
   *
   * @param param0
   * @returns
   */
  static WithWebpluginClient({
    ApiKey,
    UserId,
  }: {
    ApiKey: string;
    UserId?: string;
  }): ClientAuthInfo {
    return {
      [HEADER_API_KEY]: ApiKey,
      [HEADER_AUTH_ID]: UserId,
      Client: {
        [HEADER_SOURCE_KEY]: WEB_PLUGIN_SOURCE,
      },
    };
  }
  /**
   *
   * @param param0
   * @returns
   */
  static WithSDK({
    ApiKey,
    UserId,
  }: {
    ApiKey: string;
    UserId?: string;
  }): ClientAuthInfo {
    return {
      [HEADER_API_KEY]: ApiKey,
      [HEADER_AUTH_ID]: UserId,
      Client: {
        [HEADER_SOURCE_KEY]: SDK_SOURCE,
      },
    };
  }

  endpoint: {
    assistant: string;
    web: string;
    endpoint: string;
  };
  debug: boolean;
  authInfo?: ClientAuthInfo | UserAuthInfo;

  getClientOptions() {
    return { debug: this.debug };
  }

  /**
   * holding the callback
   */
  callbacks?: ConnectionCallback;

  constructor(
    endpoint: {
      assistant?: string;
      web?: string;
      endpoint?: string;
    } = {
        assistant: ASSISTANT_API,
        web: WEB_API,
        endpoint: ENDPOINT_API,
      },
    debug: boolean = false
  ) {
    this.endpoint = {
      assistant: endpoint.assistant || ASSISTANT_API,
      web: endpoint.web || WEB_API,
      endpoint: endpoint.endpoint || ENDPOINT_API,
    };
    this.debug = debug;
  }

  get conversationClient(): TalkServiceClient {
    return new TalkServiceClient(
      this.endpoint.assistant,
      this.getClientOptions()
    );
  }

  get assistantClient(): AssistantServiceClient {
    return new AssistantServiceClient(
      this.endpoint.web,
      this.getClientOptions()
    );
  }

  get notificationClient(): NotificationServiceClient {
    return new NotificationServiceClient(
      this.endpoint.web,
      this.getClientOptions()
    );
  }

  get projectClient(): ProjectServiceClient {
    return new ProjectServiceClient(this.endpoint.web, this.getClientOptions());
  }

  get knowledgeClient(): KnowledgeServiceClient {
    return new KnowledgeServiceClient(
      this.endpoint.web,
      this.getClientOptions()
    );
  }

  get deploymentClient(): DeploymentClient {
    return new DeploymentClient(this.endpoint.web, this.getClientOptions());
  }

  get documentClient(): DocumentServiceClient {
    return new DocumentServiceClient(
      this.endpoint.web,
      this.getClientOptions()
    );
  }

  get vaultClient(): VaultServiceClient {
    return new VaultServiceClient(this.endpoint.web, this.getClientOptions());
  }

  get endpointClient(): EndpointServiceClient {
    return new EndpointServiceClient(
      this.endpoint.web,
      this.getClientOptions()
    );
  }

  get auditLoggingClient(): AuditLoggingServiceClient {
    return new AuditLoggingServiceClient(
      this.endpoint.web,
      this.getClientOptions()
    );
  }

  get assistantDeploymentClient(): AssistantDeploymentServiceClient {
    return new AssistantDeploymentServiceClient(
      this.endpoint.web,
      this.getClientOptions()
    );
  }

  get organizationClient(): OrganizationServiceClient {
    return new OrganizationServiceClient(
      this.endpoint.web,
      this.getClientOptions()
    );
  }

  get connectClient(): ConnectServiceClient {
    return new ConnectServiceClient(this.endpoint.web, this.getClientOptions());
  }

  get authenticationClient(): AuthenticationServiceClient {
    return new AuthenticationServiceClient(
      this.endpoint.web,
      this.getClientOptions()
    );
  }

  get streamClient(): TalkServiceClient {
    return new TalkServiceClient(this.endpoint.assistant, {
      ...this.getClientOptions(),
      transport: grpc.WebsocketTransport(),
    });
  }

  get webrtcClient(): WebRTCClient {
    return new WebRTCClient(this.endpoint.assistant, {
      ...this.getClientOptions(),
      transport: grpc.WebsocketTransport(),
    });
  }

  withLocal(): this {
    return this.withCustomEndpoint({
      assistant: LOCAL_ASSISTANT_API,
      web: LOCAL_WEB_API,
      endpoint: LOCAL_ENDPOINT_API,
    });
  }

  withAuth(auth: ClientAuthInfo | UserAuthInfo): this {
    this.authInfo = auth;
    return this;
  }

  get auth(): ClientAuthInfo | UserAuthInfo | undefined {
    return this.authInfo;
  }

  /**
   * with default connection config
   * @param auth
   * @returns
   */
  static DefaultConnectionConfig(
    auth: ClientAuthInfo | UserAuthInfo
  ): ConnectionConfig {
    const cc = new ConnectionConfig();
    cc.withAuth(auth);
    return cc;
  }

  /**
   *
   * @param endpoint
   * @param debug
   * @returns
   */
  withCustomEndpoint(
    endpoint: {
      assistant?: string;
      web?: string;
      endpoint?: string;
    } = {
        assistant: ASSISTANT_API,
        web: WEB_API,
        endpoint: ENDPOINT_API,
      },
    debug?: boolean
  ): this {
    this.endpoint = {
      assistant: endpoint.assistant || ASSISTANT_API,
      web: endpoint.web || WEB_API,
      endpoint: endpoint.endpoint || ENDPOINT_API,
    };
    if (debug !== undefined) this.debug = debug;
    return this;
  }

  /**
   * Configures connection callbacks for the TalkService clients.
   *
   * @param onConnect - A callback function to be executed when a connection is established.
   * @param onDisconnect - A callback function to be executed when the connection is terminated.
   * @param onError - A callback function to be executed when the connection is terminated.
   *
   * @returns - The current instance of `ConnectionConfig` for method chaining.
   *
   * @example
   * ```typescript
   * const connection = new ConnectionConfig(auth);
   * connection.withConnectionCallback(
   *   () => { console.log("Connected to the TalkService"); },
   *   () => { console.log("Disconnected from the TalkService"); }
   * );
   * ```
   */
  withConnectionCallback(cl: ConnectionCallback): this {
    // Implement connection callback logic here if needed.
    // For example, you can subscribe to events or set up listeners.
    this.callbacks = cl;
    return this;
  }

  /**
   *
   * @param connection
   * @returns
   */
  onConnectionChange(connection: ConnectionState) {
    if (connection === ConnectionState.Connected) {
      if (this.callbacks && this.callbacks?.onConnect) {
        this.callbacks.onConnect();
      }
      return;
    }
    if (this.callbacks && this.callbacks?.onDisconnect) {
      this.callbacks.onDisconnect();
    }
    return;
  }
}
