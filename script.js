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

const swiper3 = new Swiper('.swiper-container3', {
  loop: true, // Loop the slides
  pagination: {
    el: '.swiper-pagination3',
    clickable: true, // Allows bullets to be clicked
  },
});

const swiper4 = new Swiper('.swiper-container4', {
  loop: true, // Loop the slides
  pagination: {
    el: '.swiper-pagination4',
    clickable: true, // Allows bullets to be clicked
  },
});

const swiper5 = new Swiper('.swiper-container5', {
  loop: true, // Loop the slides
  autoplay:true,
  autoplay: {
    delay: 1500,
  },
  slidesPerView: 1, // Default to 1 slide on mobile
  spaceBetween: 10,

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  },
});
