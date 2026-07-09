import Reveal from "./Reveal";

const STEPS = [
  {
    num: "01",
    stage: "Isolated",
    title: "Development",
    desc: "We build the agent and unit test it in an isolated development environment. Nothing touches your line yet.",
    accent: false,
  },
  {
    num: "02",
    stage: "Your review",
    title: "Client testing",
    desc: "You test the agent against real scenarios while we run continuous vulnerability testing alongside it.",
    accent: false,
  },
  {
    num: "03",
    stage: "On your approval",
    title: "Production",
    desc: "It moves to a live production environment only after you explicitly approve it. Your call, literally.",
    accent: true,
  },
];

export default function Process() {
  return (
    <section id="process" className="max-w-[1120px] mx-auto px-8 pt-14 pb-[30px]">
      <div className="font-mono font-medium text-[11px] leading-none tracking-[.16em] uppercase text-terracotta mb-4">
        How it works
      </div>
      <h2 className="font-serif font-normal text-[40px] leading-[1.1] tracking-[-.01em] text-brand mb-3 max-w-[640px]">
        Every agent ships through three gates.
      </h2>
      <p className="font-sans text-[16px] leading-[1.6] text-body max-w-[560px] mb-11">
        No agent answers a real patient call until you have tested it and signed off. This
        is the part we take most seriously.
      </p>

      <div className="relative pt-2">
        <div className="hidden min-[901px]:block absolute top-[25px] left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-brand from-0% via-brand via-60% to-terracotta to-100%" />
        <Reveal className="grid grid-cols-1 min-[901px]:grid-cols-3 gap-6">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="transition-transform duration-300 ease-[cubic-bezier(.22,.61,.36,1)] hover:-translate-y-1.5"
            >
              <div className="flex items-center gap-3 mb-[22px]">
                <span
                  className={`relative z-[1] flex-none w-9 h-9 rounded-full border-2 flex items-center justify-center font-mono font-semibold text-[13px] leading-none ${
                    step.accent ? "bg-terracotta border-terracotta text-on-terracotta" : "bg-paper border-brand text-brand"
                  }`}
                >
                  {step.num}
                </span>
                <span
                  className={`relative z-[1] bg-paper pr-2 font-mono font-medium text-[10px] leading-none tracking-[.12em] uppercase ${
                    step.accent ? "text-terracotta" : "text-muted-green"
                  }`}
                >
                  {step.stage}
                </span>
              </div>
              <h3 className="font-serif font-normal text-[23px] leading-[1.2] text-brand mb-2.5">{step.title}</h3>
              <p className="font-sans text-sm leading-[1.6] text-body max-w-[300px]">{step.desc}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
