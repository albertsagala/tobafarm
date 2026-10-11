import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { person } from "@/lib/site";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(person.url),
  title: {
    default: `${person.name} — ${person.title}`,
    template: `%s — ${person.name}`,
  },
  description: person.description,
  applicationName: person.name,
  authors: [{ name: person.name, url: person.url }],
  creator: person.name,
  publisher: person.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: person.url,
    siteName: person.name,
    title: `${person.name} — ${person.title}`,
    description: person.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: `${person.name} — ${person.title}`,
    description: person.description,
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream-soft text-ink">
        <JsonLd />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-cream focus:px-4 focus:py-2 focus:text-forest"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
