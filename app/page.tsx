import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { wrap } from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { CONTACT_EMAIL, LEGAL_NAME, MARKETS, PANZO_URL, PRODUCTS } from "@/components/site";

export default function Home() {
  return (
    <>
      <section className="hero-band relative overflow-hidden">
        <div aria-hidden className="blob blob-a" />
        <div aria-hidden className="blob blob-b" />
        <div className={`${wrap} relative py-20 sm:py-28`}>
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-widest text-accent">The parent company of Panzo</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              We build software for the businesses that build <span className="shimmer">interiors.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-700">
              {LEGAL_NAME} is the parent company of Panzo, one system for interior and fit-out companies
              to run sales, projects, site work and their people, from the first enquiry to the final handover.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={PANZO_URL} className="lift rounded-lg bg-accent px-5 py-3 text-sm font-medium text-accent-on hover:bg-accent-hover">
                Visit Panzo
              </a>
              <Link href="/about" className="lift rounded-lg border border-line bg-canvas px-5 py-3 text-sm font-medium hover:bg-surface">
                About Stonesyz
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className={`${wrap} grid gap-10 py-16 sm:grid-cols-2`}>
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight">Who we are</h2>
            <p className="mt-4 leading-relaxed text-ink-700">
              Interior businesses juggle designers, site engineers, crews, vendors and clients, usually
              across spreadsheets and chat groups. Stonesyz exists to give them one place to work, built
              around how projects really run on site.
            </p>
            <Link href="/about" className="mt-4 inline-block text-sm font-medium text-accent hover:text-accent-hover">
              Read our story &rarr;
            </Link>
          </Reveal>
          <Reveal delay={100}>
            <h3 className="text-sm font-medium uppercase tracking-widest text-muted">Where we work</h3>
            <ul className="mt-4 space-y-3">
              {MARKETS.map((m) => (
                <li key={m} className="flex items-center gap-3 text-lg">
                  <span aria-hidden className="pulse-dot h-2 w-2 rounded-full bg-accent" />
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section id="products" className={`${wrap} scroll-mt-16 py-16 sm:py-20`}>
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight">Panzo products</h2>
          <p className="mt-3 max-w-2xl text-ink-700">One login, one set of records, shared by the office, the site and HR.</p>
        </Reveal>
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal as="li" key={p.name} delay={i * 100} className="h-full">
              <ProductCard p={p} />
            </Reveal>
          ))}
        </ul>
      </section>

      <section id="contact" className="scroll-mt-16 border-t border-line bg-surface">
        <div className={`${wrap} grid gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_1.4fr]`}>
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
            <p className="mt-3 text-ink-700">
              For partnerships, press or anything about the company, send us a message. For a Panzo demo,
              use the form on <a href={`${PANZO_URL}/contact`} className="text-accent underline-offset-4 hover:underline">thepanzo.com</a>.
            </p>
            <p className="mt-6 text-sm text-muted">Or email</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-lg font-medium text-accent underline-offset-4 hover:underline">
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
