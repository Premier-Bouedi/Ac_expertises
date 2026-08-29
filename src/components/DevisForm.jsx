"use client";

import { useState } from "react";

const EMPLOYEE_OPTIONS = [
  { value: "", label: "Nombre d'employés" },
  { value: "0", label: "Aucun (dirigeant seul)" },
  { value: "1-5", label: "1 à 5" },
  { value: "6-10", label: "6 à 10" },
  { value: "11-50", label: "11 à 50" },
  { value: "50+", label: "Plus de 50" },
];

const inputClass =
  "w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-navy outline-none transition placeholder:text-slate-400 focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20";

export default function DevisForm() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    employees: "",
    consent: false,
  });

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.fullName.trim() || !form.email.trim() || !form.phone.trim()) {
      setError("Merci de renseigner votre nom, e-mail et téléphone.");
      return;
    }
    if (!form.consent) {
      setError("Veuillez accepter les conditions d'utilisation.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/inscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, type: "devis" }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.message || "Envoi impossible.");
      }
      setStatus("success");
    } catch (err) {
      setStatus("idle");
      setError(err.message || "Une erreur est survenue. Réessayez ou contactez-nous.");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <p className="text-xl font-extrabold text-navy">Demande envoyée</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          Merci. Un expert-comptable vous contactera dans les plus brefs délais
          pour organiser un rendez-vous téléphonique.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <input
        type="text"
        name="fullName"
        autoComplete="name"
        placeholder="Nom & Prénom"
        value={form.fullName}
        onChange={onChange}
        className={inputClass}
        required
      />
      <input
        type="email"
        name="email"
        autoComplete="email"
        placeholder="Email"
        value={form.email}
        onChange={onChange}
        className={inputClass}
        required
      />
      <input
        type="tel"
        name="phone"
        autoComplete="tel"
        placeholder="Téléphone"
        value={form.phone}
        onChange={onChange}
        className={inputClass}
        required
      />
      <input
        type="text"
        name="company"
        autoComplete="organization"
        placeholder="Nom de l'entreprise"
        value={form.company}
        onChange={onChange}
        className={inputClass}
      />
      <select
        name="employees"
        value={form.employees}
        onChange={onChange}
        className={`${inputClass} ${form.employees ? "text-navy" : "text-slate-400"}`}
      >
        {EMPLOYEE_OPTIONS.map((opt) => (
          <option key={opt.value || "placeholder"} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      <label className="flex items-start gap-3 pt-1 text-xs leading-relaxed text-slate-500">
        <input
          type="checkbox"
          name="consent"
          checked={form.consent}
          onChange={onChange}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-brand focus:ring-brand"
        />
        <span>
          J&apos;accepte les conditions d&apos;utilisation et la politique de
          protection des données d&apos;AC Expertises et Conseils.
        </span>
      </label>

      {error && <p className="text-sm font-semibold text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 w-full rounded-lg bg-brand py-4 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-brand-dark disabled:opacity-70"
      >
        {status === "loading" ? "Envoi en cours…" : "Envoyer"}
      </button>
    </form>
  );
}
