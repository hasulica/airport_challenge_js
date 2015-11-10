describe('plane', function() {
  var plane;

  beforeEach(function() {
     plane = new Plane();
  });

  it('plane can land', function() {
    expect(plane.land).toBeDefined();
  });

});
