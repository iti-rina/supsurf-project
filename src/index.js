const menuBtn = document.querySelector(".header__button");

const menu = document.querySelector(".header__menu");
const body = document.querySelector("body");

menuBtn.addEventListener("click", (e) => {
  console.log(e);
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


// галерея для мобилок

const btnWrapper = document.querySelector(".gallery-mobile__buttons-wrapper");
const slider = document.querySelector(".gallery-mobile__inner");

btnWrapper.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    [...btnWrapper.children].forEach(item => {
      item.classList.remove("active");
    });
    if (e.target.classList.contains("buttons__one")) {
      slider.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("buttons__two")) {
      slider.style.transform = `translateX(${-(151 + 10)*2}px)`;
      e.target.classList.add("active");
    } else if (e.target.classList.contains("buttons__three")) {
      slider.style.transform = `translateX(${-(151 + 10) * 4}px)`;
      e.target.classList.add("active");
    }   
  }
})

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

let isWeekend = null;
document.getElementById('price-column__header').addEventListener('click', () => {
  let day = document.getElementById('price-column__header').firstChild;
  let priceForOne = document.getElementById("priceForOne");
  let priceForTwo = document.getElementById("priceForTwo");
  let priceForThree = document.getElementById("priceForThree");

  if (day.textContent.startsWith('Выходные')) {
    day.textContent = "Будние дни";
    priceForOne.textContent = "1000";
    priceForTwo.textContent = "1800";
    priceForThree.textContent = "2500";
  } else {
    day.textContent = "Выходные";
    priceForOne.textContent = "1300";
    priceForTwo.textContent = "2500";
    priceForThree.textContent = "3500";
  }
});


// карта

ymaps.ready(init);
function init(){
  // Создание карты.
  var myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.043951, 82.922440],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 15
  });
  var myPlacemark = new ymaps.Placemark([55.043951, 82.922440]);
  myMap.geoObjects.add(myPlacemark);
}