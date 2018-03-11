(function () {
  'use strict';
  // $('.carousel-services').owlCarousel({
  //   loop: true,
  //   nav: true,
  //   smartSpeed: 700,
  //   navText: ['<svg class="icon icon-chevron-left"><use xlink:href="assets/img/sprite.svg#chevron-left"></use></svg>',
  //     '<svg class="icon icon-chevron-right"><use xlink:href="assets/img/sprite.svg#chevron-right"></use></svg>'],
  //     responsiveClass: true,
  //     responsive:{
  //       0:{
  //         items :  1
  //       },
  //       800:{
  //         items:2
  //       },
  //       1100:{
  //         items:3
  //       }
  //     }
  // });
  $('.fotorama').fotorama({
    width: 900,
    minwidth: 300,
    maxwidth: '100%',
    arrows: 'always',
    loop: true,
    allowfullscreen: false,
    thumbborderwidth: 3,
    thumbmargin: 6,
    thumbwidth: 120,
    nav: 'thumbs'
  });

  // Smoosh Scroll
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

// Scroll To Top
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("toTop").style.display = "block";
    } else {
        document.getElementById("toTop").style.display = "none";
    }
}

})();