import Link from "next/link";
import Logo from "./Logo";
import { NAV } from "./site";

export const wrap = "mx-auto w-full max-w-[82rem] px-5 md:px-16";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-canvas/85 backdrop-blur">
      <div className={`${wrap} flex h-[4.5rem] items-center gap-2 md:h-[5.5rem] md:gap-8`}>
        <Link href="/" aria-label="StoneSyz home" className="mr-auto md:mr-2">
          <Logo />
        </Link>
        <nav aria-label="Main" className="contents text-base font-medium">
          {NAV.slice(0, 2).map((n, i) => (
            <Link key={n.href} href={n.href} className={`${i === 1 ? "hidden md:inline-block" : "hidden min-[360px]:inline-block"} whitespace-nowrap px-2 py-2 text-ink-900 hover:text-ink-500`}>
              {n.label}
            </Link>
          ))}
          <Link href="/#contact" className="btn whitespace-nowrap px-5 py-2.5 md:ml-auto">
            Talk to us
          </Link>
        </nav>
      </div>
    </header>
  );
}
