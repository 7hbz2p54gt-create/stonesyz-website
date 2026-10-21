/** Shared facts. Change them here only. */
export const SITE_URL = "https://stonesyz.com";
export const LEGAL_NAME = "Stonesyz Private Limited";
export const CONTACT_EMAIL = "hello@stonesyz.com";
export const PANZO_URL = "https://thepanzo.com";

/**
 * Panzo products, described from what ships today (panzo-website copy).
 * Panzo People is offered in the UAE and Singapore only.
 */
export const PRODUCTS = [
  {
    name: "Panzo Studio",
    tag: "Web workspace",
    body: "Runs an interior or fit-out business end to end: leads, deals, projects, handover and aftercare, in one place for the office team.",
    href: "https://thepanzo.com/product",
  },
  {
    name: "Panzo Mobile",
    tag: "iOS and Android",
    body: "The field companion for site and crew: daily site reports, tasks, snags with photos and videos, tickets and expense claims.",
    href: "https://thepanzo.com/mobile",
  },
  {
    name: "Panzo People",
    tag: "HR and payroll",
    body: "Attendance, leave and payroll for the same teams, on the same login. Available in the UAE and Singapore.",
    href: "https://thepanzo.com/people",
  },
] as const;

export const MARKETS = ["India", "United Arab Emirates", "Singapore"] as const;
