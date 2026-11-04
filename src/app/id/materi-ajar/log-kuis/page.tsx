import type { Metadata } from "next";
import { QuizAdminLogs } from "@/components/QuizAdminLogs";
export const metadata: Metadata = { title: "Log Kuis — Dosen | Toba Smart Farming", robots: { index:false,follow:false } };
export default function Page(){ return <QuizAdminLogs/>; }
