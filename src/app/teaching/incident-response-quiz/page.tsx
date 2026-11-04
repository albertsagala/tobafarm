import type { Metadata } from "next";
import { IncidentResponseQuiz } from "@/components/IncidentResponseQuiz";
export const metadata: Metadata = { title: "Incident Response and Playbooks: 20 Practice Questions | Toba Smart Farming", description: "Interactive incident response quiz for Cybersecurity Week 9, with immediate score and review.", alternates: { canonical: "/teaching/incident-response-quiz/", languages: { en: "/teaching/incident-response-quiz/", id: "/id/materi-ajar/kuis-respons-insiden/" } } };
export default function Page(){return <IncidentResponseQuiz locale="en"/>;}
