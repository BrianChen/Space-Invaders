import Bullet from './bullet';

class Alien {

  constructor(stage) {
    this.stage = stage;
    this.right = true;
    this.bullets = [];
  }

  draw(rows) {
    this.aliens = new createjs.Container();
    this.aliens.name = "alienContainer";

    for (let i = 0; i < rows; i++){
      for (let j = 0; j < 8; j++){
        let x = j * 20;
        let y = i * 10;
        let img = new Image();
        img.src = 'assets/alien.png';
        let bitmap = new createjs.Bitmap('assets/alien.png');
        bitmap.x = x;
        bitmap.y = y;
        bitmap.width = 30;
        bitmap.height = 5;
        this.aliens.addChild(bitmap);
      }
    }
    this.aliens.x = canvas.width/2 - 80;
    this.stage.addChild(this.aliens);
    this.stage.update();
  }

  moveAliens() {
    if (this.right) {
      if (this.aliens.x + 160 > canvas.width - 30) {
        this.right = !this.right;
        this.aliens.y += 5;
      } else {
        this.aliens.x += 1;
      }
    } else {
      if (this.aliens.x < 20) {
        this.right = !this.right;
        this.aliens.y += 5;
      } else {
        this.aliens.x -= 1;
      }
    }
  }

  fireAlienBullets() {
    let bullet = Bullet.drawAlienBullet(this.stage);
    this.bullets.push(bullet);
    this.stage.addChild(bullet);
    this.stage.update();
  }
}

export default Alien;
