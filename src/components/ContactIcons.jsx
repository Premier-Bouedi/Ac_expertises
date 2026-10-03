import { Mail, MessageCircle, Linkedin } from "lucide-react";

const EMAIL = "Adamodessouza4545@gmail.com";
const WHATSAPP = "https://wa.me/212603791489";
const LINKEDIN = "https://www.linkedin.com/in/deogracia-nguelet-011b19125/";
const GMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&to=${EMAIL}&su=Demande de renseignement - AC Expertises`;

const iconBtn =
  "inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand bg-white text-brand shadow-md transition hover:bg-brand hover:text-white";

export default function ContactIcons({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href={GMAIL_COMPOSE}
        target="_blank"
        rel="noreferrer"
        className={iconBtn}
        aria-label="Envoyer un e-mail"
        title="Envoyer un e-mail"
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
      <a
        href={LINKEDIN}
        target="_blank"
        rel="noreferrer"
        className={`${iconBtn} border-[#0A66C2] text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white`}
        aria-label="Voir le profil LinkedIn"
        title="LinkedIn"
      >
        <Linkedin size={22} />
      </a>
    </div>
  );
}
