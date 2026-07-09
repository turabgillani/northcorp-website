import Reveal from "./Reveal";
import Logo from "./Logo";

const CHIPS = ["Compliance-first", "Independently owned practices", "Dental · Chiropractic · Medical"];

export default function About() {
  return (
    <section id="about" className="max-w-[1120px] mx-auto px-8 py-[70px]">
      <Reveal className="grid grid-cols-1 min-[901px]:grid-cols-[.94fr_1.06fr] gap-9 min-[901px]:gap-16 items-center">
        <div className="min-w-0 nc-chapter rounded-[22px] px-8 min-[901px]:px-[38px] py-10 shadow-[0_40px_88px_-44px_rgba(20,57,43,.62)] flex flex-col justify-between min-h-[392px] relative overflow-hidden">
          <span
            className="absolute -top-[60px] -right-[50px] w-[220px] h-[220px] bg-mint/[.06] rotate-45 rounded-[40px] pointer-events-none"
            aria-hidden="true"
          />
          <div className="relative flex items-center gap-[11px]">
            <Logo size={22} fill="#BC6A46" />
            <span className="font-sans font-bold text-base leading-none text-light-on-green">
              Northcorp<span className="font-medium text-muted-green"> AI</span>
            </span>
          </div>
          <div className="relative">
            <p className="font-serif font-normal text-[27px] leading-[1.32] text-paper mb-[26px] tracking-[-.01em]">
              Your front desk, in the hands of people who take it{" "}
              <span className="italic text-mint">as seriously as you do</span>.
            </p>
            <div className="inline-flex items-center gap-2.5 font-mono font-medium text-[10.5px] leading-none tracking-[.09em] uppercase text-mint-light">
              <span className="pulse-dot w-[7px] h-[7px] rounded-full bg-mint" />
              Working with practices nationwide
            </div>
          </div>
        </div>

        <div className="min-w-0">
          <p className="font-serif font-normal text-[28px] min-[901px]:text-[35px] leading-[1.28] text-brand mb-[22px] tracking-[-.014em]">
            An agency, not a software product. We{" "}
            <span className="italic text-terracotta">design the agent, test it, and run it</span>{" "}
            for you, so the phone stops being something your front desk has to survive.
          </p>
          <p className="font-sans text-[16px] leading-[1.72] text-body mb-[30px] max-w-[520px]">
            We work with independently owned dental, chiropractic, and medical practices,
            the kind of place where a missed call is a missed patient, wrapped in the
            compliance and testing rigor a medical-adjacent business actually requires.
          </p>
          <div className="flex flex-wrap gap-3">
            {CHIPS.map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-2.5 font-sans font-medium text-[12.5px] leading-none text-brand bg-card border border-brand/[.12] px-4 py-[11px] rounded-full"
              >
                <span className="w-[7px] h-[7px] bg-terracotta rotate-45" />
                {chip}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
