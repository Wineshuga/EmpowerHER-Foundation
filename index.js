const hamburger = document.querySelector('.menu-icon');
const menu = document.querySelector('.mobile-menu');
const closeIcon = document.querySelector('.fa-close');
const moreBtn = document.querySelector('.more-btn');
const featureBox = document.querySelector('.featured-container');

hamburger.addEventListener('click', () => {
  menu.style.display = 'block';
});

closeIcon.addEventListener('click', () => {
  menu.style.display = 'none';
});

const featuredSpeakers = [
  {
    name: 'Cynthia Bunmi',
    img: './assets/images/cynthia.jpg',
    alt: 'Photo of Cynthia Bunmi',
    position: 'Manager at Premium sites Nig. Ltd',
    details: `Cynthia is an expert in Gender and Development and is well-known
    for her book "Education isn't given but acquired"`,
  },
  {
    name: 'Alexa Thorne',
    img: './assets/images/alexa.jpg',
    alt: 'Photo of Alexa Thorne',
    position: 'CEO at Bones Teller',
    details: `Alexa is an expert in Gender and Development and is well-known
    for her book "Education isn't given but acquired"`,
  },
  {
    name: 'George Maxin',
    img: './assets/images/georgee.jpg',
    alt: 'Photo of George Maxin',
    position: 'Professor in Business Management',
    details: `George is an expert in Gender and Development and is well-known
    for her book "Education isn't given but acquired"`,
  },
  {
    name: 'Olayinka Adeoye',
    img: './assets/images/adeoyee.jpg',
    alt: 'Photo of Olayinka Adeoye',
    position: 'Manager at Premium sites Nig. Ltd',
    details: `Olayinka is an expert in Gender and Development and is well-known
    for her book "Education isn't given but acquired"`,
  },
  {
    name: 'Nwachi Sarah',
    img: './assets/images/nwachi.jpg',
    alt: 'Photo of Nwachi Sarah',
    position: 'Manager at Premium sites Nig. Ltd',
    details: `Sarah is an expert in Gender and Development and is well-known
    for her book "Education isn't given but acquired"`,
  },
  {
    name: 'Tommy Agnes',
    img: './assets/images/agnes.jpg',
    alt: 'Photo of Tommy Agnes',
    position: 'Manager at Premium sites Nig. Ltd',
    details: `Agnes is an expert in Gender and Development and is well-known
    for her book "Education isn't given but acquired"`,
  },
];

const allCodes = featuredSpeakers.map((item) => (
  `
  <section>
    <div class="featured-img">
      <img src="${item.img}" alt="${item.alt}">
    </div>
    <article class="featured-text">
      <h3>${item.name}</h3>
      <p>${item.position}</p>
      <hr>
      <p>${item.details}</p>
    </article>
  </section>`
));

const featuredSection = allCodes.join('');
featureBox.insertAdjacentHTML('afterbegin', featuredSection);

const moreFeature = document.querySelectorAll('.featured-container > section:nth-child(n+3)');
moreBtn.addEventListener('click', () => {
  moreFeature.forEach((item) => {
    if (item.style.display === 'none') {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
});