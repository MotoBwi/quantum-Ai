/*
 *  Copyright (c) 2024. Rapida
 *
 *  Unit tests for rapida_source utility functions
 */

import {
  RapidaSource,
  GetProtoSource,
} from '../../utils/rapida_source';

describe('rapida_source', () => {
  describe('RapidaSource enum', () => {
    it('should have correct values', () => {
      expect(RapidaSource.WEB_PLUGIN).toBe('web-plugin');
      expect(RapidaSource.DEBUGGER).toBe('debugger');
      expect(RapidaSource.SDK).toBe('sdk');
      expect(RapidaSource.PHONE_CALL).toBe('phone-call');
      expect(RapidaSource.WHATSAPP).toBe('whatsapp');
    });

    it('should have all expected source types', () => {
      const sources = Object.values(RapidaSource);
      expect(sources).toContain('web-plugin');
      expect(sources).toContain('debugger');
      expect(sources).toContain('sdk');
      expect(sources).toContain('phone-call');
      expect(sources).toContain('whatsapp');
      expect(sources).toHaveLength(5);
    });
  });

  describe('GetProtoSource', () => {
    it('should return SDK proto source for SDK', () => {
      const result = GetProtoSource(RapidaSource.SDK);
      expect(result).toBeDefined();
    });

    it('should return SDK proto source for WEB_PLUGIN', () => {
      const result = GetProtoSource(RapidaSource.WEB_PLUGIN);
      expect(result).toBeDefined();
    });

    it('should return SDK proto source for DEBUGGER', () => {
      const result = GetProtoSource(RapidaSource.DEBUGGER);
      expect(result).toBeDefined();
    });

    it('should return SDK proto source for PHONE_CALL', () => {
      const result = GetProtoSource(RapidaSource.PHONE_CALL);
      expect(result).toBeDefined();
    });

    it('should return SDK proto source for WHATSAPP', () => {
      const result = GetProtoSource(RapidaSource.WHATSAPP);
      expect(result).toBeDefined();
    });

    it('should warn and return SDK for invalid source', () => {
      const warnSpy = jest.spyOn(console, 'warn').mockImplementation();

      const result = GetProtoSource('invalid' as RapidaSource);

      expect(warnSpy).toHaveBeenCalledWith('Invalid RapidaSource: invalid');
      expect(result).toBeDefined();

      warnSpy.mockRestore();
    });
  });
});
