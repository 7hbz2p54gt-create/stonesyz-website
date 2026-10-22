/** Three stacked stones: the StoneSyz mark. Colours follow the theme tokens. */
export function StonesMark({ className = "h-8 w-8", animated = false }: { className?: string; animated?: boolean }) {
  const a = animated ? "stone" : "";
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <ellipse className={`${a}`} cx="32" cy="50" rx="24" ry="10" fill="var(--color-accent)" />
      <ellipse className={`${a} ${animated ? "stone-2" : ""}`} cx="31" cy="33" rx="17" ry="8.5" fill="var(--color-ember)" transform="rotate(-6 31 33)" />
      <ellipse className={`${a} ${animated ? "stone-3" : ""}`} cx="33" cy="18" rx="10" ry="6.5" fill="var(--color-sun)" transform="rotate(5 33 18)" />
    </svg>
  );
}

export default function Logo() {
  return (
    <span className="inline-flex items-center gap-2">
      <StonesMark className="h-7 w-7" />
      <span className="font-display text-xl font-bold tracking-tight">StoneSyz</span>
    </span>
  );
}
