'use strict';

import { listen } from 'quicklink/dist/quicklink.mjs';
import 'lazysizes';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe';
//import anime from 'animejs/lib/anime.es.js';

listen();

if (document.querySelector('#gallery')) {
  const lightbox = new PhotoSwipeLightbox({
    gallery: '#gallery',
    children: 'a',
    pswpModule: PhotoSwipe,
  });

  lightbox.init();
}
