var mixitupEl1 = document.querySelector('[data-ref="mixitup-1"]');
var mixitupEl2 = document.querySelector('[data-ref="mixitup-2"]');
var screen = window.matchMedia('(max-width: 575px)');
var header =  $('.header'), 
            scrolPrev = 0;

$(function(){

  $(window).scroll(function() {
	  var scrolled = $(window).scrollTop();
 
	  if ( scrolled > 100 && scrolled > scrollPrev ) {
		  header.addClass('out');
	  } else {
		  header.removeClass('out');
	  }
	  scrollPrev = scrolled;
  });

  $('.shop__filter-btn').on('click', function(){
    $('.shop__filter-btn').removeClass('shop__filter-btn--active');
    $(this).addClass('shop__filter-btn--active');
  });

  $('.button-list').on('click', function(){
    $('.card-products').addClass('card-products--list');
    $('.card-products__item').addClass('card-products__item--list');
    $('.pagination').addClass('pagination--start');
  });

  $('.button-grid').on('click', function(){
    $('.card-products').removeClass('card-products--list');
    $('.card-products__item').removeClass('card-products__item--list');
    $('.pagination').removeClass('pagination--start');
  });

  $('.card-products__star').rateYo({
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "13px",
    readOnly: true
  });

  $('.recent__star').rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "8px",
    readOnly: true
  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    onStart: function (data){
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    }
  });

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