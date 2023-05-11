'use strict';

const menu = document.querySelector('.menu');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const menuLinks = document.querySelector('.menu-links');
const links = document.querySelectorAll('.menu-links ul li');



const toggle = () =>{
  openMenu.classList.toggle('hidden');
  closeMenu.classList.toggle('hidden');
  menuLinks.classList.toggle('show');
}

for(const item of links){
  item.addEventListener('click',toggle);
}
menu.addEventListener('click',toggle);