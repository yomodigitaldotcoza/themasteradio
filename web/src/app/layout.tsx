import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Master Radio — Your Soundtrack. 24/7.",
  description:
    "The Master Radio — old-school hip hop, house, disco, soul and lounge from Mzansi. Streaming 24/7.",
  openGraph: {
    title: "The Master Radio — 24/7",
    description: "Old-school hip hop · house · disco · soul · lounge. Live from Mzansi.",
    url: "https://themasteradio.duckdns.org/"
  }
};

export const viewport: Viewport = {
  themeColor: "#0b0b0e"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
