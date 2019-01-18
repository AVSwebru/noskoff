import noUiSlider from 'noUiSlider';

(function() {
  var slider = document.getElementById('slider');
  var priceMin = document.querySelector('.js-catalog-filter-min');
  var priceMax = document.querySelector('.js-catalog-filter-max');

  noUiSlider.create(slider, {
    start: [0, 9000],
    connect: true,
    range: {
      'min': 0,
      'max': 9000
    }
  });

  slider.noUiSlider.on('update', function (values, handle) {
    var value = values[handle];

    if (handle) {
      priceMax.value = Math.round(value);
    } else {
      priceMin.value = Math.round(value);
    }
  });

  priceMin.addEventListener('change', function () {
    slider.noUiSlider.set([this.value, null]);
  });

  priceMax.addEventListener('change', function () {
    slider.noUiSlider.set([null, this.value]);
  });
})();
