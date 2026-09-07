# YAMAS - Taverna Greca

Static site for the YAMAS Taverna Greca restaurant (San Vitaliano, NA, Italy), built with [minimaz-cli](https://www.npmjs.com/package/minimaz-cli).

## Getting started

```bash
nvm use          # Node version pinned in .nvmrc
npm install
npm start        # build, then serve ./dist at http://localhost:3000
```

## Scripts

| Script                 | Description                                                    |
| ---------------------- | -------------------------------------------------------------- |
| `npm run build`        | Build `src/` -> `dist/` via minimaz-cli                        |
| `npm start`            | Build, then serve `./dist` with `serve`                        |
| `npm run format`       | Format the codebase with Prettier                              |
| `npm run format:check` | Check formatting without writing (used by the pre-commit hook) |

A Husky pre-commit hook runs `format:check` automatically.

## Structure

- `src/pages/` - page sources. Top-level pages (`index.html`, `dove-siamo.html`, `linkinbio.html`, `policies.html`) flatten into `dist/`; `menu/` and `business-card/` are self-contained sub-pages that keep their folder structure, each with colocated CSS/JS/TS.
- `src/styles/`, `src/style.css` - global stylesheet, bundled into a single `dist/style.css`.
- `src/script.ts` - global site script, compiled to `dist/script.js`.
- `src/public/` - static assets, `robots.txt`, `sitemap.xml`, `llms.txt`, flattened into `dist/`.
- `dist/` - build output. Generated, gitignored, never hand-edited.
- `_old/` - archive of an earlier two-project layout (`website/` + an Angular `restaurant-app/`). Not built or edited.

## Menu data

The digital menu at `/menu/` (`src/pages/menu/`) is a standalone TypeScript app (`app.ts` + `data.ts` + `types.ts`), bundled by minimaz into `dist/menu/app.js`. All copy is bilingual (`{ it, en }`). This data is independent from the small menu excerpt embedded in `index.html`'s structured data (JSON-LD) — a menu change in one place does not propagate to the other.

There is no backend; content changes go directly into source files.

See `.claude/CLAUDE.md` for repository conventions used by Claude Code.
