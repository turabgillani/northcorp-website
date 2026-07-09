import Reveal from "./Reveal";

const HANDLES = [
  "Hours, location, parking, and insurance questions",
  "Booking, rescheduling, and cancellations",
  "Screening and routing urgent calls to a human",
  "Answering every hour, without a queue",
];

const NEVER = [
  "Never gives medical advice",
  "Never suggests a diagnosis",
  "Never maps a symptom to a likely condition",
  "Every clinical question goes straight to a person",
];

export default function CapabilityBoundaries() {
  return (
    <section className="max-w-[1120px] mx-auto px-8 pt-[88px] pb-10">
      <Reveal className="text-center max-w-[680px] mx-auto mb-11">
        <div className="font-mono font-medium text-[11px] leading-none tracking-[.16em] uppercase text-terracotta mb-[18px]">
          Capability &amp; boundaries
        </div>
        <h2 className="font-serif font-normal text-[40px] leading-[1.12] tracking-[-.015em] text-brand">
          Everything a receptionist should do.
          <br />
          <span className="text-terracotta">Nothing a clinician must.</span>
        </h2>
      </Reveal>

      <Reveal className="grid grid-cols-1 min-[901px]:grid-cols-2 gap-px bg-brand/[.12] rounded-[20px] overflow-hidden shadow-[0_24px_60px_-34px_rgba(20,57,43,.5)]">
        <div className="bg-brand px-9 py-10 text-light-on-green">
          <div className="flex items-center gap-[11px] mb-[26px]">
            <span className="w-8 h-8 rounded-full bg-mint/[.16] flex items-center justify-center text-mint text-[15px]">
              ✓
            </span>
            <span className="font-mono font-medium text-[11px] leading-none tracking-[.12em] uppercase text-mint">
              Handles it, end to end
            </span>
          </div>
          <ul className="list-none m-0 p-0 flex flex-col">
            {HANDLES.map((item, i) => (
              <li
                key={item}
                className={`flex items-start gap-3.5 font-sans text-[16px] leading-[1.5] text-light-on-green py-4 ${
                  i > 0 ? "border-t border-mint-light/[.14]" : ""
                }`}
              >
                <span className="flex-none mt-0.5 w-5 h-5 rounded-full bg-mint/[.16] flex items-center justify-center text-mint text-[11px]">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-panel px-9 py-10 relative">
          <div className="flex items-center gap-[11px] mb-2.5">
            <span className="w-8 h-8 rounded-full bg-terracotta/[.14] flex items-center justify-center text-terracotta text-[14px]">
              ✕
            </span>
            <span className="font-mono font-medium text-[11px] leading-none tracking-[.12em] uppercase text-terracotta">
              A hard line, not a soft one
            </span>
          </div>
          <p className="font-sans text-[15px] leading-[1.55] text-muted mb-4 max-w-[340px]">
            The boundary is built in, not prompted. It cannot be talked around.
          </p>
          <ul className="list-none m-0 p-0 flex flex-col">
            {NEVER.map((item, i) => (
              <li
                key={item}
                className={`flex items-start gap-3.5 font-sans text-[16px] leading-[1.5] text-body py-4 ${
                  i > 0 ? "border-t border-brand/[.1]" : ""
                }`}
              >
                <span className="flex-none mt-0.5 w-5 h-5 rounded-full bg-terracotta/[.14] flex items-center justify-center text-terracotta text-[10px]">
                  ✕
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
