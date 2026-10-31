import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SiteJsonLd } from "@/components/site-json-ld";
import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/i18n/dictionary";
import { isLocale, localePath, locales } from "@/i18n/locales";
import { authorUrl, siteUrl } from "@/lib/site";
import "../globals.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dictionary = getDictionary(lang);
  const canonical = `${siteUrl}${localePath(lang)}`;
  return {
    metadataBase: new URL(siteUrl),
    title: { default: dictionary.meta.title, template: "%s · Voira Pet" },
    description: dictionary.meta.description,
    applicationName: "Voira Pet",
    authors: [{ name: "StephenQiu30", url: authorUrl }],
    creator: "StephenQiu30",
    publisher: "StephenQiu30",
    category: "technology",
    keywords: dictionary.meta.keywords,
    alternates: {
      canonical,
      languages: {
        "zh-CN": `${siteUrl}${localePath("zh-CN")}`,
        en: `${siteUrl}${localePath("en")}`,
        "x-default": `${siteUrl}${localePath("zh-CN")}`,
      },
      types: { "text/plain": "/llms.txt" },
    },
    openGraph: {
      type: "website",
      locale: lang === "zh-CN" ? "zh_CN" : "en_US",
      url: canonical,
      siteName: "Voira Pet",
      title: dictionary.meta.title,
      description: dictionary.meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.meta.title,
      description: dictionary.meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dictionary = getDictionary(lang);
  return (
    <html
      lang={lang}
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground antialiased">
        <SiteJsonLd locale={lang} dictionary={dictionary} />
        <ThemeProvider>
          <Button
            asChild
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-20"
          >
            <a href="#install">{dictionary.nav.skip}</a>
          </Button>
          <SiteHeader
            locale={lang}
            copy={dictionary.nav}
            theme={dictionary.theme}
            profiles={dictionary.pets}
          />
          {children}
          <SiteFooter copy={dictionary.footer} />
        </ThemeProvider>
      </body>
    </html>
  );
}
