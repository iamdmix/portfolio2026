import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Dharmik Vivek Shinde — Backend & Systems Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const bricolage700 = await readFile(
  join(process.cwd(), "src/app/fonts/bricolage-700.ttf"),
);
const inter400 = await readFile(join(process.cwd(), "src/app/fonts/inter-400.ttf"));
const mono400 = await readFile(
  join(process.cwd(), "src/app/fonts/jetbrains-mono-400.ttf"),
);

const GRAYSCALE = {
  white: "#FFFFFF",
  sub: "rgba(255,255,255,0.65)",
  mid: "#A1A1A6",
  dim: "#6E6E73",
  hairline: "rgba(255,255,255,0.08)",
  accent: "#7aa2f7",
};

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "60px 72px",
          background: "#0B0B0C",
          border: `1px solid ${GRAYSCALE.hairline}`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient top-left radial glow */}
        <div
          style={{
            position: "absolute",
            top: -320,
            left: -300,
            width: 760,
            height: 760,
            background:
              "radial-gradient(circle closest-side, rgba(122,162,247,0.1), transparent 70%)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            position: "relative",
          }}
        >
          {/* Header metadata */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontFamily: '"JetBrains Mono"',
              fontSize: 24,
            }}
          >
            <div style={{ display: "flex" }}>
              <span style={{ color: GRAYSCALE.accent }}>{"//"}</span>
              <span style={{ color: GRAYSCALE.mid }}>
                &nbsp;dharmikshinde.tech
              </span>
            </div>
            <div
              style={{
                letterSpacing: "0.18em",
                color: GRAYSCALE.mid,
                textTransform: "uppercase",
                fontSize: 21,
              }}
            >
              BACKEND &amp; SYSTEMS ENGINEER
            </div>
          </div>

          {/* Hero */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "auto",
              marginBottom: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontFamily: '"Bricolage"',
                fontWeight: 700,
                fontSize: 112,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: GRAYSCALE.white,
              }}
            >
              <span>Dharmik</span>
              <span>Vivek Shinde</span>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 24,
                fontFamily: '"Inter"',
                fontWeight: 400,
                fontSize: 28,
                letterSpacing: "-0.01em",
                color: GRAYSCALE.sub,
              }}
            >
              Building distributed systems, Linux tooling, and cloud
              infrastructure.
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              display: "flex",
              borderTop: `1px solid ${GRAYSCALE.hairline}`,
              paddingTop: 26,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontFamily: '"JetBrains Mono"',
                fontSize: 22,
                color: GRAYSCALE.dim,
              }}
            >
              Bengaluru / Chennai, IN
            </div>
            <div
              style={{
                fontFamily: '"JetBrains Mono"',
                fontSize: 22,
                color: GRAYSCALE.dim,
              }}
            >
              AWS Certified Cloud Practitioner
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Bricolage",
          data: bricolage700,
          weight: 700,
          style: "normal",
        },
        { name: "Inter", data: inter400, weight: 400, style: "normal" },
        {
          name: "JetBrains Mono",
          data: mono400,
          weight: 400,
          style: "normal",
        },
      ],
    },
  );
}
