import type { Metadata } from "next";
import { HazeArticle } from "@/components/HazeArticle";
import { hazeCopy, hazePaths } from "@/lib/haze-article";
const locale = "id";
const { title, dek: description } = hazeCopy[locale];
export const metadata: Metadata = { title, description, alternates: { canonical: hazePaths[locale], languages: { en: hazePaths.en, id: hazePaths.id } }, openGraph: { type: "article", title, description, url: hazePaths[locale], publishedTime: "2026-10-15T09:00:00+07:00", authors: ["Albert Sagala"] } };
export default function Page() { return <HazeArticle locale={locale} />; }
