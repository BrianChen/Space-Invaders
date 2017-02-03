import Bullet from './bullet';

class Spaceship {

  constructor(stage) {
    this.stage = stage;
    this.bullets = [];
  }

  draw() {
    const img = new Image();
    img.src = 'assets/images/spaceship.png';
    const x = this.x;
    const y = this.y;
    img.onload = (event) => {
      let bitmap = new createjs.Bitmap('assets/images/spaceship.png');
      bitmap.x = x;
      bitmap.y = y;
      bitmap.height = 20;
      bitmap.width = 20;
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
        spaceship.x -= 10;
        this.x = spaceship.x;
      }
    } else if (keycode == 39) {
      //right 39
      if (spaceship.x + 30 < canvas.width - 40) {
        spaceship.x += 10;
        this.x = spaceship.x;
      }
    }
    this.stage.update();
  }

  fire() {
    let bullet = Bullet.drawSpaceshipBullet(this.x, this.y)
    this.bullets.push(bullet);
    this.stage.addChild(bullet);
    this.stage.update();
  }
}

export default Spaceship;
