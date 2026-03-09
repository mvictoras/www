import Splide from '@splidejs/splide';

function initCarousel() {
  const el = document.querySelector('.carousel-experience');

  if (!el) return;

  new Splide(el, {
    perPage: 3,
    autoplay: true,
    interval: 4000,
    rewind: true,
    arrows: false,
    pagination: false,
    breakpoints: {
      1024: { perPage: 2 },
      600: { perPage: 1 },
    },
  }).mount();
}

// Handle both: script loaded before DOM ready and after
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCarousel);
} else {
  initCarousel();
}
