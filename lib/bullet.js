import { incrementScore, updateLives, collisionTest } from './helper';

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
    return bullet;
  }

  static drawAlienBullet(stage) {
    let aliens = stage.getChildByName('alienContainer').children;
    let randNum = Math.floor(Math.random() * aliens.length) + 1;
    let x = aliens[randNum].localToGlobal(0,0).x + (aliens[randNum].image.width/2);
    let y = aliens[randNum].localToGlobal(0,0).y + aliens[randNum].image.height;

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

  static moveBullets(stage, spaceship) {
    let bullets = spaceship.bullets;
    for (let i = 0; i < bullets.length; i++){
      bullets[i].y -=30;
      if (bullets[i].y < 200) {
        stage.removeChild(bullets[i]);
        spaceship.bullets.splice(i, 1);
      }
    }
  }

  static moveAlienBullets(stage, alien) {
    let bullets = alien.bullets;
    let deleteBulletIndexs = [];

    for (let i = 0; i < bullets.length; i++) {
      if (bullets[i].y > canvas.height - 20) {
        stage.removeChild(bullets[i]);
        alien.bullets.splice(i,1);
      }
      bullets[i].y += 10;
    }
  }

  static checkHits(stage, spaceship, alien) {
    let alienContainer = stage.getChildByName('alienContainer');
    let bullets = spaceship.bullets;
    if (alienContainer && bullets.length > 0) {
      let aliens = alienContainer.children;
      if (aliens.length == 0){
        stage.removeChild(alien.aliens);
        alien.draw();
      } else {
        for (let i = 0; i < bullets.length; i++){
          for (let j = 0; j < aliens.length; j++){
            let bullet = bullets[i];
            let alien = aliens[j];
            if ( bullet.y <= alien.localToGlobal(0,0).y + alien.image.height &&
                  bullet.x <= alien.localToGlobal(0,0).x + alien.image.width &&
                  bullet.x >= alien.localToGlobal(0,0).x){
                    incrementScore();
                    spaceship.bullets.splice(i, 1);
                    alienContainer.removeChild(alien);
                    stage.removeChild(bullet);
            }
          }
        }
      }
    }
  }

  // static checkHits(stage, spaceship, alien) {
  //   let alienContainer = stage.getChildByName('alienContainer');
  //   let bullets = spaceship.bullets;
  //   if (alienContainer && bullets.length > 0) {
  //     let aliens = alienContainer.children;
  //     if (aliens.length == 0) {
  //       stage.removeChild(alien.aliens);
  //       alien.draw(4);
  //     } else {
  //       //checking each alien - hitTest
  //       for (let i = 0; i < aliens.length; i++) {
  //         for (let j = 0; j < bullets.length; j++) {
  //           let alien = aliens[i];
  //           let bullet = bullets[j];
  //           if (collisionTest(alien, bullet)) {
  //             incrementScore();
  //             spaceship.bullets.splice(j, 1);
  //             alienContainer.removeChild(alien);
  //             stage.removeChild(bullet);
  //           }
  //         }
  //       }
  //     }
  //   }
  // }

  static checkIfDamaged(stage, alien) {
    let bullets = alien.bullets;
    let spaceship = stage.getChildByName("spaceship");
    if (bullets.length > 0) {
      for (let i = 0; i < bullets.length; i++) {
        if ( bullets[i].y + bullets[i].image.height >= spaceship.y &&
              bullets[i].x <= spaceship.x + spaceship.image.width &&
              bullets[i].x + bullets[i].image.width >= spaceship.x) {
                //hit
                updateLives(stage);
                stage.removeChild(bullets[i]);
                alien.bullets.splice(i,1);
                spaceship.x = canvas.width/2 - spaceship.image.width/2;
                spaceship.y = canvas.height - spaceship.image.height - 20;
        }
      }
    }
  }

  static removeAllBullets(stage, spaceship, alien) {

  }
}

export default Bullet;
