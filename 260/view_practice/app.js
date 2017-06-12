var app = {

  init: function() {
    this.appView = new AppView();
    this.appView.render();

    this.list = new ColorCollection([
      { name: 'Sunny', colors: ['red', 'white', 'blue'] },
      { name: 'Iris', colors: ['green', 'black', 'white'] },
      { name: 'John', colors: ['pink', 'purple', 'perriwinkle'] }
    ]);

    this.listView = new ColorsView({ collection: this.list });
    this.listView.render();
  }
};

_.extend(app, Backbone.Events);

app.on('add_new', function(newPerson) {
  this.list.add(newPerson);
});

app.init();