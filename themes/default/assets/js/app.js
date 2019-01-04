var Page = Barba.BaseView.extend({
  namespace: 'page',
  onEnter: function() {
      // The new Container is ready and attached to the DOM.
  },
  onEnterCompleted: function() {
      // The Transition has just finished.
  },
  onLeave: function() {
      // A new Transition toward a new page has just started.
  },
  onLeaveCompleted: function() {
      // The Container has just been removed from the DOM.
  }
});

var HideShowTransition = Barba.BaseTransition.extend({
  start: function() {
    this.newContainerLoading.then(this.finish.bind(this));
  },

  finish: function() {
    document.body.scrollTop = 0;
    this.done();
  }
});

var FadeTransition = Barba.BaseTransition.extend({
  start: function() {
    /**
     * This function is automatically called as soon the Transition starts
     * this.newContainerLoading is a Promise for the loading of the new container
     * (Barba.js also comes with an handy Promise polyfill!)
     */

    // As soon the loading is finished and the old page is faded out, let's fade the new page
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this));
  },

  fadeOut: function() {
    /**
     * this.oldContainer is the HTMLElement of the old Container
     */
     Matrix.startAnimation();
     return $('#c').animate({ opacity: 1 }).promise();
  },

  fadeIn: function() {
    /**
     * this.newContainer is the HTMLElement of the new Container
     * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
     * Please note, newContainer is available just after newContainerLoading is resolved!
     */

    var _this = this;
    var $el = $(this.newContainer);

    $(this.oldContainer).hide();

    $el.css({
      visibility : 'visible',
      opacity : 1
    });

    $('#c').animate({ opacity: 0 }, 600, function() {
      /**
       * Do not forget to call .done() as soon your transition is finished!
       * .done() will automatically remove from the DOM the old Container
       */
       Matrix.stopAnimation();
      _this.done();
    });

  }
});

// Don't forget to init the view!
Page.init();
Matrix.init();
Barba.Pjax.start();
// For every link make sure you prefetch when hovering over a link
Barba.Prefetch.init();

// Change transition
Barba.Pjax.getTransition = function() {
  return FadeTransition;
};
