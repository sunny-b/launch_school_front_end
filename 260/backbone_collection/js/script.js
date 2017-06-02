var ItemModel = Backbone.Model.extend({
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
  sortBy: function(category) {
    this.comparator = category || 'name';
    return this.sort();
  },
  render: function() {
    $('tbody').html($(App.templates.items({items: this.toJSON()})));
  },
  nextID: function() {
    return ++this.lastID;
  },
  initialize: function() {
    this.on('sync', this.setLastId);
    this.on('remove reset add', this.render.bind(this));
    this.on('add', function() {
      this.sortBy('name');
      this.render();
    });

    this.render();
  },
});

var App = {
  templates: {},
  cacheTemplates: function() {
    var self = this;
    $('[type*=handlebars]').each(function() {
      self.templates[$(this).attr('id')] = Handlebars.compile($(this).html());
    });
  },
  registerPartials: function() {
    $('[data-id=partial]').each(function() {
      Handlebars.registerPartial($(this).attr('id'), $(this).html());
    });
  },
  clearCollection: function(e) {
    e.preventDefault();

    this.collection.reset();
  },
  removeFromCollection: function(e) {
    e.preventDefault();

    var id = $(e.target).data().id;
    this.collection.remove(id);
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
    $(document).on('click', '.delete', this.removeFromCollection.bind(this));
    $(document).on('click', '.deleteAll', this.clearCollection.bind(this));
    $(document).on('submit', 'form', this.addToCollection.bind(this));
    $(document).on('click', '[data-prop]', this.reSortCollection.bind(this));
  },
  init: function() {
    this.cacheTemplates();
    this.registerPartials();
    this.binds();
    this.collection = new Items(items_json);
  }
};


$(App.init.bind(App));
