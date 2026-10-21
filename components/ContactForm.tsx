"use client";

import { useActionState } from "react";
import { sendContact, type ContactState } from "@/app/actions/contact";
import { CONTACT_MAX } from "@/lib/contactInput";
import { PANZO_URL } from "./site";

const field =
  "mt-1.5 w-full rounded-xl border-2 border-line bg-canvas px-3.5 py-2.5 text-ink-900 placeholder:text-muted transition-colors focus:border-accent focus:outline-none";

export default function ContactForm() {
  const [state, action, pending] = useActionState<ContactState, FormData>(sendContact, { status: "idle" });

  if (state.status === "ok") {
    return (
      <div role="status" className="rounded-3xl bg-canvas p-8 text-ink-900">
        <p className="font-display text-2xl font-bold">Thank you, your message is on its way.</p>
        <p className="mt-2 text-ink-700">We&apos;ll reply to the email address you gave us.</p>
      </div>
    );
  }

  return (
    <form action={action} className="grid gap-5 rounded-3xl bg-canvas p-6 text-ink-900 shadow-2xl sm:grid-cols-2 sm:p-8">
      <label className="text-sm font-medium">
        Name
        <input name="name" required maxLength={CONTACT_MAX.name} autoComplete="name" className={field} />
      </label>
      <label className="text-sm font-medium">
        Email
        <input name="email" type="email" required maxLength={CONTACT_MAX.email} autoComplete="email" className={field} />
      </label>
      <label className="text-sm font-medium sm:col-span-2">
        Company <span className="font-normal text-muted">(optional)</span>
        <input name="company" maxLength={CONTACT_MAX.company} autoComplete="organization" className={field} />
      </label>
      <label className="text-sm font-medium sm:col-span-2">
        Message
        <textarea name="message" required minLength={10} maxLength={CONTACT_MAX.message} rows={5} className={field} />
      </label>
      {/* Honeypot: hidden from people and screen readers; bots fill it in. */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <label className="flex items-start gap-3 text-sm text-ink-700 sm:col-span-2">
        <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 accent-[var(--color-accent)]" />
        <span>
          I agree that Stonesyz may use these details to reply to me. See our{" "}
          <a href={`${PANZO_URL}/privacy`} className="text-accent underline-offset-4 hover:underline">privacy policy</a>.
        </span>
      </label>
      {state.status === "error" && (
        <p role="alert" className="text-sm font-medium text-accent sm:col-span-2">{state.message}</p>
      )}
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={pending}
          className="btn rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-on hover:bg-accent-hover disabled:opacity-60"
        >
          {pending ? "Sending..." : "Send message"}
        </button>
      </div>
    </form>
  );
}
