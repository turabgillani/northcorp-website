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
 * To wire a REAL recorded call: set `audio` to the file path (e.g.
 * "audio/dental-demo.mp3"), set `total` to the file's duration in seconds,
 * and set each line's `at` to the second it is spoken in the recording.
 * Leave `audio` empty ("") to run the scripted timer fallback (no audio).
 */
export const scripts: Record<ScenarioKey, CallScript> = {
  dental: {
    practice: "Riverside Family Dental",
    audio: "",
    total: 30,
    lines: [
      { sp: "agent", at: 0.0, text: "Thanks for calling Riverside Family Dental. How can I help you today?" },
      { sp: "caller", at: 3.4, text: "Hi, I'm a new patient and I'd like to book a cleaning." },
      { sp: "agent", at: 6.8, text: "Welcome! I can set that up. I have Thursday at 10:30 or Friday at 2:00 open." },
      { sp: "caller", at: 11.0, text: "Thursday at 10:30 works." },
      { sp: "agent", at: 13.4, text: "You're booked, Thursday at 10:30. I'll text a confirmation and new-patient forms now." },
      { sp: "system", at: 17.6, outcome: true, text: "New patient appointment booked · confirmation sent" },
      { sp: "sync", at: 18.6, text: "Written to Dentrix · Google Calendar updated · new-patient workflow triggered" },
      { sp: "caller", at: 20.6, text: "Great. Also, I've had a sharp pain in a lower molar, is that a cavity?" },
      { sp: "agent", at: 24.2, route: true, text: "I'm not able to diagnose or give medical advice. Let me connect you with the clinical team now." },
      { sp: "system", at: 28.4, text: "Routed to a human staff member" },
    ],
  },
  chiropractic: {
    practice: "Corona Spine & Wellness",
    audio: "",
    total: 30,
    lines: [
      { sp: "agent", at: 0.0, text: "Thanks for calling Corona Spine and Wellness. How can I help you today?" },
      { sp: "caller", at: 3.4, text: "I need to reschedule my Monday adjustment." },
      { sp: "agent", at: 6.4, text: "Sure, I can move it. Wednesday has 9:00 or 4:15 open, which do you prefer?" },
      { sp: "caller", at: 10.6, text: "4:15, please." },
      { sp: "agent", at: 12.6, text: "Done, moved from Monday to Wednesday at 4:15. A confirmation text is on its way." },
      { sp: "system", at: 17.0, outcome: true, text: "Appointment rescheduled · confirmation sent" },
      { sp: "sync", at: 18.0, text: "Updated in Jane · calendar synced · reminder workflow triggered" },
      { sp: "caller", at: 20.2, text: "My lower back's been going numb, should I still come in?" },
      { sp: "agent", at: 23.8, route: true, text: "That's a clinical question I can't answer. I'm connecting you to a staff member now." },
      { sp: "system", at: 28.0, text: "Routed to a human staff member" },
    ],
  },
  medical: {
    practice: "Orange County Family Medicine",
    audio: "",
    total: 30,
    lines: [
      { sp: "agent", at: 0.0, text: "Thanks for calling Orange County Family Medicine. How can I help?" },
      { sp: "caller", at: 3.2, text: "Do you take Blue Shield PPO, and what are your hours?" },
      { sp: "agent", at: 6.4, text: "Yes, we're in-network with Blue Shield PPO, and we're open 8 to 5, Monday through Friday." },
      { sp: "caller", at: 11.6, text: "Perfect, that's exactly what I needed." },
      { sp: "agent", at: 14.0, text: "Happy to help. Anything else before you go?" },
      { sp: "system", at: 17.0, outcome: true, text: "Insurance and hours confirmed · caller's questions answered" },
      { sp: "sync", at: 18.0, text: "Logged to athenahealth · call summary saved to caller record" },
      { sp: "caller", at: 20.2, text: "Actually, I've had chest tightness since this morning, is that serious?" },
      { sp: "agent", at: 23.8, route: true, text: "I can't assess symptoms. If this is an emergency please call 911, otherwise I'll connect you to our clinical team now." },
      { sp: "system", at: 28.6, text: "Routed to a human staff member" },
    ],
  },
};

export function formatElapsed(seconds: number): string {
  const t = Math.max(0, Math.floor(seconds));
  const m = Math.floor(t / 60);
  const ss = t % 60;
  return `${m < 10 ? "0" : ""}${m}:${ss < 10 ? "0" : ""}${ss}`;
}
