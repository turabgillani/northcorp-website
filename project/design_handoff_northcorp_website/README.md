# Handoff: Northcorp AI — Marketing Website (Home)

## Overview
A single-page marketing website for **Northcorp AI**, an agency that designs, tests, and
runs AI voice receptionists ("agents") for independently owned dental, chiropractic, and
medical practices. The page's job is to build trust with a non-technical, compliance-sensitive
owner-operator audience and drive one primary action: **booking a consultation**. A secondary
action lets visitors **hear an example call**.

The design leans editorial and calm (serif display type, warm paper background, a single deep-green
brand color and a terracotta accent) to feel like a considered professional service rather than a
self-serve SaaS product.

## About the Design Files
The files in this bundle are **design references created in HTML** — a working prototype that shows
the intended look, copy, and behavior. **They are not production code to ship directly.**

The HTML is authored as an "omelette" Design Component (`.dc.html`) and relies on a bundled runtime
(`support.js`) purely so it previews in a browser. Treat the markup and inline styles as the
**source of truth for visual values**, not as a component architecture to copy.

**Your task:** recreate these designs in the target codebase's existing environment (React, Vue,
Svelte, Astro, plain HTML/CSS, etc.), using its established patterns, component library, and
conventions. If no codebase exists yet, choose the most appropriate stack for a marketing site
(e.g. Next.js/Astro + a CSS system) and implement there. The design uses only Google Fonts and
inline SVG — there are no proprietary assets to license.

## Fidelity
**High-fidelity (hifi).** Colors, typography, spacing, radii, shadows, and interactions are all
final and intentional. Recreate the UI pixel-accurately using the codebase's libraries. Exact
values are listed in **Design Tokens** below; per-section specifics follow.

---

## Global Layout & Chrome

- **Content width:** every section centers content in a `max-width: 1120px` column with `32px`
  horizontal padding. Full-bleed color bands (deep-green / alt-cream sections) span the viewport
  width but keep their inner content inside the 1120px column.
- **Vertical rhythm:** section padding runs `56px–90px` top/bottom.
- **Page background:** `#F4F1E9` (warm cream). Base body text `#1B2620`, font Hanken Grotesk.
- **Header:** sticky, `z-index:40`, translucent `rgba(244,241,233,.86)` with `backdrop-filter: blur(10px)`
  and a `1px` bottom border `rgba(20,57,43,.12)`. Left: logo mark (inline SVG 8-point star) + "Northcorp AI"
  wordmark (700, "AI" in 500 `#5C7062`). Right: nav links (Services / How it works / About, 13.5px/500
  `#3C4A42`, hover `#BC6A46`) + a solid green "Book a consultation" button. Nav links hide below 900px.

---

## Sections / Views (top to bottom)

All section headings use an **eyebrow** pattern: a small diamond (8–9px rotated square, `#BC6A46`) +
uppercase JetBrains Mono label (10–11px, letter-spacing `.16em`, color `#BC6A46`).

### 1. Hero  `#top`
- Two-column grid `1.05fr .95fr`, gap `56px`, vertically centered. Collapses to 1 col < 900px.
- **Left:** live status row (pulsing terracotta dot + "Agent live · AI voice receptionists" mono),
  then H1 **"Never send a patient to voicemail."** (Newsreader 400, 58px/1.04, `-.015em`, `#14392B`;
  44px < 900px, 35px < 520px). Sub-paragraph 17px/1.6 `#3C4A42`, max-width 480px. Two buttons:
  primary green **Book a consultation** (→ open form) and a text/secondary **Hear an example call**
  (→ open call modal).
- **Right:** a "recording in progress" call card on deep-green `#14392B`, radius 16px, with a live
  REC label, an animated equalizer waveform (`nc-eq` keyframe), and transcript preview.

