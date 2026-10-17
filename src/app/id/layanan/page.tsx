import type { Metadata } from "next";
import { ServicesTraining } from "@/components/ServicesTraining";
export const metadata: Metadata = { title: 'Layanan & Pelatihan', description: 'Review sistem monitoring IoT, workshop praktik, dan dokumentasi pengalaman profesional Albert Sagala.', alternates: {canonical: "/id/layanan/", languages: {en: "/services/", id: "/id/layanan/"}} };
export default function Page() { return <ServicesTraining locale="id" kind="overview"/>; }
