import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientBody } from "./ClientBody";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flighty — A new way to track flights",
  description: "The only app that tells you everything about your flight. Get real-time updates, the fastest alerts, and delay predictions, so you're always the first to know and rebook.",
  metadataBase: new URL("https://flighty.app"),
  openGraph: {
    title: "Flighty — A new way to track flights",
    description: "The only app that tells you everything about your flight. Get real-time updates, the fastest alerts, and delay predictions.",
    url: "https://flighty.app",
    siteName: "Flighty",
    images: [
      {
        url: "https://web-assets.same.dev/704386241/2484205066.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flighty — A new way to track flights",
    description: "The only app that tells you everything about your flight. Get real-time updates, the fastest alerts, and delay predictions.",
    images: ["https://web-assets.same.dev/704386241/2484205066.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
