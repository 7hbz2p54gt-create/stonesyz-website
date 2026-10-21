import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LEGAL_NAME, SITE_URL } from "@/components/site";

// Poppins, self-hosted (SIL OFL, licence in app/fonts), same as thepanzo.com.
const poppins = localFont({
  variable: "--font-poppins",
  src: [
    { path: "./fonts/poppins-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/poppins-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/poppins-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  display: "swap",
});

const description = `${LEGAL_NAME} builds Panzo, software that runs interior and fit-out businesses in India, the UAE and Singapore.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Stonesyz | The company behind Panzo",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Stonesyz",
    title: "Stonesyz | The company behind Panzo",
    description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
