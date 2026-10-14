import type { Metadata } from "next";
import { SupervisionPage } from "@/components/SupervisionPage";
const path="/supervision/",idPath="/id/bimbingan/";
export const metadata:Metadata={title:"Students and Alumni Supervision",description:"Current undergraduate thesis students and verified completed student projects supervised by Albert Sagala at Institut Teknologi Del.",alternates:{canonical:path,languages:{en:path,id:idPath}},openGraph:{type:"website",url:path,title:"Students and Alumni Supervision — Toba Smart Farming",description:"A transparent record of current and completed student supervision at Institut Teknologi Del."}};
export default function Page(){return <SupervisionPage locale="en"/>;}
