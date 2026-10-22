import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { images } from "@/lib/images";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const description =
  "Restoran Rotkvica — moderna kuhinja u srcu Banjaluke, pored parka Petar Kočić. Doručak, ručak, večera i proslave. Rezervišite sto online.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Restoran Rotkvica | Banja Luka",
  description,
  keywords: ["Rotkvica", "restoran Banja Luka", "doručak Banja Luka", "burger Banja Luka", "rezervacija stola"],
  openGraph: {
    type: "website",
    locale: "sr_BA",
    alternateLocale: ["en_US"],
    url: siteUrl,
    siteName: "Restoran Rotkvica",
    title: "Restoran Rotkvica | Banja Luka",
    description,
    images: [{ url: images.hero, width: 2000, height: 1333, alt: "Enterijer restorana Rotkvica" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Restoran Rotkvica | Banja Luka",
    description,
    images: [images.hero],
  },
};

export const viewport: Viewport = {
  themeColor: "#0f0f0f",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
