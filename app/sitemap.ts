import type { MetadataRoute } from "next";
import { SITE_URL } from "@/components/site";

// The real date these pages last changed. Update it when their words change.
const UPDATED = new Date("2026-11-05");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: UPDATED, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/about`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/privacy`, lastModified: UPDATED, changeFrequency: "yearly", priority: 0.3 },
  ];
}
