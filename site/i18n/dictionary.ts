import type { PetId } from "@/app/pets";
import en from "./dictionaries/en.json";
import zhCN from "./dictionaries/zh-CN.json";
import { isLocale, type Locale } from "./locales";

export type PetProfile = {
  navLabel: string;
  name: string;
  epithet: string;
  tagline: string;
  persona: string;
  appearance: string;
  traits: string[];
};

export type Dictionary = {
  meta: { title: string; description: string; keywords: string[] };
  nav: {
    skip: string;
    open: string;
    menu: string;
    github: string;
    install: string;
    switchLocale: string;
  };
  home: {
    badge: string;
    lead: string;
    intro: string;
    sourceBefore: string;
    sourceLink: string;
    sourceAfter: string;
  };
  media: {
    traits: string;
    portraitAlt: string;
    previewAlt: string;
    previewCaption: string;
    cardAlt: string;
    cardCaption: string;
  };
  install: {
    title: string;
    introBefore: string;
    settings: string;
    introAfter: string;
    quick: string;
    choose: string;
    zip: string;
    quickBody: string;
    chooseBody: string;
    zipBody: string;
    releaseLink: string;
    pathTitle: string;
    pathBody: string;
    customDir: string;
    githubTitle: string;
    githubBody: string;
    npmDocs: string;
    npm: string;
    download: string;
    issues: string;
    copy: string;
    copied: string;
  };
  faq: {
    title: string;
    items: { id: string; question: string; answer: string }[];
  };
  footer: { disclaimer: string; role: string };
  theme: { label: string; light: string; dark: string; system: string };
  pets: Record<PetId, PetProfile>;
};

const dictionaries = { "zh-CN": zhCN, en } satisfies Record<Locale, Dictionary>;

export function getDictionary(locale: string): Dictionary {
  if (!isLocale(locale)) throw new Error(`Unsupported locale: ${locale}`);
  return dictionaries[locale];
}
