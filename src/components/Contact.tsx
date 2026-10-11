"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { placeholders } from "@/lib/site";

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const organization = String(data.get("organization") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const body = encodeURIComponent(
      `Name: ${name}\nOrganization: ${organization}\nEmail: ${email}\n\n${message}`,
    );
    const subject = encodeURIComponent("Collaboration inquiry — Toba Smart Farming");

    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-cream-soft py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Collaboration and contact"
            title="A conversation, not a campaign"
            description="Toba Smart Farming welcomes discussion with researchers, engineers, growers, and institutions. Contact channels below are placeholders until public details are confirmed."
          />
        </Reveal>
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="space-y-5">
              {[
                { icon: Mail, label: "Email", value: placeholders.email },
                { icon: MapPin, label: "Location", value: placeholders.region },
                {
                  icon: Users,
                  label: "Partnerships",
                  value:
                    "Collaboration interests include sensing, control, energy systems, and controlled-environment agronomy. Partner names are not listed until confirmed.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-[var(--line)] bg-white p-6"
                >
                  <div className="flex items-center gap-3 text-forest">
                    <item.icon className="h-5 w-5 text-teal" aria-hidden />
                    <p className="text-sm font-medium">{item.label}</p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delayMs={100}>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-[var(--line)] bg-white p-8"
            >
              <p className="text-sm text-muted">
                This form prepares a message in your email client. It does not
                send data to a server. A public inbox is a placeholder until
                an address is verified.
              </p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="text-forest">Name</span>
                  <input
                    required
                    name="name"
                    className="mt-2 w-full rounded-xl border border-[var(--line)] bg-cream-soft px-4 py-3 outline-none transition focus:border-teal"
                  />
                </label>
                <label className="block text-sm">
                  <span className="text-forest">Organization</span>
                  <input
                    name="organization"
                    className="mt-2 w-full rounded-xl border border-[var(--line)] bg-cream-soft px-4 py-3 outline-none transition focus:border-teal"
                  />
                </label>
              </div>
              <label className="mt-5 block text-sm">
                <span className="text-forest">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-2 w-full rounded-xl border border-[var(--line)] bg-cream-soft px-4 py-3 outline-none transition focus:border-teal"
                />
              </label>
              <label className="mt-5 block text-sm">
                <span className="text-forest">Message</span>
                <textarea
                  required
                  name="message"
                  rows={6}
                  className="mt-2 w-full rounded-xl border border-[var(--line)] bg-cream-soft px-4 py-3 outline-none transition focus:border-teal"
                />
              </label>
              <button
                type="submit"
                className="mt-6 rounded-full bg-forest px-6 py-3 text-sm text-cream transition hover:bg-forest-mid"
              >
                Prepare email
              </button>
              {sent ? (
                <p className="mt-4 text-sm text-teal">
                  If your email client did not open, copy the message and send it
                  once a public address is confirmed.
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
