const menuBtn = document.querySelector(".header__button");

const menu = document.querySelector(".header__menu");
const body = document.querySelector("body");

menuBtn.addEventListener("click", (e) => {
  menu.classList.toggle("header__menu_active");
  body.classList.toggle("menu-opened");
  menuBtn.classList.toggle("header__button_opened");

});

menu.addEventListener("click", (e) => {
  if (e.target.classList.contains("menu__link")) {
    menu.classList.remove("header__menu_active");
    body.classList.remove("menu-opened");
    menuBtn.classList.remove("header__button_opened");
  }
});

// галерея

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,

  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerGroup: 3,
    },
  },

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

// обработка faq
const answers = document.querySelectorAll(".faq__item");
answers.forEach(event => {
  event.addEventListener("click", () => {
    if (event.classList.contains("active")) {
      event.classList.remove("active");
    } else {
      event.classList.add("active");
    }
  })
});

// обработка в таблице цен

// let isWeekend = null;
// document.getElementById('price-column__header').addEventListener('click', () => {
//   let day = document.getElementById('price-column__header').firstChild;
//   let priceForOne = document.getElementById("priceForOne");
//   let priceForTwo = document.getElementById("priceForTwo");
//   let priceForThree = document.getElementById("priceForThree");

//   if (day.textContent.startsWith('Выходные')) {
//     day.textContent = "Будние дни";
//     priceForOne.textContent = "1000";
//     priceForTwo.textContent = "1800";
//     priceForThree.textContent = "2500";
//   } else {
//     day.textContent = "Выходные";
//     priceForOne.textContent = "1300";
//     priceForTwo.textContent = "2500";
//     priceForThree.textContent = "3500";
//   }
// });


// карта

ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map", {
      center: [53.717560, 91.435803],
      zoom: 17
  });
  var myPlacemark = new ymaps.Placemark([53.717560, 91.435803]);
  myMap.geoObjects.add(myPlacemark);
}