  
   function toggleMenu() {
    const navLinks = document.querySelector(".portfolio-nav-links");
    navLinks.classList.toggle("show");
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
const hamburger = document.querySelector('.hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', function(event) {
  event.stopPropagation(); 
  navMenu.classList.toggle('show'); 
});

document.addEventListener('click', function(event) {
  if (navMenu.classList.contains('show')) {
  
    if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
      navMenu.classList.remove('show'); 
    }
  }
});
