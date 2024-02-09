"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e4) { throw _e4; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e5) { didErr = true; err = _e5; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var classes = {
  timetable: [["table__head", "text--p-small"], ["table__data", "text--p-small"], ["table__data", "table__data--center", "table__data--no-wrap", "text--p-small"], ["table__data", "table__data--center", "table__data--no-wrap", "text--p-small"], ["table__data"]],
  definitions: [["table__head", "text--p-small"], ["table__data", "text--p-small"], ["table__data", "table__data--long-width", "text--p-small"], ["table__data", "table__data--short-width", "text--p-small"], ["table__data", "table__data--center", "text--p-small"]]
};
function createTable(e) {
  var t, a, l;
  switch (e) {
    case "timetable":
      var _e = document.querySelector(".day-selector").value;
      var _a = document.querySelector(".grade-selector").value,
        _l = new Date().toLocaleString("en-US", {
          weekday: "long"
        }).toLowerCase();
      "current" == _e && (_e = "sunday" != _l ? _l : "monday"), t = {
        headerPath: "timetables/header.json",
        tablePath: "timetables/timetable-".concat(_a, ".json"),
        section: _e,
        classes: classes.timetable,
        grade: _a
      };
      break;
    case "definitions":
      var s = document.querySelector(".section-selector").value;
      t = {
        headerPath: "definitions/header.json",
        tablePath: "definitions/definitions.json",
        section: s,
        classes: classes.definitions,
        grade: _a
      };
  }
  fetch("float/database/tables/".concat(t.tablePath)).then(function (e) {
    return e.json();
  }).then(function (e) {
    a = e, fetch("float/database/tables/".concat(t.headerPath)).then(function (e) {
      return e.json();
    }).then(function (e) {
      l = e, innerResult(buildTable(a, l, t.section, t.classes).outerHTML);
    })["catch"](function (e) {
      e.message.includes("JSON.parse") ? innerResult("Произошла ошибка при загрузке таблицы: Таблица не найдена") : innerResult("\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u0442\u0430\u0431\u043B\u0438\u0446\u044B: ".concat(e));
    });
  })["catch"](function (e) {
    e.message.includes("JSON.parse") ? innerResult("Произошла ошибка при загрузке таблицы: Таблица не найдена") : innerResult("\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u0442\u0430\u0431\u043B\u0438\u0446\u044B: ".concat(e));
  });
}
function innerResult(e) {
  document.querySelector(".js-table-container").innerHTML = e;
}
function buildTable(e, t, a, l) {
  var s = document.createElement("table"),
    n = document.createElement("thead"),
    d = document.createElement("tbody");
  s.classList.add("table", "text--p-small"), s.appendChild(n), s.appendChild(d);
  var r = Object.keys(t),
    c = r.map(function (e) {
      return t[e];
    });
  var _iterator = _createForOfIteratorHelper(c),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _e2 = _step.value;
      var _t = document.createElement("th");
      _t.classList.add("table__head"), _t.innerText = _e2, n.appendChild(_t);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var o = 0;
  var _iterator2 = _createForOfIteratorHelper(e[a][1]),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _t2 = _step2.value;
      var _e3 = document.createElement("tr");
      if (_e3.classList.add("table__row"), 0 === o) _e3.classList.add("table__row--border-bottom");else _e3.classList.add("table__row--border-top");
      var _a2 = 0;
      var _iterator3 = _createForOfIteratorHelper(r),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _n$classList;
          var _s = _step3.value;
          var _n = document.createElement("td");
          switch ("" != l[_a2] && (_n$classList = _n.classList).add.apply(_n$classList, _toConsumableArray(l[_a2])), _a2) {
            case 0:
              break;
            case 1:
              _n.classList.add("table__data--border-right");
              break;
            default:
              _n.classList.add("table__data--border-left");
          }
          var _d = _t2[_s].toString().replace(/<a l=/g, '<a class="link link--hover-darken link--hover-red table__item" target="_blank" href=').replace(/<d s='(.*?)'>(.*?)<\/d>/g, '<details class="details table__item"><summary class="details__summary">$1</summary>$2</details>').replace(/<p>(.*?)<\/p>/g, '<p class="table__item">$1</p>');
          _n.innerHTML = _d, _e3.appendChild(_n), _a2++;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      d.appendChild(_e3), o++;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return s;
}
//# sourceMappingURL=table-builder.js.map
