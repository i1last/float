"use strict";

var tableControllers = document.querySelectorAll(".table-controller");
createTable(document.querySelector(".table-controller").getAttribute("table")), tableControllers.forEach(function (e) {
  e.addEventListener("change", function () {
    var t = e.getAttribute("table");
    createTable(t);
  });
});
//# sourceMappingURL=table-listener.js.map
