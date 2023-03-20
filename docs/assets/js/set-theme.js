const localStorageTheme = localStorage.getItem('theme');
let html = document.documentElement;

switch (localStorageTheme) {
  case 'dark':
    html.setAttribute('theme', 'dark');
    break;
  case 'light':
    html.setAttribute('theme', 'light');
    break;
  default:
    html.setAttribute('theme', 'dark');
    break;
}
