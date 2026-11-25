import type { Locale } from './config';
import { phrases } from '../data/site-facts';
import { promoVideos } from '../data/videos';

export type PromoVideoCopy = {
  title: string;
  description: string;
};

type PromoVideoId = (typeof promoVideos)[number]['id'];

const en: Record<PromoVideoId, PromoVideoCopy> = Object.fromEntries(
  promoVideos.map((v) => [v.id, { title: v.title, description: v.description }])
) as Record<PromoVideoId, PromoVideoCopy>;

const es: Record<PromoVideoId, PromoVideoCopy> = {
  promo: {
    title: 'Scan Perks en 37 segundos — fidelización QR para cafeterías',
    description: `Los clientes escanean el QR del mostrador en la app Scan Perks. Cada visita suma un sello, las ofertas llegan al móvil y tú ves cada visita en el panel. ${phrases.es.starterPerMonth}, ${phrases.es.trialDays} de prueba, sin contrato, sin TPV.`,
  },
  'after-hours': {
    title: 'Scan Perks de noche — fidelización para bares, pubs y cafeterías nocturnas',
    description:
      'Sustituye las cartillas de papel por un QR que los clientes escanean en la barra. Cada visita queda registrada y, si la noche está floja, envías una oferta como doble sello hasta las 18:00. Convierte primeras visitas en habituales con Scan Perks.',
  },
};

const de: Record<PromoVideoId, PromoVideoCopy> = {
  promo: {
    title: 'Scan Perks in 37 Sekunden — QR-Loyalty für Cafés',
    description: `Gäste scannen den Theken-QR in der Scan-Perks-App. Jeder Besuch bringt einen Stempel, Angebote landen auf dem Handy, und du siehst jeden Besuch im Dashboard. ${phrases.de.starterPerMonth}, ${phrases.de.trialDays} Test, kein Vertrag, kein POS.`,
  },
  'after-hours': {
    title: 'Scan Perks nach Feierabend — Loyalty für Bars, Pubs und späte Cafés',
    description:
      'Ersetze Papier-Stempelkarten durch einen QR, den Gäste an der Bar scannen. Jeder Besuch wird erfasst, und wenn es ruhig ist, schickst du ein Angebot wie Doppelstempel bis 18 Uhr. Mach aus Erstbesuchen Stammgäste mit Scan Perks.',
  },
};

const fr: Record<PromoVideoId, PromoVideoCopy> = {
  promo: {
    title: 'Scan Perks en 37 secondes — fidélité QR pour cafés',
    description: `Les clients scannent le QR du comptoir dans l’app Scan Perks. Chaque visite gagne un tampon, les offres arrivent sur le téléphone, et vous voyez chaque visite dans le tableau de bord. ${phrases.fr.starterPerMonth}, essai ${phrases.fr.trialDays}, sans contrat, sans caisse.`,
  },
  'after-hours': {
    title: 'Scan Perks en soirée — fidélité pour bars, pubs et cafés tardifs',
    description:
      'Remplacez les cartes tampon papier par un QR scanné au bar. Chaque visite est enregistrée et, quand la soirée est calme, vous envoyez une offre comme double tampon jusqu’à 18 h. Transformez les premières visites en habitués avec Scan Perks.',
  },
};

const it: Record<PromoVideoId, PromoVideoCopy> = {
  promo: {
    title: 'Scan Perks in 37 secondi — loyalty QR per caffè',
    description: `I clienti scansionano il QR del bancone nell’app Scan Perks. Ogni visita guadagna un timbro, le offerte arrivano sul telefono e tu vedi ogni visita in dashboard. ${phrases.it.starterPerMonth}, prova ${phrases.it.trialDays}, nessun contratto, nessun POS.`,
  },
  'after-hours': {
    title: 'Scan Perks di sera — loyalty per bar, pub e caffè notturni',
    description:
      'Sostituisci le tessere di cartone con un QR che i clienti scansionano al bancone. Ogni visita è registrata e, se la serata è lenta, invii un’offerta come doppio timbro fino alle 18. Trasforma le prime visite in abituali con Scan Perks.',
  },
};

export const promoVideoCopy: Record<Locale, Record<PromoVideoId, PromoVideoCopy>> = {
  en,
  es,
  de,
  fr,
  it,
};

/** Caption track label + VTT path suffix for each locale */
export const promoCaptionMeta: Record<Locale, { srclang: string; label: string; fileSuffix: string }> = {
  en: { srclang: 'en', label: 'English', fileSuffix: '' },
  es: { srclang: 'es', label: 'Español', fileSuffix: '.es' },
  de: { srclang: 'de', label: 'Deutsch', fileSuffix: '.de' },
  fr: { srclang: 'fr', label: 'Français', fileSuffix: '.fr' },
  it: { srclang: 'it', label: 'Italiano', fileSuffix: '.it' },
};

export function getPromoVideoCopy(id: string, locale: Locale): PromoVideoCopy {
  const byLocale = promoVideoCopy[locale];
  return byLocale[id as PromoVideoId] ?? promoVideoCopy.en[id as PromoVideoId];
}

export function captionTrackSrc(mp4Src: string, locale: Locale): string {
  const { fileSuffix } = promoCaptionMeta[locale];
  if (!fileSuffix) return mp4Src.replace('.mp4', '.vtt');
  return mp4Src.replace('.mp4', `${fileSuffix}.vtt`);
}
