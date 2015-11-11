describe('plane', function() {
  var plane;
  var airport;

  beforeEach(function() {
     plane = new Plane();
     airport = jasmine.createSpyObj('airport', ['clearForLanding', 'clearForTakeOff']);
  });

  it('plane can takeOff', function() {
    expect(plane.takeOff).toBeDefined();
  });

  it('plane can land at airport', function() {
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });

  it('can take off from an airport', function(){
    plane.land(airport);
    plane.takeOff();
    expect(airport.clearForTakeOff).toHaveBeenCalled();
  });

});
