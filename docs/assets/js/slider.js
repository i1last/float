"use strict";

var translateValue = document.querySelector(".slide").offsetWidth;
var slides = document.querySelector(".popular-pages__slides");
function prev() {
  slides.scrollBy({
    behavior: "smooth",
    left: -translateValue
  });
}
function next() {
  slides.scrollBy({
    behavior: "smooth",
    left: +translateValue
  });
}
//# sourceMappingURL=slider.js.map
