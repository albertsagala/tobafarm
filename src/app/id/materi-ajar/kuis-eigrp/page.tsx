import type { Metadata } from "next";
import { EigrpQuiz } from "@/components/EigrpQuiz";
export const metadata: Metadata = { title: "30 Soal EIGRP — Antar Jaringan | Toba Smart Farming", description: "Latihan interaktif 30 soal pilihan ganda EIGRP tingkat sedang–menengah, penilaian otomatis, dan pembahasan.", alternates: { canonical: "/id/materi-ajar/kuis-eigrp/", languages: { en: "/teaching/eigrp-quiz/", id: "/id/materi-ajar/kuis-eigrp/" } } };
export default function Page(){ return <EigrpQuiz locale="id"/>; }
