export const locales = ["zh-CN", "en"];
export const defaultLocale = "zh-CN";
export const localeCookie = "voira-locale";

const labels = { "zh-CN": "中文", en: "EN" };

export function isLocale(value) {
  return locales.includes(value);
}

export function localeLabel(locale) {
  return labels[locale];
}

export function localePath(locale) {
  return `/${locale}/`;
}

export function negotiateLocale(acceptLanguage, cookie) {
  if (isLocale(cookie)) return cookie;
  const first = String(acceptLanguage ?? "")
    .split(",")[0]
    .trim()
    .toLowerCase()
    .split(";")[0]
    .trim();
  if (first === "en" || first.startsWith("en-")) return "en";
  return defaultLocale;
}

export function localeRedirectScript() {
  return `(function(){var match=document.cookie.match(/(?:^|; )${localeCookie}=(${locales.join("|")})(?:;|$)/);var chosen=match&&match[1];var language=(navigator.languages&&navigator.languages[0])||navigator.language||"";var locale=chosen||(/^en(-|$)/i.test(language)?"en":"${defaultLocale}");location.replace("/"+locale+"/"+location.search+location.hash);})();`;
}
