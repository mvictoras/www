'use strict';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { Dropdown } from 'bootstrap';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);

if (window.location.pathname.includes('vis-deadlines')) {
  const STORAGE_KEY_TZ = 'visDeadlines.tzMode';
  const STORAGE_KEY_FILTERS = 'visDeadlines.filters';
  const localTz = dayjs.tz.guess();

  document.querySelectorAll('.local-timezone').forEach((el) => {
    el.textContent = localTz;
  });

  const tzSelect = document.querySelector('[data-tz-toggle]');
  const filterButtons = document.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('.deadline-card');
  const rows = document.querySelectorAll('.deadline-row');

  let tzMode = localStorage.getItem(STORAGE_KEY_TZ) || 'local';
  if (tzSelect) tzSelect.value = tzMode;

  const stored = JSON.parse(localStorage.getItem(STORAGE_KEY_FILTERS) || '["all"]');
  let activeFilters = new Set(stored);

  function parseDeadline(row) {
    const raw = row.dataset.deadline;
    const tz = row.dataset.tz || 'Etc/GMT+12';
    return dayjs.tz(raw, tz);
  }

  function formatDeadline(dt, tzName) {
    const target = tzMode === 'local' ? dt.tz(localTz) : dt.tz(tzName);
    const tzLabel = tzMode === 'local' ? localTz : tzName;
    return target.format('ddd, MMM D, YYYY · h:mm A') + ' (' + tzLabel + ')';
  }

  function urgencyClass(diffMs) {
    if (diffMs < 0) return 'is-passed';
    const days = diffMs / 86400000;
    if (days <= 7) return 'is-urgent';
    if (days <= 30) return 'is-soon';
    return 'is-future';
  }

  function renderCountdown(el, deadline) {
    const update = () => {
      const now = dayjs();
      const diff = deadline.diff(now);
      if (diff <= 0) {
        el.textContent = 'Passed';
        return;
      }
      const days = Math.floor(diff / 86400000);
      const hours = Math.floor((diff % 86400000) / 3600000);
      const minutes = Math.floor((diff % 3600000) / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);
      el.textContent =
        days + 'd ' +
        String(hours).padStart(2, '0') + 'h ' +
        String(minutes).padStart(2, '0') + 'm ' +
        String(seconds).padStart(2, '0') + 's';
    };
    update();
    return setInterval(update, 1000);
  }

  function refreshAllRows() {
    rows.forEach((row) => {
      const dt = parseDeadline(row);
      const tzName = row.dataset.tz || 'Etc/GMT+12';
      const displayEl = row.querySelector('[data-display-time]');
      const counterEl = row.querySelector('[data-counter]');
      const addBtn = row.querySelector('[data-add-button]');

      const diffMs = dt.diff(dayjs());

      if (displayEl) displayEl.textContent = formatDeadline(dt, tzName);

      ['is-passed', 'is-urgent', 'is-soon', 'is-future'].forEach((c) => row.classList.remove(c));
      row.classList.add(urgencyClass(diffMs));

      if (counterEl) {
        if (row._timer) clearInterval(row._timer);
        row._timer = renderCountdown(counterEl, dt);
      }

      if (addBtn && !addBtn.dataset.attached && diffMs > 0 && typeof window.createCalendar === 'function') {
        try {
          const cal = window.createCalendar({
            options: {},
            data: {
              title: row.dataset.familyName + ' ' + row.dataset.track + ' due',
              start: dt.toDate(),
              end: dt.toDate(),
              description: row.dataset.familyName + ' ' + row.dataset.instanceYear + ' — ' + row.dataset.track,
            },
          });
          addBtn.appendChild(cal);
          addBtn.dataset.attached = '1';
          const toggle = cal.querySelector('[data-bs-toggle="dropdown"]');
          if (toggle) new Dropdown(toggle);
        } catch (e) {
          void e;
        }
      }
    });

    refreshHero();
  }

  function rowMatchesFilter(row) {
    if (activeFilters.has('all')) return true;
    const card = row.closest('.deadline-card');
    if (!card) return false;
    const tags = (card.dataset.tags || '').split(/\s+/).filter(Boolean);
    return tags.some((t) => activeFilters.has(t));
  }

  function refreshHero() {
    const heroTitle = document.querySelector('[data-hero-title]');
    const heroCountdown = document.querySelector('[data-hero-countdown]');
    const heroWhen = document.querySelector('[data-hero-when]');
    if (!heroTitle || !heroCountdown) return;

    let soonest = null;
    let soonestRow = null;
    rows.forEach((row) => {
      if (!rowMatchesFilter(row)) return;
      const dt = parseDeadline(row);
      if (dt.diff(dayjs()) <= 0) return;
      if (!soonest || dt.isBefore(soonest)) {
        soonest = dt;
        soonestRow = row;
      }
    });

    if (window._heroTimer) clearInterval(window._heroTimer);

    if (!soonest) {
      heroTitle.textContent = 'No upcoming deadlines match your filters';
      heroCountdown.textContent = '—';
      heroWhen.textContent = '';
      document.querySelector('[data-deadlines-hero]').classList.add('is-empty');
      return;
    }

    document.querySelector('[data-deadlines-hero]').classList.remove('is-empty');
    const tzName = soonestRow.dataset.tz || 'Etc/GMT+12';
    heroTitle.innerHTML =
      '<strong>' + soonestRow.dataset.familyName + ' ' + soonestRow.dataset.instanceYear + '</strong> — ' +
      soonestRow.dataset.track;
    heroWhen.textContent = formatDeadline(soonest, tzName);
    window._heroTimer = renderCountdown(heroCountdown, soonest);
  }

  function applyFilters() {
    cards.forEach((card) => {
      if (activeFilters.has('all')) {
        card.classList.remove('is-hidden');
        return;
      }
      const tags = (card.dataset.tags || '').split(/\s+/).filter(Boolean);
      const match = tags.some((t) => activeFilters.has(t));
      card.classList.toggle('is-hidden', !match);
    });
    refreshHero();
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      if (filter === 'all') {
        activeFilters = new Set(['all']);
      } else {
        activeFilters.delete('all');
        if (activeFilters.has(filter)) {
          activeFilters.delete(filter);
        } else {
          activeFilters.add(filter);
        }
        if (activeFilters.size === 0) activeFilters = new Set(['all']);
      }
      filterButtons.forEach((b) => b.classList.toggle('is-active', activeFilters.has(b.dataset.filter)));
      localStorage.setItem(STORAGE_KEY_FILTERS, JSON.stringify([...activeFilters]));
      applyFilters();
    });
  });

  if (tzSelect) {
    tzSelect.addEventListener('change', (e) => {
      tzMode = e.target.value;
      localStorage.setItem(STORAGE_KEY_TZ, tzMode);
      refreshAllRows();
    });
  }

  filterButtons.forEach((b) => b.classList.toggle('is-active', activeFilters.has(b.dataset.filter)));
  applyFilters();
  refreshAllRows();
}
