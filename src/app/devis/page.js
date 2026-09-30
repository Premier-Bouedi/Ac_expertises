import Image from "next/image";
import { Check } from "lucide-react";
import DevisForm from "@/components/DevisForm";

const BENEFITS = [
  "Suivi comptable et fiscal clair, adapté à votre pays",
  "Un conseiller dédié, joignable et réactif",
  "Paie, social et déclarations sans friction",
  "Création d'entreprise et formalités administratives",
  "Devis gratuit, sans engagement",
];

export const metadata = {
  title: "Devis gratuit | AC Expertises et Conseils",
  description:
    "Demandez un devis gratuit. Un expert-comptable vous contacte pour organiser un rendez-vous téléphonique.",
};

export default function DevisPage() {
  return (
    <section className="min-h-screen bg-white pt-[76px] lg:pt-[80px]">
      <div className="grid min-h-[calc(100vh-80px)] lg:grid-cols-2">
        <div className="flex items-center justify-center px-5 py-12 sm:px-10 lg:px-16">
          <div className="w-full max-w-md">
            <h1 className="text-2xl font-extrabold text-navy sm:text-3xl">Bienvenue !</h1>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Prière de remplir ce formulaire. Un de nos experts-comptables vous
              contactera dans les plus brefs délais pour organiser un rendez-vous
              téléphonique.
            </p>
            <div className="mt-8">
              <DevisForm />
            </div>
          </div>
        </div>

        <div className="relative flex min-h-[420px] overflow-hidden bg-navy-deep">
          <Image
            src="/devis-bg.jpg"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-navy-deep/70" />
          <div className="relative z-10 flex flex-col justify-center px-12 py-16 xl:px-20">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-light">
              Pourquoi choisir AC Expertises ?
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white xl:text-4xl">
              Simplicité. Clarté. Proximité.
            </h2>
            <ul className="mt-10 space-y-4">
              {BENEFITS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="text-sm font-semibold leading-relaxed xl:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
