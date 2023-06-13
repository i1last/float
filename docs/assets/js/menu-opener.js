"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var body = document.body;
var hamburgerButton = document.querySelector(".header__hamburger-button");
var menu = document.querySelector(".navigate-menu").cloneNode(!0),
  menuContent = document.createElement("div"),
  menuCloseButton = document.createElement("div");
menuCloseButton.innerText = "Закрыть меню", menu.className = "menu", menuContent.className = "menu__content", menuCloseButton.className = "menu__close-button surface-button bg--red", menuContent.insertBefore(menuCloseButton, menuContent.firstChild), menu.appendChild(menuContent);
var _iterator = _createForOfIteratorHelper(menu.children),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var e = _step.value;
    e.className = "menu__list", e.parentNode.insertBefore(menuContent, e), menuContent.appendChild(e);
    var _iterator2 = _createForOfIteratorHelper(e.children),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var n = _step2.value;
        n.className = "menu__item";
        var _iterator3 = _createForOfIteratorHelper(n.children),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _e = _step3.value;
            _e.className = "menu__link surface-button bg--blueberry";
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
function addMenu() {
  body.style.overflow = "hidden", body.appendChild(menu), animate({
    duration: 300,
    timing: timingEaseOut,
    draw: function draw(e) {
      menuContent.style.transform = "translateX(-".concat(100 - 100 * e, "%)"), menu.style.opacity = e;
    }
  });
}
function removeMenu() {
  animate({
    duration: 300,
    timing: timingEaseOut,
    draw: function draw(e) {
      menuContent.style.transform = "translateX(-".concat(100 * e, "%)"), menu.style.opacity = 1 - e;
    }
  }).then(function () {
    body.style.overflow = "", body.contains(menu) && body.removeChild(menu);
  });
}
hamburgerButton.addEventListener("click", function () {
  "" == body.style.overflow ? addMenu() : removeMenu();
}), window.addEventListener("click", function (e) {
  (!hamburgerButton.contains(e.target) && !menuContent.contains(e.target) || menuCloseButton.contains(e.target)) && removeMenu();
});
//# sourceMappingURL=menu-opener.js.map
