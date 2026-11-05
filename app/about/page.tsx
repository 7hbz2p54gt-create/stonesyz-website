import type { Metadata } from "next";
import Image from "next/image";
import { wrap } from "@/components/Header";
import Reveal from "@/components/Reveal";
import { AMBITION, BRAND, LEGAL_NAME, LOGO_STORY, MARKETS, MISSION, NAME_STORY, PANZO_URL, TAGLINE, VALUES, VISION } from "@/components/site";

export const metadata: Metadata = {
  title: `About ${BRAND} | The Company Behind Panzo`,
  description: `The story behind ${BRAND}: strong foundations and smart systems. A technology company, and the company behind Panzo.`,
  alternates: { canonical: "/about" },
};

/*
 * Brand story from the owner (2026-10-22). StoneSyz speaks as a team, never as a
 * named person or with a headshot (same standing rule as Panzo's TeamNote).
 */
function Label({ children }: { children: React.ReactNode }) {
  return <p className="mb-5 text-[1.0625rem] font-medium text-ink-500">{children}</p>;
}

export default function AboutPage() {
  return (
    <>
      <section className={`${wrap} pb-16 pt-8 md:pb-24 md:pt-16`}>
        <div>
          <Label>About {BRAND}</Label>
          <h1 className="big big-1 max-w-[62rem]">
            Every great idea needs a strong foundation. <span className="m">Every growing business needs systems that work.</span>
          </h1>
        </div>
      </section>

      <section className={wrap}>
        <Reveal>
          <Label>The story behind the name</Label>
        </Reveal>
        <div className="grid gap-[18px] md:grid-cols-2 md:gap-5">
          {NAME_STORY.map((n, i) => (
            <Reveal key={n.part} delay={i * 80} className="h-full">
              <div className="h-full rounded-[22px] bg-surface p-7 md:rounded-[28px] md:p-10">
                <h2 className="big big-3">{n.part}</h2>
                <p className="mt-2 text-[1.0625rem] font-medium text-ink-500">{n.meaning}</p>
                <p className="mt-5 text-lg leading-[1.45] text-ink-700">{n.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-8 max-w-[46rem] text-lg leading-[1.5] text-ink-700 md:mt-12">
            Together, {BRAND} means technology built on strong foundations: systems that are simple to use, scalable by
            design and built to last. Technology shouldn&apos;t make life more complicated. It should remove complexity,
            connect people and processes, and help businesses work with clarity and confidence.
          </p>
          <p className="mt-5 max-w-[46rem] text-lg font-medium leading-[1.5]">
            {BRAND} is the company behind Panzo and the products we will build next. Our ambition is simple:{" "}
            {AMBITION.charAt(0).toLowerCase() + AMBITION.slice(1)}
          </p>
        </Reveal>
      </section>

      <section className={`${wrap} grid gap-10 py-[4.5rem] md:grid-cols-2 md:gap-16 md:py-32`}>
        <Reveal>
          <Label>Our vision</Label>
          <h2 className="big big-3">{VISION}</h2>
        </Reveal>
        <Reveal delay={100}>
          <Label>Our mission</Label>
          <h2 className="big big-3">{MISSION}</h2>
        </Reveal>
      </section>

      <section className={`${wrap} grid items-center gap-10 md:grid-cols-2 md:gap-16`}>
        <Reveal>
          <Image src="/img/stack.png" alt="Three stones stacked: red at the bottom, orange in the middle, yellow on top" width={2000} height={1720} sizes="(min-width: 768px) 45vw, 100vw" className="w-full" />
        </Reveal>
        <div>
          <Reveal>
            <Label>Our mark</Label>
            <h2 className="big big-3">Three stones in balance.</h2>
            <p className="mt-5 text-lg leading-[1.45] text-ink-700">
              Each stone rests on the one below, because growth only lasts when it is built on strong foundations and
              smart systems.
            </p>
          </Reveal>
          <ol className="mt-6 border-t border-line">
            {[...LOGO_STORY].reverse().map((l) => (
              <li key={l.name} className="border-b border-line py-4 text-[1.0625rem] leading-[1.35] text-ink-700">
                <b className="mb-0.5 block font-medium text-ink-900">{l.name}</b>
                {l.body}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`${wrap} py-[4.5rem] md:py-32`}>
        <Reveal>
          <Label>What we hold to</Label>
          <h2 className="big big-2">Five values.</h2>
        </Reveal>
        <ul className="mt-8 border-t border-line md:mt-14">
          {VALUES.map((v) => (
            <li key={v.title} className="grid gap-1.5 border-b border-line py-[22px] md:grid-cols-[1fr_1.25fr] md:items-baseline md:gap-10 md:py-[30px]">
              <h3 className="text-[1.6875rem] font-light tracking-[-0.022em] md:text-[2.125rem]">{v.title}</h3>
              <p className="text-lg leading-[1.45] text-ink-700">{v.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className={wrap}>
        <Reveal>
          <figure className="max-w-[62rem]">
            <blockquote className="big big-3">
              We started with Panzo because we kept meeting interior businesses held together by memory, WhatsApp
              threads and a dozen Excel files. <span className="m">The same problem runs through businesses of every kind, and that is what we are here to fix.</span>
            </blockquote>
            <figcaption className="mt-7 text-[1.0625rem] text-ink-500">
              <b className="font-medium text-ink-900">The {BRAND} Team</b> &nbsp;{TAGLINE}
            </figcaption>
          </figure>
        </Reveal>
      </section>

      <section className={`${wrap} py-[4.5rem] md:py-32`}>
        <Reveal>
          <div className="rounded-3xl bg-surface p-7 md:rounded-[32px] md:p-16">
            <Label>Where we start</Label>
            <h2 className="big big-3 max-w-[50rem]">
              {MARKETS.join(", ").replace(/, (?=[^,]*$)/, " and ")}. <span className="m">Different businesses, one way of working.</span>
            </h2>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href={PANZO_URL} className="btn px-6 py-3.5 text-[1.0625rem]">Visit Panzo</a>
              <span className="text-[0.9375rem] text-ink-500">{LEGAL_NAME}</span>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
