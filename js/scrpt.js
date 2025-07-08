// Toggle menu icon and navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Scroll sections and link highlighting
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        let matchingLink = document.querySelector('header nav a[href*="' + id + '"]');
        if (matchingLink) matchingLink.classList.add('active');
      });
    }
  });

  // Sticky header
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // Close navbar when scrolling
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};


