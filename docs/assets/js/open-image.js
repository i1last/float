"use strict";

var url = document.location,
  params = new URL(url).search;
if (params) {
  var e = url.pathname,
    t = new URL(url).searchParams.get("part"),
    n = new URL(url).searchParams.get("image").replace(" ", "+"),
    a = "".concat(e).concat(t ? "".concat(t, "/") : "").concat(n);
  var c = document.createElement("html"),
    l = document.createElement("head"),
    r = document.createElement("body");
  l.innerHTML = "\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <link rel=\"stylesheet\" href=\"resource://content-accessible/ImageDocument.css\"/>\n    <link rel=\"stylesheet\" href=\"resource://content-accessible/TopLevelImageDocument.css\"/>\n    <title>".concat(n, "</title>\n  "), r.innerHTML = "\n    <img class=\"image\" height=\"800\" src=\"".concat(a, "\" alt=\"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435\">\n  "), c.appendChild(l), c.appendChild(r), document.documentElement.replaceWith(c);
}