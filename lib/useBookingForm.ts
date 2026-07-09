"use client";

import { useCallback, useState } from "react";
import { submitBooking } from "@/lib/hubspot";

export interface BookingFormFields {
  name: string;
  practice: string;
  email: string;
  phone: string;
  type: string;
  message: string;
}

const EMPTY_FORM: BookingFormFields = {
  name: "",
  practice: "",
  email: "",
  phone: "",
  type: "",
  message: "",
};

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export function useBookingForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState<BookingFormFields>(EMPTY_FORM);

  const open = useCallback(() => {
    // Reset to a clean form each open, so placeholder hints show and no stale
    // input carries over from a previous session.
    setForm(EMPTY_FORM);
    setSubmitted(false);
    setSubmitting(false);
    setError("");
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const setField = useCallback((key: keyof BookingFormFields, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setError("");
  }, []);

  const submit = useCallback(
    async (e?: { preventDefault: () => void }) => {
      e?.preventDefault();
      if (submitting) return;
      if (!form.name.trim() || !form.email.trim()) {
        setError("Please add your name and email so we can reach you.");
        return;
      }
      if (!EMAIL_RE.test(form.email.trim())) {
        setError("That email address looks incomplete.");
        return;
      }
      setError("");
      setSubmitting(true);
      try {
        await submitBooking(form);
        setSubmitted(true);
      } catch {
        setError(
          "Something went wrong sending your request. Please try again, or email info@northcorpai.com."
        );
      } finally {
        setSubmitting(false);
      }
    },
    [form, submitting]
  );

  const nameSuffix = form.name.trim() ? `, ${form.name.trim().split(/\s+/)[0]}` : "";

  return {
    isOpen,
    submitted,
    submitting,
    error,
    form,
    nameSuffix,
    open,
    close,
    setField,
    submit,
  };
}

export type BookingForm = ReturnType<typeof useBookingForm>;
