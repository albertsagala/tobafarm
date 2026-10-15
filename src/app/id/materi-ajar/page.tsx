import type { Metadata } from "next";
import { TeachingMaterialsPage } from "@/components/TeachingMaterialsPage";
export const metadata: Metadata = { title: "Materi Kuliah dan Praktikum — Toba Smart Farming", description: "Materi kuliah dan praktikum terbuka untuk Antar Jaringan dan Keamanan Siber oleh Albert Sagala.", alternates: { canonical: "/id/materi-ajar/", languages: { en: "/teaching/", id: "/id/materi-ajar/" } } };
export default function Page() { return <TeachingMaterialsPage locale="id"/>; }
