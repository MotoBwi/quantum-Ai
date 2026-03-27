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
import { Metadata, Metric } from "@/rapida/clients/protos/common_pb";
import { Struct, Value } from "google-protobuf/google/protobuf/struct_pb";

/** Metric name for time taken in operation */
const TIME_TAKEN = "TIME_TAKEN";
/** Metric name for operation status */
const STATUS = "STATUS";
/** Metric name for input token count */
const INPUT_TOKEN = "INPUT_TOKEN";
/** Metric name for output token count */
const OUTPUT_TOKEN = "OUTPUT_TOKEN";
/** Metric name for total token count */
const TOTAL_TOKEN = "TOTAL_TOKEN";
/** Metric name for total cost */
const COST = "COST";
/** Metric name for input cost */
const INPUT_COST = "INPUT_COST";
/** Metric name for output cost */
const OUTPUT_COST = "OUTPUT_COST";
/** Metric name for LLM request identifier */
const LLM_REQUEST_ID = "LLM_REQUEST_ID";

/**
 * Retrieves the total token count from a metrics array
 * @param metrics - Array of Metric objects to search through
 * @returns The total token count as a number, or 0 if not found
 */
export const getTotalTokenMetric = (metrics: Array<Metric>): number => {
  let ttl = metrics.find((x) => x.getName() === TOTAL_TOKEN);
  return ttl ? +ttl.getValue() : 0;
};

/**
 * Retrieves the time taken metric from a metrics array
 * @param metrics - Array of Metric objects to search through
 * @returns The time taken as a number, or 0 if not found
 */
export const getTimeTakenMetric = (metrics: Array<Metric>): number => {
  let ttl = metrics.find((x) => x.getName() === TIME_TAKEN);
  return ttl ? +ttl.getValue() : 0;
};

/**
 * Retrieves a value from a metadata array by key
 * @param mt - Array of Metadata objects to search through
 * @param k - Key to search for
 * @returns The value if found, undefined otherwise
 */
export function getMetadataValue(mt: Metadata[], k: string) {
  let _mt = mt.find((m) => {
    return m.getKey() === k;
  });

  return _mt?.getValue();
}

/**
 * Retrieves a value from a metadata array by key with a default fallback
 * @param mt - Array of Metadata objects to search through
 * @param k - Key to search for
 * @param df - Default value to return if key not found
 * @returns The value if found, default value otherwise
 */
export function getMetadataValueOrDefault(
  mt: Metadata[],
  k: string,
  df: string
) {
  let _mt = mt.find((m) => {
    return m.getKey() === k;
  });

  return _mt ? _mt?.getValue() : df;
}

/**
 * Extracts a string value from a Protocol Buffer Struct
 * @param struct - Protocol Buffer Struct object
 * @param key - Key to extract
 * @returns String value if found and is string type, null otherwise
 */
export function getStringFromProtoStruct(
  struct?: Struct,
  key?: string
): string | null {
  if (!struct || !key) {
    return null;
  }
  const fields = struct.getFieldsMap();
  const value = fields.get(key);

  if (value && value.getKindCase() === Value.KindCase.STRING_VALUE) {
    return value.getStringValue();
  }

  return null;
}

/**
 * Extracts and parses a JSON value from a Protocol Buffer Struct
 * @param struct - Protocol Buffer Struct object
 * @param key - Key to extract
 * @returns Parsed JSON object if found, null otherwise
 * @description Handles both string-encoded JSON and nested Struct values
 */
export function getJsonFromProtoStruct(
  struct?: Struct,
  key?: string
): Record<string, any> | null {
  if (!struct || !key) {
    return null;
  }
  const fields = struct.getFieldsMap();
  const value = fields.get(key);

  if (value && value.getKindCase() === Value.KindCase.STRING_VALUE) {
    return JSON.parse(value.getStringValue());
  }

  if (value && value.getKindCase() === Value.KindCase.STRUCT_VALUE) {
    const result = value.getStructValue()?.toJavaScript();
    return result ?? {};
  }

  return null;
}
