/* Shared fixed-navigation behavior for the homepage and project detail pages. */
(() => {
  'use strict';

  const header = document.querySelector('.site-header');
  if (!header) return;

  const menuButton = header.querySelector('.menu-toggle');
  const navigation = header.querySelector('#site-nav');
  const scrollThreshold = 20;
  let scrollFrame = null;

  const updateScrollState = () => {
    header.classList.toggle('is-scrolled', window.scrollY > scrollThreshold);
    scrollFrame = null;
  };

  updateScrollState();
  window.addEventListener('scroll', () => {
    if (scrollFrame !== null) return;
    scrollFrame = window.requestAnimationFrame(updateScrollState);
  }, { passive: true });

  if (!menuButton || !navigation) return;

  const setMenuOpen = (isOpen) => {
    navigation.classList.toggle('open', isOpen);
    header.classList.toggle('menu-open', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  };

  menuButton.addEventListener('click', () => {
    setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
  });

  navigation.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setMenuOpen(false));
  });
})();
