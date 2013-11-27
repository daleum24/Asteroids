(function(root) {
  var Game = root.Game = (root.Game || {});

  var Ship = Game.Ship = function(pos, speed, theta) {
    var COLOR = "red";
    var RADIUS = 15;
    Game.MovingObject.call(this, RADIUS, COLOR, pos, speed, theta);
  };

  Ship.inherits(Game.MovingObject);

  Ship.prototype.impulse = function(power) {
    this.speed += power;
  };

  Ship.prototype.rotate = function(angle) {
    this.theta += angle;
  };
})(this);