"use strict";
// custom slick btns
$('.custom-slider-btn .slide-btn').click(function(){

    if(this.classList.contains("slide-next")){
        $(this).closest('.custom-slider-btn').find(".slick-next").trigger('click');
    }
    else{
        $(this).closest('.custom-slider-btn').find(".slick-prev").trigger('click');
    }
});