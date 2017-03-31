$(function() {
  function reset(items) {
    items.each(function() { $(this).val('') });
  }

  $('form').submit(function(e) {
    e.preventDefault();

    var $item = $('#item').val();
    var $quantity = +$('#quantity').val() || 1;

    var $newListItem = $('<li></li>').text($quantity + ' ' + $item);

    $('ul').append($newListItem);

    $('form')[0].reset();
  });

});
