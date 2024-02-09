let jsListContainer = document.querySelector('.js-list-container');

let ul = document.createElement('ul');
ul.classList.add('synopses__list', 'slides__list');

let cards;
const req = new XMLHttpRequest();
req.open('GET', '/float/database/pages/handbook/physics/synopses/cards.json', false);
req.addEventListener('load', () => {
    cards = JSON.parse(req.response)
});
req.send();

let i = 0;
for (const item of cards) {
    let li = document.createElement('li');
    li.classList.add('synopses__item', 'slide', 'slide--medium', ((item.grade == 10) ? 'bg--blueberry' : 'bg--brown'));

    li.innerHTML = `
    <a class="slide__link slide__link--p-large" href="./?image=${item.grade}/card_${item.grade}-${item.card}.svg">
        <div class="slide__title slide__title--fz-normal slide__title--mb-normal">Карточка ${item.grade}/${item.card}</div>
        <div class="slide__description slide__description--fz-normal slide__description--maw-medium">${item.description}</div>
        <div class="slide__image slide__download download-aside" id="js-download-aside--${i}">
            <object><a class="download-aside__open" js-download-aside-id="${i}" href="#!">Скачать</a></object>
            <h3 class="download-aside__title">Скачать</h3>
            <ul class="download-aside__list">
                <li><object><a class="download-aside__download-item bg--green" href="/float/database/pages/handbook/physics/synopses/${item.grade}/card_${item.grade}-${item.card}.pdf" download>pdf</a></object></li>
                <li><object><a class="download-aside__download-item bg--brown" href="/float/database/pages/handbook/physics/synopses/${item.grade}/card_${item.grade}-${item.card}.svg" download>svg</a></object></li>
            </ul>
        </div>
    </a>
    `;

    ul.appendChild(li);
    i++;
}
jsListContainer.appendChild(ul);
