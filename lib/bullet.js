import { incrementScore, updateLives } from './helper';

class Bullet {

  constructor(stage) {
    this.stage = stage;
  }

  static drawSpaceshipBullet(x, y) {
    let bullet = new createjs.Shape();
    bullet.graphics.beginFill("yellow").drawRect(0,0, 2, 5);
    bullet.x = x + 15;
    bullet.y = y;
    bullet.width = 2;
    bullet.height = 5;
    return bullet;
  }

  static drawAlienBullet(stage) {
    let aliens = stage.getChildByName('alienContainer').children;
    let randNum = Math.floor(Math.random() * aliens.length) + 1;
    let x = aliens[randNum].localToGlobal(0,0).x + (aliens[randNum].width/2);
    let y = aliens[randNum].localToGlobal(0,0).y + aliens[randNum].height;

    let bullet = new createjs.Shape();
    bullet.graphics.beginFill("red").drawRect(0,0,2,3);
    bullet.x = x;
    bullet.y = y;
    bullet.width = 2;
    bullet.height = 3;
    return bullet;
  }

  static moveBullets(stage, spaceship) {
    let bullets = spaceship.bullets;
    for (let i = 0; i < bullets.length; i++){
      bullets[i].y -=3;
      if (bullets[i].y < 0) {
        spaceship.bullets.splice(i, 1);
        stage.removeChild(bullets[i]);
      }
    }
  }

  static moveAlienBullets(stage, alien) {
    let bullets = alien.bullets;
    let deleteBulletIndexs = [];
    for (let i = 0; i < bullets.length; i++) {
      bullets[i].y += 1;
      if (bullets[i].y > canvas.height) {
        deleteBulletIndexs.push(i);
      }
    }
    for (let j = 0; j < deleteBulletIndexs.length; j++){
      alien.bullets.splice(j,1);
      stage.removeChild(bullets[j]);
    }
  }

  static checkHits(stage, spaceship) {
    let alienContainer = stage.getChildByName('alienContainer');
    let bullets = spaceship.bullets;
    if (alienContainer && bullets.length > 0) {
      let aliens = alienContainer.children;
      if (aliens.length == 0){
        // newWave();
      } else {
        for (let i = 0; i < bullets.length; i++){
          for (let j = 0; j < aliens.length; j++){
            let bullet = bullets[i];
            let alien = aliens[j];
            if ( bullet.y <= alien.localToGlobal(0,0).y + alien.height &&
                  bullet.x <= alien.localToGlobal(0,0).x + alien.width &&
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

  static checkIfDamaged(stage, alien) {
    let bullets = alien.bullets;
    let spaceship = stage.getChildByName("spaceship");
    if (bullets.length > 0){
      for (let i = 0; i < bullets.length; i++){
        if ( bullets[i].y + bullets[i].height >= spaceship.y &&
              bullets[i].x <= spaceship.x + spaceship.width &&
              bullets[i].x + bullets[i].width >= spaceship.x){
                //hit
                updateLives();
                alien.bullets.splice(i,1);
                stage.removeChild(bullets[i]);
                spaceship.x = canvas.width /2 - 15;
                spaceship.y = canvas.height - 30;
        }
      }
    }
  }
}

export default Bullet;
