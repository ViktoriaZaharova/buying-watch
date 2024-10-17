$('[name="phone"]').mask('+7 (999) 999-99-99');

$('.header-bottom .btn-close').on('click', function(e){
  e.preventDefault();
  $('.header-bottom').fadeOut();
  });

$('.btn-burger').on('click', function(){
$('.header-bottom').fadeToggle();
});