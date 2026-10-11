import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-navy px-6 text-center text-cream">
      <p className="text-xs uppercase tracking-[0.28em] text-teal-bright">
        404
      </p>
      <h1 className="font-display mt-4 text-4xl md:text-6xl">Page not found</h1>
      <p className="mt-4 max-w-md text-cream/70">
        The page you requested is not part of this site.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full border border-cream/20 px-6 py-3 text-sm tracking-wide transition hover:border-teal hover:text-teal-bright"
      >
        Return home
      </Link>
    </main>
  );
}
