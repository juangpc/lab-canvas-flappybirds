function Bird(game) {
  this.game = game;

  this.width = 498;
  this.height = 351;

  this.x = 0;
  this.y = 0;
  this.speedX = 0;
  this.speedY = 0;

  this.g = -9.8;

  this.init();
};

Bird.prototype.init = function(){
  this.speedX = this.game.levelSpeeds[this.game.level];

  this.img = new Image();
  this.img.src = "images/flappy.png";
  this.img.onload = function () { };
};

Bird.prototype.draw = function () {
  this.game.ctx.drawImage
    (this.img, this.x, this.y, this.game.canvas.width, this.game.canvas.height);
};

Bird.prototype.update(sX) = function () {

  this.speedY += this.g;

  this.x += this.sX;
  this.y *= this.speedY;

};


























