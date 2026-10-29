# Editing content

## Menu

Edit `src/pages/menu/data.ts` (typed by `types.ts`). Names and descriptions are bilingual: `{ it, en }`.

The homepage JSON-LD (`index.html` → `hasMenuItem`) is a separate excerpt. Update it by hand when prices or descriptions change.

## Phone, address, hours, links

Edit the `output.replace` map in `minimaz.config.json` (e.g. `__PHONE_DISPLAY__`, `__HOURS_OPEN__`, `__MAPS_URL__`, `__GLOVO_URL__`). Pages use these placeholders and the build fills them in. Don't hard-code the values in HTML.

Placeholders are only replaced in `.html`, `.css`, `.js`, `.ts`, `.tsx`. Files in `src/public/` such as `robots.txt`, `sitemap.xml`, `llms.txt` must contain literal values.

## Delivery apps

The "Ordina a Domicilio" section lives in `index.html` (`#delivery`). Logos are in `src/public/assets/delivery/`; URLs come from the placeholders above.

## Privacy

The site sets no cookies and has no analytics. If you add analytics or any cookie-setting embed, update the CSP `<meta>` tag on each page and the text of `privacy.html` and `cookie.html`.
