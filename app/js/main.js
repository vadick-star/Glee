var mixitupEl1 = document.querySelector('[data-ref="mixitup-1"]');
var mixitupEl2 = document.querySelector('[data-ref="mixitup-2"]');
var screen = window.matchMedia('(max-width: 575px)');

$(function(){
  $('.main-slider__list').slick({
    arrows: false,
    dots: true
  });
  
  $('.menu__btn, .menu a').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
    $('.user-nav').toggleClass('user-nav--active');
    $('.menu__btn').toggleClass('menu__btn--active');
  });

  var config = {
    controls: {
      scope: 'local'
    }
  };
 
  var mixer1 = mixitup(mixitupEl1, config);
  var mixer2 = mixitup(mixitupEl2, config);
});

if (screen.matches) {
  $('.partners__list').slick({
    arrows: false,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000
  });
  } else {
  $('.partners__list').slick({
    arrows: false,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 5000
  });
}