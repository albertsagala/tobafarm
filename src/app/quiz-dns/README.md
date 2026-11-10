# Kuis DNS dan Internetworking
60 soal, 30 menit. Mahasiswa memasukkan nama, NIM, dan token sebelum memulai. Setelah submit, halaman hasil menampilkan identitas, nilai, jumlah benar, dan waktu WIB untuk screenshot dan pengiriman manual ke WhatsApp Group.

Konfigurasi server (jangan commit nilainya):
- DNS_QUIZ_TOKEN: token ujian yang ditentukan dosen
- DNS_QUIZ_SESSION_SECRET: string acak panjang untuk tanda tangan sesi

Tidak menggunakan database; tidak ada penyimpanan jawaban/nilai di server. Screenshot dapat dimanipulasi dan mahasiswa dapat mengulang. Sesi hanya diverifikasi menggunakan cookie bertanda tangan dan batas waktu; tanpa penyimpanan state server tidak ada jaminan satu kali pengerjaan. Kunci jawaban hanya di server. Deployment Next.js ke Cloudflare memerlukan runtime yang mendukung route handler Node.js dan environment secrets. Uji API, token, timer, dan hasil pada deployment sebelum membagikan link.
