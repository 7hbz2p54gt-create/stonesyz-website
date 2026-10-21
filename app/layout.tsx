import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { LEGAL_NAME, SITE_URL } from "@/components/site";

// Plus Jakarta Sans for headlines and text (SIL OFL, licence in app/fonts).
// Self-hosted, and deliberately not Panzo's Poppins.
const jakarta = localFont({
  variable: "--font-jakarta",
  src: [
    { path: "./fonts/plus-jakarta-sans-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/plus-jakarta-sans-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/plus-jakarta-sans-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/plus-jakarta-sans-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "./fonts/plus-jakarta-sans-latin-800-normal.woff2", weight: "800", style: "normal" },
  ],
  display: "swap",
});

const description = `${LEGAL_NAME} is the parent company of Panzo. We build software to solve the big problems of infrastructure, real estate and interiors.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Stonesyz | The parent company of Panzo",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Stonesyz",
    title: "Stonesyz | The parent company of Panzo",
    description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <head>
        {/* Without JavaScript the scroll reveal never runs: show everything. */}
        <noscript>
          <style>{`.reveal{opacity:1;transform:none}`}</style>
        </noscript>
      </head>
      <body className="font-sans antialiased">
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
