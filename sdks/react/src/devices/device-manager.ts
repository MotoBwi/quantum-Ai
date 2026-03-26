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
import { DEFAULT_DEVICE_ID } from "@/rapida/constants";
import { isSafari, isMobile, isWindows, isFirefox, isSinkIdSupported } from "@/rapida/utils";

export class DeviceManager {
  private static instance?: DeviceManager;
  static mediaDeviceKinds: MediaDeviceKind[] = ["audioinput", "audiooutput"];
  static getInstance(): DeviceManager {
    if (this.instance === undefined) {
      this.instance = new DeviceManager();
    }
    return this.instance;
  }

  static userMediaPromiseMap: Map<MediaDeviceKind, Promise<MediaStream>> =
    new Map();

  async getDevices(
    kind?: MediaDeviceKind,
    requestPermissions: boolean = true
  ): Promise<MediaDeviceInfo[]> {
    // Check if navigator.mediaDevices is available (not available in some browsers in insecure contexts)
    if (!navigator.mediaDevices) {
      console.warn("MediaDevices API not available in this browser or context");
      return [];
    }

    // Special handling for audiooutput on Windows with Firefox (not supported)
    if (kind === "audiooutput" && isWindows() && isFirefox()) {
      console.warn("[DeviceManager] audiooutput enumeration not fully supported in Firefox on Windows");
      // Firefox on Windows doesn't support setSinkId, so output device selection is limited
      if (!isSinkIdSupported()) {
        return [];
      }
    }

    // Wait for any pending media permission requests
    if (DeviceManager.userMediaPromiseMap?.size > 0) {
      console.debug("awaiting getUserMedia promise");
      try {
        if (kind) {
          const pendingPromise = DeviceManager.userMediaPromiseMap.get(kind);
          if (pendingPromise) {
            await pendingPromise;
          }
        } else {
          await Promise.all(DeviceManager.userMediaPromiseMap.values());
        }
      } catch (e: any) {
        console.warn("error waiting for media permissions:", e);
      }
    }

    // Initial device enumeration
    let devices: MediaDeviceInfo[] = [];
    try {
      devices = await navigator.mediaDevices.enumerateDevices();
    } catch (error) {
      console.error("Failed to enumerate devices:", error);
      return [];
    }

    // Windows-specific: Filter out phantom/virtual devices that may cause issues
    if (isWindows()) {
      devices = this.filterWindowsDevices(devices);
    }

    // Determine if we need to request permissions
    const needsPermission = this.needsMediaPermissions(
      devices,
      kind,
      requestPermissions
    );

    // Request permissions if needed
    if (needsPermission) {
      try {
        // Different approach based on the kind of device we're looking for
        const constraints: MediaStreamConstraints = {
          audio:
            kind === "audioinput" ||
            (!kind && DeviceManager.mediaDeviceKinds.includes("audioinput")),
          video:
            kind === "videoinput" ||
            (!kind && DeviceManager.mediaDeviceKinds.includes("videoinput")),
        };

        // For audiooutput, we need audio input permissions first in many browsers
        if (kind === "audiooutput") {
          constraints.audio = true;
        }

        // Mobile-specific optimizations
        if (isMobile()) {
          // On mobile, we want to minimize the camera usage to save battery
          // and avoid potential permission issues
          if (constraints.video && kind !== "videoinput") {
            // If we're not specifically looking for video devices, prefer audio only on mobile
            constraints.video = false;
          }

          // Use simpler constraints for mobile
          if (constraints.video) {
            constraints.video = { facingMode: { ideal: "user" } };
          }
        }

        // Store the permission request promise
        const permissionPromise =
          navigator.mediaDevices.getUserMedia(constraints);

        if (kind) {
          DeviceManager.userMediaPromiseMap.set(kind, permissionPromise);
        } else {
          // If no specific kind, set for all relevant kinds
          if (constraints.audio) {
            DeviceManager.userMediaPromiseMap.set(
              "audioinput",
              permissionPromise
            );
          }
          if (constraints.video) {
            DeviceManager.userMediaPromiseMap.set(
              "videoinput",
              permissionPromise
            );
          }
        }

        // Request the permissions
        const stream = await permissionPromise;

        // Re-enumerate devices after permissions granted
        devices = await navigator.mediaDevices.enumerateDevices();

        // Clean up the stream
        stream.getTracks().forEach((track) => track.stop());

        // Clear the promise from the map
        if (kind) {
          DeviceManager.userMediaPromiseMap.delete(kind);
        } else {
          DeviceManager.userMediaPromiseMap.clear();
        }
      } catch (error) {
        console.error("Failed to get user media:", error);
        // Clear failed promise
        if (kind) {
          DeviceManager.userMediaPromiseMap.delete(kind);
        }

        // On mobile, especially iOS, sometimes we need to just work with what we have
        if (isMobile()) {
          console.warn(
            "Using available devices on mobile despite permission failure"
          );
          try {
            devices = await navigator.mediaDevices.enumerateDevices();
          } catch (e) {
            console.error(
              "Failed to enumerate devices after permission failure:",
              e
            );
          }
        }
      }
    }

    // Filter by kind if specified
    if (kind) {
      devices = devices.filter((device) => device.kind === kind);
    }

    return devices;
  }

