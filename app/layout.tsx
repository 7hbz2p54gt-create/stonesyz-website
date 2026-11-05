import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { BRAND, CONTACT_EMAIL, LEGAL_NAME, PANZO_URL, SITE_URL } from "@/components/site";

// Inter Tight for headlines and text (SIL OFL), self-hosted by next/font at build time.
// Deliberately not Panzo's Poppins.
const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const description = `${BRAND} is a technology company building reliable, simple systems that solve real problems for different businesses, starting with Panzo. ${LEGAL_NAME}.`;

const ORGANIZATION = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: BRAND,
      alternateName: ["Stonesyz", LEGAL_NAME],
      legalName: LEGAL_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
      description,
      email: CONTACT_EMAIL,
      sameAs: ["https://www.linkedin.com/company/145332840"],
      subOrganization: { "@type": "Organization", name: "Panzo", url: PANZO_URL },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: BRAND,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${BRAND} | Technology Company Behind Panzo`,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: BRAND,
    title: `${BRAND} | Technology Company Behind Panzo`,
    description,
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={interTight.variable}>
      <head>
        {/* Without JavaScript the scroll reveal never runs: show everything. */}
        <noscript>
          <style>{`.reveal{opacity:1;transform:none}`}</style>
        </noscript>
      </head>
      <body className="font-sans antialiased">
        {/* Tells Google who StoneSyz is. Static, self-authored, nothing from users. */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION).replace(/</g, "\\u003c") }} />
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-30 focus:rounded focus:bg-canvas focus:px-3 focus:py-2">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
