import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1e3d2f",
          borderRadius: 6,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 16,
            fontWeight: 400,
            letterSpacing: -1,
            color: "#f7f3ec",
            fontFamily: "Georgia, serif",
          }}
        >
          JK
        </div>
      </div>
    ),
    { ...size },
  );
}
