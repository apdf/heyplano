import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HeyPlano — Independent property advice for buying in Spain",
  description:
    "The Spanish property market is designed to benefit everyone except you. HeyPlano is being built to change that. Join the waitlist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
