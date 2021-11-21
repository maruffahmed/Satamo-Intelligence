"use strict";


// testimonial slick slider
$('.testimonial-list').slick({
    arrows: true,
    dots:false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1 ,
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              dots:true,
              adaptiveHeight: true,
              slidesToShow: 1,
              slidesToScroll: 1 ,
            }
          }
      ]
  });