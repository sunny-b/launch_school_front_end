$(function() {
  $('.main-photos img').eq(0).show();
  $('.left').hide();

  $('.thumbnails a').click(function(e) {
    e.preventDefault();
    var $clickedItem = $(this).parent();
    var $thumbnails = $('.thumbnails li');
    var index = $thumbnails.index($clickedItem);

    $thumbnails.siblings().find('img').removeClass('active');
    $(this).find('img').addClass('active');

    $('.main-photos img').stop()
                         .removeClass('show')
                         .fadeOut(500)
                         .delay(500)
                         .eq(index)
                         .addClass('show')
                         .fadeIn(500);

    showArrows(index, $thumbnails.length);
  });

  $('.right').click(newPic('next'));
  $('.left').click(newPic('prev'));

  function newPic(string) {
    var $nextPic;

    return function() {
      if (string === 'next') {
        $nextPic = $('.show').parent().next();
      } else if (string === 'prev') {
        $nextPic = $('.show').parent().prev();
      }

      var $thumbnails = $('.slideshow li');
      var index = $thumbnails.index($nextPic);

      $('.thumbnails a').eq(index).trigger('click');
    }
  }

  function showArrows(index, maxLength) {
    if (index === 0) {
      $('.left').hide();
    } else if (index === maxLength - 1) {
      $('.right').hide();
    } else {
      $('.left, .right').show();
    }
  }
});
