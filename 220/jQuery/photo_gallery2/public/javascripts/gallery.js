$(function() {
  var currentPhoto = 0;

  function retrieveComments(id) {
    $.get('comments?photo_id=' + id, {}, function(resp) {
      var commentsTemplate = Handlebars.compile($('#comments_').html());
      var commentPartial = Handlebars.compile($('#comment').html());
      Handlebars.registerPartial('comment', commentPartial);

      $('#comments ul').html(commentsTemplate({ comments: resp }));
    });
  }


  $.get('photos', {}, function(resp) {
    var photoTemplate = Handlebars.compile($('#photos').html());
    var photoInfoTemplate = Handlebars.compile($('#photo_information').html())
    var firstPhoto = resp[0];

    $('#slides').html(photoTemplate({ photos: resp }));
    $('section > header').html(photoInfoTemplate(firstPhoto));

    retrieveComments(firstPhoto.id);
  });

  $('.next, .prev').click(function(e) {
    e.preventDefault();
    var length = $('#slides figure').length;

    $('#slides figure').eq(currentPhoto).fadeOut();
    updatePhotoIndex($(this).hasClass('next'));
    $('#slides figure').eq(currentPhoto).fadeIn();

    $.get('photos', {}, function(resp) {
      var photoInfoTemplate = Handlebars.compile($('#photo_information').html());
      $('section > header').html(photoInfoTemplate(resp[currentPhoto]));

      retrieveComments(currentPhoto + 1);
    });

    function updatePhotoIndex(isNext) {
      if (isNext) {
        currentPhoto++;
        currentPhoto = currentPhoto >= length ? 0 : currentPhoto;
      } else {
        currentPhoto--;
        currentPhoto = currentPhoto < 0 ? length - 1 : currentPhoto;
      }
    }
  });
});
