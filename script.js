// ===========================
// NICO LINDBLOM PRESS KIT
// Interactividad
// ===========================

document.addEventListener('DOMContentLoaded', () => {

  // --- NAV SCROLL EFFECT ---
  const nav = document.getElementById('nav');
  const handleScroll = () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', handleScroll, { passive: true });

  // --- MOBILE MENU ---
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.classList.toggle('active');
  });

  // Close menu on link click
  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.classList.remove('active');
    });
  });

  // --- SCROLL REVEAL ANIMATIONS ---
  const revealElements = document.querySelectorAll(
    '.section__label, .section__title, .bio__image, .bio__text, ' +
    '.disco__card, .video__item, .foto__item, .fecha__card, ' +
    '.banda__member, .crew__item, .prensa__card, .contacto__item, ' +
    '.embed__container, .platforms, .section__subtitle'
  );

  revealElements.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger animation for grid items
        const delay = entry.target.closest('.disco__grid, .banda__grid, .fotos__grid, .contacto__grid, .prensa__grid')
          ? Array.from(entry.target.parentElement.children).indexOf(entry.target) * 100
          : 0;

        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => observer.observe(el));

  // --- ACTIVE NAV LINK ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__links a');

  const highlightNav = () => {
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === `#${id}`) {
            link.style.color = '#c8a87c';
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNav, { passive: true });

  // --- LIGHTBOX FOR PRESS PHOTOS ---
  const fotos = document.querySelectorAll('.foto__item img');

  fotos.forEach(img => {
    img.addEventListener('click', () => {
      const lightbox = document.createElement('div');
      lightbox.style.cssText = `
        position: fixed; inset: 0; z-index: 9999;
        background: rgba(0,0,0,0.9); display: flex;
        align-items: center; justify-content: center;
        cursor: pointer; opacity: 0; transition: opacity 0.3s;
      `;

      const clone = img.cloneNode();
      clone.style.cssText = `
        max-width: 90vw; max-height: 90vh;
        object-fit: contain; border: none;
        filter: none;
      `;

      lightbox.appendChild(clone);
      document.body.appendChild(lightbox);

      requestAnimationFrame(() => lightbox.style.opacity = '1');

      lightbox.addEventListener('click', () => {
        lightbox.style.opacity = '0';
        setTimeout(() => lightbox.remove(), 300);
      });

      document.addEventListener('keydown', function handler(e) {
        if (e.key === 'Escape') {
          lightbox.style.opacity = '0';
          setTimeout(() => lightbox.remove(), 300);
          document.removeEventListener('keydown', handler);
        }
      });
    });
  });

});
