"use strict";

var daySelector = document.querySelector(".day-selector").value,
  currentDay = new Date().toLocaleString("en-US", {
    weekday: "long"
  }).toLowerCase();
daySelector = "sunday" != currentDay ? currentDay : "monday";
//# sourceMappingURL=timetable-day-autoselecter.js.map
