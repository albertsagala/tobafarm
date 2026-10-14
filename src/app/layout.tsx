import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
const display = Cormorant_Garamond({ variable: "--font-display", subsets: ["latin"], weight: ["500", "600", "700"] });
const body = Outfit({ variable: "--font-body", subsets: ["latin"], weight: ["300", "400", "500", "600"] });
export const metadata: Metadata = {
 metadataBase: new URL(site.url), title: { default: `${site.name} — ${site.tagline}`, template: `%s — ${site.name}` }, description: site.description,
 applicationName: site.name, keywords: ["Toba Smart Farming","indoor farming","container farm","vertical hydroponics","wireless sensor networks","spatial microclimate mapping","AI climate control","precision agriculture","VPD","reinforcement learning"],
 authors: [{ name: site.name, url: site.url }], creator: site.name, publisher: site.name,
 alternates: { canonical: "/", languages: { en: "/", id: "/id/", "x-default": "/" } },
 openGraph: { type: "website", url: site.url, siteName: site.name, title: `${site.name} — ${site.tagline}`, description: site.description, locale: "en_US", alternateLocale: ["id_ID"], images: [{ url: "/og.jpg", width: 1280, height: 720, alt: `${site.name} — ${site.tagline}` }] },
 twitter: { card: "summary_large_image", title: `${site.name} — ${site.tagline}`, description: site.description, images: ["/og.jpg"] },
 robots: { index: true, follow: true }, icons: { icon: "/favicon.svg" },
};
export default function RootLayout({ children }: LayoutProps<"/">) {
 return <html lang="en" className={`${display.variable} ${body.variable} h-full antialiased`}><body className="flex min-h-full flex-col bg-cream-soft text-ink"><JsonLd /><a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-cream focus:px-4 focus:py-2 focus:text-forest">Skip to content</a>{children}</body></html>;
}
