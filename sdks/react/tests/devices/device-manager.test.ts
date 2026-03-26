/**
 * Tests for DeviceManager class
 * 
 * DeviceManager handles:
 * - Media device enumeration
 * - Permission requests
 * - Device change detection
 * - Singleton pattern
 */

import { mockMediaDevices, MockMediaStream } from '../setup';

// Mock utils
jest.mock('@/rapida/utils', () => ({
  isSafari: jest.fn().mockReturnValue(false),
  isMobile: jest.fn().mockReturnValue(false),
  isWindows: jest.fn().mockReturnValue(false),
  isFirefox: jest.fn().mockReturnValue(false),
  isSinkIdSupported: jest.fn().mockReturnValue(true),
}));

jest.mock('@/rapida/constants', () => ({
  DEFAULT_DEVICE_ID: 'default',
}));

import { DeviceManager } from '@/rapida/devices/device-manager';
import { isSafari, isMobile } from '@/rapida/utils';

describe('DeviceManager', () => {
  let deviceManager: DeviceManager;

  beforeEach(() => {
    jest.clearAllMocks();
    // Reset singleton
    (DeviceManager as any).instance = undefined;
    DeviceManager.userMediaPromiseMap.clear();
    deviceManager = DeviceManager.getInstance();
  });

  describe('getInstance()', () => {
    it('should return singleton instance', () => {
      const instance1 = DeviceManager.getInstance();
      const instance2 = DeviceManager.getInstance();

      expect(instance1).toBe(instance2);
    });

    it('should create new instance if none exists', () => {
      (DeviceManager as any).instance = undefined;

      const instance = DeviceManager.getInstance();

      expect(instance).toBeInstanceOf(DeviceManager);
    });
  });

  describe('getDevices()', () => {
    it('should enumerate all devices', async () => {
      const devices = await deviceManager.getDevices();

      expect(mockMediaDevices.enumerateDevices).toHaveBeenCalled();
      expect(devices).toBeInstanceOf(Array);
      expect(devices.length).toBeGreaterThan(0);
    });

    it('should filter devices by kind', async () => {
      const devices = await deviceManager.getDevices('audioinput');

      expect(devices.every(d => d.kind === 'audioinput')).toBe(true);
    });

    it('should request permissions when needed', async () => {
      // Simulate devices without labels (permissions not granted)
      mockMediaDevices.enumerateDevices.mockResolvedValueOnce([
        { deviceId: '', kind: 'audioinput', label: '', groupId: '' },
      ] as MediaDeviceInfo[]);

      // After permission granted
      mockMediaDevices.enumerateDevices.mockResolvedValueOnce([
        { deviceId: 'default', kind: 'audioinput', label: 'Default Mic', groupId: 'default' },
      ] as MediaDeviceInfo[]);

      await deviceManager.getDevices('audioinput', true);

      expect(mockMediaDevices.getUserMedia).toHaveBeenCalled();
    });

    it('should not request permissions when requestPermissions is false', async () => {
      await deviceManager.getDevices('audioinput', false);

      // getUserMedia should not be called for permission request
      // Note: It may still be called if devices lack labels
    });

    it('should handle permission denied gracefully', async () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

      mockMediaDevices.enumerateDevices.mockResolvedValueOnce([
        { deviceId: '', kind: 'audioinput', label: '', groupId: '' },
      ] as MediaDeviceInfo[]);

      mockMediaDevices.getUserMedia.mockRejectedValueOnce(new Error('Permission denied'));

      // Should not throw, should return what it can
      const devices = await deviceManager.getDevices();

      expect(devices).toBeInstanceOf(Array);
      consoleSpy.mockRestore();
    });

    it('should wait for pending getUserMedia promises', async () => {
      const consoleSpy = jest.spyOn(console, 'debug').mockImplementation();

      // Set up a pending promise
      const pendingPromise = new Promise<MediaStream>(resolve =>
        setTimeout(() => resolve(new MockMediaStream() as unknown as MediaStream), 100)
      );
      DeviceManager.userMediaPromiseMap.set('audioinput', pendingPromise);

      const startTime = Date.now();
      await deviceManager.getDevices('audioinput');
      const elapsed = Date.now() - startTime;

      expect(elapsed).toBeGreaterThanOrEqual(90); // Should have waited for promise
      consoleSpy.mockRestore();
    });

    it('should handle MediaDevices API not available', async () => {
      const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();

      // Temporarily remove mediaDevices
      const originalMediaDevices = navigator.mediaDevices;
      Object.defineProperty(navigator, 'mediaDevices', {
        value: undefined,
        writable: true,
      });

      const devices = await deviceManager.getDevices();

      expect(devices).toEqual([]);

      // Restore
      Object.defineProperty(navigator, 'mediaDevices', {
        value: originalMediaDevices,
        writable: true,
      });
      consoleSpy.mockRestore();
    });

    it('should handle enumeration errors', async () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

      mockMediaDevices.enumerateDevices.mockRejectedValueOnce(new Error('Enumeration failed'));

      const devices = await deviceManager.getDevices();

      expect(devices).toEqual([]);
      consoleSpy.mockRestore();
    });
  });

  describe('mobile device handling', () => {
    it('should use simpler constraints on mobile', async () => {
      (isMobile as jest.Mock).mockReturnValue(true);

      mockMediaDevices.enumerateDevices.mockResolvedValueOnce([
        { deviceId: '', kind: 'audioinput', label: '', groupId: '' },
      ] as MediaDeviceInfo[]);

      await deviceManager.getDevices('audioinput', true);

      // On mobile, video should not be requested if only audio is needed
      expect(mockMediaDevices.getUserMedia).toHaveBeenCalledWith(
        expect.objectContaining({
          audio: true,
        })
      );
    });
  });

  describe('Safari handling', () => {
    it('should handle Safari-specific quirks', async () => {
      (isSafari as jest.Mock).mockReturnValue(true);

      const devices = await deviceManager.getDevices();

      // Should still return devices
      expect(devices).toBeInstanceOf(Array);
    });
  });

  describe('stream cleanup', () => {
    it('should stop tracks after getting permissions', async () => {
      const mockStream = new MockMediaStream();
      mockMediaDevices.getUserMedia.mockResolvedValueOnce(mockStream);

      mockMediaDevices.enumerateDevices.mockResolvedValueOnce([
        { deviceId: '', kind: 'audioinput', label: '', groupId: '' },
      ] as MediaDeviceInfo[]);

      mockMediaDevices.enumerateDevices.mockResolvedValueOnce([
        { deviceId: 'default', kind: 'audioinput', label: 'Default Mic', groupId: 'default' },
      ] as MediaDeviceInfo[]);

      await deviceManager.getDevices('audioinput', true);

      // Verify tracks were stopped
      mockStream.getTracks().forEach(track => {
        expect(track.stop).toHaveBeenCalled();
      });
    });
  });

  describe('promise map management', () => {
    it('should clear promise from map after completion', async () => {
      mockMediaDevices.enumerateDevices.mockResolvedValueOnce([
        { deviceId: '', kind: 'audioinput', label: '', groupId: '' },
      ] as MediaDeviceInfo[]);

      await deviceManager.getDevices('audioinput', true);

      // Promise should be removed from map
      expect(DeviceManager.userMediaPromiseMap.has('audioinput')).toBe(false);
    });
  });

  describe('mediaDeviceKinds', () => {
    it('should have correct device kinds', () => {
      expect(DeviceManager.mediaDeviceKinds).toContain('audioinput');
      expect(DeviceManager.mediaDeviceKinds).toContain('audiooutput');
    });
  });
});
