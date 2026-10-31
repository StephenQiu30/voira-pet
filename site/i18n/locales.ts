import {
  defaultLocale,
  isLocale as matchesLocale,
  localeCookie,
  localeLabel,
  localePath,
  localeRedirectScript,
  locales,
  negotiateLocale,
} from "./locales.mjs";

export type Locale = "zh-CN" | "en";

export {
  defaultLocale,
  localeCookie,
  localeLabel,
  localePath,
  localeRedirectScript,
  locales,
  negotiateLocale,
};

export function isLocale(value: string): value is Locale {
  return matchesLocale(value);
}
