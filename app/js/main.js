$(function() {

   $('.top-slider__inner').slick({
      dots: true,
      arrows: false,
      fade: true,
      autoplay: true,
      autoplaySpeed: 2000
   });

   
   var mixer = mixitup('.product__content', {
      selectors: {
         control: '.product__btn'
      }

   });

   var mixer = mixitup('.design__content', {
      selectors:{
         control: '.design__btn'
      }

   });

  
});