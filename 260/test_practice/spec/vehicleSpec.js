describe('Vehicle', function() {
  var vehicle;

  beforeEach(function() {
    vehicle = new Vehicle({ make: 'Honda', model: 'Accord' });
  });

  it("sets 'make' and 'model' properties when object is passed in", function() {
    expect(vehicle.make).toEqual('Honda');
    expect(vehicle.model).toEqual('Accord');
  });

  it("says it's name on toString", function() {
    expect(vehicle.toString()).toEqual('Honda Accord');
    
    vehicle.make = 'Toyota';
    expect(vehicle.toString()).toEqual('Toyota Accord');
  });

  it("returns a message when the horn is honked", function() {
    expect(vehicle.honkHorn()).toMatch(/Beep beep!/);
  });
});