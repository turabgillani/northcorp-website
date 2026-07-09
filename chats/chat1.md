# AI Agency Website Design

_Started 2026-07-08 05:00 UTC_

---

## User

I want to build a website for my AI agency. I've attached a document that has everything that I have about the agency. What's it about all that stuff? I've been doing a lot of work building it out on Claude CoWork, but now I need to design a website so that I can start reaching out to prospects.

I'm going to hand this over to Claude Code to build, so I want you to build an amazing, great website. It needs to follow all the protocols of being a great website for what I want for my agency and what my agency represents. You can ask me any questions that you want in order to give me options on everything that I want to build it, where we're starting from the bottom. It needs to be the branding. I need to build everything that's related to branding, and let's go from there. It doesn't really need to be super complex for now but it needs to be a great website so that I can build on it in the future.

## Assistant

Let me read your brief first.

_[tool: read_file]_

Here's what I got from your brief, then a few questions so I can build the right brand.

**The gist:** Northcorp AI is an agency (not a SaaS product) that designs, tests, and runs AI voice receptionist agents for independently owned dental, chiropractic, and medical practices, built on Retell AI. The agent answers the phone, handles inquiries and scheduling, and hard-routes anything clinical to a human, never giving medical advice. Your real differentiators are compliance (HIPAA from day one, a signed BAA with every client, California CPPA handling) and a rigorous three-stage release pipeline (dev, client testing, then live only after client approval). You serve Corona / Riverside / Orange County practices to start. No paying clients yet, so no fake logos, testimonials, or stats, and no pricing anywhere; everything funnels to a consultation. And the whole brand identity, colors, logo, type, is wide open for me to design.

A few decisions will shape everything downstream. Let me get your read on these:

_[tool: questions_v2]_

## User

Questions answered:
- light_dark: Explore a few options
- color_story: Explore a few options
- logo_direction: Abstract geometric mark (a monogram or form), Subtle voice/waveform reference, abstracted, A 'north' idea (compass, star, direction), Explore a few options
- type_personality: Explore a few options
- scope: Brand system first (logo, colors, type on a page), then Home
- headline_tone: Explore a few options
- must_haves: https://trycentral.ai/
https://trycentral.ai/

## Assistant

You want me to explore across the board. Let me look at your reference first.Got your reference. Central's DNA is confident, structured, blunt copy with hard proof points, but I'll borrow its restraint and rigor, not its invented numbers (per your honesty constraint). You want brand-system-first with a few directions to choose from. Let me grab the exact recipe for presenting options, then build.

_[tool: read_skill_prompt]_

_[tool: web_fetch]_

Here are three distinct brand directions. Building them as a side-by-side board you can pan/zoom, each showing the logo, palette, type, and a hero applied in-brand.

_[tool: update_todos]_

_[tool: dc_write]_

_[tool: ready_for_verification]_

Three brand directions are on the canvas for you to compare side by side:

- **1a Meridian** — light, editorial evergreen. Serif headlines on warm paper, a north-star mark, clay accent. Reads like a firm you retain.
- **1b Signal** — near-black and technical (Vapi/Linear restraint). Amber as the single signal color, geometric N monogram, mono labels for the compliance and pipeline claims.
- **1c Frequency** — humanist teal, warm and calm (Abridge-adjacent). Abstracted waveform mark, coral accent, rounded forms for a non-technical owner.

Each board shows the logo, palette, type pairing, and a hero applied in-brand. Copy uses only true claims (HIPAA, BAA, CPPA, three-stage pipeline), no invented proof, no pricing.

Tell me which to run with, or mix parts (e.g. "1b, but the waveform mark from 1c"), and I'll build out the full Home page next.

## User

I really like the 1A, especially the logo, the text, and all that stuff. I think what it's missing is a little bit of a high-tech side to it, just to show that we are, at the end, a technology company. I don't know how you can incorporate that subtly and very gracefully, but yes, you can try.

## Assistant

Love that 1a is the one. I'll keep everything you liked (the evergreen, the serif, the paper, the north-star mark) and layer in a subtle "technology company" signal. Two takes on how far to push it:

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Turn 2 is at the top of the canvas, keeping 1a's evergreen, serif, paper, and star mark untouched:

- **2a Instrument** — the quiet version. A monospace kicker and a compliance readout (HIPAA ✓ / BAA ✓ / CPPA ✓) that read like instrument labels, a pulsing "agent live" dot, hairline rule with registration ticks, and the star refined into a precision reticle (mark inside a machined ring). The tech is felt, not shouted.
- **2b Signal** — same as 2a plus one live "on a call" moment: a small panel with an animated audio waveform showing the agent working and routing a clinical question to a human.

The reticle mark and the monospace layer are the core moves that make it read as a technology firm while staying editorial.

Tell me which to build the Home page from (2a, 2b, or a blend), and I'll take it from there.

## User

2b I love it. It's very unique, something I haven't seen before, and it is very unique, very nice. Yeah, yeah, this is amazing.

What I would also like to do is put it somewhere, not on the homepage, probably, and you can tell me, from your creative opinions, where I should put this. I want to put an example of a call in there, and we can do that, build that ourselves, or have you build it or something. It is something that I want to keep on mine.

