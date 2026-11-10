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

No test suite. `npm run lint` runs htmlhint, stylelint and cspell (plus `lint:a11y` / `lint:links`, which build first); the Husky pre-commit hook runs `format:check` and the three lints. Config is shared with `zellerindustries-com`; add dish names and terms to `cspell.json` `words` rather than editing copy. Still verify visually with `npm start` + a browser.

## Build (`minimaz.config.json`)

- `input.mapping` flattens `src/pages/`, `src/styles/`, `src/public/` into `dist/` — **except** page subfolders (`business-card/`, `menu/`), which keep their folder structure in `dist/` instead of flattening (each is a self-contained sub-page with its own colocated CSS/JS, independent of the site's global stylesheet).
- CSS: bundled + minified into a single `dist/style.css`.
- JS/TS: bundled + minified via esbuild — any file reached through an `import` is inlined into its importer's output and does **not** get its own file in `dist`. `.ts`/`.tsx` files compile and rename to `.js` automatically (source can be named `foo.ts`, output is always `foo.js`), so HTML `<script src="...">` tags should reference the `.js` name even when the source is TypeScript.
- HTML is minified on build.
- Top-level pages flatten into `dist/` root. `index.html` references `style.css`/`script.js` directly; `dove-siamo.html` uses `../style.css`/`../script.js` instead — inconsistent with `index.html`, but not actually broken: a `../` from a root-level file resolves back to root per URL spec, so both forms work. Prefer the no-`../` form for any new top-level page for consistency.
- bootstrap-icons font files are remapped from `node_modules` to `/fonts/...` via the `externals`/`replace` config — don't hardcode `node_modules` paths in markup.

## Pages (`src/pages/`)

- `index.html`, `dove-siamo.html`, `linkinbio.html`, `privacy.html`, `cookie.html` — standard top-level pages, share the site's global `src/style.css`/`src/styles/*.css` and `src/script.js` (compiled from `src/script.ts`).
- `business-card/` — self-contained digital business card page with its own `card.css`.
- `menu/` — a standalone TypeScript digital menu (`app.ts` imports `data.ts` + `types.ts` + `languages.ts`, bundled by minimaz into one `dist/menu/app.js`). `index.html` also carries a static schema.org `Menu` JSON-LD block between `<!-- menu-schema:start/end -->` markers, generated from `data.ts` by `scripts/generate-menu-schema.mjs` — never hand-edit it; after changing `data.ts`, run the script (`--check` verifies it's current).

## Styles and shared page chrome

- `src/styles/base.css` is the site stylesheet. Design tokens (colors, spacing, type scale, `--control-height`, `--tap-target`, `--meander-size`, transitions) live in its `:root` — use them, don't add literal values. There is a single breakpoint, `@media (max-width: 768px)`; add mobile rules to that block. Hover styles go inside `@media (hover: hover)` so touch devices don't get sticky hovers.
- `src/styles/bootstrap-icons.css` declares each icon glyph by hand. A new `<i class="icon name">` needs a matching `.icon.name::before { content }` rule there. `.icon` is `inline-flex` with `line-height: 1` so it centres against adjacent text, so don't add per-icon `margin-top` or `vertical-align` nudges.
- The header, footer and mobile bottom navigation are copy-pasted into each top-level page, not templated. A change to nav items, contact links or footer markup must be repeated in `index.html`, `dove-siamo.html`, `privacy.html` and `cookie.html` (and `linkinbio.html` where applicable). The bottom nav opens `/menu/` in the same tab.
- `src/script.ts` handles the nav toggle, scroll behaviour and the hero "open now" badge. The badge reads the `data-open`/`data-close` attributes on `.open-status` (filled from the `__HOURS_*__` tokens) and compares them against Europe/Rome time.

## Data model

Menu content lives in `src/pages/menu/data.ts`, typed against `src/pages/menu/types.ts`. All user-facing text (names, descriptions) is bilingual, stored inline as `{ it, en }` objects — there's no i18n library; the page's `app.ts` keeps a `lang` variable and re-renders on toggle. Menu item images point at a public S3 bucket (`restaurant-menu-pics.s3.eu-south-1.amazonaws.com`). This is intentionally frontend-only — there's no backend/API; content changes go directly into `data.ts`.

## Structured data (JSON-LD) across pages

`index.html`, `dove-siamo.html`, and `linkinbio.html` each embed a `Restaurant` JSON-LD block describing the same business, tied together via a shared `"@id": "https://yamastavernagreca.it/#restaurant"` — search engines/AI crawlers merge these into one entity rather than three. `sameAs` is reserved for identity/profile links (Facebook, Instagram); the Google Maps link goes in `hasMap` instead. `index.html` additionally embeds a small `hasMenuItem` excerpt inside its `Restaurant.hasMenu` — this is separate from, and must be manually reconciled against, the real menu data in `src/pages/menu/data.ts` (see Data model above); the two have drifted before (wrong prices/descriptions shipped to production).

## Repeated business facts (`minimaz.config.json` -> `output.replace`)

NAP, hours, geo, and social/map links used to be hand-duplicated across every page as literal text — a real source of drift bugs (see above). They're now build-time tokens: source files contain placeholders like `__SITE_URL__`, `__SITE_NAME__`, `__PHONE_DISPLAY__`, `__PHONE_DIGITS__`, `__ADDRESS_STREET__`, `__MAPS_URL__`, `__FACEBOOK_URL__`, `__INSTAGRAM_URL__`, `__GLOVO_URL__`, `__JUSTEAT_URL__`, `__ALFONSINO_URL__` (delivery apps), `__HOURS_OPEN__`, `__HOURS_CLOSE__`, `__GEO_LAT__`, `__GEO_LNG__`, and `minimaz.config.json`'s `output.replace` map is the single source of truth for their real values. To change a phone number, address, or link site-wide, edit it once there — never hand-edit the literal value back into a page.

**Important constraint**: `output.replace` only runs on `.html`, `.css`, `.js`, `.ts`, `.tsx` files (anything else — `.txt`, `.xml`, images — is copied to `dist/` raw, unprocessed). Never put a `__TOKEN__` placeholder in `src/public/robots.txt`, `sitemap.xml`, or `llms.txt` — it would ship to production as literal unresolved text. Those three files must keep real, literal values.

`src/public/robots.txt` explicitly allows major AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.) in addition to the wildcard rule, and `src/public/llms.txt` gives a short site summary for LLM ingestion — both flatten into `dist/` via the same `src/public/` mapping as other static assets.

## Cookies, privacy & CSP

The site runs no CMP/cookie banner, no analytics, and no third-party tracking — this is a deliberate choice, not an oversight. The homepage's YouTube embed uses `youtube-nocookie.com` and `dove-siamo.html`'s map uses the Google Maps Embed API; both are documented by Google as not setting cookies, which is why no consent banner is needed for them. `privacy.html` ("Politica di Riservatezza") and `cookie.html` ("Politica Cookie") are self-hosted top-level pages, linked directly from every page's footer (no intermediate hub page); they state plainly that no cookies/analytics are used and disclose these two embeds. If a future change adds analytics, a tracking pixel, or any cookie-setting embed, both the CSP `<meta>` tag and these two policy pages need to be updated together, or the "no cookies" claim becomes false.

Each top-level page defines its own `Content-Security-Policy` `<meta>` tag inline (in `index.html` and `dove-siamo.html`) rather than sharing one — there's no central CSP source, so a new external resource (font, script, embed) must be added to every page's CSP that uses it, by hand.

## Deploy (`.github/workflows/`)

- `deploy.yml`: a push to `main` builds and rsyncs `dist/` over SSH straight to production, with no manual approval. Treat a merge to `main` as an immediate production deploy.
- `deploy-staging.yml` (still untracked, so not yet on the remote): a push to `develop` deploys to a staging path (`STAGING_SERVER_PATH`). It uses its own `staging` concurrency group, separate from production's.
- Secrets (`SSH_PRIVATE_KEY`, `SSH_KNOWN_HOSTS`, `SERVER_USER`, `SERVER_IP`, `SERVER_PATH`, `STAGING_SERVER_PATH`) are GitHub secrets, not in this repo. Both workflows run `npm ci --omit=dev`, then `npm run build`.

## Scope

@SCOPE.md
