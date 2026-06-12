'use strict';

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe';

if (document.querySelector('#gallery')) {
  const lightbox = new PhotoSwipeLightbox({
    gallery: '#gallery',
    children: 'a',
    pswpModule: PhotoSwipe,
  });

  lightbox.on('uiRegister', function () {
    lightbox.pswp.ui.registerElement({
      name: 'custom-caption',
      order: 9,
      isButton: false,
      appendTo: 'root',
      onInit: (el) => {
        el.classList.add('pswp__custom-caption');
        lightbox.pswp.on('change', () => {
          const slide = lightbox.pswp.currSlide;
          const caption = slide.data.element?.dataset?.caption;
          el.innerHTML = caption || '';
          el.style.display = caption ? 'block' : 'none';
        });
      },
    });
  });

  lightbox.init();
}
