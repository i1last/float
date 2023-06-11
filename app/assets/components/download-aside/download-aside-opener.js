const openButton = document.querySelectorAll('.download-aside__open');


openButton.forEach(element => {
    element.addEventListener('click', event => {
        let downloadAsideMenu = document.querySelector(`#js-download-aside--${event.target.getAttribute('js-download-aside-id')}`);

        if (downloadAsideMenu.style.transform == 'translateX(-100%)') {
            animate({
                duration: 300,
                timing: timingEaseOut,
                draw(progress) {
                    downloadAsideMenu.style.transform = `translateX(-${100 - progress * 100}%)`;
                }
            });
        } else {
            animate({
                duration: 300,
                timing: timingEaseOut,
                draw(progress) {
                    downloadAsideMenu.style.transform = `translateX(-${progress * 100}%)`;
                }
            });
        };
    });
});
