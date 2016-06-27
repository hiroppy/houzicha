'use strict';

// iPad and iPod detection	
export const isPad    = () => navigator.platform.indexOf("iPad") != -1;
export const isiPhone = () => (
  (navigator.platform.indexOf("iPhone") != -1) || 
  (navigator.platform.indexOf("iPod") != -1)
);

// Window Resize
export const windowResize = (cb) => {
  $(window).on('resize', () => cb());
};

// Window Scroll
export const windowScroll = () => {
  $(window).scroll(function() {
    const body      = $('body');
    const section   = $('#fh5co-header-section');
    const scrollPos = $(this).scrollTop();

    if (body.hasClass('fh5co-mobile-menu-visible')) {
      body.removeClass('fh5co-mobile-menu-visible');
    }

    if ( $(window).scrollTop() > 70 ) {
      section.addClass('fh5co-scrolled');
    } else {
      section.removeClass('fh5co-scrolled');
    }

    // Parallax
    $('.fh5co-hero-intro').css({
      opacity: 1 - (scrollPos/300)
    });
  });
};
