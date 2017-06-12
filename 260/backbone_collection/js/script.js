var ItemModel = Backbone.Model.extend({
  idAttribute: 'id',
  initialize: function() {
    if (!this.get('id')) {
      this.set('id', this.collection.nextID());
    }
  },
});

var Items = Backbone.Collection.extend({
  lastID: 0,
  setLastId: function() {
    if (this.isEmpty()) {return;}

    this.lastID = this.last().get('id');
  },
  model: ItemModel,
  sortBy: function(prop) {
    this.models = _(this.models).sortBy(function(m) {
      return m.attributes[prop];
    });
    this.trigger('rerender')
  },
  sortByName: function() {
    this.sortBy('name');
  },
  nextID: function() {
    return ++this.lastID;
  },
  initialize: function() {
    this.on('sync', this.setLastId);
    this.on('add', function() {
      this.sortBy('name');
    });
  },
});

var ItemsView = Backbone.View.extend({
  el: 'tbody',
  template: Handlebars.compile($('#items').html()),
  render: function() {
    this.$el.html($(this.template({ items: this.collection.toJSON() })));
  },
  events: {
    'click .delete': 'removeFromCollection'
  },
  removeFromCollection: function(e) {
    e.preventDefault();

    var id = $(e.target).data().id;
    this.collection.remove(id);
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'remove add reset rerender', this.render.bind(this));
  }
});

var App = {
  clearCollection: function(e) {
    e.preventDefault();

    this.collection.reset();
  },
  addToCollection: function(e) {
     e.preventDefault();

    var item = {};
    $(e.target).serializeArray().forEach(function(obj) {
      item[obj.name] = obj.value;
    });

    this.collection.add(item);
    e.target.reset();
  },
   reSortCollection: function(e) {
    e.preventDefault();

    var category = $(e.target).data().prop;
    this.collection.sortBy(category);
  },
  binds: function() {
    $(document).on('click', '.deleteAll', this.clearCollection.bind(this));
    $(document).on('submit', 'form', this.addToCollection.bind(this));
    $(document).on('click', 'th', this.reSortCollection.bind(this));
  },
  init: function() {
    this.binds();
    this.collection = new Items(items_json);
    this.ItemsView = new ItemsView({ collection: this.collection });
    this.collection.sortByName();
  }
};


$(App.init.bind(App));
