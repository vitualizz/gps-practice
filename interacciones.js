jQuery('#yo').click(function(){
  jQuery('#map-yo,#map-creador,#map-normal,#map-amor').removeClass('map-active');
  jQuery('#map-yo').addClass('map-active');
});
jQuery('#normal').click(function(){
  jQuery('#map-yo,#map-creador,#map-normal,#map-amor').removeClass('map-active');
  jQuery('#map-normal').addClass('map-active');
});
jQuery('#creador').click(function(){
  jQuery('#map-yo,#map-creador,#map-normal,#map-amor').removeClass('map-active');
  jQuery('#map-creador').addClass('map-active');
});
jQuery('#amor').click(function(){
  jQuery('#map-yo,#map-creador,#map-normal,#map-amor').removeClass('map-active');
  jQuery('#map-amor').addClass('map-active');
});