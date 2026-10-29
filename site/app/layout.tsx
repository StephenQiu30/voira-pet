import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SiteJsonLd } from "@/components/site-json-ld";
import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { authorUrl, siteDescription, siteTitle, siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s · Voira Pet",
  },
  description: siteDescription,
  applicationName: "Voira Pet",
  authors: [{ name: "StephenQiu30", url: authorUrl }],
  creator: "StephenQiu30",
  publisher: "StephenQiu30",
  category: "technology",
  keywords: [
    "Voira Pet",
    "ChatGPT Work",
    "Q版宠物",
    "npx voira-pet",
    "DeepSeek",
    "ChatGPT",
    "Claude",
    "Gemini",
    "Grok",
    "StephenQiu30",
  ],
  alternates: {
    canonical: "/",
    types: { "text/plain": "/llms.txt" },
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: siteUrl,
    siteName: "Voira Pet",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="zh-CN"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground antialiased">
        <SiteJsonLd />
        <ThemeProvider>
          <Button
            asChild
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-20"
          >
            <a href="#install">跳到安装说明</a>
          </Button>
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
