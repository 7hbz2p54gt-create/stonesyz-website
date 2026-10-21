import Link from "next/link";
import { NAV } from "./site";

export const wrap = "mx-auto w-full max-w-5xl px-4 sm:px-6";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-canvas/85 backdrop-blur">
      <div className={`${wrap} flex h-16 items-center justify-between`}>
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Stonesyz<span className="text-accent">.</span>
        </Link>
        <nav aria-label="Main" className="flex gap-4 text-sm text-ink-700 sm:gap-6">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="transition-colors hover:text-ink-900">
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
