'use strict';

/**
 * @fileoverview Easy Repsonsive Tabs
 */

export default function() {
  $('#fh5co-tab-feature').easyResponsiveTabs({
    fit                        : true,
    type                       : 'default',
    width                      : 'auto',
    closed                     : 'accordion',
    tabidentify                : 'hor_1',
    inactive_bg                : '',
    active_border_color        : '',
    active_content_border_color: ''
  });
  $('#fh5co-tab-feature-center').easyResponsiveTabs({
    fit                        : true, 
    type                       : 'default',
    width                      : 'auto',
    closed                     : 'accordion', 
    tabidentify                : 'hor_1',
    inactive_bg                : '',
    active_border_color        : '',
    active_content_border_color: ''
  });
  $('#fh5co-tab-feature-vertical').easyResponsiveTabs({
    fit                        : true,
    type                       : 'vertical',
    width                      : 'auto',
    closed                     : 'accordion',
    tabidentify                : 'hor_1',
    inactive_bg                : '',
    active_border_color        : '',
    active_content_border_color: ''
  });
};
