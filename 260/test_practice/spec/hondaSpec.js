describe('Honda', function() {
  var honda;

  it("inherits the Vehicle Prototype", function() {
    honda = new Honda('Accord');

    expect(honda.toString()).toEqual('Honda Accord');
  });

  it("sets the model property when a valid model is passed in", function() {
    expect(honda.make).toEqual('Honda');
    expect(honda.model).toEqual('Accord');
  });

  it("throws an error if an invalid model is passed in", function() {
    var invalidModel = function() {
      new Honda('Bubble');
    }
    
    expect(invalidModel).toThrowError(/Bubble/);
  });

  it( "returns a list of valid models", function() {
   expect(Honda.getModels().length).toBeDefined();
   expect(Honda.getModels()).toContain('Civic'); 
  });

  it("calls getPrice when a new car is created", function() {
    spyOn(Honda, 'getPrice');
    var car = new Honda('Accord');

    expect(Honda.getPrice).toHaveBeenCalled();
    expect(Honda.getPrice).toHaveBeenCalledWith('Accord');
  });

  it("returns a price for the passed in model", function() {
    expect(Honda.getPrice('Civic')).toBeGreaterThan(0);
  });

  it("returns a price less than 15000 when a Civic is created", function() {
    var civic = new Honda('Civic');

    expect(civic.price).toBeLessThan(15000);
  });

  it("returns a price greater than 10000 when a CR-Z is created", function() {
    var crz = new Honda('CR-Z');

    expect(crz.price).toBeGreaterThan(10000);
  });
});
