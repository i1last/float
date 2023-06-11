"use strict";

var themeButton = document.querySelector(".js-theme-button-click-area");
themeButton.addEventListener("click", function () {
  if ("dark" === html.getAttribute("theme")) localStorage.setItem("theme", "light"), html.setAttribute("theme", "light");else localStorage.setItem("theme", "dark"), html.setAttribute("theme", "dark");
});
//# sourceMappingURL=theme-changer.js.map
