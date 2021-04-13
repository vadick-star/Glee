var mixitupEl1 = document.querySelector('[data-ref="mixitup-1"]');
var mixitupEl2 = document.querySelector('[data-ref="mixitup-2"]');
var screen = window.matchMedia('(max-width: 575px)');
var screenBtn = window.matchMedia('(min-width: 991px)');
var header =  $('.header'), scrollPrev = 0;


$(function(){

  $('.product-slider__items').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/slider-arrow-left.svg" alt="arrow-left"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/icons/slider-arrow-right.svg" alt="arrow-right"></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  });

  $('.detalis-tabs__link').on('click', function(e){
    e.preventDefault();
    $('.detalis-tabs__link').removeClass('detalis-tabs__link--active');
    $(this).addClass('detalis-tabs__link--active');
    $('.detalis-tabs__item').removeClass('detalis-tabs__item--active');
    $($(this).attr('href')).addClass('detalis-tabs__item--active');
  });

  $('.detalis__num').styler();

  $('.detalis__list').slick({
    asNavFor: '.detalis__items',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
  });

  $('.detalis__items').slick({
    asNavFor: '.detalis__list',
    arrows: false,
    draggable: false,
    fade: true
  });

  $('.filter__btn--toggle').on('click', function(){
    $(this).next().slideToggle();
    $(this).toggleClass('filter__btn--active')
  });

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

  $('.card-products__star, .detalis__star').rateYo({
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "13px",
    readOnly: true,
    starSvg: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>'
  });

  $('.card-recent__star').rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "8px",
    readOnly: true,
    starSvg: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>'
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