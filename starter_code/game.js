function Game(canvasId) {
  this.canvasId;
  this.score = 0;
  this.level = 0;
  this.speed = 0;
  this.levelSpeedArr = [5, 10, 20, 30, 50];
  this.fps;
  this.profiling;
  this.debugging;


  this.init(this.level);
};

Game.prototype.init = function (level) {
  this.speed = this.levelSpeedArr[level]; //speed in pixels per sec
  this.initCanvasLink();
  this.initBackground();
  this.bg.draw();
  this.initBird();
  this.bird.draw();
};

Game.prototype.initCanvasLink = function () {
  this.canvas = document.getElementById(this.canvasId);
  this.ctx = this.canvas.getConext("2d");
};

Game.prototype.initBackground = function () {
  this.bg = new Background(this);
};

Game.prototype.initBird = function () {
  this.bird = new Bird(this);
};

Game.prototype.gameStart = function () {

  //initial calibration of ms per frame
  function update(time) {
    //calc for delta in pixesl to keep real speed constant
    // even with heavy loads per pixels.
    var prevTime = 0;
    const requestID;
    function _update(time) {
      var deltaPixels = this.speed; //first iter without coallibration
      this.gameMainIter();
      prevTime = time;
    }

    function update(time) {
      this.speed *= (time - prevTime) / 1000;
      this.gameMainIter();
      prevTime = time;
      if (gameOn()) {
        requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(requestID);
      }
    }
  }
  window.requestAnimationFrame(_update);
  requestID = window.requestAnimationFrame(update);
}


Game.prototype.gameMainIter = function () {
  this.update();
}

Game.prototype.update = function () {
  this.bg.update();
  this.bg.draw();

  this.bird.update();
  this.bird.draw();

}


Game.prototype.gameOn = function (){

}














