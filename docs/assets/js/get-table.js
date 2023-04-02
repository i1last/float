"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e3) { throw _e3; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e4) { didErr = true; err = _e4; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createTable(e, t, a) {
  var n = Object.keys(e.header),
    d = document.createElement("table"),
    s = document.createElement("thead"),
    l = document.createElement("tbody"),
    c = document.createElement("div"),
    i = document.createElement("div"),
    r = document.createElement("div");
  i.innerText = e[t][0], d.appendChild(s), d.appendChild(l), c.appendChild(i), c.appendChild(r), r.appendChild(d), d.classList.add("timetable", "table"), i.classList.add("title"), c.classList.add("table-container"), r.classList.add("table-container__content"), c.id = t, s.innerHTML = "\n  <th class=\"table__heading\">".concat(e.header[n[0]], "</th>\n  <th class=\"table__heading\">").concat(e.header[n[1]], "</th>\n  <th class=\"table__heading\">").concat(e.header[n[2]], "</th>\n  <th class=\"table__heading\">").concat(e.header[n[3]], "</th>\n  <th class=\"table__heading\">").concat(e.header[n[4]], "</th>");
  var _iterator = _createForOfIteratorHelper(e[t][1]),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _d = _step.value;
      var _e = document.createElement("tr");
      _e.innerHTML += "\n    <td class=\"".concat(a[0], "\">").concat(_d[n[0]], "</td>\n    <td class=\"").concat(a[1], "\">").concat(_d[n[1]], "</td>\n    <td class=\"").concat(a[2], "\">").concat(_d[n[2]], "</td>\n    <td class=\"").concat(a[3], "\">").concat(_d[n[3]], "</td>\n    <td class=\"").concat(a[4], "\">").concat(_d[n[4]], "</td>"), l.appendChild(_e);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  document.querySelector(".tables").appendChild(c);
}
function generateTables(e, t, a) {
  var n = 0;
  var d = t.length;
  var _iterator2 = _createForOfIteratorHelper(t),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var s = _step2.value;
      createTable(e, s, a), n++, d > 1 && n != d && document.querySelector(".tables").appendChild(document.createElement("hr"));
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
var tableRequest = document.currentScript.getAttribute("table"),
  sectionRequest = document.currentScript.getAttribute("section");
fetch("/database/tables/".concat(tableRequest, ".json")).then(function (e) {
  return e.json();
}).then(function (e) {
  var t, a;
  if ("all" == sectionRequest) t = Object.keys(e).slice(1);else if ("current" == sectionRequest) {
    var _e2 = new Date().getDay(),
      _a = ["monday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "monday"];
    t = new Date().getHours() >= 17 ? [_a[_e2 + 1]] : [_a[_e2]];
  } else void 0 === e[sectionRequest] ? console.error("sectionRequest Error: section is undefined") : t = [sectionRequest];
  switch (tableRequest) {
    case "timetable":
      a = ["table__heading", "", "table__data-center", "table__data-center", ""];
      break;
    case "definitions":
      a = ["table__heading", "", "table__data table__data-width--long", "table__data table__data-width--short", "table__data-center"];
  }
  generateTables(e, t, a);
});