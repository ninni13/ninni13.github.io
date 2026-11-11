/* Shared, progressive scroll reveal for homepage and project detail content. */
(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !('IntersectionObserver' in window)) return;

  const selectors = [
    '.hero-window',
    '.primary-section-heading',
    '.about-window',
    '.project-group-heading',
    '.featured-project-card',
    '.other-project-card',
    '.journey-section .mac-window',
    '.back-link',
    '.detail-project-header',
    '.detail-section'
  ];
  const items = [...new Set(document.querySelectorAll(selectors.join(',')))];
  if (!items.length) return;

  const staggerGroups = [
    '.featured-projects-list',
    '.other-projects-list',
    '.lower-wrap'
  ];
  staggerGroups.forEach(selector => {
    document.querySelectorAll(`${selector} .scroll-reveal, ${selector} .mac-window`).forEach((item, index) => {
      item.style.setProperty('--reveal-delay', `${Math.min(index * 60, 120)}ms`);
    });
  });

  items.forEach(item => item.classList.add('scroll-reveal'));
  document.documentElement.classList.add('reveal-enabled');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -7%'
  });

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      items.forEach(item => observer.observe(item));
    });
  });
})();
