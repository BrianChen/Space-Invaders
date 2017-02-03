import Spaceship from './spaceship';
import Alien from './alien';
import Bullet from './bullet';
import Background from './background';

class SpaceInvadersGame {

  constructor(stage, canvas) {
    this.stage = stage;
    this.canvas = canvas;
    this.pressedKeys = {};

    this.play = this.play.bind(this);
    this.init();
  }

  init() {
    $('.play-btn').click( () => {
      $('.welcome-screen').hide(),
      $('#canvas').show()
      this.play();
    });
  }

  play() {
    this.stage.removeAllChildren();
    this.spaceship = new Spaceship(this.stage);
    this.aliens = new Alien(this.stage);
    this.aliens.draw(5);
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

export default SpaceInvadersGame;
