var mixitupEl1 = document.querySelector('[data-ref="mixitup-1"]');
var mixitupEl2 = document.querySelector('[data-ref="mixitup-2"]');
var screen = window.matchMedia('(max-width: 575px)');
var screenBtn = window.matchMedia('(min-width: 991px)');
var header =  $('.header'), scrollPrev = 0;


$(function(){

  $('.filter__btn').on('click', function(){
    $('.filter__btn-menu').toggleClass('filter__btn-menu--active');
    $('.filter-category').toggleClass('filter-category--active');
    $('.filter-brand').toggleClass('filter-brand--active');
    $('.filter-price').toggleClass('filter-price--active');
    $('.recent').toggleClass('recent--active');
    $('.shop__content').toggleClass('shop__content--active');
    $('.partners-transfrom').toggleClass('partners-transfrom--active');
  });

  $(window).resize(function(){
    if(screenBtn.matches){
      $('.filter__btn-menu').removeClass('filter__btn-menu--active');
      $('.filter-category').removeClass('filter-category--active');
      $('.filter-brand').removeClass('filter-brand--active');
      $('.filter-price').removeClass('filter-price--active');
      $('.recent').removeClass('recent--active');
      $('.shop__content').removeClass('shop__content--active');
      $('.partners-transfrom').removeClass('partners-transfrom--active');
    } else {
      $('.filter__btn-menu').addClass('filter__btn-menu--active');
      $('.filter-category').addClass('filter-category--active');
      $('.filter-brand').addClass('filter-brand--active');
      $('.filter-price').addClass('filter-price--active');
      $('.recent').addClass('recent--active');
      $('.shop__content').addClass('shop__content--active');
      $('.partners-transfrom').addClass('partners-transfrom--active');
    }
  });

  $('.filter__btn-menu').addClass('filter__btn-menu--active');
  $('.filter-category').addClass('filter-category--active');
  $('.filter-brand').addClass('filter-brand--active');
  $('.filter-price').addClass('filter-price--active');
  $('.recent').addClass('recent--active');
  $('.shop__content').addClass('shop__content--active');
  $('.partners-transfrom').addClass('partners-transfrom--active');

  if(screenBtn.matches){
    $('.filter__btn-menu').removeClass('filter__btn-menu--active');
    $('.filter-category').removeClass('filter-category--active');
    $('.filter-brand').removeClass('filter-brand--active');
    $('.filter-price').removeClass('filter-price--active');
    $('.recent').removeClass('recent--active');
    $('.shop__content').removeClass('shop__content--active');
    $('.partners-transfrom').removeClass('partners-transfrom--active');
  } 

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
    $('.shop__items').addClass('shop__items--list');
    $('.card-products').addClass('card-products--list');
    $('.pagination').addClass('pagination--start');
  });

  $('.button-grid').on('click', function(){
    $('.shop__items').removeClass('shop__items--list');
    $('.card-products').removeClass('card-products--list');
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

  $('.partners__list').slick({
    arrows: false,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1
        }
      }
    ]
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