import { LOCALES } from '../i18n/config';
import { allLocalizedPageDefs, pageHref } from '../i18n/pages';

/** One 1200×630 share image per page type. Files live in public/og/. */
export type OgKind =
  | 'home'
  | 'pricing'
  | 'features'
  | 'how'
  | 'faq'
  | 'blog'
  | 'about'
  | 'contact'
  | 'product';

const KIND_BY_ID: Record<string, OgKind> = {
  home: 'home',
  pricing: 'pricing',
  features: 'features',
  'how-it-works': 'how',
  faq: 'faq',
  about: 'about',
  contact: 'contact',
};

const kindByPath = new Map<string, OgKind>();

for (const def of allLocalizedPageDefs) {
  const kind = KIND_BY_ID[def.id] ?? 'product';
  for (const locale of LOCALES) {
    kindByPath.set(pageHref(def, locale), kind);
  }
}

export function ogImageForPath(path: string): string {
  const normalized = path.endsWith('/') ? path : `${path}/`;
  const kind = kindByPath.get(normalized) ?? (normalized.startsWith('/blog') ? 'blog' : 'product');
  return `/og/${kind}.png`;
}
