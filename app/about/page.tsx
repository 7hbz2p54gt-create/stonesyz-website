import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { wrap } from "@/components/Header";
import { LEGAL_NAME, MARKETS, PANZO_URL } from "@/components/site";

export const metadata: Metadata = {
  title: "About | Stonesyz",
  description:
    "Stonesyz is the parent company of Panzo, the operations platform for interior and fit-out firms in India, the UAE and Singapore.",
  alternates: { canonical: "/about" },
};

/*
 * Moved from thepanzo.com/about (owner 2026-10-21) and reworded for the parent
 * company. Stonesyz speaks as a team, never as a named person or with a
 * headshot (same standing rule as Panzo's TeamNote).
 */
const values = [
  {
    title: "Built for the trade, not for demos",
    body: "Every feature comes from how interior projects actually run: messy, fast-moving and relationship-driven. We started in India, and we're bringing Panzo to firms in the UAE and Singapore too.",
  },
  {
    title: "Calm over clever",
    body: "Software should reduce noise, not add to it. We choose the clear path over the flashy one, every time.",
  },
  {
    title: "Your data, your business",
    body: "Panzo is a place to run your company: structured, private and yours. We earn trust by protecting it.",
  },
  {
    title: "Progress you can feel",
    body: "We ship steadily and listen closely, so the product keeps getting better in the ways that matter to the people who use it.",
  },
];

const pillars = [
  { word: "Calm", line: "instead of chaos across a dozen chat groups." },
  { word: "Clarity", line: "instead of guessing where each project really stands." },
  { word: "Confidence", line: "in every quote, every payment, every handover." },
];

const direction = [
  {
    title: "One foundation",
    body: "Every part of Panzo shares the same data, the same people and the same permissions. Nothing is bolted on.",
  },
  {
    title: "Built to extend",
    body: "New capability plugs into the platform a firm already runs on: no second system, no migration, no re-training.",
  },
  {
    title: "Shaped by the first firms",
    body: "Founding partners have a direct line to the people building Panzo. What they need next is what gets built next.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="hero-band relative overflow-hidden">
        <div aria-hidden className="blob blob-a" />
        <div className={`${wrap} relative py-20 sm:py-28`}>
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-widest text-accent">About Stonesyz</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              We&apos;re building the operating system for interior businesses.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-700">
              {LEGAL_NAME} is the parent company of Panzo. We exist so the way interior firms run
              their business can finally match the quality of the spaces they create.
            </p>
          </Reveal>
        </div>
      </section>

      <section className={`${wrap} py-16 sm:py-20`}>
        <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-ink-700">
          <Reveal>
            <p>
              Interior businesses are some of the most demanding to run. Every project is custom,
              timelines shift, dozens of materials and vendors move at once, and the client is living
              through it in real time. Yet most of this is still managed on WhatsApp, Excel and memory.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p>
              We started Panzo because we kept meeting talented studios and fit-out teams doing
              world-class work, held back not by their craft but by the chaos behind the scenes. Missed
              follow-ups. Quote confusion. Procurement surprises. Owners who couldn&apos;t step away
              without everything slowing down.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p>
              That is our mission: to run the operations behind interior businesses, from the first
              enquiry to service, so owners and their teams spend their time on the work only they can
              do. Panzo brings the whole journey, from leads, deals and quotations to design,
              procurement, site work, finance, handover and service, into one connected platform.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className={`${wrap} py-16 sm:py-20`}>
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-widest text-accent">What we believe</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">The principles behind the product.</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80} className="h-full">
                <div className="lift h-full rounded-2xl border border-line bg-canvas p-6">
                  <h3 className="font-semibold">{v.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-700">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`${wrap} py-16 sm:py-20`}>
        <Reveal>
          <figure className="relative overflow-hidden rounded-3xl border border-line bg-surface p-8 sm:p-12">
            <div aria-hidden className="glow absolute -right-16 -top-16 h-56 w-56" />
            <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden className="relative h-9 w-9 text-accent opacity-40">
              <path d="M13 8H6v9h5c0 3-1 5-4 6l1 3c5-1 8-5 8-11V8Zm13 0h-7v9h5c0 3-1 5-4 6l1 3c5-1 8-5 8-11V8Z" />
            </svg>
            <blockquote className="relative mt-6 max-w-3xl text-xl font-medium leading-relaxed sm:text-2xl">
              We kept meeting interior businesses held together by memory, WhatsApp threads and a dozen
              Excel files: world-class work, running on chaos. So we started building the system we
              wished they had: one place where an enquiry becomes a project, and a project becomes a
              client for life.
            </blockquote>
            <p className="relative mt-5 max-w-2xl leading-relaxed text-ink-700">
              We&apos;re a small team, shipping every week, working closely with the interior studios and
              fit-out firms we build for.
            </p>
            <figcaption className="relative mt-8 border-t border-line pt-6">
              <span className="block text-sm font-semibold">The Stonesyz Team</span>
              <span className="block text-sm text-muted">Building calmer interior businesses</span>
            </figcaption>
          </figure>
        </Reveal>
      </section>

      <section className="relative overflow-hidden border-y border-line">
        <div aria-hidden className="blob blob-b" />
        <div className={`${wrap} relative py-20 text-center sm:py-28`}>
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Interior founders didn&apos;t start their studios to chase payments and dig through folders.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-700">
              They started them to create spaces people fall in love with. Somewhere between the site
              visits, the revisions and the endless follow-ups, the business started running them.
              Panzo hands that control back.
            </p>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.word} delay={150 + i * 100}>
                <div className="lift h-full rounded-2xl border border-line bg-surface p-6">
                  <p className="text-2xl font-semibold tracking-tight text-accent">{p.word}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700">{p.line}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`${wrap} py-16 sm:py-20`}>
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Where we&apos;re going</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">We&apos;re starting with interiors.</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-700">
            Our vision is simple: every interior and fit-out firm, starting in {MARKETS.join(", ").replace(/, (?=[^,]*$)/, " and ")},
            runs on one calm system. Panzo is built as a platform, not a one-off tool, to grow with the
            firms that adopt it.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {direction.map((d, i) => (
            <Reveal key={d.title} delay={i * 90} className="h-full">
              <div className="lift h-full rounded-2xl border border-line bg-surface p-6">
                <h3 className="font-semibold">{d.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-700">{d.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <a href={PANZO_URL} className="mt-10 inline-block rounded-lg bg-accent px-5 py-3 text-sm font-medium text-accent-on transition-colors hover:bg-accent-hover">
            See Panzo
          </a>
        </Reveal>
      </section>
    </>
  );
}
