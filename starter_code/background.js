function Background(game) {
  this.game = game;
  this.width = game.canvas.width;
  this.height = game.canvas.height;

  this.x = 0;
  this.speedX = 0;

  this.init();
};

Background.prototype.init(){
  this.speedX = this.game.levelSpeeds[this.game.level];
  this.img = new Image();
  this.img.src = "images/bg.png";
  this.img.onload = function () { }; //wait until
};

Background.prototype.draw(){
  this.game.ctx.drawImage
    (this.img, this.x, this.y, this.game.canvas.width, this.game.canvas.height);
};

Background.prototype.update(sX){
  this.x += sX;
};















