window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Отображаем кнопку, когда пользователь прокручивает вниз больше, чем на 20% высоты страницы
  if (document.body.scrollTop > (window.innerHeight * 0.2) || document.documentElement.scrollTop > (window.innerHeight * 0.2)) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  // Получаем текущее положение прокрутки
  var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;

  // Выполняем анимированную прокрутку до верха страницы
  var scrollStep = -window.scrollY / (500 / 15); // 500 - время прокрутки в миллисекундах, 15 - скорость прокрутки
  var scrollInterval = setInterval(function(){
    if (document.documentElement.scrollTop === 0 && document.body.scrollTop === 0) {
      clearInterval(scrollInterval);
    }
    window.scrollBy(0, scrollStep);
  },15);
}
