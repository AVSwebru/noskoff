(function() {
  var preloader = document.querySelector('.js-preloader');
  document.addEventListener('DOMContentLoaded', () => {
    console.log('content loaded');
  });
  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('slide-out');
    }, 3000);

    preloader.addEventListener('animationend', () => {
      preloader.hidden = true;
    });
  });
})();
