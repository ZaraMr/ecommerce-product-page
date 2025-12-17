"use strict";

const menuBtn = document.querySelector(".menu");
const menuList = document.querySelector(".nav-menu");
const closeBtn = document.querySelector(".close-btn");
const cartBtn = document.querySelector(".user-cart-btn");
const cartBox = document.querySelector(".cart");

const openMenu = function () {
  menuList.classList.add("show-mobile-menu");
  document.body.classList.add("show-mobile-menu");
};

const closeMenu = function () {
  menuList.classList.remove("show-mobile-menu");
  document.body.classList.remove("show-mobile-menu");
};

// open menu when the menu button is clicked
menuBtn.addEventListener("click", openMenu);

// Close menu when the close button is clicked
closeBtn.addEventListener("click", closeMenu);

// open cart when cart btn is clicked
cartBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  cartBox.classList.toggle("cart-active");

  // change cart btn color when cart is open
  cartBtn.firstElementChild.classList.toggle("cart-btn-active");

  // stop scrolling
  document.body.classList.toggle("cart-active");
});

// remove cart when outside of cart and cartBtn clicked
const handleOutsideClick = function (e) {
  if (!cartBox.classList.contains("cart-active")) return;

  if (e.target.closest(".cart")) {
    return;
  }

  cartBox.classList.remove("cart-active");
  cartBtn.firstElementChild.classList.remove("cart-btn-active");
  document.body.classList.remove("cart-active");
};

document.addEventListener("click", handleOutsideClick);
