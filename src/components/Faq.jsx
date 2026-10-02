"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const ITEMS = [
  {
    q: "Vous ne savez pas vraiment si votre entreprise gagne de l'argent ?",
    a: "Nous mettons en place des tableaux de bord clairs et un suivi régulier pour que vous connaissiez toujours la rentabilité exacte de votre activité en temps réel.",
  },
  {
    q: "Votre comptabilité est en retard, ou faite uniquement pour la déclaration fiscale ?",
    a: "Nous prenons en charge la saisie au fil de l'eau. Votre comptabilité devient un véritable outil de pilotage disponible toute l'année, et plus seulement une obligation de fin d'année.",
  },
  {
    q: "Les banques et investisseurs refusent vos dossiers faute de chiffres fiables ?",
    a: "Nos experts élaborent des prévisionnels solides et des dossiers financiers irréprochables qui inspirent confiance à tous vos partenaires (banques, fonds, investisseurs).",
  },
  {
    q: "Vous craignez un contrôle fiscal ou des pénalités ?",
    a: "Grâce à notre veille réglementaire et à nos diagnostics rigoureux, nous garantissons la parfaite conformité de vos comptes. Soyez serein, nous sécurisons vos déclarations.",
  },
  {
    q: "Vous n'avez pas les moyens d'un cabinet classique ?",
    a: "Notre modèle d'externalisation optimisé nous permet de vous proposer un accompagnement sur-mesure de très haute qualité, à des tarifs transparents, flexibles et maîtrisés.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-3">
      {ITEMS.map((item, index) => {
        const isOpen = open === index;
        return (
          <div
            key={item.q}
            className="overflow-hidden rounded-2xl bg-white/10 transition-all duration-300 hover:bg-white/15"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-white transition hover:text-brand-light"
              onClick={() => setOpen(isOpen ? -1 : index)}
            >
              <h3 className="text-sm font-bold sm:text-base">{item.q}</h3>
              <ChevronDown
                size={20}
                className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-brand-light" : ""}`}
              />
            </button>
            {isOpen && (
              <div className="animate-slide-down px-5 pb-5 text-sm leading-relaxed text-white/80">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
