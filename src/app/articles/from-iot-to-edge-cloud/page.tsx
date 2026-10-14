import type { Metadata } from "next";
import { EdgeCloudArticle } from "@/components/EdgeCloudArticle";
const path="/articles/from-iot-to-edge-cloud/", idPath="/id/artikel/dari-iot-ke-edge-cloud/";
const title="From IoT to Edge-to-Cloud: A Resilient Architecture for Container Farming";
const description="How 27 sensor nodes, a Jetson Nano, local control, local time-series storage, and Cloudflare Tunnel support resilient container-farm operation.";
export const metadata:Metadata={title,description,alternates:{canonical:path,languages:{en:path,id:idPath}},openGraph:{type:"article",url:path,title,description,publishedTime:"2026-10-14",authors:["Albert Sagala"],images:[{url:"/og.jpg",width:1280,height:720,alt:title}]},twitter:{card:"summary_large_image",title,description,images:["/og.jpg"]}};
export default function Page(){return <EdgeCloudArticle locale="en"/>;}
