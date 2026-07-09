import Reveal from "./Reveal";

const HANDLES = [
  "Hours, location, parking, and insurance questions",
  "Booking, rescheduling, and cancellations",
  "Screening and routing urgent calls to a human",
  "Answering every hour, without a queue",
];

// The three hard boundaries, phrased as rules. "Never" is set apart in the UI.
const RULES = [
  "gives medical advice",
  "suggests a diagnosis",
  "maps a symptom to a likely condition",
];

export default function CapabilityBoundaries() {
  return (
    <section className="max-w-[1120px] mx-auto px-8 pt-[88px] pb-10">
      <Reveal className="text-center max-w-[680px] mx-auto mb-12">
        <h2 className="font-serif font-normal text-[40px] leading-[1.12] tracking-[-.015em] text-brand">
          Everything a receptionist should do.
          <br />
          <span className="italic text-terracotta">Nothing a clinician must.</span>
        </h2>
      </Reveal>

      <Reveal className="relative grid grid-cols-1 min-[901px]:grid-cols-2 rounded-[24px] overflow-hidden border border-brand/[.12] shadow-[0_30px_70px_-38px_rgba(20,57,43,.55)]">
        {/* LEFT — the green zone: everything it owns */}
        <div className="nc-chapter px-9 py-11 min-[901px]:px-12 min-[901px]:py-[52px] text-light-on-green">
          <div className="flex items-center gap-2.5 mb-2">
            <span className="w-[7px] h-[7px] bg-mint rotate-45" />
            <span className="font-mono font-medium text-[10.5px] leading-none tracking-[.16em] uppercase text-mint">
              Handles it, end to end
            </span>
          </div>
          <p className="font-serif font-normal text-[21px] leading-[1.35] text-paper mb-8 max-w-[300px]">
            The whole front desk, answered on the first ring.
          </p>
          <ul className="list-none m-0 p-0 flex flex-col">
            {HANDLES.map((item, i) => (
              <li
                key={item}
                className={`flex items-baseline gap-3.5 font-sans text-[16.5px] leading-[1.5] text-light-on-green py-[15px] ${
                  i > 0 ? "border-t border-mint-light/[.12]" : ""
                }`}
              >
                <span className="flex-none translate-y-[1px] text-mint text-[13px]">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT — the boundary: spare and deliberate */}
        <div className="bg-panel px-9 py-11 min-[901px]:px-12 min-[901px]:py-[52px] relative">
          <div className="flex items-center gap-2.5 mb-2">
            <span className="w-[7px] h-[7px] bg-terracotta rotate-45" />
            <span className="font-mono font-medium text-[10.5px] leading-none tracking-[.16em] uppercase text-terracotta">
              A hard line, not a soft one
            </span>
          </div>
          <p className="font-serif font-normal text-[21px] leading-[1.35] text-brand mb-8 max-w-[320px]">
            The boundary is built in, not prompted. It cannot be talked around.
          </p>

          <ul className="list-none m-0 p-0 flex flex-col mb-6">
            {RULES.map((rule) => (
              <li
                key={rule}
                className="flex items-center gap-4 py-[13px] border-t border-brand/[.1]"
              >
                <span className="flex-none w-[18px] h-[2px] rounded-full bg-terracotta" />
                <span className="font-sans text-[16.5px] leading-[1.4] text-body">
                  <span className="font-semibold text-terracotta">Never</span> {rule}
                </span>
              </li>
            ))}
          </ul>

          {/* the redirect: where a clinical question actually goes */}
          <div className="flex items-center gap-3.5 rounded-[12px] bg-brand px-[18px] py-4 text-light-on-green">
            <span className="flex-none w-8 h-8 rounded-full bg-mint/[.16] flex items-center justify-center text-mint text-[15px]">
              →
            </span>
            <span className="font-sans text-[15px] leading-[1.4] text-paper">
              Every clinical question goes straight to a person.
            </span>
          </div>
        </div>

        {/* THE LINE — the literal hard line down the seam (desktop) */}
        <div
          aria-hidden="true"
          className="hidden min-[901px]:block absolute left-1/2 top-8 bottom-8 -translate-x-1/2 pointer-events-none"
        >
          <span className="block w-px h-full bg-gradient-to-b from-transparent via-terracotta/55 to-transparent" />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[13px] h-[13px] bg-terracotta rotate-45 shadow-[0_0_0_6px_var(--color-paper)]" />
        </div>
      </Reveal>
    </section>
  );
}
