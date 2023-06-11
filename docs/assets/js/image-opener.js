"use strict";

var url = document.location,
  params = new URL(url).search;
if (params) {
  var n = url.pathname,
    o = new URL(url).searchParams.get("image").replace(" ", "+"),
    e = "/database/pages".concat(n).concat(o);
  document.documentElement.innerHTML = "\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <style>\n        body {margin: 0; background-color: #202020; font-family: Arial; letter-spacing: 4px; font-size: 36px;}\n        @media not print {\n            .fullZoomOut {cursor: zoom-out;}\n            .fullZoomIn {cursor: zoom-in;}\n            .shrinkToFit {cursor: zoom-in;}\n            .overflowingVertical, .overflowingHorizontalOnly {cursor: zoom-out;}\n        }\n        .isInObjectOrEmbed {width: 100%; height: 100vh;}\n        img {display: block;}\n        @media not print {\n            :root {color: #eee;}\n            img.transparent {color: #222; background: hsl(0,0%,90%) url(\"chrome://global/skin/media/imagedoc-lightnoise.png\");}\n            img {text-align: center; position: absolute; inset: 0; margin: auto;}\n            img.overflowingVertical {margin-top: 0;}\n            .completeRotation {transition: transform 0.3s ease 0s;}\n        }\n        img {image-orientation: from-image;}\n    </style>\n    <title>".concat(o, "</title>\n  "), document.body.innerHTML = "\n    <img class=\"image\" height=\"800\" src=\"".concat(e, "\" alt=\"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435\">\n  ");
}
//# sourceMappingURL=image-opener.js.map
