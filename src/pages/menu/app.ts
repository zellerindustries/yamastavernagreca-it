import { DEMO_MENU, DEMO_RESTAURANT } from './data';
import { fallbackLang, languages } from './languages';

import type { Lang } from './languages';
import type { MenuItem } from './types';

document.addEventListener('DOMContentLoaded', () => {
  const PLACEHOLDER_IMAGE = 'assets/images/placeholder.webp';

  const isLang = (code: string | null): code is Lang => languages.some((l) => l.code === code);

  /**
   * ?lang= wins; otherwise the first browser language we support, else the fallback.
   * Nothing is stored on the device.
   */
  function detectLang(): Lang {
    const requested = new URLSearchParams(location.search).get('lang');
    if (isLang(requested)) return requested;

    for (const tag of navigator.languages ?? [navigator.language]) {
      const base = tag.toLowerCase().split('-')[0];
      if (isLang(base)) return base;
    }
    return fallbackLang;
  }

  let lang: Lang = detectLang();
  const langSelect = document.getElementById('lang-select') as HTMLSelectElement;

  interface UiStrings {
    menu: string;
    welcome: string;
    categories: string;
    allergens: string;
    vegan: string;
    vegetarian: string;
    spicy: string;
    empty: string;
    emptyCategory: string;
    rights: string;
    allergenNote: string;
  }

  const ui: Record<Lang, UiStrings> = {
    it: {
      menu: 'Menu',
      welcome: 'Benvenuti',
      categories: 'Categorie',
      allergens: 'Allergeni',
      vegan: 'Vegano',
      vegetarian: 'Vegetariano',
      spicy: 'Piccante',
      empty: 'Il menu non è al momento disponibile.',
      emptyCategory: 'Nessun piatto in questa categoria.',
      rights: 'Tutti i diritti riservati.',
      allergenNote: 'Se hai allergie o intolleranze, chiedi al nostro personale prima di ordinare.',
    },
    en: {
      menu: 'Menu',
      welcome: 'Welcome',
      categories: 'Categories',
      allergens: 'Allergens',
      vegan: 'Vegan',
      vegetarian: 'Vegetarian',
      spicy: 'Spicy',
      empty: 'The menu is not available at the moment.',
      emptyCategory: 'No items in this category.',
      rights: 'All rights reserved.',
      allergenNote: 'If you have allergies or intolerances, please ask our staff before ordering.',
    },
  };

  // Mirrors allergenLabels in scripts/generate-menu-schema.mjs
  const allergenLabels: Record<string, Record<Lang, string>> = {
    milk: { it: 'latte', en: 'milk' },
    gluten: { it: 'glutine', en: 'gluten' },
    nuts: { it: 'frutta a guscio', en: 'tree nuts' },
  };

  const currency = (value: number) =>
    new Intl.NumberFormat(languages.find((l) => l.code === lang)?.locale, {
      style: 'currency',
      currency: 'EUR',
    }).format(value);

  function render() {
    document.documentElement.lang = lang;
    renderHeader();
    renderCategoryNav();
    renderMenu();
    observeCategories();
    renderFooter();
    langSelect.value = lang;
  }

  function renderHeader() {
    const logo = document.getElementById('logo-img') as HTMLImageElement;
    logo.src = DEMO_RESTAURANT.logoUrl;
    logo.alt = DEMO_RESTAURANT.name[lang] + ' Logo';
    logo.onerror = () => {
      logo.src = PLACEHOLDER_IMAGE;
    };

    document.getElementById('restaurant-name')!.textContent = DEMO_RESTAURANT.name[lang];

    const description = document.getElementById('restaurant-description') as HTMLParagraphElement;
    description.textContent = DEMO_RESTAURANT.description ? DEMO_RESTAURANT.description[lang] : '';
    description.hidden = !DEMO_RESTAURANT.description;
    document.querySelector<HTMLElement>('.welcome')!.hidden = !DEMO_RESTAURANT.description;

    document.getElementById('menu-heading')!.textContent = ui[lang].menu;
    document.getElementById('welcome-title')!.textContent = ui[lang].welcome;
    document.getElementById('allergen-note')!.textContent = ui[lang].allergenNote;
  }

  function renderCategoryNav() {
    const nav = document.getElementById('category-nav')!;
    nav.setAttribute('aria-label', ui[lang].categories);
    const list = document.getElementById('category-links')!;
    list.innerHTML = '';

    for (const cat of DEMO_MENU.categories) {
      if (!cat.items.length) continue;
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#cat-' + cat.id;
      a.textContent = cat.name[lang];
      li.appendChild(a);
      list.appendChild(li);
    }
  }

  let categoryObserver: IntersectionObserver | undefined;

  /** Marks the nav link of the category in view with aria-current, and keeps it visible in the bar. */
  function observeCategories() {
    categoryObserver?.disconnect();
    const links = new Map<string, HTMLAnchorElement>();
    for (const link of document.querySelectorAll<HTMLAnchorElement>('#category-links a')) {
      links.set(link.hash.slice(1), link);
    }
    const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

    categoryObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          for (const [id, link] of links) {
            if (id === entry.target.id) {
              link.setAttribute('aria-current', 'true');
              link.scrollIntoView({
                inline: 'center',
                block: 'nearest',
                behavior: reduceMotion ? 'auto' : 'smooth',
              });
            } else {
              link.removeAttribute('aria-current');
            }
          }
        }
      },
      { rootMargin: '-25% 0px -65% 0px' },
    );
    for (const group of document.querySelectorAll('.menu-group')) categoryObserver.observe(group);
  }

  function renderMenu() {
    const section = document.getElementById('menu-list')!;
    section.innerHTML = '';

    if (!DEMO_MENU.categories.length) {
      const empty = document.createElement('p');
      empty.textContent = ui[lang].empty;
      section.appendChild(empty);
      return;
    }

    for (const cat of DEMO_MENU.categories) {
      const group = document.createElement('section');
      group.className = 'menu-group';
      group.id = 'cat-' + cat.id;
      group.setAttribute('aria-labelledby', 'cat-title-' + cat.id);

      const heading = document.createElement('h2');
      heading.id = 'cat-title-' + cat.id;
      heading.textContent = cat.name[lang];
      group.appendChild(heading);

      if (!cat.items.length) {
        const empty = document.createElement('p');
        empty.textContent = ui[lang].emptyCategory;
        group.appendChild(empty);
      } else {
        const list = document.createElement('ul');
        list.setAttribute('role', 'list');

        for (const item of cat.items) {
          list.appendChild(renderItem(item));
        }

        group.appendChild(list);
      }

      section.appendChild(group);
    }
  }

  function renderItem(item: MenuItem): HTMLLIElement {
    const li = document.createElement('li');

    const article = document.createElement('article');
    article.setAttribute('aria-labelledby', 'item-title-' + item.id);
    article.setAttribute('aria-describedby', 'item-desc-' + item.id);

    const img = document.createElement('img');
    img.src = item.imageUrl || PLACEHOLDER_IMAGE;
    img.alt = item.name[lang];
    img.loading = 'lazy';
    img.decoding = 'async';
    img.onerror = () => {
      img.onerror = null;
      img.src = PLACEHOLDER_IMAGE;
    };
    article.appendChild(img);

    const content = document.createElement('div');

    const title = document.createElement('h3');
    title.id = 'item-title-' + item.id;
    title.textContent = item.name[lang];
    content.appendChild(title);

    const desc = document.createElement('p');
    desc.id = 'item-desc-' + item.id;
    desc.className = 'item-desc';
    desc.textContent = item.description[lang];
    content.appendChild(desc);

    const tags = document.createElement('ul');
    tags.className = 'tags';
    tags.setAttribute('role', 'list');
    if (item.isVegan) tags.appendChild(tag(ui[lang].vegan));
    else if (item.isVegetarian) tags.appendChild(tag(ui[lang].vegetarian));
    if (item.isSpicy) tags.appendChild(tag(ui[lang].spicy));
    if (item.allergens && item.allergens.length) {
      const names = item.allergens.map((a) => allergenLabels[a]?.[lang] ?? a);
      tags.appendChild(tag(ui[lang].allergens + ': ' + names.join(', ')));
    }
    if (tags.children.length) content.appendChild(tags);

    const price = document.createElement('strong');
    price.className = 'item-price';
    price.textContent = currency(item.price);
    content.appendChild(price);

    article.appendChild(content);
    li.appendChild(article);
    return li;
  }

  function tag(text: string): HTMLLIElement {
    const li = document.createElement('li');
    li.textContent = text;
    return li;
  }

  function renderFooter() {
    const list = document.getElementById('footer-links')!;
    list.innerHTML = '';

    for (const link of DEMO_RESTAURANT.footerLinks) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = link.href;
      a.textContent = link.text[lang];
      li.appendChild(a);
      list.appendChild(li);
    }

    document.getElementById('footer-address')!.textContent = DEMO_RESTAURANT.address;

    const phone = document.getElementById('footer-phone') as HTMLAnchorElement;
    phone.href = 'tel:' + DEMO_RESTAURANT.phone;
    phone.textContent = DEMO_RESTAURANT.phone;

    document.getElementById('footer-copyright')!.textContent =
      '© ' + new Date().getFullYear() + ' ' + DEMO_RESTAURANT.name[lang] + '. ' + ui[lang].rights;
  }

  for (const { code, label } of languages) {
    const option = document.createElement('option');
    option.value = code;
    option.lang = code;
    option.textContent = label;
    langSelect.appendChild(option);
  }

  langSelect.addEventListener('change', () => {
    if (!isLang(langSelect.value)) return;
    lang = langSelect.value;
    render();
  });

  render();
});
