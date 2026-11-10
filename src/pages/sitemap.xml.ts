import type { APIRoute } from 'astro';
import { SITE } from '../data/content';
import { alternativePages } from '../data/alternatives';
import { businessTypePages } from '../data/businessTypes';
import { loyaltyPages } from '../data/loyaltyPages';
import { keywordLandings } from '../data/keywordLandings';
import { blogArticles } from '../data/blogArticles';
import { CANONICAL_OVERRIDES } from '../data/seoCanonicals';
import { allLocalizedPageDefs, getHreflangLinks, pageHref } from '../i18n/pages';
import { LOCALES } from '../i18n/config';

/**
 * URLs that only redirect, or that are noindex. Not listed.
 * Redirects: vercel.json (canonical-override slugs, blog guide) and astro.config.mjs (/press, blog guide).
 */
const NOT_INDEXABLE = new Set<string>([
  ...Object.keys(CANONICAL_OVERRIDES).map((slug) => `/${slug}/`),
  '/press/',
  '/blog/qr-code-loyalty-program-guide/',
  '/outreach/',
]);

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
  'coffee-loyalty-app': '0.5',
  'coffee-shop-loyalty-app': '0.5',
  'coffee-shop-loyalty-programs': '0.99',
  'qr-code-loyalty-program': '0.99',
};

const staticPages = [
  { path: '/', priority: '1.0', changefreq: 'weekly', lastmod: '2026-10-07' },
  { path: '/pub-loyalty-card/', priority: '1.0', changefreq: 'weekly', lastmod: '2026-10-07' },
  { path: '/pub-loyalty-scheme/', priority: '1.0', changefreq: 'weekly', lastmod: '2026-10-07' },
  { path: '/cafe-loyalty-app/', priority: '1.0', changefreq: 'weekly', lastmod: '2026-10-07' },
  { path: '/coffee-loyalty-app/', priority: '0.5', changefreq: 'monthly', lastmod: '2026-11-06' },
  { path: '/coffee-shop-loyalty-app/', priority: '0.5', changefreq: 'monthly', lastmod: '2026-11-06' },
  { path: '/coffee-shop-loyalty-programs/', priority: '0.99', changefreq: 'weekly', lastmod: '2026-10-07' },
  { path: '/qr-code-loyalty-program/', priority: '1.0', changefreq: 'weekly', lastmod: '2026-10-07' },
  { path: '/bar-loyalty-program/', priority: '0.95', changefreq: 'weekly' },
  { path: '/g2/', priority: '0.9', changefreq: 'monthly' },
  { path: '/faq/', priority: '0.98', changefreq: 'weekly', lastmod: '2026-10-07' },
  { path: '/scanbucks/', priority: '0.95', changefreq: 'monthly' },
  { path: '/how-it-works/', priority: '0.98', changefreq: 'weekly', lastmod: '2026-10-07' },
  { path: '/business-loyalty-program/', priority: '0.97', changefreq: 'weekly' },
  { path: '/features/', priority: '0.95', changefreq: 'weekly' },
  { path: '/pricing/', priority: '0.98', changefreq: 'weekly', lastmod: '2026-10-07' },
  { path: '/about/', priority: '0.85', changefreq: 'monthly' },
  { path: '/contact/', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog/', priority: '0.85', changefreq: 'weekly' },
  { path: '/tools/scan-for-stamps/', priority: '0.6', changefreq: 'monthly', lastmod: '2026-11-10' },
  { path: '/tools/stamp-card-cost/', priority: '0.6', changefreq: 'monthly', lastmod: '2026-11-10' },
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
    if (NOT_INDEXABLE.has(u.path)) return;
    if (seen.has(u.path)) {
      const prev = urls.find((item) => item.path === u.path);
      if (prev && !prev.alternates && u.alternates) prev.alternates = u.alternates;
      return;
    }
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

  for (const p of alternativePages) {
    push({
      path: `/${p.slug}/`,
      priority: '0.8',
      changefreq: 'monthly',
      lastmod: '2026-11-10',
    });
  }

  for (const a of blogArticles) {
    const weakBlog = ['best-mobile-loyalty-apps-coffee-shops-2026'].includes(a.slug);
    const priorityBlog = ['best-coffee-loyalty-programs', 'qr-code-vs-punch-cards', 'bar-customer-retention-tips'].includes(
      a.slug
    );
    const supportBlog = ['best-loyalty-app-small-business'].includes(a.slug);
    push({
      path: `/blog/${a.slug}/`,
      priority: priorityBlog ? '0.95' : supportBlog ? '0.78' : weakBlog ? '0.55' : '0.65',
      changefreq: 'weekly',
      lastmod: a.updatedAt ?? a.publishedAt,
    });
  }

  for (const def of allLocalizedPageDefs) {
    const alternates = getHreflangLinks(def).filter((link) => {
      const path = new URL(link.href).pathname;
      return !NOT_INDEXABLE.has(path.endsWith('/') ? path : `${path}/`);
    });

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

  for (const p of businessTypePages) {
    push({
      path: `/${p.slug}/`,
      priority: '0.8',
      changefreq: 'monthly',
      lastmod: '2026-11-10',
    });
  }

  for (const u of urls) {
    if (u.alternates?.length) continue;
    const href = `${SITE.url}${u.path}`;
    u.alternates = [
      { hreflang: 'en', href },
      { hreflang: 'x-default', href },
    ];
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
