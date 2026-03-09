'use strict';

import { listen } from 'quicklink/dist/quicklink.mjs';
import 'lazysizes';
import { Collapse } from 'bootstrap';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe';

listen();

if (document.querySelector('#gallery')) {
  const lightbox = new PhotoSwipeLightbox({
    gallery: '#gallery',
    children: 'a',
    pswpModule: PhotoSwipe,
  });

  lightbox.init();
}
