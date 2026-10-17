import type { Metadata } from "next";
import { ServicesTraining } from "@/components/ServicesTraining";
export const metadata: Metadata = { title: 'Albert Sagala at BSSN National Cyber Exercise #9', description: 'IoT monitoring system reviews, practical workshops, and documented professional engagements with Albert Sagala.', alternates: {canonical: "/activities/bssn-national-cyber-exercise/", languages: {en: "/activities/bssn-national-cyber-exercise/", id: "/id/kegiatan/bssn-national-cyber-exercise/"}} };
export default function Page() { return <ServicesTraining locale="en" kind="bssn"/>; }
