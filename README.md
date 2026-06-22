# Scan Perks Business Site

Static site (Astro SSG) for Scan Perks — business loyalty program for bars, cafes & restaurants.

## SEO Architecture

- **Layer 1 — Technical:** SSG, meta/canonical, sitemap.xml, robots.txt, JSON-LD
- **Layer 2 — Content clusters:** Homepage, pillar, money pages, blog
- **Layer 3 — AI Search:** `public/llms.txt`, `public/ai.txt`

## Develop

```bash
npm install
npm run dev
```

## Build (GitHub Pages)

```bash
npm run build
```

Deploy the `dist/` folder. `public/CNAME` is copied to dist for custom domain `scan-perks.com`.
