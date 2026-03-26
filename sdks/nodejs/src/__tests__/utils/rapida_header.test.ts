/*
 *  Copyright (c) 2024. Rapida
 *
 *  Unit tests for rapida_header constants
 */

import {
  HEADER_AUTH_ID,
  HEADER_PROJECT_ID,
  HEADER_API_KEY,
  HEADER_SOURCE_KEY,
  HEADER_ENVIRONMENT_KEY,
  HEADER_REGION_KEY,
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
} from '../../utils/rapida_header';

describe('rapida_header', () => {
  describe('Authentication headers', () => {
    it('should have correct auth id header', () => {
      expect(HEADER_AUTH_ID).toBe('x-auth-id');
    });

    it('should have correct project id header', () => {
      expect(HEADER_PROJECT_ID).toBe('x-project-id');
    });

    it('should have correct api key header', () => {
      expect(HEADER_API_KEY).toBe('x-api-key');
    });
  });

  describe('Client context headers', () => {
    it('should have correct source key header', () => {
      expect(HEADER_SOURCE_KEY).toBe('x-client-source');
    });

    it('should have correct environment key header', () => {
      expect(HEADER_ENVIRONMENT_KEY).toBe('x-rapida-environment');
    });

    it('should have correct region key header', () => {
      expect(HEADER_REGION_KEY).toBe('x-rapida-region');
    });
  });

  describe('Browser/client information headers', () => {
    it('should have correct user agent header', () => {
      expect(HEADER_USER_AGENT).toBe('x-user-agent');
    });

    it('should have correct language header', () => {
      expect(HEADER_LANGUAGE).toBe('x-language');
    });

    it('should have correct platform header', () => {
      expect(HEADER_PLATFORM).toBe('x-platform');
    });

    it('should have correct timezone header', () => {
      expect(HEADER_TIMEZONE).toBe('x-timezone');
    });
  });

  describe('Screen dimension headers', () => {
    it('should have correct screen width header', () => {
      expect(HEADER_SCREEN_WIDTH).toBe('x-screen-width');
    });

    it('should have correct screen height header', () => {
      expect(HEADER_SCREEN_HEIGHT).toBe('x-screen-height');
    });

    it('should have correct window width header', () => {
      expect(HEADER_WINDOW_WIDTH).toBe('x-window-width');
    });

    it('should have correct window height header', () => {
      expect(HEADER_WINDOW_HEIGHT).toBe('x-window-height');
    });

    it('should have correct color depth header', () => {
      expect(HEADER_COLOR_DEPTH).toBe('x-color-depth');
    });
  });

  describe('Device capability headers', () => {
    it('should have correct device memory header', () => {
      expect(HEADER_DEVICE_MEMORY).toBe('x-device-memory');
    });

    it('should have correct hardware concurrency header', () => {
      expect(HEADER_HARDWARE_CONCURRENCY).toBe('x-hardware-concurrency');
    });
  });

  describe('Connection headers', () => {
    it('should have correct connection type header', () => {
      expect(HEADER_CONNECTION_TYPE).toBe('x-connection-type');
    });

    it('should have correct connection effective type header', () => {
      expect(HEADER_CONNECTION_EFFECTIVE_TYPE).toBe('x-connection-effective-type');
    });
  });

  describe('Privacy headers', () => {
    it('should have correct cookies enabled header', () => {
      expect(HEADER_COOKIES_ENABLED).toBe('x-cookies-enabled');
    });

    it('should have correct do not track header', () => {
      expect(HEADER_DO_NOT_TRACK).toBe('x-do-not-track');
    });
  });

  describe('Navigation headers', () => {
    it('should have correct referrer header', () => {
      expect(HEADER_REFERRER).toBe('x-referrer');
    });

    it('should have correct remote url header', () => {
      expect(HEADER_REMOTE_URL).toBe('x-remote-url');
    });
  });

  describe('Geolocation headers', () => {
    it('should have correct latitude header', () => {
      expect(HEADER_LATITUDE).toBe('x-latitude');
    });

    it('should have correct longitude header', () => {
      expect(HEADER_LONGITUDE).toBe('x-longitude');
    });
  });

  describe('Header naming conventions', () => {
    it('all headers should start with x- prefix', () => {
      const headers = [
        HEADER_AUTH_ID,
        HEADER_PROJECT_ID,
        HEADER_API_KEY,
        HEADER_SOURCE_KEY,
        HEADER_ENVIRONMENT_KEY,
        HEADER_REGION_KEY,
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
      ];

      headers.forEach((header) => {
        expect(header.startsWith('x-')).toBe(true);
      });
    });

    it('all headers should be lowercase', () => {
      const headers = [
        HEADER_AUTH_ID,
        HEADER_PROJECT_ID,
        HEADER_API_KEY,
        HEADER_SOURCE_KEY,
        HEADER_ENVIRONMENT_KEY,
        HEADER_REGION_KEY,
        HEADER_USER_AGENT,
        HEADER_LANGUAGE,
        HEADER_PLATFORM,
      ];

      headers.forEach((header) => {
        expect(header).toBe(header.toLowerCase());
      });
    });
  });
});
