const hamburgerButton = document.querySelector('.header__hamburger-button');
let hamburgerMenu = document.querySelector('.hamburger-menu');
let container = document.querySelector('.container');

hamburgerButton.addEventListener('click', () => {
  if (hamburgerMenu.classList.contains('hamburger-menu--showing')) {
    hamburgerMenu.classList.remove('hamburger-menu--showing');
    container.style.display = 'inherit';
  } else {
    hamburgerMenu.classList.add('hamburger-menu--showing');
    container.style.display = 'none';
  }
})

window.addEventListener('resize', () => {
    if (window.innerWidth >= 600) {
        hamburgerMenu.classList.remove('hamburger-menu--showing');
        container.style.display = 'inherit';
    }
})
