/**
 * Languages the menu is translated into. Adding one here makes `Lang` (and so every
 * `Translatable`, the `ui` strings and the allergen labels) require its translations.
 */
export const languages = [
  { code: 'it', label: 'Italiano', locale: 'it-IT' },
  { code: 'en', label: 'English', locale: 'en-IE' },
] as const;

export type Lang = (typeof languages)[number]['code'];

/** Used when the browser language matches none of `languages`. */
export const fallbackLang: Lang = 'en';
