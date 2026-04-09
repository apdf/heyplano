import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "HeyPlano — Finally, someone on your side",
  description:
    "Independent property advice for Europeans buying in Spain. No referral fees. No hidden agenda. 100% on your side.",
  metadataBase: new URL("https://www.heyplano.com"),
  openGraph: {
    title: "HeyPlano — Finally, someone on your side",
    description:
      "Independent property advice for Europeans buying in Spain. No referral fees. No hidden agenda. 100% on your side.",
    url: "https://www.heyplano.com",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HeyPlano — Finally, someone on your side",
    description:
      "Independent property advice for Europeans buying in Spain. No referral fees. No hidden agenda. 100% on your side.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
