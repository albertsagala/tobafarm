import type { Metadata } from "next";
export const metadata: Metadata={title:{default:"Toba Smart Farming — Riset Indoor Farming",template:"%s — Toba Smart Farming"},description:"Platform riset container farm untuk pemetaan mikroklimat, jaringan sensor, dan kontrol iklim cerdas."};
export default function IndonesianLayout({children}:{children:React.ReactNode}){return <div lang="id">{children}</div>;}
