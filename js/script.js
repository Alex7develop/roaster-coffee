document.addEventListener('DOMContentLoaded', () => {
  // Header START
  $('.hamburger').on('click', function () {
    if ($(this).hasClass('is-active')) {
      $(this).removeClass('is-active');
      $('.header-mobile-wrap').slideUp(500);
    } else {
      $(this).addClass('is-active');
      $('.header-mobile-wrap').slideDown(500);
    }
  });
  // Header END

  // Banner START
  const bannerSwiper = new Swiper('.banner-swiper', {
    speed: 1000,
    spaceBetween: 0,
    autoHeight: true,
    navigation: {
      nextEl: '.banner-swiper .swiper-button-next',
      prevEl: '.banner-swiper .swiper-button-prev',
    },
    pagination: {
      el: '.banner-swiper .swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });
  // Banner END

  // Services START
  $('.services-btn').magnificPopup({
    type: 'inline',
    showCloseBtn: false,
    callbacks: {
      beforeOpen: function () {
        this.st.mainClass = this.st.el.attr('data-effect');
      },
    },
  });
  $('.modal-form-close').on('click', function () {
    $.magnificPopup.close();
  });
  // Services END

  // Gallery START
  $('.gallery-wrap a').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true,
    },
    callbacks: {
      beforeOpen: function () {
        this.st.image.markup = this.st.image.markup.replace(
          'mfp-figure',
          'mfp-figure mfp-with-anim'
        );
        this.st.mainClass = this.st.el.attr('data-effect');
      },
    },
  });

  $('.gallery-btn a').on('click', function (e) {
    e.preventDefault();
    var galleryItem = $('.gallery-item');

    if ($(this).hasClass('is-active')) {
      $(this).removeClass('is-active');
      $(this).text('Показать еще');
      galleryItem.each(function () {
        if ($(this).hasClass('is-active')) {
          $(this).removeClass('is-active');
          $(this).slideUp();
        }
      });
    } else {
      $(this).addClass('is-active');
      $(this).text('Скрыть');
      galleryItem.each(function () {
        if (!$(this).is(':visible')) {
          $(this).addClass('is-active');
          $(this).slideDown();
        }
      });
    }
  });
  // Gallery END

  // Reviews START
  const reviewsSwiper = new Swiper('.reviews-swiper', {
    speed: 1000,
    spaceBetween: 20,
    pagination: {
      el: '.reviews-swiper .swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
  // Reviews END
});

const ERROR_MESSAGE = "Some Error!";
const SUCCESS_MESSAGE = "Благодарим за заявку!";
const form = document.querySelector(".form");
form.addEventListener("submit", formSend);

async function formSend(event) {
  event.preventDefault();
  const formData = new FormData(form);

  let response = await fetch("https://formsubmit.co/alexanderkirilchuk@yandex.ru", {
    method: "POST",
    body: formData,
    mode: 'no-cors'
  });
 
  if (response.ok) {
    colorMessage = "linear-gradient(to right, red, red)";
    showTostMessage(ERROR_MESSAGE, colorMessage);
    form.reset();
  } else {
    colorMessage = "linear-gradient(to right, #00b09b, #96c93d)";
    showTostMessage(SUCCESS_MESSAGE, colorMessage);
    form.reset();
  }
}

function showTostMessage(message, colorMessage) {
  Toastify({
    text: message,
    duration: 5000,
    newWindow: true,
    className: "toast-message",
    close: true,
    gravity: "top",
    position: "center",
    stopOnFocus: true,
    style: {
      background: colorMessage,
    },
  }).showToast();
}

