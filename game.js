(function(root) {
  var Game = root.Game = (root.Game || {});

  var Screen = Game.Screen = function(ctx, dimX, dimY, numAsteroids) {
    this.dimX = dimX;
    this.dimY = dimY;
    this.ctx = ctx;
    this.asteroids = [];
    this.addAsteroids(numAsteroids);
    var pos = [dimX/2, dimY/2]
    var temp = new Game.Ship(pos,0,0);
    this.ship = temp;
  };

  Screen.prototype.addAsteroids = function(num) {
    for (var i = 0; i < num; i++) {
      this.asteroids.push(Game.randomAsteroid(this.dimX, this.dimY));
    }
  };

  Screen.prototype.draw = function() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0,0,this.dimX,this.dimY);
    var self = this;
    self.ship.draw(self.ctx);
    this.asteroids.forEach( function(aster) {
      aster.draw(self.ctx);
    });
  };

  Screen.prototype.move = function() {
    var self = this;
    this.ship.move(self.dimX, self.dimY);
    this.asteroids.forEach( function(aster) {
      aster.move(self.dimX, self.dimY);
    });
  };

  Screen.prototype.step = function() {
    this.move();
    this.draw();
    this.checkCollisions();
  };

  Screen.prototype.start = function() {
    this.bindKeyHandlers();
    var self = this;
    this.timer = setInterval(self.step.bind(self), 30);
  };

  Screen.prototype.checkCollisions = function() {
    for(var i = 0; i < this.asteroids.length; i++) {
      if (this.asteroids[i].isCollidedWith(this.ship)) {
        alert("GAME OVER!");
        this.stop();
        return true;
      }
    }
    return false;
  };

  Screen.prototype.stop = function() {
    clearInterval(this.timer);
  };

  Screen.prototype.bindKeyHandlers = function() {
    key('up', this.ship.impulse.bind(this.ship, 1));
    key('down', this.ship.impulse.bind(this.ship, -1));
    key('left', this.ship.rotate.bind(this.ship, 0.2));
    key('right', this.ship.rotate.bind(this.ship, -0.2));
  };
})(this);