let hamburgerMenu = document.querySelector('.hamburger-menu');
let headerLinksList = document.querySelector('.header__links-list')

hamburgerMenu.addEventListener('click', () => {
  if (headerLinksList.classList.contains('showing')) {
    headerLinksList.classList.remove('showing');
  } else {
    headerLinksList.classList.add('showing');
  }
})

window.addEventListener('click', (event) => {
  if (!event.target.matches('.hamburger-menu')) {
    headerLinksList.classList.remove('showing');
    }
})
