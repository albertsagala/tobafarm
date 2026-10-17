import type { Metadata } from "next";
import { ServicesTraining } from "@/components/ServicesTraining";
export const metadata: Metadata = { title: 'Services & Training', description: 'IoT monitoring system reviews, practical workshops, and documented professional engagements with Albert Sagala.', alternates: {canonical: "/services/", languages: {en: "/services/", id: "/id/layanan/"}} };
export default function Page() { return <ServicesTraining locale="en" kind="overview"/>; }
