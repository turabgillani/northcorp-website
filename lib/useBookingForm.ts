"use client";

import { useCallback, useState } from "react";

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
  const [error, setError] = useState("");
  const [form, setForm] = useState<BookingFormFields>(EMPTY_FORM);

  const open = useCallback(() => {
    setIsOpen(true);
    setSubmitted(false);
    setError("");
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const setField = useCallback((key: keyof BookingFormFields, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setError("");
  }, []);

  const submit = useCallback(
    (e?: { preventDefault: () => void }) => {
      e?.preventDefault();
      if (!form.name.trim() || !form.email.trim()) {
        setError("Please add your name and email so we can reach you.");
        return;
      }
      if (!EMAIL_RE.test(form.email.trim())) {
        setError("That email address looks incomplete.");
        return;
      }
      // Prototype only: this does not send anywhere yet.
      // See project/Northcorp - Backlog.md for CRM wiring plan.
      setSubmitted(true);
    },
    [form]
  );

  const nameSuffix = form.name.trim() ? `, ${form.name.trim().split(/\s+/)[0]}` : "";

  return {
    isOpen,
    submitted,
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
