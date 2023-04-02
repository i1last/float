const url = document.location;
const params = new URL(url).search;

if (params) {
  const pathname = url.pathname;
  const part = new URL(url).searchParams.get('part');
  const image = new URL(url).searchParams.get('image').replace(' ', '+');
  const src = `${pathname}${part ? `${part}/` : ''}${image}`;

  let html = document.createElement('html');
  let head = document.createElement('head');
  let body = document.createElement('body');

  head.innerHTML = `
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="resource://content-accessible/ImageDocument.css"/>
    <link rel="stylesheet" href="resource://content-accessible/TopLevelImageDocument.css"/>
    <title>${image}</title>
  `;

  body.innerHTML = `
    <img class="image" height="800" src="${src}" alt="Не удалось загрузить изображение">
  `;

  html.appendChild(head);
  html.appendChild(body);

  document.documentElement.replaceWith(html);
}
