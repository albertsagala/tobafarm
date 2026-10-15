import type { Metadata } from "next";
import { GrafanaMonitoringArticle } from "@/components/GrafanaMonitoringArticle";
const path="/id/artikel/dashboard-grafana-monitoring/", enPath="/articles/grafana-indoor-farming-monitoring/";
const title="Dashboard Grafana untuk Monitoring Indoor Farming secara Real-Time";
const description="Bagaimana 27 node sensor, status aktuator, penyimpanan lokal, Grafana, dan Cloudflare Tunnel mendukung monitoring container farm secara real-time.";
export const metadata:Metadata={title,description,alternates:{canonical:path,languages:{en:enPath,id:path}},openGraph:{type:"article",url:path,title,description,publishedTime:"2026-10-15",authors:["Albert Sagala"],images:[{url:"/og.jpg",width:1280,height:720,alt:title}]},twitter:{card:"summary_large_image",title,description,images:["/og.jpg"]}};
export default function Page(){return <GrafanaMonitoringArticle locale="id"/>;}
