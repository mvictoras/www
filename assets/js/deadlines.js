'use strict';

(function($) {
  // render countdown timer
  $('[deadline]').each(function() {
    var $this = $(this), deadline = $(this).attr('deadline'), timezone = $(this).attr('timezone');
    $this.countdown(deadline, function(event) {
      $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
    });
  });

  try {
      var local_timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      $('.local-timezone').text(local_timezone.toString());
    }
    catch(err) {
      $('.local-timezone-hide').hide();
    }
}(jQuery));
