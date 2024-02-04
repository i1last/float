const url = document.location;
const params = new URL(url).search;

if (params) {
  const pathname = url.pathname;
  const image = new URL(url).searchParams.get('image').replace(' ', '+');
  const src = `/database/pages${pathname}${image}`;

  document.documentElement.innerHTML = `
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {margin: 0; background-color: #202020; font-family: Arial; letter-spacing: 4px; font-size: 36px;}
        @media not print {
            .fullZoomOut {cursor: zoom-out;}
            .fullZoomIn {cursor: zoom-in;}
            .shrinkToFit {cursor: zoom-in;}
            .overflowingVertical, .overflowingHorizontalOnly {cursor: zoom-out;}
        }
        .isInObjectOrEmbed {width: 100%; height: 100vh;}
        img {display: block;}
        @media not print {
            :root {color: #eee;}
            img.transparent {color: #222; background: hsl(0,0%,90%) url("chrome://global/skin/media/imagedoc-lightnoise.png");}
            img {margin: auto; height: 100vh;}
            img.overflowingVertical {margin-top: 0;}
            .completeRotation {transition: transform 0.3s ease 0s;}
        }
        img {image-orientation: from-image;}
    </style>
    <title>${image}</title>
  `;

  document.body.innerHTML = `
    <img class="image" height="800" src="${src}" alt="Не удалось загрузить изображение">
  `;
}
