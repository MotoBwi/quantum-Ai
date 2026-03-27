/*
 *  Copyright (c) 2024. Rapida
 *
 *  Unit tests for rapida_value utility functions
 */

import {
  StringToAny,
  AnyToString,
  FloatToAny,
  AnyToFloat,
  Int32ToAny,
  AnyToInt32,
  BoolToAny,
  AnyToBool,
  BytesToAny,
  JSONToAny,
  AnyToJSON,
  MapToObject,
} from '../../utils/rapida_value';
import { Any } from 'google-protobuf/google/protobuf/any_pb';

describe('rapida_value', () => {
  describe('StringToAny and AnyToString', () => {
    it('should convert string to Any and back', () => {
      const originalValue = 'Hello, World!';
      const anyValue = StringToAny(originalValue);

      expect(anyValue).toBeInstanceOf(Any);
      expect(anyValue.getTypeUrl()).toContain('google.protobuf.StringValue');

      const result = AnyToString(anyValue);
      expect(result).toBe(originalValue);
    });

    it('should handle empty string', () => {
      const originalValue = '';
      const anyValue = StringToAny(originalValue);
      const result = AnyToString(anyValue);

      expect(result).toBe(originalValue);
    });

    it('should handle string with special characters', () => {
      const originalValue = 'Hello\nWorld\t!@#$%^&*()';
      const anyValue = StringToAny(originalValue);
      const result = AnyToString(anyValue);

      expect(result).toBe(originalValue);
    });

    it('should handle unicode characters', () => {
      const originalValue = 'こんにちは世界 🌍';
      const anyValue = StringToAny(originalValue);
      const result = AnyToString(anyValue);

      expect(result).toBe(originalValue);
    });
  });

  describe('FloatToAny and AnyToFloat', () => {
    it('should convert float to Any and back', () => {
      const originalValue = 3.14159;
      const anyValue = FloatToAny(originalValue);

      expect(anyValue).toBeInstanceOf(Any);
      expect(anyValue.getTypeUrl()).toContain('google.protobuf.DoubleValue');

      const result = AnyToFloat(anyValue);
      expect(result).toBeCloseTo(originalValue, 5);
    });

    it('should handle zero', () => {
      const originalValue = 0;
      const anyValue = FloatToAny(originalValue);
      const result = AnyToFloat(anyValue);

      expect(result).toBe(originalValue);
    });

    it('should handle negative float', () => {
      const originalValue = -123.456;
      const anyValue = FloatToAny(originalValue);
      const result = AnyToFloat(anyValue);

      expect(result).toBeCloseTo(originalValue, 5);
    });

    it('should handle large float', () => {
      const originalValue = 1e10;
      const anyValue = FloatToAny(originalValue);
      const result = AnyToFloat(anyValue);

      expect(result).toBe(originalValue);
    });

    it('should handle small float', () => {
      const originalValue = 1e-10;
      const anyValue = FloatToAny(originalValue);
      const result = AnyToFloat(anyValue);

      expect(result).toBeCloseTo(originalValue, 15);
    });
  });

  describe('Int32ToAny and AnyToInt32', () => {
    it('should convert integer to Any and back', () => {
      const originalValue = 42;
      const anyValue = Int32ToAny(originalValue);

      expect(anyValue).toBeInstanceOf(Any);
      expect(anyValue.getTypeUrl()).toContain('google.protobuf.Int32Value');

      const result = AnyToInt32(anyValue);
      expect(result).toBe(originalValue);
    });

    it('should handle zero', () => {
      const originalValue = 0;
      const anyValue = Int32ToAny(originalValue);
      const result = AnyToInt32(anyValue);

      expect(result).toBe(originalValue);
    });

    it('should handle negative integer', () => {
      const originalValue = -100;
      const anyValue = Int32ToAny(originalValue);
      const result = AnyToInt32(anyValue);

      expect(result).toBe(originalValue);
    });

    it('should handle max Int32 value', () => {
      const originalValue = 2147483647; // Max Int32
      const anyValue = Int32ToAny(originalValue);
      const result = AnyToInt32(anyValue);

      expect(result).toBe(originalValue);
    });

    it('should handle min Int32 value', () => {
      const originalValue = -2147483648; // Min Int32
      const anyValue = Int32ToAny(originalValue);
      const result = AnyToInt32(anyValue);

      expect(result).toBe(originalValue);
    });
  });

  describe('BoolToAny and AnyToBool', () => {
    it('should convert true to Any and back', () => {
      const originalValue = true;
      const anyValue = BoolToAny(originalValue);

      expect(anyValue).toBeInstanceOf(Any);
      expect(anyValue.getTypeUrl()).toContain('google.protobuf.BoolValue');

      const result = AnyToBool(anyValue);
      expect(result).toBe(originalValue);
    });

    it('should convert false to Any and back', () => {
      const originalValue = false;
      const anyValue = BoolToAny(originalValue);
      const result = AnyToBool(anyValue);

      expect(result).toBe(originalValue);
    });
  });

  describe('BytesToAny', () => {
    it('should convert Uint8Array to Any', () => {
      const originalValue = new Uint8Array([1, 2, 3, 4, 5]);
      const anyValue = BytesToAny(originalValue);

      expect(anyValue).toBeInstanceOf(Any);
      expect(anyValue.getTypeUrl()).toContain('google.protobuf.BytesValue');
    });

    it('should handle empty Uint8Array', () => {
      const originalValue = new Uint8Array([]);
      const anyValue = BytesToAny(originalValue);

      expect(anyValue).toBeInstanceOf(Any);
    });

    it('should handle large Uint8Array', () => {
      const originalValue = new Uint8Array(1000).fill(255);
      const anyValue = BytesToAny(originalValue);

      expect(anyValue).toBeInstanceOf(Any);
    });
  });

  describe('JSONToAny and AnyToJSON', () => {
    it('should convert simple object to Any and back', () => {
      const originalValue = { name: 'test', value: 123 };
      const anyValue = JSONToAny(originalValue);

      expect(anyValue).toBeInstanceOf(Any);

      const result = AnyToJSON(anyValue);
      expect(result).toEqual(originalValue);
    });

    it('should handle nested object', () => {
      const originalValue = {
        level1: {
          level2: {
            level3: 'deep',
          },
        },
      };
      const anyValue = JSONToAny(originalValue);
      const result = AnyToJSON(anyValue);

      expect(result).toEqual(originalValue);
    });

    it('should handle arrays in object', () => {
      const originalValue = {
        items: [1, 2, 3],
        mixed: ['a', 1, true],
      };
      const anyValue = JSONToAny(originalValue);
      const result = AnyToJSON(anyValue);

      expect(result).toEqual(originalValue);
    });

    it('should handle empty object', () => {
      const originalValue = {};
      const anyValue = JSONToAny(originalValue);
      const result = AnyToJSON(anyValue);

      expect(result).toEqual(originalValue);
    });

    it('should handle complex nested structure', () => {
      const originalValue = {
        users: [
          { id: 1, name: 'Alice' },
          { id: 2, name: 'Bob' },
        ],
        metadata: {
          count: 2,
          active: true,
        },
      };
      const anyValue = JSONToAny(originalValue);
      const result = AnyToJSON(anyValue);

      expect(result).toEqual(originalValue);
    });
  });

  describe('MapToObject', () => {
    it('should return empty object for null/undefined input', () => {
      expect(MapToObject(null as any)).toEqual({});
      expect(MapToObject(undefined as any)).toEqual({});
    });

    it('should handle plain object with string values', () => {
      const obj = {
        key1: 'value1',
        key2: 'value2',
      };

      const result = MapToObject(obj as any);

      expect(result).toHaveProperty('key1', 'value1');
      expect(result).toHaveProperty('key2', 'value2');
    });

    it('should handle plain object with mixed values', () => {
      const obj = {
        key1: 'value1',
        key2: 123,
        key3: true,
      };

      const result = MapToObject(obj as any);

      expect(result).toEqual(obj);
    });

    it('should handle object with Uint8Array values', () => {
      const obj = {
        bytes: new Uint8Array([1, 2, 3]),
      };

      const result = MapToObject(obj as any);

      expect(result.bytes).toEqual([1, 2, 3]);
    });

    it('should handle object with nested objects', () => {
      const obj = {
        nested: {
          value: 'test',
        },
      };

      const result = MapToObject(obj as any);

      expect(result.nested).toEqual({ value: 'test' });
    });

    it('should handle object with arrays', () => {
      const obj = {
        items: [1, 2, 3],
      };

      const result = MapToObject(obj as any);

      expect(result.items).toEqual([1, 2, 3]);
    });
  });
});
