# Design

Source of truth: the `:root` tokens in `src/styles/root.css` (`src/style.css` only imports the per-topic files in `src/styles/`). Reuse or extend them. Don't add one-off hex or pixel values next to them.

## Brand

Greek taverna: deep blue, warm gold accent, warm off-white background, serif headings. The palette, fonts and motifs are brand identity. Changing them is a site-wide decision, not a component tweak.

## Colour

| Token                  | Value     | Use                                           |
| ---------------------- | --------- | --------------------------------------------- |
| `--color-primary`      | `#253873` | Headings, buttons, header (scrolled), footer  |
| `--color-primary-dark` | derived   | Button hover, scrollbar hover, card borders   |
| `--color-secondary`    | `#fffff5` | Page background, text on primary              |
| `--color-tint`         | `#eaeef8` | Alternate section background (sea mist)       |
| `--color-accent`       | `#f0a500` | CTAs, focus ring, stars, footer titles        |
| `--color-accent-soft`  | derived   | Gold button hover and press (80% gold, white) |
| `--color-accent-dark`  | `#8a5f00` | Gold for text on light surfaces (5.6:1)       |
| `--color-text-muted`   | `#555`    | Secondary text                                |

`--color-primary-dark`, `--color-primary-veil` and `--color-primary-deep` are `color-mix()` shades of `--color-primary`, and `--color-surface` is the same whitewash as `--color-secondary`: change the base token, not the derived ones. Body text is `--color-text` (`#222`). Check contrast against the actual background in use. Accent gold on the off-white page is for decoration and large text only, not small body text.

## Typography

- Headings (`h1`, `main h2`): Playfair Display 900, uppercase, letter-spacing 2–3px. Self-hosted at `/fonts/playfair-display.woff2`.
- Body: Roboto, falling back to Helvetica Neue, Helvetica, Arial.
- Fluid scale from `--font-size-base` (`clamp(1rem, 2vw + 0.5rem, 1.25rem)`): `--font-size-sm` (×0.875), `-lg` (×1.25), `-xl` (×1.5), `-xxl` (×2). Content text uses the base size (16px minimum); `-xs` and `-sm` are for captions, tags and button labels.
- Hierarchy, largest first: hero title (`--font-size-display`, 40–50px) → page title `h1` (`-xxl`) → section title `h2` (`-xl`, Playfair uppercase) → item title `h3` (`-lg`, Roboto 600, primary colour) → body → muted text (`--color-text-muted`, card descriptions) → captions. Each level differs in size and in weight, family or colour; don't add a level by size alone.
- Line height: `--line-height-base` 1.6 (body), `--line-height-heading` 1.2, `--line-height-compact` 1.4 (short descriptions). Running text is capped at 65ch.

## Spacing, shape, motion

- Spacing: `--spacing-sm` 0.3rem · `--spacing-md` 0.6rem · `--spacing-lg` 1.2rem · `--spacing-xl` 2.4rem (section padding)
- Radius: `--radius-sm` 0.25rem (crisp, matches the logo's angles)
- Shadows: `--shadow-sm` (cards at rest), `--shadow-md`, `--shadow-lg` and `--shadow-hover` (raised), `--shadow-overlay` (business card on its dark page)
- Transition: `--transition-fast` 0.15s, `--transition-base` 0.35s. All motion is disabled under `prefers-reduced-motion`.

## Layout

- Mobile-first, single column. Sections are centred (`main section`) and padded with `--spacing-lg` / `--spacing-md`.
- One breakpoint: `max-width: 768px` (hamburger nav, stacked columns, bottom navigation). Reuse it; don't add new ones per component. The menu page uses `min-width: 768px` for its own grid.
- Sticky header (`z-index: 110`). `scroll-padding-top` on `html` keeps anchor targets clear of it.

## Components

| Component     | Class / selector      | Notes                                                                                                                                                                                                      |
| ------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Button        | `.btn`                | Filled, medium weight, small tracked caps, no border; hover darkens. Variant `.cta` is gold                                                                                                                |
| Card          | `.card`               | White, `--shadow-light`, image with primary-dark bottom border                                                                                                                                             |
| Pill          | `.pill`               | Small rounded uppercase label. Variants `.solid`, `.accent`, `.outline`, `.on-dark`; as `a`/`button` it is clickable (44px tall, `aria-pressed`/`aria-current` mark the active one). Group in `.pill-list` |
| Delivery card | `.delivery-card`      | App logo + "Ordina su …"; accent underline, lifts on hover                                                                                                                                                 |
| Review        | `#reviews blockquote` | Decorative quote marks, gold stars                                                                                                                                                                         |
| Footer column | `.footer-col`         | Gold uppercase title, links at 85% opacity                                                                                                                                                                 |
| Lightbox      | `.lightbox*`          | Gallery images; overlay `z-index: 3000`                                                                                                                                                                    |
| Alert bar     | `.alert-message`      | Yellow site notice                                                                                                                                                                                         |

## Accessibility rules

- One global `:focus-visible` ring (3px blue; gold on dark surfaces: footer, scrolled header, hero). Never `outline: none` without an equivalent visible replacement.
- Interactive elements are at least 44px tall on touch.
- Hide content from sighted users only with `.sr-only`, not `display: none`.
- Decorative images use `alt=""`. Icons are `aria-hidden="true"` with a text or `aria-label` alternative.
- External links use `rel="noopener noreferrer"`.
- Style by class, not `#id`. Hover styles sit inside `@media (hover: hover)`, and spacing uses logical properties (`margin-inline`, not `margin-left`).
- The header logo is the same on every page: one link to `/` holding `logo_top` and `logo_bottom`.

## Sub-pages

`menu/` and `business-card/` are self-contained pages with their own colocated CSS (`menu.css`, `card.css`). Both load the global `style.css` first and use its tokens, so a brand token changes in `root.css` only. `business-card/` also has `card.ts` for the vCard download, so its CSP allows no inline script.

## Other tokens

Also defined in `:root`: `--tap-target`, `--content-width`, `--max-width`, `--header-height`, `--border-width` / `--border-width-thick`, `--ring-width`, `--tracking-sm` / `--tracking` / `--tracking-wide`, `--weight-medium` / `--weight-bold` / `--weight-black`, `--opacity-muted` / `--opacity-subtle`, `--line-height-compact`, and the `--z-*` layers (bottom nav, header, nav menu, lightbox). Use them instead of literals.
