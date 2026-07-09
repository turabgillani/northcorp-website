"use client";

import Reveal from "./Reveal";
import Logo from "./Logo";
import { useSite } from "./SiteContext";

export default function ClosingCTA() {
  const { bookingForm, callDemo, copied, copyEmail } = useSite();

  return (
    <section id="contact" className="bg-brand text-light-on-green">
      <div className="max-w-[1120px] mx-auto px-8 py-[82px] text-center">
        <div className="flex justify-center">
          <Logo size={34} fill="#BC6A46" />
        </div>
        <Reveal className="mt-6 mb-[18px]">
          <h2 className="font-serif font-normal text-[46px] leading-[1.08] tracking-[-.015em] text-paper mx-auto max-w-[640px]">
            Stop answering the phone yourself.
          </h2>
        </Reveal>
        <p className="font-sans text-[17px] leading-[1.6] text-mint-light max-w-[460px] mx-auto mb-[34px]">
          Book a consultation and we will scope an agent for your practice. No pricing
          games, no self-serve setup, just a conversation.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button
            onClick={bookingForm.open}
            className="cursor-pointer border-none bg-terracotta text-on-terracotta font-sans font-semibold text-[15px] leading-none px-7 py-4 rounded-[10px] transition-all duration-200 hover:bg-terracotta-dark hover:-translate-y-0.5 hover:shadow-[0_16px_34px_-14px_rgba(0,0,0,.55)]"
          >
            Book a consultation
          </button>
          <button
            onClick={callDemo.open}
            className="cursor-pointer bg-transparent border border-mint-light/[.4] text-light-on-green font-sans font-semibold text-sm leading-[1.2] px-[26px] py-4 rounded-[10px] whitespace-nowrap transition-all duration-200 hover:bg-mint-light/[.08] hover:border-mint hover:-translate-y-0.5"
          >
            <span className="text-[11px]">▶</span>&nbsp;&nbsp;Hear an example call
          </button>
        </div>
        <div className="mt-[22px] font-mono font-medium text-xs leading-none tracking-[.04em] text-muted-green">
          or email{" "}
          <button
            onClick={copyEmail}
            className="cursor-pointer bg-transparent border-none font-mono font-medium text-xs leading-none tracking-[.04em] text-mint-light underline underline-offset-[3px] transition-colors duration-200 hover:text-mint"
          >
            {copied ? "Copied to clipboard ✓" : "info@northcorpai.com"}
          </button>
        </div>
      </div>
    </section>
  );
}
