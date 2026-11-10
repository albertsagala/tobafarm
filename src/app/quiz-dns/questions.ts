// Server-only question bank. Never import into a client component.
import "server-only";
export const QUESTIONS = [
  {
    "id": 1,
    "type": "mc",
    "question": "Fungsi utama DNS?",
    "options": [
      "Mengatur bandwidth",
      "Menerjemahkan nama domain menjadi informasi alamat IP",
      "Mengenkripsi paket",
      "Menentukan rute terbaik",
      "Mengalokasikan VLAN"
    ],
    "answer": 1
  },
  {
    "id": 2,
    "type": "mc",
    "question": "Record DNS untuk IPv4?",
    "options": [
      "MX",
      "AAAA",
      "PTR",
      "A",
      "NS"
    ],
    "answer": 3
  },
  {
    "id": 3,
    "type": "mc",
    "question": "Record AAAA menyimpan?",
    "options": [
      "Alamat IPv6",
      "Alamat MAC",
      "Nomor port",
      "Alamat email",
      "Subnet mask"
    ],
    "answer": 0
  },
  {
    "id": 4,
    "type": "mc",
    "question": "Port standar DNS klasik?",
    "options": [
      "21",
      "22",
      "53",
      "80",
      "443"
    ],
    "answer": 2
  },
  {
    "id": 5,
    "type": "mc",
    "question": "Fungsi CNAME?",
    "options": [
      "Gateway",
      "IPv4",
      "Routing metric",
      "Port aplikasi",
      "Alias nama DNS"
    ],
    "answer": 4
  },
  {
    "id": 6,
    "type": "mc",
    "question": "TTL DNS menentukan?",
    "options": [
      "Hop router",
      "Masa cache record",
      "Kecepatan",
      "Prioritas server",
      "Ukuran paket"
    ],
    "answer": 1
  },
  {
    "id": 7,
    "type": "mc",
    "question": "Record MX digunakan untuk?",
    "options": [
      "Web",
      "SSH",
      "Routing",
      "Email",
      "DHCP"
    ],
    "answer": 3
  },
  {
    "id": 8,
    "type": "mc",
    "question": "Fungsi NS?",
    "options": [
      "Menunjuk authoritative name server",
      "Menyimpan IPv4",
      "Alamat MAC",
      "HTTP redirect",
      "Firewall"
    ],
    "answer": 0
  },
  {
    "id": 9,
    "type": "mc",
    "question": "PTR digunakan untuk?",
    "options": [
      "Forward routing",
      "Load balancing",
      "Reverse DNS lookup",
      "HTTP redirect",
      "Enkripsi"
    ],
    "answer": 2
  },
  {
    "id": 10,
    "type": "mc",
    "question": "RIPv2 digunakan untuk?",
    "options": [
      "DNS cache",
      "Web hosting",
      "Sertifikat TLS",
      "Subdomain",
      "Pertukaran informasi routing"
    ],
    "answer": 4
  },
  {
    "id": 11,
    "type": "mc",
    "question": "IP client VLAN 10 pada topologi kuliah?",
    "options": [
      "192.168.20.53",
      "192.168.10.10",
      "192.168.30.80",
      "8.8.8.8",
      "192.168.30.1"
    ],
    "answer": 1
  },
  {
    "id": 12,
    "type": "mc",
    "question": "IP resolver DNS VLAN 20?",
    "options": [
      "192.168.10.10",
      "192.168.30.80",
      "192.168.20.1",
      "192.168.20.53",
      "1.1.1.1"
    ],
    "answer": 3
  },
  {
    "id": 13,
    "type": "mc",
    "question": "NXDOMAIN berarti?",
    "options": [
      "Nama DNS tidak ada",
      "Web server mati",
      "TLS gagal",
      "Gateway hilang",
      "Cache penuh"
    ],
    "answer": 0
  },
  {
    "id": 14,
    "type": "mc",
    "question": "ai.tobasmartfarming.com merupakan?",
    "options": [
      "Alamat IP",
      "Root domain",
      "Subdomain",
      "Top-level domain",
      "Protokol routing"
    ],
    "answer": 2
  },
  {
    "id": 15,
    "type": "mc",
    "question": "Cloudflare Tunnel digunakan untuk?",
    "options": [
      "Mengganti routing",
      "DNS root",
      "IPv4 ke IPv6",
      "RIPv2",
      "Menghubungkan layanan privat lewat koneksi outbound"
    ],
    "answer": 4
  },
  {
    "id": 16,
    "type": "mc",
    "question": "Client VLAN 10 menuju DNS VLAN 20 memerlukan?",
    "options": [
      "Inter-VLAN routing",
      "HTTP redirect",
      "MX lookup",
      "NAT wajib",
      "SMTP relay"
    ],
    "answer": 0
  },
  {
    "id": 17,
    "type": "mc",
    "question": "RIPv2 antara R1 dan R2 membantu?",
    "options": [
      "DNS translation",
      "TLS",
      "DNS TTL",
      "Mempelajari jaringan di belakang router lain",
      "Mengubah VLAN ID"
    ],
    "answer": 3
  },
  {
    "id": 18,
    "type": "mc",
    "question": "Urutan mengakses HTTPS dengan hostname belum di-cache?",
    "options": [
      "HTTP lalu DNS lalu TLS",
      "DNS lalu koneksi/TLS lalu HTTP",
      "SSH lalu DNS lalu HTTP",
      "MX lalu PTR lalu HTTP",
      "RIPv2 lalu DHCP lalu SMTP"
    ],
    "answer": 1
  },
  {
    "id": 19,
    "type": "mc",
    "question": "NOERROR tanpa record tipe yang diminta menunjukkan?",
    "options": [
      "Nama pasti tidak ada",
      "Router mati",
      "Nama ada tetapi tipe record tersebut tidak tersedia",
      "TLS kedaluwarsa",
      "HTTP ditolak"
    ],
    "answer": 2
  },
  {
    "id": 20,
    "type": "mc",
    "question": "NXDOMAIN berbeda dari timeout karena?",
    "options": [
      "Keduanya RCODE",
      "Timeout berarti domain tidak ada",
      "NXDOMAIN berarti firewall aktif",
      "Timeout berarti A kosong",
      "NXDOMAIN respons DNS; timeout tidak menerima respons tepat waktu"
    ],
    "answer": 4
  },
  {
    "id": 21,
    "type": "mc",
    "question": "Angka 300 pada web.kampus.test. 300 IN A 192.168.30.80?",
    "options": [
      "TTL detik",
      "Prioritas",
      "Port",
      "Hop count",
      "Jumlah client"
    ],
    "answer": 0
  },
  {
    "id": 22,
    "type": "mc",
    "question": "Dua A record dengan TTL sama berarti?",
    "options": [
      "Pasti 50:50",
      "Prioritas sama",
      "Server pertama selalu dipilih",
      "TTL tidak menjamin load balancing",
      "Satu record dihapus"
    ],
    "answer": 3
  },
  {
    "id": 23,
    "type": "mc",
    "question": "Jawaban DNS yang masih valid di cache dapat?",
    "options": [
      "Menghapus routing",
      "Digunakan tanpa query ulang ke authoritative server",
      "Mengubah IP",
      "Mematikan firewall",
      "Memperpanjang domain"
    ],
    "answer": 1
  },
  {
    "id": 24,
    "type": "mc",
    "question": "DNS TTL berbeda dari IPv4 TTL karena?",
    "options": [
      "Keduanya masa domain",
      "Keduanya port",
      "DNS TTL untuk cache; IPv4 TTL membatasi hop",
      "IPv4 TTL mengatur DNS",
      "DNS TTL bandwidth"
    ],
    "answer": 2
  },
  {
    "id": 25,
    "type": "mc",
    "question": "Salah satu alasan DNS memakai TCP?",
    "options": [
      "RIPv2 memakai TCP",
      "Semua query wajib TCP",
      "TCP mengganti cache",
      "MX hanya TCP",
      "Respons UDP terpotong dapat diulang via TCP"
    ],
    "answer": 4
  },
  {
    "id": 26,
    "type": "mc",
    "question": "8.8.8.8 adalah?",
    "options": [
      "Recursive resolver publik",
      "Authoritative semua domain",
      "Satu-satunya root",
      "Hosting web",
      "Gateway internet"
    ],
    "answer": 0
  },
  {
    "id": 27,
    "type": "mc",
    "question": "SOA berisi?",
    "options": [
      "MAC address",
      "Routing table",
      "Sertifikat HTTPS",
      "Informasi administratif dan parameter zona",
      "Bandwidth"
    ],
    "answer": 3
  },
  {
    "id": 28,
    "type": "mc",
    "question": "TXT dapat digunakan untuk?",
    "options": [
      "Hop count",
      "SPF, DKIM, DMARC dan verifikasi domain",
      "Default gateway",
      "Mengganti port",
      "Mengaktifkan RIPv2"
    ],
    "answer": 1
  },
  {
    "id": 29,
    "type": "mc",
    "question": "Priority dan weight SRV membantu?",
    "options": [
      "Subnet mask",
      "IP TTL",
      "Memilih target layanan",
      "Mengenkripsi DNS",
      "NAT"
    ],
    "answer": 2
  },
  {
    "id": 30,
    "type": "mc",
    "question": "CNAME berbeda dari HTTP redirect karena?",
    "options": [
      "Identik",
      "CNAME memindahkan hosting",
      "Redirect mengganti registrar",
      "CNAME membuka TCP",
      "CNAME alias DNS; redirect mengarahkan URL melalui HTTP"
    ],
    "answer": 4
  },
  {
    "id": 31,
    "type": "mc",
    "question": "Ping IP berhasil tetapi HTTPS hostname gagal; kesimpulan?",
    "options": [
      "ICMP berhasil, DNS/TCP/TLS/HTTP perlu diperiksa",
      "RIPv2 pasti gagal",
      "DNS pasti benar",
      "Server pasti mati",
      "Beli domain baru"
    ],
    "answer": 0
  },
  {
    "id": 32,
    "type": "mc",
    "question": "SERVFAIL menunjukkan?",
    "options": [
      "Nama tidak ada",
      "HTTPS gagal",
      "Cache berhasil",
      "Resolver gagal memproses/menyelesaikan query",
      "IPv6 aktif"
    ],
    "answer": 3
  },
  {
    "id": 33,
    "type": "mc",
    "question": "Delegasi NS pada zona induk?",
    "options": [
      "Semua subdomain jadi server",
      "Menunjuk authoritative server zona anak",
      "Menghapus cache",
      "NAT",
      "MAC"
    ],
    "answer": 1
  },
  {
    "id": 34,
    "type": "mc",
    "question": "Registrar domain pindah, hosting?",
    "options": [
      "Otomatis pindah",
      "Otomatis hilang",
      "Tidak otomatis pindah",
      "Jadi DNS root",
      "Wajib IP baru"
    ],
    "answer": 2
  },
  {
    "id": 35,
    "type": "mc",
    "question": "DNS Cloudflare, hosting pindah AWS; langkah?",
    "options": [
      "Beli domain baru",
      "Hapus VLAN",
      "Semua PTR",
      "Ganti RIP",
      "Perbarui DNS atau origin menuju hosting baru"
    ],
    "answer": 4
  },
  {
    "id": 36,
    "type": "mc",
    "question": "Cloudflare Proxied berarti?",
    "options": [
      "Trafik yang didukung melewati reverse proxy Cloudflare",
      "Semua SSH",
      "RIPv2 aktif",
      "TLS mati",
      "DNS tidak digunakan"
    ],
    "answer": 0
  },
  {
    "id": 37,
    "type": "mc",
    "question": "Tunnel Healthy berarti?",
    "options": [
      "Aplikasi pasti sehat",
      "Semua port terbuka",
      "DNS tidak diperlukan",
      "Connector terhubung, origin belum tentu sehat",
      "Semua user terautentikasi"
    ],
    "answer": 3
  },
  {
    "id": 38,
    "type": "mc",
    "question": "ssh://localhost:22 menunjuk localhost di?",
    "options": [
      "Komputer pengguna",
      "Lingkungan tempat cloudflared berjalan",
      "Root DNS",
      "Router ISP",
      "Google DNS"
    ],
    "answer": 1
  },
  {
    "id": 39,
    "type": "mc",
    "question": "20.000 requests dan 20 GB transfer berarti?",
    "options": [
      "20.000 pengguna",
      "20.000 record",
      "Jumlah permintaan dan volume data",
      "20.000 router",
      "20 GB/detik"
    ],
    "answer": 2
  },
  {
    "id": 40,
    "type": "mc",
    "question": "Mengapa IP privat 192.168.30.80 pada DNS publik tak otomatis dapat diakses internet?",
    "options": [
      "DNS tak mendukung IPv4",
      "TTL kecil",
      "RIPv2 gagal",
      "HTTPS tak mendukung IP privat",
      "IP privat tidak dirutekan global"
    ],
    "answer": 4
  },
  {
    "id": 41,
    "type": "mc",
    "question": "DNS VLAN20 bisa diakses tetapi web VLAN30 gagal; diagnosis?",
    "options": [
      "Hapus CNAME",
      "Beli domain",
      "Ganti VLAN",
      "Periksa rute R1-R2, firewall, dan web server",
      "Ganti MX"
    ],
    "answer": 3
  },
  {
    "id": 42,
    "type": "mc",
    "question": "CNAME portal menuju web, tetapi target tanpa A/AAAA?",
    "options": [
      "Alias ditemukan tetapi alamat tujuan belum diperoleh",
      "DNS membuat IP",
      "Browser tanpa IP",
      "CNAME jadi PTR",
      "RIPv2 membuat A"
    ],
    "answer": 0
  },
  {
    "id": 43,
    "type": "mc",
    "question": "A record berubah, sebagian pengguna masih mendapat IP lama?",
    "options": [
      "Router tak dukung IPv6",
      "MX hilang",
      "Cache DNS lama masih berlaku",
      "Tunnel mati",
      "RIPv2 15 hop"
    ],
    "answer": 2
  },
  {
    "id": 44,
    "type": "mc",
    "question": "Pindah authoritative DNS Cloudflare ke Route 53 tanpa pindah hosting?",
    "options": [
      "Ganti MAC",
      "Pindah EC2",
      "Matikan HTTP",
      "Ganti routing",
      "Siapkan zona Route53 lalu ubah delegasi NS di registrar"
    ],
    "answer": 4
  },
  {
    "id": 45,
    "type": "mc",
    "question": "Tunnel Healthy tetapi HTTP 502 pada localhost:3000; periksa?",
    "options": [
      "Harga domain",
      "Alamat, port, protokol dan aplikasi origin",
      "PTR client",
      "Metrik RIP",
      "Root DNS"
    ],
    "answer": 1
  },
  {
    "id": 46,
    "type": "mc",
    "question": "DNS benar dan R1 punya rute ke server, tetapi respons tak kembali?",
    "options": [
      "DNS TTL",
      "CNAME",
      "Nama domain",
      "Rute balik ke subnet client hilang",
      "SOA"
    ],
    "answer": 3
  },
  {
    "id": 47,
    "type": "mc",
    "question": "Reverse proxy HTTPS membedakan dua hostname satu IP melalui?",
    "options": [
      "TLS SNI dan HTTP Host/:authority",
      "DNS TTL",
      "MAC client",
      "RIP hop",
      "PTR saja"
    ],
    "answer": 0
  },
  {
    "id": 48,
    "type": "mc",
    "question": "DNS berhasil tetapi TLS sertifikat hostname salah?",
    "options": [
      "DNS pasti gagal",
      "Ganti RIP",
      "Resolusi berhasil tetapi validasi TLS gagal",
      "Hapus MX",
      "Daftar ulang domain"
    ],
    "answer": 2
  },
  {
    "id": 49,
    "type": "mc",
    "question": "R1 kehilangan rute subnet30 tetapi DNS subnet20 masih bisa diakses?",
    "options": [
      "Semua normal",
      "DNS memperbaiki rute",
      "DNS gagal",
      "Pindah DNS",
      "Resolusi bisa berhasil tetapi akses web subnet30 gagal"
    ],
    "answer": 4
  },
  {
    "id": 50,
    "type": "mc",
    "question": "DNS Only menjadi Proxied Cloudflare?",
    "options": [
      "Registrar pindah",
      "Resolusi publik menuju proxy Cloudflare yang meneruskan trafik ke origin",
      "RIPv2 mati",
      "Origin pindah Pages",
      "Semua port otomatis diproksi"
    ],
    "answer": 1
  },
  {
    "id": 51,
    "type": "tf",
    "question": "DNS berhasil mengembalikan IP menjamin website HTTPS dapat dibuka.",
    "answer": false
  },
  {
    "id": 52,
    "type": "tf",
    "question": "DNS TTL dan IPv4 TTL memiliki fungsi berbeda.",
    "answer": true
  },
  {
    "id": 53,
    "type": "tf",
    "question": "8.8.8.8 authoritative untuk semua domain.",
    "answer": false
  },
  {
    "id": 54,
    "type": "tf",
    "question": "Dua A record dengan TTL sama pasti membagi trafik merata.",
    "answer": false
  },
  {
    "id": 55,
    "type": "tf",
    "question": "CNAME adalah alias DNS, bukan HTTP redirect.",
    "answer": true
  },
  {
    "id": 56,
    "type": "tf",
    "question": "RIPv2 menggunakan hop count sebagai metrik.",
    "answer": true
  },
  {
    "id": 57,
    "type": "tf",
    "question": "Memindahkan hosting ke AWS selalu mengharuskan pembelian domain baru.",
    "answer": false
  },
  {
    "id": 58,
    "type": "tf",
    "question": "Cloudflare Tunnel dapat mempublikasikan layanan tanpa membuka inbound port forwarding origin.",
    "answer": true
  },
  {
    "id": 59,
    "type": "tf",
    "question": "Tunnel Healthy menjamin aplikasi web origin selalu sehat.",
    "answer": false
  },
  {
    "id": 60,
    "type": "tf",
    "question": "Pembaruan DNS langsung terlihat oleh semua resolver tanpa mempertimbangkan cache.",
    "answer": false
  }
] as const;
