//menu-toggle-btn
$(function() {
    $(".menu-toggle-btn").click(function() {
      $(".gnb").stop().slideToggle("fast");
    });
  });

//slider
$('.slider').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});

//swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 'auto',
  initialSlide: 1,
  spaceBetween: 70,
  centeredSlides: true,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// program hover
$('.a1').hover(function(){
  $('.a').css('display', 'block');
  $('.b').css('display', 'none');
  $('.c').css('display', 'none');
  $('.d').css('display', 'none');
});
$('.b1').hover(function(){
  $('.a').css('display', 'none');
  $('.b').css('display', 'block');
  $('.c').css('display', 'none');
  $('.d').css('display', 'none');
});
$('.c1').hover(function(){
  $('.a').css('display', 'none');
  $('.b').css('display', 'none');
  $('.c').css('display', 'block');
  $('.d').css('display', 'none');
});
$('.d1').hover(function(){
  $('.a').css('display', 'none');
  $('.b').css('display', 'none');
  $('.c').css('display', 'none');
  $('.d').css('display', 'block');
});


//port_view
$('.ac1').hover(function(){
  $('.ac1').addClass('active');
  $('.ac2').removeClass('active');
  $('.ac3').removeClass('active');
  $('.ac4').removeClass('active');
});
$('.ac2').hover(function(){
  $('.ac2').addClass('active');
  $('.ac1').removeClass('active');
  $('.ac3').removeClass('active');
  $('.ac4').removeClass('active');
});
$('.ac3').hover(function(){
  $('.ac3').addClass('active');
  $('.ac2').removeClass('active');
  $('.ac1').removeClass('active');
  $('.ac4').removeClass('active');
});
$('.ac4').hover(function(){
  $('.ac4').addClass('active');
  $('.ac2').removeClass('active');
  $('.ac3').removeClass('active');
  $('.ac1').removeClass('active');
})
//aos
AOS.init();
 