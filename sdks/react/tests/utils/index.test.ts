/**
 * Tests for utility functions
 */

// Mock rapida_client
jest.mock('@/rapida/utils/rapida_client', () => ({
  getBrowser: jest.fn().mockReturnValue({
    name: 'Chrome',
    os: 'macOS',
    version: '100',
  }),
}));

import {
  isSafari,
  isChrome,
  isFirefox,
  isInternetExplorer,
  isEdge,
  isMacOs,
  isIOS,
  isWindows,
  isLinux,
  isSinkIdSupported,
  hasFullWebRTCAudioSupport,
  toDate,
  toHumanReadableDate,
  toHumanReadableDateTime,
  toHumanReadableRelativeTime,
  daysAgoFromTimestamp,
  toHumanReadableRelativeDay,
  getTimeFromDate,
  isMobile,
  isIOSSafari,
} from '@/rapida/utils';
import { getBrowser } from '@/rapida/utils/rapida_client';

describe('Browser Detection Utils', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('isSafari()', () => {
    it('should return true for Safari browser', () => {
      (getBrowser as jest.Mock).mockReturnValue({ name: 'Safari' });
      expect(isSafari()).toBe(true);
    });

    it('should return false for non-Safari browser', () => {
      (getBrowser as jest.Mock).mockReturnValue({ name: 'Chrome' });
      expect(isSafari()).toBe(false);
    });
  });

  describe('isChrome()', () => {
    it('should return true for Chrome browser', () => {
      (getBrowser as jest.Mock).mockReturnValue({ name: 'Chrome' });
      expect(isChrome()).toBe(true);
    });

    it('should return false for non-Chrome browser', () => {
      (getBrowser as jest.Mock).mockReturnValue({ name: 'Firefox' });
      expect(isChrome()).toBe(false);
    });
  });

  describe('isFirefox()', () => {
    it('should return true for Firefox browser', () => {
      (getBrowser as jest.Mock).mockReturnValue({ name: 'Firefox' });
      expect(isFirefox()).toBe(true);
    });

    it('should return false for non-Firefox browser', () => {
      (getBrowser as jest.Mock).mockReturnValue({ name: 'Chrome' });
      expect(isFirefox()).toBe(false);
    });
  });

  describe('isInternetExplorer()', () => {
    it('should return true for Internet Explorer', () => {
      (getBrowser as jest.Mock).mockReturnValue({ name: 'Internet Explorer' });
      expect(isInternetExplorer()).toBe(true);
    });

    it('should return false for non-IE browser', () => {
      (getBrowser as jest.Mock).mockReturnValue({ name: 'Edge' });
      expect(isInternetExplorer()).toBe(false);
    });
  });

  describe('isEdge()', () => {
    it('should return true for Edge browser', () => {
      (getBrowser as jest.Mock).mockReturnValue({ name: 'Edge' });
      expect(isEdge()).toBe(true);
    });

    it('should return false for non-Edge browser', () => {
      (getBrowser as jest.Mock).mockReturnValue({ name: 'Chrome' });
      expect(isEdge()).toBe(false);
    });
  });

  describe('isMacOs()', () => {
    it('should return true for macOS', () => {
      (getBrowser as jest.Mock).mockReturnValue({ os: 'macOS' });
      expect(isMacOs()).toBe(true);
    });

    it('should return false for non-macOS', () => {
      (getBrowser as jest.Mock).mockReturnValue({ os: 'Windows' });
      expect(isMacOs()).toBe(false);
    });
  });

  describe('isIOS()', () => {
    it('should return true for iOS', () => {
      (getBrowser as jest.Mock).mockReturnValue({ os: 'iOS' });
      expect(isIOS()).toBe(true);
    });

    it('should return false for non-iOS', () => {
      (getBrowser as jest.Mock).mockReturnValue({ os: 'Android' });
      expect(isIOS()).toBe(false);
    });
  });

  describe('isWindows()', () => {
    it('returns true for Windows', () => {
      (getBrowser as jest.Mock).mockReturnValue({ os: 'Windows' });
      expect(isWindows()).toBe(true);
    });
  });

  describe('isLinux()', () => {
    it('returns true for Linux', () => {
      (getBrowser as jest.Mock).mockReturnValue({ os: 'Linux' });
      expect(isLinux()).toBe(true);
    });
  });
});

