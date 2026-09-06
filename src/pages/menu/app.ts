import { DEMO_MENU, DEMO_RESTAURANT } from './data';
import { Lang, MenuItem } from './types';

document.addEventListener('DOMContentLoaded', () => {
  const PLACEHOLDER_IMAGE = 'assets/images/placeholder.webp';

  let lang: Lang = 'it';

  const currency = (value: number) =>
    new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(value);

  function render() {
    renderHeader();
    renderMenu();
    renderFooter();
    document.querySelectorAll<HTMLButtonElement>('.lang-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
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
  }

  function renderMenu() {
    const section = document.getElementById('menu-list')!;
    section.innerHTML = '';

    if (!DEMO_MENU.categories.length) {
      section.innerHTML = '<p>No menu items available at the moment.</p>';
      return;
    }

    for (const cat of DEMO_MENU.categories) {
      const group = document.createElement('div');
      group.id = 'menu-group';

      const heading = document.createElement('h2');
      heading.textContent = cat.name[lang];
      group.appendChild(heading);

      if (!cat.items.length) {
        const empty = document.createElement('p');
        empty.textContent = 'No items in this category.';
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
    li.setAttribute('role', 'listitem');

    const article = document.createElement('article');
    article.setAttribute('aria-labelledby', 'item-title-' + item.id);
    article.setAttribute('aria-describedby', 'item-desc-' + item.id);

    const img = document.createElement('img');
    img.src = item.imageUrl || PLACEHOLDER_IMAGE;
    img.alt = item.name[lang] + ' image';
    img.onerror = () => {
      img.src = PLACEHOLDER_IMAGE;
    };
    article.appendChild(img);

    const content = document.createElement('div');

    const header = document.createElement('header');
    const title = document.createElement('h4');
    title.id = 'item-title-' + item.id;
    title.textContent = item.name[lang];
    const price = document.createElement('strong');
    price.className = 'item-price';
    price.textContent = currency(item.price);
    header.appendChild(title);
    header.appendChild(price);
    content.appendChild(header);

    const desc = document.createElement('p');
    desc.id = 'item-desc-' + item.id;
    desc.textContent = item.description[lang];
    content.appendChild(desc);

    const tags = document.createElement('div');
    if (item.isVegan) tags.appendChild(tag('🌱 Vegan', 'Vegan dish'));
    if (item.isVegetarian) tags.appendChild(tag('🥬 Vegetarian', 'Vegetarian dish'));
    if (item.isSpicy) tags.appendChild(tag('🌶 Spicy', 'Spicy dish'));
    if (tags.children.length) content.appendChild(tags);

    if (item.allergens && item.allergens.length) {
      const allergens = document.createElement('p');
      const strong = document.createElement('strong');
      strong.textContent = 'Allergens: ';
      allergens.appendChild(strong);
      allergens.appendChild(document.createTextNode(item.allergens.join(', ')));
      content.appendChild(allergens);
    }

    article.appendChild(content);
    li.appendChild(article);
    return li;
  }

  function tag(text: string, label: string): HTMLSpanElement {
    const span = document.createElement('span');
    span.setAttribute('aria-label', label);
    span.textContent = text;
    return span;
  }

  function renderFooter() {
    const list = document.getElementById('footer-links')!;
    list.innerHTML = '';

    if (!DEMO_RESTAURANT.footerLinks.length) {
      list.innerHTML = '<li>No footer links available</li>';
    } else {
      for (const link of DEMO_RESTAURANT.footerLinks) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.text[lang];
        li.appendChild(a);
        list.appendChild(li);
      }
    }

    document.getElementById('footer-address')!.textContent = DEMO_RESTAURANT.address;

    const phone = document.getElementById('footer-phone') as HTMLAnchorElement;
    phone.href = 'tel:' + DEMO_RESTAURANT.phone;
    phone.textContent = DEMO_RESTAURANT.phone;

    document.getElementById('footer-copyright')!.textContent =
      '© 2026 ' + DEMO_RESTAURANT.name[lang] + '. All rights reserved.';
  }

  document.querySelectorAll<HTMLButtonElement>('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      lang = btn.dataset.lang as Lang;
      render();
    });
  });

  render();
});
