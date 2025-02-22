// Раздел переменных
var navMain = document.querySelector(".main-nav");
var navBurger = document.querySelector(".main-nav__burger");
var isStorageSupport = true;
var isPageHasForm = true;

// Раздел открытия мобильного меню
navMain.classList.remove("main-nav--nojs");
navMain.classList.remove("main-nav--opened");
navMain.classList.add("main-nav--closed");

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

navBurger.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

try {
  var form = document.querySelector(".contest-form__main-form");
} catch(err) {
  form = null;
};

if (form) {
  showModalWindow();
};

function showModalWindow() {
  // Обязательные поля для формы

  let modalFailure = document.querySelector(".modal--failure");
  let modalSuccess = document.querySelector(".modal--success");
  let failureClose = modalFailure.querySelector(".modal__button-failure-close");
  let successClose = modalSuccess.querySelector(".modal__button-success-close");

  let formSubmitBtn = document.querySelector(".form-button--submit");

  let surname = form.querySelector("[name=surname]");
  let name = form.querySelector("[name=name]");
  let email = form.querySelector("[name=email]");

  // Раздел открытия формы
  form.addEventListener("submit", function (evt) {
    if (!surname.value && !name.value && !email.value) {
      evt.preventDefault();
      modalFailure.classList.add("modal--show");
    } else {
      if (isStorageSupport) {
        modalSuccess.classList.add("modal--show");
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
    modalFailure.remove("modal--show");
  });

  successClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalSuccess.remove("modal--show");
  });

  // Отключение модального окна по esc
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modalFailure.classList.contains("modal--show")) {
        modalFailure.classList.remove("modal--show");
      }
      if (modalSuccess.classList.contains("modal--show")) {
        modalSuccess.classList.remove("modal--show");
      }
    }
  });
};
