import Bullet from './bullet';

class Spaceship {

  constructor(stage) {
    this.stage = stage;
    this.bullets = [];
  }

  draw() {
    let img = new Image();
    img.src = "assets/images/spaceship.png";
    img.onload = () => {
      let bitmap = new createjs.Bitmap(img);
      bitmap.x = this.x = canvas.width/2 - bitmap.image.width/2;
      bitmap.y = this.y = canvas.height - bitmap.image.height - 20;
      bitmap.name = "spaceship";
      this.stage.addChild(bitmap);
      this.stage.update();
    }
  }

  resetPosition() {
    let spaceship = this.stage.getChildByName('spaceship');
    spaceship.x = this.x = canvas.width/2 - spaceship.image.width/2;
    spaceship.y = this.y = canvas.height - spaceship.image.height - 20;
    this.stage.update();
  }

  move(keycode) {
    let spaceship = this.stage.getChildByName("spaceship");

    if (keycode == 37) {
      //left 37
      if (spaceship.x > 40) {
        spaceship.x -= 20;
        this.x = spaceship.x;
      }
    } else if (keycode == 39) {
      //right 39
      if (spaceship.x < canvas.width-spaceship.image.width-40) {
        spaceship.x += 20;
        this.x = spaceship.x;
      }
    }
    this.stage.update();
  }

  fire() {
    let bullet = Bullet.drawSpaceshipBullet(this.x, this.y);
    this.bullets.push(bullet);
    this.stage.addChild(bullet);
    this.stage.update();
  }

  moveBullets() {
    for (let i = 0; i < this.bullets.length; i++){
      this.bullets[i].y -=30;
      if (this.bullets[i].y < 200) {
        stage.removeChild(this.bullets[i]);
        this.bullets.splice(i, 1);
      }
    }
  }

  removeAllBullets() {
    for (let i = 0; i < this.bullets.length; i++) {
      stage.removeChild(this.bullets[i]);
    }
    this.bullets = [];
  }
}

export default Spaceship;
