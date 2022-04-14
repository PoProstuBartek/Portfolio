'use strict';
// Selectors
const sections = document.querySelectorAll('section');
const navLink = document.querySelectorAll('.nav-element');

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