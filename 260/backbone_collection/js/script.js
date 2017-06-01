var ItemModel = Backbone.Model.extend({
  initialize: function() {
    this.set('id', Items.collection.length + 1);
  }
});

var Items = {
  collection: [],
  seedCollection: function() {
    items_json.forEach(this.create.bind(this));

  },
  create: function(item_data) {
    var item = new ItemModel(item_data);
    this.collection.push(item);
    this.collection = sortCollection(this.collection);

    return item;
  },
};

var templates = {};

$('[type*=handlebars]').each(function() {
  templates[$(this).attr('id')] = Handlebars.compile($(this).html());
});

$('[data-id=partial]').each(function() {
  Handlebars.registerPartial($(this).attr('id'), $(this).html());
});

function renderPage(collection) {
  $('tbody').html($(templates.items({items: collection})));
}

function sortCollection(collection) {
  return _.sortBy(collection, function(model) {
    return model.get('name');
  });
}

function removeItem(id) {
  var item = Items.collection.filter(function(model) {
    return model.get('id') === id;
  })[0];
  var index = Items.collection.indexOf(item);

  Items.collection.splice(index, 1);
  Items.collection = sortCollection(Items.collection);
}

$(function() {
  Items.seedCollection();

  renderPage(Items.collection);

  $('a').on('click', function(e) {
    e.preventDefault();

    var id = $(this).data().id;
    removeItem(id);
    renderPage(Items.collection);
  });
});
