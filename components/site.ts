/** Shared facts. Change them here only. */
export const SITE_URL = "https://stonesyz.com";
export const LEGAL_NAME = "Stonesyz Private Limited";
export const CONTACT_EMAIL = "hello@stonesyz.com";
export const PANZO_URL = "https://thepanzo.com";

/**
 * Panzo products, described from what ships today (panzo-website copy).
 * Screenshots are the same demo-data images published on thepanzo.com.
 * Panzo People is offered in the UAE and Singapore only.
 */
export const PRODUCTS = [
  {
    name: "Panzo Studio",
    tag: "Web workspace",
    body: "Runs an interior or fit-out business end to end: leads, deals, projects, handover and aftercare, in one place for the office team.",
    href: "https://thepanzo.com/product",
    image: "/product/studio.webp",
    width: 1600,
    height: 1000,
    alt: "Panzo Studio management dashboard with projects, pipeline, receivables and cash flow",
    phone: false,
  },
  {
    name: "Panzo Mobile",
    tag: "iOS and Android",
    body: "The field companion for site and crew: daily site reports, tasks, snags with photos and videos, tickets and expense claims.",
    href: "https://thepanzo.com/mobile",
    image: "/product/mobile.webp",
    width: 600,
    height: 1298,
    alt: "Panzo Mobile My Day screen with attendance, tasks due and today's meetings",
    phone: true,
  },
  {
    name: "Panzo People",
    tag: "HR and payroll",
    body: "Attendance, leave and payroll for the same teams, on the same login. Available in the UAE and Singapore.",
    href: "https://thepanzo.com/people",
    image: "/product/people.webp",
    width: 1600,
    height: 1000,
    alt: "Panzo People HR dashboard with attendance trend and today's attendance",
    phone: false,
  },
] as const;

export const MARKETS = ["India", "United Arab Emirates", "Singapore"] as const;

export const NAV = [
  { label: "About", href: "/about" },
  { label: "Ventures", href: "/#ventures" },
  { label: "Contact", href: "/#contact" },
] as const;
