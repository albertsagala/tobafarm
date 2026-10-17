import type { Metadata } from "next";
import { ServicesTraining } from "@/components/ServicesTraining";
export const metadata: Metadata = { title: 'IoT Monitoring Architecture Review', description: 'IoT monitoring system reviews, practical workshops, and documented professional engagements with Albert Sagala.', alternates: {canonical: "/services/iot-review/", languages: {en: "/services/iot-review/", id: "/id/layanan/review-iot/"}} };
export default function Page() { return <ServicesTraining locale="en" kind="review"/>; }
