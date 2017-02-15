import Spaceship from './spaceship';
import Alien from './alien';
import Bullet from './bullet';

class SpaceInvadersGame {

  constructor(stage, canvas) {
    this.stage = stage;
    this.canvas = canvas;
    this.handleNextKeypress = true;

    this.play = this.play.bind(this);
    this.setHeader = this.setHeader.bind(this);
    this.togglePause = this.togglePause.bind(this);
    this.toggleMute = this.toggleMute.bind(this);
    this.loadSound = this.loadSound.bind(this);
    this.setHandleNextKeypressTrue = this.setHandleNextKeypressTrue.bind(this);
    this.setHandleNextKeypressTrueAfterDelay = this.setHandleNextKeypressTrueAfterDelay.bind(this);
    this.init();
  }

  init() {
    $('.play-btn').click( () => {
      $('.welcome-screen').hide(),
      $('#canvas').show();
      this.setHeader();
      this.loadSound();
      this.play();
    });
  }

  loadSound() {
    createjs.Sound.registerSound("assets/sounds/explosion.wav", "explosion");
    createjs.Sound.registerSound("assets/sounds/invaderkilled.wav", "invaderkilled");
    createjs.Sound.registerSound("assets/sounds/shoot.wav", "shoot");
    createjs.Sound.registerSound("assets/sounds/cannon.wav", "cannon");
  }

