$(document) .ready(function() {
   /*Sidebar Menu*/
   "use strict";

   $(".preloader-wrap").delay(1500).fadeOut('slow');

   var slider = tns({
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    autoHeight: true,
    controls: false,
    nav: false,
    autoplayButtonOutput: false,
    autoplayTimeout: 5000,
    autoplay: true
   });

   /*Swiper*/
   var swiper = new Swiper('.swiper-container', {
     autoplay: {
      delay: 4000,
    },
   });

   Revealator.effects_padding = '-500';

   /*Navigation*/
   $(function() {
   $('a[href*="#"]:not([href="#"])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $(window).scroll(function() {
    var nav = $('.navbar');
    var top = 200;
    if ($(window).scrollTop() >= top) {

        nav.addClass('inbody');

    } else {
        nav.removeClass('inbody');
    }
  }); 

  $('body').scrollspy({ target: '.navbar' })
    
 
  
  /*Magnific Popup*/
   $(function() {
    $('div.item-wrap,.gallery').magnificPopup({delegate: 'a', 
      type: 'image',
      gallery: {
        enabled: true
      },
      removalDelay: 300,
      mainClass: 'mfp-fade'
    });
   });

   new Particles(document.getElementById("particles"), {

    // size of the particles
    size: { 
      min: 0,
      max: 2
    },

    // density of particles on the canvas
    density: 600,  

    // speed of the particules
    speed: 0.5, 

    // number of times per second the canvas is refreshed
    fps: 60, 

    // color of the particles
    color: "#898989" 
    
   });

   $(function() {
      $('.selector').animatedHeadline({
        animationType: 'type'
      });
   })

}); 
});

