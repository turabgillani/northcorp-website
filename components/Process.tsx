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
    <section id="process" className="max-w-[1120px] mx-auto px-8 pt-14 pb-[40px]">
      <div className="max-w-[640px] mb-12">
        <div className="font-mono font-medium text-[11px] leading-none tracking-[.16em] uppercase text-terracotta mb-4">
          How it works
        </div>
        <h2 className="font-serif font-normal text-[40px] leading-[1.1] tracking-[-.01em] text-brand mb-3">
          Every agent ships through <span className="italic text-terracotta">three gates</span>.
        </h2>
        <p className="font-sans text-[16px] leading-[1.6] text-body max-w-[560px]">
          No agent answers a real patient call until you have tested it and signed off. This
          is the part we take most seriously.
        </p>
      </div>

      <Reveal className="grid grid-cols-1 min-[901px]:grid-cols-3 gap-x-8 gap-y-12 border-t border-brand/[.14] pt-3">
        {STEPS.map((step) => (
          <div key={step.num} className="relative pt-8">
            <span
              className={`absolute -top-[3px] left-0 h-[3px] w-16 rounded-full ${
                step.accent ? "bg-terracotta" : "bg-brand"
              }`}
            />
            <div className="flex items-start justify-between mb-4">
              <span
                className={`font-serif font-normal text-[68px] min-[901px]:text-[76px] leading-[.8] tracking-[-.02em] ${
                  step.accent ? "text-terracotta" : "text-brand"
                }`}
              >
                {step.num}
              </span>
              <span
                className={`mt-4 font-mono font-medium text-[10px] leading-none tracking-[.14em] uppercase ${
                  step.accent ? "text-terracotta" : "text-muted-green"
                }`}
              >
                {step.stage}
              </span>
            </div>
            <h3 className="font-serif font-normal text-[26px] leading-[1.15] text-brand mb-3">
              {step.title}
            </h3>
            <p className="font-sans text-[15px] leading-[1.62] text-body max-w-[320px]">
              {step.desc}
            </p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
