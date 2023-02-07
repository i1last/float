'use strict';

const currentDayOfWeek = new Date().getDay();
const currentHour = new Date().getHours();
// const days = [
//   'monday',
//   'tuesday',
//   'wednesday',
//   'thursday',
//   'friday',
//   'saturday'
// ]
let today;
let nextDay;

switch (currentDayOfWeek) {
  case 1:
    today = '#monday';
    nextDay = '#tuesday';
    break;
  case 2:
    today = '#tuesday';
    nextDay = '#wednesday';
    break;
  case 3:
    today = '#wednesday';
    nextDay = '#thursday';
    break;
  case 4:
    today = '#thursday';
    nextDay = '#friday';
    break;
  case 5:
    today = '#friday';
    nextDay = '#saturday';
    break;
  case 6:
    today = '#saturday';
    nextDay = '#monday';
    break;
  case 0:
    today = '#monday';
    nextDay = '#monday';
    break;
}


if (currentHour >= 17) {
  document.body.querySelector(nextDay).hidden = false
} else {
  document.body.querySelector(today).hidden = false
}
