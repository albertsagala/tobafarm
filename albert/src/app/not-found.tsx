import Link from "next/link";
import { person } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-start justify-center bg-navy px-6 text-cream">
      <p className="text-xs uppercase tracking-[0.28em] text-teal-bright">404</p>
      <h1 className="font-display mt-4 text-5xl">{person.name}</h1>
      <p className="mt-4 max-w-md text-cream/75">This page is not on the site.</p>
      <Link href="/" className="mt-8 text-sm text-teal-bright">
        Return to the homepage
      </Link>
    </main>
  );
}
