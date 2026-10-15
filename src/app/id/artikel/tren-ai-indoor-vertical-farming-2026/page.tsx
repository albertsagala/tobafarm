import type { Metadata } from "next";
import { AITrendsVerticalFarmingArticle } from "@/components/AITrendsVerticalFarmingArticle";
const path="/id/artikel/tren-ai-indoor-vertical-farming-2026/", enPath="/articles/ai-trends-indoor-vertical-farming-2026/";
const title="Sembilan Tren AI yang Membentuk Indoor Vertical Farming pada 2026";
const description="Safe RL, digital twin, AI multimodal, kontrol spasial, edge AI, optimasi energi, computer vision, predictive maintenance, dan asisten LLM.";
export const metadata:Metadata={title,description,alternates:{canonical:path,languages:{en:enPath,id:path}},openGraph:{type:"article",url:path,title,description,publishedTime:"2026-10-15",authors:["Albert Sagala"],images:[{url:"/og.jpg",width:1280,height:720,alt:title}]},twitter:{card:"summary_large_image",title,description,images:["/og.jpg"]}};
export default function Page(){return <AITrendsVerticalFarmingArticle locale="id"/>;}
