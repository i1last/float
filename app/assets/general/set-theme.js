const localStorageTheme = localStorage.getItem('theme');
const currentBrowserThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
let jsFavicon = document.querySelector('.js-favicon');
let html = document.documentElement;

if (currentBrowserThemeDark) jsFavicon.setAttribute('href', '/favicon--dark.svg');

switch (localStorageTheme) {
  case 'dark':
    html.setAttribute('theme', 'dark');
    break;
  case 'light':
    html.setAttribute('theme', 'light');
    break;
  default:
    html.setAttribute('theme', (
        currentBrowserThemeDark ? 'dark' : 'light')
    );
    break;
}
