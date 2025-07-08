document.addEventListener('DOMContentLoaded', () => {
  // Riferimenti elementi
  const header = document.querySelector('header')
  const nav = document.querySelector('nav')
  const menuToggle = document.getElementById('menu-toggle')
  const primaryMenu = document.getElementById('primary-menu')
  const navMenu = document.querySelector('nav ul.menu')

  // --- Gestione scroll: aggiunge/rimuove classe "scrolled" ---
  const onScroll = () => {
    const scrolled = window.scrollY > 50
    header.classList.toggle('scrolled', scrolled)
    nav.classList.toggle('scrolled', scrolled)
  }
  window.addEventListener('scroll', onScroll)
  onScroll() // stato iniziale

  // --- Smooth scroll per link interni ---
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.hash)
      if (target) {
        e.preventDefault()
        target.scrollIntoView({ behavior: 'smooth' })

        // Chiude il menu mobile se aperto
        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active')
          menuToggle.classList.remove('open')
          menuToggle.setAttribute('aria-expanded', 'false')
          primaryMenu.setAttribute('hidden', '')
        }
      }
    })
  })

  // --- Fade-in sezioni con IntersectionObserver ---
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear')
        obs.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('section').forEach(section => observer.observe(section))

  // --- Accessibilità: attiva click per Space e Enter su elementi role=button ---
  document.querySelectorAll('a[role="button"]').forEach(link => {
    link.addEventListener('keydown', e => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        link.click()
      }
    })
  })

  // --- Toggle menu hamburger ---
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true'
    menuToggle.setAttribute('aria-expanded', String(!expanded))

    if (expanded) {
      primaryMenu.setAttribute('hidden', '')
      navMenu.classList.remove('active')
      menuToggle.classList.remove('open')
    } else {
      primaryMenu.removeAttribute('hidden')
      navMenu.classList.add('active')
      menuToggle.classList.add('open')
    }
  })

  // --- Chiudi menu cliccando fuori ---
  document.addEventListener('click', e => {
    if (!navMenu.classList.contains('active')) return

    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      navMenu.classList.remove('active')
      menuToggle.classList.remove('open')
      menuToggle.setAttribute('aria-expanded', 'false')
      primaryMenu.setAttribute('hidden', '')
    }
  })
})

// --- Funzione per copiare indirizzo negli appunti ---
function copyAddress() {
  const addressText = document.getElementById('restaurant-address').innerText
  const feedbackEl = document.getElementById('copy-feedback')

  navigator.clipboard.writeText(addressText)
    .then(() => showCopyFeedback(feedbackEl, 'Indirizzo copiato negli appunti.'))
    .catch(err => {
      console.error('Copy failed', err)
      showCopyFeedback(feedbackEl, 'Impossibile copiare l\'indirizzo.')
    })
}

// --- Funzione helper per mostrare feedback copia ---
function showCopyFeedback(el, message) {
  if (!el) return
  el.textContent = message
  el.classList.add('visible')
  setTimeout(() => {
    el.textContent = ''
    el.classList.remove('visible')
  }, 3000)
}
