import type { Metadata } from "next";
import { MicroclimateMethodsArticle, methodsPaths } from "@/components/MicroclimateMethodsArticle";
import { methodsCopy } from "@/lib/microclimate-methods";
const locale = "id";
const t = methodsCopy[locale];
export const metadata: Metadata = { title: t.title, description: t.dek, alternates: { canonical: methodsPaths[locale], languages: methodsPaths }, openGraph: { type: "article", title: t.title, description: t.dek, url: methodsPaths[locale], publishedTime: "2026-10-15", authors: ["Albert Sagala"] } };
export default function Page() { return <MicroclimateMethodsArticle locale={locale}/>; }
