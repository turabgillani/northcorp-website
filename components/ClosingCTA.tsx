"use client";

import Reveal from "./Reveal";
import Logo from "./Logo";
import { useSite } from "./SiteContext";

const WAVE_COLORS = ["#BC6A46", "#7FD6A0", "#8FA396", "#BC6A46", "#7FD6A0", "#BC6A46", "#8FA396", "#7FD6A0"];

export default function ClosingCTA() {
  const { bookingForm, callDemo, copied, copyEmail } = useSite();

  return (
    <section id="contact" className="nc-chapter text-light-on-green relative overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-8 py-[86px] text-center relative">
        {/* signature waveform, the call sign-off */}
        <div className="flex justify-center items-end gap-[3px] h-9 mb-10" aria-hidden="true">
          {WAVE_COLORS.concat(WAVE_COLORS).map((color, i) => (
            <span
              key={i}
              className="eq-bar w-1 h-full rounded-sm"
              style={{ background: color, animationDelay: `${i * 0.09}s` }}
            />
          ))}
        </div>

        <Reveal className="mb-6">
          <h2 className="font-serif font-normal text-[46px] leading-[1.08] tracking-[-.015em] text-paper mx-auto max-w-[640px]">
            Stop answering the phone <span className="italic text-mint">yourself</span>.
          </h2>
        </Reveal>
        <p className="font-sans text-[17.5px] leading-[1.6] text-mint-light max-w-[480px] mx-auto mb-10">
          Book a consultation and we will scope an agent for your practice. No pricing
          games, no self-serve setup, just a conversation.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button
            onClick={bookingForm.open}
            className="cursor-pointer border-none bg-terracotta text-on-terracotta font-sans font-semibold text-[15px] leading-none px-8 py-[18px] rounded-[11px] transition-all duration-200 hover:bg-terracotta-dark hover:-translate-y-0.5 hover:shadow-[0_18px_38px_-14px_rgba(0,0,0,.6)] active:translate-y-0"
          >
            Book a consultation
          </button>
          <button
            onClick={callDemo.open}
            className="cursor-pointer bg-transparent border border-mint-light/[.4] text-light-on-green font-sans font-semibold text-[14.5px] leading-[1.2] px-7 py-[18px] rounded-[11px] whitespace-nowrap transition-all duration-200 hover:bg-mint-light/[.08] hover:border-mint hover:-translate-y-0.5"
          >
            <span className="text-[11px]">▶</span>&nbsp;&nbsp;Hear an example call
          </button>
        </div>
        <div className="mt-7 font-mono font-medium text-xs leading-none tracking-[.06em] text-muted-green">
          or email{" "}
          <button
            onClick={copyEmail}
            className="cursor-pointer bg-transparent border-none font-mono font-medium text-xs leading-none tracking-[.06em] text-mint-light underline underline-offset-[3px] transition-colors duration-200 hover:text-mint"
          >
            {copied ? "Copied to clipboard ✓" : "info@northcorpai.com"}
          </button>
        </div>

        <div className="mt-12 flex justify-center opacity-90">
          <Logo size={30} fill="#BC6A46" />
        </div>
      </div>
    </section>
  );
}
