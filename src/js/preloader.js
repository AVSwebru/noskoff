(function() {
  var preloader = document.querySelector('.js-preloader');

  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('slide-out');
      }, 1500);

      preloader.addEventListener('animationend', () => {
        preloader.hidden = true;
      });
    });
  }
})();
