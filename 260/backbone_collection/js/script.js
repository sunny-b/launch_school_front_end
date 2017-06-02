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
  resetCollection: function() {
    this.collection = [];

    return this.collection;
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

function sortCollection(collection, category) {
  category = category || 'name';
  var attribute;

  return _.sortBy(collection, function(model) {
    attribute = model.get(category);

    if (attribute instanceof String) {
      return attribute.toLowerCase();
    } else {
      return attribute;
    }
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

function removeFromCollection(e) {
  e.preventDefault();

  var id = $(e.target).data().id;
  removeItem(id);
  renderPage(Items.collection);
}

function addToCollection(e) {
  e.preventDefault();

  var item = {};
  $(e.target).serializeArray().forEach(function(obj) {
    item[obj.name] = obj.value;
  });

  Items.create(item);
  renderPage(Items.collection);
  e.target.reset();
}

function clearCollection(e) {
  e.preventDefault();

  renderPage(Items.resetCollection());
}

function reSortCollection(e) {
  e.preventDefault();

  var category = $(e.target).data().prop;
  renderPage(sortCollection(Items.collection, category));
}

$(function() {
  Items.seedCollection();

  renderPage(Items.collection);

  $(document).on('click', '.delete', removeFromCollection);
  $(document).on('click', '.deleteAll', clearCollection);
  $(document).on('submit', 'form', addToCollection);
  $(document).on('click', '[data-prop]', reSortCollection);
});
