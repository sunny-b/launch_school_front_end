function Honda(model) {
  if (!this.verify(model)) {
    throw new Error('Model ' + model + ' does not exist');
    return undefined;
  }

  this.model = model;
  this.make = 'Honda';
  this.price = Honda.getPrice(model);
}

(function() {
  Honda.prototype = Object.create(Vehicle.prototype);
  Honda.prototype.constructor = Honda;

  var models = ["Accord", "Civic", "Crosstour", "CR-V", "CR-Z", "Fit", "HR-V", "Insight", "Odyssey", "Pilot"];
  var prices = [16500, 14500, 21000, 15800, 12000, 13100, 16000, 18100, 22500, 19300];

  Honda.prototype.verify = function(model) {
    return models.includes(model);
  }

  Honda.getPrice = function(model) {
    var index = models.indexOf(model);

    return prices[index];
  }

  Honda.getModels = function() {
    return models.slice();
  }
})();