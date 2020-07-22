let count = 0

new TypeIt(".subtitle-main", {
  speed: 100,
  startDelay: 900
}).go()

$(document).ready(function() {
  $('.title-main').hide();
  $('.under-link').hide();
  $('.header--mobile').hide();
  setTimeout(function() {
    $('.ti-cursor').addClass('d-none');
    loop();
    setTimeout(function() {
      if ($(window).width() <= 640) {
        $('.header--mobile').fadeIn(1000);
      } else {
        $('.title-main').fadeIn(1000);
      }
      setTimeout(function() {
        $('.under-link').fadeIn(1000);
      }, 1000);
    }, 1000);
  }, 2000);

  $('.header-image').animate ({
    scale: '100%',
    }, 0, 'linear');

  function loop() {
      $('.header-image').animate ({
          scale: '+=20%',
      }, 2500, 'swing', function() {
          loop2();
          count++;
      });
  }
  function loop2() {
    $('.header-image').animate ({
        scale: '-=20%',
    }, 2000, 'linear', function() {
      if (count < 4)
        loop();
    });
  }
});