### 2. Compliance band
- Full-bleed deep-green `#14392B`, text `#EDECE4`. Two-column `.82fr 1fr`, gap 64px, `align-items:start`.
- Left column is **sticky** (`top:96px`) with a mint eyebrow (`#7FD6A0`) and H2 "We treat compliance
  as the product, not the footer." (Newsreader, 36px, `#F4F1E9`). Left column becomes static < 900px.
- Right: list of compliance guarantees.

### 3. The pitch — "Now vs With Northcorp"
- Full-bleed alt band `#EEE7D8` with hairline top/bottom borders. Inner two-column `1fr 1fr` comparison:
  a muted "today / without" card vs a deep-green "with Northcorp on the line" card (mint pulsing dot).

### 4. Who we build for  `#services`  — auto-playing verticals carousel
- Eyebrow "Who we build for", H2 "Built for three kinds of practice." (Newsreader 40px).
- A status line notes "Auto-playing through each practice · hover to pause."
- Carousel container (`data-reveal`, `onMouseEnter/Leave` pause) with:
  - **Tabs** Dental / Chiropractic / Medical (mono, active gets `#14392B` text + `#BC6A46` underline).
  - **Prev / Next** circular 40px arrow buttons (hover fills green, lifts 1px).
  - Two-column body `.9fr 1.1fr`: left = big serif index number (54px, `#D8C4AC`) + vertical name
    (Newsreader 42px) + description + "Hear the full call" green button; right = a deep-green
    transcript preview card.
  - Bottom: a progress bar (fill `#BC6A46`, `width` animates) + pill dots (active dot widens to 24px).
- **Behavior (important):** the auto-advance loader must **not start on page load**. It starts only
  when this section scrolls into view (IntersectionObserver on `#services`, threshold 0.25), resets to
  index 0 (Dental), then advances. See **Interactions**.

### 5. Capability & boundaries — "Everything a receptionist should do."
- Centered header, then a two-column `1fr 1fr` split with a 1px seam (`gap:1px` over a
  `rgba(20,57,43,.12)` background), radius 20px, overflow hidden:
  - **Left (green `#14392B`):** "Handles it, end to end" — checklist with mint `✓` chips.
  - **Right (cream `#FBF6EC`):** "A hard line, not a soft one" — list with terracotta `✕` chips.

### 6. Integrations  `#integrations` — "Connects to your stack"
- Header two-column `.9fr 1.1fr` (eyebrow + H2 left, paragraph right).
- An "After every call" inline flow: Call handled → Data captured → Synced (diamond bullets, arrows).
- **Three category cards** (`repeat(3,1fr)`, gap 20px), each with:
  - A **44×44 rounded-square icon badge** (radius 12px, tinted background) containing an inline SVG:
    - *Practice management* — document/records icon, stroke `#BC6A46`, badge `rgba(188,106,70,.1)`.
    - *Calendars & scheduling* — calendar icon, stroke `#BC6A46`, badge `rgba(188,106,70,.1)`.
    - *Automations & data* — connected-nodes icon, stroke `#7FD6A0`, badge `rgba(127,214,160,.14)`;
      this **third card is deep-green** `#14392B` (others are cream `#FCFAF3`).
  - Mono uppercase label, a short description, then a divided list of integration names.
  - **Hover:** `translateY(-4px)` + deepened shadow (transition `.3s cubic-bezier(.22,.61,.36,1)`).
- **Closing note row:** paragraph + a **"Talk to us about your setup" CTA**. This is a pill button
  (`#FCFAF3` bg, 1px border `rgba(20,57,43,.16)`, padding `14px 22px`, radius 10px, mono uppercase).
  **Hover:** `translateY(-3px)`, shadow `0 16px 32px -14px rgba(20,57,43,.55)`, background inverts to
  `#14392B`, text to `#F4F1E9` (transition `.28s cubic-bezier(.22,.61,.36,1)`). → opens form.

### 7. Why an agency, not an app
- A single contained **warm panel** `#FBF6EC`, 1px border `rgba(20,57,43,.08)`, radius 26px,
  padding `58px 56px`, shadow `0 34px 80px -44px rgba(20,57,43,.4)`, with a faint rotated-diamond
  watermark top-right (`rgba(188,106,70,.06)`).
