'use strict';

const images = document.querySelectorAll('img');
const mainImg = document.querySelector('#largeImg');

images.forEach((image) => {
  image.addEventListener('click', (e) => {
    e.preventDefault();

    const img = e.currentTarget.getAttribute('src');

    mainImg.src = img;
  });
});
