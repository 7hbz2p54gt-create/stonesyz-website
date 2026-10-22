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

/*
 * Direction (owner 2026-10-22): Stonesyz solves the everyday problems of the people
 * who build. For infrastructure we serve the contractors, subcontractors and vendors
 * who deliver projects, not the giants directly. Covers
 * infrastructure, real estate and interiors. Only interiors has a live product
 * (Panzo). Never name unbuilt products or give dates for the other two.
 * Vision and mission: short versions (owner asked for small and easy to say).
 */
export const VISION = "A built world that runs on trust.";

export const MISSION = "Solve the everyday problems of the people who build: from interiors to real estate to infrastructure.";

export const PROBLEMS = [
  {
    title: "Projects slip, and nobody sees it in time",
    body: "Delays and overruns usually surface after the cost is already locked in, because progress lives in site visits, calls and chat groups instead of one live picture.",
  },
  {
    title: "Cash gets stuck between stages",
    body: "Milestone billing, retentions, advances and vendor payments are tracked in spreadsheets, so money that is owed waits and money that is spent goes unchecked.",
  },
  {
    title: "Every party holds its own version",
    body: "Owners, developers, contractors, consultants, vendors and buyers each keep separate records. Decisions get lost between them, and disputes start there.",
  },
  {
    title: "Handover comes without a record",
    body: "Keys change hands without a trusted history of what was built, with which materials, by whom and with which warranties, so problems come back with no trail.",
  },
] as const;

export const INDUSTRIES = [
  {
    name: "Infrastructure",
    status: "Where we're heading",
    live: false,
    body: "For the contractors, subcontractors and vendors who deliver infrastructure projects, and need clear site progress, billing and payments without enterprise complexity.",
  },
  {
    name: "Real estate",
    status: "Where we're heading",
    live: false,
    body: "From launch to possession and beyond: developers, sales teams, contractors and buyers who deserve the same clear view of every unit and every payment.",
  },
  {
    name: "Interiors",
    status: "Live today: Panzo",
    live: true,
    body: "Design, quotations, procurement, site work, handover and service for interior and fit-out firms, in one platform that is already running.",
  },
] as const;
