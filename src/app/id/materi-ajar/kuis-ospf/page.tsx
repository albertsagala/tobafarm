import type { Metadata } from "next";
import { OspfQuiz } from "@/components/OspfQuiz";
export const metadata: Metadata = { title: "30 Soal OSPF — Antar Jaringan | Toba Smart Farming", description: "Latihan interaktif 30 soal pilihan ganda routing OSPF tingkat sedang–menengah, penilaian otomatis, dan pembahasan.", alternates:{canonical:"/id/materi-ajar/kuis-ospf/",languages:{en:"/teaching/ospf-quiz/",id:"/id/materi-ajar/kuis-ospf/"}}};
export default function Page(){return <OspfQuiz locale="id"/>;}
