'use strict';

import { listen } from 'quicklink/dist/quicklink.mjs';
import jquery from 'jquery';
import 'lazysizes';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe';
//import anime from 'animejs/lib/anime.es.js';

window.jQuery = jquery;
window.$ = jquery;
listen();

(function($) {

  if (document.querySelector('#gallery')) {
    const lightbox = new PhotoSwipeLightbox({
      gallery: '#gallery',
      children: 'a',
      pswpModule: PhotoSwipe,
    });

    lightbox.init();
  }

}(jQuery));
