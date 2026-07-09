"use client";

import Reveal from "./Reveal";
import { useSite } from "./SiteContext";

const CATEGORIES = [
  {
    title: "Practice management",
    desc: "Bookings and patient notes written straight into your PMS.",
    items: ["Dentrix", "Open Dental", "Jane", "athenahealth"],
    dark: false,
    icon: (
      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#BC6A46" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4.5" y="3" width="15" height="18" rx="2.2" />
        <line x1="8" y1="8" x2="16" y2="8" />
        <line x1="8" y1="12" x2="16" y2="12" />
        <line x1="8" y1="16" x2="13" y2="16" />
      </svg>
    ),
  },
  {
    title: "Calendars & scheduling",
    desc: "Availability read and slots booked in real time, no double-booking.",
    items: ["Google Calendar", "Outlook", "Calendly"],
    dark: false,
    icon: (
      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#BC6A46" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3.5" y="5" width="17" height="15" rx="2.2" />
        <line x1="3.5" y1="9.5" x2="20.5" y2="9.5" />
        <line x1="8" y1="3" x2="8" y2="6.5" />
        <line x1="16" y1="3" x2="16" y2="6.5" />
      </svg>
    ),
  },
  {
    title: "Automations & data",
    desc: "Custom flows we build around how your practice actually runs.",
    items: ["SMS & email confirmations", "Follow-up & recall sequences", "Custom API & webhooks"],
    dark: true,
    icon: (
      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#7FD6A0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="7" r="2.3" />
        <circle cx="18" cy="7" r="2.3" />
        <circle cx="12" cy="17" r="2.3" />
        <line x1="8.2" y1="7" x2="15.8" y2="7" />
        <line x1="7.6" y1="8.8" x2="10.8" y2="15.4" />
        <line x1="16.4" y1="8.8" x2="13.2" y2="15.4" />
      </svg>
    ),
  },
];

export default function Integrations() {
  const { bookingForm } = useSite();

  return (
    <section id="integrations" className="max-w-[1120px] mx-auto px-8 pt-19 pb-15">
      <Reveal className="grid grid-cols-1 min-[901px]:grid-cols-[.9fr_1.1fr] gap-9 min-[901px]:gap-14 items-end mb-10">
        <div>
          <div className="font-mono font-medium text-[11px] leading-none tracking-[.16em] uppercase text-terracotta mb-[18px]">
            Integrations
          </div>
          <h2 className="font-serif font-normal text-[38px] leading-[1.12] tracking-[-.015em] text-brand">
            Every call ends up in the systems you already run.
          </h2>
        </div>
        <p className="font-sans text-[16px] leading-[1.65] text-body max-w-[460px]">
          The agent doesn&apos;t just answer. It writes the booking, updates the calendar,
          and files the note, so your front desk opens each morning to work already done.
        </p>
      </Reveal>

      <div className="flex items-center gap-4 flex-wrap py-4 pb-[34px]">
        <span className="font-mono font-medium text-[10px] leading-none tracking-[.14em] uppercase text-mono-warm">
          After every call
        </span>
        <span className="flex-none w-6 h-px bg-brand/[.2]" />
        <span className="inline-flex items-center gap-[9px] font-mono font-medium text-[11.5px] leading-none tracking-[.04em] text-brand">
          <span className="w-1.5 h-1.5 bg-terracotta rotate-45" />
          Call handled
        </span>
        <span className="text-brand/[.35] font-mono text-[13px] leading-none">→</span>
        <span className="inline-flex items-center gap-[9px] font-mono font-medium text-[11.5px] leading-none tracking-[.04em] text-brand">
          <span className="w-1.5 h-1.5 bg-terracotta rotate-45" />
          Data captured
        </span>
        <span className="text-brand/[.35] font-mono text-[13px] leading-none">→</span>
        <span className="inline-flex items-center gap-[9px] font-mono font-medium text-[11.5px] leading-none tracking-[.04em] text-brand">
          <span className="w-1.5 h-1.5 bg-mint rotate-45" />
          Synced to your tools
        </span>
      </div>

      <Reveal className="grid grid-cols-1 min-[901px]:grid-cols-3 gap-5">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.title}
            className={`rounded-[15px] p-7 transition-all duration-300 ease-[cubic-bezier(.22,.61,.36,1)] hover:-translate-y-1 ${
              cat.dark
                ? "bg-brand border border-brand shadow-[0_16px_34px_-24px_rgba(20,57,43,.55)] hover:shadow-[0_26px_52px_-22px_rgba(20,57,43,.7)]"
                : "bg-card border border-brand/[.1] shadow-[0_1px_0_rgba(20,57,43,.03),0_16px_34px_-26px_rgba(20,57,43,.35)] hover:shadow-[0_1px_0_rgba(20,57,43,.03),0_26px_46px_-26px_rgba(20,57,43,.5)]"
            }`}
          >
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                cat.dark ? "bg-mint/[.14]" : "bg-terracotta/[.1]"
              }`}
            >
              {cat.icon}
            </div>
            <div
              className={`font-mono font-semibold text-[10px] leading-none tracking-[.12em] uppercase mb-2.5 ${
                cat.dark ? "text-mint" : "text-terracotta"
              }`}
            >
              {cat.title}
            </div>
            <p className={`font-sans text-sm leading-[1.5] mb-5 ${cat.dark ? "text-mint-light" : "text-muted"}`}>
              {cat.desc}
            </p>
            <div className="flex flex-col">
              {cat.items.map((item) => (
                <div
                  key={item}
                  className={`font-sans font-medium text-[14.5px] leading-none py-[11px] border-t ${
                    cat.dark ? "text-light-on-green border-mint-light/[.16]" : "text-brand border-brand/[.1]"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </Reveal>

      <div className="mt-5 border-t border-brand/[.12] pt-[22px] flex items-center justify-between gap-5 flex-wrap">
        <p className="font-sans text-[15px] leading-[1.5] text-body max-w-[560px]">
          Don&apos;t see your system? We build the connector, so the data still lands
          exactly where it should.
        </p>
        <button
          onClick={bookingForm.open}
          className="cursor-pointer bg-card border border-brand/[.16] inline-flex items-center gap-3 font-mono font-semibold text-xs leading-none tracking-[.04em] uppercase text-brand px-[22px] py-3.5 rounded-[10px] whitespace-nowrap transition-all duration-[280ms] ease-[cubic-bezier(.22,.61,.36,1)] hover:-translate-y-[3px] hover:shadow-[0_16px_32px_-14px_rgba(20,57,43,.55)] hover:bg-brand hover:border-brand hover:text-paper"
        >
          Talk to us about your setup <span className="text-sm">→</span>
        </button>
      </div>
    </section>
  );
}
