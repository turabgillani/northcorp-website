import Reveal from "./Reveal";

const TODAY = [
  "Calls pile up during exams, lunch, and after hours",
  "They go to voicemail, and most callers never leave one",
  "Staff get pulled off the patient in the chair to answer",
  "No record of who called, or why they hung up",
];

const WITH_NORTHCORP = [
  "Every call answered on the first ring, day or night",
  "Booked, rescheduled, and logged automatically",
  "Your front desk stays with the patient in the room",
  "Clinical questions routed straight to your team",
];

const OUTCOMES = [
  {
    label: "More booked visits",
    body: "More of the calls you already receive turn into booked appointments.",
  },
  {
    label: "Time back for staff",
    body: "Your team's attention stays in the office, not split with the phone.",
  },
  {
    label: "Fewer no-shows",
    body: "Automatic confirmations and recalls keep the calendar full and current.",
  },
];

export default function Pitch() {
  return (
    <section className="bg-altband border-y border-brand/[.08]">
      <div className="max-w-[1120px] mx-auto px-8 py-[90px]">
        <Reveal className="max-w-[720px] mb-[52px]">
          <div className="font-mono font-medium text-[11px] leading-none tracking-[.16em] uppercase text-terracotta mb-5">
            The case for it
          </div>
          <h2 className="font-serif font-normal text-[44px] leading-[1.08] tracking-[-.02em] text-brand mb-[18px]">
            Every call you miss is a patient choosing someone else.
          </h2>
          <p className="font-sans text-[17px] leading-[1.6] text-body max-w-[560px]">
            Your phone is the first thing a new patient meets. Today it&apos;s a coin
            flip. Here&apos;s the gap, and how we close it.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 min-[901px]:grid-cols-2 gap-[22px] items-stretch">
          <div className="bg-panel-alt border border-brand/[.12] rounded-[18px] p-9">
            <div className="flex items-center gap-[11px] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#B98A6E]" />
              <span className="font-mono font-semibold text-[10.5px] leading-none tracking-[.12em] uppercase text-[#9A7358]">
                Your front desk today
              </span>
            </div>
            <ul className="list-none m-0 p-0 flex flex-col gap-5">
              {TODAY.map((item) => (
                <li key={item} className="font-sans text-[16.5px] leading-[1.5] text-[#5C5348]">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-brand rounded-[18px] p-9 text-light-on-green shadow-[0_30px_70px_-34px_rgba(20,57,43,.65)] relative">
            <div className="flex items-center gap-[11px] mb-6">
              <span className="pulse-dot w-2 h-2 rounded-full bg-mint" />
              <span className="font-mono font-semibold text-[10.5px] leading-none tracking-[.12em] uppercase text-mint">
                With Northcorp on the line
              </span>
            </div>
            <ul className="list-none m-0 p-0 flex flex-col gap-5">
              {WITH_NORTHCORP.map((item) => (
                <li key={item} className="flex items-start gap-[13px] font-sans text-[16.5px] leading-[1.5] text-paper">
                  <span className="flex-none mt-[3px] text-mint text-[13px]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className="mt-11">
          <div className="flex items-center gap-3.5 mb-[26px]">
            <span className="font-mono font-medium text-[11px] leading-none tracking-[.14em] uppercase text-brand">
              The outcome
            </span>
            <span className="flex-1 h-px bg-brand/[.14]" />
          </div>
          <div className="grid grid-cols-1 min-[901px]:grid-cols-3 gap-7 min-[901px]:gap-8">
            {OUTCOMES.map((o) => (
              <div key={o.label}>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-[9px] h-[9px] bg-terracotta rotate-45" />
                  <span className="font-mono font-semibold text-[11px] leading-none tracking-[.08em] uppercase text-brand">
                    {o.label}
                  </span>
                </div>
                <p className="font-sans text-[15px] leading-[1.6] text-body">{o.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
