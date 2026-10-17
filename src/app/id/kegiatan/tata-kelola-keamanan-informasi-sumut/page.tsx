import type { Metadata } from "next";
import { ServicesTraining } from "@/components/ServicesTraining";
export const metadata: Metadata = { title: 'FGD Tata Kelola Keamanan Informasi Sumatera Utara', description: 'Review sistem monitoring IoT, workshop praktik, dan dokumentasi pengalaman profesional Albert Sagala.', alternates: {canonical: "/id/kegiatan/tata-kelola-keamanan-informasi-sumut/", languages: {en: "/activities/north-sumatra-information-security/", id: "/id/kegiatan/tata-kelola-keamanan-informasi-sumut/"}} };
export default function Page() { return <ServicesTraining locale="id" kind="fgd"/>; }
