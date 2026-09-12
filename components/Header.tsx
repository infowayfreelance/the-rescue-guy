"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact Us" },
];

const LOGO_SRC = "/logo-wordmark-v3.webp";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClasses = (href: string) =>
    pathname === href
      ? "px-3 py-2 transition-colors bg-primary-container text-on-primary-container font-label-lg rounded-xl shadow-[0_0_12px_rgba(0,210,255,0.3)]"
      : "text-on-surface-variant font-label-lg text-label-lg px-3 py-2 rounded-lg transition-colors hover:text-on-surface hover:bg-surface-container-high";

  return (
    <header className="fixed top-0 inset-x-0 z-50 pointer-events-none">
      <div className="max-w-7xl mx-auto px-margin-sm lg:px-margin pt-space-xs pointer-events-auto">
        <div className="h-20 bg-surface-container-lowest/70 backdrop-blur-xl border border-outline-variant/30 rounded-2xl px-space-md lg:px-space-lg flex items-center justify-between shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] transition-all duration-300">
          <Link href="/" className="flex items-center gap-space-md cursor-pointer">
            <img alt="The Road Rescue Guys" className="h-14 md:h-16 w-auto object-contain" src={LOGO_SRC} />
          </Link>

          <nav className="hidden lg:flex items-center gap-1 bg-surface-container-low/60 p-1 rounded-xl border border-outline-variant/20">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={linkClasses(link.href)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-space-sm">
            <a
              className="hidden lg:flex items-center gap-2 px-space-md py-2 rounded-xl bg-secondary-container text-white font-label-lg text-label-lg shadow-[0_0_24px_rgba(251,91,17,0.45)] hover:shadow-[0_0_32px_rgba(251,91,17,0.65)] hover:brightness-110 transition-all"
              href="tel:08001234567"
            >
              <span className="material-symbols-outlined text-[18px] animate-pulse text-white">emergency</span>
              <div className="flex flex-col text-left leading-none">
                <span className="font-label-sm text-[10px] tracking-wider uppercase text-secondary-fixed opacity-90">Urgent Call 24/7</span>
                <span className="font-label-lg text-label-lg font-bold">+44 800 123 4567</span>
              </div>
            </a>
            <button
              aria-controls="primaryNav"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden w-10 h-10 rounded-xl bg-surface-container-high/80 border border-outline-variant/30 flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-all"
              type="button"
            >
              <span className="material-symbols-outlined text-[22px]">{open ? "close" : "menu"}</span>
            </button>
          </div>
        </div>

        {open && (
          <nav
            id="primaryNav"
            className="lg:hidden flex flex-col fixed top-24 inset-x-4 z-40 shadow-2xl bg-surface-container-low/95 backdrop-blur-xl p-2 rounded-xl border border-outline-variant/20 gap-1"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === link.href ? "page" : undefined}
                className={linkClasses(link.href)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
