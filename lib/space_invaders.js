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
    Background(this.stage);
    $('.play-button').click(() => {
      $('.start-menu').hide();
      $('.pause-button').click(() => this.togglePause());
      this.play();
    });
  }

  play() {
    // stage.removeChild(1,2)
    this.spaceship = new Spaceship(this.stage, this.canvas);
    this.alien = new Alien(this.stage, this.canvas);
    this.alien.draw(4);
    this.spaceship.draw();
    createjs.Ticker.setFPS(3);
    createjs.Ticker.on("tick", () => this.handleTick());
    document.addEventListener("keydown", this.keyDown.bind(this));
    document.addEventListener("keyup", this.keyUp.bind(this));
  }

  handleTick() {
    if (!createjs.Ticker.getPaused()) {
      this.alien.moveAliens();
      Bullet.moveBullets(this.stage);
      this.stage.update();
    }
  }

  togglePause() {
    let paused = !createjs.Ticker.getPaused();
    createjs.Ticker.setPaused(paused);
    let pausedValue = paused ? "unpause" : "pause";
    $('.pause-button').attr('value', pausedValue);
    debugger;
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
