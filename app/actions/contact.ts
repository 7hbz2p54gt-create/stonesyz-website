"use server";

import { headers } from "next/headers";
import nodemailer from "nodemailer";
import { parseContact } from "@/lib/contactInput";
import { CONTACT_EMAIL } from "@/components/site";

export type ContactState = { status: "idle" | "ok" | "error"; message?: string };

const FAILED = `We couldn't send that. Please email ${CONTACT_EMAIL}.`;

/**
 * Best-effort throttle: 5 messages per IP per 10 minutes. It lives in memory,
 * so each server instance counts on its own and a restart clears it. Enough to
 * stop casual flooding of the inbox; this site has no database for more.
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function underLimit(ip: string | null): boolean {
  if (!ip) return true;
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) return false;
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear(); // keep memory bounded
  return true;
}

/**
 * Sends a contact-form message to the company inbox. There is no database, so
 * the email IS the record: if SMTP is not configured or fails, the visitor is
 * told plainly and given the address, never shown a false "sent".
 *
 * Env (set in the host, never in git): SMTP_USER, SMTP_PASS, and optionally
 * SMTP_HOST, SMTP_PORT (587, STARTTLS), SMTP_FROM, SMTP_TO.
 */
export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const parsed = parseContact(Object.fromEntries(formData));
  if (parsed.kind === "bot") return { status: "ok" }; // don't tip bots off
  if (parsed.kind === "invalid") return { status: "error", message: parsed.error };

  const ip = (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim() || null;
  if (!underLimit(ip)) {
    return { status: "error", message: `You've sent a few messages already. Please wait a little, or email ${CONTACT_EMAIL}.` };
  }

  // Trim: pasted secrets often carry a trailing space or newline.
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  const host = process.env.SMTP_HOST?.trim();
  if (!user || !pass || !host) {
    console.error("[contact] SMTP env vars missing, message NOT sent");
    return { status: "error", message: FAILED };
  }

  const { name, company, email, message } = parsed.value;
  try {
    const transport = nodemailer.createTransport({
      host,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      // Refuse to send (and so never put the visitor's details or the SMTP
      // password on the wire) if the STARTTLS upgrade is stripped.
      requireTLS: true,
      auth: { user, pass },
    });
    await transport.sendMail({
      from: process.env.SMTP_FROM || CONTACT_EMAIL,
      to: process.env.SMTP_TO || CONTACT_EMAIL,
      replyTo: email,
      subject: `Stonesyz contact: ${name}${company ? `, ${company}` : ""}`,
      text: [
        `Name:    ${name}`,
        `Company: ${company || "-"}`,
        `Email:   ${email}`,
        "",
        message,
        "",
        "-- sent from the contact form on stonesyz.com",
      ].join("\n"),
    });
  } catch (e) {
    console.error("[contact] send failed:", e);
    return { status: "error", message: FAILED };
  }
  return { status: "ok" };
}
