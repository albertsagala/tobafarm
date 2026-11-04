import type { Metadata } from "next";
import { CybersecurityQuiz } from "@/components/CybersecurityQuiz";
export const metadata: Metadata = { title: "40 Cybersecurity and Network Security Questions — Weeks 1–7 | Toba Smart Farming", description: "Interactive multiple-choice cybersecurity quiz for Weeks 1–7.", alternates: { canonical: "/teaching/cybersecurity-quiz/", languages: { en: "/teaching/cybersecurity-quiz/", id: "/id/materi-ajar/kuis-keamanan-siber/" } } };
export default function Page(){ return <CybersecurityQuiz locale="en"/>; }
