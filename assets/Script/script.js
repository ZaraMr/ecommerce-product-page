const menuBtn = document.querySelector(".menu");
const menuList = document.querySelector(".nav-menu");
const closeBtn = document.querySelector(".close-btn");

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
