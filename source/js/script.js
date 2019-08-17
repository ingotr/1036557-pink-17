// Раздел переменных
var navMain = document.querySelector(".main-nav");
var navBurger = document.querySelector(".main-nav__burger");

var modalSuccess = document.querySelector(".modal--success");
var modalFailure = document.querySelector(".modal--failure");
var failureClose = document.querySelector(".failure-close");
var successClose = document.querySelector(".success-close");
var form = document.querySelector(".contest-form__fields");
var formSubmitBtn = document.querySelector(".contest-form__button--submit");

// Обязательные поля для формы
// var surname = form.querySelector("[name=surname]");
// var name = form.querySelector("[name=name]");
// var email = form.querySelector("[name=email]");

var isStorageSupport = true;

// Для отладки
// console.log(surname.value);
// console.log(name.value);
// console.log(email.value);

// Раздел открытия мобильного меню
navMain.classList.remove("main-nav--nojs");
// navMain.classList.remove("main-nav--opened");
// navMain.classList.add("main-nav--closed");

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

navBurger.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

// Раздел открытия формы
form.addEventListener("submit", function (evt) {
  if (!surname.value && !name.value && !email.value) {
    evt.preventDefault();
    modalFailure.classList.add("modal-show");
  } else {
    if (isStorageSupport) {
      modalSuccess.classList.add("modal-show");
      evt.preventDefault();
      localStorage.setItem("name", name.value);
      localStorage.setItem("surname", surname.value);
      localStorage.setItem("email", email.value);
    }
  }
});

// Раздел закрытия формы
failureClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFailure.remove("modal-show");
});

successClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalSuccess.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalFailure.classList.contains("modal-show")) {
      modalFailure.classList.remove("modal-show");
    }
    if (modalSuccess.classList.contains("modal-show")) {
      modalSuccess.classList.remove("modal-show");
    }
  }
});
