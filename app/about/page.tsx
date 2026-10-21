import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { wrap } from "@/components/Header";
import { StonesMark } from "@/components/Logo";
import Marquee from "@/components/Marquee";
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

const PILLAR_STYLES = ["bg-accent text-accent-on", "bg-ember text-ink-900", "bg-sun text-ink-900"];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden className="sunrise -left-40 -top-40 h-[34rem] w-[34rem]" />
        <div className={`${wrap} relative grid items-end gap-10 pb-16 pt-14 sm:pt-20 lg:grid-cols-[1.5fr_1fr]`}>
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                About Stonesyz
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-5xl font-bold leading-[0.98] tracking-tight sm:text-7xl">
                The operating system for interior <span className="text-fire">businesses</span><span className="-ml-[0.06em] text-sun">.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-700">
                {LEGAL_NAME} is the parent company of Panzo. We exist so the way interior firms run their
                business can finally match the quality of the spaces they create.
              </p>
            </Reveal>
          </div>
          <Reveal delay={200} className="hidden justify-center lg:flex">
            <StonesMark animated className="h-64 w-64 drop-shadow-xl" />
          </Reveal>
        </div>
      </section>

      <section className={`${wrap} grid gap-10 py-16 sm:py-24 lg:grid-cols-[1fr_2fr]`}>
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Our story</p>
          <p className="mt-4 font-display text-3xl font-bold leading-tight">Why we started.</p>
        </Reveal>
        <div className="space-y-6 text-lg leading-relaxed text-ink-700">
          <Reveal>
            <p>
              Interior businesses are some of the most demanding to run. Every project is custom, timelines
              shift, dozens of materials and vendors move at once, and the client is living through it in real
              time. Yet most of this is still managed on WhatsApp, Excel and memory.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p>
              We started Panzo because we kept meeting talented studios and fit-out teams doing world-class
              work, held back not by their craft but by the chaos behind the scenes. Missed follow-ups. Quote
              confusion. Procurement surprises. Owners who couldn&apos;t step away without everything slowing down.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p className="border-l-4 border-sun pl-5 font-medium text-ink-900">
              Our mission: run the operations behind interior businesses, from the first enquiry to service, so
              owners and their teams spend their time on the work only they can do.
            </p>
          </Reveal>
        </div>
      </section>

      <Marquee />

      <section className="bg-surface">
        <div className={`${wrap} py-20 sm:py-28`}>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">What we believe</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">Four principles.</h2>
          </Reveal>
          <ol className="mt-12 divide-y-2 divide-line border-y-2 border-line">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 60} className="grid gap-4 py-8 sm:grid-cols-[6rem_1fr_1.4fr] sm:items-baseline">
                <span className="font-display text-5xl font-bold outline-num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-2xl font-bold">{v.title}</h3>
                <p className="leading-relaxed text-ink-700">{v.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className={`${wrap} py-20 sm:py-28`}>
        <Reveal>
          <h2 className="max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Founders didn&apos;t start their studios to chase payments and dig through folders.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-700">
            They started them to create spaces people fall in love with. Somewhere between the site visits, the
            revisions and the endless follow-ups, the business started running them. We hand that control back.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.word} delay={i * 100} className="h-full">
              <div className={`btn h-full rounded-[2rem] p-8 ${PILLAR_STYLES[i]}`}>
                <p className="font-display text-4xl font-bold tracking-tight">{p.word}</p>
                <p className="mt-3 leading-relaxed opacity-90">{p.line}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-maroon-2 text-on-maroon">
        <div className={`${wrap} py-20 sm:py-28`}>
          <Reveal>
            <figure className="max-w-4xl">
              <blockquote className="font-display text-3xl font-bold leading-snug sm:text-4xl">
                &ldquo;We kept meeting interior businesses held together by memory, WhatsApp threads and a dozen
                Excel files. So we started building the system we wished they had: one place where an enquiry
                becomes a project, and a project becomes a <span className="text-sun">client for life.</span>&rdquo;
              </blockquote>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-maroon/80">
                We&apos;re a small team, shipping every week, working closely with the interior studios and
                fit-out firms we build for.
              </p>
              <figcaption className="mt-8 flex items-center gap-3">
                <StonesMark className="h-10 w-10" />
                <span>
                  <span className="block font-semibold">The Stonesyz Team</span>
                  <span className="block text-sm text-on-maroon/70">Building calmer interior businesses</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className={`${wrap} py-20 sm:py-28`}>
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Where we&apos;re going</p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">We&apos;re starting with interiors.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-700">
            Our vision: every interior and fit-out firm, starting in {MARKETS.join(", ").replace(/, (?=[^,]*$)/, " and ")},
            runs on one calm system. Panzo is built as a platform, not a one-off tool, to grow with the firms
            that adopt it.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {direction.map((d, i) => (
            <Reveal key={d.title} delay={i * 90} className="h-full">
              <div className="h-full border-t-4 border-accent pt-5">
                <h3 className="font-display text-xl font-bold">{d.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-700">{d.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <a href={PANZO_URL} className="btn mt-12 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-on hover:bg-accent-hover">
            Visit Panzo &rarr;
          </a>
        </Reveal>
      </section>
    </>
  );
}
