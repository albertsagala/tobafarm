import Image from "next/image";
import Link from "next/link";

export function ResearchStories({ locale = "en" }: { locale?: "en" | "id" }) {
  const en = locale === "en";
  const stories = en ? [
    ["Spatial microclimate", "The AC cooled the farm—but not uniformly", "Across 544 synchronized observations, average temperature fell while spatial spread increased. Explore what this event reveals about evaluating cooling with multiple sensors.", "/articles/ac-and-microclimate-uniformity/", "/images/gallery/container-overview.jpg"],
    ["Climate control", "Good temperature is not enough", "A 48.1-hour observation revealed nighttime humidity limitations. Read the VPD findings and their limits.", "/articles/vpd-container-farm/", "/images/gallery/pakchoi-racks.jpg"],
    ["IoT · Edge · Cloud", "From sensor readings to local decisions", "How 27 sensor nodes, a Jetson Nano, and a local dashboard connect sensing, control, and remote monitoring.", "/articles/from-iot-to-edge-cloud/", "/images/gallery/grafana-july-2026.png"],
  ] : [
    ["Mikroklimat spasial", "AC mendinginkan kebun—tetapi tidak merata", "Pada 544 waktu pengamatan tersinkron, suhu rata-rata turun sementara rentang spasial meningkat. Pelajari mengapa evaluasi pendinginan membutuhkan banyak sensor.", "/id/artikel/ac-dan-keseragaman-mikroklimat/", "/images/gallery/container-overview.jpg"],
    ["Kontrol iklim", "Suhu yang baik belum cukup", "Pengamatan 48,1 jam mengungkap keterbatasan kelembapan malam. Baca temuan VPD dan batas interpretasinya.", "/id/artikel/vpd-container-farm/", "/images/gallery/pakchoi-racks.jpg"],
    ["IoT · Edge · Cloud", "Dari pembacaan sensor ke keputusan lokal", "Bagaimana 27 node sensor, Jetson Nano, dan dashboard lokal menghubungkan pengukuran, kontrol, dan monitoring daring.", "/id/artikel/dari-iot-ke-edge-cloud/", "/images/gallery/grafana-july-2026.png"],
  ];
  return <section id="research-stories" className="scroll-mt-24 bg-white py-16 md:py-24"><div className="mx-auto max-w-7xl px-5 md:px-8">
    <div className="flex flex-wrap items-end justify-between gap-5"><div><p className="text-xs uppercase tracking-[0.2em] text-teal-deep">{en ? "Research stories" : "Cerita riset"}</p><h2 className="font-display mt-3 max-w-3xl text-4xl text-forest-deep md:text-5xl">{en ? "What can one container teach us?" : "Apa yang dapat dipelajari dari satu kontainer?"}</h2></div><a href="#projects" className="text-sm font-medium text-teal-deep underline underline-offset-4">{en ? "Research directions →" : "Arah riset →"}</a></div>
    <div className="mt-10 grid gap-8 lg:grid-cols-2">
      {stories.map(([category,title,summary,href,src], index) => <article key={href} className={index === 0 ? "row-span-2 overflow-hidden border border-[var(--line)] bg-cream-soft" : "grid gap-5 border-b border-[var(--line)] pb-6 sm:grid-cols-[0.42fr_0.58fr]"}>
        <Image src={src} alt={category} width={1280} height={960} sizes="(min-width: 1024px) 45vw, 100vw" className={index === 0 ? "h-auto w-full" : "h-auto w-full self-start"} />
        <div className={index === 0 ? "p-6 md:p-8" : "min-w-0"}><p className="text-xs uppercase tracking-widest text-teal-deep">{category}</p><h3 className={`font-display mt-3 leading-tight text-forest-deep ${index === 0 ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"}`}><Link href={href} className="hover:underline underline-offset-4">{title}</Link></h3><p className="mt-4 text-sm leading-7 text-muted">{summary}</p><Link href={href} className="mt-5 inline-block text-sm font-medium text-teal-deep underline underline-offset-4">{en ? "Read the story →" : "Baca cerita →"}</Link></div>
      </article>)}
    </div>
  </div></section>;
}

