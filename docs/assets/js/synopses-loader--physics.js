"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var cards,
  jsListContainer = document.querySelector(".js-list-container"),
  ul = document.createElement("ul");
ul.classList.add("synopses__list", "slides__list");
var req = new XMLHttpRequest();
req.open("GET", "/database/pages/handbook/physics/synopses/cards.json", !1), req.addEventListener("load", function () {
  cards = JSON.parse(req.response);
}), req.send();
var i = 0;
var _iterator = _createForOfIteratorHelper(cards),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var e = _step.value;
    var s = document.createElement("li");
    s.classList.add("synopses__item", "slide", "slide--medium", 10 == e.grade ? "bg--blueberry" : "bg--brown"), s.innerHTML = "\n    <a class=\"slide__link slide__link--p-large\" href=\"./?image=".concat(e.grade, "/").concat(e.grade, "-").concat(e.card, ".svg\">\n        <div class=\"slide__title slide__title--fz-normal slide__title--mb-normal\">\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 ").concat(e.grade, "/").concat(e.card, "</div>\n        <div class=\"slide__description slide__description--fz-normal slide__description--maw-medium\">").concat(e.description, "</div>\n        <div class=\"slide__image slide__download download-aside\" id=\"js-download-aside--").concat(i, "\">\n            <object><a class=\"download-aside__open\" js-download-aside-id=\"").concat(i, "\" href=\"#!\">\u0421\u043A\u0430\u0447\u0430\u0442\u044C</a></object>\n            <h3 class=\"download-aside__title\">\u0421\u043A\u0430\u0447\u0430\u0442\u044C</h3>\n            <ul class=\"download-aside__list\">\n                <li><object><a class=\"download-aside__download-item bg--green\" href=\"/database/pages/handbook/physics/synopses/").concat(e.grade, "/").concat(e.grade, "-").concat(e.card, ".pdf\" download>pdf</a></object></li>\n                <li><object><a class=\"download-aside__download-item bg--brown\" href=\"/database/pages/handbook/physics/synopses/").concat(e.grade, "/").concat(e.grade, "-").concat(e.card, ".svg\" download>svg</a></object></li>\n            </ul>\n        </div>\n    </a>\n    "), ul.appendChild(s), i++;
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
jsListContainer.appendChild(ul);
//# sourceMappingURL=synopses-loader--physics.js.map
