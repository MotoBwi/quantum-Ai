/*
 *  Copyright (c) 2024. Rapida
 *
 *  Unit tests for configs/index constants
 */

import {
  ASSISTANT_API,
  ENDPOINT_API,
  WEB_API,
  LOCAL_ASSISTANT_API,
  LOCAL_ENDPOINT_API,
  LOCAL_WEB_API,
} from '../../configs';

describe('configs', () => {
  describe('Production API endpoints', () => {
    it('should have correct ASSISTANT_API endpoint', () => {
      expect(ASSISTANT_API).toBe('assistant-01.in.rapida.ai');
    });

    it('should have correct ENDPOINT_API endpoint', () => {
      expect(ENDPOINT_API).toBe('endpoint-01.in.rapida.ai');
    });

    it('should have correct WEB_API endpoint', () => {
      expect(WEB_API).toBe('api-01.in.rapida.ai');
    });
  });

  describe('Local API endpoints', () => {
    it('should have correct LOCAL_ASSISTANT_API endpoint', () => {
      expect(LOCAL_ASSISTANT_API).toBe('localhost:9007');
    });

    it('should have correct LOCAL_ENDPOINT_API endpoint', () => {
      expect(LOCAL_ENDPOINT_API).toBe('localhost:9005');
    });

    it('should have correct LOCAL_WEB_API endpoint', () => {
      expect(LOCAL_WEB_API).toBe('localhost:9001');
    });
  });

  describe('Endpoint format validation', () => {
    it('production endpoints should not have protocol prefix', () => {
      expect(ASSISTANT_API).not.toContain('http://');
      expect(ASSISTANT_API).not.toContain('https://');
      expect(ENDPOINT_API).not.toContain('http://');
      expect(ENDPOINT_API).not.toContain('https://');
      expect(WEB_API).not.toContain('http://');
      expect(WEB_API).not.toContain('https://');
    });

    it('local endpoints should be localhost with port', () => {
      expect(LOCAL_ASSISTANT_API).toMatch(/^localhost:\d+$/);
      expect(LOCAL_ENDPOINT_API).toMatch(/^localhost:\d+$/);
      expect(LOCAL_WEB_API).toMatch(/^localhost:\d+$/);
    });

    it('production endpoints should have .rapida.ai domain', () => {
      expect(ASSISTANT_API).toContain('.rapida.ai');
      expect(ENDPOINT_API).toContain('.rapida.ai');
      expect(WEB_API).toContain('.rapida.ai');
    });
  });

  describe('Port numbers for local endpoints', () => {
    it('should use unique ports for each service', () => {
      const assistantPort = LOCAL_ASSISTANT_API.split(':')[1];
      const endpointPort = LOCAL_ENDPOINT_API.split(':')[1];
      const webPort = LOCAL_WEB_API.split(':')[1];

      // All ports should be unique
      const ports = [assistantPort, endpointPort, webPort];
      const uniquePorts = new Set(ports);
      expect(uniquePorts.size).toBe(3);
    });

    it('should use expected port numbers', () => {
      expect(LOCAL_ASSISTANT_API).toContain('9007');
      expect(LOCAL_ENDPOINT_API).toContain('9005');
      expect(LOCAL_WEB_API).toContain('9001');
    });
  });
});
