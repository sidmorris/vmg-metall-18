(function () {
  'use strict';
  $('.carousel-services').owlCarousel({
    loop: true,
    nav: true,
    smartSpeed: 700,
    navText: ['<svg class="icon icon-chevron-left"><use xlink:href="assets/img/sprite.svg#chevron-left"></use></svg>',
      '<svg class="icon icon-chevron-right"><use xlink:href="assets/img/sprite.svg#chevron-right"></use></svg>'],
      responsiveClass: true,
      responsive:{
        0:{
          items :  1
        },
        800:{
          items:2
        },
        1100:{
          items:3
        }
      }
  });

})();