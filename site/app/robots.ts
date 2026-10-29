import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

const allow = { allow: "/" } as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", ...allow },
      { userAgent: "GPTBot", ...allow },
      { userAgent: "OAI-SearchBot", ...allow },
      { userAgent: "ChatGPT-User", ...allow },
      { userAgent: "PerplexityBot", ...allow },
      { userAgent: "ClaudeBot", ...allow },
      { userAgent: "Google-Extended", ...allow },
      { userAgent: "Applebot-Extended", ...allow },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
