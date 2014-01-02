(function(root) {
  var Game = root.Game = (root.Game || {});

  var Ship = Game.Ship = function(pos, speed, theta) {
    var COLOR = "red";
    var RADIUS = 7;
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
	
  Ship.prototype.move = function(maxX, maxY){
		var new_speed = this.speed - 0.01
		
		this.speed = (new_speed < 0) ? 0 : new_speed
		
    this.xPos = (this.xPos + this.speed * Math.cos(this.theta));
    this.yPos = (this.yPos + this.speed * Math.sin(this.theta));
		
    if (this.xPos > maxX) {
      this.xPos = this.xPos % maxX;
    } else if (this.xPos < 0) {
      this.xPos = maxX + this.xPos + 1;
    }
		
    if (this.yPos > maxY) {
      this.yPos = this.yPos % maxY;
    } else if (this.yPos < 0) {
      this.yPos = maxY + this.yPos + 1;
    }
  }

  Ship.prototype.impulse = function(power) {
    this.speed += power;
  };

  Ship.prototype.rotate = function(angle) {
    this.theta += angle;
  };

  Ship.prototype.fireBullet = function() {
    return new Game.Bullet([this.xPos, this.yPos], 5, this.theta);
  };
})(this);
