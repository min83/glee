$(function() {

   $('.menu__btn').on('click', function(){
      $('.menu__list').toggleClass('menu__list--active');
   });

   $('.footer-top__hidden-title').on('click', function(){
      $(this).next().slideToggle();
      $(this).toggleClass('active');
   });


   // $('.user-nav__search-btn').on('click', function () {
   //    $('.user-nav__search-form').toggleClass('user-nav__search-form--active')     
   // });

   $('.user-nav__further-btn').on('click', function () {
      $('.user-nav__further-list').toggleClass('user-nav__further-list--active')
   });

   $('.related-slide').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite: false,

      prevArrow: '<button type = "button" class= "slick-prev"><img src="images/icons/arrow-left.svg" alt="prev arrow"></button>',
      
      nextArrow: '<button type = "button" class= "slick-next"><img src="images/icons/arrow-right.svg" alt="next arrow"></button>',
     
   });

   $('.product-tabs__top-item').on('click', function(e){
      e.preventDefault();
      $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
      $(this).addClass('product-tabs__top-item--active');

      $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
      $($(this).attr('href')).addClass('product-tabs__content-item--active');
   });
   
   $('.product-slide__thumb').slick({
      asNavFor: '.product-slide__big',
      focusOnSelect: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      draggable: false,
      arrows: false    
   });
   $('.product-slide__big').slick({
      asNavFor: '.product-slide__thumb',
      draggable: false,
      arrows: false,
      fade: true
   });

   $('.product-one__num').styler()

   $('.filter-price__input').ionRangeSlider({
      type: "double", 
      // prefixs: "$",    
      // step: "0.01",   
      onStart: function (data) {
         $('.filter-price__from').text(data.from);
         $('.filter-price__to').text(data.to);
      }, 
      onChange: function (data) {
         $('.filter-price__from').text(data.from);
         $('.filter-price__to').text(data.to); 
      },
   });

   $(".star-rating").rateYo({
      starWidth: "11px",
      normalFill: "#d6d6d6",
      ratedFill: "#ffcc00",
      spacing: "8px",
      readOnly: true,
      starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink = "http://www.w3.org/1999/xlink" width="11pt" height="10pt" viewBox="0 0 11 10" version="1.1" ><g id="surface1"><path d="M 4.953125 0.347656 L 3.703125 2.933594 L 0.914062 3.351562 C 0.414062 3.421875 0.214844 4.054688 0.578125 4.414062 L 2.59375 6.429688 L 2.117188 9.269531 C 2.03125 9.78125 2.5625 10.167969 3.003906 9.929688 L 5.5 8.585938 L 7.996094 9.929688 C 8.4375 10.164062 8.96875 9.78125 8.882812 9.269531 L 8.40625 6.429688 L 10.421875 4.414062 C 10.785156 4.054688 10.585938 3.421875 10.085938 3.351562 L 7.296875 2.933594 L 6.046875 0.347656 C 5.824219 -0.113281 5.175781 -0.117188 4.953125 0.347656 Z M 4.953125 0.347656 "/></g></svg>'
   });

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