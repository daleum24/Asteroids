(function(root) {
  var Game = root.Game = (root.Game || {});

  var Asteroid = Game.Asteroid = function(pos, speed, theta) {
    var COLOR = "white";
    var RADIUS = 15;
    Game.MovingObject.call(this, RADIUS, COLOR, pos, speed, theta);
  };

  Asteroid.inherits(Game.MovingObject);

  var randomPos = function(max) {
    return Math.random() * max;
  }

  var randomAsteroid = Game.randomAsteroid = function(dimX, dimY) {
    var pos = [];
		
		var xPos = randomPos(dimX) 
		while ((xPos > 100) && (xPos < 400)){
			xPos = randomPos(dimX)
		}
    pos.push(xPos);
		
		var yPos = randomPos(dimY) 
		while ((yPos > 100) && (yPos < 400)){
			yPos = randomPos(dimY)
		}
    pos.push(yPos);
		
    var speed = (Math.random()+1) * 0.5;
    var theta = Math.random() * 2 * Math.PI;
    return new Asteroid(pos,speed,theta);
  };
})(this);