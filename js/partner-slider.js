"use strict";


// testimonial slick slider
$('.partner-list').slick({
    arrows: true,
    dots:false,
    infinite: true,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
              slidesToShow: 5,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              arrows: false,
              dots:true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              dots:true,
            }
          },
      ]
  });