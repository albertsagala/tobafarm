"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { collaborationPaths } from "@/lib/content";
import { isValidEmail, site } from "@/lib/site";

const topics = [
  "Riset bersama di fasilitas",
  "Penerapan di lapangan",
  "Diskusi metode dan publikasi",
  "Lainnya",
];

const fieldClass =
  "mt-2 w-full rounded-xl border border-[var(--line)] bg-cream-soft px-4 py-3 text-ink transition focus:border-teal-deep";

export function Contact() {
  const email = isValidEmail(site.email) ? site.email : null;
  const [draftOpened, setDraftOpened] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const organization = String(data.get("organization") ?? "").trim();
    const topic = String(data.get("topic") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = encodeURIComponent(`${topic} — ${site.name}`);
    const body = encodeURIComponent(
      [`Nama: ${name}`, organization ? `Organisasi: ${organization}` : null, "", message]
        .filter((line) => line !== null)
        .join("\n"),
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setDraftOpened(true);
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-cream-soft py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Kontak"
            title="Jalur kolaborasi"
            description="Pilih jalur yang paling dekat dengan kebutuhan Anda, lalu kirim pesan singkat berisi konteks dan pertanyaan."
          />
        </Reveal>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {collaborationPaths.map((path, index) => (
            <li key={path.title}>
              <Reveal delayMs={index * 70} className="h-full">
                <div className="flex h-full flex-col rounded-3xl border border-[var(--line)] bg-white p-6">
                  <h3 className="font-display text-2xl text-forest-deep">{path.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{path.body}</p>
                  <a
                    href={path.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm text-teal-deep underline decoration-teal/40 underline-offset-4 transition hover:decoration-teal-deep"
                  >
                    {path.linkLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </a>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        {email ? (
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <div className="h-full rounded-3xl border border-[var(--line)] bg-white p-6 sm:p-8">
                <div className="flex items-center gap-3 text-forest">
                  <Mail className="h-5 w-5 text-teal-deep" aria-hidden />
                  <h3 className="font-medium">Email</h3>
                </div>
                <a
                  href={`mailto:${email}`}
                  className="mt-3 block text-lg text-forest-deep underline decoration-teal/40 underline-offset-4 [overflow-wrap:anywhere] transition hover:decoration-teal-deep"
                >
                  {email}
                </a>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  Pesan dibaca langsung oleh pemimpin riset. Sertakan nama,
                  organisasi, dan jalur kolaborasi yang Anda minati.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={100}>
              <form
                onSubmit={onSubmit}
                className="rounded-3xl border border-[var(--line)] bg-white p-6 sm:p-8"
              >
                <p className="text-sm leading-relaxed text-muted">
                  Formulir ini tidak mengirim data ke server. Tombol di bawah
                  membuka aplikasi email Anda dengan draf pesan ke {email}.
                </p>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm">
                    <span className="text-forest">Nama</span>
                    <input required name="name" autoComplete="name" className={fieldClass} />
                  </label>
                  <label className="block text-sm">
                    <span className="text-forest">Organisasi (opsional)</span>
                    <input name="organization" autoComplete="organization" className={fieldClass} />
                  </label>
                </div>
                <label className="mt-5 block text-sm">
                  <span className="text-forest">Topik</span>
                  <select name="topic" className={fieldClass} defaultValue={topics[0]}>
                    {topics.map((topic) => (
                      <option key={topic}>{topic}</option>
                    ))}
                  </select>
                </label>
                <label className="mt-5 block text-sm">
                  <span className="text-forest">Pesan</span>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    maxLength={1500}
                    className={fieldClass}
                  />
                </label>
                <button
                  type="submit"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-6 py-3 text-sm text-cream transition hover:bg-forest-mid sm:w-auto"
                >
                  <Mail className="h-4 w-4" aria-hidden />
                  Buka aplikasi email
                </button>
                <p className="mt-4 text-sm leading-relaxed text-teal-deep" aria-live="polite">
                  {draftOpened
                    ? `Draf disiapkan di aplikasi email Anda. Pesan belum terkirim sampai Anda menekan Kirim di aplikasi tersebut. Jika aplikasi tidak terbuka, kirim langsung ke ${email}.`
                    : ""}
                </p>
              </form>
            </Reveal>
          </div>
        ) : null}
      </div>
    </section>
  );
}
