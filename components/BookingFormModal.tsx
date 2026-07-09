"use client";

import type { BookingForm, BookingFormFields } from "@/lib/useBookingForm";

const TYPES = ["Dental", "Chiropractic", "Medical", "Other"];

function Field({
  label,
  optional,
  children,
}: {
  label: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="font-mono font-semibold text-[9.5px] leading-none tracking-[.1em] uppercase text-muted mb-2 block">
        {label} {optional && <span className="text-[#a99] font-medium">(optional)</span>}
      </span>
      {children}
    </label>
  );
}

const inputClass =
  "w-full box-border bg-card2 border border-brand/[.2] rounded-[9px] px-[13px] py-3 font-sans text-[14.5px] leading-[1.3] text-ink outline-none transition-shadow duration-[180ms] focus:border-terracotta focus:shadow-[0_0_0_3px_rgba(188,106,70,.15)]";

export default function BookingFormModal({ bookingForm }: { bookingForm: BookingForm }) {
  if (!bookingForm.isOpen) return null;

  const set = (key: keyof BookingFormFields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    bookingForm.setField(key, e.target.value);

  return (
    <div
      onClick={bookingForm.close}
      className="fixed inset-0 z-[110] bg-[#0B140F]/[.62] backdrop-blur-[6px] flex items-center justify-center p-6 fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[620px] max-w-full max-h-[92vh] overflow-y-auto bg-card rounded-[20px] shadow-[0_40px_100px_-24px_rgba(0,0,0,.55)]"
      >
        {!bookingForm.submitted ? (
          <div>
            <div className="px-8 pt-7 pb-[22px] border-b border-brand/[.12]">
              <div className="flex justify-between items-start gap-4 mb-3">
                <div>
                  <div className="font-mono font-medium text-[10.5px] leading-none tracking-[.16em] uppercase text-terracotta mb-3">
                    Book a consultation
                  </div>
                  <h3 className="font-serif font-normal text-[28px] leading-[1.1] text-brand tracking-[-.01em]">
                    Let&apos;s scope your agent.
                  </h3>
                </div>
                <button
                  onClick={bookingForm.close}
                  aria-label="Close"
                  className="cursor-pointer flex-none w-[34px] h-[34px] rounded-full border border-brand/[.2] bg-transparent text-body text-sm flex items-center justify-center transition-all duration-200 hover:bg-brand hover:text-paper hover:border-brand"
                >
                  ✕
                </button>
              </div>
              <p className="font-sans text-sm leading-[1.55] text-body max-w-[450px]">
                Tell us a little about your practice and we&apos;ll follow up to set up a
                call. No obligation, no self-serve setup.
              </p>
            </div>

            <form
              onSubmit={bookingForm.submit}
              className="px-8 pt-[26px] pb-[30px] flex flex-col gap-[18px]"
            >
              <div className="grid grid-cols-2 gap-4">
                <Field label="Your name">
                  <input
                    value={bookingForm.form.name}
                    onChange={set("name")}
                    placeholder="Jane Rivera"
                    className={inputClass}
                  />
                </Field>
                <Field label="Practice name">
                  <input
                    value={bookingForm.form.practice}
                    onChange={set("practice")}
                    placeholder="Riverside Family Dental"
                    className={inputClass}
                  />
                </Field>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Email">
                  <input
                    type="email"
                    value={bookingForm.form.email}
                    onChange={set("email")}
                    placeholder="jane@yourpractice.com"
                    className={inputClass}
                  />
                </Field>
                <Field label="Phone" optional>
                  <input
                    value={bookingForm.form.phone}
                    onChange={set("phone")}
                    placeholder="(555) 012-3456"
                    className={inputClass}
                  />
                </Field>
              </div>

              <div>
                <span className="font-mono font-semibold text-[9.5px] leading-none tracking-[.1em] uppercase text-muted mb-2.5 block">
                  Practice type
                </span>
                <div className="flex gap-2 flex-wrap">
                  {TYPES.map((t) => {
                    const active = bookingForm.form.type === t;
                    return (
                      <button
                        key={t}
                        type="button"
                        onClick={() => bookingForm.setField("type", t)}
                        className={`cursor-pointer border rounded-lg font-sans font-semibold text-xs leading-none px-[15px] py-2.5 transition-colors duration-[180ms] ${
                          active
                            ? "border-terracotta bg-terracotta text-[#F8F5EE]"
                            : "border-brand/[.22] bg-transparent text-body"
                        }`}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </div>

              <Field label="What do you need?" optional>
                <textarea
                  value={bookingForm.form.message}
                  onChange={set("message")}
                  rows={3}
                  placeholder="e.g. We miss roughly 15 calls a day, mostly after hours."
                  className={`${inputClass} resize-y min-h-[80px] leading-[1.45]`}
                />
              </Field>

              {bookingForm.error && (
                <div className="font-sans font-medium text-[12.5px] leading-[1.4] text-[#9C3A28] bg-terracotta/[.1] border border-terracotta/[.32] rounded-lg px-[13px] py-[11px]">
                  {bookingForm.error}
                </div>
              )}

              <div className="flex items-center gap-[18px] flex-wrap mt-0.5">
                <button
                  type="submit"
                  disabled={bookingForm.submitting}
                  className="cursor-pointer border-none bg-brand text-paper font-sans font-semibold text-[14.5px] leading-none px-[26px] py-[15px] rounded-[9px] transition-all duration-200 hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-12px_rgba(20,57,43,.5)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                >
                  {bookingForm.submitting ? "Sending…" : "Request a consultation"}
                </button>
                <span className="flex-1 min-w-[180px] flex items-center gap-2 font-sans text-[11.5px] leading-[1.4] text-[#8a7d6c]">
                  <svg width="14" height="14" viewBox="0 0 32 32" fill="none" className="flex-none">
                    <circle cx="16" cy="16" r="14.5" stroke="#7F9E85" strokeWidth="1.4" />
                    <path
                      d="M10 16.5 L14.5 21 L22 11.5"
                      stroke="#7F9E85"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Your details stay private. We reply personally by email.
                </span>
              </div>
            </form>
          </div>
        ) : (
          <div className="px-10 py-[58px] text-center">
            <div className="w-[58px] h-[58px] rounded-full bg-brand flex items-center justify-center mx-auto mb-[22px]">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <path
                  d="M9 16.5 L14 21.5 L23 10.5"
                  stroke="#7FD6A0"
                  strokeWidth="2.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="font-serif font-normal text-[27px] leading-[1.15] text-brand mb-3">Request received.</h3>
            <p className="font-sans text-[15px] leading-[1.6] text-body mx-auto mb-[26px] max-w-[390px]">
              Thank you{bookingForm.nameSuffix}. We&apos;ll reach out by email shortly to
              find a time that works for your practice.
            </p>
            <button
              onClick={bookingForm.close}
              className="cursor-pointer border-none bg-terracotta text-on-terracotta font-sans font-semibold text-sm leading-none px-[26px] py-[13px] rounded-[9px] transition-all duration-200 hover:bg-terracotta-dark hover:-translate-y-px"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
