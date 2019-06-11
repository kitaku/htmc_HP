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

// $(function(){
//   $('.tab_btn').on('click',function(){
//     $('.tab_item').removeClass("is_active_item");
//     // $($(this).attr("href")).addClass("is_active_item");
//     $($(this).attr("href")).addClass("is_active_item";
//   })
// })
