"use client";

import { motion } from "framer-motion";

/**
 * Barre de progression du tunnel d'inscription.
 * Affiche "Étape X sur 4" et une ligne animée.
 */
export default function ProgressBar({ currentStep, totalSteps = 4 }) {
  const percent = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-8">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-semibold text-navy">
          Étape {currentStep} sur {totalSteps}
        </span>
        <span className="text-slate-500">{Math.round(percent)} %</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-slate-200">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-brand to-brand-light"
          initial={false}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
