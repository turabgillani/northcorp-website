"use client";

import Logo from "./Logo";
import { useSite } from "./SiteContext";

export default function Header() {
  const { bookingForm } = useSite();

  return (
    <header className="sticky top-0 z-40 bg-paper/[.86] backdrop-blur-[10px] border-b border-brand/[.12]">
      <div className="max-w-[1120px] mx-auto px-8 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo size={24} fill="#14392B" />
          <span className="font-sans font-bold text-[17px] leading-none tracking-[-.01em] text-brand">
            Northcorp<span className="font-medium text-muted"> AI</span>
          </span>
        </a>
        <nav className="flex items-center gap-[30px]">
          <span className="hidden min-[901px]:flex items-center gap-[30px]">
            <a
              href="#services"
              className="font-sans font-medium text-[13.5px] leading-none text-body transition-colors duration-200 hover:text-terracotta"
            >
              Services
            </a>
            <a
              href="#process"
              className="font-sans font-medium text-[13.5px] leading-none text-body transition-colors duration-200 hover:text-terracotta"
            >
              How it works
            </a>
            <a
              href="#about"
              className="font-sans font-medium text-[13.5px] leading-none text-body transition-colors duration-200 hover:text-terracotta"
            >
              About
            </a>
          </span>
          <button
            onClick={bookingForm.open}
            className="cursor-pointer border-none bg-brand text-paper font-sans font-semibold text-[13px] leading-none px-[18px] py-[11px] rounded-lg transition-all duration-200 hover:bg-brand-dark hover:-translate-y-px hover:shadow-[0_8px_20px_-8px_rgba(20,57,43,.5)]"
          >
            Book a consultation
          </button>
        </nav>
      </div>
    </header>
  );
}
