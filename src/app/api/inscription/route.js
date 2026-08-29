import { NextResponse } from "next/server";

/**
 * Réception des demandes de devis.
 * Branchez ici un CRM, un e-mail (Resend, etc.) ou une feuille Google.
 */
export async function POST(request) {
  try {
    const payload = await request.json();

    if (!payload?.fullName || !payload?.email || !payload?.phone) {
      return NextResponse.json(
        { ok: false, message: "Champs obligatoires manquants." },
        { status: 400 }
      );
    }

    console.log("[Inscription] Nouvelle demande :", payload);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Impossible d'enregistrer la demande." },
      { status: 500 }
    );
  }
}
