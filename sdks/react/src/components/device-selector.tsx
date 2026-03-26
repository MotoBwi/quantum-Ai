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
import { VoiceAgent } from "@/rapida/agents/voice-agent";
import { useSelectInputDeviceAgent } from "@/rapida/hooks/use-select-input-device-agent";
import { cn } from "@/rapida/styles";
import { FC, HTMLAttributes, useEffect, useState } from "react";

interface DeviceSelectorComponentProps extends HTMLAttributes<HTMLDivElement> {
  voiceAgent: VoiceAgent;
}
/**
 *
 * @returns
 */
export const DeviceSelectorComponent: FC<DeviceSelectorComponentProps> = ({
  voiceAgent,
  className,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const deviceSelect = useSelectInputDeviceAgent({ voiceAgent });
  const [selectedDeviceName, setSelectedDeviceName] = useState(
    voiceAgent.inputMediaDevice || ""
  );

  useEffect(() => {
    deviceSelect.devices.forEach((device) => {
      if (device.deviceId === deviceSelect.activeDeviceId) {
        setSelectedDeviceName(device.label);
      }
    });
  }, [deviceSelect.activeDeviceId, deviceSelect.devices, selectedDeviceName]);

  useEffect(() => {
    const handleClickOutside = (_: MouseEvent) => {
      if (showMenu) {
        setShowMenu(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showMenu]);

  const activeClassName = showMenu ? "rotate-180" : "rotate-0";
  return (
    <div className={cn(className, "relative")}>
      <button
        className={`flex hover:opacity-50 ${activeClassName} transition-all duration-100`}
        onClick={(e) => {
          setShowMenu(!showMenu);
          e.stopPropagation();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M13.3334 6L8.00003 11.3333L2.66669 6"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </button>
      <div
        className="absolute left-0 bottom-7 text-left rounded-md border z-10 w-[280px] shadow-lg"
        style={{
          display: showMenu ? "block" : "none",
        }}
      >
        {deviceSelect.devices.map((device, index) => {
          return (
            <div
              onClick={(e) => {
                e.stopPropagation();
                deviceSelect.setActiveMediaDevice(device.deviceId);
                setShowMenu(false);
              }}
              className={cn(
                voiceAgent.inputMediaDevice === deviceSelect.activeDeviceId &&
                  "!text-blue-800",
                "text-gray-900",
                "text-xl",
                "bg-white text-xs py-2 px-2 cursor-pointer hover:bg-gray-200 hover:text-gray-600 rounded-md"
              )}
              key={index}
            >
              {device.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};
