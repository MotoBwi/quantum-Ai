/**
 * Tests for audio compatibility utilities
 */

// We need to test the compatibility module
// Let's first check what it exports
import { 
  isAndroidDevice, 
  isIosDevice, 
  isWindowsDevice,
  hasKnownAudioIssues,
  getRecommendedAudioSettings,
} from '@/rapida/audio/compatibility';

describe('Audio Compatibility Utils', () => {
  const originalNavigator = window.navigator;
  const originalUserAgent = window.navigator.userAgent;

  beforeEach(() => {
    // Reset navigator.userAgent for each test
    Object.defineProperty(window.navigator, 'userAgent', {
      value: originalUserAgent,
      writable: true,
      configurable: true,
    });
  });

  afterAll(() => {
    // Restore original navigator
    Object.defineProperty(window, 'navigator', {
      value: originalNavigator,
      writable: true,
    });
  });

  describe('isAndroidDevice()', () => {
    it('should return true for Android user agent', () => {
      Object.defineProperty(window.navigator, 'userAgent', {
        value: 'Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36',
        configurable: true,
      });

      expect(isAndroidDevice()).toBe(true);
    });

    it('should return false for iOS user agent', () => {
      Object.defineProperty(window.navigator, 'userAgent', {
        value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X)',
        configurable: true,
      });

      expect(isAndroidDevice()).toBe(false);
    });

    it('should return false for desktop user agent', () => {
      Object.defineProperty(window.navigator, 'userAgent', {
        value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
        configurable: true,
      });

      expect(isAndroidDevice()).toBe(false);
    });
  });

  describe('isIosDevice()', () => {
    it('should return true for iPhone platform', () => {
      Object.defineProperty(window.navigator, 'platform', {
        value: 'iPhone',
        configurable: true,
      });

      expect(isIosDevice()).toBe(true);
    });

    it('should return true for iPad platform', () => {
      Object.defineProperty(window.navigator, 'platform', {
        value: 'iPad',
        configurable: true,
      });

      expect(isIosDevice()).toBe(true);
    });

    it('should return false for Android platform', () => {
      Object.defineProperty(window.navigator, 'platform', {
        value: 'Linux armv8l',
        configurable: true,
      });

      expect(isIosDevice()).toBe(false);
    });

    it('should return false for desktop platform', () => {
      Object.defineProperty(window.navigator, 'platform', {
        value: 'Win32',
        configurable: true,
      });

      expect(isIosDevice()).toBe(false);
    });
  });

  describe('isWindowsDevice()', () => {
    it('should return true for Windows 10 user agent', () => {
      Object.defineProperty(window.navigator, 'userAgent', {
        value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        configurable: true,
      });

      expect(isWindowsDevice()).toBe(true);
    });

    it('should return true for Windows 11 user agent', () => {
      Object.defineProperty(window.navigator, 'userAgent', {
        value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0',
        configurable: true,
      });

      expect(isWindowsDevice()).toBe(true);
    });

    it('should return true for Win32 platform', () => {
      Object.defineProperty(window.navigator, 'userAgent', {
        value: 'Mozilla/5.0',
        configurable: true,
      });
      Object.defineProperty(window.navigator, 'platform', {
        value: 'Win32',
        configurable: true,
      });

      expect(isWindowsDevice()).toBe(true);
    });

    it('should return false for macOS user agent', () => {
      Object.defineProperty(window.navigator, 'userAgent', {
        value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
        configurable: true,
      });
      Object.defineProperty(window.navigator, 'platform', {
        value: 'MacIntel',
        configurable: true,
      });

      expect(isWindowsDevice()).toBe(false);
    });

    it('should return false for Linux user agent', () => {
      Object.defineProperty(window.navigator, 'userAgent', {
        value: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36',
        configurable: true,
      });
      Object.defineProperty(window.navigator, 'platform', {
        value: 'Linux x86_64',
        configurable: true,
      });

      expect(isWindowsDevice()).toBe(false);
    });
  });

  describe('hasKnownAudioIssues()', () => {
    it('should detect Firefox on Windows audio issues', () => {
      Object.defineProperty(window.navigator, 'userAgent', {
        value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:120.0) Gecko/20100101 Firefox/120.0',
        configurable: true,
      });

      const result = hasKnownAudioIssues();
      expect(result.hasIssues).toBe(true);
      expect(result.issues).toContain('Firefox on Windows has limited audio output device selection support');
    });

    it('should detect legacy Edge audio issues', () => {
      Object.defineProperty(window.navigator, 'userAgent', {
        value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.19041',
        configurable: true,
      });

      const result = hasKnownAudioIssues();
      expect(result.hasIssues).toBe(true);
      expect(result.issues).toContain('Legacy Edge has limited WebRTC audio support');
    });

    it('should return no issues for Chrome on Windows', () => {
      Object.defineProperty(window.navigator, 'userAgent', {
        value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        configurable: true,
      });

      const result = hasKnownAudioIssues();
      expect(result.hasIssues).toBe(false);
      expect(result.issues).toHaveLength(0);
    });

    it('should return no issues for Chromium Edge on Windows', () => {
      Object.defineProperty(window.navigator, 'userAgent', {
        value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0',
        configurable: true,
      });

      const result = hasKnownAudioIssues();
      expect(result.hasIssues).toBe(false);
      expect(result.issues).toHaveLength(0);
    });
  });

  describe('getRecommendedAudioSettings()', () => {
    it('should return default settings for Chrome', () => {
      Object.defineProperty(window.navigator, 'userAgent', {
        value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        configurable: true,
      });

      const settings = getRecommendedAudioSettings();
      expect(settings.sampleRate).toBe(48000);
      expect(settings.channelCount).toBe(1);
      expect(settings.echoCancellation).toBe(true);
    });

    it('should recommend 44100Hz for Firefox on Windows', () => {
      Object.defineProperty(window.navigator, 'userAgent', {
        value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:120.0) Gecko/20100101 Firefox/120.0',
        configurable: true,
      });

      const settings = getRecommendedAudioSettings();
      expect(settings.sampleRate).toBe(44100);
    });
  });
});
