import Link from "next/link";
import Logo from "./Logo";
import { NAV } from "./site";

export const wrap = "mx-auto w-full max-w-6xl px-4 sm:px-6";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-canvas/80 backdrop-blur">
      <div className={`${wrap} flex h-16 items-center justify-between gap-4`}>
        <Link href="/" aria-label="Stonesyz home">
          <Logo />
        </Link>
        <nav aria-label="Main" className="flex items-center gap-1 text-sm font-medium sm:gap-2">
          {NAV.slice(0, 2).map((n, i) => (
            <Link key={n.href} href={n.href} className={`${i === 1 ? "hidden sm:inline-block" : ""} whitespace-nowrap rounded-full px-3 py-2 text-ink-700 transition-colors hover:bg-surface hover:text-ink-900`}>
              {n.label}
            </Link>
          ))}
          <Link href="/#contact" className="btn whitespace-nowrap rounded-full bg-ink-900 px-4 py-2 text-canvas hover:bg-accent hover:text-accent-on">
            Talk to us
          </Link>
        </nav>
      </div>
    </header>
  );
}
