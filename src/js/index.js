import $ from 'jquery';
import easyResponsiveTabs from 'easy-responsive-tabs';
import {windowResize, windowScroll} from './utils';
import responsiveTabs from './responsiveTabs';
import {
  menu             as mobileMenu,
  btnClick         as mobileBtnClick,
  fastClick        as mobileFastClick,
  menuOutsideClick as mobileMenuOutsideClick
} from './mobile';

(($) => {
  'use strict';

  windowResize(mobileMenu);
  windowScroll();
  mobileMenu(); // for first time
  mobileBtnClick();
  responsiveTabs();
})($);
