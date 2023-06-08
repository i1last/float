let scrollable = document.querySelectorAll('.scrollable');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScroll) {
        scrollable.forEach((elem) => {
            elem.classList.add('scrollable--hidden');
        });
    } else {
        scrollable.forEach((elem) => {
            elem.classList.remove('scrollable--hidden');
        });
    }
    lastScroll = window.scrollY;
});
