$(function() {
  var tabs = {
    $nav: $('nav a'),
    $article: $('article'),
    newTab: function(e) {
      e.preventDefault();
      var $clickedTab = $(e.target);
      var index = $clickedTab.index('nav a');

      this.$nav.removeClass('active');
      $clickedTab.addClass('active');
      this.$article.fadeOut();
      this.$article.eq(index).fadeIn();
      localStorage.setItem('activeTab', index);
    },
    showArticle: function(index) {
      this.$article.fadeOut();
      this.$article.eq(index).fadeIn();
    },
    bindings: function() {
      this.$nav.click(this.newTab.bind(this));
    },
    init: function() {
      var index = +localStorage.getItem('activeTab') || 0;
      this.$nav.eq(index).addClass('active');
      this.showArticle(index);

      this.bindings();
    },
  };

  var form = {
    $textarea: $('textarea'),
    $radios: $(':radio'),
    updateRadio: function(e) {
      var color = $(this).val();
      var index = $(this).index(':radio');

      $('body').css('background-color', color);
      localStorage.setItem('radioIndex', index);
    },
    updateTextarea: function(e) {
      var $el = $(this);
      localStorage.setItem('textarea', $el.val());
    },
    resetPrevious: function() {
      var index = +localStorage.getItem('radioIndex') || 0;
      var text = localStorage.getItem('textarea');
      var $radio = this.$radios.eq(index);

      $radio.prop('checked', true);
      $('body').css('background-color', $radio.val());
      this.$textarea.val(text);
    },
    bindings: function() {
      this.$radios.change(this.updateRadio);
      this.$textarea.keyup(this.updateTextarea);
    },
    init: function() {
      this.resetPrevious();
      this.bindings();
    }
  };

  tabs.init.call(tabs);
  form.init.call(form);
});
