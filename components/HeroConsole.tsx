"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useSite } from "./SiteContext";

// The original equalizer the user asked to keep: staggered bars, warm + green.
const WAVE_COLORS = ["#BC6A46", "#BC6A46", "#7FD6A0", "#BC6A46", "#8FA396", "#BC6A46", "#7FD6A0", "#8FA396"];

/**
 * The living call console. This is the element the whole page is built around:
 * a real-feeling call in progress. A ticking duration, the signature waveform,
 * and a transcript that types itself through a short booking, agent then caller
 * then confirmation, so a first-time visitor watches a call actually resolve.
 */

type Turn = { who: "agent" | "caller"; text: string };

const TURNS: Turn[] = [
  { who: "agent", text: "Thanks for calling Riverside Family Dental. How can I help?" },
  { who: "caller", text: "Hi, I think I cracked a filling. Can I get in this week?" },
  { who: "agent", text: "I have Thursday at 10:30 or Friday at 2:00 open. Which works better?" },
  { who: "caller", text: "Thursday is perfect." },
  { who: "agent", text: "You're booked for Thursday at 10:30. I'll text a confirmation now." },
];

function fmt(total: number) {
  const m = Math.floor(total / 60)
    .toString()
    .padStart(2, "0");
  const s = Math.floor(total % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

export default function HeroConsole() {
  const { callDemo } = useSite();
  const reduce = useReducedMotion();

  // Duration ticker, written straight to the node so it never re-renders the tree.
  const timeRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (reduce) {
      if (timeRef.current) timeRef.current.textContent = "00:47";
      return;
    }
    let n = 7;
    const id = setInterval(() => {
      n = n >= 59 ? 0 : n + 1;
      if (timeRef.current) timeRef.current.textContent = fmt(n);
    }, 1000);
    return () => clearInterval(id);
  }, [reduce]);

  // Self-typing transcript, driven by a single interval that only mutates state
  // inside its async callback (a per-character position + a hold counter), so a
  // finished line lingers before the next one starts.
  const HOLD_TICKS = 60; // ~1.7s at 28ms/tick
  const [pos, setPos] = useState(() => ({
    turn: 0,
    count: reduce ? TURNS[0].text.length : 0,
    hold: 0,
  }));

  useEffect(() => {
    if (reduce) {
      const id = setInterval(() => {
        setPos((p) => {
          const next = (p.turn + 1) % TURNS.length;
          return { turn: next, count: TURNS[next].text.length, hold: 0 };
        });
      }, 2600);
      return () => clearInterval(id);
    }
    const id = setInterval(() => {
      setPos((p) => {
        const text = TURNS[p.turn].text;
        if (p.count < text.length) return { turn: p.turn, count: p.count + 1, hold: 0 };
        if (p.hold < HOLD_TICKS) return { turn: p.turn, count: p.count, hold: p.hold + 1 };
        const next = (p.turn + 1) % TURNS.length;
        return { turn: next, count: 0, hold: 0 };
      });
    }, 28);
    return () => clearInterval(id);
  }, [reduce]);

  const active = TURNS[pos.turn];
  const shown = active.text.slice(0, pos.count);
  const who = active.who;

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 22, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      className="relative rounded-[20px] p-[22px] bg-gradient-to-b from-brand to-brand-dark border border-mint-light/[.14] shadow-[0_34px_80px_-30px_rgba(15,43,32,.7)] [box-shadow:inset_0_1px_0_rgba(190,224,207,.12),0_34px_80px_-30px_rgba(15,43,32,.7)]"
    >
      {/* soft top highlight for a glass edge */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-24 rounded-t-[20px] bg-gradient-to-b from-mint-light/[.05] to-transparent"
      />

      <div className="relative flex justify-between items-center mb-[18px]">
        <span className="flex items-center gap-2 font-mono font-medium text-[10px] leading-none tracking-[.12em] uppercase text-mint-light">
          <span
            className="pulse-dot w-[7px] h-[7px] rounded-full bg-mint"
            style={{ animationDuration: "2s" }}
          />
          On a call
        </span>
        <span className="font-mono font-medium text-[10px] leading-none text-muted-green tabular-nums">
          <span ref={timeRef}>00:07</span> · REC
        </span>
      </div>

      <div className="relative flex items-end gap-[3px] h-11 mb-[18px]" role="img" aria-label="Live call audio waveform">
        {WAVE_COLORS.concat(WAVE_COLORS).map((color, i) => (
          <span
            key={i}
            className="eq-bar w-1 h-full rounded-sm"
            style={{ background: color, animationDelay: `${i * 0.08}s` }}
          />
        ))}
      </div>

      <div className="relative bg-paper/[.06] border border-mint-light/[.16] rounded-[10px] px-3.5 py-[13px] mb-3 min-h-[104px]">
        <div className="font-mono font-medium text-[9px] leading-none tracking-[.1em] uppercase mb-2 flex items-center gap-2">
          <span className={who === "agent" ? "text-mint" : "text-terracotta"}>
            {who === "agent" ? "Northcorp agent" : "Caller"}
          </span>
          <span className="flex-1 h-px bg-mint-light/[.14]" />
        </div>
        <div className="font-sans text-[13.5px] leading-[1.5] text-light-on-green">
          {shown}
          {!reduce && (
            <span className="inline-block w-[2px] h-[1.05em] -mb-[2px] ml-[1px] bg-mint/80 align-middle animate-[nc-caret_1s_steps(1)_infinite]" />
          )}
        </div>
      </div>

      <button
        onClick={callDemo.open}
        className="relative w-full cursor-pointer bg-terracotta border-none text-on-terracotta font-sans font-semibold text-[13px] leading-none py-[13px] rounded-[9px] flex items-center justify-center gap-2 transition-all duration-200 hover:bg-terracotta-dark hover:-translate-y-px active:translate-y-0"
      >
        <span className="text-[10px]">▶</span> Play the full example call
      </button>
    </motion.div>
  );
}
