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
  var addis_x = 605;
  var addis_y = 223;
  var size = 75;
  var calc_addis_x = addis_x - size/2;
  var calc_addis_y = addis_y - size/2;
  
  var chicago_x = 267;
  var chicago_y = 117;
  var size = 75;
  var calc_chicago_x = chicago_x - size/2;
  var calc_chicago_y = chicago_y - size/2;

  var map_width = 1013/2;
  var map_height = 433/2;

  var svgRoot = document.getElementById("svg2");
  //var svgStart = document.getElementById("svg2");
  //var svgEnd = document.getElementById("svg2");
  var start = calc_chicago_x + " " + calc_chicago_y + " " + size + " " + size;
  var zoomed_out = "0 0 " + map_width + " " + map_height;


  // mid-point of line:
  var mpx = (chicago_x + addis_x) * 0.5;
  var mpy = (chicago_y + addis_y) * 0.5;

  // angle of perpendicular to line:
  var theta = Math.atan2(addis_y - chicago_y, addis_x - chicago_x) - Math.PI / 2;

  // distance of control point from mid-point of line:
  var offset = 30;

  // location of control point:
  var c1x = mpx + offset * Math.cos(theta);
  var c1y = mpy + offset * Math.sin(theta);

  // show where the control point is:
  //var c1 = document.getElementById("cp");
  //c1.setAttribute("cx", c1x);
  //c1.setAttribute("cy", c1y);

  // construct the command to draw a quadratic curve
  var curve = "M" + chicago_x + " " + chicago_y + " Q " + c1x + " " + c1y + " " + addis_x + " " + addis_y;
  var curveElement = document.getElementById("path");
  curveElement.setAttribute("d", curve);


  var end = calc_addis_x + " " + calc_addis_y + " " + size + " " + size;
  TweenMax.set(svgRoot,{attr:{viewBox: start}});
  var tl = new TimelineLite();
  tl.set(svgRoot,{attr:{viewBox: start}});
  tl.to(svgRoot, 3.5, {attr:{ viewBox: zoomed_out}, ease: Linear.easeNone});
  tl.to(svgRoot, 3.5, {attr:{ viewBox: end}, ease: Linear.easeNone});

  var controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 1000})
    .setPin("#one")
  //  .addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
    .addTo(controller);
  
  var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 1000})
    .setTween(tl)
  //  .addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
    .addTo(controller);


  function pathPrepare ($el) {
		var lineLength = $el[0].getTotalLength();
		$el.css("stroke-dasharray", lineLength);
		$el.css("stroke-dashoffset", lineLength);
	}

	var $path = $("path#path");

	// prepare SVG
	pathPrepare($path);

	// build tween
	var tween3 = new TimelineMax()
		.add(TweenMax.to($path, 3.5, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 1000, tweenChanges: true})
    .setTween(tween3)
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
