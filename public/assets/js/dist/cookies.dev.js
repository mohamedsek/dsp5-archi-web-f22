"use strict";

var getCompanyDetails = function getCompanyDetails() {
  var company;
  return regeneratorRuntime.async(function getCompanyDetails$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("/company"));

        case 2:
          company = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(company.json());

        case 5:
          return _context.abrupt("return", _context.sent);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
};

window.addEventListener("DOMContentLoaded", function _callee(event) {
  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          getCompanyDetails().then(function (result) {
            var b = Array.prototype.slice.call(document.getElementsByClassName('company'));
            b.forEach(function (item) {
              item.innerHTML = result.A_denomination;
            });
          });

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
});