"use strict";

// crd-list slick slider
$('.crd-slider-list').slick({
    arrows: true,
    dots:true,
    adaptiveHeight: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1 ,
              
            }
          },
      ]
});