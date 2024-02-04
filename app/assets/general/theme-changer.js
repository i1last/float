const themeButton = document.querySelector('.js-theme-button-click-area');

function getColor() {
  return getComputedStyle(document.body).getPropertyValue('--color-header');
}

function setBrowserColor() {
  document.querySelector('meta[name="theme-color"]').setAttribute('content', `${getColor()}`)
  document.querySelector('meta[name="msapplication-navbutton-color"]').setAttribute('content', `${getColor()}`)
  document.querySelector('meta[name="apple-mobile-web-app-status"]').setAttribute('content', `${getColor()}`)
}

setBrowserColor();

themeButton.addEventListener('click', () => {
  switch (html.getAttribute('theme')) {
    case 'dark':
      localStorage.setItem('theme', 'light');
      html.setAttribute('theme', 'light');
      break;
    case 'light':
      localStorage.setItem('theme', 'dark');
      html.setAttribute('theme', 'dark');
      break;
    default:
      localStorage.setItem('theme', 'dark');
      html.setAttribute('theme', 'dark');
      break;
  }
  setBrowserColor();
});

