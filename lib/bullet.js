class Bullet {

  constructor(stage, x, y) {
    this.stage = stage;
    this.x = x;
    this.y = y;
  }

  draw() {
    let bulletContainer;
    if (this.stage.getChildByName('bulletContainer')) {
      bulletContainer = this.stage.getChildByName('bulletContainer');
    } else {
      bulletContainer = new createjs.Container();
      bulletContainer.name = 'bulletContainer';
    }

    let bulletShape = new createjs.Shape();
    bulletShape.graphics.beginFill("yellow").drawRect(this.x+15,this.y,2,5);
    bulletContainer.addChild(bulletShape);
    this.stage.addChild(bulletContainer);
    this.stage.update();
  }

  static moveBullets(stage) {
    if (stage.getChildByName('bulletContainer')) {
      let bullets = stage.getChildByName('bulletContainer').children;
      for (let i = 0; i < bullets.length; i++) {
        bullets[i].y -= 15;
      }
    }
  }
}

export default Bullet;
