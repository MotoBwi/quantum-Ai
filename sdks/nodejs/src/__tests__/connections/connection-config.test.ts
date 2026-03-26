/*
 *  Copyright (c) 2024. Rapida
 *
 *  Unit tests for ConnectionConfig class
 */

import { ConnectionConfig } from '../../connections/connection-config';
import { RapidaSource } from '../../utils/rapida_source';
import {
  HEADER_API_KEY,
  HEADER_AUTH_ID,
  HEADER_PROJECT_ID,
  HEADER_SOURCE_KEY,
} from '../../utils/rapida_header';
import {
  ASSISTANT_API,
  ENDPOINT_API,
  WEB_API,
  LOCAL_ASSISTANT_API,
  LOCAL_ENDPOINT_API,
  LOCAL_WEB_API,
} from '../../configs';

describe('ConnectionConfig', () => {
  describe('Static factory methods', () => {
    describe('WithDebugger', () => {
      it('should create debugger auth info with all required fields', () => {
        const authInfo = ConnectionConfig.WithDebugger({
          authorization: 'test-token',
          userId: 'user-123',
          projectId: 'project-456',
        });

        expect(authInfo.authorization).toBe('test-token');
        expect(authInfo[HEADER_AUTH_ID]).toBe('user-123');
        expect(authInfo[HEADER_PROJECT_ID]).toBe('project-456');
        expect(authInfo.Client?.[HEADER_SOURCE_KEY]).toBe(RapidaSource.DEBUGGER);
      });
    });

    describe('WithPersonalToken', () => {
      it('should create personal token auth info with all required fields', () => {
        const authInfo = ConnectionConfig.WithPersonalToken({
          Authorization: 'personal-token',
          AuthId: 'user-789',
          ProjectId: 'project-101',
        });

        expect(authInfo.authorization).toBe('personal-token');
        expect(authInfo[HEADER_AUTH_ID]).toBe('user-789');
        expect(authInfo[HEADER_PROJECT_ID]).toBe('project-101');
        expect(authInfo.Client?.[HEADER_SOURCE_KEY]).toBe(RapidaSource.SDK);
      });
    });

    describe('WithWebpluginClient', () => {
      it('should create web plugin client auth info', () => {
        const authInfo = ConnectionConfig.WithWebpluginClient({
          ApiKey: 'api-key-123',
          UserId: 'user-456',
        });

        expect(authInfo[HEADER_API_KEY]).toBe('api-key-123');
        expect(authInfo[HEADER_AUTH_ID]).toBe('user-456');
        expect(authInfo.Client?.[HEADER_SOURCE_KEY]).toBe(RapidaSource.WEB_PLUGIN);
      });

      it('should allow optional UserId', () => {
        const authInfo = ConnectionConfig.WithWebpluginClient({
          ApiKey: 'api-key-123',
        });

        expect(authInfo[HEADER_API_KEY]).toBe('api-key-123');
        expect(authInfo[HEADER_AUTH_ID]).toBeUndefined();
      });
    });

    describe('WithSDK', () => {
      it('should create SDK client auth info', () => {
        const authInfo = ConnectionConfig.WithSDK({
          ApiKey: 'sdk-api-key',
          UserId: 'sdk-user',
        });

        expect(authInfo[HEADER_API_KEY]).toBe('sdk-api-key');
        expect(authInfo[HEADER_AUTH_ID]).toBe('sdk-user');
        expect(authInfo.Client?.[HEADER_SOURCE_KEY]).toBe(RapidaSource.SDK);
      });

      it('should allow optional UserId', () => {
        const authInfo = ConnectionConfig.WithSDK({
          ApiKey: 'sdk-api-key',
        });

        expect(authInfo[HEADER_API_KEY]).toBe('sdk-api-key');
        expect(authInfo[HEADER_AUTH_ID]).toBeUndefined();
      });
    });

    describe('DefaultConnectionConfig', () => {
      it('should create default connection config with auth', () => {
        const auth = ConnectionConfig.WithSDK({ ApiKey: 'test-key' });
        const config = ConnectionConfig.DefaultConnectionConfig(auth);

        expect(config).toBeInstanceOf(ConnectionConfig);
        expect(config.auth).toBe(auth);
      });
    });
  });

  describe('Constructor', () => {
    it('should create connection config with default endpoints', () => {
      const config = new ConnectionConfig();

      // Verify default endpoints are set (clients should work)
      expect(config.conversationClient).toBeDefined();
      expect(config.assistantClient).toBeDefined();
    });

    it('should create connection config with custom endpoints', () => {
      const config = new ConnectionConfig({
        assistant: 'custom-assistant.example.com',
        web: 'custom-web.example.com',
        endpoint: 'custom-endpoint.example.com',
      });

      expect(config.assistantClient).toBeDefined();
    });

    it('should create connection config with debug mode', () => {
      const config = new ConnectionConfig(undefined, true);
      const options = config.getClientOptions();

      expect(options.debug).toBe(true);
    });

    it('should create connection config without debug mode by default', () => {
      const config = new ConnectionConfig();
      const options = config.getClientOptions();

      expect(options.debug).toBe(false);
    });
  });

  describe('Client getters', () => {
    let config: ConnectionConfig;

    beforeEach(() => {
      config = new ConnectionConfig();
    });

    it('should return conversationClient', () => {
      expect(config.conversationClient).toBeDefined();
    });

    it('should return assistantClient', () => {
      expect(config.assistantClient).toBeDefined();
    });

    it('should return projectClient', () => {
      expect(config.projectClient).toBeDefined();
    });

    it('should return knowledgeClient', () => {
      expect(config.knowledgeClient).toBeDefined();
    });

    it('should return deploymentClient', () => {
      expect(config.deploymentClient).toBeDefined();
    });

    it('should return documentClient', () => {
      expect(config.documentClient).toBeDefined();
    });

    it('should return vaultClient', () => {
      expect(config.vaultClient).toBeDefined();
    });

    it('should return endpointClient', () => {
      expect(config.endpointClient).toBeDefined();
    });

    it('should return auditLoggingClient', () => {
      expect(config.auditLoggingClient).toBeDefined();
    });

    it('should return assistantDeploymentClient', () => {
      expect(config.assistantDeploymentClient).toBeDefined();
    });

    it('should return organizationClient', () => {
      expect(config.organizationClient).toBeDefined();
    });

    it('should return connectClient', () => {
      expect(config.connectClient).toBeDefined();
    });

    it('should return authenticationClient', () => {
      expect(config.authenticationClient).toBeDefined();
    });
  });

  describe('withLocal', () => {
    it('should configure local endpoints', () => {
      const config = new ConnectionConfig();
      const localConfig = config.withLocal();

      expect(localConfig).toBe(config); // Should return same instance

      const options = config.getClientOptions();
      expect(options.debug).toBe(true);
    });
  });

  describe('withCustomEndpoint', () => {
    it('should update endpoints', () => {
      const config = new ConnectionConfig();
      const result = config.withCustomEndpoint({
        assistant: 'custom-assistant.com',
        web: 'custom-web.com',
        endpoint: 'custom-endpoint.com',
      });

      expect(result).toBe(config); // Should return same instance (fluent API)
    });

    it('should update debug mode', () => {
      const config = new ConnectionConfig();
      config.withCustomEndpoint({}, true);

      const options = config.getClientOptions();
      expect(options.debug).toBe(true);
    });

    it('should use defaults for missing endpoints', () => {
      const config = new ConnectionConfig();
      config.withCustomEndpoint({
        assistant: 'custom-assistant.com',
        // web and endpoint not provided
      });

      // Should still work with default web and endpoint
      expect(config.projectClient).toBeDefined();
    });
  });

  describe('withAuth', () => {
    it('should set auth and return same instance', () => {
      const config = new ConnectionConfig();
      const auth = ConnectionConfig.WithSDK({ ApiKey: 'test-key' });
      const result = config.withAuth(auth);

      expect(result).toBe(config);
      expect(config.auth).toBe(auth);
    });

    it('should allow chaining', () => {
      const auth = ConnectionConfig.WithSDK({ ApiKey: 'test-key' });
      const config = new ConnectionConfig()
        .withCustomEndpoint({ assistant: 'custom.com' })
        .withAuth(auth);

      expect(config.auth).toBe(auth);
    });
  });

  describe('auth getter', () => {
    it('should return undefined when no auth is set', () => {
      const config = new ConnectionConfig();
      expect(config.auth).toBeUndefined();
    });

    it('should return auth when set', () => {
      const config = new ConnectionConfig();
      const auth = ConnectionConfig.WithSDK({ ApiKey: 'test-key' });
      config.withAuth(auth);

      expect(config.auth).toBe(auth);
    });
  });
});
