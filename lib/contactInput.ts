/**
 * Validates a contact-form submission. Pure (no I/O) so it is unit tested.
 * The input comes off the network: never trust its shape.
 */
export const CONTACT_MAX = { name: 100, company: 120, email: 254, message: 4000 } as const;

export type ContactInput = { name: string; company: string; email: string; message: string };

export type ParsedContact =
  | { kind: "ok"; value: ContactInput }
  | { kind: "bot" }
  | { kind: "invalid"; error: string };

// Deliberately loose: one @, something on each side, a dot in the domain, no spaces.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Drops control characters (incl. CR/LF, which could break email headers) and trims. */
function clean(v: unknown, max: number, multiline = false): string {
  if (typeof v !== "string") return "";
  const stripped = multiline
    ? v.replace(/\r\n?/g, "\n").replace(/[\u0000-\u0009\u000B-\u001F\u007F]/g, "")
    : v.replace(/[\u0000-\u001F\u007F]/g, " ");
  return stripped.trim().slice(0, max);
}

export function parseContact(form: Record<string, unknown>): ParsedContact {
  // Honeypot: hidden from people, filled in by naive bots.
  if (typeof form.website === "string" && form.website.trim() !== "") return { kind: "bot" };

  const name = clean(form.name, CONTACT_MAX.name);
  const company = clean(form.company, CONTACT_MAX.company);
  const email = clean(form.email, CONTACT_MAX.email);
  const message = clean(form.message, CONTACT_MAX.message, true);

  if (!name) return { kind: "invalid", error: "Please enter your name." };
  if (!EMAIL_RE.test(email)) return { kind: "invalid", error: "Please enter a valid email address." };
  if (message.length < 10) return { kind: "invalid", error: "Please write a short message (at least 10 characters)." };
  if (form.consent !== "on" && form.consent !== true) {
    return { kind: "invalid", error: "Please agree that we may use these details to reply to you." };
  }
  return { kind: "ok", value: { name, company, email, message } };
}
