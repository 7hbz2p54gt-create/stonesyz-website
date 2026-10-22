import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { Industries, Problems, VisionMission } from "@/components/Direction";
import { wrap } from "@/components/Header";
import { StonesMark } from "@/components/Logo";
import Marquee from "@/components/Marquee";
import ProductRow from "@/components/ProductRow";
import Reveal from "@/components/Reveal";
import { BRAND, CONTACT_EMAIL, MARKETS, PANZO_URL, PRODUCTS } from "@/components/site";

function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
      <span className="font-display text-sm">({n})</span>
      <span className="h-px w-10 bg-accent" aria-hidden />
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden className="sunrise -right-40 -top-32 h-[38rem] w-[38rem]" />
        <div className={`${wrap} relative grid items-center gap-12 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.4fr_1fr]`}>
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                The company behind Panzo
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-5xl font-bold leading-[0.98] tracking-tight sm:text-7xl">
                Strong Foundations. <span className="text-fire">Smart Systems</span><span className="-ml-[0.06em] text-sun">.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-700">
                {BRAND} builds technology that removes complexity: reliable, simple systems that solve real
                problems. We are starting with the built world, and our first product, Panzo, already runs interior
                and fit-out firms from the first enquiry to the final handover.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/#ventures" className="btn rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-on hover:bg-accent-hover">
                  See what we make
                </Link>
                <Link href="/about" className="btn rounded-full border-2 border-ink-900 px-6 py-3 text-sm font-semibold hover:border-accent hover:text-accent">
                  Our story
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200} className="hidden justify-center lg:flex">
            <StonesMark animated className="h-80 w-80 drop-shadow-xl" />
          </Reveal>
        </div>
      </section>

      <Marquee />

      <VisionMission />

      <section className={`${wrap} py-20 sm:py-28`}>
        <Reveal>
          <SectionLabel n="01">The problems</SectionLabel>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            The built world still runs on chat groups and spreadsheets.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-700">
            Whether it is a highway, a housing tower or an apartment interior, the same problems repeat. These
            are the ones we are here to solve.
          </p>
        </Reveal>
        <Problems />
      </section>

      <section className="bg-surface">
        <div className={`${wrap} py-20 sm:py-28`}>
          <Reveal>
            <SectionLabel n="02">Where we work</SectionLabel>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Three industries. One way of working.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-700">
              We are starting in {MARKETS.join(", ").replace(/, (?=[^,]*$)/, " and ")}.
            </p>
          </Reveal>
          <Industries />
        </div>
      </section>

      <section id="ventures" className="scroll-mt-16">
        <div className={`${wrap} py-20 sm:py-28`}>
          <Reveal>
            <SectionLabel n="03">What we make</SectionLabel>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              We started with interiors: Panzo.
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-ink-700">
              Panzo runs interior and fit-out firms on one login and one set of records, shared by the office,
              the site and HR.{" "}
              <a href={PANZO_URL} className="font-semibold text-accent underline-offset-4 hover:underline">thepanzo.com</a>
            </p>
          </Reveal>
          <div className="mt-16 space-y-24">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.name}>
                <ProductRow p={p} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-16 bg-maroon-2 text-on-maroon">
        <div className={`${wrap} grid gap-12 py-20 sm:py-28 lg:grid-cols-[1fr_1.3fr]`}>
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-sun">
              <span className="font-display text-sm">(04)</span>
              <span className="h-px w-10 bg-sun" aria-hidden />
              Talk to us
            </p>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Let&apos;s build something <span className="text-sun">solid.</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-on-maroon/80">
              For partnerships, press or anything about the company, send us a message. For a Panzo demo,
              use the form on{" "}
              <a href={`${PANZO_URL}/contact`} className="font-semibold text-sun underline-offset-4 hover:underline">thepanzo.com</a>.
            </p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="mt-8 inline-block font-display text-2xl font-bold text-sun underline-offset-4 hover:underline">
              {CONTACT_EMAIL}
            </a>
          </Reveal>
          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
