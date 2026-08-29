import { Mail, MessageCircle, Phone, ArrowUpRight, ShieldCheck, Clock } from "lucide-react";

const PHONE_DISPLAY = "+212 603-791489";
const PHONE_TEL = "+212603791489";
const EMAIL = "Adamodessouza4545@gmail.com";

export default function InscriptionPage() {
  return (
    <>
      <section className="relative flex min-h-[45vh] items-center justify-center overflow-hidden bg-grid-pattern pt-32 pb-16">
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[500px] rounded-full bg-blue-600/15 blur-[120px]" />
        
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <span className="section-kicker">Contact</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Parlons de votre entreprise
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Un conseiller vous répond par téléphone, WhatsApp ou e-mail.
          </p>
        </div>
      </section>

      <section className="relative bg-[#070b14] py-20 border-t border-slate-800">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:grid-cols-3 sm:px-6">
          <a
            href={`tel:${PHONE_TEL}`}
            className="group relative flex flex-col items-center rounded-3xl border border-slate-800 bg-slate-900/60 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
              <Phone size={28} />
            </div>
            <h2 className="text-xl font-extrabold text-white group-hover:text-blue-300 transition-colors">Téléphone</h2>
            <p className="mt-2 text-sm font-semibold text-slate-300">{PHONE_DISPLAY}</p>
            <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-blue-400">
              <span>Appeler maintenant</span>
              <ArrowUpRight size={14} />
            </div>
          </a>

          <a
            href={`https://wa.me/${PHONE_TEL.replace("+", "")}`}
            target="_blank"
            rel="noreferrer"
            className="group relative flex flex-col items-center rounded-3xl border border-slate-800 bg-slate-900/60 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/50 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
              <MessageCircle size={28} />
            </div>
            <h2 className="text-xl font-extrabold text-white group-hover:text-emerald-300 transition-colors">WhatsApp</h2>
            <p className="mt-2 text-sm font-semibold text-slate-300">{PHONE_DISPLAY}</p>
            <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-emerald-400">
              <span>Envoyer un message</span>
              <ArrowUpRight size={14} />
            </div>
          </a>

          <a
            href={`mailto:${EMAIL}`}
            className="group relative flex flex-col items-center rounded-3xl border border-slate-800 bg-slate-900/60 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/50 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform">
              <Mail size={28} />
            </div>
            <h2 className="text-xl font-extrabold text-white group-hover:text-indigo-300 transition-colors">E-mail</h2>
            <p className="mt-2 break-all text-xs font-semibold text-slate-300">{EMAIL}</p>
            <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-indigo-400">
              <span>Envoyer un e-mail</span>
              <ArrowUpRight size={14} />
            </div>
          </a>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 text-slate-400 text-xs font-semibold">
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-blue-400" />
            <span>Réponse sous 24h ouvrées</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-emerald-400" />
            <span>Données confidentielles et sécurisées</span>
          </div>
        </div>
      </section>
    </>
  );
}
