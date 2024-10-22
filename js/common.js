
$('.header-bottom .btn-close').on('click', function (e) {
  e.preventDefault();
  $('.header-bottom').fadeOut();
});

$('.btn-burger').on('click', function () {
  $('.header-bottom').fadeToggle();
});


$('.brands-slider').slick({
  slidesToShow: 6,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});