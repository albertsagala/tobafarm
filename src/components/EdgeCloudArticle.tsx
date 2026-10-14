import Link from "next/link";
import { Cloud, Database, Gauge, Radio, Server, Settings2, ShieldCheck } from "lucide-react";
import { ArticleJsonLd } from "@/components/ArticleJsonLd";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { Logo } from "@/components/Logo";
import { RelatedArticles } from "@/components/RelatedArticles";
import { site } from "@/lib/site";

type Locale = "en" | "id";
const paths = { en: "/articles/from-iot-to-edge-cloud/", id: "/id/artikel/dari-iot-ke-edge-cloud/" };

const copy = {
 en: {
  eyebrow:"IoT · Edge computing · Research infrastructure",
  title:"From IoT to Edge-to-Cloud: A Resilient Architecture for Container Farming",
  dek:"Twenty-seven sensor nodes feed a Jetson Nano and a local server. Climate decisions remain local, while Cloudflare Tunnel makes dashboards available online without turning internet access into a control dependency.",
  date:"14 October 2026", back:"Back to articles", flow:"The operational data path",
  flowIntro:"The important design choice is not simply connecting devices to the internet. It is deciding which functions must survive when the internet does not.",
  stages:[
   ["1","27 sensor nodes","Measure spatial temperature and humidity across the container farm."],
   ["2","Jetson Nano at the edge","Receives observations and supplies fresh local data to the control logic."],
   ["3","Local storage & dashboard","Retains sensor histories, actuator states, and operational traces for analysis."],
   ["4","Local climate control","Commands the AC, humidifier, and CO₂ solenoid without waiting for a cloud round trip."],
   ["5","Cloudflare Tunnel","Publishes the monitoring service through an outbound tunnel for authorized remote access."],
  ],
  sections:[
   ["Why the architecture begins with 27 nodes",["A container farm is small, but its microclimate is not necessarily uniform. Airflow, rack obstruction, lighting, cooling distance, and plant density can make one location behave differently from another. Twenty-seven nodes provide a spatial view that a single wall-mounted sensor cannot.","The value of this network is not the device count itself. The value is synchronized evidence: where temperature and humidity diverge, which zones recover slowly, and whether an actuator improves the whole room or only the area near it."]],
   ["Why control stays at the edge",["The Jetson Nano sits close to the physical process. Fresh sensor values can be evaluated locally and translated into commands for the AC, humidifier, and CO₂ system. This avoids making a safety-critical climate loop depend on internet latency or cloud availability.","The practical rule is simple: the cloud may support visibility, reporting, and model development, but the container must remain controllable when the WAN link fails. An internet outage should remove remote visibility—not stop climate regulation."]],
   ["Local storage creates an auditable experiment",["Sensor readings alone are insufficient. The system also records actuator status so researchers can reconstruct cause and effect: when the AC switched, how humidity responded, whether CO₂ injection coincided with lighting, and how long spatial recovery took.","Keeping time-series data locally reduces bandwidth dependence and preserves high-resolution records. It also enables later comparison of rule-based, PID, or learning-based controllers using the same evidence trail. Clock synchronization, node identifiers, missing-data flags, and actuator acknowledgements should therefore be treated as research data—not implementation details."]],
   ["What Cloudflare Tunnel actually does",["The local dashboard is made reachable online through Cloudflare Tunnel. The cloudflared connector initiates outbound connections, so the origin does not need a publicly routable IP address or an open inbound port. A public hostname can then be mapped to the local monitoring service.","The tunnel is an access path, not the database and not the control algorithm. That distinction matters. If the tunnel is interrupted, local collection and control should continue. When connectivity returns, remote monitoring becomes available again without changing the control loop."]],
   ["Security boundary: monitoring is not control",["Remote dashboards should be read-only by default. If remote commands are ever enabled, they require stronger identity checks, role-based authorization, audit logs, rate limits, safe command ranges, and a local interlock that can reject unsafe requests.","A tunnel reduces direct network exposure, but it does not automatically make an application safe. Protect the hostname with an access policy, patch the dashboard and cloudflared, separate monitoring credentials from control credentials, and never expose raw device brokers or databases directly."]],
   ["A reusable pattern for other smart farms",["This architecture scales conceptually even when the hardware changes: distributed sensing, local decision-making, durable local records, and controlled remote access. A Raspberry Pi, industrial PC, or other edge computer can replace the Jetson if the workload does not require its GPU.","Start with reliability before adding AI. Verify sensor health, timestamps, watchdogs, manual override, fail-safe actuator states, and recovery after power loss. A sophisticated model running on an unreliable data pipeline is not intelligent control; it is an unverified risk."]],
  ],
  takeaway:"The useful definition of “IoT to cloud” is not that every measurement leaves the farm. It is that local operation remains autonomous while selected information becomes securely observable from anywhere.",
  checklist:"Implementation checklist",
  checks:["Unique node ID and synchronized timestamp","Local buffering during network interruption","Sensor-quality and missing-data flags","Actuator command plus acknowledgement logging","Manual override and fail-safe actuator states","Read-only remote dashboard by default","Authenticated Cloudflare access policy","Backup, retention, and recovery test"],
  refs:"Technical references",
  cf:"Cloudflare Tunnel documentation", nv:"NVIDIA JetPack SDK documentation",
 },
 id: {
  eyebrow:"IoT · Edge computing · Infrastruktur riset",
  title:"Dari IoT ke Edge-to-Cloud: Arsitektur Tangguh untuk Container Farm",
  dek:"Dua puluh tujuh node sensor mengirimkan data ke Jetson Nano dan server lokal. Keputusan iklim tetap berjalan di edge, sedangkan Cloudflare Tunnel membuat dashboard dapat diakses secara daring tanpa menjadikan internet sebagai syarat kontrol.",
  date:"14 Oktober 2026", back:"Kembali ke artikel", flow:"Alur data operasional",
  flowIntro:"Keputusan desain terpenting bukan sekadar menghubungkan perangkat ke internet, melainkan menentukan fungsi apa yang harus tetap hidup ketika internet terputus.",
  stages:[
   ["1","27 node sensor","Mengukur suhu dan kelembapan secara spasial di seluruh container farm."],
   ["2","Jetson Nano di edge","Menerima observasi dan menyediakan data lokal terbaru bagi logika kontrol."],
   ["3","Penyimpanan & dashboard lokal","Merekam histori sensor, status aktuator, dan jejak operasi untuk analisis."],
   ["4","Kontrol iklim lokal","Mengendalikan AC, humidifier, dan solenoid CO₂ tanpa menunggu respons cloud."],
   ["5","Cloudflare Tunnel","Mempublikasikan layanan monitoring melalui tunnel keluar untuk akses jarak jauh yang terotorisasi."],
  ],
  sections:[
   ["Mengapa arsitektur dimulai dari 27 node",["Container farm berukuran kecil, tetapi mikroklimatnya belum tentu seragam. Aliran udara, hambatan rak, lampu, jarak dari AC, dan kerapatan tanaman dapat membuat setiap lokasi berperilaku berbeda. Dua puluh tujuh node memberi gambaran spasial yang tidak mungkin diberikan oleh satu sensor di dinding.","Nilai jaringan ini bukan terletak pada banyaknya perangkat. Nilainya adalah bukti yang tersinkronisasi: lokasi mana yang menyimpang, zona mana yang lambat pulih, dan apakah suatu aktuator memperbaiki seluruh ruang atau hanya area di dekatnya."]],
   ["Mengapa kontrol harus tetap berada di edge",["Jetson Nano ditempatkan dekat dengan proses fisik. Nilai sensor terbaru dapat dievaluasi secara lokal dan diterjemahkan menjadi perintah untuk AC, humidifier, dan sistem CO₂. Dengan demikian, loop kontrol tidak bergantung pada latensi internet maupun ketersediaan layanan cloud.","Aturannya tegas: cloud boleh membantu visibilitas, pelaporan, dan pengembangan model, tetapi container harus tetap dapat dikendalikan saat koneksi WAN gagal. Gangguan internet seharusnya hanya menghilangkan monitoring jarak jauh, bukan menghentikan pengaturan iklim."]],
   ["Penyimpanan lokal membuat eksperimen dapat diaudit",["Pembacaan sensor saja tidak cukup. Sistem juga merekam status aktuator agar peneliti dapat menelusuri sebab-akibat: kapan AC menyala, bagaimana kelembapan berubah, apakah injeksi CO₂ bertepatan dengan pencahayaan, dan berapa lama pemulihan spasial berlangsung.","Penyimpanan runtun waktu secara lokal mengurangi ketergantungan bandwidth dan mempertahankan data resolusi tinggi. Sinkronisasi waktu, identitas node, penanda data hilang, dan acknowledgement aktuator harus diperlakukan sebagai data riset, bukan detail pemrograman."]],
   ["Apa yang sebenarnya dilakukan Cloudflare Tunnel",["Dashboard lokal dapat diakses daring melalui Cloudflare Tunnel. Konektor cloudflared membentuk koneksi keluar sehingga origin tidak memerlukan alamat IP publik atau port masuk yang dibuka. Hostname publik kemudian diarahkan ke layanan monitoring lokal.","Tunnel adalah jalur akses—bukan basis data dan bukan algoritma kontrol. Jika tunnel terputus, pengumpulan data dan kontrol lokal harus terus berjalan. Saat koneksi kembali, monitoring jarak jauh tersedia lagi tanpa mengubah loop kontrol."]],
   ["Batas keamanan: monitoring bukan kontrol",["Dashboard jarak jauh sebaiknya hanya-baca secara default. Jika perintah jarak jauh kelak diaktifkan, sistem memerlukan autentikasi yang lebih kuat, otorisasi berbasis peran, audit log, rate limit, rentang perintah aman, dan interlock lokal yang mampu menolak perintah berbahaya.","Tunnel mengurangi paparan jaringan langsung, tetapi tidak otomatis membuat aplikasi aman. Lindungi hostname dengan kebijakan akses, perbarui dashboard dan cloudflared, pisahkan kredensial monitoring dari kontrol, serta jangan pernah mengekspos broker perangkat atau basis data mentah secara langsung."]],
   ["Pola yang dapat digunakan smart farm lain",["Pola ini tetap berlaku meskipun perangkat kerasnya berubah: sensing terdistribusi, keputusan lokal, rekaman lokal yang tahan gangguan, dan akses jarak jauh yang terkendali. Raspberry Pi, industrial PC, atau komputer edge lain dapat menggantikan Jetson bila beban kerja tidak membutuhkan GPU.","Mulailah dari keandalan sebelum menambahkan AI. Uji kesehatan sensor, timestamp, watchdog, manual override, kondisi fail-safe aktuator, dan pemulihan setelah listrik padam. Model canggih di atas pipeline data yang rapuh bukan kontrol cerdas, melainkan risiko yang belum diverifikasi."]],
  ],
  takeaway:"Makna “IoT to cloud” yang berguna bukan semua data harus meninggalkan fasilitas. Operasi lokal harus tetap otonom, sementara informasi terpilih dapat diamati secara aman dari mana saja.",
  checklist:"Checklist implementasi",
  checks:["ID node unik dan timestamp tersinkronisasi","Buffer lokal saat jaringan terputus","Penanda kualitas sensor dan data hilang","Pencatatan perintah serta acknowledgement aktuator","Manual override dan kondisi fail-safe aktuator","Dashboard jarak jauh hanya-baca secara default","Kebijakan akses Cloudflare yang terautentikasi","Uji backup, retensi, dan pemulihan"],
  refs:"Referensi teknis", cf:"Dokumentasi Cloudflare Tunnel", nv:"Dokumentasi NVIDIA JetPack SDK",
 }
} as const;

