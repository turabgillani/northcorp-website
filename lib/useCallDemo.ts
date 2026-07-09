"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { formatElapsed, scripts, type ScenarioKey } from "@/lib/callScripts";

const DEFAULT_SCENARIO: ScenarioKey = "dental";

export function useCallDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [scenario, setScenario] = useState<ScenarioKey>(DEFAULT_SCENARIO);
  const [playing, setPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const rafRef = useRef<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const waveRef = useRef<HTMLDivElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const freqRef = useRef<Uint8Array<ArrayBuffer> | null>(null);

  const data = scripts[scenario];
  const hasAudio = !!data.audio;

  const setupAnalyser = useCallback(() => {
    if (analyserRef.current || !audioRef.current) return;
    try {
      const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioContextRef.current = audioContextRef.current || new Ctx();
      if (audioContextRef.current.state === "suspended") audioContextRef.current.resume();
      const src = audioContextRef.current.createMediaElementSource(audioRef.current);
      const analyser = audioContextRef.current.createAnalyser();
      analyser.fftSize = 64;
      src.connect(analyser);
      analyser.connect(audioContextRef.current.destination);
      analyserRef.current = analyser;
      freqRef.current = new Uint8Array(new ArrayBuffer(analyser.frequencyBinCount));
    } catch {
      // CORS or unsupported: waveform stays on the CSS fallback animation
    }
  }, []);

  const updateWave = useCallback(() => {
    const analyser = analyserRef.current;
    const freq = freqRef.current;
    const waveEl = waveRef.current;
    if (!analyser || !freq || !waveEl) return;
    analyser.getByteFrequencyData(freq);
    const bars = waveEl.children;
    for (let i = 0; i < bars.length; i++) {
      const v = freq[Math.floor((i * freq.length) / bars.length)] / 255;
      const bar = bars[i] as HTMLElement;
      bar.style.animation = "none";
      bar.style.transform = `scaleY(${0.12 + v * 0.88})`;
    }
  }, []);

  const stopClock = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (audioRef.current && !audioRef.current.paused) audioRef.current.pause();
  }, []);

  const run = useCallback(
    (key: ScenarioKey) => {
      stopClock();
      const script = scripts[key];
      if (script.audio && audioRef.current) {
        setupAnalyser();
        const audio = audioRef.current;
        audio.play()?.catch(() => {});
        const tick = () => {
          if (!audioRef.current) return;
          setElapsed(audioRef.current.currentTime);
          updateWave();
          if (!audioRef.current.paused && !audioRef.current.ended) {
            rafRef.current = requestAnimationFrame(tick);
          }
        };
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      const step = 0.1;
      intervalRef.current = setInterval(() => {
        setElapsed((prev) => {
          const next = prev + step;
          if (next >= script.total) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            setPlaying(false);
            return script.total;
          }
          return next;
        });
      }, 100);
    },
    [stopClock, setupAnalyser, updateWave]
  );

  const open = useCallback(() => {
    stopClock();
    setElapsed(0);
    setPlaying(true);
    setIsOpen(true);
    run(scenario);
  }, [stopClock, run, scenario]);

  const openWith = useCallback(
    (key: ScenarioKey) => {
      stopClock();
      setScenario(key);
      setElapsed(0);
      setPlaying(true);
      setIsOpen(true);
      requestAnimationFrame(() => run(key));
    },
    [stopClock, run]
  );

  const close = useCallback(() => {
    stopClock();
    if (audioRef.current) audioRef.current.currentTime = 0;
    setIsOpen(false);
    setPlaying(false);
  }, [stopClock]);

  const toggle = useCallback(() => {
    if (playing) {
      stopClock();
      setPlaying(false);
    } else {
      setElapsed((prev) => {
        if (prev >= data.total) {
          if (audioRef.current) audioRef.current.currentTime = 0;
          return 0;
        }
        return prev;
      });
      setPlaying(true);
      run(scenario);
    }
  }, [playing, stopClock, run, scenario, data.total]);

  const pickScenario = useCallback(
    (key: ScenarioKey) => {
      stopClock();
      if (audioRef.current) audioRef.current.currentTime = 0;
      setScenario(key);
      setElapsed(0);
      setPlaying(true);
      requestAnimationFrame(() => run(key));
    },
    [stopClock, run]
  );

  useEffect(() => {
    if (audioRef.current && data.audio) {
      audioRef.current.src = data.audio;
    }
  }, [data.audio]);

  useEffect(() => stopClock, [stopClock]);

  const visibleLines = data.lines.filter((l) => l.at <= elapsed);
  const progressPct = Math.min(100, (elapsed / data.total) * 100);

  return {
    isOpen,
    scenario,
    playing,
    elapsed,
    hasAudio,
    data,
    visibleLines,
    progressPct,
    elapsedLabel: formatElapsed(elapsed),
    totalLabel: formatElapsed(data.total),
    disclaimer: data.audio
      ? "Recording of a live Northcorp agent call, played with the caller’s consent."
      : "Scripted example for demonstration. Not a recording of a real patient call.",
    audioRef,
    waveRef,
    open,
    openWith,
    close,
    toggle,
    pickScenario,
  };
}

export type CallDemo = ReturnType<typeof useCallDemo>;
