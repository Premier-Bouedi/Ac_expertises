import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy-deep text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-3">
        <div>
          <Image
            src="/logo.png"
            alt="AC Expertises et Conseils"
            width={280}
            height={80}
            className="h-14 w-auto object-contain"
          />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80">
            Cabinet d&apos;expertise comptable et de conseil, partout dans le
            monde. Nous accompagnons les entrepreneurs, sociétés et
            auto-entrepreneurs dans leur gestion quotidienne.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider">À propos</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <Link href="/#methode" className="hover:text-white">
                Comment ça marche ?
              </Link>
            </li>
            <li>
              <Link href="/#pourquoi" className="hover:text-white">
                Pourquoi AC Expertises ?
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/devis" className="hover:text-white">
                Devis gratuit
              </Link>
            </li>
            <li>
              <Link href="/inscription" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              Casablanca, Maroc
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0" />
              <a href="tel:+212603791489" className="hover:text-white">
                +212 603-791489
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 shrink-0" />
              <a href="mailto:Adamodessouza4545@gmail.com" className="break-all hover:text-white">
                Adamodessouza4545@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} AC Expertises et Conseils. Tous droits réservés.
      </div>
    </footer>
  );
}
