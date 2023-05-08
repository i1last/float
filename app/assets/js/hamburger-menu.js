let hamburgerMenu = document.querySelector('.header__hamburger-menu');
let buttons = document.querySelector('.header__buttons')

hamburgerMenu.addEventListener('click', () => {
  if (buttons.classList.contains('showing')) {
    buttons.classList.remove('showing');
  } else {
    buttons.classList.add('showing');
  }
})

window.addEventListener('click', (event) => {
  if (!event.target.matches('.hamburger-menu')) {
    buttons.classList.remove('showing');
    }
})
