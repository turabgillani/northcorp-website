"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import HeroConsole from "./HeroConsole";
import { useSite } from "./SiteContext";

const EASE = [0.16, 1, 0.3, 1] as const;

const HEAD = ["Never", "send", "a", "patient", "to"];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.08 } },
};
const word: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function Hero() {
  const { bookingForm, callDemo } = useSite();
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: EASE, delay },
  });

  return (
    <section id="top" className="relative overflow-hidden">
      {/* warm depth wash behind the fold */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(70% 60% at 82% 38%, rgba(188,106,70,.08), transparent 60%), radial-gradient(50% 50% at 8% 0%, rgba(20,57,43,.05), transparent 55%)",
        }}
      />

      <div className="relative max-w-[1120px] mx-auto px-8 pt-[72px] pb-16 grid grid-cols-1 min-[901px]:grid-cols-[1.05fr_.95fr] gap-9 min-[901px]:gap-14 items-center max-[900px]:pt-[52px] max-[900px]:pb-[46px] max-[900px]:px-7">
        <div>
          <motion.div {...rise(0)} className="flex items-center gap-[9px] mb-[22px]">
            <span className="pulse-dot w-[7px] h-[7px] rounded-full bg-terracotta" />
            <span className="font-mono font-medium text-[10.5px] leading-none tracking-[.16em] uppercase text-mono-warm">
              Agent live · AI voice receptionists
            </span>
          </motion.div>

          {reduce ? (
            <h1 className="font-serif font-normal text-[58px] max-[900px]:text-[44px] max-[520px]:text-[35px] leading-[1.04] tracking-[-.015em] text-brand mb-[22px]">
              Never send a patient to <span className="italic text-terracotta">voicemail.</span>
            </h1>
          ) : (
            <motion.h1
              variants={container}
              initial="hidden"
              animate="show"
              className="font-serif font-normal text-[58px] max-[900px]:text-[44px] max-[520px]:text-[35px] leading-[1.04] tracking-[-.015em] text-brand mb-[22px]"
            >
              {HEAD.map((w) => (
                <motion.span key={w} variants={word} className="inline-block me-[.24em]">
                  {w}
                </motion.span>
              ))}
              <motion.span variants={word} className="inline-block italic text-terracotta">
                voicemail.
              </motion.span>
            </motion.h1>
          )}

          <motion.p
            {...rise(0.5)}
            className="font-sans text-[17px] leading-[1.6] text-body max-w-[480px] mb-[30px]"
          >
            We design, test, and run AI voice agents for private dental, chiropractic, and
            medical practices. You hire a firm to handle the phone, not another app to
            configure yourself.
          </motion.p>

          <motion.div {...rise(0.58)} className="flex items-center gap-[22px] mb-[34px]">
            <button
              onClick={bookingForm.open}
              className="cursor-pointer border-none bg-brand text-paper font-sans font-semibold text-[14.5px] leading-none px-6 py-[15px] rounded-[9px] transition-all duration-200 hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-12px_rgba(20,57,43,.5)] active:translate-y-0"
            >
              Book a consultation
            </button>
            <button
              onClick={callDemo.open}
              className="group border-none bg-transparent cursor-pointer flex items-center gap-[9px] font-sans font-semibold text-[14.5px] leading-none text-brand py-1.5 transition-colors duration-200 hover:text-terracotta"
            >
              <span className="w-[30px] h-[30px] rounded-full border-[1.5px] border-brand flex items-center justify-center text-[10px] pl-[2px] transition-colors duration-200 group-hover:border-terracotta">
                ▶
              </span>
              Play an example call
            </button>
          </motion.div>

          <motion.div
            {...rise(0.66)}
            className="flex items-center gap-[13px] flex-wrap pt-[22px] border-t border-brand/[.14] font-mono font-medium text-[10.5px] leading-none tracking-[.04em] text-muted"
          >
            <span className="text-brand">HIPAA ✓</span>
            <span className="opacity-40">/</span>
            <span className="text-brand">BAA ✓</span>
            <span className="opacity-40">/</span>
            <span className="text-brand">CPPA ✓</span>
            <span className="opacity-40">/</span>
            <span>3-STAGE PIPELINE</span>
          </motion.div>
        </div>

        {/* console with incoming-signal rings rippling behind it */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="hidden min-[901px]:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          >
            {[0, 1.5, 3].map((delay, i) => (
              <span
                key={i}
                className={`nc-ring absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full border-2 ${
                  i === 1 ? "border-mint/60" : "border-terracotta/55"
                }`}
                style={{ animationDelay: `${delay}s` }}
              />
            ))}
          </div>
          <div className="relative nc-float">
            <HeroConsole />
          </div>
        </div>
      </div>
    </section>
  );
}
