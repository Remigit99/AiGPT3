'use strict';

const openBtn = document.querySelector(".open__menu");
const closeBtn = document.querySelector(".close__menu");
const navLinks = document.querySelector(".nav__links");

openBtn.addEventListener('click', () =>{
    openBtn.style.display = 'none';
    closeBtn.style.display = 'block';
    navLinks.style.display = 'flex';
});

closeBtn.addEventListener('click', () =>{
    openBtn.style.display = 'block';
    closeBtn.style.display = 'none';
    navLinks.style.display = 'none';
} )