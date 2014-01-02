(function(root) {
  var Game = root.Game = (root.Game || {});

  var Ship = Game.Ship = function(pos, speed, theta) {
    var COLOR = "red";
    var RADIUS = 15;
    Game.MovingObject.call(this, RADIUS, COLOR, pos, speed, theta);
  };

  Ship.inherits(Game.MovingObject);
	
	Ship.prototype.draw = function(ctx){
		ctx.beginPath()
		ctx.strokeStyle = this.color
		ctx.fillStyle   = this.color
		ctx.moveTo(this.xPos + 10 * Math.cos(this.theta), this.yPos + 10 * Math.sin(this.theta))
		ctx.lineTo((this.xPos + 10 * Math.cos(this.theta + (3 * Math.PI / 4))), (this.yPos + 10 * Math.sin(this.theta + (3 * Math.PI / 4))))
		ctx.lineTo(this.xPos - 4 * Math.cos(this.theta), this.yPos - 4 * Math.sin(this.theta))
    ctx.lineTo((this.xPos + 10 * Math.cos(this.theta - (3 * Math.PI / 4))), (this.yPos + 10 * Math.sin(this.theta - (3 * Math.PI / 4))))
		ctx.lineTo(this.xPos + 10 * Math.cos(this.theta), this.yPos + 10 * Math.sin(this.theta))
    ctx.fill();
	}

  Ship.prototype.impulse = function(power) {
    this.speed += power;
  };

  Ship.prototype.rotate = function(angle) {
    this.theta += angle;
  };

  Ship.prototype.fireBullet = function() {
    return new Game.Bullet([this.xPos, this.yPos], 20, this.theta);
  };
})(this);