  setHeader() {
    let pauseImg = new Image();
    pauseImg.src = 'assets/images/pause-icon.png';
    pauseImg.onload = () => {
      let pauseBM = new createjs.Bitmap(pauseImg);
      pauseBM.addEventListener('click', this.togglePause)
      pauseBM.x = canvas.width - pauseBM.image.width - 150;
      pauseBM.y = 40;
      pauseBM.scaleX = 1.5;
      pauseBM.scaleY = 1.5;
      pauseBM.name = 'pauseBM';
      this.stage.addChild(pauseBM);
    }

    let soundImg = new Image();
    soundImg.src = 'assets/images/sound-icon.png';
    soundImg.onload = () => {
      let soundBM = new createjs.Bitmap(soundImg);
      soundBM.addEventListener('click', this.toggleMute)
      soundBM.x = canvas.width - soundBM.image.width - 90;
      soundBM.y = 38;
      soundBM.scaleX = 1.8;
      soundBM.scaleY = 1.8;
      soundBM.name = 'soundBM';
      this.stage.addChild(soundBM);
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
    livesTitle.style.right = '200px';

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
    lives.style.left = '0px';
    lives.style.right = '60px';

    let levelTitle = document.createElement('div');
    levelTitle.id = 'levelTitle';
    levelTitle.innerHTML = 'Level: ';
    levelTitle.style.height = '20px';
    levelTitle.style.width = '50px';
    levelTitle.style.backgroundColor = 'black';
    levelTitle.style.color = 'yellow';
    levelTitle.style.fontWeight = 'bold';
    levelTitle.style.fontSize = '22px';
    levelTitle.style.position = "absolute";
    levelTitle.style.marginLeft = 'auto';
    levelTitle.style.marginRight = 'auto';
    levelTitle.style.marginTop = 'auto';
    levelTitle.style.marginBottom = 'auto';
    levelTitle.style.top = 0;
    levelTitle.style.bottom = '549px';
    levelTitle.style.left = '110px';
    levelTitle.style.right = '0px';

    let level = document.createElement('div');
    level.id = 'level';
    level.innerHTML = '1';
    level.style.height = '20px';
    level.style.width = '50px';
    level.style.backgroundColor = 'black';
    level.style.color = 'yellow';
    level.style.fontWeight = 'bold';
    level.style.fontSize = '22px';
    level.style.position = "absolute";
    level.style.marginLeft = 'auto';
    level.style.marginRight = 'auto';
    level.style.marginTop = 'auto';
    level.style.marginBottom = 'auto';
    level.style.top = 0;
    level.style.bottom = '549px';
    level.style.left = '250px';
    level.style.right = '0px';

    document.body.appendChild(scoreTitle);
    document.body.appendChild(score);
    document.body.appendChild(livesTitle);
    document.body.appendChild(lives);
    document.body.appendChild(levelTitle);
    document.body.appendChild(level);

    //need this
    this.stage.update();
  }

  play() {
    this.stage.removeAllChildren();
    this.spaceship = new Spaceship(this.stage);
    this.aliens = new Alien(this.stage);
    this.aliens.draw();
    this.spaceship.draw();
    createjs.Sound.muted = false;
    createjs.Ticker.removeAllEventListeners();
    createjs.Ticker.setFPS(20);
    createjs.Ticker.on("tick", () => this.handleTick());
    document.addEventListener("keydown", this.keyDown.bind(this));
  }

  handleTick() {
    if (!createjs.Ticker.getPaused()) {
      this.aliens.move();
      this.spaceship.moveBullets();
      Bullet.checkHits(this.stage, this.spaceship, this.aliens);
      Bullet.checkIfDamaged(this.stage, this.spaceship, this.aliens);
      let randomNum = Math.floor(Math.random() * 30) + 1;
      if (randomNum == 3) {
        this.aliens.fireAlienBullets();
      }
      this.aliens.moveAlienBullets();
      this.stage.update();
    }
  }

  toggleMute() {
    let isMuted = createjs.Sound.muted;
    createjs.Sound.muted = !isMuted;
    if (isMuted) {
      let muteBM = this.stage.getChildByName('muteBM');
      this.stage.removeChild(muteBM);
      let soundImg = new Image();
      soundImg.src = 'assets/images/sound-icon.png';
      soundImg.onload = () => {
        let soundBM = new createjs.Bitmap(soundImg);
        soundBM.addEventListener('click', this.toggleMute);
        soundBM.x = canvas.width - soundBM.image.width - 90;
        soundBM.y = 38;
        soundBM.scaleX = 1.8;
        soundBM.scaleY = 1.8;
        soundBM.name = "soundBM";
        this.stage.addChild(soundBM);
        this.stage.update();
      }
    } else {
      let soundBM = this.stage.getChildByName('soundBM');
      this.stage.removeChild(soundBM);
      let muteImg = new Image();
      muteImg.src = 'assets/images/mute-icon.png';
      muteImg.onload = () => {
        let muteBM = new createjs.Bitmap(muteImg);
        muteBM.addEventListener('click', this.toggleMute);
        muteBM.x = canvas.width - muteBM.image.width - 90;
        muteBM.y = 38;
        muteBM.scaleX = 1.8;
        muteBM.scaleY = 1.8;
        muteBM.name = "muteBM";
        this.stage.addChild(muteBM);
        this.stage.update();
      }
    }
  }

  togglePause() {
    let isPaused = !createjs.Ticker.getPaused();
    createjs.Ticker.setPaused(isPaused);
    if (isPaused) {
      let pauseBM = this.stage.getChildByName('pauseBM');
      this.stage.removeChild(pauseBM);
      let playImg = new Image();
      playImg.src = 'assets/images/play-icon.png';
      playImg.onload = () => {
        let playBM = new createjs.Bitmap(playImg);
        playBM.addEventListener('click', this.togglePause);
        playBM.x = canvas.width - playBM.image.width - 150;
        playBM.y = 40;
        playBM.scaleX = 1.5;
        playBM.scaleY = 1.5;
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
          pauseBM.x = canvas.width - pauseBM.image.width - 150;
          pauseBM.y = 40;
          pauseBM.scaleX = 1.5;
          pauseBM.scaleY = 1.5;
          pauseBM.name = 'pauseBM';
          this.stage.addChild(pauseBM);
          this.stage.update();
        }
    }
  }

  setHandleNextKeypressTrue() {
    this.handleNextKeypress = true;
  }

  setHandleNextKeypressTrueAfterDelay(delay) {
    setTimeout(this.setHandleNextKeypressTrue, delay);
  }

  keyDown(e) {
    let keycode = e.which || window.event.keycode;

    if(!createjs.Ticker.getPaused()) {
      if (keycode == 37) { //left
        e.preventDefault();
        this.spaceship.move(keycode);
      } else if (keycode == 39) { //right
        e.preventDefault();
        this.spaceship.move(keycode);
      } else if (keycode == 32) { //spacebar
        if (this.handleNextKeypress) {
          e.preventDefault();
          this.spaceship.fire();
          this.handleNextKeypress = false;
          this.setHandleNextKeypressTrueAfterDelay(500);
        }
      }
    }
  }

  // keyUp(e) {
  //   this.allowed = true;
  // }
}

export default SpaceInvadersGame;
