"use client";

import { AnimatePresence, motion } from "framer-motion";

/**
 * Wrapper d'étape : fade + slide horizontal entre les écrans du tunnel.
 */
export default function StepWrapper({ stepKey, children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={stepKey}
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -24 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
