(function () {
  
  var filterListArr = document.querySelectorAll('.js-filter-list');
  var filterBtnArr = document.querySelectorAll('.js-view-list-btn');

  if (filterListArr && filterBtnArr) {
  
    filterListArr.forEach((element) => {

      var listItems = element.querySelectorAll('li');

      for (let i = 0; i < listItems.length; i++) {
        if (i > 2) listItems[i].hidden = true;
      }
    });

    filterBtnArr.forEach((element) => {
      element.addEventListener('click', () => {

        var currentBtn = element;
        var listID = element.getAttribute('data-filter-id');

        filterListArr.find = [].find;
        var list = filterListArr.find((element) => {
          return element.getAttribute('data-filter-id') == listID;
        });
            
        list.querySelectorAll('li').forEach((element) => {
          element.hidden = false;
          currentBtn.hidden = true;
        });

      });
    });

  }

})();
