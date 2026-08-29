"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const ITEMS = [
  {
    q: "1. Pourquoi choisir AC Expertises et Conseils ?",
    a: "Nous vous proposons un accompagnement clair en comptabilité, fiscalité, paie et création d'entreprise, avec un conseiller joignable et ancré dans le contexte fiscal marocain.",
  },
  {
    q: "2. Comment devenir client ?",
    a: (
      <>
        Contactez-nous par téléphone, WhatsApp ou e-mail. Un expert dédié vous
        rappelle sous 24 heures pour vous transmettre une proposition adaptée à
        vos besoins.{" "}
        <Link href="/inscription" className="font-bold text-brand hover:underline">
          Voir le contact
        </Link>
        .
      </>
    ),
  },
  {
    q: "3. Puis-je parler à mon expert-comptable ?",
    a: "Oui. Vous pouvez joindre votre conseiller par téléphone, WhatsApp ou e-mail. Un rendez-vous à Casablanca est également possible.",
  },
  {
    q: "4. Quels services proposez-vous ?",
    a: "Comptabilité et fiscalité (TVA, IS, IR, bilans), création d'entreprise, gestion de la paie et CNSS, ainsi que le conseil juridique et administratif.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-3">
      {ITEMS.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q} className="overflow-hidden rounded-2xl bg-white/10">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-white"
              onClick={() => setOpen(isOpen ? -1 : index)}
            >
              <h3 className="text-sm font-bold sm:text-base">{item.q}</h3>
              <ChevronDown
                size={20}
                className={`shrink-0 transition ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-sm leading-relaxed text-white/80">{item.a}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
