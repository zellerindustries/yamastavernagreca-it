document.addEventListener('DOMContentLoaded', () => {
  // Element references
  const header = document.querySelector('header');
  const nav = document.querySelector('nav');
  const menuToggle = document.getElementById('menu-toggle');
  const primaryMenu = document.getElementById('primary-menu');
  const navMenu = document.querySelector<HTMLElement>('nav ul.menu');
  const copyBtn = document.getElementById('copy-address-btn');

  if (copyBtn) copyBtn.addEventListener('click', copyAddress);

  const copyrightYear = document.getElementById('copyright-year');
  if (copyrightYear) copyrightYear.textContent = String(new Date().getFullYear());

  /* --- Scroll handling --- */
  const onScroll = () => {
    const scrolled = window.scrollY > 50;
    if (header) header.classList.toggle('scrolled', scrolled);
    if (nav) nav.classList.toggle('scrolled', scrolled);
  };
  window.addEventListener('scroll', onScroll);
  onScroll();

  /* --- Smooth scroll --- */
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector<HTMLElement>(link.hash);
      if (!target) return;

      e.preventDefault();
      target.setAttribute('tabindex', '-1');
      target.scrollIntoView({ behavior: 'smooth' });
      target.focus({ preventScroll: true });

      if (navMenu?.classList.contains('active')) toggleMenu(false);
    });
  });

  /* --- Fade-in observer --- */
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.1 },
  );

  document.querySelectorAll('section').forEach((section) => observer.observe(section));

  /* --- Accessibility buttons --- */
  document.querySelectorAll<HTMLAnchorElement>('a[role="button"]').forEach((link) => {
    link.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        link.click();
      }
    });
  });

  /* --- Toggle hamburger menu --- */
  const toggleMenu = (force?: boolean) => {
    if (!menuToggle || !primaryMenu || !navMenu) return;

    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    const shouldOpen = typeof force === 'boolean' ? force : !expanded;

    menuToggle.setAttribute('aria-expanded', String(shouldOpen));
    primaryMenu.toggleAttribute('hidden', !shouldOpen);
    navMenu.classList.toggle('active', shouldOpen);
    menuToggle.classList.toggle('open', shouldOpen);

    if (shouldOpen) {
      document.addEventListener('click', outsideClickListener);
    } else {
      document.removeEventListener('click', outsideClickListener);
    }
  };

  menuToggle?.addEventListener('click', () => toggleMenu());

  const outsideClickListener = (e: MouseEvent) => {
    if (!navMenu?.contains(e.target as Node) && !menuToggle?.contains(e.target as Node)) {
      toggleMenu(false);
    }
  };

  /* =================================================
     IMAGE LIGHTBOX
     ================================================= */
  const images = document.querySelectorAll<HTMLImageElement>('img.lightbox');
  if (images.length) {
    const overlay = document.createElement('div');
    const img = document.createElement('img');
    const closeBtn = document.createElement('button');

    overlay.className = 'lightbox-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');

    img.className = 'lightbox-img';
    closeBtn.className = 'lightbox-close';
    closeBtn.setAttribute('aria-label', 'Close image');
    closeBtn.innerHTML = '&times;';

    overlay.appendChild(closeBtn);
    overlay.appendChild(img);
    document.body.appendChild(overlay);

    const close = () => {
      overlay.classList.remove('visible');
      document.body.classList.remove('no-scroll');
    };

    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      close();
    });

    overlay.addEventListener('click', close);
    img.addEventListener('click', (e) => e.stopPropagation());

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });

    images.forEach((image) => {
      image.addEventListener('click', () => {
        if (!image.src) return;
        img.src = image.src;
        img.alt = image.alt || '';
        overlay.classList.add('visible');
        document.body.classList.add('no-scroll');
      });
    });
  }
});

/* --- Copy address to clipboard --- */
function copyAddress() {
  const addressText = document.getElementById('restaurant-address')?.innerText ?? '';
  const feedbackEl = document.getElementById('copy-feedback');

  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(addressText)
      .then(() => showCopyFeedback(feedbackEl, 'Indirizzo copiato negli appunti.'))
      .catch(() => fallbackCopy(addressText, feedbackEl));
  } else {
    fallbackCopy(addressText, feedbackEl);
  }
}

function fallbackCopy(text: string, feedbackEl: HTMLElement | null) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'absolute';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);
  textarea.select();

  try {
    document.execCommand('copy');
    showCopyFeedback(feedbackEl, 'Indirizzo copiato.');
  } catch {
    alert('Copia non supportata. Copia manualmente: ' + text);
  }

  document.body.removeChild(textarea);
}

function showCopyFeedback(el: HTMLElement | null, message: string) {
  if (!el) return;
  el.textContent = message;
  el.classList.add('visible');
  setTimeout(() => {
    el.textContent = '';
    el.classList.remove('visible');
  }, 3000);
}
