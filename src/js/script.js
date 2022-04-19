'use strict';
// Selectors
const body = document.querySelector('body');
const sections = document.querySelectorAll('section');
const navLink = document.querySelectorAll('.nav-element');
const menuBtn = document.querySelector('.menuBtn');
const navMobile = document.querySelector('.nav-mobile');
const navMobileElem = document.querySelectorAll('.nav-mobile-element');

// Navigation
function linkClickHandler(){
  const clickedElement = this;

  const activeLinks = document.querySelectorAll('.nav-element');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  } 

  clickedElement.classList.add('active');
}

for(let link of navLink){
  link.addEventListener('click', linkClickHandler);
}

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  navMobile.classList.toggle('active-mobile');
  body.classList.toggle('no-scroll');
});

navMobileElem.forEach((item) => {
  item.addEventListener('click', () =>{
    menuBtn.classList.toggle('open');
    navMobile.classList.toggle('active-mobile');
    body.classList.toggle('no-scroll');
  });
});

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLink.forEach((li) => {
    li.classList.remove('active');
    if (li.classList.contains(current)){
      li.classList.add('active');
    }
  });
});