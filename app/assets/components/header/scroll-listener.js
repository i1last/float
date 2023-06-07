let header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScroll) {
        header.classList.add('header--hidden');
    } else {
        header.classList.remove('header--hidden');
    }
    lastScroll = window.scrollY;
});
