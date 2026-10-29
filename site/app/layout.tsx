import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import "./globals.css";

export const metadata: Metadata = {
  title: "Voira Pet · 五位伙伴",
  description:
    "为 ChatGPT Work 安装 DeepSeek、ChatGPT、Claude、Gemini 与 Grok 的 Q 版宠物，并查看她们的人设。",
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
