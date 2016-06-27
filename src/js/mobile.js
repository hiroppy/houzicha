'use strict';

import {isiPad, isiPhone} from './utils';

/**
 * @description Fast Click for ( Mobiles/Tablets )
 */
export const fastClick = () => {
  if (isiPad() && isiPhone()) {
    FastClick.attach(document.body);
  }
}

/**
 * @description Mobile Button Click
 */
export const btnClick = () => {
  $(document).on('click', '#fh5co-mobile-menu-btn', (e) => {
    e.preventDefault();
    if ($('body').hasClass('fh5co-mobile-menu-visible')) {
      $('body').removeClass('fh5co-mobile-menu-visible');	
    } else {
      $('body').addClass('fh5co-mobile-menu-visible');
    }
  });
};

// Click outside of the Mobile Menu
export const menuOutsideClick = () => {
  $(document).on('click', (e) => {
    const container = $("#fh5co-mobile-menu, #fh5co-mobile-menu-btn");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $('body').removeClass('fh5co-mobile-menu-visible');
    }
  });
};

// Mobile Menu Clone ( Mobiles/Tablets )
export const menu = () => {
  if ( $(window).width() < 769 ) {
    $('html,body').addClass('fh5co-overflow');

    if ($('#fh5co-mobile-menu').length < 1) {

      const clone = $('#fh5co-primary-menu').clone().attr({
        id: 'fh5co-mobile-menu-ul',
        class: ''
      });
      const cloneLogo = $('#fh5co-logo').clone().attr({
        id : 'fh5co-logo-mobile',
        class : ''
      });

      $('<div id="fh5co-logo-mobile-wrap">')
        .append(cloneLogo).insertBefore('#fh5co-header-section');
      $('#fh5co-logo-mobile-wrap')
        .append('<a href="#" id="fh5co-mobile-menu-btn"><i class="ti-menu"></i></a>')
      $('<div id="fh5co-mobile-menu">')
        .append(clone).insertBefore('#fh5co-header-section');

      $('#fh5co-header-section').hide();
      $('#fh5co-logo-mobile-wrap').show();
    } else {
      $('#fh5co-header-section').hide();
      $('#fh5co-logo-mobile-wrap').show();
    }

  } else {

    $('#fh5co-logo-mobile-wrap').hide();
    $('#fh5co-header-section').show();
    $('html,body').removeClass('fh5co-overflow');
    if ( $('body').hasClass('fh5co-mobile-menu-visible')) {
      $('body').removeClass('fh5co-mobile-menu-visible');
    }
  }
};
