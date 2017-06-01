var productTemplate = Handlebars.compile($('#product').html());
var formTemplate = Handlebars.compile($('#form').html());
var ProductModel = Backbone.Model.extend({
  initialize: function() {
    resetDate(this);
  },
});
var product = new ProductModel(product_json);

function resetDate(product) {
  product.set({
    datetime: moment().format(),
    date_formatted: moment().format('MMMM Do YYYY, h:mm:ss a'),
  });
}

function renderPage(product) {
  $('article').html($(productTemplate(product.toJSON())));
  $('fieldset').html($(formTemplate(product.toJSON())));
}

$(function() {
  renderPage(product);

  $('form').on('submit', function(e) {
    e.preventDefault();
    console.log($(this).serializeArray());
    $(this).serializeArray().forEach(function(obj) {
      product.set(obj.name, obj.value);
      resetDate(product);
    });

    renderPage(product);
  });
});
