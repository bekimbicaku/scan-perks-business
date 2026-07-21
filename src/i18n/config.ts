export const LOCALES = ['en', 'es', 'de', 'fr', 'it'] as const;
export type Locale = (typeof LOCALES)[number];

/** Non-default locales get URL prefix: /es/, /de/, … English stays at root. */
export const DEFAULT_LOCALE: Locale = 'en';
export const PREFIXED_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE);

export const LOCALE_META: Record<
  Locale,
  { htmlLang: string; hreflang: string; name: string; nativeName: string; regionHint: string }
> = {
  en: { htmlLang: 'en', hreflang: 'en', name: 'English', nativeName: 'English', regionHint: 'US & UK' },
  es: { htmlLang: 'es', hreflang: 'es', name: 'Spanish', nativeName: 'Español', regionHint: 'España & LatAm' },
  de: { htmlLang: 'de', hreflang: 'de', name: 'German', nativeName: 'Deutsch', regionHint: 'Deutschland & AT/CH' },
  fr: { htmlLang: 'fr', hreflang: 'fr', name: 'French', nativeName: 'Français', regionHint: 'France & BE/CH' },
  it: { htmlLang: 'it', hreflang: 'it', name: 'Italian', nativeName: 'Italiano', regionHint: 'Italia' },
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function isPrefixedLocale(value: string): value is Exclude<Locale, 'en'> {
  return PREFIXED_LOCALES.includes(value as Exclude<Locale, 'en'>);
}

/** Path for a page in a given locale. EN has no prefix. */
export function localePath(locale: Locale, path = '/'): string {
  const clean = path === '/' ? '/' : `/${path.replace(/^\/|\/$/g, '')}/`;
  if (locale === DEFAULT_LOCALE) return clean;
  if (clean === '/') return `/${locale}/`;
  return `/${locale}${clean}`;
}

export function stripLocaleFromPath(pathname: string): { locale: Locale; path: string } {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length && isPrefixedLocale(parts[0])) {
    const locale = parts[0];
    const rest = parts.slice(1).join('/');
    return { locale, path: rest ? `/${rest}/` : '/' };
  }
  return { locale: DEFAULT_LOCALE, path: pathname.endsWith('/') || pathname === '' ? pathname || '/' : `${pathname}/` };
}
