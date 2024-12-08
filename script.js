// Mobile menu toggle
document.getElementById('mobile-menu').addEventListener('click', function() {
  var navList = document.getElementById('nav-list');
  navList.style.display = (navList.style.display === 'flex') ? 'none' : 'flex';
});

// Slider
let currentSlide = 0;
const slider = document.querySelector('.new-slider');
const slides = document.querySelectorAll('.new-slider img');
const totalSlides = slides.length;

setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}, 3000);
