import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Memahami VLAN, VTP, dan Inter-VLAN Routing melalui Cisco Packet Tracer",
  description: "Panduan praktikum jaringan komputer: segmentasi VLAN, distribusi VLAN melalui VTP, konfigurasi trunk 802.1Q, dan routing antar-VLAN dengan Router-on-a-Stick.",
  alternates: { canonical: "/id/artikel/vtp-vlan-inter-vlan-routing/" },
  openGraph: { type: "article", title: "Memahami VLAN, VTP, dan Inter-VLAN Routing", publishedTime: "2026-10-20", authors: ["Albert Sagala"] }
};

const cmd = {
 server: `enable
configure terminal
hostname SW1
vtp domain KAMPUS
vtp mode server
vtp version 2
vtp password cisco123
vlan 10
 name ADMIN
vlan 20
 name DOSEN
vlan 30
 name MAHASISWA
interface gigabitEthernet0/1
 switchport mode trunk
 switchport trunk allowed vlan 10,20,30
 no shutdown
interface gigabitEthernet0/2
 switchport mode trunk
 switchport trunk allowed vlan 10,20,30
 no shutdown
interface fastEthernet0/24
 switchport mode trunk
 switchport trunk allowed vlan 10,20,30
 no shutdown
interface fastEthernet0/1
 switchport mode access
 switchport access vlan 30
interface fastEthernet0/2
 switchport mode access
 switchport access vlan 30
end
copy running-config startup-config`,
 client2: `enable
configure terminal
hostname SW2
vtp domain KAMPUS
vtp mode client
vtp version 2
vtp password cisco123
interface gigabitEthernet0/1
 switchport mode trunk
 switchport trunk allowed vlan 10,20,30
 no shutdown
interface fastEthernet0/1
 switchport mode access
 switchport access vlan 10
interface fastEthernet0/2
 switchport mode access
 switchport access vlan 20
end
copy running-config startup-config`,
 client3: `enable
configure terminal
hostname SW3
vtp domain KAMPUS
vtp mode client
vtp version 2
vtp password cisco123
interface fastEthernet0/24
 switchport mode trunk
 switchport trunk allowed vlan 10,20,30
 no shutdown
interface fastEthernet0/1
 switchport mode access
 switchport access vlan 10
interface fastEthernet0/2
 switchport mode access
 switchport access vlan 20
end
copy running-config startup-config`,
 router: `enable
configure terminal
hostname R1
interface gigabitEthernet0/0
 no ip address
 no shutdown
interface gigabitEthernet0/0.10
 encapsulation dot1Q 10
 ip address 192.168.10.1 255.255.255.0
interface gigabitEthernet0/0.20
 encapsulation dot1Q 20
 ip address 192.168.20.1 255.255.255.0
interface gigabitEthernet0/0.30
 encapsulation dot1Q 30
 ip address 192.168.30.1 255.255.255.0
end
copy running-config startup-config`
};
function Block({children}:{children:React.ReactNode}) { return <section className="mt-10">{children}</section> }
function Code({value}:{value:string}) { return <pre className="mt-4 overflow-x-auto rounded-2xl bg-slate-950 p-5 text-sm leading-6 text-slate-100"><code>{value}</code></pre> }
export default function Page() {
 return <div className="min-h-screen bg-cream-soft"><Header locale="id"/><main id="main" className="mx-auto max-w-4xl px-5 py-16 text-forest-deep md:py-24">
 <p className="text-sm font-semibold uppercase tracking-widest text-teal-deep">Praktikum Jaringan Komputer · 20 Oktober 2026</p>
 <h1 className="font-display mt-5 text-4xl leading-tight md:text-6xl">Memahami VLAN, VTP, dan Inter-VLAN Routing melalui Cisco Packet Tracer</h1>
 <p className="mt-5 text-sm text-muted">Albert Sagala · Teknik Elektro, Institut Teknologi Del</p>
 <p className="mt-8 text-lg leading-8 text-muted">Ketika sebuah kampus memiliki banyak pengguna, jaringan perlu dibagi agar mudah dikelola. VLAN memisahkan jaringan secara logis, VTP membantu menyebarkan informasi VLAN antarswitch, sedangkan Inter-VLAN Routing memungkinkan komunikasi antarsegmen melalui perangkat Layer 3. Ketiganya saling melengkapi, tetapi menjalankan fungsi yang berbeda.</p>
 <Block><h2 className="font-display text-3xl">1. VLAN: satu infrastruktur, beberapa jaringan logis</h2>
 <p className="mt-4 leading-8">Virtual Local Area Network (VLAN) membagi switch Layer 2 menjadi beberapa domain broadcast. Pada contoh kampus, VLAN 10 digunakan untuk ADMIN, VLAN 20 untuk DOSEN, dan VLAN 30 untuk MAHASISWA. PC pada VLAN yang sama dapat berkomunikasi melalui switching Layer 2 meskipun tersambung ke switch yang berbeda, asalkan jalur trunk membawa VLAN tersebut.</p>
 <p className="mt-4 leading-8">Pemisahan VLAN tidak otomatis membuat suatu jaringan sepenuhnya aman. Kebijakan akses tetap memerlukan kontrol tambahan seperti ACL, pengamanan trunk, dan segmentasi layanan.</p></Block>
 <Block><h2 className="font-display text-3xl">2. VTP: konsistensi database VLAN pada banyak switch</h2>
 <p className="mt-4 leading-8">VLAN Trunking Protocol (VTP) adalah protokol Cisco untuk menyebarkan perubahan database VLAN pada switch di domain VTP yang sama. Dalam skenario ini, SW1 bertindak sebagai <strong>server</strong>, sedangkan SW2 dan SW3 menjadi <strong>client</strong>. VLAN dibuat di SW1 lalu didistribusikan ke dua switch client melalui link trunk.</p>
 <p className="mt-4 leading-8">VTP tidak mendistribusikan penetapan port access, pengalamatan IP, atau konfigurasi gateway. Semua itu tetap dikonfigurasi pada perangkat terkait. Pada implementasi nyata, perhatikan risiko configuration revision VTP yang dapat mengganti database VLAN; praktik ini menggunakan switch baru dan VTP versi 2 agar mudah diamati di Packet Tracer.</p></Block>
 <Block><h2 className="font-display text-3xl">3. Inter-VLAN Routing: komunikasi antara jaringan berbeda</h2>
 <p className="mt-4 leading-8">Karena setiap VLAN adalah jaringan Layer 2 yang berbeda, trafik IP dari VLAN 10 ke VLAN 20 harus diproses oleh perangkat Layer 3. Metode <em>Router-on-a-Stick</em> menggunakan satu interface fisik router sebagai trunk 802.1Q, dengan subinterface .10, .20, dan .30 sebagai gateway untuk masing-masing VLAN.</p>
 <p className="mt-4 leading-8">Misalnya PC1 beralamat 192.168.10.11 ingin menghubungi PC2 pada 192.168.20.11. PC1 mengirim paket ke gateway 192.168.10.1. Router kemudian meneruskan paket ke jaringan 192.168.20.0/24 melalui subinterface VLAN 20. Tanpa konfigurasi routing tersebut, kedua PC tidak bisa saling ping walaupun VLAN sudah tersebar melalui VTP.</p></Block>
 <Block><h2 className="font-display text-3xl">4. Desain praktikum dan tabel pengalamatan</h2>
 <p className="mt-4 leading-8">Gunakan satu router Cisco 2911 (R1), tiga switch Cisco 2960 (SW1, SW2, SW3), serta enam PC. Hubungkan R1 G0/0 ke SW1 G0/1; SW1 G0/2 ke SW2 G0/1; dan SW1 Fa0/24 ke SW3 Fa0/24. Port yang menghubungkan router dan switch harus dikonfigurasi sebagai trunk. Sambungkan PC1 dan PC2 ke SW2 Fa0/1–2, PC3 dan PC4 ke SW3 Fa0/1–2, serta PC5 dan PC6 ke SW1 Fa0/1–2.</p>
 <div className="mt-5 overflow-x-auto"><table className="w-full border-collapse text-left text-sm"><thead><tr className="border-b"><th className="p-3">VLAN</th><th className="p-3">Nama</th><th className="p-3">Subnet</th><th className="p-3">Gateway</th></tr></thead><tbody>{[[10,"ADMIN","192.168.10.0/24","192.168.10.1"],[20,"DOSEN","192.168.20.0/24","192.168.20.1"],[30,"MAHASISWA","192.168.30.0/24","192.168.30.1"]].map(r=><tr className="border-b" key={r[0]}>{r.map((v,i)=><td className="p-3" key={i}>{v}</td>)}</tr>)}</tbody></table></div>
 <p className="mt-4 leading-8">Atur alamat PC secara statis (mask 255.255.255.0): PC1 192.168.10.11, PC2 192.168.20.11, PC3 192.168.10.12, PC4 192.168.20.12, PC5 192.168.30.11, PC6 192.168.30.12. Setiap PC menggunakan gateway sesuai VLAN-nya.</p></Block>
 <Block><h2 className="font-display text-3xl">5. Konfigurasi perangkat di Packet Tracer</h2>
 <h3 className="mt-6 text-xl font-bold">SW1 — VTP server, VLAN, trunk, dan access port</h3><Code value={cmd.server}/>
 <h3 className="mt-6 text-xl font-bold">SW2 — VTP client dan access port</h3><Code value={cmd.client2}/>
 <h3 className="mt-6 text-xl font-bold">SW3 — VTP client dan access port</h3><Code value={cmd.client3}/>
 <h3 className="mt-6 text-xl font-bold">R1 — Router-on-a-Stick</h3><Code value={cmd.router}/>
 </Block>
 <Block><h2 className="font-display text-3xl">6. Pembuktian, bukan sekadar mengetik perintah</h2>
 <p className="mt-4 leading-8">Jalankan <code>show vlan brief</code>, <code>show vtp status</code>, dan <code>show interfaces trunk</code> di switch. Di router, jalankan <code>show ip interface brief</code> dan <code>show ip route</code>. Pastikan VLAN 10, 20, dan 30 muncul pada SW2 dan SW3 tanpa dibuat secara manual di kedua client.</p>
 <p className="mt-4 leading-8">Lakukan ping PC1 ke PC3 (VLAN 10 yang sama), PC2 ke PC4 (VLAN 20 yang sama), serta PC1 ke PC2 dan PC1 ke PC5 (antar-VLAN). Seluruh tes diharapkan berhasil setelah semua konfigurasi benar dan interface aktif. Jika gagal, periksa VLAN access, daftar VLAN yang diizinkan pada trunk, alamat IP, gateway, dan status subinterface.</p>
 <p className="mt-4 leading-8">Sebagai eksperimen, matikan interface router R1 G0/0: komunikasi dalam VLAN yang sama seharusnya tetap bekerja, sedangkan ping antar-VLAN gagal. Aktifkan kembali untuk memulihkan routing. Selanjutnya, tambahkan VLAN 40 pada VTP server lalu periksa penyebarannya pada client; VLAN baru tersebut belum memiliki konektivitas IP sampai konfigurasi trunk, port, dan gateway disiapkan.</p></Block>
 <Block><h2 className="font-display text-3xl">7. Kesimpulan</h2>
 <p className="mt-4 leading-8"><strong>VLAN mengelompokkan jaringan, VTP mendistribusikan informasi VLAN, dan Inter-VLAN Routing menghubungkan jaringan yang berbeda.</strong> Mahasiswa dinyatakan memahami konsep jika mampu menjelaskan aliran paket, membuktikan konfigurasi melalui perintah verifikasi, dan mendiagnosis kegagalan ping, bukan hanya menghasilkan topologi yang tampak benar.</p></Block>
 <Block><h2 className="font-display text-2xl">Referensi teknis</h2><ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-muted"><li><a className="underline" href="https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vtp.html">Cisco — VLAN Configuration Guide: Configure VTP</a></li><li><a className="underline" href="https://www.cisco.com/c/en/us/support/docs/lan-switching/inter-vlan-routing/14976-50.html">Cisco — Configure Inter VLAN Routing with the Use of an External Router</a></li><li><a className="underline" href="https://learningnetwork.cisco.com/s/article/fundamentals-of-vlan-s-router-on-a-stick">Cisco Learning Network — Fundamentals of VLANs: Router-on-a-Stick</a></li></ul></Block>
 </main><Footer locale="id"/></div>;
}