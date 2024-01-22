"use strict";

var openButton = document.querySelectorAll(".download-aside__open");
openButton.forEach(function (t) {
  t.addEventListener("click", function (t) {
    var e = document.querySelector("#js-download-aside--".concat(t.target.getAttribute("js-download-aside-id")));
    "translateX(-100%)" == e.style.transform ? animate({
      duration: 300,
      timing: timingEaseOut,
      draw: function draw(t) {
        e.style.transform = "translateX(-".concat(100 - 100 * t, "%)");
      }
    }) : animate({
      duration: 300,
      timing: timingEaseOut,
      draw: function draw(t) {
        e.style.transform = "translateX(-".concat(100 * t, "%)");
      }
    });
  });
});
//# sourceMappingURL=download-aside-opener.js.map
