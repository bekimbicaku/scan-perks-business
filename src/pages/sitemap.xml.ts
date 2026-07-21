import type { APIRoute } from 'astro';
import { SITE } from '../data/content';
import { loyaltyPages } from '../data/loyaltyPages';
import { keywordLandings } from '../data/keywordLandings';
import { blogArticles } from '../data/blogArticles';
import { allLocalizedPageDefs, pageHref } from '../i18n/pages';
import { LOCALES, type Locale } from '../i18n/config';

const MONEY_PAGE_PRIORITY: Record<string, string> = {
  'bar-loyalty-program': '0.95',
  'cafe-loyalty-program': '0.5',
  'qr-loyalty-program': '0.5',
  'restaurant-loyalty-program': '0.97',
  'grow-restaurant-business': '0.96',
};

const KEYWORD_LANDING_PRIORITY: Record<string, string> = {
  'pub-loyalty-card': '1.0',
  'pub-loyalty-scheme': '1.0',
  'cafe-loyalty-app': '1.0',
  'coffee-shop-loyalty-programs': '0.99',
  'qr-code-loyalty-program': '0.99',
};

const staticPages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/pub-loyalty-card/', priority: '1.0', changefreq: 'weekly' },
  { path: '/pub-loyalty-scheme/', priority: '1.0', changefreq: 'weekly' },
  { path: '/cafe-loyalty-app/', priority: '1.0', changefreq: 'weekly' },
  { path: '/coffee-shop-loyalty-programs/', priority: '0.99', changefreq: 'weekly' },
  { path: '/qr-code-loyalty-program/', priority: '0.99', changefreq: 'weekly' },
  { path: '/bar-loyalty-program/', priority: '0.95', changefreq: 'weekly' },
  { path: '/g2/', priority: '0.9', changefreq: 'monthly' },
  { path: '/faq/', priority: '0.98', changefreq: 'weekly' },
  { path: '/scanbucks/', priority: '0.95', changefreq: 'monthly' },
  { path: '/how-it-works/', priority: '0.96', changefreq: 'monthly' },
  { path: '/business-loyalty-program/', priority: '0.97', changefreq: 'weekly' },
  { path: '/features/', priority: '0.95', changefreq: 'weekly' },
  { path: '/pricing/', priority: '0.95', changefreq: 'monthly' },
  { path: '/about/', priority: '0.85', changefreq: 'monthly' },
  { path: '/contact/', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog/', priority: '0.85', changefreq: 'weekly' },
];

type SitemapUrl = {
  path: string;
  priority: string;
  changefreq: string;
  lastmod?: string;
  alternates?: { hreflang: string; href: string }[];
};

function xhtmlLinks(alternates: { hreflang: string; href: string }[]): string {
  return alternates
    .map(
      (a) =>
        `\n    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}" />`
    )
    .join('');
}

export const GET: APIRoute = () => {
  const staticPaths = new Set(staticPages.map((p) => p.path));
  const seen = new Set<string>();

  const urls: SitemapUrl[] = [];

  const push = (u: SitemapUrl) => {
    if (seen.has(u.path)) return;
    seen.add(u.path);
    urls.push(u);
  };

  for (const p of staticPages) push({ ...p });

  for (const p of loyaltyPages) {
    const path = `/${p.slug}/`;
    if (staticPaths.has(path)) continue;
    push({
      path,
      priority: MONEY_PAGE_PRIORITY[p.slug] ?? '0.9',
      changefreq:
        p.slug.includes('cafe-loyalty-program') || p.slug.includes('qr-loyalty-program')
          ? 'monthly'
          : 'weekly',
    });
  }

  for (const p of keywordLandings) {
    const path = `/${p.slug}/`;
    if (staticPaths.has(path)) continue;
    push({
      path,
      priority: KEYWORD_LANDING_PRIORITY[p.slug] ?? '0.98',
      changefreq: 'weekly',
    });
  }

  for (const a of blogArticles) {
    push({
      path: `/blog/${a.slug}/`,
      priority: [
        'best-coffee-loyalty-programs',
        'qr-code-loyalty-program-guide',
        'best-mobile-loyalty-apps-coffee-shops-2026',
        'how-to-choose-qr-loyalty-program-cafe',
      ].includes(a.slug)
        ? '0.92'
        : '0.8',
      changefreq: 'monthly',
      lastmod: a.publishedAt,
    });
  }

  for (const def of allLocalizedPageDefs) {
    const alternates = (LOCALES as readonly Locale[]).map((locale) => ({
      hreflang: locale,
      href: `${SITE.url}${pageHref(def, locale)}`,
    }));
    alternates.push({ hreflang: 'x-default', href: `${SITE.url}${pageHref(def, 'en')}` });

    for (const locale of LOCALES) {
      const path = pageHref(def, locale);
      const priority =
        def.id === 'home'
          ? '1.0'
          : def.id === 'pricing' || def.id === 'features'
            ? '0.95'
            : locale === 'en'
              ? '0.98'
              : '0.9';
      push({
        path,
        priority,
        changefreq: 'weekly',
        alternates,
      });
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map(
    (u) => `  <url>
    <loc>${SITE.url}${u.path}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>${u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ''}${
      u.alternates ? xhtmlLinks(u.alternates) : ''
    }
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
