const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 40,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperInfo = new Swiper(".swiper-info", {
  slidesPerView: 2,
  spaceBetween: 70,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperAdaptive = new Swiper(".swiper-adaptive", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const swiperMobile = new Swiper(".swiper-mobile", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperMobileInfo = new Swiper(".swiper-mobile-info", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

if (window.innerWidth <= 1025) {
  document
    .querySelectorAll(".swiper")
    .forEach((el) => (el.style.display = "none"));
  document
    .querySelectorAll(".swiper-info")
    .forEach((el) => (el.style.display = "none"));
  document
    .querySelectorAll(".swiper-adaptive")
    .forEach((el) => (el.style.display = "block"));
  document
    .querySelectorAll(".swiper-mobile-info")
    .forEach((el) => (el.style.display = "block"));
}

if (window.innerWidth <= 650) {
  document
    .querySelectorAll(".swiper-adaptive")
    .forEach((el) => (el.style.display = "none"));
  document
    .querySelectorAll(".swiper-mobile")
    .forEach((el) => (el.style.display = "block"));
}

const presents = document.querySelectorAll(".li-presents");
const masks = document.querySelectorAll(".li-masks");
const accesories = document.querySelectorAll(".li-accesories");
const shampoo = document.querySelectorAll(".li-shampoo");
const info = document.querySelectorAll(".li-info");

presents.forEach(el => el.addEventListener("click", (e) => {
  e.preventDefault();
  document
    .querySelector(".gifts__header")
    .scrollIntoView({ block: "start", behavior: "smooth" });
}));
masks.forEach(el => el.addEventListener("click", (e) => {
  e.preventDefault();
  document
    .querySelector(".masks__header")
    .scrollIntoView({ block: "start", behavior: "smooth" });
}));
accesories.forEach(el => el.addEventListener("click", (e) => {
  e.preventDefault();
  document
    .querySelector(".accesories__header")
    .scrollIntoView({ block: "start", behavior: "smooth" });
}));
shampoo.forEach(el => el.addEventListener("click", (e) => {
  e.preventDefault();
  document
    .querySelector(".shampoo__header")
    .scrollIntoView({ block: "start", behavior: "smooth" });
}));
info.forEach(el => el.addEventListener("click", (e) => {
  e.preventDefault();
  document
    .querySelector(".info__header")
    .scrollIntoView({ block: "start", behavior: "smooth" });
}));

let button = document.querySelector('.menu-icon');
let overlay = document.querySelector('.menu-overlay');
let menu = document.querySelector('.header-menu');
let list = document.querySelector('.header-list');

button.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.add('active');
  overlay.classList.add('active');
  
});

list.addEventListener('click', (e) => {
  if(e.target.tagName === 'A') {
    console.log('nive')
    overlay.classList.remove('active');
    menu.classList.remove('active')
  }
})

overlay.addEventListener('click', () => {
  overlay.classList.remove('active');
  menu.classList.remove('active')
})


