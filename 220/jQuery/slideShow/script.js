$(function() {
  $('.main-photos img').eq(0).show();


  $('.thumbnails a').click(function(e) {
    e.preventDefault();
    var $clickList = $(this).parent();
    var index = $('.thumbnails li').index($clickList);

    $('.thumbnails li').siblings().find('img').removeClass('active');
    $(this).find('img').addClass('active');

    $('.main-photos img').stop().fadeOut(500).delay(500).eq(index).fadeIn(500);
  });
});
