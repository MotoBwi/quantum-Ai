/*
 *  Copyright (c) 2024. Rapida
 *
 *  Unit tests for clients/index utility functions
 */

import {
  WithPlatform,
  WithAuthContext,
  getClientInfo,
  WithClientContext,
  handleListResponse,
  handleSingleResponse,
  UserAuthInfo,
  ClientAuthInfo,
} from '../../clients';
import {
  HEADER_REGION_KEY,
  HEADER_API_KEY,
  HEADER_AUTH_ID,
  HEADER_PROJECT_ID,
  HEADER_SOURCE_KEY,
  HEADER_USER_AGENT,
  HEADER_LANGUAGE,
  HEADER_PLATFORM,
  HEADER_TIMEZONE,
} from '../../utils/rapida_header';
import { RapidaSource } from '../../utils/rapida_source';
import { ALL_REGION } from '../../utils/rapida_region';
import { Metadata } from '@grpc/grpc-js';

describe('clients/index', () => {
  describe('WithPlatform', () => {
    it('should set region header to ALL_REGION', () => {
      const metadata = new Metadata();
      const result = WithPlatform(metadata);

      expect(result.get(HEADER_REGION_KEY)[0]).toBe(ALL_REGION);
    });

    it('should return the same metadata instance', () => {
      const metadata = new Metadata();
      const result = WithPlatform(metadata);

      expect(result).toBe(metadata);
    });

    it('should preserve existing metadata', () => {
      const metadata = new Metadata();
      metadata.set('existing-header', 'existing-value');

      const result = WithPlatform(metadata);

      expect(result.get('existing-header')[0]).toBe('existing-value');
      expect(result.get(HEADER_REGION_KEY)[0]).toBe(ALL_REGION);
    });
  });

  describe('WithAuthContext', () => {
    it('should create metadata with client auth info', () => {
      const authInfo: ClientAuthInfo = {
        [HEADER_API_KEY]: 'test-api-key',
        [HEADER_AUTH_ID]: 'test-user-id',
        Client: {
          [HEADER_SOURCE_KEY]: RapidaSource.SDK,
        },
      };

      const metadata = WithAuthContext(authInfo);

      expect(metadata.get(HEADER_API_KEY)[0]).toBe('test-api-key');
      expect(metadata.get(HEADER_AUTH_ID)[0]).toBe('test-user-id');
      expect(metadata.get(HEADER_SOURCE_KEY)[0]).toBe(RapidaSource.SDK);
    });

    it('should create metadata with user auth info', () => {
      const authInfo: UserAuthInfo = {
        authorization: 'bearer-token',
        [HEADER_AUTH_ID]: 'test-user-id',
        [HEADER_PROJECT_ID]: 'test-project-id',
        Client: {
          [HEADER_SOURCE_KEY]: RapidaSource.DEBUGGER,
        },
      };

      const metadata = WithAuthContext(authInfo);

      expect(metadata.get('authorization')[0]).toBe('bearer-token');
      expect(metadata.get(HEADER_AUTH_ID)[0]).toBe('test-user-id');
      expect(metadata.get(HEADER_PROJECT_ID)[0]).toBe('test-project-id');
      expect(metadata.get(HEADER_SOURCE_KEY)[0]).toBe(RapidaSource.DEBUGGER);
    });

    it('should create metadata without auth info', () => {
      const metadata = WithAuthContext();

      expect(metadata).toBeInstanceOf(Metadata);
      // Should still have platform headers
      expect(metadata.get(HEADER_REGION_KEY)[0]).toBe(ALL_REGION);
    });

    it('should include client context headers', () => {
      const metadata = WithAuthContext();

      // Should have user agent from Node.js
      expect(metadata.get(HEADER_USER_AGENT)[0]).toContain('Node.js');
      expect(metadata.get(HEADER_PLATFORM)[0]).toBeDefined();
    });
  });

  describe('getClientInfo', () => {
    it('should return client info with Node.js user agent', () => {
      const clientInfo = getClientInfo();

      expect(clientInfo[HEADER_USER_AGENT]).toContain('Node.js');
    });

    it('should return client info with platform', () => {
      const clientInfo = getClientInfo();

      expect(clientInfo[HEADER_PLATFORM]).toBe(process.platform);
    });

    it('should return client info with timezone', () => {
      const clientInfo = getClientInfo();

      expect(clientInfo[HEADER_TIMEZONE]).toBeDefined();
      // Should be a valid IANA timezone
      expect(typeof clientInfo[HEADER_TIMEZONE]).toBe('string');
    });

    it('should return client info with language', () => {
      const clientInfo = getClientInfo();

      expect(clientInfo[HEADER_LANGUAGE]).toBeDefined();
    });

    it('should merge additional info', () => {
      const additionalInfo = {
        [HEADER_USER_AGENT]: 'Custom Agent',
      };
      const clientInfo = getClientInfo(additionalInfo);

      expect(clientInfo[HEADER_USER_AGENT]).toBe('Custom Agent');
    });

    it('should override defaults with additional info', () => {
      const additionalInfo = {
        [HEADER_PLATFORM]: 'custom-platform',
      };
      const clientInfo = getClientInfo(additionalInfo);

      expect(clientInfo[HEADER_PLATFORM]).toBe('custom-platform');
    });
  });

  describe('WithClientContext', () => {
    it('should create metadata with client info', () => {
      const metadata = WithClientContext();

      expect(metadata).toBeInstanceOf(Metadata);
      expect(metadata.get(HEADER_USER_AGENT)[0]).toContain('Node.js');
      expect(metadata.get(HEADER_PLATFORM)[0]).toBeDefined();
    });

    it('should enhance existing metadata', () => {
      const existingMetadata = new Metadata();
      existingMetadata.set('custom-header', 'custom-value');

      const metadata = WithClientContext(existingMetadata);

      expect(metadata.get('custom-header')[0]).toBe('custom-value');
      expect(metadata.get(HEADER_USER_AGENT)[0]).toContain('Node.js');
    });

    it('should not set undefined values', () => {
      const metadata = WithClientContext();

      // CONNECTION_TYPE and CONNECTION_EFFECTIVE_TYPE are undefined in Node.js
      // They should not be set - check by trying to get the value
      const connectionType = metadata.get('x-connection-type');
      expect(connectionType.length).toBe(0);
    });
  });

  describe('handleListResponse', () => {
    it('should return data list on success', () => {
      const response = {
        getSuccess: () => true,
        getError: () => undefined,
        getDataList: () => [{ id: 1 }, { id: 2 }],
      };

      const result = handleListResponse(response);

      expect(result).toEqual([{ id: 1 }, { id: 2 }]);
    });

    it('should throw error on failure with error message', () => {
      const errorObj = {
        getHumanmessage: () => 'Test error message',
      };
      const response = {
        getSuccess: () => false,
        getError: () => errorObj,
        getDataList: () => [],
      } as any;

      expect(() => handleListResponse(response)).toThrow('Test error message');
    });

    it('should throw unknown error on failure without error object', () => {
      const response = {
        getSuccess: () => false,
        getError: () => undefined,
        getDataList: () => [],
      };

      expect(() => handleListResponse(response)).toThrow('Unknown error occurred');
    });

    it('should return empty array on success with no data', () => {
      const response = {
        getSuccess: () => true,
        getError: () => undefined,
        getDataList: () => [],
      };

      const result = handleListResponse(response);

      expect(result).toEqual([]);
    });
  });

  describe('handleSingleResponse', () => {
    it('should return data on success', () => {
      const data = { id: 1, name: 'test' };
      const response = {
        getSuccess: () => true,
        getError: () => undefined,
        getData: () => data,
      };

      const result = handleSingleResponse(response);

      expect(result).toEqual(data);
    });

    it('should throw error on failure with error message', () => {
      const errorObj = {
        getHumanmessage: () => 'Single response error',
      };
      const response = {
        getSuccess: () => false,
        getError: () => errorObj,
        getData: () => null,
      } as any;

      expect(() => handleSingleResponse(response)).toThrow('Single response error');
    });

    it('should throw unknown error on failure without error object', () => {
      const response = {
        getSuccess: () => false,
        getError: () => undefined,
        getData: () => null,
      };

      expect(() => handleSingleResponse(response)).toThrow('Unknown error occurred');
    });

    it('should throw empty data error when data is null', () => {
      const response = {
        getSuccess: () => true,
        getError: () => undefined,
        getData: () => null,
      };

      expect(() => handleSingleResponse(response)).toThrow('Empty data returned');
    });

    it('should throw empty data error when data is undefined', () => {
      const response = {
        getSuccess: () => true,
        getError: () => undefined,
        getData: () => undefined,
      };

      expect(() => handleSingleResponse(response)).toThrow('Empty data returned');
    });
  });
});
