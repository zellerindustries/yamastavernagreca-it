# YAMAS Taverna Greca

Single static restaurant site built with `@minimaz/sitekit`. `src/` is authored, `dist/` is generated — don't hand-edit it.

```bash
npm run build         # mz b --overwrite, src/ -> dist/
npm start              # build, then `mz serve ./dist` (port 4173, set in minimaz.config.json)
node scripts/generate-menu-schema.mjs [--check]   # regenerate/verify the /menu/ JSON-LD block from data.ts
npm run format         # Prettier --write across the repo
npm run format:check   # Prettier --check; also runs as the Husky pre-commit hook
```

Requires Node >=26 (`engines`, `.nvmrc`). The `mz` binary comes from the `@minimaz/sitekit` dependency (`package.json` has no `minimaz-cli`, despite the README). Longer how-tos live in `docs/` (`build-and-deploy.md`, `editing-content.md`, `brand.md`, `design.md`, `legal-checklist.md`).

No test suite. `npm run lint` runs htmlhint, stylelint and cspell (plus `lint:a11y` / `lint:links`, which build first); the Husky pre-commit hook runs `format:check` and the three lints. Config is shared with `zellerindustries-com`; add dish names and terms to `cspell.json` `words` rather than editing copy. `lint:a11y` (axe) and `lint:links` (linkinator) crawl the built `dist/` over HTTP via `scripts/serve-dist.mjs`, which starts `mz serve` on the port from `minimaz.config.json`. Still verify visually with `npm start` + a browser.

`npm run lint:rules` runs the shared workspace rule checker (`../../../.claude/skills/enforcing-rules/scripts/`; skips with a warning if it is missing); that checker is the workspace `enforcing-rules` skill (`../../../.claude/skills/enforcing-rules/`), which can also check and fix this repo rule by rule and the pre-commit hook runs it too. Existing violations are counted in `.claude/rules-baseline.json`; only counts above it fail, and fixing one means lowering it with `node ../../../.claude/skills/enforcing-rules/scripts/index.mjs . --update-baseline`. A project PostToolUse hook in `.claude/settings.json` runs the same checks on each edited CSS/HTML file.

## Build (`minimaz.config.json`)

