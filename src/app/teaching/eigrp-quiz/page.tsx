import type { Metadata } from "next";
import { EigrpQuiz } from "@/components/EigrpQuiz";
export const metadata: Metadata = { title: "30 EIGRP Practice Questions — Internetworking | Toba Smart Farming", description: "Interactive 30-question EIGRP multiple-choice quiz with automatic scoring and explanations.", alternates: { canonical: "/teaching/eigrp-quiz/", languages: { en: "/teaching/eigrp-quiz/", id: "/id/materi-ajar/kuis-eigrp/" } } };
export default function Page(){ return <EigrpQuiz locale="en"/>; }
