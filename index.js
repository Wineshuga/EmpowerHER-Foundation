const hamburger = document.querySelector('.menu-icon');
const menu = document.querySelector('.mobile-menu');
const closeIcon = document.querySelector('.fa-close');
const moreBtn = document.querySelector('.more-btn');
const moreFeature = document.querySelectorAll('.featured-container > section:nth-child(n+3)');

hamburger.addEventListener('click', () => {
  menu.style.display = 'block';
});

closeIcon.addEventListener('click', () => {
  menu.style.display = 'none';
});

moreBtn.addEventListener('click', () => {
  moreFeature.forEach((item) => {
    if (item.style.display === 'none') {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
});