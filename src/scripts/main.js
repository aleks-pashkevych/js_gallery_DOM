'use strict';

const mainImg = document.querySelector('#largeImg');
const list = document.querySelector('#thumbs');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const img = e.target.parentNode.getAttribute('href');

  mainImg.src = img;
});
