import { ImageResponse } from "next/og";
import { locales } from "@/i18n/locales";

export const dynamic = "force-static";
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}
export const alt =
  "Voira Pet：DeepSeek、ChatGPT、Claude、Gemini 与 Grok 的 Q 版宠物。源代码在 github.com/StephenQiu30/voira-pet";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#111111",
          color: "#fafafa",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 6 }}>
          VOIRA PET
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 68 }}>
            Five Q-version pets
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              fontSize: 32,
              color: "#a1a1aa",
            }}
          >
            DeepSeek · ChatGPT · Claude · Gemini · Grok
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#a1a1aa" }}>
          github.com/StephenQiu30/voira-pet
        </div>
      </div>
    ),
    { ...size },
  );
}
