import type { MetadataRoute } from "next";
import { localePath, locales } from "@/i18n/locales";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, `${siteUrl}${localePath(locale)}`]),
  );
  return locales.map((locale) => ({
    url: `${siteUrl}${localePath(locale)}`,
    lastModified: "2026-10-31",
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages },
  }));
}
