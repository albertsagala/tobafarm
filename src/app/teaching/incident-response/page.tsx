import type { Metadata } from "next";
import { IncidentResponseLesson } from "@/components/IncidentResponseLesson";
export const metadata: Metadata = { title: "Incident Response and Playbooks — Week 9 | Toba Smart Farming", description: "Cybersecurity course Week 9: incident response lifecycle, playbook, evidence, severity, communication and tabletop exercise.", alternates: {canonical:"/teaching/incident-response/",languages:{id:"/id/materi-ajar/respons-insiden-playbook/",en:"/teaching/incident-response/"}}};
export default function Page(){return <IncidentResponseLesson locale="en"/>;}
