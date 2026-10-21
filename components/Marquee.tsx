/** A slow sideways band of words; pauses on hover, still under reduced motion. */
const WORDS = ["Infrastructure", "Real estate", "Interiors", "Projects", "Payments", "Handover", "India", "UAE", "Singapore"];

export default function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <div className="marquee-wrap overflow-hidden bg-maroon py-5 text-on-maroon" aria-hidden>
      <div className="marquee">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0">
            {row.map((w, i) => (
              <span key={`${k}-${i}`} className="flex items-center gap-6 pr-6 font-display text-2xl font-bold sm:text-3xl">
                {w}
                <span className={i % 2 ? "text-sun" : "text-ember"}>&#9679;</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
