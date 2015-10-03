//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
  if ( $('.navbar').offset().top > 50 ) {
    $('.navbar-fixed-top').addClass('top-nav-collapse');
  } else {
    $('.navbar-fixed-top').removeClass('top-nav-collapse');
  }

  if ( ($('.intro').offset().top - $(window).scrollTop()) < ($(window).height() * .50) ) {
    $('.intro').stop().fadeTo(100, 0);
    $('.welcome').stop().fadeTo(100, 1);
  } else {
    $('.welcome').stop().fadeTo(100, 0);
    $('.intro').stop().fadeTo(100, 1);
  }
});
