$(function() {
  $('.modal, .modal_layer').hide();

  $('#team a').click(function(event) {
    event.preventDefault();
    var topOffset = $(window).scrollTop() + 30;

    $('.modal').css({ top: topOffset + 'px' }).addClass('slide');
    $(this).siblings().fadeIn();
  });

  $('.close').click(function(e) {
    e.preventDefault();
    $('.modal').removeClass('slide');
    $('.modal, .modal_layer').fadeOut();
  });

  $('.modal_layer').click(function() {
    $('.close').trigger('click');
  });

  $(document).on('keyup', function(e) {
    if (e.which === 27) {
      $('.close').trigger('click');
    }
  });
});
