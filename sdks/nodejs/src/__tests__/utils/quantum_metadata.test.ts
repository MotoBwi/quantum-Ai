/*
 *  Copyright (c) 2024. Rapida
 *
 *  Unit tests for rapida_metadata utility functions
 */

import {
  getTotalTokenMetric,
  getTimeTakenMetric,
  getMetadataValue,
  getMetadataValueOrDefault,
  getStringFromProtoStruct,
  getJsonFromProtoStruct,
} from '../../utils/rapida_metadata';
import { Metadata, Metric } from '../../clients/protos/common_pb';
import { Struct, Value } from 'google-protobuf/google/protobuf/struct_pb';

// Helper function to create a Metric
function createMetric(name: string, value: string): Metric {
  const metric = new Metric();
  metric.setName(name);
  metric.setValue(value);
  return metric;
}

// Helper function to create a Metadata
function createMetadata(key: string, value: string): Metadata {
  const metadata = new Metadata();
  metadata.setKey(key);
  metadata.setValue(value);
  return metadata;
}

describe('rapida_metadata', () => {
  describe('getTotalTokenMetric', () => {
    it('should return total token count when present', () => {
      const metrics = [
        createMetric('STATUS', 'success'),
        createMetric('TOTAL_TOKEN', '150'),
        createMetric('INPUT_TOKEN', '50'),
      ];

      const result = getTotalTokenMetric(metrics);
      expect(result).toBe(150);
    });

    it('should return 0 when TOTAL_TOKEN is not present', () => {
      const metrics = [
        createMetric('STATUS', 'success'),
        createMetric('INPUT_TOKEN', '50'),
      ];

      const result = getTotalTokenMetric(metrics);
      expect(result).toBe(0);
    });

    it('should return 0 for empty metrics array', () => {
      const result = getTotalTokenMetric([]);
      expect(result).toBe(0);
    });

    it('should parse numeric string values correctly', () => {
      const metrics = [createMetric('TOTAL_TOKEN', '1000')];

      const result = getTotalTokenMetric(metrics);
      expect(result).toBe(1000);
    });
  });

  describe('getTimeTakenMetric', () => {
    it('should return time taken when present', () => {
      const metrics = [
        createMetric('STATUS', 'success'),
        createMetric('TIME_TAKEN', '250'),
      ];

      const result = getTimeTakenMetric(metrics);
      expect(result).toBe(250);
    });

    it('should return 0 when TIME_TAKEN is not present', () => {
      const metrics = [createMetric('STATUS', 'success')];

      const result = getTimeTakenMetric(metrics);
      expect(result).toBe(0);
    });

    it('should return 0 for empty metrics array', () => {
      const result = getTimeTakenMetric([]);
      expect(result).toBe(0);
    });

    it('should handle decimal values', () => {
      const metrics = [createMetric('TIME_TAKEN', '123.45')];

      const result = getTimeTakenMetric(metrics);
      expect(result).toBeCloseTo(123.45);
    });
  });

  describe('getMetadataValue', () => {
    it('should return value for existing key', () => {
      const metadata = [
        createMetadata('key1', 'value1'),
        createMetadata('key2', 'value2'),
      ];

      const result = getMetadataValue(metadata, 'key1');
      expect(result).toBe('value1');
    });

    it('should return undefined for non-existing key', () => {
      const metadata = [createMetadata('key1', 'value1')];

      const result = getMetadataValue(metadata, 'nonexistent');
      expect(result).toBeUndefined();
    });

    it('should return undefined for empty metadata array', () => {
      const result = getMetadataValue([], 'key');
      expect(result).toBeUndefined();
    });
  });

  describe('getMetadataValueOrDefault', () => {
    it('should return value for existing key', () => {
      const metadata = [createMetadata('key1', 'value1')];

      const result = getMetadataValueOrDefault(metadata, 'key1', 'default');
      expect(result).toBe('value1');
    });

    it('should return default for non-existing key', () => {
      const metadata = [createMetadata('key1', 'value1')];

      const result = getMetadataValueOrDefault(metadata, 'nonexistent', 'default');
      expect(result).toBe('default');
    });

    it('should return default for empty metadata array', () => {
      const result = getMetadataValueOrDefault([], 'key', 'fallback');
      expect(result).toBe('fallback');
    });

    it('should return empty default when specified', () => {
      const metadata = [createMetadata('key1', 'value1')];

      const result = getMetadataValueOrDefault(metadata, 'nonexistent', '');
      expect(result).toBe('');
    });
  });

  describe('getStringFromProtoStruct', () => {
    it('should return null for undefined struct', () => {
      expect(getStringFromProtoStruct(undefined, 'key')).toBeNull();
    });

    it('should return null for undefined key', () => {
      const struct = new Struct();
      expect(getStringFromProtoStruct(struct, undefined)).toBeNull();
    });

    it('should return string value from struct', () => {
      const struct = new Struct();
      const value = new Value();
      value.setStringValue('test-value');
      struct.getFieldsMap().set('testKey', value);

      const result = getStringFromProtoStruct(struct, 'testKey');
      expect(result).toBe('test-value');
    });

    it('should return null for non-existent key', () => {
      const struct = new Struct();

      const result = getStringFromProtoStruct(struct, 'nonexistent');
      expect(result).toBeNull();
    });

    it('should return null for non-string value', () => {
      const struct = new Struct();
      const value = new Value();
      value.setNumberValue(42);
      struct.getFieldsMap().set('numberKey', value);

      const result = getStringFromProtoStruct(struct, 'numberKey');
      expect(result).toBeNull();
    });
  });

  describe('getJsonFromProtoStruct', () => {
    it('should return null for undefined struct', () => {
      expect(getJsonFromProtoStruct(undefined, 'key')).toBeNull();
    });

    it('should return null for undefined key', () => {
      const struct = new Struct();
      expect(getJsonFromProtoStruct(struct, undefined)).toBeNull();
    });

    it('should parse JSON from string value', () => {
      const struct = new Struct();
      const value = new Value();
      value.setStringValue('{"name":"test","value":123}');
      struct.getFieldsMap().set('jsonKey', value);

      const result = getJsonFromProtoStruct(struct, 'jsonKey');
      expect(result).toEqual({ name: 'test', value: 123 });
    });

    it('should return null for non-existent key', () => {
      const struct = new Struct();

      const result = getJsonFromProtoStruct(struct, 'nonexistent');
      expect(result).toBeNull();
    });

    it('should handle nested struct value', () => {
      const struct = new Struct();
      const nestedStruct = new Struct();
      const nestedValue = new Value();
      nestedValue.setStringValue('nested-value');
      nestedStruct.getFieldsMap().set('nestedKey', nestedValue);

      const value = new Value();
      value.setStructValue(nestedStruct);
      struct.getFieldsMap().set('structKey', value);

      const result = getJsonFromProtoStruct(struct, 'structKey');
      expect(result).toHaveProperty('nestedKey', 'nested-value');
    });
  });
});
