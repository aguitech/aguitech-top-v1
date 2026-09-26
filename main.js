/* main.js — entry point, modular */
import { initReveal } from './js/reveal.js';
import { initCounter } from './js/counter.js';
import { initTabs } from './js/tabs.js';
import { initMenu } from './js/menu.js';
import { initNav } from './js/nav.js';

const ready = (cb) => {
  if (document.readyState !== 'loading') cb();
  else document.addEventListener('DOMContentLoaded', cb);
};

ready(() => {
  initMenu();
  initNav();
  initReveal();
  initCounter();
  initTabs('.sis-tabs', '.sis-pane');
});
