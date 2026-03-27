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

export type RapidaSource =
  | "web-plugin"
  | "debugger"
  | "sdk"
  | "phone-call"
  | "whatsapp"
  | "webrtc";
export const WEB_PLUGIN_SOURCE: RapidaSource = "web-plugin";
export const DEBUGGER_SOURCE: RapidaSource = "debugger";
export const SDK_SOURCE: RapidaSource = "sdk";
export const PHONE_CALL_SOURCE: RapidaSource = "phone-call";
export const WHATSAPP_SOURCE: RapidaSource = "whatsapp";
export const WEBRTC_SOURCE: RapidaSource = "webrtc";

export function getRapidaSourceValue(source: RapidaSource): string {
  return source;
}

// FromStr returns the corresponding RapidaSource for a given string,
// or 'web-plugin' if the string does not match any source.
export function fromStr(label: string): RapidaSource {
  switch (label.toLowerCase()) {
    case "web-plugin":
      return WEB_PLUGIN_SOURCE;
    case "debugger":
      return DEBUGGER_SOURCE;
    case "sdk":
      return SDK_SOURCE;
    case "phone-call":
      return PHONE_CALL_SOURCE;
    case "whatsapp":
      return WHATSAPP_SOURCE;
    case "webrtc":
      return WEBRTC_SOURCE;

    default:
      console.warn(
        "The source is not supported. Only 'web-plugin', 'debugger', 'sdk', 'webrtc' are allowed."
      );
      return SDK_SOURCE;
  }
}
