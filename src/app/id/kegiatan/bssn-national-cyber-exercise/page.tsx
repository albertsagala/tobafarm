import type { Metadata } from "next";
import { ServicesTraining } from "@/components/ServicesTraining";
export const metadata: Metadata = { title: 'Albert Sagala di National Cyber Exercise #9 BSSN', description: 'Review sistem monitoring IoT, workshop praktik, dan dokumentasi pengalaman profesional Albert Sagala.', alternates: {canonical: "/id/kegiatan/bssn-national-cyber-exercise/", languages: {en: "/activities/bssn-national-cyber-exercise/", id: "/id/kegiatan/bssn-national-cyber-exercise/"}} };
export default function Page() { return <ServicesTraining locale="id" kind="bssn"/>; }