- `input.mapping` flattens `src/pages/`, `src/styles/`, `src/public/` into `dist/` — **except** page subfolders (`business-card/`, `menu/`), which keep their folder structure in `dist/` instead of flattening (each is a self-contained sub-page with its own colocated CSS/JS, independent of the site's global stylesheet).
- CSS: bundled + minified into a single `dist/style.css`.
- JS/TS: bundled + minified via esbuild — any file reached through an `import` is meant to be inlined into its importer's output and not get its own file in `dist`. Caveat: with `@minimaz/sitekit` 0.2.1 (installed, uncommitted bump from 0.2.0) `dist/menu/` came out unbundled (`app.js` importing separate `data.js`, `languages.js`, `types.js`) despite `js.bundling: true`; the live site still serves the older bundled build. Check `dist/menu/` after any sitekit upgrade, and deploy the whole `dist/`. `.ts`/`.tsx` files compile and rename to `.js` automatically (source can be named `foo.ts`, output is always `foo.js`), so HTML `<script src="...">` tags should reference the `.js` name even when the source is TypeScript.
- HTML is minified on build.
- Top-level pages flatten into `dist/` root. `index.html` references `style.css`/`script.js` directly; `dove-siamo.html` uses `../style.css`/`../script.js` instead — inconsistent with `index.html`, but not actually broken: a `../` from a root-level file resolves back to root per URL spec, so both forms work. Prefer the no-`../` form for any new top-level page for consistency.
- bootstrap-icons font files are remapped from `node_modules` to `/fonts/...` via the `externals`/`replace` config — don't hardcode `node_modules` paths in markup.

## Pages (`src/pages/`)

- `index.html`, `dove-siamo.html`, `contatti.html`, `linkinbio.html`, `privacy.html`, `cookie.html` — standard top-level pages, share the site's global `src/style.css`/`src/styles/*.css` and `src/script.js` (compiled from `src/script.ts`).
- `business-card/` — self-contained digital business card page with its own `card.css` and `card.ts` (the vCard download; no inline script, so its CSP has no `'unsafe-inline'`).
- `ordina/` — the delivery section: `index.html` is the hub (phone and WhatsApp first, then the three apps) and `glovo.html`, `justeat.html`, `alfonsino.html` are one page per app, generated from one template, so a copy change goes in all three. The app pages are `noindex, follow` on purpose: they hold no facts of their own yet (delivery area, delivery hours), so they would be thin content. When those facts are added, switch them to `__ROBOTS__` and add them to `sitemap.xml`. The delivery cards on the home, Dove siamo and Contatti pages link to these pages; the external app URLs (`__GLOVO_URL__` etc.) are only used on the app pages and in Link in Bio. Styles are in `src/styles/order.css`.
- `menu/` — the digital menu, a TypeScript page with the standard site header and footer around its own banner, language picker and sticky category strip (the strip sticks at `--header-height`, below the site header). The page chrome is static HTML now, so `data.ts` holds only the menu and the owner greeting; the page language switch affects the menu text, not the Italian header and footer (`app.ts` imports `data.ts` + `types.ts` + `languages.ts`, bundled by minimaz into one `dist/menu/app.js`). `index.html` also carries a static schema.org `Menu` JSON-LD block between `<!-- menu-schema:start/end -->` markers, generated from `data.ts` by `scripts/generate-menu-schema.mjs` — never hand-edit it; after changing `data.ts`, run the script (`--check` verifies it's current). The language picker is an IT/EN pair of `.pill` buttons (`#lang-picker`, `aria-pressed`), the category links are `.pill.outline`, and dish tags are `.pill` (allergens stay a plain `.item-allergens` line). Pill styles live in `src/styles/pills.css`; the home hero "open now" status is a `.pill` that `script.ts` switches between `.accent` (open) and `.on-dark` (closed). The sticky category bar's highlight (`observeCategories` in `app.ts`) must scroll only the bar (`scrollBy` on `#category-links`), never `link.scrollIntoView`, which also scrolls the page and breaks tap-to-jump on phones.

## Styles and shared page chrome

- `src/style.css` is only an `@import` list of one-topic files in `src/styles/` (`root`, `header`, `hero`, `footer`, `responsive`, …); a new file must be added to that list. Design tokens (colors, spacing, type scale, `--control-height`, `--tap-target`, `--meander-size`, transitions) live in `src/styles/root.css` `:root` — use them, don't add literal values. Derived shades (`--color-primary-dark`, `--color-primary-veil`) use `color-mix()` on `--color-primary`, and `--color-surface` aliases `--color-secondary`; change the base token, not the derived ones. Keep new tokens in use: unused template tokens were removed. There is a single breakpoint, `@media (max-width: 768px)`, collected in `src/styles/responsive.css`; add mobile rules there. Hover styles go inside `@media (hover: hover)` in the owning file so touch devices don't get sticky hovers. Style by class, never by `#id` (the rules forbid ID selectors; keep `id` attributes only for anchors, ARIA and scripts), and use logical properties (`margin-inline`, not `margin-left`).
- Type hierarchy (tokens in `root.css`, rules in `typography.css`, `base.css`, `hero.css`): hero title `--font-size-display` > page `h1` `-xxl` > section `h2` `-xl` (Playfair uppercase) > item `h3` `-lg` (Roboto 600, primary). Add a level by changing weight, family or colour too, not size alone. Small labels, tags and status use `.pill` (`pills.css`: variants `.solid`, `.accent`, `.outline`, `.on-dark`; `a`/`button` pills are clickable), not new one-off chip styles.
- `src/styles/bootstrap-icons.css` declares each icon glyph by hand. A new `<i class="icon name">` needs a matching `.icon.name::before { content }` rule there. `.icon` is `inline-flex` with `line-height: 1` so it centres against adjacent text, so don't add per-icon `margin-top` or `vertical-align` nudges.
- The header, footer and mobile bottom navigation are copy-pasted into each top-level page, not templated. The header logo is one `<a class="logo-wrapper" href="/">` holding both `logo_top` and `logo_bottom`; keep it identical on every page. A change to nav items, contact links or footer markup must be repeated in `index.html`, `dove-siamo.html`, `contatti.html`, `privacy.html`, `cookie.html` and the four `ordina/` pages (and `linkinbio.html` where applicable). The bottom nav opens `/menu/` in the same tab. The footer is a brand column (logo, hours, social) plus one `<nav class="footer-sitemap">` with three menus (Il locale, Menù e ordini, Contatti); a new page or section link goes in that nav on every page that has the footer (all top-level pages including `linkinbio.html`, and `ordina/*`). The menu page (`menu/index.html`) carries the same standard header, footer and bottom bar; only its banner, language picker and category strip are its own.
- `src/script.ts` handles the nav toggle, scroll behaviour and the hero "open now" badge. The badge reads the `data-open`/`data-close` attributes on `.open-status` (filled from the `__HOURS_*__` tokens) and compares them against Europe/Rome time.

## Data model

Menu content lives in `src/pages/menu/data.ts`, typed against `src/pages/menu/types.ts`. All user-facing text (names, descriptions) is bilingual, stored inline as `{ it, en }` objects — there's no i18n library; the page's `app.ts` keeps a `lang` variable and re-renders on toggle. All images live in the one site asset folder, `src/public/assets/` (served at `/assets/`). The menu's are under `assets/menu/`: `dishes/` (the dish photos and the missing-photo `placeholder.webp`, referenced by `BASE` in `data.ts`), `teaser/` (the four home-page photos) and `header-pattern.svg` (a decorative banner, a static `<img>` in `menu/index.html`, not data). This is intentionally frontend-only — there's no backend/API; content changes go directly into `data.ts`.

## Structured data (JSON-LD) across pages

`index.html`, `dove-siamo.html`, `contatti.html` and `linkinbio.html` each embed a `Restaurant` JSON-LD block (`contatti.html` also adds a `ContactPage` and `contactPoint`s for phone and WhatsApp; there is deliberately no contact form or email) describing the same business, tied together via a shared `"@id": "https://yamastavernagreca.it/#restaurant"` — search engines/AI crawlers merge these into one entity rather than three. `sameAs` is reserved for identity/profile links (Facebook, Instagram); the Google Maps link goes in `hasMap` instead. `index.html` additionally embeds a small `hasMenuItem` excerpt inside its `Restaurant.hasMenu` — this is separate from, and must be manually reconciled against, the real menu data in `src/pages/menu/data.ts` (see Data model above); the two have drifted before (wrong prices/descriptions shipped to production).

## Repeated business facts (`minimaz.config.json` -> `output.replace`)

NAP, hours, geo, and social/map links used to be hand-duplicated across every page as literal text — a real source of drift bugs (see above). They're now build-time tokens: source files contain placeholders like `__SITE_URL__`, `__SITE_NAME__`, `__PHONE_DISPLAY__`, `__PHONE_DIGITS__`, `__ADDRESS_STREET__`, `__MAPS_URL__`, `__FACEBOOK_URL__`, `__INSTAGRAM_URL__`, `__GLOVO_URL__`, `__JUSTEAT_URL__`, `__ALFONSINO_URL__` (delivery apps), `__HOURS_OPEN__`, `__HOURS_CLOSE__`, `__GEO_LAT__`, `__GEO_LNG__`, and `minimaz.config.json`'s `output.replace` map is the single source of truth for their real values. To change a phone number, address, or link site-wide, edit it once there — never hand-edit the literal value back into a page.

**Important constraint**: `output.replace` only runs on `.html`, `.css`, `.js`, `.ts`, `.tsx` files (anything else — `.txt`, `.xml`, images — is copied to `dist/` raw, unprocessed). Never put a `__TOKEN__` placeholder in `src/public/robots.txt`, `sitemap.xml`, or `llms.txt` — it would ship to production as literal unresolved text. Those three files must keep real, literal values.

`src/public/robots.txt` explicitly allows major AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.) in addition to the wildcard rule, and `src/public/llms.txt` gives a short site summary for LLM ingestion — both flatten into `dist/` via the same `src/public/` mapping as other static assets.

## Cookies, privacy & CSP

The site runs no CMP/cookie banner, no analytics, and no third-party tracking — this is a deliberate choice, not an oversight. The homepage's YouTube embed uses `youtube-nocookie.com` and `dove-siamo.html`'s map uses the Google Maps Embed API; both are documented by Google as not setting cookies, which is why no consent banner is needed for them. `privacy.html` ("Politica di Riservatezza") and `cookie.html` ("Politica Cookie") are self-hosted top-level pages, linked directly from every page's footer (no intermediate hub page); they state plainly that no cookies/analytics are used and disclose these two embeds. If a future change adds analytics, a tracking pixel, or any cookie-setting embed, both the CSP `<meta>` tag and these two policy pages need to be updated together, or the "no cookies" claim becomes false.

Each page, including `business-card/` and `linkinbio.html`, defines its own `Content-Security-Policy` `<meta>` tag inline rather than sharing one (the `csp-present` rule checks this) — there's no central CSP source, so a new external resource (font, script, embed) must be added to every page's CSP that uses it, by hand.

## Deploy (`.github/workflows/`)

- `deploy.yml`: a push to `main` builds and rsyncs `dist/` over SSH straight to production, with no manual approval. Treat a merge to `main` as an immediate production deploy.
- `deploy-staging.yml`: a push to `develop` deploys to a staging path (`STAGING_SERVER_PATH`). It uses its own `staging` concurrency group, separate from production's.
- Secrets (`SSH_PRIVATE_KEY`, `SSH_KNOWN_HOSTS`, `SERVER_USER`, `SERVER_IP`, `SERVER_PATH`, `STAGING_SERVER_PATH`) are GitHub secrets, not in this repo. Both workflows run `npm ci --omit=dev`, then `npm run build`.

## Scope

@SCOPE.md
