"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/#methode", label: "Comment ça marche ?" },
  { href: "/#pourquoi", label: "Pourquoi nous ?" },
  { href: "/#services", label: "Services" },
  { href: "/#faq", label: "FAQ" },
  { href: "/inscription", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !isHome || scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        solid ? "bg-navy-deep shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="AC Expertises et Conseils"
            width={280}
            height={80}
            className="h-12 w-auto object-contain sm:h-14"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-white lg:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-brand-light">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/devis" className="btn-primary hidden px-5 py-2.5 sm:inline-flex">
            Devis gratuit
          </Link>
          <button
            type="button"
            className="rounded-lg p-2 text-white lg:hidden"
            aria-label="Ouvrir le menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy-deep px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3 text-sm font-semibold text-white">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/devis" className="btn-primary mt-2" onClick={() => setOpen(false)}>
              Devis gratuit
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