describe('Date Utils', () => {
  describe('toDate()', () => {
    it('should convert protobuf Timestamp to Date', () => {
      const mockTimestamp = {
        getSeconds: () => 1706198400, // 2024-01-25 12:00:00 UTC
        getNanos: () => 0,
      };

      const result = toDate(mockTimestamp as any);

      expect(result).toBeInstanceOf(Date);
      expect(result.getUTCFullYear()).toBe(2024);
      expect(result.getUTCMonth()).toBe(0); // January
      expect(result.getUTCDate()).toBe(25);
    });

    it('should handle nanoseconds', () => {
      const mockTimestamp = {
        getSeconds: () => 1706198400,
        getNanos: () => 500000000, // 0.5 seconds
      };

      const result = toDate(mockTimestamp as any);

      expect(result).toBeInstanceOf(Date);
    });

    it('should handle zero timestamp', () => {
      const mockTimestamp = {
        getSeconds: () => 0,
        getNanos: () => 0,
      };

      const result = toDate(mockTimestamp as any);

      expect(result).toBeInstanceOf(Date);
      expect(result.getTime()).toBe(0);
    });
  });

  describe('toHumanReadableDate()', () => {
    it('should format date in human readable format', () => {
      const mockTimestamp = {
        getSeconds: () => 1706198400,
        getNanos: () => 0,
      };

      const result = toHumanReadableDate(mockTimestamp as any);

      expect(typeof result).toBe('string');
      expect(result).toContain('2024');
      expect(result).toContain('Jan');
    });
  });

  describe('other date helpers', () => {
    it('formats UTC datetime string', () => {
      const mockTimestamp = { getSeconds: () => 1706198400, getNanos: () => 0 };
      const result = toHumanReadableDateTime(mockTimestamp as any);
      expect(result).toContain('GMT');
    });

    it('formats relative time', () => {
      const nowSec = Math.floor(Date.now() / 1000);
      const mockTimestamp = { getSeconds: () => nowSec - 3600, getNanos: () => 0 };
      const result = toHumanReadableRelativeTime(mockTimestamp as any);
      expect(typeof result).toBe('string');
      expect(result.length).toBeGreaterThan(0);
    });

    it('computes days ago and relative day labels', () => {
      const nowSec = Math.floor(Date.now() / 1000);
      const nowTs = { getSeconds: () => nowSec, getNanos: () => 0 };
      const yesterdayTs = { getSeconds: () => nowSec - 86400, getNanos: () => 0 };
      const oldTs = { getSeconds: () => nowSec - 3 * 86400, getNanos: () => 0 };

      expect(daysAgoFromTimestamp(nowTs as any)).toBe(0);
      expect(toHumanReadableRelativeDay(nowTs as any)).toBe('today');
      expect(toHumanReadableRelativeDay(yesterdayTs as any)).toBe('yesterday');
      expect(toHumanReadableRelativeDay(oldTs as any)).toContain('days ago');
    });

    it('returns HH:mm from timestamp', () => {
      const mockTimestamp = { getSeconds: () => 1706198400, getNanos: () => 0 };
      const result = getTimeFromDate(mockTimestamp as any);
      expect(result).toMatch(/^\d{2}:\d{2}$/);
    });
  });
});

describe('isSinkIdSupported()', () => {
  it('returns true when audio element has setSinkId', () => {
    const originalCreateElement = document.createElement.bind(document);
    const createSpy = jest.spyOn(document, 'createElement').mockImplementation((tagName: any) => {
      if (tagName === 'audio') return { setSinkId: jest.fn() } as any;
      return originalCreateElement(tagName);
    });
    expect(isSinkIdSupported()).toBe(true);
    createSpy.mockRestore();
  });

  it('returns false when audio element lacks setSinkId', () => {
    const originalCreateElement = document.createElement.bind(document);
    const createSpy = jest.spyOn(document, 'createElement').mockImplementation((tagName: any) => {
      if (tagName === 'audio') return {} as any;
      return originalCreateElement(tagName);
    });
    expect(isSinkIdSupported()).toBe(false);
    createSpy.mockRestore();
  });
});

// ---------------------------------------------------------------------------
// hasFullWebRTCAudioSupport()
// ---------------------------------------------------------------------------

