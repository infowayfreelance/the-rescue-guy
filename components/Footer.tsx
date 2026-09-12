import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact Us" },
];

const LOGO_SRC = "/logo-wordmark-v3.webp";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full bg-surface-container-lowest/90 border-t border-outline-variant/20 backdrop-blur-xl mt-space-xl py-space-lg">
      <div className="max-w-7xl mx-auto px-margin-sm lg:px-margin flex flex-col gap-space-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md border-b border-outline-variant/15 pb-space-md">
          <div className="flex items-center gap-3">
            <img alt="The Road Rescue Guys" className="h-11 w-auto object-contain" src={LOGO_SRC} />
            <span className="font-label-sm text-[11px] text-on-surface-variant">Rapid 24/7 UK Vehicle Assistance &amp; Recovery</span>
          </div>
          <div className="flex flex-wrap items-center gap-space-md">
            <a className="flex items-center gap-2 text-secondary hover:text-white transition-colors" href="tel:08001234567">
              <span className="material-symbols-outlined text-[18px]">phone_in_talk</span>
              <span className="font-label-lg text-label-lg font-bold">0800 123 4567 (Toll-Free)</span>
            </a>
            <span className="hidden md:inline text-outline-variant">|</span>
            <span className="flex items-center gap-1.5 font-label-sm text-label-sm text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>National Fleet Active Across All Regions
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-space-md">
          <span className="font-body-sm text-body-sm text-on-surface-variant">© 2024 The Road Rescue Guys UK Ltd. All rights reserved. Registered in England &amp; Wales.</span>
          <div className="flex items-center gap-space-lg font-label-sm text-label-sm text-on-surface-variant">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} className="hover:text-primary transition-colors" href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
