import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bangkit Penelitian Indonesia: Semangat Sumpah Pemuda 2026",
  description: "Refleksi Kangabet tentang Sumpah Pemuda, kemandirian riset, pendidikan tinggi, dan inovasi yang berdampak bagi Indonesia.",
  alternates: { canonical: "/articles/bangkit-penelitian-indonesia-sumpah-pemuda-2026/" },
  openGraph: { type: "article", title: "Bangkit Penelitian Indonesia", description: "Dari semangat persatuan menuju gerakan riset dan inovasi yang berdampak.", publishedTime: "2026-10-28" },
};

export default function Page() {
  return <div className="min-h-screen bg-cream-soft"><Header locale="en" />
    <main className="mx-auto max-w-4xl px-5 py-16 md:py-24">
      <Link href="/" className="text-sm text-teal-deep hover:underline">← TobaFarm</Link>
      <p className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-red-700">Opini · Hari Sumpah Pemuda · 28 Oktober 2026</p>
      <h1 className="font-display mt-4 text-4xl leading-tight text-forest-deep md:text-6xl">Bangkit Penelitian Indonesia</h1>
      <p className="mt-5 text-xl leading-8 text-muted">Memaknai Sumpah Pemuda melalui ilmu pengetahuan, inovasi, dan karya nyata.</p>
      <p className="mt-5 text-sm text-muted">Oleh <strong>Kangabet</strong> · Dosen dan Peneliti</p>
      <div className="my-10 h-1 w-28 bg-red-600" />
      <article className="space-y-7 text-lg leading-9 text-forest-deep">
        <p>Pada 28 Oktober 1928, para pemuda dari berbagai daerah menyatakan satu tanah air, satu bangsa, dan menjunjung bahasa persatuan: Indonesia. Sumpah Pemuda bukan hanya peristiwa sejarah yang kita kenang setiap tahun. Ia adalah keputusan kolektif untuk melampaui perbedaan dan bekerja bagi masa depan yang sama.</p>
        <p>Hampir satu abad kemudian, tantangan yang kita hadapi telah berubah. Kemerdekaan politik harus diikuti kemampuan membangun ilmu pengetahuan, menguasai teknologi, dan menyelesaikan persoalan bangsa dengan kekuatan sendiri. Karena itu, peringatan Sumpah Pemuda tahun ini saya maknai sebagai ajakan: <strong>bangkit penelitian Indonesia!</strong></p>
        <h2 className="font-display pt-5 text-3xl">Dari semangat persatuan menuju kemandirian pengetahuan</h2>
        <p>Indonesia memiliki banyak perguruan tinggi, mahasiswa, dosen, peneliti, dan komunitas inovasi. Namun jumlah kegiatan akademik saja tidak cukup untuk menunjukkan kemajuan. Pertanyaan yang lebih penting adalah: masalah apa yang berhasil kita pecahkan, teknologi apa yang mampu kita kembangkan, dan siapa yang merasakan manfaatnya?</p>
        <p>Penelitian tidak boleh berhenti sebagai dokumen yang tersimpan di repositori atau artikel yang hanya dibaca sesama akademisi. Publikasi ilmiah tetap penting karena memungkinkan pengetahuan diuji secara terbuka. Tetapi publikasi seharusnya menjadi bagian dari perjalanan yang lebih panjang: validasi, replikasi, pengembangan teknologi, dan pemanfaatan oleh masyarakat.</p>
        <h2 className="font-display pt-5 text-3xl">Perguruan tinggi harus menjadi tempat lahirnya solusi</h2>
        <p>Sebagai dosen dan peneliti, saya percaya ruang kelas dan laboratorium harus saling terhubung. Mahasiswa perlu belajar merumuskan pertanyaan yang tepat, mengumpulkan data secara bertanggung jawab, menguji hipotesis, dan mengakui keterbatasan hasilnya. Keberanian berpikir kritis lebih berharga daripada sekadar kemampuan mengulang jawaban.</p>
        <p>Indonesia menghadapi tantangan konkret dalam ketahanan pangan, energi, lingkungan, kesehatan, dan transformasi digital. Bidang-bidang tersebut membutuhkan kolaborasi lintas disiplin. Insinyur perlu bekerja bersama ahli pertanian, ilmuwan data, ekonom, pelaku industri, pemerintah, dan masyarakat setempat.</p>
        <h2 className="font-display pt-5 text-3xl">Riset pertanian cerdas sebagai salah satu contoh</h2>
        <p>Dalam pertanian, misalnya, sensor lingkungan, Internet of Things, kecerdasan buatan, dan sistem kendali dapat membantu kita memahami kondisi budidaya secara lebih rinci. Tetapi teknologi bukan tujuan akhir. Nilainya harus dibuktikan melalui pengukuran yang dapat dipercaya, penghematan sumber daya, peningkatan ketahanan sistem, dan manfaat bagi petani.</p>
        <p>Eksperimen di fasilitas pertanian dalam ruang memperlihatkan pentingnya mengukur variasi suhu dan kelembapan antarposisi, bukan hanya mengandalkan satu angka rata-rata. Temuan seperti ini mengingatkan kita bahwa penelitian yang berguna sering dimulai dari masalah yang terlihat sederhana, lalu diuji dengan metode yang disiplin.</p>
        <p>Kita juga harus berhati-hati terhadap klaim berlebihan. Sebuah prototipe belum tentu siap diterapkan secara luas; hasil simulasi belum sama dengan keberhasilan di lapangan. Riset Indonesia akan lebih kuat apabila kita terbuka tentang data, batasan eksperimen, biaya, dan kegagalan yang masih perlu diperbaiki.</p>
        <h2 className="font-display pt-5 text-3xl">Empat komitmen untuk generasi peneliti</h2>
        <p><strong>Berpikir kritis.</strong> Mulailah dari persoalan nyata, bukan semata tren teknologi. Pertanyakan asumsi, periksa kualitas data, dan bedakan bukti dari opini.</p>
        <p><strong>Berinovasi.</strong> Ubah pengetahuan menjadi rancangan, metode, perangkat, atau kebijakan yang dapat diuji. Inovasi membutuhkan eksperimen berulang, bukan hanya slogan.</p>
        <p><strong>Berkolaborasi.</strong> Bangun kerja sama lintas kampus, daerah, disiplin, dan generasi. Semangat Sumpah Pemuda mengajarkan bahwa tujuan bersama lebih besar daripada batas organisasi.</p>
        <p><strong>Berkontribusi.</strong> Ukur keberhasilan bukan hanya dari banyaknya kegiatan, melainkan juga dari pengetahuan yang dihasilkan, solusi yang tervalidasi, dan manfaat yang benar-benar sampai kepada masyarakat.</p>
        <h2 className="font-display pt-5 text-3xl">Sumpah Pemuda adalah pekerjaan yang belum selesai</h2>
        <p>Persatuan tidak cukup dinyatakan dalam upacara. Persatuan perlu terlihat dalam kesediaan berbagi pengetahuan, membuka kesempatan bagi peneliti muda, memperkuat integritas akademik, dan membangun ekosistem penelitian yang tidak hanya berpusat di kota-kota besar.</p>
        <p>Pada Hari Sumpah Pemuda ini, mari memperbarui janji kita: bukan hanya bangga menjadi bangsa Indonesia, tetapi juga bekerja agar Indonesia semakin mampu menciptakan pengetahuannya sendiri.</p>
        <p className="font-display text-2xl font-bold text-red-700">Pemuda berilmu. Pemuda berkarya. Bangkit penelitian Indonesia!</p>
        <p className="text-base italic text-muted">— Kangabet, Dosen dan Peneliti</p>
      </article>
      <p className="mt-12 border-t border-gray-300 pt-5 text-sm text-muted">Catatan visual: flyer peringatan Sumpah Pemuda dirancang dengan bantuan AI dan merupakan ilustrasi, bukan dokumentasi fotografis peristiwa sejarah atau potret autentik.</p>
    </main><Footer locale="en" /></div>;
}
