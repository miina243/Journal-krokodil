import { NextResponse } from "next/server";

/**
 * Aucun fournisseur newsletter n'est branché aujourd'hui. Cet endpoint ne simule
 * jamais une inscription réussie — il répond honnêtement tant qu'aucun provider
 * (Buttondown, Beehiiv, Substack, Mailchimp, Brevo…) n'est configuré ci-dessous.
 */
export async function POST() {
  const provider = process.env.NEWSLETTER_PROVIDER;

  if (!provider) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "La lettre du chantier n'est pas encore branchée à un envoyeur d'emails. Reviens bientôt.",
      },
      { status: 503 },
    );
  }

  // Point d'intégration futur : brancher ici l'appel API du provider choisi
  // (NEWSLETTER_PROVIDER=buttondown|beehiiv|mailchimp|brevo) selon les variables
  // d'environnement associées.
  return NextResponse.json(
    { ok: false, message: "Fournisseur newsletter non implémenté." },
    { status: 501 },
  );
}
