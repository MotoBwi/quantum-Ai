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
import { Map } from "google-protobuf";
import { Any } from "google-protobuf/google/protobuf/any_pb";
import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";
import { Duration } from "google-protobuf/google/protobuf/duration_pb";
import { FieldMask } from "google-protobuf/google/protobuf/field_mask_pb";
import { Struct } from "google-protobuf/google/protobuf/struct_pb";
import { ListValue } from "google-protobuf/google/protobuf/struct_pb";
import { Value } from "google-protobuf/google/protobuf/struct_pb";
import {
  UInt32Value,
  FloatValue,
} from "google-protobuf/google/protobuf/wrappers_pb";
import {
  Int32Value,
  DoubleValue,
  BoolValue,
  BytesValue,
  UInt64Value,
  Int64Value,
} from "google-protobuf/google/protobuf/wrappers_pb";
import { StringValue } from "google-protobuf/google/protobuf/wrappers_pb";

// Helper function to pack data into `Any`
function pack(serialized: Uint8Array, typeUrlPrefix: string): Any {
  const anyValue = new Any();
  anyValue.pack(serialized, typeUrlPrefix);
  return anyValue;
}

//  string to `Any`
export function StringToAny(value: string): Any {
  const stringValue = new StringValue();
  stringValue.setValue(value);
  const serialized = stringValue.serializeBinary();
  return pack(serialized, "type.googleapis.com/google.protobuf.StringValue");
}

//  `Any` to string
export function AnyToString(anyValue: Any): string {
  const stringValue = StringValue.deserializeBinary(anyValue.getValue_asU8());
  return stringValue.getValue();
}

//  float to `Any`
export function FloatToAny(value: number): Any {
  const doubleValue = new DoubleValue();
  doubleValue.setValue(value);
  const serialized = doubleValue.serializeBinary();
  return pack(serialized, "type.googleapis.com/google.protobuf.DoubleValue");
}

//  `Any` to float
export function AnyToFloat(anyValue: Any): number {
  const doubleValue = DoubleValue.deserializeBinary(anyValue.getValue_asU8());
  return doubleValue.getValue();
}

//  integer to `Any`
export function Int32ToAny(value: number): Any {
  const int32Value = new Int32Value();
  int32Value.setValue(value);
  const serialized = int32Value.serializeBinary();
  return pack(serialized, "type.googleapis.com/google.protobuf.Int32Value");
}

//  `Any` to integer
export function AnyToInt32(anyValue: Any): number {
  const int32Value = Int32Value.deserializeBinary(anyValue.getValue_asU8());
  return int32Value.getValue();
}

//  boolean to `Any`
export function BoolToAny(value: boolean): Any {
  const boolValue = new BoolValue();
  boolValue.setValue(value);
  const serialized = boolValue.serializeBinary();
  return pack(serialized, "type.googleapis.com/google.protobuf.BoolValue");
}

//  `Any` to boolean
export function AnyToBool(anyValue: Any): boolean {
  const boolValue = BoolValue.deserializeBinary(anyValue.getValue_asU8());
  return boolValue.getValue();
}

//  bytes to `Any`
export function BytesToAny(value: Uint8Array): Any {
  const bytesValue = new BytesValue();
  bytesValue.setValue(value);
  const serialized = bytesValue.serializeBinary();
  return pack(serialized, "type.googleapis.com/google.protobuf.BytesValue");
}

//  JSON object to `Any`
export function JSONToAny(value: object): Any {
  const jsonString = JSON.stringify(value);
  const stringValue = new StringValue();
  stringValue.setValue(jsonString);
  const serialized = stringValue.serializeBinary();
  return pack(serialized, "type.googleapis.com/google.protobuf.StringValue");
}

//  `Any` to JSON object
export function AnyToJSON(anyValue: Any): object {
  const stringValue = StringValue.deserializeBinary(anyValue.getValue_asU8());
  return JSON.parse(stringValue.getValue());
}
/**
 *
 */
export function MapToObject(
  protoMap: Map<string, Any | Uint8Array>
): Record<string, any> {
  const result: Record<string, any> = {};

  if (!protoMap) {
    return result;
  }

  try {
    if (protoMap instanceof Map) {
      // Handle ES6 Map
      protoMap.forEach((value, key) => {
        result[key] = safeConvertValue(value);
      });
    } else if (protoMap && typeof protoMap === "object") {
      // Handle plain object
      Object.entries(protoMap).forEach(([key, value]) => {
        result[key] = safeConvertValue(value);
      });
    }
  } catch (error) {
    console.warn("MapToObject conversion error:", error);
  }

  return result;
}

