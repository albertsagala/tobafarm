import type { Metadata } from "next";
import { AITrendsVerticalFarmingArticle } from "@/components/AITrendsVerticalFarmingArticle";
const path="/articles/ai-trends-indoor-vertical-farming-2026/", idPath="/id/artikel/tren-ai-indoor-vertical-farming-2026/";
const title="Nine AI Trends Shaping Indoor Vertical Farming in 2026";
const description="Safe RL, digital twins, multimodal plant intelligence, spatial control, edge AI, energy optimization, computer vision, predictive maintenance, and LLM assistants.";
export const metadata:Metadata={title,description,alternates:{canonical:path,languages:{en:path,id:idPath}},openGraph:{type:"article",url:path,title,description,publishedTime:"2026-10-15",authors:["Albert Sagala"],images:[{url:"/og.jpg",width:1280,height:720,alt:title}]},twitter:{card:"summary_large_image",title,description,images:["/og.jpg"]}};
export default function Page(){return <AITrendsVerticalFarmingArticle locale="en"/>;}
