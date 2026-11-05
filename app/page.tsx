import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { wrap } from "@/components/Header";
import Reveal from "@/components/Reveal";
import { CONTACT_EMAIL, LOGO_STORY, PANZO_FOR, PANZO_URL, VALUES, VISION } from "@/components/site";

function Label({ children }: { children: React.ReactNode }) {
  return <p className="mb-5 text-[1.0625rem] font-medium text-ink-500">{children}</p>;
}

// The vision is one sentence; the muted half starts at "how businesses".
const VISION_SPLIT = VISION.indexOf("how businesses");

export default function Home() {
  return (
    <>
      <section className={`${wrap} grid items-center gap-8 pb-10 pt-5 lg:grid-cols-[1.3fr_1fr] lg:gap-6 lg:pb-20 lg:pt-10`}>
        <div>
          <h1 className="big big-1">
            Strong foundations. Smart systems. <span className="m">Simple technology for real business problems.</span>
          </h1>
          <Link href="/#what-we-make" className="btn mt-7 px-6 py-3.5 text-[1.0625rem] lg:mt-10">
            See what we make
          </Link>
        </div>
        <div>
          <Image
            src="/img/tech-screens.jpg"
            alt="A developer working across several screens"
            width={1800} height={1202}
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="h-[300px] w-full rounded-[20px] object-cover object-[62%_50%] md:rounded-[28px] lg:h-[560px]"
          />
        </div>
      </section>

      <div className={wrap}>
        <div className="flex flex-col gap-3 border-t border-line py-6 text-[1.0625rem] text-ink-500 md:flex-row md:gap-[4.5rem]">
          <span><b className="mr-2 font-medium text-ink-900">A technology company</b>Solving different problems for different businesses</span>
          <span><b className="mr-2 font-medium text-ink-900">India, UAE, Singapore</b>Where we are starting</span>
        </div>
      </div>

      <section className={`${wrap} py-[4.5rem] md:py-32`}>
        <Reveal>
          <Label>What we want</Label>
          <h2 className="big big-2 max-w-[66rem]">
            {VISION.slice(0, VISION_SPLIT).trimEnd()} <span className="m">{VISION.slice(VISION_SPLIT)}</span>
          </h2>
        </Reveal>
      </section>

      <section className={wrap}>
        <Reveal>
          <Image
            src="/img/team-laptop.jpg"
            alt="A team working together around a laptop"
            width={2000} height={1506}
            sizes="100vw"
            className="h-[300px] w-full rounded-[20px] object-cover object-[50%_62%] md:h-[640px] md:rounded-[28px]"
          />
          <div className="mt-7 grid gap-3 md:mt-10 md:grid-cols-2 md:gap-16">
            <h3 className="text-[1.6875rem] font-normal leading-[1.15] tracking-[-0.02em] md:text-[2.125rem]">One real problem at a time.</h3>
            <p className="text-lg leading-[1.45] text-ink-700">
              Every business has work that still runs on chat groups, spreadsheets and memory. We find those problems
              and build reliable, simple systems that fix them.
            </p>
          </div>
        </Reveal>
      </section>

      <section id="what-we-make" className={`${wrap} scroll-mt-24 pt-[4.5rem] md:pt-32`}>
        <Reveal>
          <Label>What we make</Label>
          <h2 className="big big-2 max-w-[66rem]">
            Panzo. <span className="m">Our first product, shaped around how each business really works.</span>
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-[18px] md:mt-16 lg:grid-cols-3 lg:gap-5">
          {PANZO_FOR.map((p, i) => (
            <Reveal key={p.audience} delay={i * 80} className="h-full">
              <article className="h-full overflow-hidden rounded-[22px] bg-surface md:rounded-[28px]">
                <Image
                  src={p.image}
                  alt={p.alt}
                  width={1600}
                  height={1067}
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  style={{ objectPosition: p.position }}
                  className="h-[220px] w-full object-cover md:h-[320px] lg:h-[260px]"
                />
                <div className="px-[22px] pb-6 pt-6 md:px-7 md:pb-7 md:pt-7">
                  <p className="mb-3 text-[1.0625rem] font-medium text-ink-500">{p.audience}</p>
                  <h3 className="mb-6 text-[1.6875rem] font-normal leading-[1.14] tracking-[-0.022em] lg:min-h-[2.3em] lg:text-[1.75rem]">{p.headline}</h3>
                  <ul>
                    {p.items.map((it) => (
                      <li key={it.name} className="border-t border-line-2 py-[15px] text-[1.0625rem] leading-[1.35] text-ink-700">
                        <b className="mb-0.5 block font-medium text-ink-900">{it.name}</b>
                        {it.body}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={`${wrap} py-[4.5rem] md:py-32`}>
        <Reveal>
          <Label>Why three stones</Label>
          <h2 className="big big-2 max-w-[66rem]">
            The order matters. <span className="m">Growth only holds when the two below are strong.</span>
          </h2>
        </Reveal>
        <div className="mt-9 grid gap-10 md:mt-[4.5rem] md:grid-cols-3">
          {LOGO_STORY.map((l, i) => (
            <Reveal key={l.name} delay={i * 80}>
              <Image src={l.image} alt="" width={900} height={504} sizes="(min-width: 768px) 30vw, 100vw" className="w-full" />
              <h3 className="mb-2 mt-5 text-[1.625rem] font-normal tracking-[-0.02em] md:text-[1.875rem]">{l.name}</h3>
              <p className="text-lg leading-[1.45] text-ink-700">{l.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={wrap}>
        <Reveal>
          <div className="overflow-hidden rounded-3xl bg-surface px-[22px] pt-[3.25rem] text-center md:rounded-[32px] md:px-[4.5rem] md:pt-[5.5rem]">
            <h2 className="big big-2">See Panzo <span className="m">at work.</span></h2>
            <p className="mx-auto mb-7 mt-5 max-w-[40rem] text-lg text-ink-700 md:text-[1.3125rem]">
              A screen from Panzo Studio with sample data: the leads dashboard for a sales team.
            </p>
            <a href={PANZO_URL} className="btn px-6 py-3.5 text-[1.0625rem]">Visit Panzo</a>
            <Image
              src="/img/screen.jpg"
              alt="The Panzo leads dashboard, with sample data"
              width={1800} height={963}
              sizes="(min-width: 768px) 85vw, 100vw"
              className="mx-auto mt-10 w-full rounded-t-2xl shadow-[0_-2px_40px_rgba(0,0,0,0.08)] md:mt-16 md:w-[92%]"
            />
          </div>
        </Reveal>
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

      <section className={`${wrap} grid items-center gap-8 md:grid-cols-2 md:gap-16`}>
        <Reveal>
          <Label>Where we start</Label>
          <h2 className="big big-3">India, UAE and Singapore. <span className="m">That&apos;s where we are starting.</span></h2>
          <p className="mt-5 text-lg leading-[1.45] text-ink-700">
            We start close to the businesses we build for, so what we make fits how they really run.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <Image
            src="/img/developer-india.jpg"
            alt="A developer at work in an office in India"
            width={1800} height={1200}
            sizes="(min-width: 768px) 45vw, 100vw"
            className="h-[300px] w-full rounded-[20px] object-cover md:h-[560px] md:rounded-[28px]"
          />
        </Reveal>
      </section>

      <section id="contact" className={`${wrap} scroll-mt-24 py-[4.5rem] md:py-32`}>
        <div className="grid gap-10 rounded-3xl bg-surface p-[22px] pt-10 md:rounded-[32px] md:p-16 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <h2 className="big big-1">Let&apos;s talk.</h2>
            <p className="mt-5 text-lg leading-[1.45] text-ink-700">
              For partnerships, press or anything about the company, send us a message. For a Panzo demo, use the form
              on{" "}
              <a href={`${PANZO_URL}/contact`} className="font-medium text-ink-900 underline underline-offset-4">thepanzo.com</a>.
            </p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn mt-7 px-6 py-3.5 text-[1.0625rem]">{CONTACT_EMAIL}</a>
          </Reveal>
          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
