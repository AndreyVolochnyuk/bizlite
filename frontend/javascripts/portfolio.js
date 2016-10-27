requirejs.config({
  baseURL: './public/js'
});

define (["jquery", "isotope.pkgd.min", "index"], function($, Isotope) {
  "use strict";

  var Portfolio={
    init: function(){
      this.myTabs();
    },
    myTabs: function(){
      var iso = new Isotope( '.grid', {
           itemSelector: '.grid-item',
          layoutMode: 'fitRows'
      });
      $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
          $buttonGroup.find('.is-checked').removeClass('is-checked');
          $( this ).addClass('is-checked');
        });
      });
    }
  };

  var NextPages={
    init: function(){
      this.pagination();
    },
    pagination: function(){
      $('.pagination').each( function( i, pageNext ) {
        var $pageNext = $( pageNext );
        $pageNext.on( 'click', 'a', function() {
          $pageNext.find('.checked').removeClass('checked');
          $( this ).addClass('checked');
        });
      });
    }
  };

  Portfolio.init();
  NextPages.init();
});