  private needsMediaPermissions(
    devices: MediaDeviceInfo[],
    kind?: MediaDeviceKind,
    requestPermissions: boolean = true
  ): boolean {
    // Don't request permissions if not asked to
    if (!requestPermissions) {
      return false;
    }

    // Special handling for Safari - particularly important on iOS
    if (isSafari() && this.hasDeviceInUse(kind)) {
      return false; // Skip request for Safari if devices are already in use to avoid iOS bug
    }

    // On iOS, we need to be careful about requesting permissions too frequently
    // as it can cause the browser to block further requests
    if (isMobile() && isSafari() && devices.length > 0) {
      // If we have any device with labels on iOS, assume we have permissions
      // This helps avoid the iOS Safari issue where repeated permission requests can be problematic
      const hasAnyLabels = devices.some(
        (device) => device.label && device.label !== ""
      );
      if (hasAnyLabels) {
        return false;
      }
    }

    // Filter relevant devices based on kind
    const relevantDevices = kind
      ? devices.filter((d) => d.kind === kind)
      : devices;

    // Check if we have any unlabeled devices (indicating no permissions)
    const hasUnlabeledDevices = relevantDevices.some(
      (device) => !device.label || device.label === ""
    );

    // Check if we have any devices at all
    const hasNoDevices = kind
      ? devices.filter((d) => d.kind === kind).length === 0
      : devices.length === 0;

    return hasUnlabeledDevices || hasNoDevices;
  }

  async normalizeDeviceId(
    kind: MediaDeviceKind,
    deviceId?: string,
    groupId?: string
  ): Promise<string | undefined> {
    // If not default device, return as is
    if (!deviceId || deviceId !== DEFAULT_DEVICE_ID) {
      return deviceId;
    }

    try {
      // Get all devices of specified kind
      const devices = await this.getDevices(kind);

      // If no devices found, return undefined
      if (!devices.length) {
        console.warn(`No ${kind} devices found`);
        return undefined;
      }

      // Find the default device
      const defaultDevice = devices.find(
        (d) => d.deviceId === DEFAULT_DEVICE_ID
      );

      // Mobile devices often don't have a "default" concept in the same way as desktop
      if (isMobile() && !defaultDevice) {
        // On mobile, particularly iOS, just return the first device if no default found
        console.info(`Using first available ${kind} device on mobile`);
        return devices[0]?.deviceId;
      }

      // If no default device found on desktop, return first available device
      if (!defaultDevice) {
        console.warn(
          `No default ${kind} device found, returning first available device`
        );
        return devices[0]?.deviceId;
      }

      // Try to find a device in the same group as the default device
      const targetGroupId = groupId ?? defaultDevice.groupId;
      const device = devices.find(
        (d) => d.deviceId !== DEFAULT_DEVICE_ID && d.groupId === targetGroupId
      );

      // Return found device or first non-default device
      if (device) {
        return device.deviceId;
      }

      // If no match found, return first non-default device
      const nonDefaultDevice = devices.find(
        (d) => d.deviceId !== DEFAULT_DEVICE_ID
      );
      if (nonDefaultDevice) {
        return nonDefaultDevice.deviceId;
      }

      // Last resort: just return the default device ID
      return defaultDevice.deviceId;
    } catch (error) {
      console.error("Error normalizing device ID:", error);

      // On mobile, attempt to recover by returning first device of the correct kind
      if (isMobile()) {
        try {
          const devices = await this.getDevices(kind, false); // Don't request permissions here
          if (devices.length > 0) {
            return devices[0].deviceId;
          }
        } catch (e) {
          console.error("Failed to get fallback device on mobile:", e);
        }
      }

      return undefined;
    }
  }

  private hasDeviceInUse(kind?: MediaDeviceKind): boolean {
    return kind
      ? DeviceManager.userMediaPromiseMap.has(kind)
      : DeviceManager.userMediaPromiseMap.size > 0;
  }

  /**
   * Filter out problematic devices on Windows.
   * Windows can sometimes report virtual/phantom devices that don't work properly.
   */
  private filterWindowsDevices(devices: MediaDeviceInfo[]): MediaDeviceInfo[] {
    // Known problematic device patterns on Windows
    const problematicPatterns = [
      /^communications$/i,  // Windows "Communications" virtual device
      /stereo mix/i,        // Stereo Mix (loopback) often causes issues
      /what u hear/i,       // Similar loopback device
    ];

    return devices.filter((device) => {
      // Keep devices without labels (permissions not granted yet)
      if (!device.label) return true;
      
      // Filter out known problematic devices
      return !problematicPatterns.some((pattern) =>
        pattern.test(device.label)
      );
    });
  }

  /**
   * Check if output device selection is supported in the current browser.
   * This is useful for UI to conditionally show output device selector.
   */
  static isOutputDeviceSelectionSupported(): boolean {
    return isSinkIdSupported();
  }
}
