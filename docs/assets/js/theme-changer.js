let changeThemeButton = document.querySelector('.change-theme-button');

changeThemeButton.addEventListener('click', () => {
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
});
