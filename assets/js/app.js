'use strict';

/* global anime, PhotoSwipe, PhotoSwipeUI_Default */

import { listen } from 'quicklink/dist/quicklink.mjs';
import jquery from 'jquery';
import 'lazysizes';
//import anime from 'animejs/lib/anime.es.js';

window.jQuery = jquery;
window.$ = jquery;
listen();

(function($) {

  // Init empty gallery array
  var container = [];

  // Loop over gallery items and push it to the array
  $('#gallery').find('figure').each(function() {
    var $link = $(this).find('a'),
      item = {
        src: $link.attr('href'),
        w: $link.data('width'),
        h: $link.data('height'),
        title: $link.data('caption'),
      };
    container.push(item);
  });

  // Define click event on gallery item
  $('#gallery').find('a').click(function(event) {

    // Prevent location change
    event.preventDefault();

    // Define object and gallery options
    var $pswp = $('.pswp')[0],
      options = {
        index: $(this).parent('figure').index(),
    bgOpacity: 0.8,
    captionEl: false,
    tapToClose: true,
    shareEl: false,
    fullscreenEl: false,
      };

    // Initialize PhotoSwipe
    var gallery = new PhotoSwipe($pswp, PhotoSwipeUI_Default, container, options);
    gallery.init();
  });

}(jQuery));

anime({
  targets: '.groku',
  translateY: 10,
  easing: 'easeInOutSine',
  direction: 'alternate',
  loop: true,
});
