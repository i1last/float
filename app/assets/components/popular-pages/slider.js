const translateValue = document.querySelector('.slide').offsetWidth ;
let slides = document.querySelector('.popular-pages__slides');

function prev() {
    slides.scrollBy({
        behavior: 'smooth',
        left: -(translateValue)
    });
}

function next() {
    slides.scrollBy({
        behavior: 'smooth',
        left: +(translateValue)
    });
}
