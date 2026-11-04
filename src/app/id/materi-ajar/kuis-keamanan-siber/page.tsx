import type { Metadata } from "next";
import { CybersecurityQuiz } from "@/components/CybersecurityQuiz";
export const metadata: Metadata = { title: "40 Soal Keamanan Siber dan Keamanan Jaringan — Week 1–7 | Toba Smart Farming", description: "Latihan 40 soal pilihan ganda Week 1–7 mata kuliah Keamanan Siber dan Keamanan Jaringan.", alternates: { canonical: "/id/materi-ajar/kuis-keamanan-siber/", languages: { en: "/teaching/cybersecurity-quiz/", id: "/id/materi-ajar/kuis-keamanan-siber/" } } };
export default function Page(){ return <CybersecurityQuiz locale="id"/>; }
