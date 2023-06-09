const hamburgerButton = document.querySelector('.header__hamburger-button');
let navigateMenu = document.querySelector('.navigate-menu');
let container = document.querySelector('.container');

hamburgerButton.addEventListener('click', () => {
  if (navigateMenu.classList.contains('navigate-menu--showing')) {
    navigateMenu.classList.remove('navigate-menu--showing');
    container.style.display = '';
  } else {
    navigateMenu.classList.add('navigate-menu--showing');
    container.style.display = 'none';
  }
})

window.addEventListener('resize', () => {
    if (window.innerWidth >= 600) {
        navigateMenu.classList.remove('navigate-menu--showing');
        container.style.display = '';
    }
})
