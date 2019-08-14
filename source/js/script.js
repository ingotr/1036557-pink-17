// Раздел переменных
var navMain = document.querySelector(".main-nav");
var navBurger = document.querySelector(".main-nav__burger");

var formSumbit = document.querySelector(".contest-form__button--submit");
var modalSuccess = document.querySelector(".modal--success");
var modalFailure = document.querySelector(".modal--failure");
var form = document.querySelector(".contest-form__fields");

// Обязательные поля для формы
var surname = document.querySelector("[name=surname]");
var name = document.querySelector("[name=name]");
var email = document.querySelector("[name=email]");


// Раздел открытия мобильного меню
navMain.classList.remove("main-nav--nojs");
// navMain.classList.remove("main-nav--opened");
// navMain.classList.add("main-nav--closed");

navBurger.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
})

// Раздел открытия формы
form.addEventListener("submit", function (evt) {
  if (!surname.value || !name.value || !email.value) {
    evt.preventDefault();

  }
})