export function CollaborationPaths({ locale = "en" }: { locale?: "en" | "id" }) {
  const en = locale === "en";
  const href = en ? "/collaboration/" : "/id/kolaborasi/";
  const paths = en ? [
    ["For researchers", "Develop a joint study", "Discuss experimental questions, sensor data, microclimate methods, and control evaluation.", "Discuss joint research →", href],
    ["For industry & government", "Scope a practical pilot", "Explore sensing, monitoring, microclimate audits, and control prototypes with measurable outcomes.", "Explore pilot support →", href],
    ["For students & educators", "Learn through real systems", "Find teaching materials, explore supervision, or discuss focused technical training.", "Explore learning resources →", "/#resources"],
  ] : [
    ["Untuk peneliti", "Susun studi bersama", "Diskusikan pertanyaan eksperimen, data sensor, metode mikroklimat, dan evaluasi kontrol.", "Diskusikan riset bersama →", href],
    ["Untuk industri & pemerintah", "Rancang pilot penerapan", "Jajaki sensor, monitoring, audit mikroklimat, dan prototipe kontrol dengan keluaran terukur.", "Jelajahi dukungan pilot →", href],
    ["Untuk mahasiswa & pengajar", "Belajar dari sistem nyata", "Temukan materi ajar, informasi bimbingan, atau diskusikan pelatihan teknis terarah.", "Jelajahi sumber belajar →", "/id/#resources"],
  ];
  return <section id="contact" className="scroll-mt-24 bg-forest-deep py-16 text-cream md:py-24"><div className="mx-auto max-w-7xl px-5 md:px-8"><p className="text-xs uppercase tracking-[0.2em] text-teal-bright">{en ? "Collaborate with Tobafarm" : "Berkolaborasi dengan Tobafarm"}</p><h2 className="font-display mt-3 max-w-3xl text-4xl md:text-5xl">{en ? "Bring a question. Build a testable plan." : "Mulai dari pertanyaan. Susun rencana yang teruji."}</h2><p className="mt-5 max-w-2xl leading-7 text-cream/75">{en ? "Choose the path closest to your needs. Scope, facilities, timelines, and deliverables are discussed before work begins." : "Pilih jalur sesuai kebutuhan. Lingkup, fasilitas, jadwal, dan keluaran dibahas sebelum pekerjaan dimulai."}</p><div className="mt-10 grid gap-8 md:grid-cols-3">{paths.map(([audience,title,body,label,url],i) => <article key={title} className="flex flex-col border-t border-white/25 pt-6"><p className="text-xs uppercase tracking-widest text-teal-bright">0{i+1} · {audience}</p><h3 className="font-display mt-4 text-3xl">{title}</h3><p className="mt-4 flex-1 text-sm leading-7 text-cream/75">{body}</p><Link href={url} className="mt-6 text-sm font-medium text-teal-bright underline underline-offset-4">{label}</Link></article>)}</div></div></section>;
}

export function ResourceLinks({ locale = "en" }: { locale?: "en" | "id" }) {
  const en = locale === "en";
  const links = en ? [["Publications & community engagement", "/publications/"], ["Teaching materials", "/teaching/"], ["Students & supervision", "/supervision/"]] : [["Publikasi & pengabdian masyarakat", "/id/publikasi/"], ["Materi ajar", "/id/materi-ajar/"], ["Mahasiswa & bimbingan", "/id/bimbingan/"]];
  return <section id="resources" className="scroll-mt-24 bg-cream py-14"><div className="mx-auto max-w-7xl px-5 md:px-8"><h2 className="font-display text-3xl text-forest-deep">{en ? "Resources & academic work" : "Sumber belajar & karya akademik"}</h2><div className="mt-7 grid gap-4 md:grid-cols-3">{links.map(([label,href]) => <Link key={href} href={href} className="border-b border-forest/25 py-4 font-medium text-forest-deep hover:text-teal-deep">{label} →</Link>)}</div></div></section>;
}
