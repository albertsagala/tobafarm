import type { Metadata } from "next";
import { OspfQuiz } from "@/components/OspfQuiz";
export const metadata: Metadata = { title: "30 OSPF Practice Questions — Internetworking | Toba Smart Farming", description: "Interactive 30-question OSPF multiple-choice quiz with automatic score and explanations.", alternates:{canonical:"/teaching/ospf-quiz/",languages:{en:"/teaching/ospf-quiz/",id:"/id/materi-ajar/kuis-ospf/"}}};
export default function Page(){return <OspfQuiz locale="en"/>;}
