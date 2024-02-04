"use strict";

var themeButton = document.querySelector(".js-theme-button-click-area");
function getColor() {
  return getComputedStyle(document.body).getPropertyValue("--color-header");
}
function setBrowserColor() {
  document.querySelector('meta[name="theme-color"]').setAttribute("content", "".concat(getColor())), document.querySelector('meta[name="msapplication-navbutton-color"]').setAttribute("content", "".concat(getColor())), document.querySelector('meta[name="apple-mobile-web-app-status"]').setAttribute("content", "".concat(getColor()));
}
setBrowserColor(), themeButton.addEventListener("click", function () {
  if ("dark" === html.getAttribute("theme")) localStorage.setItem("theme", "light"), html.setAttribute("theme", "light");else localStorage.setItem("theme", "dark"), html.setAttribute("theme", "dark");
  setBrowserColor();
});
//# sourceMappingURL=theme-changer.js.map
