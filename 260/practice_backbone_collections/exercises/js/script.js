var User = Backbone.Model.extend({
  url: 'http://jsonplaceholder.typicode.com/users'
});

var Users = Backbone.Collection.extend({
  model: User,
  url: 'http://jsonplaceholder.typicode.com/users',
  parse: function(response) {
    response.forEach(function(user) {
      user.company_name = user.company.name;
      user.catchPhrase = user.company.catchPhrase;
      user.company_bs = user.company.bs;
      delete user.company;
    });

    return response;
  },
  initialize: function() {
    this.on('sync sort', renderCollection);
  }
});

function renderCollection() {
  $(document.body).html($(usersTemplate({users: this.toJSON()})));
}

var usersTemplate = Handlebars.compile($('#users').html());

var allUsers = new Users();
allUsers.fetch();