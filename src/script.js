document.addEventListener('DOMContentLoaded', () => {
  // Element references
  const header = document.querySelector('header')
  const nav = document.querySelector('nav')
  const menuToggle = document.getElementById('menu-toggle')
  const primaryMenu = document.getElementById('primary-menu')
  const navMenu = document.querySelector('nav ul.menu')
  const copyBtn = document.getElementById('copy-address-btn')

  if (copyBtn) copyBtn.addEventListener('click', copyAddress)

  // --- Scroll handling: toggle "scrolled" class ---
  const onScroll = () => {
    const scrolled = window.scrollY > 50
    header.classList.toggle('scrolled', scrolled)
    nav.classList.toggle('scrolled', scrolled)
  }
  window.addEventListener('scroll', onScroll)
  onScroll() // Initial state

  // --- Smooth scroll for internal links ---
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.hash)
      if (target) {
        e.preventDefault()
        target.setAttribute('tabindex', '-1') // accessibility focusable
        target.scrollIntoView({ behavior: 'smooth' })
        target.focus({ preventScroll: true })

        // Close mobile menu if open
        if (navMenu.classList.contains('active')) toggleMenu(false)
      }
    })
  })

  // --- IntersectionObserver for fade-in ---
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear')
        obs.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('section').forEach(section => observer.observe(section))

  // --- Accessibility: enable click for Space/Enter on role=button links ---
  document.querySelectorAll('a[role="button"]').forEach(link => {
    link.addEventListener('keydown', e => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        link.click()
      }
    })
  })

  // --- Toggle hamburger menu ---
  const toggleMenu = (force) => {
    const expanded = typeof force === 'boolean' ? !force : menuToggle.getAttribute('aria-expanded') === 'true'
    const shouldOpen = typeof force === 'boolean' ? force : !expanded

    menuToggle.setAttribute('aria-expanded', String(shouldOpen))
    primaryMenu.toggleAttribute('hidden', !shouldOpen)
    navMenu.classList.toggle('active', shouldOpen)
    menuToggle.classList.toggle('open', shouldOpen)

    if (shouldOpen) {
      document.addEventListener('click', outsideClickListener)
    } else {
      document.removeEventListener('click', outsideClickListener)
    }
  }

  menuToggle.addEventListener('click', () => toggleMenu())

  // --- Close menu when clicking outside ---
  const outsideClickListener = e => {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) toggleMenu(false)
  }
})

// --- Copy address to clipboard ---
function copyAddress() {
  const addressText = document.getElementById('restaurant-address').innerText
  const feedbackEl = document.getElementById('copy-feedback')

  if (navigator.clipboard) {
    navigator.clipboard.writeText(addressText)
      .then(() => showCopyFeedback(feedbackEl, 'Indirizzo copiato negli appunti.'))
      .catch(err => {
        console.error('Copy failed', err)
        fallbackCopy(addressText, feedbackEl)
      })
  } else {
    fallbackCopy(addressText, feedbackEl)
  }
}

// --- Fallback copy method for unsupported browsers ---
function fallbackCopy(text, feedbackEl) {
  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'absolute'
  textarea.style.left = '-9999px'
  document.body.appendChild(textarea)
  textarea.select()

  try {
    document.execCommand('copy')
    showCopyFeedback(feedbackEl, 'Indirizzo copiato.')
  } catch (err) {
    console.error('Fallback copy failed', err)
    alert('Copia non supportata. Copia manualmente: ' + text)
  }
  document.body.removeChild(textarea)
}

// --- Show copy feedback ---
function showCopyFeedback(el, message) {
  if (!el) return
  el.textContent = message
  el.classList.add('visible')
  setTimeout(() => {
    el.textContent = ''
    el.classList.remove('visible')
  }, 3000)
}