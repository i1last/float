body = document.body;
let changeThemeButton = document.querySelector('.change-theme-button');
let changeThemeImageDark = document.querySelector('.change-theme-button__image--dark');
let changeThemeImageLight = document.querySelector('.change-theme-button__image--light');

function changeTheme() {
  if (localStorage.getItem('theme') == 'light') {
    body.classList.remove('light')
    changeThemeImageLight.classList.remove('hidden')
    changeThemeImageDark.classList.add('hidden')
  } else {
    body.classList.add('light')
    changeThemeImageDark.classList.remove('hidden')
    changeThemeImageLight.classList.add('hidden')
  }
}

changeTheme();

changeThemeButton.addEventListener('click', () => {
  if (body.classList.contains('light')) {
    localStorage.setItem('theme', 'light');
    changeTheme();
  } else {
    localStorage.setItem('theme', 'dark');
    changeTheme();
  }
})
