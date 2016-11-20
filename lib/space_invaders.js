import Spaceship from './spaceship';
import Alien from './alien';
import Bullet from './bullet';
import Background from './background';

class SpaceInvaders {

  constructor(stage, canvas) {
    this.stage = stage;
    this.canvas = this.canvas;

    this.pressedKeys = {};
    this.init();
  }

  init() {
    const welcomeText = new createjs.Text("Welcome", "20px Arial", "#ff7700");
    welcomeText.textBaseline = "top";
    welcomeText.x = canvas.width/2 - 50;
    welcomeText.y = canvas.height/2-20;

    const playButton = new createjs.Text("Play", "20px Arial", "green");
    playButton.x = canvas.width/2 - 40;
    playButton.y = canvas.height/2 + 20;
    playButton.addEventListener("click", this.play.bind(this));

    // domElement.htmlElement.onclick = function() {
    //   debugger;
    // }

    this.stage.addChild(welcomeText, playButton);
    this.stage.update();
    // $('.play-button').click(() => {
    //   $('.start-menu').hide();
    //   $('.pause-button').click(() => this.togglePause());
    //   this.play();
    // });
  }

  handleClick() {
    this.play();
  }

  play() {
    this.stage.removeAllChildren();
    this.spaceship = new Spaceship(this.stage, this.canvas);
    this.alien = new Alien(this.stage, this.canvas);
    this.alien.draw(4);
    this.spaceship.draw();
    createjs.Ticker.setFPS(40);
    createjs.Ticker.on("tick", () => this.handleTick());
    document.addEventListener("keydown", this.keyDown.bind(this));
    document.addEventListener("keyup", this.keyUp.bind(this));
  }

  handleTick() {
    if (!createjs.Ticker.getPaused()) {
      this.alien.moveAliens();
      Bullet.moveBullets(this.stage, this.spaceship);
      Bullet.moveAlienBullets(this.stage, this.alien);
      Bullet.checkHits(this.stage, this.spaceship, this.alien);
      Bullet.checkIfDamaged(this.stage, this.alien);
      let randomNum = Math.floor(Math.random() * 50) + 1;
      if (randomNum == 5) {
        this.alien.fireAlienBullets();
      }
      this.stage.update();
    }
  }

  togglePause() {
    let paused = !createjs.Ticker.getPaused();
    createjs.Ticker.setPaused(paused);
    let pausedValue = paused ? "unpause" : "pause";
    $('.pause-button').attr('value', pausedValue);
  }

  keyDown(e) {
    let keycode = e.which || window.event.keycode;

    if (keycode == 37) { //left
      e.preventDefault();
      this.spaceship.move(keycode);
    } else if (keycode == 39) { //right
      e.preventDefault();
      this.spaceship.move(keycode);
    } else if (keycode == 32) { //spacebar
      e.preventDefault();
      this.spaceship.fire();
    }
  }

  keyUp(e) {
    let keycode = e.which || window.event.keycode;
    this.spaceship
  }
}

export default SpaceInvaders;
