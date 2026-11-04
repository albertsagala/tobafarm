import type { Metadata } from "next";
import { IncidentResponseLesson } from "@/components/IncidentResponseLesson";
export const metadata: Metadata = { title: "Keamanan Siber Minggu 9 — Respons Insiden dan Playbook | Toba Smart Farming", description: "Materi kuliah 13S4121 tentang incident response lifecycle, severity, triage, containment, eradication, recovery, playbook dan tabletop exercise.", alternates: {canonical:"/id/materi-ajar/respons-insiden-playbook/",languages:{id:"/id/materi-ajar/respons-insiden-playbook/",en:"/teaching/incident-response/"}}};
export default function Page(){return <IncidentResponseLesson locale="id"/>;}
