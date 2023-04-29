// иницилизация slider-swiper
const promoSlider = new Swiper(".promo-swiper", {
  loop: true,
  slideClass: 'promo-swiper__slide',
  wrapperClass: 'promo-swiper__wrapper',
  speed: 2000,
  autoplay: {
    delay: 2000,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
});
const gallerySlider = new Swiper(".gallery-swiper", {
  slideClass: 'gallery-swiper__slide',
  wrapperClass: 'gallery-swiper__wrapper',
  navigation: {
    nextEl: '.gallery-swiper__btn-next',
    prevEl: '.gallery-swiper__btn-prev',
  },
  pagination: {
    el: '.gallery-swiper__pagination',
    type: 'fraction',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 15,
    },
    // when window width is >= 567px
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 15,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38,
    },
    // when window width is >= 992px
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },
    // when window width is >= 992px
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },

  a11y: {
    enabled: true,

    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    firstSlideMessage: 'Это первый слайд',
    lastSlideMessage: 'Это последний слайд',
    slideLabelMessage: 'Слайд {{index}} из {{slidesLength}}',
  }
});

// иницилизация slider-swiper
const eventsSlider = new Swiper(".events-slider", {
  slideClass: 'events-slider__slide',
  wrapperClass: 'events-slider__wrapper',
  navigation: {
    nextEl: '.events-slider__btn-next',
    prevEl: '.events-slider__btn-prev',
  },
  pagination: {
    el: '.events-slider__pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 15,
    },
    // when window width is >= 567px
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 15,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    // when window width is >= 992px
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27,
    },
    // when window width is >= 992px
    1201: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },

  a11y: {
    enabled: true,

    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    firstSlideMessage: 'Это первый слайд',
    lastSlideMessage: 'Это последний слайд',
    slideLabelMessage: 'Слайд {{index}} из {{slidesLength}}',
  }
});
const partnersSlider = new Swiper(".partners-slider", {
  slideClass: 'partners-slider__slide',
  wrapperClass: 'partners-slider__wrapper',
  navigation: {
    nextEl: '.partners__btn-next',
    prevEl: '.partners__btn-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 15,
    },
    // when window width is >= 576px
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 15,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    // when window width is >= 992px
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },
    // when window width is >= 992px
    1201: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },

  a11y: {
    enabled: true,

    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    firstSlideMessage: 'Это первый слайд',
    lastSlideMessage: 'Это последний слайд',
    slideLabelMessage: 'Слайд {{index}} из {{slidesLength}}',
  }
});
