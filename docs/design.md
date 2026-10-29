# Design

Source of truth: the `:root` tokens in `src/styles/base.css`. Reuse or extend them. Don't add one-off hex or pixel values next to them.

## Brand

Greek taverna: deep blue, warm gold accent, warm off-white background, serif headings. The palette, fonts and motifs are brand identity. Changing them is a site-wide decision, not a component tweak.

## Colour

| Token                  | Value     | Use                                           |
| ---------------------- | --------- | --------------------------------------------- |
| `--color-primary`      | `#253873` | Headings, buttons, header (scrolled), footer  |
| `--color-primary-dark` | `#09324a` | Hover on scrollbar, captions, card borders    |
| `--color-secondary`    | `#fffff5` | Page background, text on primary              |
| `--color-accent`       | `#f0a500` | CTAs, hover, focus ring, stars, footer titles |
| `--color-accent-dark`  | `#c78f00` | Darker accent state                           |
| `--color-text-light`   | `#555`    | Secondary text                                |

Body text is `#222`. Check contrast against the actual background in use. Accent gold on the off-white page is for decoration and large text only, not small body text.

## Typography

- Headings (`h1`, `main h2`): Playfair Display 900, uppercase, letter-spacing 2–3px. Self-hosted at `/fonts/playfair-display.woff2`.
- Body: Roboto, falling back to Helvetica Neue, Helvetica, Arial.
- Fluid scale from `--font-size-base` (`clamp(1rem, 2vw + 0.5rem, 1.25rem)`): `--font-size-sm` (×0.875), `-lg` (×1.25), `-xl` (×1.5), `-xxl` (×2).

## Spacing, shape, motion

- Spacing: `--spacing-sm` 0.3rem · `--spacing-md` 0.6rem · `--spacing-lg` 1.2rem
- Radius: `--radius` 0.5rem
- Shadows: `--shadow-light` (cards at rest), `--shadow-strong` (header, hover)
- Transition: `--transition-speed` 0.35s. All motion is disabled under `prefers-reduced-motion`.

## Layout

- Mobile-first, single column. Sections are centred (`main section`) and padded with `--spacing-lg` / `--spacing-md`.
- One breakpoint: `max-width: 768px` (hamburger nav, stacked columns, bottom navigation). Reuse it; don't add new ones per component. The menu page uses `min-width: 640px` for its own grid.
- Sticky header (`z-index: 110`). `scroll-padding-top` on `html` keeps anchor targets clear of it.

## Components

| Component     | Class / selector      | Notes                                                              |
| ------------- | --------------------- | ------------------------------------------------------------------ |
| Button        | `.btn`                | Primary-blue; hover swaps to accent. Variants: `.cta`, `.delivery` |
| Card          | `.card`               | White, `--shadow-light`, image with primary-dark bottom border     |
| Delivery card | `.delivery-card`      | App logo + "Ordina su …"; accent underline, lifts on hover         |
| Review        | `#reviews blockquote` | Decorative quote marks, gold stars                                 |
| Footer column | `.footer-col`         | Gold uppercase title, links at 85% opacity                         |
| Lightbox      | `.lightbox*`          | Gallery images; overlay `z-index: 3000`                            |
| Alert bar     | `.alert-message`      | Yellow site notice                                                 |

## Accessibility rules

- Keep `:focus-visible` styles. Never `outline: none` without an equivalent visible replacement.
- Interactive elements are at least 44px tall on touch.
- Hide content from sighted users only with `.sr-only`, not `display: none`.
- Decorative images use `alt=""`. Icons are `aria-hidden="true"` with a text or `aria-label` alternative.
- External links use `rel="noopener noreferrer"`.

## Sub-pages

`menu/` and `business-card/` are self-contained. The menu has its own `style.css` whose tokens copy the brand values from `base.css` (see the comment at its top). The business card loads `base.css` first and reuses its variables. If you change a brand token, update the menu's copy too.
