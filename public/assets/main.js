// The Rainey Property Group — Main JS

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile nav if open
      document.querySelector('.nav-links')?.classList.remove('open');
    }
  });
});

// Sticky nav shadow on scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    nav.style.boxShadow = '0 2px 20px rgba(30,46,34,0.08)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// Fade-in on scroll (Intersection Observer)
const fadeEls = document.querySelectorAll(
  '.why-card, .community-card, .process-step, .about-detail, ' +
  '.dpa-fact-card, .dpa-program-card, .dpa-qualify-item, ' +
  '.pull-quote, .info-highlight, .dpa-nc-copy, .dpa-qualify-note'
);
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach((el, i) => {
  // Stagger siblings within the same parent
  const siblings = el.parentElement ? [...el.parentElement.children].filter(c =>
    c.classList.contains(el.classList[0])
  ) : [];
  const siblingIndex = siblings.indexOf(el);
  const delay = siblingIndex > 0 ? `${siblingIndex * 0.1}s` : '0s';

  el.style.opacity = '0';
  el.style.transform = 'translateY(18px)';
  el.style.transition = `opacity 0.55s ease ${delay}, transform 0.55s ease ${delay}`;
  observer.observe(el);
});

// Slide-right for pull-quote
document.querySelectorAll('.pull-quote').forEach(el => {
  el.style.transform = 'translateX(-18px)';
});

// Number counter for DPA fact cards
const counterEls = document.querySelectorAll('.dpa-fact-num');
if (counterEls.length) {
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const raw = el.textContent.trim();
      const match = raw.match(/^(\D*)([\d,]+)(\D*)$/);
      if (!match) return;
      const prefix = match[1];
      const target = parseInt(match[2].replace(/,/g, ''), 10);
      const suffix = match[3];
      const duration = 1400;
      let startTime = null;
      function step(ts) {
        if (!startTime) startTime = ts;
        const progress = Math.min((ts - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = prefix + Math.round(eased * target).toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.6 });

  counterEls.forEach(el => counterObserver.observe(el));
}
