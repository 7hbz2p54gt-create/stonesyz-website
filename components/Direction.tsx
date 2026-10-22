import Reveal from "./Reveal";
import { wrap } from "./Header";
import { INDUSTRIES, MISSION, PROBLEMS, VISION } from "./site";

/** Vision and mission on a maroon band, shared by the home and About pages. */
export function VisionMission() {
  return (
    <section className="bg-maroon-2 text-on-maroon">
      <div className={`${wrap} grid gap-12 py-20 sm:py-28 md:grid-cols-2`}>
        {[
          { label: "Our vision", text: VISION },
          { label: "Our mission", text: MISSION },
        ].map((b, i) => (
          <Reveal key={b.label} delay={i * 120}>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-sun">
              <span className="h-px w-10 bg-sun" aria-hidden />
              {b.label}
            </p>
            <p className="mt-6 font-display text-3xl font-bold leading-tight sm:text-5xl">{b.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/** The four problems we exist to solve, as a numbered list. */
export function Problems() {
  return (
    <ol className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border-2 border-line bg-line sm:grid-cols-2">
      {PROBLEMS.map((p, i) => (
        <Reveal as="li" key={p.title} delay={i * 80} className="bg-canvas p-8 sm:p-10">
          <span className="font-display text-5xl font-bold outline-num">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="mt-4 font-display text-2xl font-bold leading-tight">{p.title}</h3>
          <p className="mt-3 leading-relaxed text-ink-700">{p.body}</p>
        </Reveal>
      ))}
    </ol>
  );
}

const TILE = ["bg-accent text-accent-on", "bg-ember text-ink-900", "bg-sun text-ink-900"];

/** The three industries; only interiors is marked live. */
export function Industries() {
  return (
    <div className="mt-12 grid gap-4 md:grid-cols-3">
      {INDUSTRIES.map((ind, i) => (
        <Reveal key={ind.name} delay={i * 100} className="h-full">
          <div className={`btn flex h-full flex-col rounded-[2rem] p-8 ${TILE[i]}`}>
            <span
              className={`self-start rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${
                ind.live ? "bg-ink-900 text-canvas" : "border-2 border-current"
              }`}
            >
              {ind.status}
            </span>
            <h3 className="mt-8 font-display text-4xl font-bold">{ind.name}</h3>
            <p className="mt-3 leading-relaxed opacity-90">{ind.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
