var AppView = Backbone.View.extend({
  el: 'body',
  template: Handlebars.templates.app,
  modalTemplate: Handlebars.templates.modal,
  render: function() {
    this.$el.html(this.template());
  },
  events: {
    'click .add': 'showModal',
    'click .btn-cancel': 'hideModal',
    'submit form': 'addPerson'
  },
  showModal: function(e) {
    e.preventDefault();
    this.$el.append(this.modalTemplate());
  },
  hideModal: function(e) {
    e.preventDefault();
    this.$el.find('#newModal').remove();
  },
  addPerson: function(e) {
    e.preventDefault();
    var $form = $(e.target);
    var newPerson = {
      name: $form.find('#name').val(),
      colors: $form.find('#colors').val().split(' ')
    };

    app.trigger('add_new', newPerson);
    this.hideModal(e);
  }
});