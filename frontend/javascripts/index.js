requirejs.config({
  baseURL: './public/js'
});

define (["jquery", "slick"], function($) {
  "use strict";

  var Page={
    init: function(){
      this.navigation();
    },
    navigation: function(){
      var navLink = $('.has-children');
      navLink.on('mouseenter' , function(){
        $(this).find('.submenu').stop().slideDown('.4s');
      });
      navLink.on('mouseleave' , function(){
          $(this).find('.submenu').stop().slideUp('.4s');
      });
    }
  };

  var Homepage = {
    init: function (){
      this.slider();
      this.carousel();
    },
    slider: function(){
      $(".slider-slick").slick({
        dots: true
      });
    },
    carousel: function(){
      $('.main__slick').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4
      });
    }
  };

  Page.init();
  Homepage.init();
});