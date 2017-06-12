var ColorsView = Backbone.View.extend({
  el: '#favorites',
  render: function() {
    this.collection.each(this.renderEach.bind(this));
  },
  renderEach: function(model) {
    var view = new ColorView({model: model});
    this.$el.append(view.render());
  },
  initialize: function() {
    this.listenTo(this.collection, 'add', this.addNew);
  },
  addNew: function() {
    this.renderEach(this.collection.last());
  },
});