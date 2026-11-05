import Link from "next/link";
import { wrap } from "./Header";
import { CONTACT_EMAIL, LEGAL_NAME, PANZO_URL, TAGLINE } from "./site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={`${wrap} pb-11`}>
      <div className="flex flex-wrap gap-x-7 gap-y-2 border-t border-line pt-8 text-[0.9375rem] text-ink-500">
        <span>&copy; {year} {LEGAL_NAME}</span>
        <Link href="/about" className="hover:text-ink-900">About</Link>
        <a href={PANZO_URL} className="hover:text-ink-900">Panzo</a>
        <Link href="/privacy" className="hover:text-ink-900">Privacy</Link>
        <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-ink-900">{CONTACT_EMAIL}</a>
        <span className="md:ml-auto">{TAGLINE}</span>
      </div>
    </footer>
  );
}
