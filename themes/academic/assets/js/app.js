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
  targets: '.home-image-groku',
  translateY: 10,
  easing: 'easeInOutSine',
  direction: 'alternate',
  loop: true,
});

const glitch = document.querySelector('.glitch-effect')
const tl = new TimelineMax({ id: 'getGlitch', repeat: -1, repeatDelay: 3 })

tl
  .fromTo(glitch, 0.1, { x: 0 }, { x: 10, ease: SteppedEase.config(2), className: '+=active' })
  .to(glitch, 0.1, { scale: 1.4, ease: SteppedEase.config(2) })
  .to(glitch, 0.1, { scale: 1, rotationY: 180, ease: SteppedEase.config(2) })
  .fromTo(glitch, 0.1, { y: 0 }, { y: -10, ease: Linear.easeNone })
  .fromTo(glitch, 0.1, { y: -10 }, { y: 0, ease: Linear.easeNone })
  .to(glitch, 0.1, { rotationY: 0, ease: Linear.easeNone })
  .set(glitch, {className: '+=slice'})
  .to(glitch, 0.1, { x: -30, ease: SteppedEase.config(1) })
  .set(glitch, {className: '-=slice'})
  .to(glitch, 0.1, { x: 10, ease: SteppedEase.config(1) })
  .to(glitch, 0.1, { scale: 1.8, ease: SteppedEase.config(2) })
  .to(glitch, 0.1, { scale: 1, ease: SteppedEase.config(2) })
  .to(glitch, 0.1, { x: 0, ease: SteppedEase.config(1) })
  .fromTo(glitch, 0.1, { x: 0 }, { x: 5, ease: SteppedEase.config(2), className: '-=active' })

  .fromTo(glitch, 0.2, { x: 0 }, { x: 5, ease: SteppedEase.config(2), delay: 2, className: '+=active' })
  .set(glitch, { className: '-=active' })

  .fromTo(glitch, 0.2, { x: 0 }, { x: 5, ease: SteppedEase.config(2), repeat: 1, delay: 1, className: '+=active' })
  .set(glitch, { className: '-=active' })


Particles.init({
selector: '.particles',
color: '#111',
sizeVariations: 3,
maxParticles: 140,
responsive: [
  {
    breakpoint: 768,
    options: {
      maxParticles: 70
    }
  }, {
    breakpoint: 320,
    options: {
      maxParticles: 35
    }
  }
]
})