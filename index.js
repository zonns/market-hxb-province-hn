$(window).on('ready',function() {
  var mySwiper = new Swiper ('.swiper-container', {
    autoplay:true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      bulletClass: 'my-pagination',
      modifierClass: 'swiper-pagination-my-',
      bulletActiveClass: 'my-bullet-active',
    },
  })
})