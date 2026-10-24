"use client";
import {useEffect,useState} from "react";
const measurementId=process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
export function AnalyticsConsent(){
 const [choice,setChoice]=useState<"accepted"|"rejected"|null>(null);
 useEffect(()=>{const saved=localStorage.getItem("tobafarm-analytics-choice");if(saved==="accepted"||saved==="rejected")setChoice(saved);},[]);
 useEffect(()=>{
   if(!measurementId||choice!=="accepted")return;
   if(!/^G-[A-Z0-9]+$/.test(measurementId))return;
   if(document.querySelector('[data-tobafarm-ga]'))return;
   const script=document.createElement("script");script.async=true;script.src="https://www.googletagmanager.com/gtag/js?id="+encodeURIComponent(measurementId);script.dataset.tobafarmGa="true";document.head.appendChild(script);
   const inline=document.createElement("script");inline.dataset.tobafarmGa="true";inline.textContent="window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('consent','default',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});gtag('config',"+JSON.stringify(measurementId)+");";document.head.appendChild(inline);
 },[choice]);
 function decide(v:"accepted"|"rejected"){localStorage.setItem("tobafarm-analytics-choice",v);setChoice(v);if(v==="rejected"){window.location.reload();}}
 if(!measurementId)return null;
 return <><button type="button" onClick={()=>setChoice(null)} className="fixed bottom-3 left-3 z-40 rounded-full border border-white/30 bg-navy px-3 py-2 text-xs text-white shadow-lg" aria-label="Pengaturan analytics">Pengaturan privasi</button>{choice===null&&<aside role="dialog" aria-label="Persetujuan analytics" className="fixed bottom-16 left-3 right-3 z-50 max-w-xl rounded-2xl border bg-white p-5 text-ink shadow-xl"><h2 className="font-semibold">Pengukuran trafik website</h2><p className="mt-2 text-sm leading-6">Kami meminta izin untuk mengaktifkan Google Analytics guna memahami kunjungan. Tolak jika tidak ingin pelacakan analytics. Situs tetap dapat digunakan. Baca <a href="/privacy-policy/" className="underline">kebijakan privasi</a>.</p><div className="mt-4 flex gap-3"><button type="button" className="rounded-full border px-4 py-2 text-sm" onClick={()=>decide("rejected")}>Tolak</button><button type="button" className="rounded-full bg-forest px-4 py-2 text-sm text-white" onClick={()=>decide("accepted")}>Izinkan Analytics</button></div></aside>}</>;
}
