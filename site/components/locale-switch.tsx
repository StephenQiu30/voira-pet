"use client";

import { Button } from "@/components/ui/button";
import {
  localeCookie,
  localeLabel,
  localePath,
  locales,
  type Locale,
} from "@/i18n/locales";

export function LocaleSwitch({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const next = locales.find((item) => item !== locale) ?? locale;
  return (
    <Button variant="ghost" className="min-h-11 px-3" asChild>
      <a
        href={localePath(next)}
        hrefLang={next}
        aria-label={label}
        onClick={() => {
          document.cookie = `${localeCookie}=${next}; Path=/; Max-Age=31536000; SameSite=Lax`;
        }}
      >
        <span lang={next}>{localeLabel(next)}</span>
      </a>
    </Button>
  );
}
