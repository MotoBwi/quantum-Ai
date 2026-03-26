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
import { useState, useEffect, useRef } from "react";

/**
 * The function `useMultibandSpeakerTrackVolume` calculates and updates frequency bands based on audio
 * player data at regular intervals.
 * @param {number} [bands=5] - The `bands` parameter in the `useMultibandSpeakerTrackVolume` function
 * determines the number of frequency bands that the audio signal will be divided into for processing.
 * This parameter allows you to specify how many bands you want to split the frequency spectrum into.
 * @param {number} [loPass=0.1] - The `loPass` parameter in the `useMultibandSpeakerTrackVolume`
 * function represents the lower passband frequency limit. It is used to filter out frequencies below a
 * certain threshold in the audio signal. In the provided code snippet, the `loPass` parameter is set
 * to a default value of
 * @param {number} [hiPass=1.0] - The `hiPass` parameter in the `useMultibandSpeakerTrackVolume`
 * function represents the upper limit frequency value for filtering the audio frequencies. It is used
 * to define the range of frequencies that will be included in the analysis and processing of the audio
 * data. In the provided code snippet, the `
 * @returns The `useMultibandSpeakerTrackVolume` custom hook returns an array of `Float32Array`
 * frequency bands that have been calculated based on the audio frequencies received from the audio
 * player. The number of bands, low-pass and high-pass values are used to divide and normalize the
 * frequencies into the specified bands. The hook continuously updates the frequency bands at an
 * interval of 100ms.
 */

