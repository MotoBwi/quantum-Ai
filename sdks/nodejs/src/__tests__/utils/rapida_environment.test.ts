/*
 *  Copyright (c) 2024. Rapida
 *
 *  Unit tests for rapida_environment utility functions
 */

import {
  RapidaEnvironment,
  getRapidaEnvironmentValue,
  fromStr,
} from '../../utils/rapida_environment';

describe('rapida_environment', () => {
  describe('RapidaEnvironment enum', () => {
    it('should have correct values', () => {
      expect(RapidaEnvironment.PRODUCTION).toBe('production');
      expect(RapidaEnvironment.DEVELOPMENT).toBe('development');
    });
  });

  describe('getRapidaEnvironmentValue', () => {
    it('should return "production" for PRODUCTION environment', () => {
      const result = getRapidaEnvironmentValue(RapidaEnvironment.PRODUCTION);
      expect(result).toBe('production');
    });

    it('should return "development" for DEVELOPMENT environment', () => {
      const result = getRapidaEnvironmentValue(RapidaEnvironment.DEVELOPMENT);
      expect(result).toBe('development');
    });
  });

  describe('fromStr', () => {
    it('should return PRODUCTION for "production"', () => {
      expect(fromStr('production')).toBe(RapidaEnvironment.PRODUCTION);
    });

    it('should return DEVELOPMENT for "development"', () => {
      expect(fromStr('development')).toBe(RapidaEnvironment.DEVELOPMENT);
    });

    it('should be case insensitive', () => {
      expect(fromStr('PRODUCTION')).toBe(RapidaEnvironment.PRODUCTION);
      expect(fromStr('Production')).toBe(RapidaEnvironment.PRODUCTION);
      expect(fromStr('DEVELOPMENT')).toBe(RapidaEnvironment.DEVELOPMENT);
      expect(fromStr('Development')).toBe(RapidaEnvironment.DEVELOPMENT);
    });

    it('should return DEVELOPMENT for unknown values', () => {
      expect(fromStr('unknown')).toBe(RapidaEnvironment.DEVELOPMENT);
      expect(fromStr('staging')).toBe(RapidaEnvironment.DEVELOPMENT);
      expect(fromStr('')).toBe(RapidaEnvironment.DEVELOPMENT);
    });

    it('should warn for unsupported environments', () => {
      const warnSpy = jest.spyOn(console, 'warn').mockImplementation();

      fromStr('invalid');

      expect(warnSpy).toHaveBeenCalledWith(
        "The environment is not supported. Only 'production' and 'development' are allowed."
      );

      warnSpy.mockRestore();
    });
  });
});
