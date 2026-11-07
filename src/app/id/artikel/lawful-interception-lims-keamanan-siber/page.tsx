import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const title = "Lawful Interception Management System (LIMS): Arsitektur, Kontrol Keamanan, dan Audit Forensik";
export const metadata: Metadata = {
  title,
  description: "Tinjauan akademik arsitektur lawful interception menurut ETSI, kontrol akses, insider threat, audit log, dan forensik digital berdasarkan panduan NIST.",
  alternates: { canonical: "/id/artikel/lawful-interception-lims-keamanan-siber/" },
  openGraph: { type: "article", title, publishedTime: "2026-11-07", authors: ["Albert Sagala"] },
};

const sections = [
  { title: "Apa itu LIMS?", paragraphs: [
    "Lawful interception (LI) adalah intersepsi komunikasi berdasarkan kewenangan hukum yang berlaku. Istilah Lawful Interception Management System (LIMS) lazim digunakan untuk sistem yang membantu mengelola permintaan, identitas target, konfigurasi intersepsi, dan pencatatan aktivitas. LIMS bukan nama satu perangkat universal yang distandardisasi secara tunggal oleh ETSI; fungsi manajemennya dapat tersebar pada sejumlah komponen dan berbeda menurut implementasi vendor.",
    "Standar teknis menjelaskan cara fungsi sistem berinteraksi, tetapi tidak dengan sendirinya memberikan kewenangan hukum untuk menyadap. Legalitas setiap intersepsi tetap bergantung pada peraturan dan prosedur otorisasi di yurisdiksi terkait."
  ]},
  { title: "Arsitektur dan antarmuka intersepsi", paragraphs: [
    "Pada model arsitektur ETSI, Administration Function (ADMF) menangani aspek administratif pada domain penyedia layanan. Internal Interception Function (IIF) menghasilkan informasi dari fungsi jaringan; Mediation Function (MF) dan Delivery Function (DF) menyiapkan serta menyerahkan informasi ke Law Enforcement Monitoring Facility (LEMF) yang berwenang. Ini adalah fungsi logis, bukan keharusan bahwa setiap fungsi berada pada perangkat fisik terpisah.",
    "Tiga handover interface penting adalah HI1 untuk informasi administratif, HI2 untuk Intercept Related Information (IRI), dan HI3 untuk Content of Communication (CC). IRI dapat memuat informasi sesi dan waktu komunikasi; CC merujuk pada isi komunikasi yang secara teknis tersedia dan termasuk cakupan otorisasi. Pemisahan antarmuka secara logis tidak otomatis membatasi akses pengguna: kontrol keamanan tambahan tetap diperlukan.",
    "Enkripsi ujung-ke-ujung membatasi kemampuan operator jaringan membaca isi pesan aplikasi yang dilindungi. Karena itu, keberadaan sistem LI pada operator tidak berarti semua komunikasi digital dapat diakses dalam bentuk terbaca."
  ]},
  { title: "Kontrol keamanan dan ancaman internal", paragraphs: [
    "Karena fungsi LI menyangkut informasi yang sangat sensitif, risiko utama mencakup penyalahgunaan hak istimewa, akses di luar kewenangan, perubahan konfigurasi tanpa persetujuan, serta manipulasi catatan aktivitas. Ancaman dapat berasal dari orang dalam yang menyalahgunakan akses maupun akun sah yang telah dikompromikan.",
    "Kontrol yang direkomendasikan mencakup least privilege, role-based access control (RBAC), multi-factor authentication (MFA), privileged access management, enkripsi, dan separation of duties. Persetujuan otorisasi, aktivasi teknis, akses hasil, dan pemeriksaan audit sebaiknya tidak berada di bawah kendali tanpa pengawasan satu pihak.",
    "Pencatatan tahan manipulasi dan korelasi lintas sistem melalui Security Information and Event Management (SIEM) membantu mendeteksi ketidaksesuaian antara permintaan administratif, aktivasi target, dan akses hasil. Penerapan kontrol-kontrol ini merupakan rekomendasi desain, bukan klaim bahwa seluruh produk LIMS mengimplementasikannya."
  ]},
  { title: "Audit log dan investigasi forensik", paragraphs: [
    "Audit log yang relevan dapat mencatat identitas akun, waktu kejadian, referensi otorisasi, aktivasi atau penghentian target, perubahan konfigurasi, akses hasil, dan tindakan administratif. Panduan NIST SP 800-92 menekankan pengelolaan log secara sistematis; NIST SP 800-86 menjelaskan penggunaan teknik forensik dalam penanganan insiden.",
    "Sebagai ilustrasi hipotetis, log dapat menunjukkan aktivasi target pada pukul 08.02, akses hasil pada pukul 08.05, lalu kegagalan validasi referensi otorisasi pada pukul 08.10. Urutan itu patut ditelusuri, tetapi belum membuktikan penyadapan ilegal. Pemeriksa perlu mengetahui apakah validasi sebelumnya terjadi pada sistem lain, apakah jam tersinkronisasi, dan bagaimana alur persetujuan dirancang.",
    "Apabila suatu catatan hilang, auditor dapat membandingkan arsip atau cadangan yang tersedia, catatan autentikasi, dan log jaringan. Ketiadaan log tidak otomatis berarti ada penghapusan yang disengaja. Bukti harus dijaga integritasnya dan didokumentasikan melalui chain of custody; identitas akun dalam log juga belum cukup untuk memastikan siapa orang yang mengoperasikannya."
  ]},
  { title: "Batasan analisis dan kesimpulan", paragraphs: [
    "Artikel ini menjelaskan arsitektur dan prinsip pengamanan secara konseptual. Contoh audit adalah simulasi pembelajaran dan tidak mewakili bukti atau konfigurasi sistem dalam perkara penyadapan tertentu. Dugaan keterlibatan individu dalam kasus aktual memerlukan verifikasi tersendiri melalui sumber primer dan proses hukum.",
    "Pelajaran utamanya adalah bahwa kemampuan teknis intersepsi harus disertai otorisasi yang sah, pembatasan akses, pemisahan kewenangan, pencatatan yang dapat diuji, dan pemeriksaan independen. Dalam keamanan siber, akuntabilitas merupakan bagian dari desain sistem, bukan sekadar prosedur setelah insiden."
  ]}
];
const references = [
  { label: "ETSI TS 101 671 — Handover Interface for the Lawful Interception of Telecommunications Traffic", url: "https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.14.01_60/ts_101671v031401p.pdf" },
  { label: "ETSI — Lawful Interception technical group (termasuk TS 102 232-1 dan TS 103 120)", url: "https://www.etsi.org/technical-groups/li/" },
  { label: "NIST SP 800-92 — Guide to Computer Security Log Management", url: "https://doi.org/10.6028/NIST.SP.800-92" },
  { label: "NIST SP 800-86 — Guide to Integrating Forensic Techniques into Incident Response", url: "https://doi.org/10.6028/NIST.SP.800-86" }
];
export default function Page() {
  return <div className="min-h-screen bg-cream-soft"><Header locale="id" /><main id="main"><article className="mx-auto max-w-3xl px-5 py-16 md:py-24">
    <Link href="/id/#articles" className="text-sm font-medium text-teal-deep">← Kembali ke artikel</Link>
    <p className="mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-teal-deep">Keamanan Siber · Telekomunikasi · Forensik Digital</p>
    <h1 className="font-display mt-4 text-4xl leading-tight text-forest-deep md:text-6xl">{title}</h1>
    <p className="mt-6 text-xl leading-8 text-muted">Bagaimana intersepsi komunikasi dikelola secara terotorisasi, dan bagaimana penyalahgunaan akses dapat ditelusuri melalui kontrol keamanan serta audit digital?</p>
    <p className="mt-5 text-sm text-muted">7 November 2026 · Albert Sagala · Artikel teknis berbasis standar</p>
    <div className="mt-12 space-y-7 text-lg leading-8 text-ink">
      {sections.map(section => <section key={section.title} className="pt-4"><h2 className="font-display mb-5 text-3xl text-forest-deep md:text-4xl">{section.title}</h2><div className="space-y-5">{section.paragraphs.map((p,i)=><p key={i}>{p}</p>)}</div></section>)}
      <section className="pt-6"><h2 className="font-display mb-5 text-3xl text-forest-deep">Referensi</h2><ol className="list-decimal space-y-3 pl-6 text-base">{references.map(r=><li key={r.url}><a className="text-teal-deep underline underline-offset-4 break-words" href={r.url} target="_blank" rel="noopener noreferrer">{r.label}</a></li>)}</ol></section>
    </div>
  </article></main><Footer locale="id" /></div>;
}
