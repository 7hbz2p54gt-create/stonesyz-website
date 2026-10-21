import Link from "next/link";

import { CONTACT_EMAIL, LEGAL_NAME, MARKETS, PANZO_URL, PRODUCTS } from "@/components/site";

const wrap = "mx-auto w-full max-w-5xl px-4 sm:px-6";

export default function Home() {
  const year = new Date().getFullYear();
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-canvas focus:px-3 focus:py-2">
        Skip to content
      </a>

      <header className="border-b border-line">
        <div className={`${wrap} flex h-16 items-center justify-between`}>
          <Link href="/" className="text-lg font-semibold tracking-tight">
            Stonesyz<span className="text-accent">.</span>
          </Link>
          <nav aria-label="Main" className="flex gap-5 text-sm text-ink-700">
            <a href="#about" className="hover:text-ink-900">About</a>
            <a href="#products" className="hover:text-ink-900">Products</a>
            <a href="#contact" className="hover:text-ink-900">Contact</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className={`${wrap} py-20 sm:py-28`}>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">The company behind Panzo</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            We build software for the businesses that build interiors.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-700">
            {LEGAL_NAME} makes Panzo, one system for interior and fit-out companies to run sales,
            projects, site work and their people, from the first enquiry to the final handover.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={PANZO_URL} className="rounded-lg bg-accent px-5 py-3 text-sm font-medium text-accent-on hover:bg-accent-hover">
              Visit Panzo
            </a>
            <a href="#contact" className="rounded-lg border border-line px-5 py-3 text-sm font-medium hover:bg-surface">
              Get in touch
            </a>
          </div>
        </section>

        <section id="about" className="border-y border-line bg-surface">
          <div className={`${wrap} grid gap-10 py-16 sm:grid-cols-2`}>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">About Stonesyz</h2>
              <p className="mt-4 leading-relaxed text-ink-700">
                Interior businesses juggle designers, site engineers, crews, vendors and clients,
                usually across spreadsheets and chat groups. Stonesyz exists to give them one place
                to work, built around how projects really run on site.
              </p>
              <p className="mt-4 leading-relaxed text-ink-700">
                Panzo is our product brand. Every Panzo product is built and operated by {LEGAL_NAME}.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium uppercase tracking-widest text-muted">Where we work</h3>
              <ul className="mt-4 space-y-3">
                {MARKETS.map((m) => (
                  <li key={m} className="flex items-center gap-3 text-lg">
                    <span aria-hidden className="h-2 w-2 rounded-full bg-accent" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="products" className={`${wrap} py-16 sm:py-20`}>
          <h2 className="text-2xl font-semibold tracking-tight">Panzo products</h2>
          <p className="mt-3 max-w-2xl text-ink-700">One login, one set of records, shared by the office, the site and HR.</p>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {PRODUCTS.map((p) => (
              <li key={p.name} className="flex flex-col rounded-xl border border-line p-6">
                <span className="text-xs font-medium uppercase tracking-widest text-accent">{p.tag}</span>
                <h3 className="mt-2 text-xl font-semibold">{p.name}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-ink-700">{p.body}</p>
                <a href={p.href} className="mt-6 text-sm font-medium text-accent hover:text-accent-hover">
                  Learn more<span className="sr-only"> about {p.name}</span> &rarr;
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="border-t border-line bg-surface">
          <div className={`${wrap} py-16 sm:py-20`}>
            <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
            <p className="mt-3 max-w-2xl text-ink-700">
              For partnerships, press or anything about the company, write to us. For a Panzo demo,
              use the form on <a href={`${PANZO_URL}/contact`} className="text-accent underline-offset-4 hover:underline">thepanzo.com</a>.
            </p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="mt-6 inline-block text-xl font-medium text-accent underline-offset-4 hover:underline">
              {CONTACT_EMAIL}
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className={`${wrap} flex flex-col gap-2 py-8 text-sm text-muted sm:flex-row sm:justify-between`}>
          <p>&copy; {year} {LEGAL_NAME}. All rights reserved.</p>
          <p>
            Panzo is a brand of {LEGAL_NAME}. <a href={`${PANZO_URL}/privacy`} className="hover:text-ink-900">Privacy</a> ·{" "}
            <a href={`${PANZO_URL}/terms`} className="hover:text-ink-900">Terms</a>
          </p>
        </div>
      </footer>
    </>
  );
}
