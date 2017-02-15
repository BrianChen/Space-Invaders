import Bullet from './bullet';

class Alien {

  constructor(stage) {
    this.stage = stage;
    this.right = true;
    this.bullets = [];
    this.moveRate = 2;
  }

  draw() {
    this.aliens = new createjs.Container();
    this.aliens.name = "alienContainer";

    for (let i = 0; i < 5; i++){
      for (let j = 0; j < 11; j++){
        let x = j * 75;
        let y = i * 75;
        let bitmap;
        if (i < 2) {
          bitmap = new createjs.Bitmap('assets/images/alien2.png');
        } else if (i < 4){
          bitmap = new createjs.Bitmap('assets/images/alien.png');
        } else {
          bitmap = new createjs.Bitmap('assets/images/alien3.png');
        }
        bitmap.x = x;
        bitmap.y = y;
        bitmap.setBounds(x, y, bitmap.image.width, bitmap.image.height);
        bitmap.scaleX = 2;
        bitmap.scaleY = 2;
        this.aliens.addChild(bitmap);
      }
    }
    this.aliens.x = canvas.width/2 - 400;
    this.aliens.y = 200;
    this.stage.addChild(this.aliens);
    this.stage.update();
  }

  move() {
    if (this.right) {
      if (this.aliens.x + 825 > canvas.width - 20) {
        this.right = !this.right;
        this.aliens.y += 40;
      } else {
        this.aliens.x += this.moveRate;
      }
    } else {
      if (this.aliens.x < 20) {
        this.right = !this.right;
        this.aliens.y += 40;
      } else {
        this.aliens.x -= this.moveRate;
      }
    }
  }

  fireAlienBullets() {
    let bullet = Bullet.drawAlienBullet(this.stage);
    this.bullets.push(bullet);
    this.stage.addChild(bullet);
    this.stage.update();
  }

  moveAlienBullets() {
    for (let i = 0; i < this.bullets.length; i++) {
      if (this.bullets[i].y > canvas.height - 20) {
        stage.removeChild(this.bullets[i]);
        this.bullets.splice(i,1);
      }
      this.bullets[i].y += 30;
    }
  }

  removeAllAlienBullets() {
    for (let i = 0; i < this.bullets; i++) {
      stage.removeChild(this.bullets[i]);
    }
    this.bullets = [];
  }
}

export default Alien;
