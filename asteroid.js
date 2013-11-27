(function(root) {
  var Game = root.Game = (root.Game || {});

  var Asteroid = Game.Asteroid = function(pos, speed, theta) {
    var COLOR = "white";
    var RADIUS = 10;
    Game.MovingObject.call(this, RADIUS, COLOR, pos, speed, theta);
  };

  Asteroid.inherits(Game.MovingObject);

  var randomPos = function(max) {
    return Math.random() * max;
  }

  var randomAsteroid = Game.randomAsteroid = function(dimX, dimY) {
    var pos = [];
    pos.push(randomPos(dimX));
    pos.push(randomPos(dimY));
    var speed = Math.random() * 10;
    var theta = Math.random() * 2 * Math.PI;
    return new Asteroid(pos,speed,theta);
  };
})(this);