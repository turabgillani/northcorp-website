export type ScenarioKey = "dental" | "chiropractic" | "medical";

export type LineSpeaker = "agent" | "caller" | "system" | "sync";

export interface ScriptLine {
  sp: LineSpeaker;
  at: number;
  text: string;
  outcome?: boolean;
  route?: boolean;
}

export interface CallScript {
  practice: string;
  audio: string;
  total: number;
  lines: ScriptLine[];
}

export interface Vertical {
  key: ScenarioKey;
  num: string;
  name: string;
  desc: string;
}

export const verticals: Vertical[] = [
  {
    key: "dental",
    num: "01",
    name: "Dental",
    desc: "Cleanings, new-patient intake, insurance questions, and rescheduling, answered on the first ring, day or night.",
  },
  {
    key: "chiropractic",
    num: "02",
    name: "Chiropractic",
    desc: "Adjustment bookings, plan-of-care questions, and reschedules handled, with anything clinical passed straight to your team.",
  },
  {
    key: "medical",
    num: "03",
    name: "Medical",
    desc: "Hours, location, insurance verification, and scheduling, with urgent or clinical calls routed to a person.",
  },
];

/**
 * Real demo recordings generated in the Northcorp agent voice. `audio` is the
 * public path, `total` is the file's duration in seconds, and each line's `at`
 * is when it is spoken. The `system` / `sync` lines are on-screen status chips,
 * not voiced, timed to appear during the agent's confirmation.
 */
export const scripts: Record<ScenarioKey, CallScript> = {
  dental: {
    practice: "Riverside Family Dental",
    audio: "/calls/dental.mp3",
    total: 46.8,
    lines: [
      { sp: "agent", at: 0.0, text: "Thanks for calling Riverside Family Dental. How can I help you today?" },
      { sp: "caller", at: 3.9, text: "Hi, I'm a new patient and I'd like to book a cleaning." },
      { sp: "agent", at: 8.4, text: "I'd be happy to set that up. Can I get your first and last name?" },
      { sp: "caller", at: 13.6, text: "Sure, it's Daniel Alvarez." },
      { sp: "agent", at: 15.2, text: "Thanks, Daniel. And is the number you're calling from the best one for a text confirmation?" },
      { sp: "caller", at: 20.7, text: "Yes, that's my cell." },
      { sp: "agent", at: 22.3, text: "Perfect. For a new-patient cleaning I have Thursday at 10:30 or Friday at 2:00." },
      { sp: "caller", at: 27.1, text: "Thursday at 10:30 works." },
      { sp: "agent", at: 28.4, text: "You're booked for Thursday at 10:30. I'll text your confirmation and new-patient forms to this number now." },
      { sp: "system", at: 32.6, outcome: true, text: "New patient appointment booked · confirmation sent" },
      { sp: "sync", at: 33.0, text: "Written to Dentrix · Google Calendar updated · new-patient forms sent" },
      { sp: "caller", at: 34.9, text: "Great. Also, I've had a sharp pain in a lower molar, is that a cavity?" },
      { sp: "agent", at: 40.0, route: true, text: "I'm not able to diagnose or give medical advice, but I'll connect you with the clinical team right now." },
      { sp: "system", at: 44.4, text: "Routed to a human staff member" },
    ],
  },
  chiropractic: {
    practice: "Corona Spine & Wellness",
    audio: "/calls/chiropractic.mp3",
    total: 37.0,
    lines: [
      { sp: "agent", at: 0.0, text: "Thanks for calling Corona Spine and Wellness. How can I help you today?" },
      { sp: "caller", at: 4.3, text: "I need to reschedule my adjustment this Monday." },
      { sp: "agent", at: 6.9, text: "No problem. It looks like you're calling from the number on the appointment, so I've pulled it up, Monday at 3:00 with Dr. Reyes." },
      { sp: "caller", at: 15.4, text: "That's the one." },
      { sp: "agent", at: 16.7, text: "Wednesday has 9:00 or 4:15 open, which works better?" },
      { sp: "caller", at: 19.7, text: "4:15, please." },
      { sp: "agent", at: 20.3, text: "Done, moved from Monday to Wednesday at 4:15. A confirmation text is on its way to this number." },
      { sp: "system", at: 24.1, outcome: true, text: "Appointment rescheduled · confirmation sent" },
      { sp: "sync", at: 24.5, text: "Updated in Jane · calendar synced · reminder set" },
      { sp: "caller", at: 26.2, text: "My lower back's been going numb, should I still come in?" },
      { sp: "agent", at: 30.1, route: true, text: "That's a clinical question I'm not able to answer, so I'll connect you with a staff member now." },
      { sp: "system", at: 34.6, text: "Routed to a human staff member" },
    ],
  },
  medical: {
    practice: "Orange County Family Medicine",
    audio: "/calls/medical.mp3",
    total: 45.2,
    lines: [
      { sp: "agent", at: 0.0, text: "Thanks for calling Orange County Family Medicine. How can I help you today?" },
      { sp: "caller", at: 4.2, text: "I'm looking to establish care as a new patient. Do you take Blue Shield PPO?" },
      { sp: "agent", at: 9.4, text: "We do, we're in-network with Blue Shield PPO. I can get you set up. Can I get your first and last name?" },
      { sp: "caller", at: 17.1, text: "It's Priya Nair." },
      { sp: "agent", at: 18.4, text: "Thanks, Priya. For a new-patient visit I have next Tuesday at 9:15 or Thursday at 1:30." },
      { sp: "caller", at: 23.9, text: "Tuesday at 9:15 works." },
      { sp: "agent", at: 25.2, text: "You're set for Tuesday at 9:15. I'll text a confirmation and intake forms to this number." },
      { sp: "system", at: 28.9, outcome: true, text: "New patient scheduled · confirmation sent" },
      { sp: "sync", at: 29.3, text: "Logged to athenahealth · intake forms sent · insurance on file" },
      { sp: "caller", at: 31.0, text: "Thank you. Actually, I've had chest tightness since this morning, is that serious?" },
      { sp: "agent", at: 35.5, route: true, text: "I'm not able to assess symptoms. If this feels like an emergency please hang up and call 911, otherwise I'll connect you with our clinical team right now." },
      { sp: "system", at: 41.8, text: "Routed to a human staff member" },
    ],
  },
};

export function formatElapsed(seconds: number): string {
  const t = Math.max(0, Math.floor(seconds));
  const m = Math.floor(t / 60);
  const ss = t % 60;
  return `${m < 10 ? "0" : ""}${m}:${ss < 10 ? "0" : ""}${ss}`;
}
