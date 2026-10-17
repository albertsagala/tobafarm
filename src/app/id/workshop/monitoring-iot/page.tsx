import type { Metadata } from "next";
import { ServicesTraining } from "@/components/ServicesTraining";
export const metadata: Metadata = { title: 'Dari ESP32 ke Grafana — Workshop IoT', description: 'Review sistem monitoring IoT, workshop praktik, dan dokumentasi pengalaman profesional Albert Sagala.', alternates: {canonical: "/id/workshop/monitoring-iot/", languages: {en: "/workshops/iot-monitoring/", id: "/id/workshop/monitoring-iot/"}} };
export default function Page() { return <ServicesTraining locale="id" kind="workshop"/>; }
