let daySelector = document.querySelector('.day-selector').value;
let currentDay = (new Date()).toLocaleString('en-US', { weekday: 'long' }).toLowerCase();

daySelector = (currentDay != 'sunday') ? currentDay : 'monday';
