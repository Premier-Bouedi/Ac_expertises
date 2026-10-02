import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// 1. Configuration du transporteur SMTP Gmail
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // TLS sur le port 587
  auth: {
    user: process.env.GMAIL_USER, // Ex: boomaboy241@gmail.com
    pass: process.env.GMAIL_APP_PASS, // Mot de passe d'application Google (16 caractères)
  },
});

/**
 * Réception des demandes de devis et envoi par e-mail.
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

    try {
      const info = await transporter.sendMail({
        from: `"AC Expertises" <${process.env.GMAIL_USER}>`,
        to: "Adamodessouza4545@gmail.com", // Adresse de réception des devis
        replyTo: payload.email, // Vous pourrez répondre directement au client
        subject: `[Devis AC Expertises] Nouvelle demande de ${payload.fullName || payload.email}`,
        text: `Nouveau devis demandé :\n\n- Nom / Prénom : ${payload.fullName || "Non renseigné"}\n- E-mail du client : ${payload.email}\n- Téléphone : ${payload.phone || "Non renseigné"}\n- Entreprise : ${payload.company || "Non renseigné"}\n- Nombre d'employés : ${payload.employees || "Non renseigné"}`,
        html: `
          <h2>Nouvelle demande de devis gratuit - AC Expertises</h2>
          <p><strong>Nom / Prénom :</strong> ${payload.fullName || "Non renseigné"}</p>
          <p><strong>E-mail :</strong> <a href="mailto:${payload.email}">${payload.email}</a></p>
          <p><strong>Téléphone :</strong> ${payload.phone || "Non renseigné"}</p>
          <p><strong>Entreprise :</strong> ${payload.company || "Non renseigné"}</p>
          <p><strong>Nombre d'employés :</strong> ${payload.employees || "Non renseigné"}</p>
        `,
      });

      console.log("Message envoyé :", info.messageId);
    } catch (emailError) {
      console.error("Erreur Nodemailer :", emailError);
      return NextResponse.json(
        { ok: false, message: "Erreur lors de l'envoi de l'e-mail." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Erreur serveur :", err);
    return NextResponse.json(
      { ok: false, message: "Impossible d'enregistrer la demande." },
      { status: 500 }
    );
  }
}
