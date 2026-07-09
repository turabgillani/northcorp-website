"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { useCallDemo, type CallDemo } from "@/lib/useCallDemo";
import { useBookingForm, type BookingForm } from "@/lib/useBookingForm";
import type { ScenarioKey } from "@/lib/callScripts";

interface SiteContextValue {
  callDemo: CallDemo;
  bookingForm: BookingForm;
  copied: boolean;
  copyEmail: () => void;
}

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const callDemo = useCallDemo();
  const bookingForm = useBookingForm();
  const [copied, setCopied] = useState(false);

  const copyEmail = useCallback(() => {
    navigator.clipboard?.writeText("info@northcorpai.com").catch(() => {});
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }, []);

  return (
    <SiteContext.Provider value={{ callDemo, bookingForm, copied, copyEmail }}>
      {children}
    </SiteContext.Provider>
  );
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used within a SiteProvider");
  return ctx;
}

export type { ScenarioKey };
