 $(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.about').offset().top }, 'slow');
      return false;
    });
  });