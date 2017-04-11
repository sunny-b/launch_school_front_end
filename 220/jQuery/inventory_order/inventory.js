var inventory;

(function() {
  inventory = {
    collection: [],
    lastID: 0,
    add: function() {
      this.lastID++
      var item = { id: this.lastID,
                   name: '',
                   stockNumber: '',
                   quantity: 1 };
      this.collection.push(item);
      return item;
    },
    remove: function(idx) {
      this.collection = this.collection.filter(item => item.id !== +idx);
    },
    findParent: function(item) {
      return item.closest('tr');
    },
    findID: function(item) {
      return +item.find('input[type=hidden]').val()
    },
    deleteItem: function(e) {
      e.preventDefault;
      var $target = $(e.target);
      var $item = this.findParent($target).remove();

      this.remove(this.findID($item));
    },
    updateItem: function(e) {
      var $target = $(e.target);
      var id = this.findID(this.findParent($target));
      var item = this.collection[id - 1];
      var parentIndex = $target.parent().index();

      if (parentIndex === 0) {
        item.name = $target.val();
      } else if (parentIndex === 1) {
        item.stockNumber = $target.val();
      } else if (parentIndex === 2) {
        item.quantity = $target.val();
      }
    },
    setDate: function() {
      var date = new Date();

      $('#order_date').text(date.toUTCString());
    },
    cacheTemplate: function() {
      this.template = Handlebars.compile($('#inventory_item').remove().html());
    },
    newItem: function(e) {
      e.preventDefault();
      var item = this.add();

      $('#inventory').append(this.template(item));
    },
    bindEvents: function() {
      $('#add_item').click(this.newItem.bind(this));
      $('#inventory').on('click', '.delete', this.deleteItem.bind(this));
      $('#inventory').on('blur', ':input', this.updateItem.bind(this));
    },
    init: function() {
      this.setDate();
      this.cacheTemplate();
    }
  };

})();

$(inventory.init.bind(inventory));

$(function() {
  inventory.bindEvents();
});
