"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import TranscriptLine from "./TranscriptLine";
import { scripts, verticals } from "@/lib/callScripts";
import { useSite } from "./SiteContext";

const TICK_MS = 120;
const STEP_PCT = 2;

export default function VerticalsCarousel() {
  const { callDemo, bookingForm } = useSite();
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [started, setStarted] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Defer the auto-advance loader until the section actually scrolls
  // into view, so it never runs ahead while the user scrolls down.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      const id = setTimeout(() => setStarted(true), 0);
      return () => clearTimeout(id);
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIndex(0);
            setProgress(0);
            setStarted(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    intervalRef.current = setInterval(() => {
      if (pausedRef.current || callDemo.isOpen || bookingForm.isOpen) return;
      setProgress((prev) => {
        const next = prev + STEP_PCT;
        if (next >= 100) {
          setIndex((i) => (i + 1) % verticals.length);
          return 0;
        }
        return next;
      });
    }, TICK_MS);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [started, callDemo.isOpen, bookingForm.isOpen]);

  const goTo = (i: number) => {
    setIndex(i);
    setProgress(0);
  };
  const next = () => goTo((index + 1) % verticals.length);
  const prev = () => goTo((index + verticals.length - 1) % verticals.length);

  const vertical = verticals[index];
  const script = scripts[vertical.key];
  const previewLines = [
    script.lines.find((l) => l.sp === "agent"),
    script.lines.find((l) => l.sp === "caller"),
    script.lines.find((l) => l.sp === "system" && l.outcome),
  ].filter((l): l is NonNullable<typeof l> => Boolean(l));

  return (
    <section id="services" className="max-w-[1120px] mx-auto px-8 pt-[86px] pb-[30px]">
      <div className="font-mono font-medium text-[11px] leading-none tracking-[.16em] uppercase text-terracotta mb-4">
        Who we build for
      </div>
      <h2 className="font-serif font-normal text-[40px] leading-[1.1] tracking-[-.01em] text-brand mb-3 max-w-[640px]">
        Built for <span className="italic text-terracotta">three</span> kinds of practice.
      </h2>
      <p className="font-sans text-[16px] leading-[1.6] text-body max-w-[560px] mb-3">
        Independently owned practices with one to five locations. The kind of place where
        the owner is often the one answering the phone today.
      </p>
      <div className="inline-flex items-center gap-2 font-mono font-medium text-[10.5px] leading-none tracking-[.08em] uppercase text-mono-warm mb-7">
        <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-terracotta" />
        Auto-playing through each practice · hover to pause
      </div>

      <Reveal
        as="div"
        className="border-t border-brand/[.14] pt-[30px]"
      >
        <div
          ref={sectionRef}
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          <div className="flex items-center justify-between gap-4 mb-[30px] flex-wrap">
            <div className="flex gap-7">
              {verticals.map((v, i) => (
                <button
                  key={v.key}
                  onClick={() => goTo(i)}
                  className={`cursor-pointer border-none bg-transparent pb-3 font-mono font-semibold text-[12px] leading-none tracking-[.04em] uppercase transition-colors duration-200 border-b-2 ${
                    index === i ? "text-brand border-terracotta" : "text-mono-warm-2 border-transparent"
                  }`}
                >
                  {v.name}
                </button>
              ))}
            </div>
            <div className="flex gap-2.5 max-[900px]:hidden">
              <button
                onClick={prev}
                aria-label="Previous practice"
                className="cursor-pointer w-10 h-10 rounded-full border border-brand/[.2] bg-transparent text-brand text-[15px] flex items-center justify-center transition-all duration-200 hover:bg-brand hover:border-brand hover:text-paper hover:-translate-y-px"
              >
                ←
              </button>
              <button
                onClick={next}
                aria-label="Next practice"
                className="cursor-pointer w-10 h-10 rounded-full border border-brand/[.2] bg-transparent text-brand text-[15px] flex items-center justify-center transition-all duration-200 hover:bg-brand hover:border-brand hover:text-paper hover:-translate-y-px"
              >
                →
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 min-[901px]:grid-cols-[.9fr_1.1fr] gap-10 items-center">
            <div>
              <div className="font-serif font-normal text-[54px] leading-none text-serif-index mb-3.5">
                {vertical.num}
              </div>
              <h3 className="font-serif font-normal text-[42px] leading-[1.04] tracking-[-.015em] text-brand mb-4">
                {vertical.name}
              </h3>
              <p className="font-sans text-[16px] leading-[1.62] text-body max-w-[420px] mb-[30px]">
                {vertical.desc}
              </p>
              <button
                onClick={() => callDemo.openWith(vertical.key)}
                className="cursor-pointer border-none bg-brand text-paper font-sans font-semibold text-[13.5px] leading-none px-[22px] py-3.5 rounded-[9px] inline-flex items-center gap-2.5 transition-all duration-200 hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-12px_rgba(20,57,43,.55)]"
              >
                <span className="text-[10px]">▶</span> Hear the full call
              </button>
            </div>

            <div className="nc-chapter rounded-2xl px-[22px] pt-[22px] pb-2.5 shadow-[0_26px_60px_-28px_rgba(20,57,43,.6)]">
              <div className="flex items-center justify-between mb-4">
                <span className="flex items-center gap-2 font-mono font-medium text-[10px] leading-none tracking-[.12em] uppercase text-mint-light">
                  <span className="pulse-dot-fast w-[7px] h-[7px] rounded-full bg-rec" />
                  {script.practice}
                </span>
                <span className="font-mono font-medium text-[10px] leading-none text-muted-green">EXAMPLE</span>
              </div>
              {previewLines.map((line, i) => (
                <TranscriptLine key={i} line={line} />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-[22px] mt-8">
            <div className="flex-1 h-[3px] rounded-full bg-brand/[.12] overflow-hidden">
              <div
                className="h-full bg-terracotta rounded-full transition-[width] duration-[120ms] ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex gap-2 items-center">
              {verticals.map((v, i) => (
                <button
                  key={v.key}
                  onClick={() => goTo(i)}
                  aria-label={`Go to ${v.name}`}
                  className={`cursor-pointer border-none p-0 h-2 rounded-full transition-all duration-[350ms] ${
                    index === i ? "w-6 bg-terracotta" : "w-2 bg-brand/[.2]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
