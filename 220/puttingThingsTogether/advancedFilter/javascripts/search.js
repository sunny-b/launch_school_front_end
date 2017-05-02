$(function() {

  var ITEMS_JSON = [ { "title": "The Legend of Zelda: Majora's Mask 3D",
    "id": 1,
    "category": "Nintendo 3DS"
    },
    {
    "title": "Super Smash Bros.",
    "id": 2,
    "category": "Nintendo 3DS"
    },
    {
    "title": "Super Smash Bros.",
    "id": 3,
    "category": "Nintendo WiiU"
    },
    {
    "title": "LEGO Batman 3: Beyond Gotham",
    "id": 4,
    "category": "Nintendo WiiU"
    },
    {
    "title": "LEGO Batman 3: Beyond Gotham",
    "id": 5,
    "category": "Xbox One"
    },
    {
    "title": "LEGO Batman 3: Beyond Gotham",
    "id": 6,
    "category": "PlayStation 4"
    },
    {
    "title": "Far Cry 4",
    "id": 7,
    "category": "PlayStation 4"
    },
    {
    "title": "Far Cry 4",
    "id": 8,
    "category": "Xbox One"
    },
    {
    "title": "Call of Duty: Advanced Warfare",
    "id": 9,
    "category": "PlayStation 4"
    },
    {
    "title": "Call of Duty: Advanced Warfare",
    "id": 10,
    "category": "Xbox One"
    }
  ];

  var games = {
    $items: $('main li'),
    $checkbox: $(':checkbox'),
    $searchbox: $('input[type=search]'),
    hideItem: function(filteredItemIds, id, el) {
      if (filteredItemIds.includes(id)) { el.hide(); }
    },
    showItem: function(filteredItemIds, id, el) {
      if (filteredItemIds.includes(id)) { el.show(); }
    },
    findItemIds: function(callback) {
      return ITEMS_JSON.filter(callback).map(function(item) { return item.id; });
    },
    queryItems: function(e) {
      var self = this;
      var searchQuery = new RegExp($(e.target).val(), 'i');
      var checkedCategories = self.$checkbox.filter(function() {
        return $(this).prop('checked');
      }).map(function() {
        return $(this).val();
      });

      var queriedItemIds = self.findItemIds(function(obj) {
        return searchQuery.test(obj.title) &&
               Array.prototype.includes.call(checkedCategories, obj.category);
      });


      self.$items.each(function() {
        var $item = $(this);
        var itemId = $item.data().id;

        queriedItemIds.includes(itemId) ? $item.show() : $item.hide();
      });
    },
    filterItems: function(e) {
      var $el = $(e.target);
      var self = this;
      var category = $el.val();
      var searchQuery = new RegExp(self.$searchbox.val(), 'i');
      var isChecked = $el.prop('checked');
      var filteredItemIds = self.findItemIds(function(obj) {
        return obj.category === category && searchQuery.test(obj.title);
      });

      self.$items.each(function() {
        var $item = $(this);
        var itemId = $item.data().id;

        if (isChecked) {
          self.showItem(filteredItemIds, itemId, $item);
        } else {
          self.hideItem(filteredItemIds, itemId, $item);
        }
      });
    },
    binds: function() {
      this.$checkbox.change(this.filterItems.bind(this));
      this.$searchbox.keyup(this.queryItems.bind(this));

      $('#search').submit(function(e) {
        e.preventDefault();

        this.$searchbox.trigger('keyup');
      }.bind(this));
    },
    init: function() {
      this.binds()
    }
  };

  games.init();
});
