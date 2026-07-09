# Northcorp AI — Website Backlog

Running list of desirable updates to come back to. Newest ideas at the top of each section.

## Next up
- [ ] **FAQ section** — planned next. Likely questions: pricing model, onboarding time,
      which platform the agents run on, what happens when the agent can't help,
      data/PHI handling. Design it in the same "dossier / ledger" style as the
      Compliance section for consistency. *Needs real answers before building.*

## Credibility / proof (needs real content — do not fabricate)
- [ ] **Proof band** — 1–3 real outcomes (e.g. calls answered, missed-call reduction,
      after-hours coverage). Design as a quiet stat band in the dossier aesthetic.
- [ ] **Client quote** — one short testimonial from a real practice, with name + role.
- [ ] **Logos / "practices we serve"** — if/when there are references to show.

## Functional wiring (currently prototype-only)
- [ ] **Booking form backend** — the "Book a consultation" form is fully designed and
      validates input, but on submit it only shows a success state; it does not yet send
      anywhere. Wire to email/CRM/Calendly/Formspree etc. when going live.
- [ ] **Email link** — `info@northcorpai.com` currently copies to clipboard with feedback.
      The old `mailto:` only opened a mail app for visitors who have one configured, so it
      silently did nothing in the preview. Decide final behavior for production
      (mailto, copy, or route into the form).
- [ ] **Consider Calendly / scheduling embed** as an alternative or complement to the form.

## Content / positioning
- [ ] Revisit whether the sample call practice names (Riverside Family Dental, etc.)
      should be genericized now that positioning is national.
