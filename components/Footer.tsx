import { wrap } from "./Header";
import { CONTACT_EMAIL, LEGAL_NAME, PANZO_URL } from "./site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className={`${wrap} flex flex-col gap-2 py-8 text-sm text-muted sm:flex-row sm:justify-between`}>
        <p>&copy; {year} {LEGAL_NAME}. All rights reserved.</p>
        <p>
          Stonesyz is the parent company of <a href={PANZO_URL} className="hover:text-ink-900">Panzo</a>.{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-ink-900">{CONTACT_EMAIL}</a>
        </p>
      </div>
    </footer>
  );
}
