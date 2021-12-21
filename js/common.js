$(function() {
    $('.drawer-item>a').click(function() {
      $('#drawer-check').removeAttr('checked').prop('checked', false).change();
    });
    
    $('.slider_thumb').slick({
      arrows:false,
      asNavFor:'.thumb',
  });
  $('.thumb').slick({
      asNavFor:'.slider_thumb',
      focusOnSelect: true,
      slidesToShow:4,
      slidesToScroll:1
  });  
  $("img.lazyload").lazyload();
  });