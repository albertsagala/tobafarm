import type { Metadata } from "next";
import { SupervisionPage } from "@/components/SupervisionPage";
const path="/id/bimbingan/",enPath="/supervision/";
export const metadata:Metadata={title:"Mahasiswa dan Alumni Bimbingan",description:"Mahasiswa tugas akhir aktif dan proyek mahasiswa terverifikasi yang dibimbing Albert Sagala di Institut Teknologi Del.",alternates:{canonical:path,languages:{en:enPath,id:path}},openGraph:{type:"website",url:path,title:"Mahasiswa dan Alumni Bimbingan — Toba Smart Farming",description:"Rekam transparan bimbingan mahasiswa aktif dan proyek mahasiswa yang telah selesai di Institut Teknologi Del."}};
export default function Page(){return <SupervisionPage locale="id"/>;}
