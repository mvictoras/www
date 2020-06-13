'use strict';

/* global jQuery, PhotoSwipe, PhotoSwipeUI_Default */

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

$(function () { // wait for document ready
  var svgRoot = document.getElementById("world");
  TweenMax.set(svgRoot,{attr:{viewBox:"160 270 150 150"}});
  var tl = new TimelineLite();
  tl.set(svgRoot,{attr:{viewBox:"160 270 150 150"}});
  tl.to(svgRoot, 3.5, {attr:{ viewBox:"0 0 1000 1000"}, ease: Linear.easeNone});
  tl.to(svgRoot, 3.5, {attr:{ viewBox:"550 415 75 75"}, ease: Linear.easeNone});

  var controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 1000})
    .setPin("#one")
    .addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
    .addTo(controller);
  
  var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 1000})
    .setTween(tl)
    .addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
    .addTo(controller);

});
/*
$(function () { // wait for document ready
  var controller = new ScrollMagic.Controller();

  var animation = new TimelineMax()
    .fromTo("section.panel.two", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
    .fromTo("section.panel.three",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
    .fromTo("section.panel.four", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}); // in from top

  // create scene to pin and link animation
  new ScrollMagic.Scene({
      triggerElement: "#panelContainer",
      triggerHook: "onLeave",
      duration: "300%"
    })
    .setPin("#panelContainer")
    .setTween(animation)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
});
*/
/*
new ScrollMagic.Scene({
									triggerElement: "#trigger1",
									triggerHook: 0.9, // show, when scrolled 10% into view
									duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
									offset: 50 // move trigger to center of element
								})
								.setClassToggle("#reveal1", "visible") // add class to reveal
								.addIndicators() // add indicators (requires plugin)
.addTo(controller);

var tl = new TimelineMax({delay:.5}),
    svgRoot = document.getElementById("world");
TweenMax.set(svgRoot,{attr:{viewBox:"160 270 150 150"}});
tl.to(svgRoot, 3.5, {attr:{ viewBox:"0 0 1000 1000"}})
.to(svgRoot, 3.5, {attr:{ viewBox:"550 415 75 75"}},"+=.5")
*/
/*
    tl.to(svgRoot, 1.5, {attr:{ viewBox:"0 0 1000 1000"}})
      .to(svgRoot, 1.2, {attr:{ viewBox:"500 500 250 250"}},"+=.5")
      .to(svgRoot, 1, {attr:{ viewBox:"750 500 250 250"},ease:Power2.easeInOut},"+=.5")
      .to(svgRoot, 1, {attr:{ viewBox:"0 0 1000 1000"},ease:Power1.easeOut},"+=.5");
*/
