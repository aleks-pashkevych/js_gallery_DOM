'use strict';

const mainImg = document.querySelector('#largeImg');
const list = document.querySelector('#thumbs');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const img = e.target.getAttribute('src');

  mainImg.src = img;
});
