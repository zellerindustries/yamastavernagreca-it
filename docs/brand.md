# Brand & restyle scope

## Concept

**A whitewashed taverna on the Aegean at dusk.** Warm, convivial, honest. A family table, not a fine-dining stage. Decisions below are the designer's call, derived from the logo and the Greek-taverna idea.

## What the logo tells us

- **Wordmark:** YAMAS in wide-tracked, geometric, hairline capitals with sharp diagonal "A"s and "M". "TAVERNA GRECA" sits under it in small tracked capitals.
- **One colour:** Aegean blue `#253873`, on whitewash `#fffff5`. It never needs a second colour to work.
- **Angular, rhythmic forms:** straight strokes and hard angles. This is the same language as the Greek key (meander), so the key is the one decorative motif.

Rules that follow: keep surfaces flat, corners crisp (small radius), spacing airy, and let the blue do the work. Gold is a seasoning, not a base.

## Palette

| Role        | Token               | Value     | Note                                        |
| ----------- | ------------------- | --------- | ------------------------------------------- |
| Aegean blue | `--color-primary`   | `#253873` | Locked by the logo                          |
| Whitewash   | `--color-secondary` | `#fffff5` | Base surface                                |
| Sea mist    | `--color-tint`      | `#eaeef8` | **New.** Alternate section background       |
| Honey       | `--color-accent`    | `#f0a500` | CTAs, motif, focus. Decorative / large only |

No other colours are added. Photography (Santorini hero, dishes) supplies the warmth.

## Typography

- **Headings:** Playfair Display 900, uppercase, tracked. Kept: it is the only self-hosted face and already carries the brand.
- **Body:** Roboto. Kept.
- **Labels and buttons:** uppercase and tracked, echoing "TAVERNA GRECA" in the logo.

## Motif

The Greek key (meander): hero base, under section titles, top of footer. Always drawn from tokens, never a raster. Use it as punctuation: one per boundary, never as wallpaper.

## Voice

Italian first, direct and warm ("Preferisci mangiare a casa?"). Short sentences, no superlatives.

## Restyle scope

**In scope (main site, `src/styles/base.css` and the five top-level pages):**

- Sharper corners (`--radius` 0.5rem → 0.25rem) to match the logo's angles.
- Alternating whitewash / sea-mist full-width sections for rhythm.
- Taller hero with more presence.
- Section spacing on the same token scale, a little more generous.

**Out of scope (needs a separate decision):**

- Logo, palette changes, new typefaces.
- `menu/` page (own stylesheet with copied tokens) and `business-card/`. Sync them after the main site is approved.
- Copy changes, new pages, JS behaviour.

**Done when:** the home page reads as one calm, blue-and-white taverna with gold touches; contrast and tap-target rules in `design.md` still hold; build and Prettier pass.
