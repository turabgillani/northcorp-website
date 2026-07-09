"use client";

import type { CallDemo } from "@/lib/useCallDemo";
import type { ScenarioKey } from "@/lib/callScripts";
import TranscriptLine from "./TranscriptLine";

const TABS: { key: ScenarioKey; label: string }[] = [
  { key: "dental", label: "Dental" },
  { key: "chiropractic", label: "Chiropractic" },
  { key: "medical", label: "Medical" },
];

// Idle colours for the scripted fallback; the audio analyser overrides heights
// directly when a real recording is playing.
const WAVE_COLORS = ["#7FD6A0", "#BEE0CF", "#BC6A46", "#7FD6A0", "#8FA396", "#7FD6A0", "#BEE0CF", "#BC6A46"];

export default function CallDemoModal({ callDemo }: { callDemo: CallDemo }) {
  const {
    isOpen,
    scenario,
    playing,
    elapsedLabel,
    totalLabel,
    hasAudio,
    data,
    visibleLines,
    progressPct,
    disclaimer,
    audioRef,
    waveRef,
    close,
    toggle,
    pickScenario,
  } = callDemo;

  if (!isOpen) return null;

  const waveState = playing ? "running" : "paused";

  return (
    <div
      onClick={close}
      className="fixed inset-0 z-[100] bg-[#0B140F]/[.62] backdrop-blur-[6px] flex items-center justify-center p-6 fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[560px] max-w-full max-h-[92vh] overflow-hidden bg-brand rounded-[20px] shadow-[0_40px_100px_-24px_rgba(0,0,0,.6)] flex flex-col"
      >
        {/* header */}
        <div className="px-6 py-5 border-b border-mint-light/[.14] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-[9px] mb-[5px]">
              <span className="pulse-dot-fast w-2 h-2 rounded-full bg-rec" />
              <span className="font-mono font-medium text-[10px] leading-none tracking-[.12em] uppercase text-light-on-green">
                Recording · {elapsedLabel} / {totalLabel}
              </span>
            </div>
            <div className="font-serif text-[17px] leading-[1.2] text-paper">{data.practice}</div>
          </div>
          <button
            onClick={close}
            aria-label="Close"
            className="cursor-pointer w-[34px] h-[34px] rounded-full border border-mint-light/[.25] bg-transparent text-mint-light text-base flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        {/* scenario tabs */}
        <div className="px-6 pt-3.5 flex gap-2">
          {TABS.map((tab) => {
            const active = scenario === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => pickScenario(tab.key)}
                className={`cursor-pointer border rounded-full font-sans font-semibold text-[11px] leading-none px-3.5 py-2 ${
                  active ? "border-terracotta bg-terracotta text-on-terracotta" : "border-mint-light/[.22] bg-transparent text-mint-light"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {hasAudio && <audio ref={audioRef} preload="auto" crossOrigin="anonymous" className="hidden" />}

        {/* waveform */}
        <div ref={waveRef} className="px-6 pt-[18px] pb-1.5 flex items-end gap-[3px] h-[52px]">
          {WAVE_COLORS.map((color, i) => (
            <span
              key={i}
              className="eq-bar flex-1 h-full rounded-sm"
              style={{
                background: color,
                animationDuration: "900ms",
                animationDelay: `${i * 0.1}s`,
                animationPlayState: waveState,
              }}
            />
          ))}
        </div>

        {/* transcript */}
        <div className="flex-1 overflow-y-auto px-6 pt-3.5 pb-1.5 min-h-[220px] max-h-[44vh]">
          {visibleLines.map((line, i) => (
            <TranscriptLine key={i} line={line} />
          ))}
        </div>

        {/* controls */}
        <div className="px-6 pt-3.5 pb-5 border-t border-mint-light/[.14]">
          <div className="h-1 rounded-full bg-mint-light/[.18] mb-4 overflow-hidden">
            <div className="h-full bg-terracotta rounded-full" style={{ width: `${progressPct}%` }} />
          </div>
          <div className="flex items-center justify-between gap-3.5">
            <button
              onClick={toggle}
              className="cursor-pointer bg-terracotta border-none text-on-terracotta font-sans font-semibold text-[13px] leading-none px-[22px] py-3 rounded-[9px] min-w-[120px]"
            >
              {playing ? "❚❚  Pause" : "▶  Play call"}
            </button>
            <div className="font-sans text-[11px] leading-[1.4] text-muted-green text-right max-w-[280px]">
              {disclaimer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
