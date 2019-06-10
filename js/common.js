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

$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

$(function(){
  $('#ob-og').click(function(){
    $('.ob-og').modal('show');
  });

})
