import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#f7f3ec",
          color: "#14262d",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#1e3d2f", letterSpacing: 2 }}>
          JOURNAL KROKODIL
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 400,
            marginTop: 24,
            maxWidth: 900,
            lineHeight: 1.1,
            fontFamily: "Georgia, serif",
          }}
        >
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
