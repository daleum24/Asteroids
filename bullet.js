(function(root) {
  var Game = root.Game = (root.Game || {});

  var Bullet = Game.Bullet = function(pos, speed, theta) {
		this.duration = 50
    var COLOR = "red";
    var RADIUS = 2;
    Game.MovingObject.call(this, RADIUS, COLOR, pos, speed, theta);
  };

  Bullet.inherits(Game.MovingObject);
	
	Bullet.prototype.reduceDuration = function(){
		this.duration -= 1
	}

  Bullet.prototype.hitAsteroids = function(game) {
    var self = this;
		
    game.asteroids.forEach( function(aster) {
      if (self.isCollidedWith(aster)) {
        game.removeAsteroid(aster);
        game.removeBullet(self);
        return true;
      }
    });
    return false;
  };
})(this);