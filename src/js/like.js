(function(){

  var likes = document.querySelectorAll('.js-like');

  if (likes) {

    likes.forEach((element) => {
      element.addEventListener('click', () => {
        element.classList.toggle('liked');
      });
    });

  }

})();