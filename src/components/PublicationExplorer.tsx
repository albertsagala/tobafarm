"use client";

import { useState } from "react";
import { publicationGroups } from "@/lib/academic-records";

const labels: Record<string, [string, string]> = {
  "international-journals": ["International journals", "Jurnal Internasional"],
  "national-journals": ["National journals", "Jurnal Nasional"],
  "international-conferences": ["International conference proceedings", "Prosiding Internasional"],
};

export function PublicationExplorer({ locale }: { locale: "en" | "id" }) {
  const id = locale === "id";
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [year, setYear] = useState("all");
  const years = [...new Set(publicationGroups.flatMap(g => g.items.map(p => p.year)))].sort((a,b) => b-a);
  const groups = publicationGroups.map(g => ({...g, items: g.items.filter(p =>
    (category === "all" || category === g.id) &&
    (year === "all" || String(p.year) === year) &&
    `${p.title} ${p.venue} ${p.location || ""}`.toLowerCase().includes(query.toLowerCase().trim())
  )}));
  const count = groups.reduce((n,g) => n + g.items.length, 0);
  return <section id="catalogue" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
    <h2 className="font-display text-3xl text-forest-deep">{id ? "Katalog publikasi" : "Publication catalogue"}</h2>
    <div className="mt-6 grid gap-4 rounded-3xl border border-[var(--line)] bg-white p-6 md:grid-cols-[2fr_1.5fr_1fr]">
      <label className="text-sm font-medium text-forest-deep">{id ? "Cari judul, jurnal, atau lokasi" : "Search title, venue, or location"}<input value={query} onChange={e=>setQuery(e.target.value)} type="search" className="mt-2 w-full rounded-xl border border-[var(--line)] bg-cream-soft p-3" /></label>
      <label className="text-sm font-medium text-forest-deep">{id ? "Kategori" : "Category"}<select value={category} onChange={e=>setCategory(e.target.value)} className="mt-2 w-full rounded-xl border border-[var(--line)] bg-cream-soft p-3"><option value="all">{id ? "Semua kategori" : "All categories"}</option>{publicationGroups.map(g=><option key={g.id} value={g.id}>{labels[g.id][id?1:0]}</option>)}</select></label>
      <label className="text-sm font-medium text-forest-deep">{id ? "Tahun" : "Year"}<select value={year} onChange={e=>setYear(e.target.value)} className="mt-2 w-full rounded-xl border border-[var(--line)] bg-cream-soft p-3"><option value="all">{id ? "Semua tahun" : "All years"}</option>{years.map(y=><option key={y}>{y}</option>)}</select></label>
    </div>
    <div className="mt-5 flex flex-wrap items-center justify-between gap-3"><p role="status" className="text-sm text-muted">{count} {id ? "publikasi ditampilkan" : "publications shown"}</p><button type="button" onClick={()=>{setQuery("");setCategory("all");setYear("all");}} className="rounded-full border border-[var(--line)] px-4 py-2 text-sm text-forest-deep">{id ? "Reset filter" : "Reset filters"}</button></div>
    {groups.filter(g=>g.items.length).map(g=><div key={g.id} id={g.id} className="mt-12 scroll-mt-24"><h3 className="font-display text-3xl text-forest-deep">{labels[g.id][id?1:0]} <span className="text-lg text-muted">({g.items.length})</span></h3><ol className="mt-5 space-y-4">{g.items.map(p=><li key={p.href} className="rounded-2xl border border-[var(--line)] bg-white p-6 md:p-8"><p className="text-sm font-medium text-teal-deep">{p.year}</p><h4 className="font-display mt-2 text-2xl leading-snug text-forest-deep">{p.title}</h4><p className="mt-3 text-sm leading-6 text-muted">{p.venue}</p>{p.location && <p className="mt-2 text-sm text-muted">{id ? "Lokasi konferensi" : "Conference location"}: <a href={p.locationSource} target="_blank" rel="noreferrer" className="underline underline-offset-4">{p.location}</a></p>}<div className="mt-5 flex flex-wrap gap-4 text-sm font-medium text-teal-deep"><a href={p.href} target="_blank" rel="noreferrer" className="underline underline-offset-4">{id ? "Penerbit / DOI ↗" : "Publisher / DOI ↗"}</a><a href={`https://scholar.google.com/scholar?q=${encodeURIComponent('"'+p.title+'"')}`} target="_blank" rel="noreferrer" className="underline underline-offset-4">{id ? "Cari di Google Scholar ↗" : "Search Google Scholar ↗"}</a></div></li>)}</ol></div>)}
    {count===0 && <p className="mt-10 rounded-2xl bg-white p-8 text-muted">{id ? "Tidak ada publikasi yang cocok. Ubah pencarian atau reset filter." : "No publications match. Change your search or reset the filters."}</p>}
  </section>;
}
