var inventory;

(function() {
  inventory = {
    collection: [],
    currentID: 0,
    setDate: function() {
      var date = new Date();
      $('#order_date').text(date.toUTCString());
    },
    newItem: function() {
      this.currentID++;
      return $(this.template.replace(/ID/g, this.currentID));
    },
    addItem: function(e) {
      e.preventDefault();
      var $item = this.newItem();

      this.collection.push({ id: this.currentID,
                             name: '',
                             stockNumber: '',
                             quantity: 1 });
      $('#inventory').append($item);
    },
    findParent: function(e) {
      return $(e.target).closest('tr');
    },
    findID: function($item) {
      return +$item.find('input[type=hidden]').val();
    },
    getItem: function(id) {
      return this.collection.filter(function(obj) {
        return obj.id === id;
      })[0];
    },
    updateItem: function(e) {
      var $row = this.findParent(e);
      var id = this.findID($row);
      var item = this.getItem(id);

      item.name = $row.find('[name^=item_name]').val();
      item.stockNumber = $row.find('[name^=item_stock_number]').val();
      item.quantity = +$row.find('[name^=item_quantity]').val();
    },
    remove: function(id) {
      var index = this.collection.indexOf(this.collection.filter(function(obj) {
        return obj.id === id;
      })[0]);

      this.collection.splice(index, 1);
    },
    deleteItem: function(e) {
      e.preventDefault();
      var $row = this.findParent(e).remove();
      this.remove(this.findID($row));
    },
    cacheTemplate: function() {
      this.template = $('#inventory_item').html().trim();
    },
    binds: function() {
      $('#add_item').click(this.addItem.bind(this));
      $('#inventory').on('click', 'a.delete', this.deleteItem.bind(this));
      $('#inventory').on('blur', 'input', this.updateItem.bind(this));
    },
    init: function() {
      this.setDate();
      this.cacheTemplate();
      this.binds();
    }
  };

})();

$(inventory.init.bind(inventory));
