import type { Metadata } from "next";
import { ServicesTraining } from "@/components/ServicesTraining";
export const metadata: Metadata = { title: 'North Sumatra Information Security Governance FGD', description: 'IoT monitoring system reviews, practical workshops, and documented professional engagements with Albert Sagala.', alternates: {canonical: "/activities/north-sumatra-information-security/", languages: {en: "/activities/north-sumatra-information-security/", id: "/id/kegiatan/tata-kelola-keamanan-informasi-sumut/"}} };
export default function Page() { return <ServicesTraining locale="en" kind="fgd"/>; }
