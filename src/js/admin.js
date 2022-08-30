// navbar
const showMenu = () => {
  document
    .querySelector("#navbar-menu")
    .classList.toggle("translate-y-[-100%]");
  document.querySelector("#menu-icon").classList.toggle("hidden");
  document.querySelector("#x-icon").classList.toggle("hidden");
};

// countdown timer
const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

// ganti countdown timer
const countdownDate = "2022-09-10T00:00:00Z";

const countDown = new Date(countdownDate).getTime();
const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDown - now;

  Math.floor(distance / day) >= 10
    ? (document.getElementById("days").innerText = Math.floor(distance / day))
    : (document.getElementById("days").innerText =
        "0" + Math.floor(distance / day));

  Math.floor((distance % day) / hour) >= 10
    ? (document.getElementById("hours").innerText = Math.floor(
        (distance % day) / hour
      ))
    : (document.getElementById("hours").innerText =
        "0" + Math.floor((distance % day) / hour));

  Math.floor((distance % hour) / minute) >= 10
    ? (document.getElementById("minutes").innerText = Math.floor(
        (distance % hour) / minute
      ))
    : (document.getElementById("minutes").innerText =
        "0" + Math.floor((distance % hour) / minute));

  Math.floor((distance % minute) / second) >= 10
    ? (document.getElementById("seconds").innerText = Math.floor(
        (distance % minute) / second
      ))
    : (document.getElementById("seconds").innerText =
        "0" + Math.floor((distance % minute) / second));

  //jika timer habis
  if (distance < 0) {
    // document.querySelector("#promotion").classList.add("hidden");
    clearInterval(x);
  }
}, 0);

// add and minus item
let addItem = (btn) => {
  let counter = parseInt(btn.previousElementSibling.innerHTML);
  btn.previousElementSibling.innerHTML = counter + 1;
};
let minusItem = (btn) => {
  let counter = parseInt(btn.nextElementSibling.innerHTML);
  if (counter == 0) {
    return;
  }
  btn.nextElementSibling.innerHTML = counter - 1;
};

// Add Menu
const addMenu = () => {
  document.querySelector("#add-menu-popup").classList.remove("hidden");
};

const cancelAddMenu = () => {
  document.querySelector("#add-menu-popup").classList.add("hidden");
  document.querySelector("#add-menu-form").reset();
};

const submitMenu = (e, element) => {
  e.preventDefault();
  let menuName = document.querySelector("#menu-name").value;
  let menuPrice = document.querySelector("#menu-price").value;
  let menuImage = document.querySelector("#menu-image").value;
  let menuType = document.querySelector("#menu-type").value;
  let menuDesc = document.querySelector("#menu-desc").value;

  if (
    menuName == "" ||
    menuPrice == "" ||
    menuImage == "" ||
    menuType == "" ||
    menuDesc == ""
  ) {
    document.querySelector("#menu-validation").innerHTML =
      "Fill out all of the fields above";
  } else {
    element.submit();
  }
};

// Edit Menu
const editMenu = () => {
  document.querySelector("#edit-menu-popup").classList.remove("hidden");
};

const cancelEditMenu = () => {
  document.querySelector("#edit-menu-popup").classList.add("hidden");
  document.querySelector("#edit-menu-form").reset();
};

const updateMenu = (e, element) => {
  e.preventDefault();
  let menuName = document.querySelector("#menu-name").value;
  let menuPrice = document.querySelector("#menu-price").value;
  let menuImage = document.querySelector("#menu-image").value;
  let menuType = document.querySelector("#menu-type").value;
  let menuDesc = document.querySelector("#menu-desc").value;

  if (
    menuName == "" ||
    menuPrice == "" ||
    menuImage == "" ||
    menuType == "" ||
    menuDesc == ""
  ) {
    document.querySelector("#menu-validation").innerHTML =
      "Fill out all of the fields above";
  } else {
    element.submit();
  }
};

// Add Promotion
const addPromo = () => {
  document.querySelector("#add-promo-popup").classList.remove("hidden");
};

const cancelAddPromo = () => {
  document.querySelector("#add-promo-popup").classList.add("hidden");
  document.querySelector("#add-promo-form").reset();
};

const submitPromo = (e, element) => {
  e.preventDefault();
  let promoName = document.querySelector("#promo-name").value;
  let promoPrice = document.querySelector("#promo-price").value;
  let promoImage = document.querySelector("#promo-image").value;
  let promoType = document.querySelector("#promo-type").value;
  let promoDesc = document.querySelector("#promo-desc").value;

  if (
    promoName == "" ||
    promoPrice == "" ||
    promoImage == "" ||
    promoType == "" ||
    promoDesc == ""
  ) {
    document.querySelector("#promo-validation").innerHTML =
      "Fill out all of the fields above";
  } else {
    element.submit();
  }
};

// Edit Countdown
const editCountdown = () => {
  document.querySelector("#edit-countdown-popup").classList.remove("hidden");
};

const cancelEditCountdown = () => {
  document.querySelector("#edit-countdown-popup").classList.add("hidden");
  document.querySelector("#edit-countdown-form").reset();
};

const updateCountdown = (e, element) => {
  e.preventDefault();
  let countdownDate = document.querySelector("#countdown-date").value;
  if (countdownDate == "") {
    document.querySelector("#countdown-validation").innerHTML =
      "Fill out all of the fields above";
  } else {
    element.submit();
  }
};
