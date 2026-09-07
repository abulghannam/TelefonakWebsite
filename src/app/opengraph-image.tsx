import { ImageResponse } from "next/og";

import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Generated at build time — no static asset to keep in sync. */
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
          padding: "80px",
          background:
            "radial-gradient(900px 520px at 50% -10%, #16224a 0%, #070910 58%, #04050a 100%)",
          color: "#f4f4f2",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 16,
              border: "1.5px solid rgba(244,244,242,0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            T
          </div>
          <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: -0.5 }}>
            {site.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2.5,
              maxWidth: 900,
            }}
          >
            Premium technology deserves a second life.
          </div>
          <div style={{ fontSize: 28, color: "#98a0b0", maxWidth: 820 }}>
            {site.tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 28,
            fontSize: 22,
            color: "#6c7486",
          }}
        >
          <span>Verified profiles</span>
          <span>·</span>
          <span>Transparent conditions</span>
          <span>·</span>
          <span>In-app messaging</span>
        </div>
      </div>
    ),
    size,
  );
}
