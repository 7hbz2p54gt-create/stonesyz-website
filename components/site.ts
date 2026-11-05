/** Shared facts. Change them here only. */
export const SITE_URL = "https://stonesyz.com";
export const LEGAL_NAME = "Stonesyz Private Limited";
export const CONTACT_EMAIL = "hello@stonesyz.com";
export const PANZO_URL = "https://thepanzo.com";

/**
 * Panzo, by the kind of business it serves. Only claim what ships today.
 * Software and real estate are Panzo Business Models; real estate lists batch 1 only
 * (no cost sheet, booking or demands until they are built).
 * Panzo People is offered in the UAE and Singapore only.
 */
export const PANZO_FOR = [
  {
    audience: "For interior and fit-out firms",
    headline: "Leads, sites, purchases and money, together.",
    image: "/img/engineers-site.jpg",
    alt: "Two engineers in hard hats checking a tablet on site",
    position: "30% 45%",
    items: [
      { name: "Panzo Studio", body: "Runs the work from first enquiry to handover and service" },
      { name: "Panzo Mobile", body: "Keeps the team on site connected from the phone" },
      { name: "Panzo People", body: "Attendance, leave and team records, in the UAE and Singapore" },
    ],
  },
  {
    audience: "For software companies",
    headline: "Customers, subscriptions and billing, all tracked.",
    image: "/img/focused-laptop.jpg",
    alt: "A person working on a laptop",
    position: "50% 40%",
    items: [
      { name: "Accounts", body: "Every customer and subscription in one list" },
      { name: "Billing", body: "GST invoices, monthly, quarterly or yearly" },
      { name: "Spending", body: "Expenses and vendors, so you see what goes out" },
    ],
  },
  {
    audience: "For real estate builders",
    headline: "Every flat, villa and plot, at a glance.",
    image: "/img/property-visit.jpg",
    alt: "A property visit in a new home",
    position: "50% 55%",
    items: [
      { name: "Units", body: "Every unit and its status, in one live grid" },
      { name: "Plans", body: "Master plan, building and floor views, coloured by status" },
      { name: "Holds", body: "Block a unit for a buyer, and it frees itself when time is up" },
    ],
  },
] as const;

export const MARKETS = ["India", "United Arab Emirates", "Singapore"] as const;

export const NAV = [
  { label: "About", href: "/about" },
  { label: "What we make", href: "/#what-we-make" },
  { label: "Contact", href: "/#contact" },
] as const;

/*
 * Brand (owner 2026-10-22): the brand is written "StoneSyz"; the legal name stays
 * exactly "Stonesyz Private Limited". STONE = strong foundations, SYZ = systems.
 * Tagline: "Strong Foundations. Smart Systems."
 * Positioning (owner 2026-11-05): a technology company solving different problems
 * for different businesses. Never name unbuilt products or give dates.
 */
export const BRAND = "StoneSyz";
export const TAGLINE = "Strong Foundations. Smart Systems.";

export const VISION = "Enduring technology that simplifies how businesses work and grow.";
export const MISSION = "Build reliable, simple systems that solve real problems.";

export const AMBITION = "Build technology that makes businesses stronger, work simpler and progress sustainable.";

export const NAME_STORY = [
  {
    part: "Stone",
    meaning: "Strength, stability and endurance",
    body: "A stone is solid, dependable and built to last. Technology should have strong foundations, be reliable and keep delivering value as businesses grow.",
  },
  {
    part: "Syz",
    meaning: "Systems",
    body: "Our own way of writing systems: the digital products, intelligent platforms and connected processes we create to simplify everyday challenges.",
  },
] as const;

export const VALUES = [
  { title: "Strong Foundations", body: "Build thoughtfully, prioritise reliability and make decisions that stand the test of time." },
  { title: "Simplicity by Design", body: "Make complex technology feel effortless and intuitive." },
  { title: "Purposeful Innovation", body: "Innovate to solve genuine problems, not simply to follow trends." },
  { title: "Trust and Ownership", body: "Act responsibly, communicate transparently and stand behind what we build." },
  { title: "Built for Growth", body: "Create flexible systems that evolve with changing business needs." },
] as const;

/** Logo story: the three stones, bottom to top. A brand narrative, not a literal reading of the shapes. */
export const LOGO_STORY = [
  { name: "Foundation", image: "/img/red.png", body: "The strength and reliability everything is built on." },
  { name: "Systems", image: "/img/orange.png", body: "The technology and processes that connect operations." },
  { name: "Growth", image: "/img/yellow.png", body: "The progress and possibilities those systems make possible." },
] as const;
