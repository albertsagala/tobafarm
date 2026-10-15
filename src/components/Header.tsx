"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { Logo } from "@/components/Logo";
import { navEn, navId } from "@/lib/site";

export function Header({
  locale = "en",
  enHref = "/",
  idHref = "/id/",
}: {
  locale?: "en" | "id";
  enHref?: string;
  idHref?: string;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  const nav = locale === "en" ? navEn : navId;
  const home = locale === "en" ? "/" : "/id/";
  const collaboration = locale === "en" ? "/collaboration/" : "/id/kolaborasi/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 1280px)");
    const onBreakpoint = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-navy/95 backdrop-blur-md"
          : "bg-navy"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <a href={home} className="shrink-0 text-cream" aria-label="Toba Smart Farming">
          <Logo />
        </a>
        <nav className="hidden items-center gap-5 xl:flex" aria-label={locale === "en" ? "Main" : "Utama"}>
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm tracking-wide text-cream/85 transition hover:text-teal-bright">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitch locale={locale} enHref={enHref} idHref={idHref} />
          <a
            href={collaboration}
            className="rounded-full border border-teal/50 bg-teal/10 px-4 py-2 text-sm text-teal-bright transition hover:border-teal hover:bg-teal/20"
          >
            {locale === "en" ? "Work with us" : "Ajukan kolaborasi"}
          </a>
        </div>
        <button
          ref={toggleRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-cream xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? (locale === "en" ? "Close menu" : "Tutup menu") : (locale === "en" ? "Open menu" : "Buka menu")}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
        </button>
      </div>
      <nav
        ref={menuRef}
        id="mobile-nav"
        hidden={!open}
        className="max-h-[calc(100svh-4.5rem)] overflow-y-auto border-t border-white/10 bg-navy px-5 py-4 xl:hidden"
        aria-label={locale === "en" ? "Mobile menu" : "Menu seluler"}
      >
        <div className="mb-3"><LanguageSwitch locale={locale} enHref={enHref} idHref={idHref} /></div>
        <ul className="flex flex-col">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="block py-3 text-lg text-cream/90 transition hover:text-teal-bright" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
