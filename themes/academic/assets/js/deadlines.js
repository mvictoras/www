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

function startCountdown(el, targetDate) {
  function update() {
    const now = new Date();
    const diff = targetDate - now;
    if (diff <= 0) {
      el.innerHTML = 'Passed';
      return;
    }
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    el.innerHTML =
      days +
      ' days ' +
      String(hours).padStart(2, '0') +
      'h ' +
      String(minutes).padStart(2, '0') +
      'm ' +
      String(seconds).padStart(2, '0') +
      's';
  }

  update();
  setInterval(update, 1000);
}

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
  elem.appendChild(myCalendar);
}

if (window.location.pathname.includes('vis-deadlines')) {
  const localTimezone = dayjs.tz.guess();
  const today = dayjs();

  // render countdown timer
  document.querySelectorAll('.event').forEach((obj, i) => {
    void i;
    var deadline = obj.getAttribute('deadline');
    var description = obj.getAttribute('description');
    var id = obj.getAttribute('id');
    var timezone = obj.getAttribute('timezone');
    var title = obj.getAttribute('title');
    var type = obj.getAttribute('type');
    var utcOffset = obj.getAttribute('utcOffset');
    var year = obj.getAttribute('year');

    void id;
    void year;

    title += ' ' + type + ' due';

    if (deadline === '') {
      obj.parentElement.classList.add('d-none');
    } else {
      var localDeadline = dayjs();
      if (utcOffset === '') {
        localDeadline = dayjs.tz(deadline, timezone).tz(localTimezone);
      } else {
        localDeadline = dayjs(deadline + ' ' + utcOffset, 'YYYY-MM-DD hh:mm:ss Z').tz(localTimezone);
      }
      let diff = today.diff(localDeadline);

      obj.querySelector('.local-datetime').textContent = localDeadline.format('ddd, MMM Do YYYY, h:mm a zz');
      const counterEl = obj.querySelector('.local-counter');
      if (diff > 0) {
        counterEl.innerHTML = 'Passed';
      } else {
        addCalendarButton(obj.querySelector('.add-button'), title, description, localDeadline.toDate(), localDeadline.toDate());
        startCountdown(counterEl, localDeadline.toDate());
      }
    }
  });

  try {
    var local_timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.querySelectorAll('.local-timezone').forEach((el) => {
      el.textContent = local_timezone.toString();
    });
  }
  catch (err) {
    void err;
    document.querySelectorAll('.local-timezone-hide').forEach((el) => {
      el.style.display = 'none';
    });
  }

  // Disable past events
  document.querySelectorAll('.card').forEach((card) => {
    const today = dayjs();
    var eventElem = card.querySelector('.date');
    var startDate = eventElem.getAttribute('startDate');
    var description = eventElem.getAttribute('description');
    var endDate = eventElem.getAttribute('endDate');
    var title = eventElem.getAttribute('title');

    let diff = today.diff(endDate);
    if (diff > 0) {
      card.classList.add('card-disabled');
    } else {
      addCalendarButton(card.querySelector('.date'), title, description, dayjs(startDate).toDate(), dayjs(endDate).toDate());
    }
  });
}
