import type { Metadata } from "next";
import { GrafanaMonitoringArticle } from "@/components/GrafanaMonitoringArticle";
const path="/articles/grafana-indoor-farming-monitoring/", idPath="/id/artikel/dashboard-grafana-monitoring/";
const title="Grafana Dashboards for Real-Time Indoor Farming Monitoring";
const description="How 27 sensor nodes, actuator states, local time-series storage, Grafana, and Cloudflare Tunnel support real-time monitoring of a container farm.";
export const metadata:Metadata={title,description,alternates:{canonical:path,languages:{en:path,id:idPath}},openGraph:{type:"article",url:path,title,description,publishedTime:"2026-10-15",authors:["Albert Sagala"],images:[{url:"/og.jpg",width:1280,height:720,alt:title}]},twitter:{card:"summary_large_image",title,description,images:["/og.jpg"]}};
export default function Page(){return <GrafanaMonitoringArticle locale="en"/>;}
