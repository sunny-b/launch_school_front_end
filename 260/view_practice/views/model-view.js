var ColorView = Backbone.View.extend({
  tagName: 'li',
  template: Handlebars.templates.colors,
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this.el;
  }
});