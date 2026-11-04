import type { Metadata } from "next";
import { IncidentResponseQuiz } from "@/components/IncidentResponseQuiz";
export const metadata: Metadata = { title: "20 Soal Respons Insiden dan Playbook — Keamanan Siber Minggu 9 | Toba Smart Farming", description: "Kuis latihan mandiri respons insiden dan playbook, 20 soal pilihan ganda dengan nilai otomatis dan pembahasan.", alternates: { canonical: "/id/materi-ajar/kuis-respons-insiden/", languages: { en: "/teaching/incident-response-quiz/", id: "/id/materi-ajar/kuis-respons-insiden/" } } };
export default function Page(){return <IncidentResponseQuiz locale="id"/>;}
