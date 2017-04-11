$(function() {
  var templates = {},
      photos;

  $('script[type="text/x-handlebars"]').each(function() {
    var $template = $(this);
    templates[$template.attr('id')] = Handlebars.compile($template.html());

    if ($template.data('type') === 'partial') {
      Handlebars.registerPartial($template.attr('id'), $template.html());
    }
  });

  var slideshow = {
    $el: $('#slideshow'),
    duration: 500,
    prevSlide: function(e) {
      e.preventDefault();
      var $current = this.$el.find('figure:visible');
      var $prev = $current.prev('figure');

      if (!$prev.length) {
        $prev = this.$el.find('figure').last();
      }
      $current.fadeOut(this.duration);
      $prev.fadeIn(this.duration);

      this.renderPhotoContent($prev.attr('data-id'));
    },
    nextSlide: function(e) {
      e.preventDefault();
      var $current = this.$el.find('figure:visible');
      var $next = $current.next('figure');

      if (!$next.length) {
        $next = this.$el.find('figure').first();
      }
      $current.fadeOut(this.duration);
      $next.fadeIn(this.duration);
      this.renderPhotoContent($next.attr('data-id'));
    },
    renderPhotoContent: function(idx) {
      $('[name=photo_id]').val(idx);
      $.ajax({
        url: '/photos',
        success: function(json) {
          photos = json;
          renderPhotoInformation(+idx - 1);
          getCommentsFor(idx);
        }
      });
    },
    bind: function() {
      this.$el.find('a.prev').click(this.prevSlide.bind(this));
      this.$el.find('a.next').click(this.nextSlide.bind(this));
    },
    init: function() {
      this.bind();
    }
  };

  $.ajax({
    url: '/photos',
    success: function(json) {
      photos = json;
      renderPhotos();
      renderPhotoInformation(0);
      slideshow.init();
      getCommentsFor(photos[0].id);
    }
  });

  $('section > header').on('click', '.actions a', function(e) {
    e.preventDefault();
    var $action = $(e.target);

    $.ajax({
      url: $action.attr('href'),
      data: 'photo_id=' + $action.attr('data-id'),
      type: 'POST',
      success: function(json) {
        $action.text(function(i, txt) {
          return txt.replace(/\d+/, json.total);
        });
      }
    });
  });

  $('form').submit(function(e) {
    e.preventDefault();

    $.ajax({
      url: $(this).attr('action'),
      type: 'POST',
      data: $(this).serialize(),
      success: function(json) {
        $('#comments ul').append(templates.comment(json));
        $(this).reset();
      }
    });
  });

  function renderPhotos() {
    $('#slides').html(templates.photos({ photos : photos }));
  }

  function renderPhotoInformation(idx) {
    $('section > header').html(templates.photo_information(photos[idx]));
  }

  function getCommentsFor(idx) {
    $.ajax({
      url: '/comments',
      data: 'photo_id=' + idx,
      success: function(json) {
        $('#comments ul').html(templates.allcomments({ comments: json }));
      }
    });
  }
});