function safeConvertValue(value: Any | Uint8Array | any): any {
  if (!value) {
    return null;
  }

  try {
    // Handle Uint8Array directly
    if (value instanceof Uint8Array) {
      return Array.from(value);
    }

    // Handle Any type
    if (value && typeof value.getTypeUrl === "function") {
      return convertAnyValue(value as Any);
    }

    // Handle primitive values
    if (
      typeof value === "string" ||
      typeof value === "number" ||
      typeof value === "boolean"
    ) {
      return value;
    }

    // Handle objects with toObject method
    if (value && typeof value.toObject === "function") {
      return value.toObject();
    }

    // Handle arrays
    if (Array.isArray(value)) {
      return value.map(safeConvertValue);
    }

    // Handle plain objects
    if (value && typeof value === "object") {
      const obj: Record<string, any> = {};
      Object.entries(value).forEach(([k, v]) => {
        obj[k] = safeConvertValue(v);
      });
      return obj;
    }

    return value;
  } catch (error) {
    console.warn("Value conversion error:", error);
    return null;
  }
}

function convertAnyValue(anyValue: Any): any {
  if (!anyValue) {
    return null;
  }

  try {
    const typeUrl = anyValue.getTypeUrl();
    const value = anyValue.getValue_asU8();
    const typeName = typeUrl.split("/").pop() || "";

    switch (typeName) {
      case "google.protobuf.StringValue":
        return safeDeserialize(() =>
          StringValue.deserializeBinary(value)?.getValue()
        );

      case "google.protobuf.Int32Value":
        return safeDeserialize(() =>
          Int32Value.deserializeBinary(value)?.getValue()
        );

      case "google.protobuf.UInt32Value":
        return safeDeserialize(() =>
          UInt32Value.deserializeBinary(value)?.getValue()
        );

      case "google.protobuf.Int64Value":
        return safeDeserialize(() =>
          Int64Value.deserializeBinary(value)?.getValue()?.toString()
        );

      case "google.protobuf.UInt64Value":
        return safeDeserialize(() =>
          UInt64Value.deserializeBinary(value)?.getValue()?.toString()
        );

      case "google.protobuf.FloatValue":
        return safeDeserialize(() =>
          FloatValue.deserializeBinary(value)?.getValue()
        );

      case "google.protobuf.DoubleValue":
        return safeDeserialize(() =>
          DoubleValue.deserializeBinary(value)?.getValue()
        );

      case "google.protobuf.BoolValue":
        return safeDeserialize(() =>
          BoolValue.deserializeBinary(value)?.getValue()
        );

      case "google.protobuf.BytesValue":
        return safeDeserialize(() => {
          const bytes = BytesValue.deserializeBinary(value)?.getValue_asU8();
          return bytes ? Array.from(bytes) : null;
        });

      case "google.protobuf.Timestamp":
        return safeDeserialize(() => {
          const timestamp = Timestamp.deserializeBinary(value);
          if (!timestamp) return null;
          const seconds = timestamp.getSeconds();
          const nanos = timestamp.getNanos();
          return new Date(seconds * 1000 + nanos / 1000000);
        });

      case "google.protobuf.Struct":
        return safeDeserialize(() => {
          const struct = Struct.deserializeBinary(value);
          if (!struct) return null;
          return convertStruct(struct);
        });

      case "google.protobuf.Value":
        return safeDeserialize(() => {
          const val = Value.deserializeBinary(value);
          if (!val) return null;
          return convertValue(val);
        });

      case "google.protobuf.Any":
        return safeDeserialize(() => {
          const nestedAny = Any.deserializeBinary(value);
          return nestedAny ? convertAnyValue(nestedAny) : null;
        });

      default:
        // Try to handle as generic message with toObject
        return safeDeserialize(() => {
          // For unknown types, return type info
          return {
            $type: typeUrl,
            $data: Array.from(value),
          };
        });
    }
  } catch (error) {
    console.warn(`Failed to convert Any type ${anyValue.getTypeUrl()}:`, error);
    return null;
  }
}

function safeDeserialize<T>(deserializer: () => T): T | null {
  try {
    return deserializer();
  } catch (error) {
    console.warn("Deserialization error:", error);
    return null;
  }
}

function convertStruct(struct: Struct): Record<string, any> {
  const result: Record<string, any> = {};
  try {
    const fieldsMap = struct.getFieldsMap();
    fieldsMap?.forEach((value: Value, key: string) => {
      result[key] = convertValue(value);
    });
  } catch (error) {
    console.warn("Struct conversion error:", error);
  }
  return result;
}

function convertValue(value: Value): any {
  if (!value) return null;

  try {
    const kindCase = value.getKindCase();

    switch (kindCase) {
      case Value.KindCase.NULL_VALUE:
        return null;
      case Value.KindCase.NUMBER_VALUE:
        return value.getNumberValue();
      case Value.KindCase.STRING_VALUE:
        return value.getStringValue();
      case Value.KindCase.BOOL_VALUE:
        return value.getBoolValue();
      case Value.KindCase.STRUCT_VALUE:
        const structValue = value.getStructValue();
        return structValue ? convertStruct(structValue) : null;
      case Value.KindCase.LIST_VALUE:
        const listValue = value.getListValue();
        return listValue ? listValue.getValuesList().map(convertValue) : [];
      default:
        return null;
    }
  } catch (error) {
    console.warn("Value conversion error:", error);
    return null;
  }
}
