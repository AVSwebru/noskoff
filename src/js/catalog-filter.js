(function () {
  
  var catalogFilter = document.querySelector('.js-catalog-filter');

  if (catalogFilter) {
    if (window.matchMedia("(max-width: 640px)").matches) {
      catalogFilter.hidden = true;
    }
  }

})();
