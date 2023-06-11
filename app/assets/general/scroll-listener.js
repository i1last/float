let scrollable = document.querySelectorAll('.scrollable');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;

    if (scrolled > 44 && scrolled > lastScroll) {
        scrollable.forEach((elem) => {
            elem.classList.add('scrollable--hidden');
        });
    } else {
        scrollable.forEach((elem) => {
            elem.classList.remove('scrollable--hidden');
        });
    }
    lastScroll = scrolled;
});
