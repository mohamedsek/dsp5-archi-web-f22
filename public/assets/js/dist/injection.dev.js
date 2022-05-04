"use strict";

window.addEventListener("DOMContentLoaded", function _callee(event) {
  var HEADER, FOOTER, temp, htmlObject;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          HEADER = "<header class=\"p-3 bg-dark text-white\">\n    <nav class=\"d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start\">\n      <a href=\"/\" class=\"d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none\">\n        <svg class=\"bi me-2\" width=\"40\" height=\"32\" role=\"img\" aria-label=\"Bootstrap\">\n          <use xlink:href=\"#bootstrap\"></use>\n        </svg>\n      </a>\n\n      <ul class=\"nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0\">\n        <li><a href=\"index.html\" class=\"nav-link px-2 text-secondary\">Accueil</a></li>\n        <li><a href=\"cookies.html\" class=\"nav-link px-2 text-white\">Cookies</a></li>\n        <li><a href=\"contact.html\" class=\"nav-link px-2 text-white\">Contact</a></li>\n        <li><a href=\"nos-services.html\" class=\"nav-link px-2 text-white\">Nos services</a></li>\n        <li><a href=\"apropos.html\" class=\"nav-link px-2 text-white\">A propos</a></li>\n      </ul>\n\n      <form class=\"col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3\">\n        <input type=\"search\" class=\"form-control form-control-dark\" placeholder=\"Search...\" aria-label=\"Search\">\n      </form>\n\n      <div class=\"text-end\">\n        <button type=\"button\" class=\"btn btn-outline-light me-2\">Login</button>\n        <button type=\"button\" class=\"btn btn-warning\">Sign-up</button>\n      </div>\n    </nav>\n  </header>";
          FOOTER = "<footer class=\"footer mt-auto py-3 bg-light\">\n  <div class=\"container\">\n    <ul class=\"nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0\">\n      <li><a href=\"index.html\" class=\"nav-link px-2 text-secondary\">Accueil</a></li>\n      <li><a href=\"cookies.html\" class=\"nav-link px-2\">Cookies</a></li>\n      <li><a href=\"contact.html\" class=\"nav-link px-2\">Contact</a></li>\n      <li><a href=\"cookies.html\" class=\"nav-link px-2\">Nos services</a></li>\n      <li><a href=\"apropos.html\" class=\"nav-link px-2\">A propos</a></li>\n    </ul>\n  </div>\n</footer>";
          temp = document.createElement('div');
          temp.innerHTML = HEADER;
          htmlObject = temp.firstChild;
          document.getElementsByTagName('body')[0].prepend(htmlObject);
          temp = document.createElement('div');
          temp.innerHTML = FOOTER;
          htmlObject = temp.firstChild;
          document.getElementsByTagName('body')[0].append(htmlObject);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
});