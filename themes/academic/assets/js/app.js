'use strict';

import { listen } from 'quicklink/dist/quicklink.mjs';
import 'lazysizes';
import { Collapse } from 'bootstrap';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe';

// Quicklink prefetches in-viewport links during idle time.
// Restrict to HTML pages — skip images, PDFs, downloads so they aren't pre-fetched.
listen({
  ignores: [
    /\.(?:jpg|jpeg|png|gif|webp|avif|svg|pdf|zip|mp4|webm)(?:$|\?)/i,
    (uri) => uri.includes('#'),
  ],
});

if (document.querySelector('#gallery')) {
  const lightbox = new PhotoSwipeLightbox({
    gallery: '#gallery',
    children: 'a',
    pswpModule: PhotoSwipe,
  });

  // Show data-caption as lightbox caption when image is clicked
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
