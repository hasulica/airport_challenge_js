var Plane = function(){};

Plane.prototype.takeOff = function () {
  this._location.clearForTakeOff(this);
};
Plane.prototype.land = function(airport) {
  airport.clearForLanding(this);
  this._location = airport;
};
