import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt =
  "Rêves de Voyages — agence de voyages indépendante, spécialiste du sur-mesure";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const subtitle = `Spécialiste du sur-mesure depuis ${siteConfig.foundedYear} · séjours, circuits, croisières & voyages de noces`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #1f2733 0%, #2c3340 100%)",
        color: "#ffffff",
        fontFamily: "Georgia, serif",
        padding: "80px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: 30,
          letterSpacing: 8,
          textTransform: "uppercase",
          color: "#c5a059",
          marginBottom: 28,
        }}
      >
        Agence de voyages
      </div>
      <div
        style={{
          fontSize: 92,
          fontWeight: 700,
          lineHeight: 1.05,
          marginBottom: 28,
        }}
      >
        {siteConfig.name}
      </div>
      <div style={{ fontSize: 34, color: "#d8dde3", maxWidth: 900 }}>
        {subtitle}
      </div>
      <div
        style={{
          marginTop: 48,
          height: 4,
          width: 120,
          background: "#c5a059",
        }}
      />
    </div>,
    { ...size },
  );
}