export const useMultibandMicrophoneTrackVolume = (
  agentContext: VoiceAgent,
  bands: number = 5,
  loPass: number = 0.1,
  hiPass: number = 1.0
) => {
  const [frequencyBands, setFrequencyBands] = useState<number[][]>(
    Array(bands)
      .fill([])
      .map(() => Array(32).fill(0))
  );

  // Use refs to track previous values for smoother animation
  const prevBandsRef = useRef<number[][]>(
    Array(bands)
      .fill([])
      .map(() => Array(32).fill(0))
  );

  useEffect(() => {
    let animationFrameId: number;
    let lastUpdateTime = 0;
    const updateInterval = 50; // Update every 50ms for smoother animation

    const updateVolume = (timestamp: number) => {
      // Throttle updates to prevent performance issues
      if (timestamp - lastUpdateTime < updateInterval) {
        animationFrameId = requestAnimationFrame(updateVolume);
        return;
      }
      lastUpdateTime = timestamp;

      const frequencies = agentContext?.getInputByteFrequencyData();
      if (!frequencies || frequencies.length === 0) {
        animationFrameId = requestAnimationFrame(updateVolume);
        return;
      }

      // Voice frequencies are mainly between 85Hz - 3000Hz
      // With FFT size 1024 at 48kHz sample rate:
      // - Each bin represents ~46.875 Hz (48000 / 1024)
      // - 85Hz is around bin 2, 3000Hz is around bin 64
      // Focus on the voice frequency range for better visualization
      const totalBins = frequencies.length; // frequencyBinCount = fftSize / 2 = 512

      // Use logarithmic distribution for better visual spread of voice frequencies
      // This gives more resolution to lower frequencies where most voice energy is
      const bandArrays: number[][] = [];

      for (let bandIndex = 0; bandIndex < bands; bandIndex++) {
        // Use logarithmic scale to distribute bands
        // This gives more visual weight to voice frequencies
        const bandStartRatio = Math.pow(bandIndex / bands, 1.5) * (hiPass - loPass) + loPass;
        const bandEndRatio = Math.pow((bandIndex + 1) / bands, 1.5) * (hiPass - loPass) + loPass;

        const bandStart = Math.floor(totalBins * bandStartRatio);
        const bandEnd = Math.min(Math.floor(totalBins * bandEndRatio), totalBins);

        // Get frequencies for this band — direct typed array access avoids intermediate allocations
        const bandLength = Math.max(bandEnd - bandStart, 1);
        const bandFrequencies: number[] = new Array(bandLength);
        for (let j = 0; j < bandLength; j++) {
          // Normalize from 0-255 to 0-1 with enhanced sensitivity
          const normalized = (frequencies[bandStart + j] ?? 0) / 255;
          // Apply power curve to enhance visibility of quieter sounds
          bandFrequencies[j] = Math.min(1, Math.max(0, Math.pow(normalized, 0.6) * 1.8));
        }

        // Ensure we have a consistent number of samples per band
        const resampledBand = resampleArray(bandFrequencies, 32); // 32 samples per band
        bandArrays.push(resampledBand);
      }

      // Apply smoother interpolation
      const smoothedBands = bandArrays.map((bandFrequencies, bandIndex) => {
        const prevBand = prevBandsRef.current[bandIndex] || bandFrequencies;

        // Different smoothing for attack vs decay
        return bandFrequencies.map((freq, i) => {
          const prevValue = prevBand[i] || 0;
          // Fast attack (0.8), slow decay (0.3) for more responsive feel
          const smoothingFactor = freq > prevValue ? 0.8 : 0.3;
          return freq * smoothingFactor + prevValue * (1 - smoothingFactor);
        });
      });

      // Update refs for next frame
      prevBandsRef.current = smoothedBands;

      setFrequencyBands(smoothedBands);
      animationFrameId = requestAnimationFrame(updateVolume);
    };

    // Helper function to resample array to desired length
    const resampleArray = (arr: number[], newLength: number): number[] => {
      if (arr.length === 0) return new Array(newLength).fill(0);

      const result = new Array(newLength);
      const stepSize = arr.length / newLength;

      for (let i = 0; i < newLength; i++) {
        const start = Math.floor(i * stepSize);
        const end = Math.min(Math.floor((i + 1) * stepSize), arr.length);
        let sum = 0;
        let count = 0;

        for (let j = start; j < end; j++) {
          sum += arr[j] || 0;
          count++;
        }

        result[i] = count > 0 ? sum / count : 0;
      }

      return result;
    };

    // Start animation loop
    animationFrameId = requestAnimationFrame(updateVolume);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [agentContext, loPass, hiPass, bands]);

  return frequencyBands;
};

export const useMultibandSpeakerTrackVolume = (
  agentContext: VoiceAgent,
  bands: number = 5,
  loPass: number = 0.1,
  hiPass: number = 1.0
) => {
  const [frequencyBands, setFrequencyBands] = useState<number[][]>(
    Array(bands)
      .fill([])
      .map(() => Array(32).fill(0))
  );

  useEffect(() => {
    const updateVolume = () => {
      const frequencies = agentContext?.getOutputByteFrequencyData();
      if (!frequencies || frequencies.length === 0) return;
      // Calculate the frequency range we want to analyze
      const startIndex = Math.floor(frequencies.length * loPass);
      const endIndex = Math.floor(frequencies.length * hiPass);
      // Split frequencies into bands — access typed array directly to avoid intermediate allocations
      const usableLength = endIndex - startIndex;
      const samplesPerBand = Math.floor(usableLength / bands);
      const bandArrays: number[][] = [];

      for (let bandIndex = 0; bandIndex < bands; bandIndex++) {
        const bandStart = bandIndex * samplesPerBand;
        const bandEnd =
          bandIndex === bands - 1
            ? usableLength
            : (bandIndex + 1) * samplesPerBand;

        // Get frequencies for this band and normalize them
        const bandLength = bandEnd - bandStart;
        const bandFrequencies: number[] = new Array(bandLength);
        for (let j = 0; j < bandLength; j++) {
          // Normalize amplitude from 0-255 to 0-1 range
          const amplitude = frequencies[startIndex + bandStart + j] ?? 0;
          bandFrequencies[j] = Math.min(1, Math.max(0, amplitude / 255));
        }

        // Ensure we have a consistent number of samples per band
        const resampledBand = resampleArray(bandFrequencies, 32); // 32 samples per band
        bandArrays.push(resampledBand);
      }

      // Apply smoothing to prevent jarring transitions
      setFrequencyBands((prevBands) => {
        if (prevBands.length !== bands) return bandArrays;

        return bandArrays.map((bandFrequencies, bandIndex) => {
          if (!prevBands[bandIndex]) return bandFrequencies;

          const smoothingFactor = 0.7;
          return bandFrequencies.map((freq, i) => {
            const prevValue = prevBands[bandIndex][i] || 0;
            return freq * smoothingFactor + prevValue * (1 - smoothingFactor);
          });
        });
      });
    };

    // Helper function to resample array to desired length
    const resampleArray = (arr: number[], newLength: number): number[] => {
      if (arr.length === 0) return new Array(newLength).fill(0);

      const result = new Array(newLength);
      const stepSize = arr.length / newLength;

      for (let i = 0; i < newLength; i++) {
        const start = Math.floor(i * stepSize);
        const end = Math.floor((i + 1) * stepSize);
        let sum = 0;
        let count = 0;

        for (let j = start; j < end; j++) {
          sum += arr[j] || 0;
          count++;
        }

        result[i] = count > 0 ? sum / count : 0;
      }

      return result;
    };

    const interval = setInterval(updateVolume, 100);
    return () => clearInterval(interval);
  }, [agentContext, loPass, hiPass, bands]);

  return frequencyBands;
};

export const useMultiband3DSpeakerTrackVolume = (
  agentContext: VoiceAgent,
  bands: number = 5,
  loPass: number = 0.1,
  hiPass: number = 1.0
) => {
  const [frequencyBands, setFrequencyBands] = useState<number[][]>(
    Array(bands)
      .fill([])
      .map(() => Array(32).fill(0))
  );
  const [sphericalData, setSphericalData] = useState<{
    xNorm: number;
    yNorm: number;
    zNorm: number;
    elapsedTimeSec: number;
  }>({ xNorm: 0, yNorm: 0, zNorm: 0, elapsedTimeSec: 0 });

  const startTime = useRef<number>(Date.now());
  const prevBandsRef = useRef<number[][]>(
    Array(bands).fill([]).map(() => Array(32).fill(0))
  );

  useEffect(() => {
    const updateVolume = () => {
      const frequencies = agentContext?.getOutputByteFrequencyData();
      if (!frequencies || frequencies.length === 0) return;
      // Calculate the frequency range we want to analyze
      const startIndex = Math.floor(frequencies.length * loPass);
      const endIndex = Math.floor(frequencies.length * hiPass);

      // Split frequencies into bands — access typed array directly to avoid intermediate allocations
      const usableLength = endIndex - startIndex;
      const samplesPerBand = Math.floor(usableLength / bands);
      const bandArrays: number[][] = [];

      for (let bandIndex = 0; bandIndex < bands; bandIndex++) {
        const bandStart = bandIndex * samplesPerBand;
        const bandEnd =
          bandIndex === bands - 1
            ? usableLength
            : (bandIndex + 1) * samplesPerBand;

        // Get frequencies for this band and normalize them
        const bandLength = bandEnd - bandStart;
        const bandFrequencies: number[] = new Array(bandLength);
        for (let j = 0; j < bandLength; j++) {
          // Normalize amplitude from 0-255 to 0-1 range
          const amplitude = frequencies[startIndex + bandStart + j] ?? 0;
          bandFrequencies[j] = Math.min(1, Math.max(0, amplitude / 255));
        }

        // Ensure we have a consistent number of samples per band
        const resampledBand = resampleArray(bandFrequencies, 32); // 32 samples per band
        bandArrays.push(resampledBand);
      }

      // Apply smoothing using ref to avoid nesting setState calls (which causes double re-renders)
      const prevBands = prevBandsRef.current;
      const smoothedBands =
        prevBands.length !== bands
          ? bandArrays
          : bandArrays.map((bandFrequencies, bandIndex) => {
              if (!prevBands[bandIndex]) return bandFrequencies;
              const smoothingFactor = 0.7;
              return bandFrequencies.map((freq, i) => {
                const prevValue = prevBands[bandIndex][i] || 0;
                return freq * smoothingFactor + prevValue * (1 - smoothingFactor);
              });
            });
      prevBandsRef.current = smoothedBands;

      // Calculate spherical coordinates
      const xNorm = calculateAverageAmplitude(smoothedBands[0]);
      const yNorm = bands > 1 ? calculateAverageAmplitude(smoothedBands[1]) : 0;
      const zNorm = bands > 2 ? calculateAverageAmplitude(smoothedBands[2]) : 0;
      const elapsedTimeSec = (Date.now() - startTime.current) / 1000;

      // Both setters called at top level so React can batch them into a single re-render
      setFrequencyBands(smoothedBands);
      setSphericalData({ xNorm, yNorm, zNorm, elapsedTimeSec });
    };

    // Helper function to resample array to desired length
    const resampleArray = (arr: number[], newLength: number): number[] => {
      if (arr.length === 0) return new Array(newLength).fill(0);

      const result = new Array(newLength);
      const stepSize = arr.length / newLength;

      for (let i = 0; i < newLength; i++) {
        const start = Math.floor(i * stepSize);
        const end = Math.floor((i + 1) * stepSize);
        let sum = 0;
        let count = 0;

        for (let j = start; j < end; j++) {
          sum += arr[j] || 0;
          count++;
        }

        result[i] = count > 0 ? sum / count : 0;
      }

      return result;
    };

    const calculateAverageAmplitude = (band: number[]): number => {
      return band.reduce((sum, amplitude) => sum + amplitude, 0) / band.length;
    };

    const interval = setInterval(updateVolume, 100);
    return () => clearInterval(interval);
  }, [agentContext, loPass, hiPass, bands]);

  return { frequencyBands, ...sphericalData };
};
