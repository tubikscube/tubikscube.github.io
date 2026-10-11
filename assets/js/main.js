/* Tuğba Altın — site behaviour
   1. Mobile navigation
   2. Light / dark theme toggle (persisted)
   3. Current year in footer
*/

/* ---------- 1. Mobile navigation ---------- */
const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.site-nav');

const closeNav = () => {
  menuButton?.setAttribute('aria-expanded', 'false');
  navigation?.classList.remove('is-open');
};

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  navigation?.classList.toggle('is-open', !open);
});

navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNav));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeNav();
});

/* ---------- 2. Theme toggle ---------- */
const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');

const systemPrefersDark = () =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const currentTheme = () =>
  root.getAttribute('data-theme') || (systemPrefersDark() ? 'dark' : 'light');

themeButton?.addEventListener('click', () => {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch (e) { /* storage unavailable */ }
});

/* ---------- 3. Footer year ---------- */
document.querySelectorAll('[data-year]').forEach((item) => {
  item.textContent = String(new Date().getFullYear());
});