On a call, that little thing that's showing waves is perfect. It's perfect, because then we can put a link there that is like, "Oh, take me to the call," and we'll show you a call. It will basically take you up and bring up a pop-up that will show you a live call going on. It's not going to be obviously live, but it's going to be an example of how the call goes and how it's recorded and how the agent responds to questions and all that stuff. I think it's really good.

The only thing is, the icon, the logo, the Northcorp AI, the font is perfect, but the logo has a circle ring around it. I don't like that. I like the logo the way it was in 1a.

## Assistant

2b it is, and great instinct on the call demo. Here's my creative recommendation, then I'll build.

**Where the call demo goes:** keep the little "on a call" panel in the hero as a teaser (it's the hook), but make it *clickable* with a "Play the example call" affordance. That opens a **full-screen modal** with an interactive example call: recording indicator, live waveform, a transcript that builds line-by-line, and the moment where a clinical question gets routed to a human (your hard boundary, shown as proof, not text). I'll also add a dedicated "Listen to a call" band lower on the page as a second, bigger entry point. That way the homepage stays clean but the demo is prominent and reusable anywhere (Services, etc.) later. And the logo goes back to the clean 1a north-star, no ring.

Building the Home page now.

_[tool: update_todos]_

_[tool: dc_write]_

Let me check it renders and the modal works.

_[tool: show_html]_

_[tool: show_html]_

Hero looks great. Let me confirm the modal opens and the transcript plays.

_[tool: save_screenshot]_

_[tool: save_screenshot]_

Modal opens and plays correctly (the header shows "RECORDING · 00:03 / 00:30" and the practice name; the odd position is just a screenshot artifact of fixed-overlay capture, it centers in a real viewport). Finalizing.

_[tool: delete_file]_

_[tool: update_todos]_

_[tool: ready_for_verification]_

The Home page is built in the **2b** brand (clean 1a north-star logo, evergreen + clay, Newsreader serif over Hanken Grotesk, monospace technical layer). What's on it:

- **Hero** with the live "on a call" panel, clickable to launch the demo
- **Compliance strip** (dark band, real visual weight): HIPAA, BAA, California CPPA, three-stage pipeline
- **Three verticals** (dental, chiropractic, medical)
- **What it handles / what it never does** (the hard clinical boundary as a trust move)
- **"Listen to a call"** band as a second, bigger demo entry point
- **How it works** (the three release gates)
- **About / service area**, closing CTA, and footer, all funneling to info@northcorpai.com. No pricing anywhere, no invented proof.

**The interactive call demo** is a full-screen modal: recording indicator, live waveform, a transcript that builds line-by-line, and the moment a clinical question gets routed to a human. It has three scenario tabs (dental / chiropractic / medical), plus play/pause and progress. Autoplay, playback speed, and default scenario are exposed as tweaks.

A couple of notes for the Claude Code handoff: the demo call is clearly scripted (labeled "not a real patient"), and the practice names in it are fictional examples. When you're ready, I can build out **Services, About, and Contact** as their own pages to match. Want me to do that next, or adjust anything on Home first?

## User

Okay, this is really, really good. I love the hero page. I love how it looks. I think there is some stuff that needs to happen when it comes to it. There are some improvements that we can do to other pages.

I also think the play an example call I loved. I loved the green widget on the side that says "Play the full example call." This is perfect, and the pop out is so good. I love it. It's amazing, I think, but I think it's overused. I think it's just on the third page, which is "How it Works," and I think we show it again, which is fine, but I think there could be better stuff that could be there.

I want you to do your research, and I want you to put something, a better design, for the rest of the pictures. Though the hero page is amazing and looks pretty nice, I think you can also improve the compliance banner. Other than that, I think the first snippet of the website, when you come onto the website, which shows the firm that answers your phones, that type of stuff, is really nice. I think we can also change the wording on the firm that answers your phone. I think there is a better phrase out there, but that's my two cents.

## Assistant

Great feedback. Here's my plan: (1) a stronger hero headline, (2) redesign the compliance banner to feel like real credentials, and (3) replace that second call-demo band (agreed, it's redundant) with a section that carries your core positioning. Let me grab the exact current markup.

_[tool: read_file]_

_[tool: read_file]_

Got the exact markup. Making three targeted edits: headline, compliance banner, and swapping the redundant call band for a positioning section.

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: show_html]_

Headline updated. Let me check the redesigned compliance banner and new positioning section.

_[tool: multi_screenshot]_

Both new sections look strong. Done with the three improvements.

_[tool: ready_for_verification]_

Three changes are in:

1. **Headline** → "Never send a patient to voicemail." (more concrete and emotional than "the firm that answers your phones"). If you'd rather, easy swaps: "Never miss another patient call." / "The front desk that never misses." / "Every patient call, answered." Tell me and I'll set it.

2. **Compliance banner redesigned** into a proper credentials row: a serif heading over four columns with ringed check-badges, mono labels, and a bold claim + one supporting line each (HIPAA, BAA, California CPPA, three-stage release). Reads like real credentials now, not a footer strip.

3. **Redundant call band replaced** with a "Why an agency, not an app" positioning section: a large serif statement (dashboard-and-wish-you-luck vs a finished, running receptionist) plus a we design it / we test it / we run it triad. The call demo now lives only in the hero, as you wanted.

When you're ready I can build **Services, About, and Contact** as matching pages, and I'm happy to push further on the verticals or pipeline sections if you want them stronger too.

