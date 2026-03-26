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
import { cn } from "@/rapida/styles";
import { useEffect, useState, useMemo } from "react";

/**
 * @beta
 */
export type AgentState =
  | "disconnected"
  | "connecting"
  | "initializing"
  | "listening"
  | "thinking"
  | "speaking";

type MultibandAudioVisualizerComponentProps = {
  classNames?: string;
  state: AgentState;
  barWidth: number;
  minBarHeight: number;
  maxBarHeight: number;
  barColor?: string;
  frequencies: Float32Array[] | number[][];
};

export const MultibandAudioVisualizerComponent = ({
  classNames,
  state,
  barWidth,
  minBarHeight,
  maxBarHeight,
  barColor = "bg-white",
  frequencies,
}: MultibandAudioVisualizerComponentProps) => {
  // Calculate summed frequencies with enhanced sensitivity for voice
  const summedFrequencies = useMemo(() => {
    return frequencies.map((bandFrequencies) => {
      if (!bandFrequencies || bandFrequencies.length === 0) return 0;

      const freqArray = bandFrequencies as number[];
      // Calculate RMS (Root Mean Square) for more accurate energy representation
      const sumSquares = freqArray.reduce((acc, val) => acc + val * val, 0);
      const rms = Math.sqrt(sumSquares / freqArray.length);

      // Apply a curve to make the visualization more responsive to voice
      // This enhances mid-range values while keeping peaks visible
      return Math.min(1, Math.pow(rms, 0.7) * 1.2);
    });
  }, [frequencies]);

  const [thinkingIndex, setThinkingIndex] = useState(
    Math.floor(summedFrequencies.length / 2),
  );
  const [thinkingDirection, setThinkingDirection] = useState<"left" | "right">(
    "right",
  );

  useEffect(() => {
    if (state !== "thinking") {
      setThinkingIndex(Math.floor(summedFrequencies.length / 2));
      return;
    }
    const timeout = setTimeout(() => {
      if (thinkingDirection === "right") {
        if (thinkingIndex === summedFrequencies.length - 1) {
          setThinkingDirection("left");
          setThinkingIndex((prev) => prev - 1);
        } else {
          setThinkingIndex((prev) => prev + 1);
        }
      } else {
        if (thinkingIndex === 0) {
          setThinkingDirection("right");
          setThinkingIndex((prev) => prev + 1);
        } else {
          setThinkingIndex((prev) => prev - 1);
        }
      }
    }, 200);

    return () => clearTimeout(timeout);
  }, [state, summedFrequencies.length, thinkingDirection, thinkingIndex]);

  // Determine if the visualizer is active (has meaningful audio input)
  const isActive = useMemo(() => {
    return state === "listening" || state === "speaking";
  }, [state]);

  return (
    <div className={cn(classNames, "flex flex-row items-center")}>
      {summedFrequencies.map((frequency, index) => {
        const isCenter = index === Math.floor(summedFrequencies.length / 2);

        // Calculate height with minimum threshold for visibility
        const minThreshold = 0.05;
        const effectiveFrequency = Math.max(frequency, minThreshold);
        const height =
          minBarHeight + effectiveFrequency * (maxBarHeight - minBarHeight);

        // Add subtle scale effect based on frequency intensity
        const scale = isActive && frequency > 0.3 ? 1 + frequency * 0.1 : 1;

        return (
          <div
            className={cn(
              barColor,
              "rounded-full",
              isCenter && state === "listening" && frequency < 0.1
                ? "animate-pulse"
                : "",
            )}
            key={"frequency-" + index}
            style={{
              height: `${height}px`,
              width: `${barWidth}px`,
              transform: `scaleY(${scale})`,
              transition:
                "height 0.08s ease-out, transform 0.08s ease-out, background-color 0.2s ease-out",
              willChange: "height, transform",
            }}
          />
        );
      })}
    </div>
  );
};
