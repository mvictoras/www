'use strict';
/* global createCalendar */

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);

(function($) {
  function addCalendarButton(elem, title, description, start, end) {
    var myCalendar = createCalendar({
      options: {
      },
      data: {
        title: title,
        start: start,
        end: end,     
        description: description,
      },
    });
    elem.append(myCalendar);
  }

  if(window.location.pathname.includes('vis-deadlines')) {
    

    const localTimezone = dayjs.tz.guess();
    const today = dayjs();

    // render countdown timer
    $('.event').each(function(i, obj) {
      var $this = $(this), 
        deadline = $this.attr('deadline'), 
        description = $this.attr('description'),
        id = $this.attr('id'),
        timezone = $this.attr('timezone'),
        title = $this.attr('title'), 
        type = $this.attr('type'), 
        utcOffset = $this.attr('utcOffset'),
        year = $this.attr('year');

      title += ' ' + type + ' due';
      
      if(deadline === '') {
        $this.parent().addClass('d-none');
      } else {
        var localDeadline = dayjs();
        if(utcOffset === '') {
          localDeadline = dayjs.tz(deadline, timezone).tz(localTimezone);
        } else {
          localDeadline = dayjs(deadline + ' ' + utcOffset, 'YYYY-MM-DD hh:mm:ss Z').tz(localTimezone);
        }
        let diff = today.diff(localDeadline);
        
        $(obj).find('.local-datetime').text(localDeadline.format('ddd, MMM Do YYYY, h:mm a zz'));
        if (diff > 0) {
          $(obj).find('.local-counter').html('Passed');
        } else {
          addCalendarButton($(obj).find('.add-button'), title, description, localDeadline.toDate(), localDeadline.toDate());
          $(obj).find('.local-counter').countdown(localDeadline.toDate(), function(event) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
          });
        }
      }
  });

  try {
    var local_timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    $('.local-timezone').text(local_timezone.toString());
  }
  catch(err) {
    $('.local-timezone-hide').hide();
  }

  // Disable past events
  $('.card').each(function() {
    const today = dayjs();
    var eventElem = $(this).find('.date');
    var startDate = eventElem.attr('startDate'), 
      description = eventElem.attr('description'), 
      endDate = eventElem.attr('endDate'),
      title = eventElem.attr('title');
    
    let diff = today.diff(endDate);
    if( diff > 0) {
      $(this).addClass('card-disabled');
    } else {
       addCalendarButton($(this).find('.date'), title, description, dayjs(startDate).toDate(), dayjs(endDate).toDate());
    }

  });
  }
}(jQuery));
