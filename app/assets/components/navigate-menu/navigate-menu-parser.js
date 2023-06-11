if (window.location.pathname == '/') {
    document.querySelector('.navigate-menu__main-page').outerHTML = '';
    document.querySelector('.navigate-menu__go-back').parentElement.outerHTML = '';
}
