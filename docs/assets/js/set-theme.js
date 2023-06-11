"use strict";

var localStorageTheme = localStorage.getItem("theme"),
  currentBrowserThemeDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
var jsFavicon = document.querySelector(".js-favicon"),
  html = document.documentElement;
switch (currentBrowserThemeDark && jsFavicon.setAttribute("href", "/favicon--dark.svg"), localStorageTheme) {
  case "dark":
    html.setAttribute("theme", "dark");
    break;
  case "light":
    html.setAttribute("theme", "light");
    break;
  default:
    html.setAttribute("theme", currentBrowserThemeDark ? "dark" : "light");
}
//# sourceMappingURL=set-theme.js.map
