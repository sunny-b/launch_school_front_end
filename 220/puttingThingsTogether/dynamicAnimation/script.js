$(function() {
  function setInitialPosition($element) {
    $element.css({
      left: ($element.attr('data-startx') || '0') + 'px',
      top: ($element.attr('data-starty') || '0') + 'px'
    });
  }

  function setDataAttributes(formInfo, $shape) {
    formInfo.slice(1).forEach(function(obj) {
      $shape.attr('data-' + obj.name, obj.value);
    });
  }

  function createAnimations() {
    $canvas.children().each(function() {
      var $self = $(this);

      setInitialPosition($self);

      $self.animate({
        left: ($self.attr('data-endx') || '0') + 'px',
        top: ($self.attr('data-endy') || '0') + 'px'
      }, +$self.attr('data-duration'));
    });
  }

  function createShape(formInfo) {
    var $shape = $('<div class=' + formInfo[0].value +'></div>');

    setDataAttributes(formInfo, $shape);
    setInitialPosition($shape);

    $shape.appendTo('.canvas');
  }

  function stopAnimation() {
    $canvas.children().stop();
  }

  var $canvas = $('.canvas');

  $(':radio').change(function() {
    $('input[type=submit]').prop('disabled', false);
  });

  $('form').submit(function(e) {
    e.preventDefault();
    var formInfo = $(this).serializeArray();

    createShape(formInfo);
  });

  $('.animate').click(function(e) {
    e.preventDefault();

    createAnimations();
  });

  $('.stop').click(function(e) {
    e.preventDefault();

    stopAnimation();
  });
});
