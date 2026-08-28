import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { KONARK_LOGO_URL } from "@/lib/branding";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Konark Jewels | Where Heritage Becomes Jewellery",
    template: "%s | Konark Jewels",
  },
  description:
    "Fine jewellery inspired by the Sun Temple of Konark — solitaires, chains, bangles and bridal pieces crafted in gold, platinum and diamonds.",
  icons: {
    icon: [{ url: KONARK_LOGO_URL }],
    apple: [{ url: KONARK_LOGO_URL }],
  },
  openGraph: {
    title: "Konark Jewels | Where Heritage Becomes Jewellery",
    description:
      "Fine jewellery inspired by the Sun Temple of Konark — solitaires, chains, bangles and bridal pieces.",
    siteName: "Konark Jewels",
    type: "website",
    images: [{ url: KONARK_LOGO_URL, alt: "Konark Jewels logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Konark Jewels | Where Heritage Becomes Jewellery",
    description:
      "Fine jewellery inspired by the Sun Temple of Konark — solitaires, chains, bangles and bridal pieces.",
    images: [KONARK_LOGO_URL],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-gold focus:text-ink focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <AnnouncementBar />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