describe('hasFullWebRTCAudioSupport()', () => {
  const originalRTCPeerConnection = (global as any).RTCPeerConnection;
  const originalAudioContext = (window as any).AudioContext;
  const originalWebkitAudioContext = (window as any).webkitAudioContext;

  afterEach(() => {
    // Restore globals modified per-test
    if (originalRTCPeerConnection !== undefined) {
      (global as any).RTCPeerConnection = originalRTCPeerConnection;
    } else {
      delete (global as any).RTCPeerConnection;
    }
    if (originalAudioContext !== undefined) {
      (window as any).AudioContext = originalAudioContext;
    } else {
      delete (window as any).AudioContext;
    }
    if (originalWebkitAudioContext !== undefined) {
      (window as any).webkitAudioContext = originalWebkitAudioContext;
    } else {
      delete (window as any).webkitAudioContext;
    }
  });

  it('returns false when RTCPeerConnection is not available', () => {
    delete (global as any).RTCPeerConnection;
    expect(hasFullWebRTCAudioSupport()).toBe(false);
  });

  it('returns true when RTCPeerConnection and AudioContext are both available', () => {
    (global as any).RTCPeerConnection = jest.fn();
    // AudioContext is set in setup.ts via MockAudioContext
    expect(hasFullWebRTCAudioSupport()).toBe(true);
  });

  /**
   * BUG FIX: Safari < 14.1 only exposes webkitAudioContext, not the
   * standard AudioContext.  The old check returned false for these browsers,
   * causing consumers to incorrectly block the SDK.
   *
   * The fix adds a webkitAudioContext fallback so the function returns true
   * on Safari 13 / iOS 14.0 where the SDK actually works.
   */
  it('returns true when only webkitAudioContext is available (Safari < 14.1)', () => {
    (global as any).RTCPeerConnection = jest.fn();
    delete (window as any).AudioContext;
    (window as any).webkitAudioContext = jest.fn();

    expect(hasFullWebRTCAudioSupport()).toBe(true);
  });

  it('returns false when neither AudioContext nor webkitAudioContext is available', () => {
    (global as any).RTCPeerConnection = jest.fn();
    // setup.ts defines AudioContext via Object.defineProperty without configurable:true,
    // so delete fails silently.  Use assignment to undefined instead — the property
    // was created with writable:true so assignment works.
    (window as any).AudioContext = undefined;
    (window as any).webkitAudioContext = undefined;

    expect(hasFullWebRTCAudioSupport()).toBe(false);
  });

  it('returns false when getUserMedia is not available', () => {
    (global as any).RTCPeerConnection = jest.fn();
    const originalGetUserMedia = navigator.mediaDevices.getUserMedia;
    // @ts-ignore
    delete navigator.mediaDevices.getUserMedia;

    expect(hasFullWebRTCAudioSupport()).toBe(false);

    (navigator.mediaDevices as any).getUserMedia = originalGetUserMedia;
  });
});

describe('isMobile() / isIOSSafari()', () => {
  const originalInnerWidth = window.innerWidth;
  const originalUA = navigator.userAgent;
  const originalPlatform = navigator.platform;
  const originalMaxTouchPoints = navigator.maxTouchPoints;

  const setNavigatorProps = (ua: string, platform: string, maxTouchPoints: number) => {
    Object.defineProperty(window.navigator, 'userAgent', { value: ua, configurable: true });
    Object.defineProperty(window.navigator, 'platform', { value: platform, configurable: true });
    Object.defineProperty(window.navigator, 'maxTouchPoints', { value: maxTouchPoints, configurable: true });
  };

  afterEach(() => {
    Object.defineProperty(window, 'innerWidth', { value: originalInnerWidth, configurable: true });
    Object.defineProperty(window.navigator, 'userAgent', { value: originalUA, configurable: true });
    Object.defineProperty(window.navigator, 'platform', { value: originalPlatform, configurable: true });
    Object.defineProperty(window.navigator, 'maxTouchPoints', { value: originalMaxTouchPoints, configurable: true });
  });

  it('detects mobile with mobile UA and small screen', () => {
    setNavigatorProps(
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)',
      'iPhone',
      5,
    );
    Object.defineProperty(window, 'innerWidth', { value: 390, configurable: true });
    expect(isMobile()).toBe(true);
  });

  it('returns false for desktop UA and no touch on large screen', () => {
    setNavigatorProps(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0)',
      'MacIntel',
      0,
    );
    Object.defineProperty(window, 'innerWidth', { value: 1440, configurable: true });
    expect(isMobile()).toBe(false);
  });

  it('detects iOS Safari only when iOS + mobile + Safari', () => {
    (getBrowser as jest.Mock).mockReturnValue({ name: 'Safari', os: 'iOS' });
    setNavigatorProps(
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)',
      'iPhone',
      5,
    );
    Object.defineProperty(window, 'innerWidth', { value: 390, configurable: true });
    expect(isIOSSafari()).toBe(true);
  });
});
