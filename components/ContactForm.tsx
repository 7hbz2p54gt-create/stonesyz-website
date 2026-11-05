"use client";

import { useActionState } from "react";
import { sendContact, type ContactState } from "@/app/actions/contact";
import { CONTACT_MAX } from "@/lib/contactInput";
import Link from "next/link";

const field =
  "mt-1.5 w-full rounded-xl border border-line-2 bg-canvas px-3.5 py-2.5 text-ink-900 placeholder:text-ink-500 transition-colors focus:border-ink-900 focus:outline-none focus:ring-1 focus:ring-ink-900";

export default function ContactForm() {
  const [state, action, pending] = useActionState<ContactState, FormData>(sendContact, { status: "idle" });

  if (state.status === "ok") {
    return (
      <div role="status" className="rounded-3xl bg-canvas p-8">
        <p className="text-2xl font-normal tracking-[-0.02em]">Thank you, your message is on its way.</p>
        <p className="mt-2 text-ink-700">We&apos;ll reply to the email address you gave us.</p>
      </div>
    );
  }

  return (
    <form action={action} className="grid gap-5 rounded-3xl bg-canvas p-5 sm:grid-cols-2 sm:p-8">
      <label className="text-sm font-medium">
        Name
        <input name="name" required maxLength={CONTACT_MAX.name} autoComplete="name" className={field} />
      </label>
      <label className="text-sm font-medium">
        Email
        <input name="email" type="email" required maxLength={CONTACT_MAX.email} autoComplete="email" className={field} />
      </label>
      <label className="text-sm font-medium sm:col-span-2">
        Company <span className="font-normal text-ink-500">(optional)</span>
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
        <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 accent-[var(--color-ink-900)]" />
        <span>
          I agree that StoneSyz may use these details to reply to me. See our{" "}
          <Link href="/privacy" className="text-ink-900 underline underline-offset-4">privacy policy</Link>.
        </span>
      </label>
      {state.status === "error" && (
        <p role="alert" className="text-sm font-medium text-accent sm:col-span-2">{state.message}</p>
      )}
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={pending}
          className="btn px-7 py-3.5 text-[1.0625rem] disabled:opacity-60"
        >
          {pending ? "Sending..." : "Send message"}
        </button>
      </div>
    </form>
  );
}
