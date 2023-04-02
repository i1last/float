"use strict";

function dropMenu(t) {
  var e = document.querySelector(t);
  if (e.classList.contains("drop-content--showing")) e.classList.remove("drop-content--showing");else {
    if (!window.event.target.matches(t)) {
      var _t = document.querySelectorAll(".drop-content");
      for (var _e = 0; _e < _t.length; _e++) {
        var o = _t[_e];
        o.classList.contains("drop-content--showing") && o.classList.remove("drop-content--showing");
      }
    }
    document.querySelector(t).classList.toggle("drop-content--showing");
  }
}
window.addEventListener("click", function (t) {
  if (!t.target.matches(".drop-menu-button")) {
    var _t2 = document.querySelectorAll(".drop-content");
    for (var e = 0; e < _t2.length; e++) {
      var o = _t2[e];
      o.classList.contains("drop-content--showing") && o.classList.remove("drop-content--showing");
    }
  }
});