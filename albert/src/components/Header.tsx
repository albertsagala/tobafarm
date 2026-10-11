"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, person } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/92 text-cream backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="text-sm font-medium tracking-wide text-cream">
          {person.name}
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] tracking-wide text-cream/85 transition hover:text-teal-bright"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="inline-flex rounded-md p-2 text-cream md:hidden"
          aria-expanded={open}
          aria-controls={open ? "mobile-nav" : undefined}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-white/10 bg-navy px-5 py-4 md:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-3 text-lg text-cream"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
