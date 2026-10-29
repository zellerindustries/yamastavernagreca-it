/**
 * Generates the schema.org `Menu` JSON-LD for /menu/ from src/pages/menu/data.ts and writes it
 * between the `menu-schema` markers in src/pages/menu/index.html (static HTML, so crawlers that
 * don't run JS still see it). data.ts stays the single source of truth.
 *
 * Usage: node scripts/generate-menu-schema.mjs [--check]
 *   --check  exit 1 if the page's block is out of date, without writing.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { isDeepStrictEqual } from 'node:util';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dataPath = resolve(root, 'src/pages/menu/data.ts');
const pagePath = resolve(root, 'src/pages/menu/index.html');

const siteUrl = '__SITE_URL__';
const restaurantId = `${siteUrl}/#restaurant`;
const startMarker = '<!-- menu-schema:start -->';
const endMarker = '<!-- menu-schema:end -->';

// Only categories whose every item is vegetarian by definition; per-item flags in data.ts
// (isVegan/isVegetarian) cover the rest. Never infer a diet that data.ts doesn't state.
const vegetarianCategoryIds = new Set(['cat-5']);

const allergenLabels = {
  milk: { it: 'latte', en: 'milk' },
  gluten: { it: 'glutine', en: 'gluten' },
  nuts: { it: 'frutta a guscio', en: 'tree nuts' },
};

const labels = {
  it: { allergens: 'Allergeni', spicy: 'Piccante', menu: 'Menu', separator: ', ' },
  en: { allergens: 'Allergens', spicy: 'Spicy', menu: 'Menu', separator: ', ' },
};

/**
 * Evaluates data.ts (type annotations stripped) and returns its exports.
 * @returns {{ DEMO_MENU: object, DEMO_RESTAURANT: object }}
 */
function loadMenuData() {
  const source = stripTypeScriptTypes(readFileSync(dataPath, 'utf8'), { mode: 'strip' })
    .replace(/^import .*$/gm, '')
    .replace(/export const (\w+)\s*=/g, 'exports.$1 =');
  const exports = {};
  new Function('exports', source)(exports);
  return exports;
}

/**
 * @param {object} item data.ts MenuItem
 * @param {string} categoryId
 * @returns {string[]} schema.org RestrictedDiet URLs, only those data.ts supports
 */
function dietsFor(item, categoryId) {
  const diets = [];
  if (item.isVegan) diets.push('https://schema.org/VeganDiet');
  if (item.isVegan || item.isVegetarian || vegetarianCategoryIds.has(categoryId)) {
    diets.push('https://schema.org/VegetarianDiet');
  }
  return diets;
}

/**
 * @param {object} item data.ts MenuItem
 * @param {'it' | 'en'} lang
 * @returns {object[]} PropertyValue entries; allergens are listed only when data.ts declares
 * them, since an empty list in data.ts means "not recorded", not "none".
 */
function propertiesFor(item, lang) {
  const properties = [];
  if (item.allergens?.length) {
    properties.push({
      '@type': 'PropertyValue',
      name: labels[lang].allergens,
      value: item.allergens
        .map((allergen) => allergenLabels[allergen]?.[lang] ?? allergen)
        .join(labels[lang].separator),
    });
  }
  if (item.isSpicy) {
    properties.push({ '@type': 'PropertyValue', name: labels[lang].spicy, value: true });
  }
  return properties;
}

/**
 * @param {object} item data.ts MenuItem
 * @param {string} categoryId
 * @param {'it' | 'en'} lang
 * @returns {object} schema.org MenuItem
 */
function buildMenuItem(item, categoryId, lang) {
  const diets = dietsFor(item, categoryId);
  const properties = propertiesFor(item, lang);
  return {
    '@type': 'MenuItem',
    name: item.name[lang],
    description: item.description[lang],
    offers: { '@type': 'Offer', price: item.price.toFixed(2), priceCurrency: 'EUR' },
    ...(item.imageUrl ? { image: item.imageUrl } : {}),
    ...(diets.length ? { suitableForDiet: diets } : {}),
    ...(properties.length ? { additionalProperty: properties } : {}),
  };
}

/**
 * @param {object} menu data.ts Menu
 * @param {'it' | 'en'} lang
 * @returns {object} schema.org Menu
 */
function buildMenu(menu, lang) {
  const sections = [...menu.categories]
    .sort((a, b) => a.order - b.order)
    .map((category) => ({
      '@type': 'MenuSection',
      name: category.name[lang],
      hasMenuItem: category.items.map((item) => buildMenuItem(item, category.id, lang)),
    }));
  return {
    '@type': 'Menu',
    '@id': `${siteUrl}/menu/#menu-${lang}`,
    name: menu.name[lang],
    url: `${siteUrl}/menu/`,
    inLanguage: lang,
    provider: { '@id': restaurantId },
    hasMenuSection: sections,
  };
}

/**
 * @returns {object} the full JSON-LD document for the menu page
 */
function buildGraph() {
  const { DEMO_MENU: menu } = loadMenuData();
  const menus = ['it', 'en'].map((lang) => buildMenu(menu, lang));
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Restaurant',
        '@id': restaurantId,
        name: '__SITE_NAME__',
        url: `${siteUrl}/`,
        hasMenu: menus.map((entry) => ({ '@id': entry['@id'] })),
      },
      ...menus,
    ],
  };
}

/**
 * @param {string} html
 * @returns {{ before: string, block: string, after: string }}
 */
function splitPage(html) {
  const start = html.indexOf(startMarker);
  const end = html.indexOf(endMarker);
  if (start === -1 || end === -1 || end < start) {
    throw new Error(`Missing ${startMarker} / ${endMarker} markers in ${pagePath}`);
  }
  return {
    before: html.slice(0, start),
    block: html.slice(start + startMarker.length, end),
    after: html.slice(end + endMarker.length),
  };
}

/**
 * @param {string} block text between the markers
 * @returns {object | undefined} parsed JSON-LD, or undefined when the block is empty
 */
function parseBlock(block) {
  const match = block.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  return match ? JSON.parse(match[1]) : undefined;
}

const checkOnly = process.argv.includes('--check');
const graph = buildGraph();
const page = splitPage(readFileSync(pagePath, 'utf8'));

if (checkOnly) {
  if (!isDeepStrictEqual(parseBlock(page.block), graph)) {
    console.error('Menu JSON-LD is out of date: run `node scripts/generate-menu-schema.mjs`');
    process.exit(1);
  }
  console.log('Menu JSON-LD is up to date');
} else {
  const script = `\n    <script type="application/ld+json">\n${JSON.stringify(graph, null, 2)}\n    </script>\n    `;
  writeFileSync(pagePath, `${page.before}${startMarker}${script}${endMarker}${page.after}`);
  const items = graph['@graph'][1].hasMenuSection.reduce((n, s) => n + s.hasMenuItem.length, 0);
  console.log(`Wrote menu JSON-LD (${items} items x 2 languages) to ${pagePath}`);
}
