var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  autoHeight : true,
  autoplay : {
      delay : 5000,
      disableOnInterraction : false,
  },
  pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
});
