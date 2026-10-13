# Panduan data Bimbingan Tugas Akhir & Jejak Alumni

Halaman publik: `/supervision/` (judul "Student Supervision & Alumni", menu "Supervision").
Ringkasan di beranda: bagian `#supervision`.

Semua isi diambil dari file data; komponen UI tidak perlu diubah.

| File | Isi |
| --- | --- |
| `src/data/supervision/projects.ts` | Satu entri per Tugas Akhir/Project (termasuk project kelompok). |
| `src/data/supervision/students.ts` | Satu entri per mahasiswa, terhubung ke project lewat `projectIds`. |
| `src/data/supervision/candidates.ts` | Daftar tinjauan. Tidak pernah tampil di website. |
| `src/data/supervision/types.ts` | Definisi field dan status. |
| `docs/supervision/template.csv` | Template pengumpulan data. |

Statistik (jumlah mahasiswa, project, project kelompok) dihitung otomatis dari data.
Build akan gagal jika ada ID ganda, `projectIds` yang tidak ada, atau status
terverifikasi tanpa sumber.

## Aturan utama

- Tulis `null` untuk data yang tidak diketahui. Jangan menebak.
- Angkatan (`cohortYear`), tahun lulus (`graduationYear`), tahun pembimbingan
  (`supervisionYears`), dan tahun selesai karya (`completionYear`) adalah field
  terpisah. Isi masing-masing hanya jika sumbernya menyebutkan langsung.
- Ko-penulis publikasi **bukan** bukti bimbingan. Masukkan ke `candidates.ts`
  sampai ada daftar bimbingan, lembar pengesahan, repositori Del, atau halaman
  resmi yang menyebut Albert Sagala sebagai pembimbing.
- `internalNotes` tidak ditampilkan, tetapi tetap tersimpan di repository.
  Jangan menulis nomor telepon, email pribadi, atau alamat di sana.
- Jangan menambahkan foto atau logo perusahaan. Avatar memakai inisial.

## Menambah mahasiswa

1. Isi satu baris `template.csv` per mahasiswa. Mahasiswa dalam satu project
   kelompok memakai `project_id` yang sama.
2. Jika project belum ada, tambahkan ke `projects.ts`:
   - `id`: slug stabil, huruf kecil dan tanda hubung (mis. `sistem-irigasi-lora`).
     Jangan diubah setelah terbit karena dipakai di URL `/supervision/#id`.
   - `title`: judul persis seperti di sumber; isi `academic.titleSource`.
   - `workType`: `"tugas-akhir"`, `"project"`, atau `null` jika sumber tidak menyebut.
   - `supervisorRole`: `"pembimbing-utama"`, `"pembimbing-pendamping"`,
     `"pembimbing"` (sumber hanya menyebut "dibimbing"), atau `null`.
   - `academic.status`: `"verified"` hanya jika `supervisionSources` berisi
     sumber yang menyebut pembimbing secara eksplisit.
3. Tambahkan mahasiswa ke `students.ts` dengan `id` stabil (mis. `nama-lengkap`)
   dan `projectIds: ["<project_id>"]`.
4. Jalankan `npm run build` di folder `albert`.

Pemetaan kolom CSV ke data:

| Kolom CSV | Field |
| --- | --- |
| `nama` | `students[].fullName` |
| `institusi` | `students[].institution` dan `projects[].institution` |
| `program_studi` | `students[].studyProgram` (jenjang di `degreeLevel`) |
| `angkatan` | `students[].cohortYear` |
| `tahun_selesai` | `projects[].completionYear` |
| `judul_project` | `projects[].title` |
| `jenis_karya` | `projects[].workType` |
| `peran_pembimbing` | `projects[].supervisorRole` |
| `tema` | `projects[].themes` (pisahkan dengan `;`) |
| `project_id` | `projects[].id` dan `students[].projectIds` |
| `linkedin_url` | `students[].career.linkedinUrl` |
| `posisi_terverifikasi` | `students[].career.position` |
| `organisasi` | `students[].career.organization` |
| `sumber_bimbingan` | `projects[].academic.supervisionSources` dan `students[].academic.sources` |
| `sumber_judul` | `projects[].academic.titleSource` |
| `sumber_karier` | `students[].career.source` |
| `tanggal_verifikasi` | `checkedOn` pada sumber terkait (format `YYYY-MM-DD`) |

## Menghubungkan anggota kelompok

Buat **satu** entri di `projects.ts`, lalu beri setiap anggota `projectIds` yang
sama. Halaman menampilkan project itu sekali dengan semua anggotanya, dan
statistik menghitungnya sebagai satu project.

## Memperbarui pekerjaan alumni

Status di `students[].career.status`:

| Status | Arti | Yang tampil |
| --- | --- | --- |
| `verified` | Profil publik atau halaman resmi organisasi sudah dibuka dan dibaca. | "Last verified position" + tanggal + sumber, dan tautan LinkedIn. |
| `link-only` | Identitas cocok (nama, Del, program studi, tahun), tetapi profil tidak bisa dibuka. | Hanya tautan LinkedIn. |
| `needs-review` | Identitas ragu atau sumber bertentangan. | Tidak ada. |
| `not-checked` | Belum diperiksa. | Tidak ada. |

Langkah:

1. Buka profil publik tanpa melewati login atau CAPTCHA.
2. Cocokkan identitas: nama, Institut Teknologi Del/Politeknik Informatika Del,
   program studi, dan tahun studi. Nama yang sama saja tidak cukup.
3. Isi `position`, `organization`, `source` (URL profil atau halaman resmi),
   dan `checkedOn` dengan tanggal hari ini; ubah `status` ke `"verified"`.
4. Jika posisi berubah, ganti nilainya dan perbarui `checkedOn`. Website selalu
   menyebutnya "Last verified position", bukan pekerjaan saat ini.

## Data minimum untuk entri baru

- Nama mahasiswa.
- Judul atau identitas project, jika diketahui.
- Tahun atau program studi, jika diketahui.
- Bukti atau konfirmasi hubungan bimbingan (daftar bimbingan, lembar
  pengesahan, tautan repositori Del, atau halaman resmi).
