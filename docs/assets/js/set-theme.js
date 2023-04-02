"use strict";

var localStorageTheme = localStorage.getItem("theme");
var html = document.documentElement;
switch (localStorageTheme) {
  case "dark":
  default:
    html.setAttribute("theme", "dark");
    break;
  case "light":
    html.setAttribute("theme", "light");
}