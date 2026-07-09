import Reveal from "./Reveal";

const STEPS = [
  {
    label: "We design it.",
    desc: "Scoped and built around your practice and the calls it actually gets, never a template.",
    live: false,
  },
  {
    label: "We test it.",
    desc: "Proven against real scenarios and continuous vulnerability testing before it answers anyone.",
    live: false,
  },
  {
    label: "We run it.",
    desc: "Monitored and tuned by us, and it goes live only once you have approved it.",
    live: true,
  },
];

export default function WhyAgency() {
  return (
    <section className="max-w-[1120px] mx-auto px-8 py-20">
      <Reveal className="nc-chapter text-light-on-green rounded-[26px] px-8 min-[901px]:px-14 py-11 min-[901px]:py-[58px] shadow-[0_40px_90px_-44px_rgba(15,43,32,.6)] relative overflow-hidden">
        <span
          className="absolute -top-[80px] -right-[70px] w-[280px] h-[280px] bg-mint/[.06] rotate-45 rounded-[48px] pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative max-w-[780px] mb-[52px]">
          <div className="inline-flex items-center gap-2.5 font-mono font-medium text-[11px] leading-none tracking-[.16em] uppercase text-mint mb-[22px]">
            <span className="w-2 h-2 bg-mint rotate-45" />
            Why an agency, not an app
          </div>
          <p className="font-serif font-normal text-[28px] min-[901px]:text-[34px] leading-[1.32] text-paper tracking-[-.012em]">
            Most AI phone tools hand you a dashboard and wish you luck.{" "}
            <span className="italic text-mint">We hand you a finished receptionist</span>,
            tested and running, and we stay on the line for every call it takes.
          </p>
        </div>

        {/* the full-service promise, as three plain statements, no scoreboard */}
        <div className="relative grid grid-cols-1 min-[901px]:grid-cols-3 border-t border-mint-light/[.18] pt-9">
          {STEPS.map((step, i) => (
            <div
              key={step.label}
              className={`py-6 min-[901px]:py-0 min-[901px]:px-10 min-[901px]:first:pl-0 min-[901px]:last:pr-0 ${
                i > 0
                  ? "min-[901px]:border-l border-mint-light/[.16] max-[900px]:border-t max-[900px]:border-mint-light/[.14]"
                  : ""
              }`}
            >
              <div className="flex items-center gap-2.5 mb-3.5">
                <span
                  className={`font-serif font-normal text-[25px] leading-none tracking-[-.01em] ${
                    step.live ? "text-mint" : "text-paper"
                  }`}
                >
                  {step.label}
                </span>
                {step.live && (
                  <span className="pulse-dot w-[7px] h-[7px] rounded-full bg-mint" style={{ animationDuration: "2s" }} />
                )}
              </div>
              <p
                className={`font-sans text-[14.5px] leading-[1.65] ${
                  step.live ? "text-mint-light" : "text-mint-light-2"
                }`}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
