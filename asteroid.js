(function(root) {
  var Game = root.Game = (root.Game || {});

  var Asteroid = Game.Asteroid = function(pos, speed, theta) {
    var COLOR = "white";
    var RADIUS = 15;
    Game.MovingObject.call(this, RADIUS, COLOR, pos, speed, theta);
  };

  Asteroid.inherits(Game.MovingObject);

  var randomPos = function(max) {
		var pos = Math.random() * max
		while ((pos > 100) && (pos < 400)){
			pos = Math.random() * max
		}
    return pos
  }

  var randomAsteroid = Game.randomAsteroid = function(dimX, dimY) {
    var pos = [];
		
		var xPos = randomPos(dimX) 
    pos.push(xPos);
		
		var yPos = randomPos(dimY) 
    pos.push(yPos);
		
    var speed = (Math.random()+1) * 0.5;
    var theta = Math.random() * 2 * Math.PI;
    return new Asteroid(pos,speed,theta);
  };
	
})(this);