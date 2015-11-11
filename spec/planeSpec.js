describe('plane', function() {
  var plane;

  beforeEach(function() {
     plane = new Plane();
  });

  it('plane can takeOff', function() {
    expect(plane.takeOff).toBeDefined();
  });

  it('raises an error if already flying', function() {
    expect(plane.takeOff).toThrowError("Plane cannot take off, already flying!");
  });

});
