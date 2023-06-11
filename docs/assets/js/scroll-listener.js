"use strict";

var scrollable = document.querySelectorAll(".scrollable"),
  lastScroll = 0;
window.addEventListener("scroll", function () {
  var l = window.scrollY;
  l > 44 && l > lastScroll ? scrollable.forEach(function (l) {
    l.classList.add("scrollable--hidden");
  }) : scrollable.forEach(function (l) {
    l.classList.remove("scrollable--hidden");
  }), lastScroll = l;
});
//# sourceMappingURL=scroll-listener.js.map
