const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobile-nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileNav.classList.toggle("active");
});


const swiper = new Swiper('.swiper-container', {
  loop: true, // Loop the slides
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // Allows bullets to be clicked
  },
});

const swiper2 = new Swiper('.swiper-container2', {
  loop: true, // Loop the slides
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: '.swiper-pagination2',
    clickable: true, // Allows bullets to be clicked
  },
});
