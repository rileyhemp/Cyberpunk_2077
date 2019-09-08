"use strict";

var spacer = document.querySelector('.platform-spacer');
window.addEventListener('resize', function () {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
  resizeSpacer();
});

function resizeSpacer() {
  spacer.style.width = window.innerWidth - spacer.getBoundingClientRect().x - 415 + 'px';
}

resizeSpacer();
//# sourceMappingURL=main.js.map
