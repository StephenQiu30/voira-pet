import { localeRedirectScript } from "@/i18n/locales";

export const dynamic = "force-static";

const html = `<!doctype html>
<html lang="zh-CN">
<meta charset="utf-8">
<title>Voira Pet</title>
<script>${localeRedirectScript()}</script>
<p><a href="/zh-CN/">中文</a> · <a href="/en/">English</a></p>
</html>
`;

export function GET() {
  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
