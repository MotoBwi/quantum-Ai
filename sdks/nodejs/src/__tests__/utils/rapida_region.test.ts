/*
 *  Copyright (c) 2024. Rapida
 *
 *  Unit tests for rapida_region utility functions
 */

import {
  RapidaRegion,
  AP_REGION,
  US_REGION,
  EU_REGION,
  ALL_REGION,
  getRapidaRegionValue,
  fromStr,
} from '../../utils/rapida_region';

describe('rapida_region', () => {
  describe('Region constants', () => {
    it('should have correct values', () => {
      expect(AP_REGION).toBe('ap');
      expect(US_REGION).toBe('us');
      expect(EU_REGION).toBe('eu');
      expect(ALL_REGION).toBe('all');
    });
  });

  describe('getRapidaRegionValue', () => {
    it('should return correct string for AP_REGION', () => {
      const result = getRapidaRegionValue(AP_REGION);
      expect(result).toBe('ap');
    });

    it('should return correct string for US_REGION', () => {
      const result = getRapidaRegionValue(US_REGION);
      expect(result).toBe('us');
    });

    it('should return correct string for EU_REGION', () => {
      const result = getRapidaRegionValue(EU_REGION);
      expect(result).toBe('eu');
    });

    it('should return correct string for ALL_REGION', () => {
      const result = getRapidaRegionValue(ALL_REGION);
      expect(result).toBe('all');
    });
  });

  describe('fromStr', () => {
    it('should return AP_REGION for "ap"', () => {
      expect(fromStr('ap')).toBe(AP_REGION);
    });

    it('should return US_REGION for "us"', () => {
      expect(fromStr('us')).toBe(US_REGION);
    });

    it('should return EU_REGION for "eu"', () => {
      expect(fromStr('eu')).toBe(EU_REGION);
    });

    it('should return ALL_REGION for "all"', () => {
      expect(fromStr('all')).toBe(ALL_REGION);
    });

    it('should be case insensitive', () => {
      expect(fromStr('AP')).toBe(AP_REGION);
      expect(fromStr('Ap')).toBe(AP_REGION);
      expect(fromStr('US')).toBe(US_REGION);
      expect(fromStr('Us')).toBe(US_REGION);
      expect(fromStr('EU')).toBe(EU_REGION);
      expect(fromStr('Eu')).toBe(EU_REGION);
      expect(fromStr('ALL')).toBe(ALL_REGION);
      expect(fromStr('All')).toBe(ALL_REGION);
    });

    it('should return ALL_REGION for unknown values', () => {
      expect(fromStr('unknown')).toBe(ALL_REGION);
      expect(fromStr('asia')).toBe(ALL_REGION);
      expect(fromStr('')).toBe(ALL_REGION);
    });

    it('should warn for unsupported regions', () => {
      const warnSpy = jest.spyOn(console, 'warn').mockImplementation();

      fromStr('invalid');

      expect(warnSpy).toHaveBeenCalledWith(
        "The region is not supported. Supported regions are 'ap', 'us', 'eu', and 'all'."
      );

      warnSpy.mockRestore();
    });
  });
});
