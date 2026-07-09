"use client";

import HeroWaveform from "./HeroWaveform";
import { useSite } from "./SiteContext";

export default function Hero() {
  const { bookingForm, callDemo } = useSite();

  return (
    <section
      id="top"
      className="max-w-[1120px] mx-auto px-8 pt-[72px] pb-16 grid grid-cols-1 min-[901px]:grid-cols-[1.05fr_.95fr] gap-9 min-[901px]:gap-14 items-center max-[900px]:pt-[52px] max-[900px]:pb-[46px] max-[900px]:px-7"
    >
      <div>
        <div className="flex items-center gap-[9px] mb-[22px]">
          <span className="pulse-dot w-[7px] h-[7px] rounded-full bg-terracotta" />
          <span className="font-mono font-medium text-[10.5px] leading-none tracking-[.16em] uppercase text-mono-warm">
            Agent live · AI voice receptionists
          </span>
        </div>

        <h1 className="font-serif font-normal text-[58px] max-[900px]:text-[44px] max-[520px]:text-[35px] leading-[1.04] tracking-[-.015em] text-brand mb-[22px]">
          Never send a patient to voicemail.
        </h1>

        <p className="font-sans text-[17px] leading-[1.6] text-body max-w-[480px] mb-[30px]">
          We design, test, and run AI voice agents for private dental, chiropractic, and
          medical practices. You hire a firm to handle the phone, not another app to
          configure yourself.
        </p>

        <div className="flex items-center gap-[22px] mb-[34px]">
          <button
            onClick={bookingForm.open}
            className="cursor-pointer border-none bg-brand text-paper font-sans font-semibold text-[14.5px] leading-none px-6 py-[15px] rounded-[9px] transition-all duration-200 hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-12px_rgba(20,57,43,.5)]"
          >
            Book a consultation
          </button>
          <button
            onClick={callDemo.open}
            className="border-none bg-transparent cursor-pointer flex items-center gap-[9px] font-sans font-semibold text-[14.5px] leading-none text-brand py-1.5 transition-colors duration-200 hover:text-terracotta"
          >
            <span className="w-[30px] h-[30px] rounded-full border-[1.5px] border-brand flex items-center justify-center text-[10px] pl-[2px]">
              ▶
            </span>
            Play an example call
          </button>
        </div>

        <div className="flex items-center gap-[13px] flex-wrap pt-[22px] border-t border-brand/[.14] font-mono font-medium text-[10.5px] leading-none tracking-[.04em] text-muted">
          <span className="text-brand">HIPAA ✓</span>
          <span className="opacity-40">/</span>
          <span className="text-brand">BAA ✓</span>
          <span className="opacity-40">/</span>
          <span className="text-brand">CPPA ✓</span>
          <span className="opacity-40">/</span>
          <span>3-STAGE PIPELINE</span>
        </div>
      </div>

      {/* live call teaser panel */}
      <div className="bg-brand rounded-2xl p-[22px] shadow-[0_24px_60px_-20px_rgba(20,57,43,.5)]">
        <div className="flex justify-between items-center mb-[18px]">
          <span className="flex items-center gap-2 font-mono font-medium text-[10px] leading-none tracking-[.12em] uppercase text-mint-light">
            <span className="pulse-dot w-[7px] h-[7px] rounded-full bg-mint" style={{ animationDuration: "2s" }} />
            On a call
          </span>
          <span className="font-mono font-medium text-[10px] leading-none text-muted-green">00:07 · REC</span>
        </div>

        <HeroWaveform />

        <div className="bg-paper/[.06] border border-mint-light/[.16] rounded-[10px] px-3.5 py-[13px] mb-3">
          <div className="font-mono font-medium text-[9px] leading-none tracking-[.1em] uppercase text-muted-green mb-1.5">
            Northcorp agent
          </div>
          <div className="font-sans text-[13.5px] leading-[1.5] text-light-on-green">
            &ldquo;Happy to help. I have Thursday at 10:30 or Friday at 2:00 open, which works
            better for you?&rdquo;
          </div>
        </div>

        <button
          onClick={callDemo.open}
          className="w-full cursor-pointer bg-terracotta border-none text-on-terracotta font-sans font-semibold text-[13px] leading-none py-[13px] rounded-[9px] flex items-center justify-center gap-2 transition-all duration-200 hover:bg-terracotta-dark hover:-translate-y-px"
        >
          ▶ &nbsp;Play the full example call
        </button>
      </div>
    </section>
  );
}