export function EdgeCloudArticle({locale}:{locale:Locale}) {
 const t=copy[locale], path=paths[locale];
 const icons=[Radio,Server,Database,Settings2,Cloud];
 return <div className="min-h-screen bg-cream-soft">
  <ArticleJsonLd headline={t.title} description={t.dek} path={path} datePublished="2026-10-14" locale={locale}/>
  <header className="border-b border-white/10 bg-navy"><div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 md:px-8"><Link href={locale==="en"?"/":"/id/"} className="text-cream"><Logo/></Link><div className="flex items-center gap-3"><LanguageSwitch locale={locale} enHref={paths.en} idHref={paths.id}/><Link href={locale==="en"?"/#articles":"/id/#articles"} className="hidden rounded-full border border-teal/50 px-4 py-2 text-sm text-teal-bright sm:block">{t.back}</Link></div></div></header>
  <main id="main"><article>
   <section className="bg-navy text-cream"><div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24"><p className="text-xs uppercase tracking-[0.22em] text-teal-bright">{t.eyebrow} · {t.date}</p><h1 className="font-display mt-5 max-w-4xl text-4xl leading-tight md:text-6xl">{t.title}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-cream/75">{t.dek}</p><p className="mt-7 text-sm text-cream/60">Albert Sagala · Toba Smart Farming</p></div></section>
   <section className="border-b border-[var(--line)] bg-white"><div className="mx-auto max-w-6xl px-5 py-16 md:px-8"><p className="text-xs uppercase tracking-[0.22em] text-teal-deep">{t.flow}</p><p className="mt-3 max-w-3xl text-lg leading-8 text-muted">{t.flowIntro}</p><div className="mt-9 grid gap-4 md:grid-cols-5">{t.stages.map((stage,i)=>{const Icon=icons[i];return <div key={stage[0]} className="relative rounded-2xl border border-[var(--line)] bg-cream-soft p-5"><span className="text-xs font-semibold text-teal-deep">{stage[0].padStart(2,"0")}</span><Icon className="mt-6 h-6 w-6 text-forest" aria-hidden/><h2 className="font-display mt-4 text-xl text-forest-deep">{stage[1]}</h2><p className="mt-2 text-sm leading-6 text-muted">{stage[2]}</p></div>})}</div></div></section>
   <div className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-20">{t.sections.map(([title,paras],i)=><section key={title} className={i?"mt-14":""}><h2 className="font-display text-3xl text-forest-deep md:text-4xl">{title}</h2><div className="mt-5 space-y-5 text-[1.05rem] leading-8 text-muted">{paras.map(p=><p key={p}>{p}</p>)}</div></section>)}
    <aside className="mt-14 rounded-3xl bg-forest-deep p-7 text-cream md:p-9"><Gauge className="h-7 w-7 text-teal-bright" aria-hidden/><p className="font-display mt-5 text-3xl leading-snug">{t.takeaway}</p></aside>
    <section className="mt-14"><div className="flex items-center gap-3"><ShieldCheck className="h-7 w-7 text-teal-deep"/><h2 className="font-display text-3xl text-forest-deep">{t.checklist}</h2></div><div className="mt-6 grid gap-3 sm:grid-cols-2">{t.checks.map(x=><div key={x} className="flex gap-3 rounded-2xl border border-[var(--line)] bg-white p-4"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-teal-deep"/><p className="leading-6 text-muted">{x}</p></div>)}</div></section>
    <section className="mt-14 border-t border-[var(--line)] pt-8"><h2 className="font-display text-2xl text-forest-deep">{t.refs}</h2><div className="mt-4 flex flex-wrap gap-3"><a href="https://developers.cloudflare.com/tunnel/" target="_blank" rel="noreferrer" className="rounded-full border border-forest/20 px-4 py-2 text-sm text-forest hover:border-teal-deep">{t.cf}</a><a href="https://docs.nvidia.com/jetson/jetpack/introduction/" target="_blank" rel="noreferrer" className="rounded-full border border-forest/20 px-4 py-2 text-sm text-forest hover:border-teal-deep">{t.nv}</a></div></section>
   </div>
  </article></main>
  <RelatedArticles currentPath={path} locale={locale}/>
  <footer className="bg-navy text-cream/70"><div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-8 text-sm md:flex-row md:items-center md:justify-between md:px-8"><p>© 2026 {site.name}</p><Link href={locale==="en"?"/":"/id/"} className="text-teal-bright underline underline-offset-4">{locale==="en"?"Back to home":"Kembali ke beranda"}</Link></div></footer>
 </div>;
}
