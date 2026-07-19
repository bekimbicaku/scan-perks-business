/**
 * Preferred URLs for SEO consolidation (GSC Jul 2026).
 * Secondary pages stay live but point canonical → primary to avoid cannibalization.
 */
export const CANONICAL_OVERRIDES: Record<string, string> = {
  'cafe-loyalty-program': '/cafe-loyalty-app/',
  'qr-loyalty-program': '/qr-code-loyalty-program/',
  // bar page keeps its own URL (US "bar loyalty") but UK pub queries prefer these:
  // no override — instead we push internal links to pub-loyalty-*
};

/** Primary money URLs to promote in internal links & outreach */
export const PRIMARY_MONEY_URLS = {
  cafeLoyaltyApp: '/cafe-loyalty-app/',
  pubLoyaltyScheme: '/pub-loyalty-scheme/',
  pubLoyaltyCard: '/pub-loyalty-card/',
  coffeeShopLoyalty: '/coffee-shop-loyalty-programs/',
  qrCodeLoyalty: '/qr-code-loyalty-program/',
  barLoyalty: '/bar-loyalty-program/',
} as const;

export function resolveCanonicalPath(path: string): string {
  const slug = path.replace(/^\/|\/$/g, '');
  const override = CANONICAL_OVERRIDES[slug];
  return override ?? (path.endsWith('/') ? path : `${path}/`);
}

export function getCanonicalOverrideForSlug(slug: string): string | undefined {
  return CANONICAL_OVERRIDES[slug];
}
