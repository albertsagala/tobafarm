import type { Metadata } from "next";
import { ServicesTraining } from "@/components/ServicesTraining";
export const metadata: Metadata = { title: 'From ESP32 to Grafana — IoT Workshop', description: 'IoT monitoring system reviews, practical workshops, and documented professional engagements with Albert Sagala.', alternates: {canonical: "/workshops/iot-monitoring/", languages: {en: "/workshops/iot-monitoring/", id: "/id/workshop/monitoring-iot/"}} };
export default function Page() { return <ServicesTraining locale="en" kind="workshop"/>; }
