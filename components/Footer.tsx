import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-muted-green">
      <div className="max-w-[1120px] mx-auto px-8 py-11 flex flex-wrap gap-8 justify-between items-start">
        <div className="max-w-[280px]">
          <div className="flex items-center gap-2.5 mb-3.5">
            <Logo size={22} fill="#BEE0CF" />
            <span className="font-sans font-bold text-base leading-none text-light-on-green">
              Northcorp<span className="font-medium text-muted-green"> AI</span>
            </span>
          </div>
          <p className="font-sans text-[13px] leading-[1.6] text-muted-green">
            AI voice receptionists for dental, chiropractic, and medical practices.
          </p>
        </div>

        <div className="flex gap-14 flex-wrap">
          <div className="flex flex-col gap-[11px]">
            <div className="font-mono font-medium text-[10px] leading-none tracking-[.1em] uppercase text-muted mb-[3px]">
              Site
            </div>
            <a href="#services" className="font-sans text-[13.5px] leading-none text-mint-light">
              Services
            </a>
            <a href="#process" className="font-sans text-[13.5px] leading-none text-mint-light">
              How it works
            </a>
            <a href="#about" className="font-sans text-[13.5px] leading-none text-mint-light">
              About
            </a>
            <a href="#contact" className="font-sans text-[13.5px] leading-none text-mint-light">
              Contact
            </a>
          </div>

          <div className="flex flex-col gap-[11px]">
            <div className="font-mono font-medium text-[10px] leading-none tracking-[.1em] uppercase text-muted mb-[3px]">
              Contact
            </div>
            <a href="mailto:info@northcorpai.com" className="font-sans text-[13.5px] leading-none text-mint-light">
              info@northcorpai.com
            </a>
            <span className="font-sans text-[13.5px] leading-[1.5] text-muted-green">
              Serving practices
              <br />
              nationwide
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-muted-green/[.18]">
        <div className="max-w-[1120px] mx-auto px-8 py-[18px] flex flex-wrap gap-3 justify-between font-mono font-medium text-[10.5px] leading-[1.5] tracking-[.04em] text-muted">
          <span>© 2026 NORTHCORP AI</span>
          <span>HIPAA COMPLIANT · BAA AVAILABLE · NO MEDICAL ADVICE, EVER</span>
        </div>
      </div>
    </footer>
  );
}
