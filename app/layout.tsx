import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Luis Vega | Founder & AI Strategy Leader",
  description: "Nonprofit executive and Army veteran building an AI consulting practice for mission-driven organizations. Raised $10M+, led teams through turnarounds, and co-founded programs that rescued 817 civilians.",
  keywords: ["Luis Vega", "AI Consulting", "Nonprofit Leadership", "Arizona", "Mission-driven", "Fundraising"],
  authors: [{ name: "Luis Vega" }],
  openGraph: {
    title: "Luis Vega | Founder & AI Strategy Leader",
    description: "Building an AI consulting practice for mission-driven organizations in Arizona",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luis Vega | Founder & AI Strategy Leader",
    description: "Building an AI consulting practice for mission-driven organizations",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
