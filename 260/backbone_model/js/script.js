var productTemplate = Handlebars.compile($('#product').html());
var formTemplate = Handlebars.compile($('#form').html());
var product = Backbone.Model.extend({
  initialize: function() {
    this.set({
      datetime: this.get('date')
    });
  },
});
