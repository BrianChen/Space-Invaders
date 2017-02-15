import { incrementScore, updateLives, nextLevel, collisionTest } from './helper';

class Bullet {

  constructor(stage) {
    this.stage = stage;
  }

  static drawSpaceshipBullet(x, y) {
    let bullet = new createjs.Bitmap('assets/images/missle.png');
    bullet.x = x + 40;
    bullet.y = y - 40;
    bullet.scaleX = 2;
    bullet.scaleY = 2;
    bullet.name = 'spaceshipBullet';
    createjs.Sound.play("cannon");
    return bullet;
  }

  static drawAlienBullet(stage) {
    let aliens = stage.getChildByName('alienContainer').children;
    let randNum = Math.floor(Math.random() * aliens.length) + 1;
    let x = aliens[randNum].localToGlobal(0,0).x + (aliens[randNum].image.width/2);
    let y = aliens[randNum].localToGlobal(0,0).y + aliens[randNum].image.height;

    createjs.Sound.play("shoot");
    let bullet = new createjs.Bitmap('/assets/images/alienbullet.png');

    bullet.setBounds(x, y, bullet.image.width, bullet.image.height);
    bullet.x = x;
    bullet.y = y;
    bullet.scaleX = 2;
    bullet.scaleY = 2;
    bullet.width = 2;
    bullet.height = 3;
    return bullet;
  }

  static checkHits(stage, spaceship, alien) {
    let alienContainer = stage.getChildByName('alienContainer');
    let bullets = spaceship.bullets;
    if (alienContainer && bullets.length > 0) {
      let aliens = alienContainer.children;
      if (aliens.length == 0) {
        stage.removeChild(alien.aliens);
        nextLevel(stage, spaceship, alien);
      } else {
        for (let i = 0; i < aliens.length; i++) {
          for (let j = 0; j < bullets.length; j++) {
            let alien = aliens[i];
            let bullet = bullets[j];
            if (collisionTest(alien, bullet)) {
              incrementScore();
              spaceship.bullets.splice(j, 1);
              alienContainer.removeChild(alien);
              stage.removeChild(bullet);
              createjs.Sound.play("invaderkilled");
            }
          }
        }
      }
    }
  }

  static checkIfDamaged(stage, spaceshipClass, alien) {
    let bullets = alien.bullets;
    let spaceship = stage.getChildByName("spaceship");
    if (bullets.length > 0) {
      for (let i = 0; i < bullets.length; i++) {
        if ( bullets[i].y + bullets[i].image.height >= spaceship.y &&
              bullets[i].x <= spaceship.x + spaceship.image.width &&
              bullets[i].x + bullets[i].image.width >= spaceship.x) {
                //hit
                createjs.Sound.play("explosion");
                updateLives(stage);
                stage.update();
                stage.removeChild(bullets[i]);
                alien.bullets.splice(i,1);
                spaceship.x = canvas.width/2 - spaceship.image.width/2;
                spaceship.y = canvas.height - spaceship.image.height - 20;
        }
      }
    }
  }


}

export default Bullet;
