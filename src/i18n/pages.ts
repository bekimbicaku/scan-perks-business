import type { Locale } from './config';
import { DEFAULT_LOCALE, localePath, PREFIXED_LOCALES } from './config';
import { localizedPages, type LocalizedPageDef, type LocalizedPageContent } from './localizedPages';
import { localizedVerticals, nicheVerticals } from './verticals';
import { extraLocalizedPages } from './extraPages';
import { SITE } from '../data/content';

export const allLocalizedPageDefs: LocalizedPageDef[] = [
  ...localizedPages,
  ...extraLocalizedPages,
  ...localizedVerticals,
  ...nicheVerticals,
];

export function getPageDef(id: string): LocalizedPageDef | undefined {
  return allLocalizedPageDefs.find((p) => p.id === id);
}

export function getContent(def: LocalizedPageDef, locale: Locale): LocalizedPageContent {
  return def.content[locale];
}

/** Absolute site path for a page in a locale */
export function pageHref(def: LocalizedPageDef, locale: Locale): string {
  const c = def.content[locale];
  if (locale === DEFAULT_LOCALE) {
    if (def.id === 'home') return '/';
    if (def.enPath && def.enPath !== '/') return def.enPath;
    return c.slug ? `/${c.slug}/` : '/';
  }
  if (!c.slug) return localePath(locale, '/');
  return localePath(locale, `/${c.slug}/`);
}

export function findByLocaleSlug(
  locale: Locale,
  slug: string
): { def: LocalizedPageDef; content: LocalizedPageContent } | undefined {
  for (const def of allLocalizedPageDefs) {
    if (def.id === 'home') continue;
    const c = def.content[locale];
    if (c.slug === slug) return { def, content: c };
  }
  return undefined;
}

export function getHreflangLinks(def: LocalizedPageDef): { hreflang: string; href: string }[] {
  const links = (['en', 'es', 'de', 'fr', 'it'] as Locale[]).map((locale) => ({
    hreflang: locale,
    href: `${SITE.url}${pageHref(def, locale)}`,
  }));
  links.push({ hreflang: 'x-default', href: `${SITE.url}${pageHref(def, 'en')}` });
  return links;
}

export function enNicheSlugPaths(): { slug: string; def: LocalizedPageDef }[] {
  return nicheVerticals.map((def) => ({
    slug: def.content.en.slug,
    def,
  }));
}

/** Match existing EN landing slug to a localized page def (for hreflang). */
export function findDefByEnSlug(slug: string): LocalizedPageDef | undefined {
  return allLocalizedPageDefs.find(
    (d) => d.content.en.slug === slug || d.enPath === `/${slug}/`
  );
}

export { PREFIXED_LOCALES };
