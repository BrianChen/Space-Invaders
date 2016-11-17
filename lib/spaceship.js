import Bullet from './bullet';

class Spaceship {

  constructor(stage) {
    this.stage = stage;
    this.x = canvas.width /2 - 15;
    this.y = canvas.height - 30;
    this.bullets = [];
  }

  draw() {
    const img = new Image();
    img.src = 'assets/spaceship.png';
    img.onload = (event) => {
      let bitmap = new createjs.Bitmap('assets/spaceship.png');
      bitmap.x = this.x
      bitmap.y = this.y
      bitmap.name = "spaceship";
      this.stage.addChild(bitmap);
      this.stage.update();
    }
  }

  move(keycode) {
    let spaceship = this.stage.getChildByName("spaceship");
    if (keycode == 37) {
      //left 37
      if (spaceship.x > 40) {
        spaceship.x -= 30;
        this.x = spaceship.x;
      }
    } else if (keycode == 39) {
      //right 39
      if (spaceship.x + 30 < canvas.width - 40) {
        spaceship.x += 30;
        this.x = spaceship.x;
      }
    }
    this.stage.update();
  }

  fire() {
    let bullet = new Bullet(this.stage, this.x, this.y);
    this.bullets.push(bullet);
    bullet.draw();
  }

}

export default Spaceship;