- Inside: eyebrow + a large statement (Newsreader 34px/1.32) with the phrase
  "We hand you a finished receptionist" highlighted in `#BC6A46`.
- Then **three numbered step cards** (`repeat(3,1fr)`, gap 22px): each has a large serif index
  (Newsreader 46px, `#BC6A46`) + a diamond, a mono step label (WE DESIGN IT / WE TEST IT / WE RUN IT),
  and a description. Cards are `#FFFDF8`; the **third card is deep-green** `#14392B` (index & label in
  mint). **Hover:** `translateY(-6px)` + shadow.

### 8. How it works  `#process` — "Every agent ships through three gates."
- Eyebrow + H2 + intro. Three step columns (`repeat(3,1fr)`, gap 24px) sitting over a horizontal
  connector line (`data-r="pline"`, absolute, gradient `#14392B → #BC6A46`; hidden < 900px).
- Each step: a 36px numbered circle (2px green border) + a mono stage label + Newsreader 23px title +
  description. **Hover:** column lifts `translateY(-6px)`.

### 9. Who we are  `#about`
- Two-column grid `.94fr 1.06fr`, gap 64px, centered. **Both grid children have `min-width:0`** so the
  `fr` tracks split correctly (do not omit this). Collapses to 1 col < 900px.
- **Left — brand panel:** deep-green `#14392B`, radius 22px, padding `40px 38px`, shadow
  `0 40px 88px -44px rgba(20,57,43,.62)`, `min-height:392px`, flex column space-between, with a faint
  rotated-diamond watermark (`rgba(127,214,160,.06)`). Top: logo mark + "Northcorp AI" wordmark.
  Bottom: a Newsreader 27px statement ("Small enough to build you a real receptionist. Serious enough
  to stand behind every call it takes.") + a mono "Working with practices nationwide" line with a
  pulsing mint dot.
- **Right — story:** eyebrow "Who we are", a Newsreader 35px/1.28 lead with
  "design the agent, test it, and run it" highlighted in `#BC6A46`, a 16px body paragraph
  (max-width 520px), then three **pill chips** (`#FCFAF3`, 1px border, radius 999px, diamond + label):
  Compliance-first · Independently owned practices · Dental · Chiropractic · Medical.

### 10. Closing CTA  `#contact`
- Full-bleed deep-green `#14392B`, centered. Star mark, H2 "Stop answering the phone yourself."
  (Newsreader 46px, `#F4F1E9`), sub-paragraph (`#BEE0CF`), and two buttons: solid terracotta
  **Book a consultation** (`#BC6A46`, text `#1B140F`; hover `#A9542F` + lift + shadow) and an outline
  **Hear an example call**. Below: "or email …" with a **copy-to-clipboard** email button.

### 11. Footer
- Deep-green `#0F2B20`, text `#8FA396`. Brand blurb + link columns.

### Overlays (modals)
- **Call demo modal** (`modalOpen`): fixed scrim `rgba(11,20,15,.62)` + blur. Scenario tabs
  (Dental / Chiropractic / Medical), a play/pause control, animated waveform, and a transcript that
  reveals line-by-line over time with an elapsed/total counter and a disclaimer. Supports either a
  **real recorded call** (set an `audio` file path + `total` seconds + per-line `at` timestamps) or a
  **scripted timer fallback** (no audio) — see the CALL SCRIPTS comment in the source.
- **Booking form modal** (`formOpen`): fields Name, Practice name, Email, Phone, Type
  (Dental / Chiropractic / Medical / Other), Message; basic validation → a submitted success state.

---

## Interactions & Behavior

- **Reveal on scroll:** elements marked `data-reveal` start `opacity:0; translateY(26px)` and animate to
  visible over `.7s cubic-bezier(.22,.61,.36,1)` when they enter the viewport (IntersectionObserver,
  threshold `0.12`, `rootMargin: 0px 0px -7% 0px`). Only elements that begin below ~86% of the viewport
  height animate; above-the-fold content paints immediately. Each element is unobserved after revealing.
- **Verticals carousel (section 4) — deferred start:** an IntersectionObserver watches `#services`
  (threshold `0.25`). The auto-advance timer starts **only on first intersection**, resetting to index 0
  (Dental) at that moment — so it never "runs ahead" while the user scrolls down. Once started it ticks
  every `120ms`, advancing the progress bar `+2%`; at 100% it moves to the next vertical and resets to 0.
  It **pauses** while the pointer is over the carousel, or while either modal is open. Prev/Next arrows
  and the dots jump directly and reset progress. If `IntersectionObserver` is unavailable it starts
  immediately as a fallback. (Clean up the observer on unmount.)
- **Hover states:** cards/steps lift `translateY(-4 to -6px)` with a deepened shadow; the header/CTA
  buttons lift and shift color; nav links and text links shift to `#BC6A46`. Transitions `.2s–.3s`.
- **Pulsing dots:** live indicators use the `nc-pulse` keyframe (`2.4s`; the REC dot uses `1.4s`).
- **Waveform:** the hero/modal equalizer uses the `nc-eq` keyframe (scaleY 0.24 ↔ 1).
- **Copy email:** the closing-CTA email button copies the address to the clipboard and briefly shows a
  "copied" state.
- **Smooth scrolling:** `html { scroll-behavior:smooth }`; in-page nav uses `#anchor` links.
- **Responsive:** single breakpoint system — at `max-width:900px` all `1fr` multi-column grids collapse
  to one column, nav links / process connector / carousel arrows hide, the sticky compliance heading
  goes static, and the H1 drops to 44px. At `max-width:520px` the H1 drops to 35px.

## State Management
State variables used by the prototype (recreate equivalents in your framework):
- `modalOpen` (bool) — call demo modal visibility
- `formOpen` (bool) — booking form modal visibility
- `playing` (bool), `elapsed` (number), `scenario` (string|null) — call playback
- `svIndex` (0–2), `svProgress` (0–100) — verticals carousel
- `submitted` (bool), `formError` (string), `copied` (bool) — form + copy states
- `form` (object): `{ name, practice, email, phone, type, message }`

Configurable options (exposed as tweakable props in the prototype — expose as component props/config):
- `callScenario`: `'dental' | 'chiropractic' | 'medical'` (default `dental`)
- `autoplayCall`: boolean (default `true`)
- `callSpeed`: number `0.5–2` step `0.25` (default `1`) — scripted-timer speed multiplier

---

## Design Tokens

### Color
| Role | Hex |
|---|---|
| Page background (paper) | `#F4F1E9` |
| Alt band background | `#EEE7D8` |
| Warm panel / soft card | `#FBF6EC` |
| Card surface (light) | `#FCFAF3` / `#FFFDF8` |
| Brand deep green | `#14392B` |
| Green — darker (footer, hover) | `#0F2B20` |
| Accent — terracotta | `#BC6A46` |
| Terracotta — hover | `#A9542F` |
| Text on terracotta button | `#1B140F` |
| Mint / success | `#7FD6A0` |
| Mint — light on dark | `#BEE0CF` / `#D3E6DA` |
| Muted green (footer text) | `#8FA396` |
| Body base text | `#1B2620` |
| Body copy | `#3C4A42` |
| Muted text | `#5C7062` |
| Warm muted (mono labels) | `#8a6a52` / `#9a8f7e` |
| Heading / dark text | `#14392B` |
| Light text on green | `#EDECE4` / `#F4F1E9` |
| REC / alert dot | `#E5484D` |
| Serif index (muted tan) | `#D8C4AC` |
| Selection background / text | `#BC6A46` / `#F8F5EE` |
| Hairline borders | `rgba(20,57,43,.08 / .1 / .12 / .14 / .16 / .22)` |
| Borders on dark | `rgba(190,224,207,.14 / .16)` |

### Typography
- **Display / serif:** `Newsreader` (Google Fonts, weights 300–600, opsz 6–72). Used for H1/H2/H3 and
  statement copy. Key sizes: H1 58px/1.04 (44/35 responsive); section H2 40px/1.1; sub-statements
  27–35px; card headings 42px & 23px; big index numbers 44–54px. Letter-spacing `-.01em` to `-.015em`.
- **Body / UI:** `Hanken Grotesk` (400/500/600/700/800). Body 16–17px / line-height 1.6–1.72; nav 13.5px;
  buttons 13–15px; chips 12.5px.
- **Mono / labels:** `JetBrains Mono` (400/500/600). Eyebrows & labels 9.5–11px, UPPERCASE,
  letter-spacing `.08em–.16em`.
- Google Fonts import (single `<link>`):
  `Newsreader:ital,opsz,wght@0,6..72,300..600;1,6..72,400` · `Hanken+Grotesk:wght@400;500;600;700;800`
  · `JetBrains+Mono:wght@400;500;600`.

### Spacing & sizing
- Content column `max-width: 1120px`, horizontal padding `32px`.
- Section vertical padding `56px–90px`. Grid gaps `20px–64px`.
- Icon badges `44×44`, radius `12px`. Numbered process circles `36px`.

### Radius
- Buttons `8–10px` · cards `15–16px` · panels `20–26px` · pill chips / dots `999px` · small badges `11–12px`.

### Shadow
- Resting card: `0 16px 34px -26px rgba(20,57,43,.35)` (+ `0 1px 0 rgba(20,57,43,.03)` hairline).
- Card hover: `0 24–28px 46–54px -22…-26px rgba(20,57,43,.5–.75)`.
- Large panels: `0 34–42px 80–92px -40…-46px rgba(20,57,43,.4–.62)`.
- CTA pill hover: `0 16px 32px -14px rgba(20,57,43,.55)`.

### Motion
- `nc-pulse` — live dots, `2.4s ease-in-out infinite` (REC dot `1.4s`).
- `nc-eq` — waveform bars, `scaleY(.24) ↔ scaleY(1)`.
- `nc-fade` — transcript bubble entrance.
- Reveal-on-scroll — `.7s cubic-bezier(.22,.61,.36,1)`, opacity + translateY(26px→0).
- Hover — `.2s–.3s`, easing `cubic-bezier(.22,.61,.36,1)` for lifts.

---

## Assets
- **No raster images.** All graphics are inline SVG or CSS.
- **Logo mark:** an 8-point star/asterisk polygon —
  `points="24,3 29,19 45,24 29,29 24,45 19,29 3,24 19,19"` on a `0 0 48 48` viewBox. Recolored per
  context (`#14392B` header, `#BC6A46` closing CTA, `#BEE0CF` footer).
- **Integration icons:** three simple inline SVG line icons (document, calendar, connected-nodes) drawn
  from basic primitives (rects, lines, circles), `stroke-width 1.6`, rounded caps/joins.
- **Fonts:** Google Fonts (Newsreader, Hanken Grotesk, JetBrains Mono).
- **Call audio (optional):** to wire a real recorded demo, add an `audio/` folder and set the `audio`
  path + `total` seconds + per-line `at` timestamps in the call scripts (see source comment). With no
  audio, a scripted timer drives the transcript.

## Files
- `Northcorp Home.dc.html` — the full one-page site (all sections, both modals, and the interaction
  logic in the trailing script). **Primary reference.**
- `Northcorp Brand Directions.dc.html` — earlier brand-direction exploration (color/type reference).
- `support.js` — the preview runtime that lets the `.dc.html` files open in a browser. **Reference /
  preview only — not something to port.** To view a design: open the `.dc.html` file in a browser with
  `support.js` alongside it.

> Reminder: the HTML is a **design reference**, not the delivery target. Rebuild these screens in your
> app's real framework and component system using the values above.
