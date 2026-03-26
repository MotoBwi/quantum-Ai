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
const commonVersionIdentifier = /version\/(\d+(\.?_?\d+)+)/i;

export type DetectableBrowser =
  | "Chrome"
  | "Firefox"
  | "Safari"
  | "Internet Explorer"
  | "Edge";
export type DetectableOS = "iOS" | "macOS" | "Windows" | "Android" | "Linux";

export type BrowserDetails = {
  name: DetectableBrowser;
  version: string;
  os?: DetectableOS;
  osVersion?: string;
};

let browserDetails: BrowserDetails | undefined;

/**
 * @internal
 */
export function getBrowser(
  userAgent?: string,
  force = true
): BrowserDetails | undefined {
  if (typeof userAgent === "undefined" && typeof navigator === "undefined") {
    return;
  }
  const ua = (userAgent ?? navigator.userAgent).toLowerCase();
  if (browserDetails === undefined || force) {
    const browser = browsersList.find(({ test }) => test.test(ua));
    browserDetails = browser?.describe(ua);
  }
  return browserDetails;
}

const browsersList = [
  /* Edge (Chromium-based) - must be checked before Chrome */
  {
    test: /edg\//i,
    describe(ua: string) {
      const browser: BrowserDetails = {
        name: "Edge",
        version: getMatch(/edg\/(\d+(\.?_?\d+)+)/i, ua),
        os: getOS(ua),
        osVersion: getOSVersion(ua),
      };
      return browser;
    },
  },
  /* Edge Legacy */
  {
    test: /edge\//i,
    describe(ua: string) {
      const browser: BrowserDetails = {
        name: "Edge",
        version: getMatch(/edge\/(\d+(\.?_?\d+)+)/i, ua),
        os: getOS(ua),
        osVersion: getOSVersion(ua),
      };
      return browser;
    },
  },
  /* Internet Explorer */
  {
    test: /trident|msie/i,
    describe(ua: string) {
      const browser: BrowserDetails = {
        name: "Internet Explorer",
        version: getMatch(/(?:msie |rv:)(\d+(\.?\d+)+)/i, ua),
        os: "Windows",
        osVersion: getOSVersion(ua),
      };
      return browser;
    },
  },
  {
    test: /firefox|iceweasel|fxios/i,
    describe(ua: string) {
      const browser: BrowserDetails = {
        name: "Firefox",
        version: getMatch(
          /(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,
          ua
        ),
        os: ua.toLowerCase().includes("fxios") ? "iOS" : getOS(ua),
        osVersion: getOSVersion(ua),
      };
      return browser;
    },
  },
  {
    test: /chrom|crios|crmo/i,
    describe(ua: string) {
      const browser: BrowserDetails = {
        name: "Chrome",
        version: getMatch(
          /(?:chrome|chromium|crios|crmo)\/(\d+(\.?_?\d+)+)/i,
          ua
        ),
        os: ua.toLowerCase().includes("crios") ? "iOS" : getOS(ua),
        osVersion: getOSVersion(ua),
      };

      return browser;
    },
  },
  /* Safari */
  {
    test: /safari|applewebkit/i,
    describe(ua: string) {
      const browser: BrowserDetails = {
        name: "Safari",
        version: getMatch(commonVersionIdentifier, ua),
        os: ua.includes("mobile/") ? "iOS" : getOS(ua) || "macOS",
        osVersion: getOSVersion(ua),
      };

      return browser;
    },
  },
];

function getMatch(exp: RegExp, ua: string, id = 1) {
  const match = ua.match(exp);
  return (match && match.length >= id && match[id]) || "";
}

function getOSVersion(ua: string) {
  if (ua.includes("mac os")) {
    return getMatch(/\(.+?(\d+_\d+(:?_\d+)?)/, ua, 1).replace(/_/g, ".");
  }
  if (ua.includes("windows nt")) {
    return getMatch(/windows nt ([\d.]+)/i, ua, 1);
  }
  if (ua.includes("android")) {
    return getMatch(/android ([\d.]+)/i, ua, 1);
  }
  return undefined;
}

function getOS(ua: string): DetectableOS | undefined {
  const uaLower = ua.toLowerCase();
  if (uaLower.includes("iphone") || uaLower.includes("ipad") || uaLower.includes("ipod")) {
    return "iOS";
  }
  if (uaLower.includes("mac os") && !uaLower.includes("iphone") && !uaLower.includes("ipad")) {
    return "macOS";
  }
  if (uaLower.includes("windows")) {
    return "Windows";
  }
  if (uaLower.includes("android")) {
    return "Android";
  }
  if (uaLower.includes("linux") && !uaLower.includes("android")) {
    return "Linux";
  }
  return undefined;
}
