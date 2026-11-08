# YAMAS Taverna Greca — Docs

Static site for the restaurant, built with `minimaz-cli`. `src/` is authored, `dist/` is generated output (never edit it by hand).

- [Editing content](editing-content.md) — change menu, hours, phone, links
- [Brand & restyle scope](brand.md) — concept, palette, motif, what is in/out of scope
- [Privacy, cookie & terms checklist](legal-checklist.md) — what to verify before each release, with sources
- [Design](design.md) — colours, type, spacing, components, accessibility rules
- [Build & deploy](build-and-deploy.md) — run locally, ship to production

## Layout

```
src/pages/      HTML pages (index, dove-siamo, linkinbio, privacy, cookie)
src/pages/menu/ digital menu (TypeScript, data in data.ts)
src/pages/business-card/  standalone card page
src/styles/     global CSS
src/public/     static files (robots.txt, sitemap.xml, llms.txt, assets/)
minimaz.config.json  build config + site-wide business facts
```
