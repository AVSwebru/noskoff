(function() {
  var brandList = document.querySelectorAll('.js-brands-list li');
  var showBrandsBtn = document.querySelector('.js-view-all-brands');

  document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < brandList.length; i++) {
      if (i > 2) brandList[i].hidden = true;
    }

  })

  showBrandsBtn.addEventListener('click', () => {
    for (let i = 0; i < brandList.length; i++) {
      if (i > 2) brandList[i].hidden = false;
    }
    showBrandsBtn.hidden = true;
  })
})();
