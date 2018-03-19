$('.hamburger').on('click', function () {
//  if ($('.menu1').hasClass('open')) {
//    $('.menu1').removeClass('open');
//  } else {
//    $('.menu1').addClass('open');
//  }
$('.menu1').toggleClass('open');
});


$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('.main-nav').addClass('shrink');
  } else {
    $('.main-nav').removeClass('shrink');
  }
});
