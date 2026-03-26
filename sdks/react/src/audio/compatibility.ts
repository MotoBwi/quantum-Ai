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
export function isIosDevice(): boolean {
  if (typeof navigator === "undefined") return false;
  return (
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    /iPad|iPhone|iPod/.test(navigator.platform) ||
    // iPad on iOS 13+ reports as "MacIntel" with touch support
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) ||
    (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  );
}

export function isAndroidDevice(): boolean {
  if (typeof navigator === "undefined") return false;
  return /Android/i.test(navigator.userAgent);
}

export function isWindowsDevice() {
  if (typeof navigator === "undefined") return false;
  return /win(dows|32|64|nt)/i.test(navigator.userAgent) ||
    navigator.platform?.toLowerCase().includes("win");
}

/**
 * Check if the current browser/OS combination has known audio issues.
 * This can be used to provide appropriate warnings or fallbacks.
 */
export function hasKnownAudioIssues(): { hasIssues: boolean; issues: string[] } {
  const issues: string[] = [];

  if (isWindowsDevice()) {
    // Check for Firefox on Windows (limited setSinkId support)
    if (/firefox/i.test(navigator.userAgent)) {
      issues.push("Firefox on Windows has limited audio output device selection support");
    }

    // Check for older Edge (EdgeHTML, not Chromium)
    if (/edge\//i.test(navigator.userAgent) && !/edg\//i.test(navigator.userAgent)) {
      issues.push("Legacy Edge has limited WebRTC audio support");
    }
  }

  return {
    hasIssues: issues.length > 0,
    issues,
  };
}

/**
 * Get recommended audio settings for the current platform.
 */
export function getRecommendedAudioSettings(): {
  sampleRate: number;
  channelCount: number;
  echoCancellation: boolean;
  noiseSuppression: boolean;
  autoGainControl: boolean;
} {
  const settings = {
    sampleRate: 48000,
    channelCount: 1,
    echoCancellation: true,
    noiseSuppression: true,
    autoGainControl: true,
  };

  // Windows-specific adjustments
  if (isWindowsDevice()) {
    // Some Windows audio drivers work better with 44100Hz
    if (/firefox/i.test(navigator.userAgent)) {
      settings.sampleRate = 44100;
    }
  }

  return settings;
}
