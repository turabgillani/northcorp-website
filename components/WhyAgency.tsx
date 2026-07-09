import Reveal from "./Reveal";

const STEPS = [
  {
    index: "01",
    label: "WE DESIGN IT",
    desc: "Scoped and built around your practice and the calls it actually gets, never a template.",
    dark: false,
  },
  {
    index: "02",
    label: "WE TEST IT",
    desc: "Proven against real scenarios and continuous vulnerability testing before it answers anyone.",
    dark: false,
  },
  {
    index: "03",
    label: "WE RUN IT",
    desc: "Monitored and tuned by us, and it goes live only once you have approved it.",
    dark: true,
  },
];

export default function WhyAgency() {
  return (
    <section className="max-w-[1120px] mx-auto px-8 py-20">
      <Reveal className="bg-panel border border-brand/[.08] rounded-[26px] px-8 min-[901px]:px-14 py-11 min-[901px]:py-[58px] shadow-[0_34px_80px_-44px_rgba(20,57,43,.4)] relative overflow-hidden">
        <span
          className="absolute -top-[70px] -right-[60px] w-[260px] h-[260px] bg-terracotta/[.06] rotate-45 rounded-[44px] pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative max-w-[760px] mb-[52px]">
          <div className="inline-flex items-center gap-2.5 font-mono font-medium text-[11px] leading-none tracking-[.16em] uppercase text-terracotta mb-[22px]">
            <span className="w-2 h-2 bg-terracotta rotate-45" />
            Why an agency, not an app
          </div>
          <p className="font-serif font-normal text-[28px] min-[901px]:text-[34px] leading-[1.32] text-brand tracking-[-.012em]">
            Most AI phone tools hand you a dashboard and wish you luck.{" "}
            <span className="text-terracotta">We hand you a finished receptionist</span>,
            tested and running, and we stay on the line for every call it takes.
          </p>
        </div>

        <div className="relative grid grid-cols-1 min-[901px]:grid-cols-3 gap-[22px]">
          {STEPS.map((step) => (
            <div
              key={step.index}
              className={`rounded-2xl px-7 pt-[30px] pb-7 transition-all duration-300 ease-[cubic-bezier(.22,.61,.36,1)] hover:-translate-y-1.5 ${
                step.dark
                  ? "bg-brand border border-brand shadow-[0_16px_36px_-22px_rgba(20,57,43,.6)] hover:shadow-[0_28px_54px_-22px_rgba(20,57,43,.75)]"
                  : "bg-card2 border border-brand/[.1] shadow-[0_1px_0_rgba(20,57,43,.03)] hover:shadow-[0_24px_46px_-26px_rgba(20,57,43,.5)]"
              }`}
            >
              <div className="flex items-baseline justify-between mb-5">
                <span className={`font-serif font-normal text-[46px] leading-none ${step.dark ? "text-mint" : "text-terracotta"}`}>
                  {step.index}
                </span>
                <span className={`w-2 h-2 rotate-45 ${step.dark ? "bg-mint" : "bg-terracotta"}`} />
              </div>
              <div className={`font-mono font-semibold text-[11px] leading-none tracking-[.1em] mb-3.5 ${step.dark ? "text-mint-light" : "text-brand"}`}>
                {step.label}
              </div>
              <p className={`font-sans text-[14.5px] leading-[1.6] ${step.dark ? "text-mint-light-2" : "text-body"}`}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
