(function(){

  var logo = document.querySelector('.js-main-header-logo');
  var headerTop = document.querySelector('.js-header-top');

  if (window.matchMedia("(max-width: 640px)").matches) {
    headerTop.appendChild(logo);
  }

})();