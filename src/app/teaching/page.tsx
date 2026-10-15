import type { Metadata } from "next";
import { TeachingMaterialsPage } from "@/components/TeachingMaterialsPage";
export const metadata: Metadata = { title: "Teaching Materials — Toba Smart Farming", description: "Open lecture and laboratory materials for Internetworking and Cybersecurity by Albert Sagala.", alternates: { canonical: "/teaching/", languages: { en: "/teaching/", id: "/id/materi-ajar/" } } };
export default function Page() { return <TeachingMaterialsPage locale="en"/>; }
