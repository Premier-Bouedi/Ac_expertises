import { Mail, MessageCircle } from "lucide-react";

const EMAIL = "Adamodessouza4545@gmail.com";
const WHATSAPP = "https://wa.me/212603791489";

const iconBtn =
  "inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand bg-white text-brand shadow-md transition hover:bg-brand hover:text-white";

export default function ContactIcons({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href={`mailto:${EMAIL}`}
        className={iconBtn}
        aria-label="Envoyer un e-mail"
        title="E-mail"
      >
        <Mail size={22} />
      </a>
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        className={`${iconBtn} border-emerald-500 text-emerald-600 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white`}
        aria-label="Contacter sur WhatsApp"
        title="WhatsApp"
      >
        <MessageCircle size={22} />
      </a>
    </div>
  );
}
