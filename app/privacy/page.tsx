import type { Metadata } from "next";
import { wrap } from "@/components/Header";
import { BRAND, CONTACT_EMAIL, LEGAL_NAME, PANZO_URL } from "@/components/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${BRAND}`,
  description: `How ${BRAND} handles the personal information you share through stonesyz.com.`,
  alternates: { canonical: "/privacy" },
};

/*
 * Describes what stonesyz.com actually does today (2026-10-22): one contact
 * form, sent by email through iCloud Mail, no database, no analytics, no
 * tracking cookies, hosted on Vercel. The 12-month deletion of enquiries
 * mirrors Panzo's privacy policy. Still to add when the owner provides them:
 * registered address and a named grievance officer (India DPDP Act 2023).
 * Panzo the product has its own policy at thepanzo.com/privacy.
 */
const UPDATED = "22 October 2026";

const mail = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;

export default function PrivacyPage() {
  return (
    <>
      <section className={`${wrap} pb-10 pt-14 sm:pt-20`}>
        <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Legal
        </span>
        <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl">Privacy Policy</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-700">
          What we collect through this website, why, and what we will never do with it.
        </p>
        <p className="mt-4 text-sm text-muted">Last updated {UPDATED}</p>
      </section>

      <article className={`${wrap} legal pb-24`}>
        <section>
          <h2>The short version</h2>
          <p>
            This website collects only what you choose to send us through the contact form, and we use it only to
            reply to you. We do not sell it, we do not use it for advertising, and this site has no analytics or
            tracking cookies.
          </p>
        </section>

        <section>
          <h2>Who we are</h2>
          <p>
            stonesyz.com is run by {LEGAL_NAME} (&ldquo;{BRAND}&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), the
            company behind Panzo. This policy covers this website only. If you use Panzo, the{" "}
            <a href={`${PANZO_URL}/privacy`}>Panzo privacy policy</a> explains how the product handles your data.
          </p>
          <p>Questions about this policy: {mail}.</p>
        </section>

        <section>
          <h2>What we collect</h2>
          <h3>When you use the contact form</h3>
          <p>
            Your name, email address, company (if you add it) and your message, plus your agreement that we may use
            these details to reply to you. The form is sent to our inbox ({CONTACT_EMAIL}) by email. It is not saved
            in a database on this website.
          </p>
          <p>
            To stop spam, the server briefly counts how many messages come from each internet (IP) address. That
            count is kept only in memory for a few minutes and is not saved by us.
          </p>
          <h3>When you simply visit</h3>
          <p>
            Like any website, our hosting provider records basic technical details of each request (such as IP
            address, browser type and the page requested) to run the site and keep it secure. These logs are kept for
            a short time by the provider. We do not use them to identify or track visitors.
          </p>
        </section>

        <section>
          <h2>How we use it</h2>
          <ul>
            <li>To read and reply to your message.</li>
            <li>To keep a record of the conversation while we are in touch with you.</li>
            <li>To keep the website running and protect it from abuse.</li>
          </ul>
          <p>We never sell your information, and we never use it for advertising.</p>
        </section>

        <section>
          <h2>Who else can see it</h2>
          <p>
            We use established service providers to run this website and our email: cloud hosting (Vercel) and email
            (Apple iCloud Mail). They may process your information only to provide those services to us. We may also
            disclose information where the law requires it.
          </p>
        </section>

        <section>
          <h2>How long we keep it</h2>
          <p>
            If you contact us and we do not go on to work together, we delete your message and details 12 months
            after you sent them. You can ask us to delete them sooner at any time by writing to {mail}.
          </p>
        </section>

        <section>
          <h2>Your rights</h2>
          <p>
            You can ask for a copy of the personal information we hold about you, ask us to correct it or delete it,
            or withdraw your consent. Write to {mail} and we will respond within a reasonable time.
          </p>
        </section>

        <section>
          <h2>If you are outside India</h2>
          <p>
            {BRAND} is based in India, and our service providers may process data in other countries. We work with
            businesses in the United Arab Emirates and Singapore, and we honour requests to access, correct or delete
            personal information wherever you are based.
          </p>
        </section>

        <section>
          <h2>Cookies</h2>
          <p>
            This website does not use cookies for tracking or advertising. If we add analytics later, we will update
            this policy and ask for consent where it is required.
          </p>
        </section>

        <section>
          <h2>Changes</h2>
          <p>If we change this policy in a way that matters, we will update the date at the top of this page.</p>
        </section>
      </article>
    </>
  );
}
