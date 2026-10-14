import type { Metadata } from "next";
import { EdgeCloudArticle } from "@/components/EdgeCloudArticle";
const path="/id/artikel/dari-iot-ke-edge-cloud/", enPath="/articles/from-iot-to-edge-cloud/";
const title="Dari IoT ke Edge-to-Cloud: Arsitektur Tangguh untuk Container Farm";
const description="Bagaimana 27 node sensor, Jetson Nano, kontrol lokal, penyimpanan runtun waktu, dan Cloudflare Tunnel mendukung operasi container farm yang tangguh.";
export const metadata:Metadata={title,description,alternates:{canonical:path,languages:{en:enPath,id:path}},openGraph:{type:"article",url:path,title,description,publishedTime:"2026-10-14",authors:["Albert Sagala"],images:[{url:"/og.jpg",width:1280,height:720,alt:title}]},twitter:{card:"summary_large_image",title,description,images:["/og.jpg"]}};
export default function Page(){return <EdgeCloudArticle locale="id"/>;}
