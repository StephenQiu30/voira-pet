import { locales } from "@/i18n/locales";

export const dynamic = "force-static";
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export { alt, contentType, default, size } from "./opengraph-image";
