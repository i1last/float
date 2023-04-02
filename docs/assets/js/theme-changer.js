"use strict";

var changeThemeButton = document.querySelector(".change-theme-button");
changeThemeButton.addEventListener("click", function () {
  if ("dark" === html.getAttribute("theme")) localStorage.setItem("theme", "light"), html.setAttribute("theme", "light");else localStorage.setItem("theme", "dark"), html.setAttribute("theme", "dark");
});