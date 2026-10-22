import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { wrap } from "@/components/Header";
import { StonesMark } from "@/components/Logo";
import { Industries, VisionMission } from "@/components/Direction";
import { AMBITION, BRAND, LEGAL_NAME, LOGO_STORY, MARKETS, NAME_STORY, PANZO_URL, TAGLINE, VALUES } from "@/components/site";

export const metadata: Metadata = {
  title: `About | ${BRAND}`,
  description: `The story behind ${BRAND}: strong foundations and smart systems. The company behind Panzo and the products we will build next.`,
  alternates: { canonical: "/about" },
};

/*
 * Brand story from the owner (2026-10-22). StoneSyz speaks as a team, never as a
 * named person or with a headshot (same standing rule as Panzo's TeamNote).
 */
const STONE_FILL = { accent: "bg-accent", ember: "bg-ember", sun: "bg-sun" } as const;

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden className="sunrise -left-40 -top-40 h-[34rem] w-[34rem]" />
        <div className={`${wrap} relative grid items-end gap-10 pb-16 pt-14 sm:pt-20 lg:grid-cols-[1.5fr_1fr]`}>
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                About {BRAND}
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-5xl font-bold leading-[0.98] tracking-tight sm:text-7xl">
                Strong Foundations. <span className="text-fire">Smart Systems</span><span className="-ml-[0.06em] text-sun">.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-700">
                Every great idea needs a strong foundation. Every growing business needs systems that work.
                That is the thinking behind {BRAND}.
              </p>
            </Reveal>
          </div>
          <Reveal delay={200} className="hidden justify-center lg:flex">
            <StonesMark animated className="h-64 w-64 drop-shadow-xl" />
          </Reveal>
        </div>
      </section>

      <section className={`${wrap} py-16 sm:py-24`}>
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">The story behind the name</p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="text-accent">Stone</span> + <span className="text-ember">Syz</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {NAME_STORY.map((n, i) => (
            <Reveal key={n.part} delay={i * 100} className="h-full">
              <div className="h-full rounded-[2rem] border-2 border-line p-8 sm:p-10">
                <p className={`font-display text-5xl font-bold ${i === 0 ? "text-accent" : "text-ember"}`}>{n.part.toUpperCase()}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted">{n.meaning}</p>
                <p className="mt-5 text-lg leading-relaxed text-ink-700">{n.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={150}>
          <div className="mt-10 max-w-3xl space-y-5 text-lg leading-relaxed text-ink-700">
            <p>
              Together, {BRAND} means technology built on strong foundations: systems that are simple to use,
              scalable by design and built to last. Technology shouldn&apos;t make life more complicated. It should
              remove complexity, connect people and processes, and help businesses work with clarity and confidence.
            </p>
            <p className="border-l-4 border-sun pl-5 font-medium text-ink-900">
              {BRAND} is the company behind Panzo and the products we will build next. Our ambition is simple: {AMBITION.charAt(0).toLowerCase() + AMBITION.slice(1)}
            </p>
          </div>
        </Reveal>
      </section>

      <VisionMission />

      <section className={`${wrap} grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-[1fr_1.4fr]`}>
        <Reveal className="flex justify-center">
          <StonesMark animated className="h-60 w-60 sm:h-72 sm:w-72" />
        </Reveal>
        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Our mark</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">Three stones in balance.</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-700">
              Each stone rests on the one below, because growth only lasts when it is built on strong foundations
              and smart systems.
            </p>
          </Reveal>
          <ol className="mt-8 space-y-4">
            {[...LOGO_STORY].reverse().map((l, i) => (
              <Reveal as="li" key={l.name} delay={i * 90} className="flex items-start gap-4">
                <span aria-hidden className={`mt-1.5 h-4 w-8 shrink-0 rounded-full ${STONE_FILL[l.colour]}`} />
                <span>
                  <span className="block font-display text-xl font-bold">{l.name}</span>
                  <span className="text-ink-700">{l.body}</span>
                </span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>


      <section className="bg-surface">
        <div className={`${wrap} py-20 sm:py-28`}>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Our core values</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">What we stand for.</h2>
          </Reveal>
          <ol className="mt-12 divide-y-2 divide-line border-y-2 border-line">
            {VALUES.map((v, i) => (
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
          <figure className="max-w-4xl">
            <blockquote className="font-display text-3xl font-bold leading-snug sm:text-4xl">
              &ldquo;We started with Panzo because we kept meeting interior businesses held together by memory,
              WhatsApp threads and a dozen Excel files. The same problem runs through every business that builds,
              and that is what we are here to <span className="text-accent">fix.</span>&rdquo;
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-3">
              <StonesMark className="h-10 w-10" />
              <span>
                <span className="block font-semibold">The {BRAND} Team</span>
                <span className="block text-sm text-muted">{TAGLINE}</span>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </section>

      <section className="bg-surface">
        <div className={`${wrap} py-20 sm:py-28`}>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Where we start</p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
              The built world first.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-700">
              Infrastructure, real estate and interiors share the same problems: many teams, many vendors, money
              moving at every stage and sites far from the office. We are starting in{" "}
              {MARKETS.join(", ").replace(/, (?=[^,]*$)/, " and ")}, with Panzo already live for interiors.
            </p>
          </Reveal>
          <Industries />
          <Reveal delay={200}>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <a href={PANZO_URL} className="btn inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-on hover:bg-accent-hover">
                Visit Panzo &rarr;
              </a>
              <span className="text-sm text-muted">{LEGAL_NAME}</span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
