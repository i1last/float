"use strict";

var hamburgerMenu = document.querySelector(".hamburger-menu"),
  headerLinksList = document.querySelector(".header__links-list");
hamburgerMenu.addEventListener("click", function () {
  headerLinksList.classList.contains("showing") ? headerLinksList.classList.remove("showing") : headerLinksList.classList.add("showing");
}), window.addEventListener("click", function (e) {
  e.target.matches(".hamburger-menu") || headerLinksList.classList.remove("showing");
});