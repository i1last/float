let body = document.body;
const hamburgerButton = document.querySelector('.header__hamburger-button');
let menu = document.querySelector('.navigate-menu').cloneNode(true);
let menuContent = document.createElement('div');
let menuCloseButton = document.createElement('div');

menuCloseButton.innerText = 'Закрыть меню';

menu.className = 'menu';
menuContent.className = 'menu__content';
menuCloseButton.className = 'menu__close-button surface-button bg--red';
menuContent.insertBefore(menuCloseButton, menuContent.firstChild);
menu.appendChild(menuContent);

for (const list of menu.children) {
    list.className = 'menu__list';
    list.parentNode.insertBefore(menuContent, list);
    menuContent.appendChild(list);

    for (const item of list.children) {
        item.className = 'menu__item surface-button bg--blueberry';
    };
};

hamburgerButton.addEventListener('click', () => {
    if (body.style.overflow == '') {
        addMenu();
    } else {
        removeMenu();
    };
});

window.addEventListener('click', (event) => {
    if (
        !hamburgerButton.contains(event.target) &&
        !menuContent.contains(event.target) ||
        menuCloseButton.contains(event.target)
        ) {
        removeMenu();
    };
});

function addMenu() {
    body.style.overflow = 'hidden';
    body.appendChild(menu);

    animate({
        duration: 300,
        timing: timingEaseOut,
        draw(progress) {
            menuContent.style.transform = `translateX(-${100 - progress * 100}%)`;
            menu.style.opacity = progress;
        }
    });
}

function removeMenu() {
    animate({
        duration: 300,
        timing: timingEaseOut,
        draw(progress) {
            menuContent.style.transform = `translateX(-${progress * 100}%)`;
            menu.style.opacity = 1 - progress;
        }
    }).then(() => {
        body.style.overflow = '';
        body.removeChild(menu);
    })
}
