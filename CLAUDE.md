# Northcorp AI, Marketing Website

## What this is
A single-page marketing site for **Northcorp AI**, an agency that designs, tests, and runs
AI voice receptionist agents for independently owned dental, chiropractic, and medical
practices. The site's job is to build trust with a non-technical, compliance-sensitive
practice owner and drive one primary action: **booking a consultation**. A secondary action
lets a visitor **hear an example call**.

It was built from a Claude Design handoff (see the `project/` folder). The look is editorial
and calm: warm cream paper, deep evergreen, a terracotta accent, and serif display type.

## Tech stack
- Next.js 16 (App Router, Turbopack)
- React 19 + TypeScript
- Tailwind CSS v4 (configured in `app/globals.css` via `@theme`, there is no `tailwind.config` file)
- Fonts via `next/font/google`: Newsreader (serif), Hanken Grotesk (sans), JetBrains Mono (mono)
- No database and no backend yet. The site is fully static / client-rendered.

## How to run
- Install dependencies once: `npm install`
- Start the dev server: `npm run dev`, then open `http://localhost:3000`
- Check a production build: `npm run build`
- Lint: `npm run lint`

## Project structure
- `app/layout.tsx`: root layout, fonts, page metadata
- `app/page.tsx`: renders `<HomePage />`
- `app/globals.css`: Tailwind import, design tokens (`@theme`), keyframes, base styles
- `components/HomePage.tsx`: assembles every section, wraps the page in `SiteProvider`
- `components/SiteContext.tsx`: shared client state (call-demo modal, booking-form modal, copy-email)
- `components/*.tsx`: one file per page section and per modal
- `lib/callScripts.ts`: the three example-call transcripts (dental / chiropractic / medical) plus the verticals data
- `lib/useCallDemo.ts`: the call-demo player logic (scripted timer today, built to accept real audio)
- `lib/useBookingForm.ts`: booking-form state and validation
- `project/`: the original Claude Design handoff. This is design **reference**, not app code. Read `project/design_handoff_northcorp_website/README.md` for the full visual spec (colors, type, spacing, shadows, motion).
- `chats/`: the original design conversation transcripts (intent and history)

## Design source of truth
The visual spec is `project/design_handoff_northcorp_website/README.md` and the `.dc.html`
files beside it. When you change visuals, match those. Every color, type size, radius, and
shadow is documented there and mirrored as tokens in `app/globals.css`.

## Brand and content rules (important, from the original brief)
- **No pricing anywhere.** Everything funnels to the consultation form.
- **No fabricated proof.** There are no paying clients yet, so no invented client logos,
  testimonials, quotes, or usage stats. Lean only on true claims (HIPAA, BAA, California
  CPPA, the three-stage release pipeline).
- **The agent never gives medical advice or a diagnosis.** State this boundary plainly.
  It builds trust rather than undermining it.
- **National positioning** ("practices nationwide"), not limited to Southern California.
- **Do not name the underlying voice platform** anywhere on the site.
- **Do not invent a product name** for the agent. Everything is under the Northcorp AI name.
- **Do not use em dashes** in site copy. Use commas, periods, or parentheses instead.
- The example-call practice names (Riverside Family Dental, etc.) are fictional samples,
  clearly labeled as scripted, not real patients.

## Current status
The Home page is complete and matches the design. Every section works, both modals (the
call demo and the booking form) work, the layout is responsive down to mobile, and the
project builds and lints clean.

## What is not done yet (backlog, see `project/Northcorp - Backlog.md`)
- **Booking form is front-end only.** On submit it validates and shows a success state but
  does not send anywhere. Wire it to **HubSpot** (the intended CRM) before going live.
  Reasonable options: the HubSpot Forms API (keeps this exact design), a HubSpot embedded
  form, or a middleman like Zapier / Make.
- **Closing email** (`info@northcorpai.com`) is click-to-copy, not a live mail link. Decide
  the final production behavior.
- **Example call has no real audio.** It is a scripted transcript with an animated (fake)
  waveform. The player is built to swap in a real recording: in `lib/callScripts.ts`, set the
  `audio` path, the `total` duration in seconds, and each line's `at` timestamp. Record the
  call through the real voice stack, then drop it in.
- **FAQ section** is planned, in the same "dossier / ledger" style as the Compliance section.
  It needs real answers written first.
- **Proof band / client quote / logos** only once real ones exist.

## Conventions
- Any interactive component starts with the `"use client"` directive.
- Sections are self-contained components composed in `HomePage.tsx`.
- Tailwind arbitrary values are used freely to hit exact design numbers (e.g. `text-[58px]`).
- The design collapses to mobile at `max-width: 900px` (and the H1 shrinks again at 520px),
  implemented with `min-[901px]` / `max-[900px]` utilities.
- `.gitignore` already excludes `node_modules` and `.next`, so those never get committed.

## Deploying (when ready)
Vercel is the natural host for a Next.js site. Connect the GitHub repo to Vercel once and it
auto-deploys on every push, with no extra configuration needed for this app.

@AGENTS.md
