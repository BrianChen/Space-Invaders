import Spaceship from './spaceship';
import Alien from './alien';
import Bullet from './bullet';

class SpaceInvadersGame {

  constructor(stage, canvas) {
    this.stage = stage;
    this.canvas = canvas;
    this.pressedKeys = {};

    this.play = this.play.bind(this);
    this.setHeader = this.setHeader.bind(this);
    this.togglePause = this.togglePause.bind(this);
    this.init();
  }

  init() {
    $('.play-btn').click( () => {
      $('.welcome-screen').hide(),
      $('#canvas').show();
      this.setHeader();
      this.play();
    });
  }

  setHeader() {
    let pauseImg = new Image();
    pauseImg.src = 'assets/images/pause-icon.png';
    pauseImg.onload = () => {
      let pauseBM = new createjs.Bitmap(pauseImg);
      pauseBM.addEventListener('click', this.togglePause)
      pauseBM.x = canvas.width - pauseBM.image.width - 40;
      pauseBM.y = 20;
      pauseBM.name = 'pauseBM';
      this.stage.addChild(pauseBM);
    }

    let scoreTitle = document.createElement('div');
    scoreTitle.id = 'scoreTitle';
    scoreTitle.innerHTML = 'Score: ';
    scoreTitle.style.height = '20px';
    scoreTitle.style.width = '50px';
    scoreTitle.style.backgroundColor = 'black';
    scoreTitle.style.color = 'yellow';
    scoreTitle.style.fontWeight = 'bold';
    scoreTitle.style.fontSize = '22px';
    scoreTitle.style.position = "absolute";
    scoreTitle.style.marginLeft = 'auto';
    scoreTitle.style.marginRight = 'auto';
    scoreTitle.style.marginTop = 'auto';
    scoreTitle.style.marginBottom = 'auto';
    scoreTitle.style.top = 0;
    scoreTitle.style.bottom = '549px';
    scoreTitle.style.left = 0;
    scoreTitle.style.right = '512px';

    let score = document.createElement('div');
    score.id = 'score';
    score.innerHTML = '0';
    score.style.height = '20px';
    score.style.width = '50px';
    score.style.backgroundColor = 'black';
    score.style.color = 'yellow';
    score.style.fontWeight = 'bold';
    score.style.fontSize = '22px';
    score.style.position = "absolute";
    score.style.marginLeft = 'auto';
    score.style.marginRight = 'auto';
    score.style.marginTop = 'auto';
    score.style.marginBottom = 'auto';
    score.style.top = 0;
    score.style.bottom = '549px';
    score.style.left = 0;
    score.style.right = '371px';

    let livesTitle = document.createElement('div');
    livesTitle.id = 'livesTitle';
    livesTitle.innerHTML = 'Lives: ';
    livesTitle.style.height = '20px';
    livesTitle.style.width = '50px';
    livesTitle.style.backgroundColor = 'black';
    livesTitle.style.color = 'yellow';
    livesTitle.style.fontWeight = 'bold';
    livesTitle.style.fontSize = '22px';
    livesTitle.style.position = "absolute";
    livesTitle.style.marginLeft = 'auto';
    livesTitle.style.marginRight = 'auto';
    livesTitle.style.marginTop = 'auto';
    livesTitle.style.marginBottom = 'auto';
    livesTitle.style.top = 0;
    livesTitle.style.bottom = '549px';
    livesTitle.style.left = 0;
    livesTitle.style.right = '89px';

    let lives = document.createElement('div');
    lives.id = 'lives';
    lives.innerHTML = '3';
    lives.style.height = '20px';
    lives.style.width = '50px';
    lives.style.backgroundColor = 'black';
    lives.style.color = 'yellow';
    lives.style.fontWeight = 'bold';
    lives.style.fontSize = '22px';
    lives.style.position = "absolute";
    lives.style.marginLeft = 'auto';
    lives.style.marginRight = 'auto';
    lives.style.marginTop = 'auto';
    lives.style.marginBottom = 'auto';
    lives.style.top = 0;
    lives.style.bottom = '549px';
    lives.style.left = '50px';
    lives.style.right = '0px';

    document.body.appendChild(scoreTitle);
    document.body.appendChild(score);
    document.body.appendChild(livesTitle);
    document.body.appendChild(lives);

    //need this
    this.stage.update();
  }

  play() {
    this.stage.removeAllChildren();
    this.spaceship = new Spaceship(this.stage);
    this.aliens = new Alien(this.stage);
    this.aliens.draw();
    this.spaceship.draw();
    createjs.Ticker.setFPS(20);
    createjs.Ticker.on("tick", () => this.handleTick());
    document.addEventListener("keydown", this.keyDown.bind(this));
  }

  handleTick() {
    if (!createjs.Ticker.getPaused()) {
      this.aliens.move();
      Bullet.moveBullets(this.stage, this.spaceship);
      Bullet.checkHits(this.stage, this.spaceship, this.aliens);
      Bullet.checkIfDamaged(this.stage, this.aliens);
      let randomNum = Math.floor(Math.random() * 30) + 1;
      if (randomNum == 3) {
        this.aliens.fireAlienBullets();
      }
      Bullet.moveAlienBullets(this.stage, this.aliens);
      this.stage.update();
    }
  }

  togglePause() {
    let isPaused = !createjs.Ticker.getPaused();
    createjs.Ticker.setPaused(isPaused);
    if (isPaused) {
      let pauseBM = this.stage.getChildByName('pauseBM')
      this.stage.removeChild(pauseBM);
      let playImg = new Image();
      playImg.src = 'assets/images/play-icon.png';
      playImg.onload = () => {
        let playBM = new createjs.Bitmap(playImg);
        playBM.addEventListener('click', this.togglePause);
        playBM.x = canvas.width - playBM.image.width - 40;
        playBM.y = 40;
        playBM.name = "playBM";
        this.stage.addChild(playBM);
        this.stage.update();
      }
    } else {
        let playBM = this.stage.getChildByName('playBM');
        this.stage.removeChild(playBM);
        let pauseImg = new Image();
        pauseImg.src = 'assets/images/pause-icon.png';
        pauseImg.onload = () => {
          let pauseBM = new createjs.Bitmap(pauseImg);
          pauseBM.addEventListener('click', this.togglePause);
          pauseBM.x = canvas.width - pauseBM.image.width - 40;
          pauseBM.y = 40;
          pauseBM.name = 'pauseBM';
          this.stage.addChild(pauseBM);
          this.stage.update();
        }
    }
  }

  keyDown(e) {
    let keycode = e.which || window.event.keycode;

    if (!createjs.Ticker.getPaused()) {
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
  }
}

export default SpaceInvadersGame;
