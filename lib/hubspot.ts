// HubSpot Forms submission (Northcorp portal). Posts our own custom-designed
// form straight to HubSpot's public v3 submission endpoint from the browser,
// so the site stays fully static and the form keeps our exact design.
//
// These IDs are public (they ship in any HubSpot embed) — not secrets.
const PORTAL_ID = "246670378";
const FORM_GUID = "6cdf087a-139a-40b1-8979-11c2b5521b9e";
const ENDPOINT = `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_GUID}`;

export interface BookingSubmission {
  name: string;
  practice: string;
  email: string;
  phone: string;
  type: string;
  message: string;
}

/**
 * Normalize a US phone number to E.164 (+1XXXXXXXXXX) so HubSpot renders it as
 * click-to-call. Already-international numbers (leading +) are kept; anything
 * that doesn't look like a US number is passed through untouched.
 */
function normalizePhone(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) return "";
  if (trimmed.startsWith("+")) return "+" + trimmed.slice(1).replace(/\D/g, "");
  const digits = trimmed.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("1")) return "+" + digits;
  if (digits.length === 10) return "+1" + digits;
  return trimmed;
}

/**
 * Submits the booking form to HubSpot. Resolves on success; throws on failure
 * so the caller can show an error state. Field names map to the form's HubSpot
 * properties (firstname/lastname/email/company/phone/practice_type/message).
 */
export async function submitBooking(data: BookingSubmission): Promise<void> {
  const parts = data.name.trim().split(/\s+/);
  const firstname = parts[0] ?? "";
  const lastname = parts.slice(1).join(" ");

  const fields: { name: string; value: string }[] = [
    { name: "email", value: data.email.trim() },
  ];
  if (firstname) fields.push({ name: "firstname", value: firstname });
  if (lastname) fields.push({ name: "lastname", value: lastname });
  if (data.practice.trim()) fields.push({ name: "company", value: data.practice.trim() });
  if (data.phone.trim()) fields.push({ name: "phone", value: normalizePhone(data.phone) });
  if (data.type) fields.push({ name: "practice_type", value: data.type });
  if (data.message.trim()) fields.push({ name: "message", value: data.message.trim() });

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fields,
      context: {
        pageUri: typeof window !== "undefined" ? window.location.href : "",
        pageName: "Northcorp AI — Book a consultation",
      },
    }),
  });

  if (!res.ok) {
    // Surface HubSpot's detail to the console for debugging, but keep the
    // user-facing message friendly (handled by the caller).
    let detail = `HubSpot submission failed (${res.status})`;
    try {
      const body = await res.json();
      detail = body?.errors?.[0]?.message || body?.message || detail;
    } catch {
      // ignore parse errors
    }
    console.error("[booking]", detail);
    throw new Error(detail);
  }
}
