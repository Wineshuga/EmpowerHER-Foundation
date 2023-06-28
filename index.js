const hamburger = document.querySelector('.menu-icon');
const menu = document.querySelector('.mobile-menu');
const closeIcon = document.querySelector('.fa-close');

hamburger.addEventListener('click', () => {
  menu.style.display = 'block';
});

closeIcon.addEventListener('click', () => {
  menu.style.display = 'none';
});