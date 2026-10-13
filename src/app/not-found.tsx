import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-navy px-6 text-center text-cream">
      <p className="text-xs uppercase tracking-[0.28em] text-teal-bright">
        404
      </p>
      <h1 className="font-display mt-4 text-4xl md:text-6xl">Halaman tidak ditemukan</h1>
      <p className="mt-4 max-w-md text-cream/80">
        Halaman yang Anda cari tidak ada di situs ini.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full border border-cream/40 px-6 py-3 text-sm tracking-wide transition hover:border-teal hover:text-teal-bright"
      >
        Kembali ke beranda
      </Link>
    </main>
  );
}
