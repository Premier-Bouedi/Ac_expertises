import Link from "next/link";
import {
  Calculator,
  ChevronDown,
  FileText,
  Landmark,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  Smartphone,
  Users,
} from "lucide-react";
import Faq from "@/components/Faq";

const STEPS = [
  {
    n: "01",
    title: "Vous nous contactez",
    text: "Appelez, écrivez sur WhatsApp ou envoyez un e-mail pour préciser votre besoin.",
    icon: Phone,
  },
  {
    n: "02",
    title: "Nous traitons votre dossier",
    text: "Comptabilité, déclarations fiscales, paie et formalités : nous vous déchargeons du quotidien.",
    icon: Landmark,
  },
  {
    n: "03",
    title: "Vous pilotez sereinement",
    text: "Un conseiller dédié, joignable et réactif, pour suivre votre activité au Maroc.",
    icon: ShieldCheck,
  },
];

const REASONS = [
  {
    title: "Cabinet d'expertise comptable",
    text: "Un accompagnement professionnel pour les entrepreneurs, SARL et auto-entrepreneurs.",
    color: "bg-[#98333c]",
  },
  {
    title: "Suivi clair et réactif",
    text: "Vos déclarations, bilans et échéances suivis avec un conseiller dédié.",
    color: "bg-[#f84950]",
  },
  {
    title: "Échanges simples",
    text: "WhatsApp, e-mail, téléphone ou rendez-vous : vous nous joignez comme vous voulez.",
    color: "bg-[#5A2ED3]",
  },
  {
    title: "Fiscalité marocaine",
    text: "TVA, IS, IR, CNSS et formalités adaptées à votre forme juridique.",
    color: "bg-[#1349bf]",
  },
  {
    title: "Conseiller dédié",
    text: "Un interlocuteur unique pour un accompagnement personnalisé, jusqu'au succès.",
    color: "bg-[#f58e27]",
  },
];

const SERVICES = [
  {
    icon: Calculator,
    title: "Comptabilité & Fiscalité",
    text: "TVA, IS, IR, bilans et déclarations : une comptabilité claire, à jour et conforme.",
  },
  {
    icon: Landmark,
    title: "Création d'entreprise",
    text: "Statuts, registre de commerce, patente et accompagnement jusqu'au lancement.",
  },
  {
    icon: Users,
    title: "Gestion de la Paie & CNSS",
    text: "Bulletins de paie, déclarations sociales et suivi CNSS sans friction.",
  },
  {
    icon: FileText,
    title: "Conseil juridique & administratif",
    text: "Modifications statutaires, contrats et formalités administratives au Maroc.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0 bg-navy-deep" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(35,164,245,0.45),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(82,168,255,0.35),transparent_40%)]" />
        <div className="absolute inset-0 bg-navy-deep/50" />

        <div className="relative mx-auto max-w-4xl px-4 pb-24 pt-32 text-center sm:px-6">
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            L'expert-comptable à vos côtés, jusqu'au succès.
          </h1>
          <p className="mt-5 text-lg font-semibold text-white/90 sm:text-xl">
            Simplicité. Clarté. Proximité.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
            Confiez-nous votre comptabilité, fiscalité ou paie/social et
            concentrez-vous sur votre cœur de métier.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/inscription" className="btn-primary">
              Nous contacter
            </Link>
            <a href="tel:+212603791489" className="btn-secondary">
              +212 603-791489
            </a>
          </div>
        </div>

        <a
          href="#methode"
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center text-white/80"
          aria-label="Aller à la suite"
        >
          <ChevronDown className="animate-bounce" />
        </a>
      </section>

      <section className="bg-white py-10">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <p className="text-lg font-bold text-brand">
            AC Expertises et Conseils
          </p>
          <p className="mt-2 text-sm text-slate-500 sm:text-base">
            Cabinet d'expertise comptable et de conseil — Casablanca, Maroc
          </p>
        </div>
      </section>

      <section id="methode" className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-kicker">Comment ça marche ?</p>
            <h2 className="section-title">
              Un accompagnement simple, de la prise de contact au suivi quotidien.
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {STEPS.map(({ n, title, text, icon: Icon }) => (
              <article key={n} className="rounded-3xl bg-white p-8 shadow-card">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Icon size={26} />
                </div>
                <p className="text-sm font-extrabold text-brand">{n}</p>
                <h3 className="mt-2 text-xl font-extrabold text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pourquoi" className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-kicker">Pourquoi AC Expertises ?</p>
            <h2 className="section-title">L'externalisation de votre comptabilité, réinventée</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-6">
            {REASONS.map((item, index) => (
              <article
                key={item.title}
                className={`${item.color} min-h-[220px] rounded-2xl p-7 text-white ${
                  index < 3 ? "md:col-span-2" : "md:col-span-3"
                }`}
              >
                <h3 className="text-xl font-extrabold">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/90">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-kicker">Services</p>
            <h2 className="section-title">Un accompagnement complet</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl bg-white p-6 shadow-card">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Icon size={22} />
                </div>
                <h3 className="font-extrabold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-deep py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-light">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-white md:text-4xl">
              AC Expertises,
              <span className="mt-2 block text-brand-light">votre expert-comptable</span>
            </h2>
            <p className="mt-5 text-white/75">
              Libérez-vous des tâches comptables et fiscales. Un conseiller vous
              accompagne, de la première prise de contact jusqu'au suivi de
              votre activité.
            </p>
          </div>
          <div id="faq">
            <Faq />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-extrabold text-navy">Prêt à clarifier votre comptabilité ?</h2>
          <p className="mt-3 text-slate-600">
            Un conseiller vous répond par téléphone, WhatsApp ou e-mail.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="tel:+212603791489" className="btn-primary">
              <Phone size={18} />
              +212 603-791489
            </a>
            <a href="mailto:Adamodessouza4545@gmail.com" className="btn-outline">
              <Mail size={18} />
              Adamodessouza4545@gmail.com
            </a>
            <a
              href="https://wa.me/212603791489"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
          <p className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500">
            <Smartphone size={16} />
            Réponse sous 24 heures
          </p>
        </div>
      </section>
    </>
  );
}
