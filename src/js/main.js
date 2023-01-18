

import '../scss/style.scss'

// import test from './modules/test';

const $img = document.querySelector('img');

window.addEventListener('scroll', () => {
  const current = window.scrollY;
  $img.style.clipPath = `circle(${current + 50}px at center)`;
});