import Link from "next/link";
import { StonesMark } from "./Logo";
import { wrap } from "./Header";
import { CONTACT_EMAIL, LEGAL_NAME, PANZO_URL, TAGLINE } from "./site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-maroon text-on-maroon">
      <div className={`${wrap} py-14`}>
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-4">
            <StonesMark className="h-14 w-14" />
            <p className="font-display text-5xl font-bold tracking-tight sm:text-7xl">StoneSyz</p>
          </div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-sun">About</Link></li>
            <li><a href={PANZO_URL} className="hover:text-sun">Panzo</a></li>
            <li><a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-sun">{CONTACT_EMAIL}</a></li>
          </ul>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-white/15 pt-6 text-sm text-on-maroon/70 sm:flex-row sm:justify-between">
          <p>&copy; {year} {LEGAL_NAME}. All rights reserved.</p>
          <p>{TAGLINE} The company behind Panzo.</p>
        </div>
      </div>
    </footer>
  );
}
