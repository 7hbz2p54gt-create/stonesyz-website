/** Three stacked stones: the StoneSyz mark. The wordmark is always lowercase "stonesyz" (owner); text elsewhere writes StoneSyz. */
export function StonesMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <ellipse cx="32" cy="50" rx="24" ry="10" fill="var(--color-accent)" />
      <ellipse cx="31" cy="33" rx="17" ry="8.5" fill="var(--color-ember)" transform="rotate(-6 31 33)" />
      <ellipse cx="33" cy="18" rx="10" ry="6.5" fill="var(--color-sun)" transform="rotate(5 33 18)" />
    </svg>
  );
}

export default function Logo() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <StonesMark className="h-8 w-8" />
      <span className="text-[1.45rem] font-semibold tracking-[-0.02em]">stonesyz</span>
    </span>
  );
}
