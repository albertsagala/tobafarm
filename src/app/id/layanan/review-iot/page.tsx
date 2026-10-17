import type { Metadata } from "next";
import { ServicesTraining } from "@/components/ServicesTraining";
export const metadata: Metadata = { title: 'Review Arsitektur Monitoring IoT', description: 'Review sistem monitoring IoT, workshop praktik, dan dokumentasi pengalaman profesional Albert Sagala.', alternates: {canonical: "/id/layanan/review-iot/", languages: {en: "/services/iot-review/", id: "/id/layanan/review-iot/"}} };
export default function Page() { return <ServicesTraining locale="id" kind="review"/>; }
