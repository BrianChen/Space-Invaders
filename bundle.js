/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _space_invaders_game = __webpack_require__(1);
	
	var _space_invaders_game2 = _interopRequireDefault(_space_invaders_game);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	document.addEventListener('DOMContentLoaded', function () {
	  var canvas = document.getElementById('canvas');
	  var stage = new createjs.Stage(canvas);
	  window.stage = stage;
	  window.canvas = canvas;
	  stage.enableMouseOver();
	  new _space_invaders_game2.default(stage, canvas);
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _spaceship = __webpack_require__(2);
	
	var _spaceship2 = _interopRequireDefault(_spaceship);
	
	var _alien = __webpack_require__(5);
	
	var _alien2 = _interopRequireDefault(_alien);
	
	var _bullet = __webpack_require__(3);
	
	var _bullet2 = _interopRequireDefault(_bullet);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SpaceInvadersGame = function () {
	  function SpaceInvadersGame(stage, canvas) {
	    _classCallCheck(this, SpaceInvadersGame);
	
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
	
	  _createClass(SpaceInvadersGame, [{
	    key: 'init',
	    value: function init() {
	      var _this = this;
	
	      $('.play-btn').click(function () {
	        $('.welcome-screen').hide(), $('#canvas').show();
	        _this.setHeader();
	        _this.loadSound();
	        _this.play();
	      });
	    }
	  }, {
	    key: 'loadSound',
	    value: function loadSound() {
	      createjs.Sound.registerSound("assets/sounds/explosion.wav", "explosion");
	      createjs.Sound.registerSound("assets/sounds/invaderkilled.wav", "invaderkilled");
	      createjs.Sound.registerSound("assets/sounds/shoot.wav", "shoot");
	      createjs.Sound.registerSound("assets/sounds/cannon.wav", "cannon");
	    }
	  }, {
	    key: 'setHeader',
	    value: function setHeader() {
	      var _this2 = this;
	
	      var pauseImg = new Image();
	      pauseImg.src = 'assets/images/pause-icon.png';
	      pauseImg.onload = function () {
	        var pauseBM = new createjs.Bitmap(pauseImg);
	        pauseBM.addEventListener('click', _this2.togglePause);
	        pauseBM.x = canvas.width - pauseBM.image.width - 150;
	        pauseBM.y = 40;
	        pauseBM.scaleX = 1.5;
	        pauseBM.scaleY = 1.5;
	        pauseBM.name = 'pauseBM';
	        _this2.stage.addChild(pauseBM);
	      };
	
	      var soundImg = new Image();
	      soundImg.src = 'assets/images/sound-icon.png';
	      soundImg.onload = function () {
	        var soundBM = new createjs.Bitmap(soundImg);
	        soundBM.addEventListener('click', _this2.toggleMute);
	        soundBM.x = canvas.width - soundBM.image.width - 90;
	        soundBM.y = 38;
	        soundBM.scaleX = 1.8;
	        soundBM.scaleY = 1.8;
	        soundBM.name = 'soundBM';
	        _this2.stage.addChild(soundBM);
	      };
	
	      var scoreTitle = document.createElement('div');
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
	
	      var score = document.createElement('div');
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
	
	      var livesTitle = document.createElement('div');
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
	
	      var lives = document.createElement('div');
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
	
	      var levelTitle = document.createElement('div');
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
	
	      var level = document.createElement('div');
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
	
	      this.stage.update();
	    }
	  }, {
	    key: 'play',
	    value: function play() {
	      var _this3 = this;
	
	      this.stage.removeAllChildren();
	      this.spaceship = new _spaceship2.default(this.stage);
	      this.aliens = new _alien2.default(this.stage);
	      this.aliens.draw();
	      this.spaceship.draw();
	      createjs.Sound.muted = false;
	      createjs.Ticker.setPaused(false);
	      createjs.Ticker.removeAllEventListeners();
	      createjs.Ticker.setFPS(20);
	      createjs.Ticker.on("tick", function () {
	        return _this3.handleTick();
	      });
	      document.addEventListener("keydown", this.keyDown.bind(this));
	    }
	  }, {
	    key: 'handleTick',
	    value: function handleTick() {
	      if (!createjs.Ticker.getPaused()) {
	        this.aliens.move();
	        this.spaceship.moveBullets();
	        _bullet2.default.checkHits(this.stage, this.spaceship, this.aliens);
	        _bullet2.default.checkIfDamaged(this.stage, this.spaceship, this.aliens);
	        var randomNum = Math.floor(Math.random() * 30) + 1;
	        if (randomNum == 3) {
	          this.aliens.fireAlienBullets();
	        }
	        this.aliens.moveAlienBullets();
	        this.stage.update();
	      }
	    }
	  }, {
	    key: 'toggleMute',
	    value: function toggleMute() {
	      var _this4 = this;
	
	      var isMuted = createjs.Sound.muted;
	      createjs.Sound.muted = !isMuted;
	      if (isMuted) {
	        (function () {
	          var muteBM = _this4.stage.getChildByName('muteBM');
	          _this4.stage.removeChild(muteBM);
	          var soundImg = new Image();
	          soundImg.src = 'assets/images/sound-icon.png';
	          soundImg.onload = function () {
	            var soundBM = new createjs.Bitmap(soundImg);
	            soundBM.addEventListener('click', _this4.toggleMute);
	            soundBM.x = canvas.width - soundBM.image.width - 90;
	            soundBM.y = 38;
	            soundBM.scaleX = 1.8;
	            soundBM.scaleY = 1.8;
	            soundBM.name = "soundBM";
	            _this4.stage.addChild(soundBM);
	            _this4.stage.update();
	          };
	        })();
	      } else {
	        (function () {
	          var soundBM = _this4.stage.getChildByName('soundBM');
	          _this4.stage.removeChild(soundBM);
	          var muteImg = new Image();
	          muteImg.src = 'assets/images/mute-icon.png';
	          muteImg.onload = function () {
	            var muteBM = new createjs.Bitmap(muteImg);
	            muteBM.addEventListener('click', _this4.toggleMute);
	            muteBM.x = canvas.width - muteBM.image.width - 90;
	            muteBM.y = 38;
	            muteBM.scaleX = 1.8;
	            muteBM.scaleY = 1.8;
	            muteBM.name = "muteBM";
	            _this4.stage.addChild(muteBM);
	            _this4.stage.update();
	          };
	        })();
	      }
	    }
	  }, {
	    key: 'togglePause',
	    value: function togglePause() {
	      var _this5 = this;
	
	      var isPaused = !createjs.Ticker.getPaused();
	      createjs.Ticker.setPaused(isPaused);
	      if (isPaused) {
	        (function () {
	          var pauseBM = _this5.stage.getChildByName('pauseBM');
	          _this5.stage.removeChild(pauseBM);
	          var playImg = new Image();
	          playImg.src = 'assets/images/play-icon.png';
	          playImg.onload = function () {
	            var playBM = new createjs.Bitmap(playImg);
	            playBM.addEventListener('click', _this5.togglePause);
	            playBM.x = canvas.width - playBM.image.width - 150;
	            playBM.y = 40;
	            playBM.scaleX = 1.5;
	            playBM.scaleY = 1.5;
	            playBM.name = "playBM";
	            _this5.stage.addChild(playBM);
	            _this5.stage.update();
	          };
	        })();
	      } else {
	        (function () {
	          var playBM = _this5.stage.getChildByName('playBM');
	          _this5.stage.removeChild(playBM);
	          var pauseImg = new Image();
	          pauseImg.src = 'assets/images/pause-icon.png';
	          pauseImg.onload = function () {
	            var pauseBM = new createjs.Bitmap(pauseImg);
	            pauseBM.addEventListener('click', _this5.togglePause);
	            pauseBM.x = canvas.width - pauseBM.image.width - 150;
	            pauseBM.y = 40;
	            pauseBM.scaleX = 1.5;
	            pauseBM.scaleY = 1.5;
	            pauseBM.name = 'pauseBM';
	            _this5.stage.addChild(pauseBM);
	            _this5.stage.update();
	          };
	        })();
	      }
	    }
	  }, {
	    key: 'setHandleNextKeypressTrue',
	    value: function setHandleNextKeypressTrue() {
	      this.handleNextKeypress = true;
	    }
	  }, {
	    key: 'setHandleNextKeypressTrueAfterDelay',
	    value: function setHandleNextKeypressTrueAfterDelay(delay) {
	      setTimeout(this.setHandleNextKeypressTrue, delay);
	    }
	  }, {
	    key: 'keyDown',
	    value: function keyDown(e) {
	      var keycode = e.which || window.event.keycode;
	
	      if (!createjs.Ticker.getPaused()) {
	        if (keycode == 37) {
	          //left
	          e.preventDefault();
	          this.spaceship.move(keycode);
	        } else if (keycode == 39) {
	          //right
	          e.preventDefault();
	          this.spaceship.move(keycode);
	        } else if (keycode == 32) {
	          //spacebar
	          if (this.handleNextKeypress) {
	            e.preventDefault();
	            this.spaceship.fire();
	            this.handleNextKeypress = false;
	            this.setHandleNextKeypressTrueAfterDelay(300);
	          }
	        }
	      }
	    }
	  }]);
	
	  return SpaceInvadersGame;
	}();
	
	exports.default = SpaceInvadersGame;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _bullet = __webpack_require__(3);
	
	var _bullet2 = _interopRequireDefault(_bullet);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Spaceship = function () {
	  function Spaceship(stage) {
	    _classCallCheck(this, Spaceship);
	
	    this.stage = stage;
	    this.bullets = [];
	  }
	
	  _createClass(Spaceship, [{
	    key: "draw",
	    value: function draw() {
	      var _this = this;
	
	      var img = new Image();
	      img.src = "assets/images/spaceship.png";
	      img.onload = function () {
	        var bitmap = new createjs.Bitmap(img);
	        bitmap.x = _this.x = canvas.width / 2 - bitmap.image.width / 2;
	        bitmap.y = _this.y = canvas.height - bitmap.image.height - 20;
	        bitmap.name = "spaceship";
	        _this.stage.addChild(bitmap);
	        _this.stage.update();
	      };
	    }
	  }, {
	    key: "resetPosition",
	    value: function resetPosition() {
	      var spaceship = this.stage.getChildByName('spaceship');
	      spaceship.x = this.x = canvas.width / 2 - spaceship.image.width / 2;
	      spaceship.y = this.y = canvas.height - spaceship.image.height - 20;
	      this.stage.update();
	    }
	  }, {
	    key: "move",
	    value: function move(keycode) {
	      var spaceship = this.stage.getChildByName("spaceship");
	
	      if (keycode == 37) {
	        //left 37
	        if (spaceship.x > 40) {
	          spaceship.x -= 20;
	          this.x = spaceship.x;
	        }
	      } else if (keycode == 39) {
	        //right 39
	        if (spaceship.x < canvas.width - spaceship.image.width - 40) {
	          spaceship.x += 20;
	          this.x = spaceship.x;
	        }
	      }
	      this.stage.update();
	    }
	  }, {
	    key: "fire",
	    value: function fire() {
	      var bullet = _bullet2.default.drawSpaceshipBullet(this.x, this.y);
	      this.bullets.push(bullet);
	      this.stage.addChild(bullet);
	      this.stage.update();
	    }
	  }, {
	    key: "moveBullets",
	    value: function moveBullets() {
	      for (var i = 0; i < this.bullets.length; i++) {
	        this.bullets[i].y -= 30;
	        if (this.bullets[i].y < 200) {
	          stage.removeChild(this.bullets[i]);
	          this.bullets.splice(i, 1);
	        }
	      }
	    }
	  }, {
	    key: "removeAllBullets",
	    value: function removeAllBullets() {
	      for (var i = 0; i < this.bullets.length; i++) {
	        stage.removeChild(this.bullets[i]);
	      }
	      this.bullets = [];
	    }
	  }]);
	
	  return Spaceship;
	}();
	
	exports.default = Spaceship;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _helper = __webpack_require__(4);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Bullet = function () {
	  function Bullet(stage) {
	    _classCallCheck(this, Bullet);
	
	    this.stage = stage;
	  }
	
	  _createClass(Bullet, null, [{
	    key: 'drawSpaceshipBullet',
	    value: function drawSpaceshipBullet(x, y) {
	      var bullet = new createjs.Bitmap('assets/images/missle.png');
	      bullet.x = x + 40;
	      bullet.y = y - 40;
	      bullet.scaleX = 2;
	      bullet.scaleY = 2;
	      bullet.name = 'spaceshipBullet';
	      createjs.Sound.play("cannon");
	      return bullet;
	    }
	  }, {
	    key: 'drawAlienBullet',
	    value: function drawAlienBullet(stage) {
	      var aliens = stage.getChildByName('alienContainer').children;
	      var randNum = Math.floor(Math.random() * aliens.length) + 1;
	      var x = aliens[randNum].localToGlobal(0, 0).x + aliens[randNum].image.width / 2;
	      var y = aliens[randNum].localToGlobal(0, 0).y + aliens[randNum].image.height;
	
	      createjs.Sound.play("shoot");
	      var bullet = new createjs.Bitmap('assets/images/alien-bullet.png');
	
	      bullet.setBounds(x, y, bullet.image.width, bullet.image.height);
	      bullet.x = x;
	      bullet.y = y;
	      bullet.scaleX = 2;
	      bullet.scaleY = 2;
	      bullet.width = 2;
	      bullet.height = 3;
	      return bullet;
	    }
	  }, {
	    key: 'checkHits',
	    value: function checkHits(stage, spaceship, alien) {
	      var alienContainer = stage.getChildByName('alienContainer');
	      var bullets = spaceship.bullets;
	      if (alienContainer && bullets.length > 0) {
	        var aliens = alienContainer.children;
	        if (aliens.length == 0) {
	          stage.removeChild(alien.aliens);
	          (0, _helper.nextLevel)(stage, spaceship, alien);
	        } else {
	          for (var i = 0; i < aliens.length; i++) {
	            for (var j = 0; j < bullets.length; j++) {
	              var _alien = aliens[i];
	              var bullet = bullets[j];
	              if ((0, _helper.collisionTest)(_alien, bullet)) {
	                (0, _helper.incrementScore)();
	                spaceship.bullets.splice(j, 1);
	                alienContainer.removeChild(_alien);
	                stage.removeChild(bullet);
	                createjs.Sound.play("invaderkilled");
	              }
	            }
	          }
	        }
	      }
	    }
	  }, {
	    key: 'checkIfDamaged',
	    value: function checkIfDamaged(stage, spaceshipClass, alien) {
	      var bullets = alien.bullets;
	      var spaceship = stage.getChildByName("spaceship");
	      if (bullets.length > 0) {
	        for (var i = 0; i < bullets.length; i++) {
	          if (bullets[i].y + bullets[i].image.height >= spaceship.y && bullets[i].x <= spaceship.x + spaceship.image.width && bullets[i].x + bullets[i].image.width >= spaceship.x) {
	            //hit
	            createjs.Sound.play("explosion");
	            (0, _helper.updateLives)(stage);
	            stage.update();
	            stage.removeChild(bullets[i]);
	            alien.bullets.splice(i, 1);
	            spaceship.x = canvas.width / 2 - spaceship.image.width / 2;
	            spaceship.y = canvas.height - spaceship.image.height - 20;
	          }
	        }
	      }
	    }
	  }]);
	
	  return Bullet;
	}();
	
	exports.default = Bullet;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var incrementScore = function incrementScore() {
	  var score = $('#score').html();
	  var newScore = parseInt(score) + 100;
	  $('#score').html(newScore.toString());
	};
	
	var nextLevel = function nextLevel(stage, spaceship, alien) {
	  spaceship.removeAllBullets();
	  alien.removeAllAlienBullets();
	  spaceship.resetPosition();
	  var newLevel = parseInt($('#level').html()) + 1;
	  $('#level').html(newLevel.toString());
	  delayTicker(1000);
	  alien.moveRate += 3;
	  alien.draw();
	};
	
	var updateLives = function updateLives(stage) {
	  var lives = $('#lives').html();
	  var newLives = parseInt(lives) - 1;
	  if (newLives === 0) {
	    (function () {
	      $('#lives').html(newLives.toString());
	      stage.removeAllChildren();
	      createjs.Ticker.paused = true;
	      var text = new createjs.Text("Game Over", "100px Arial", "#ff7700");
	      text.x = canvas.width / 2 - 260;
	      text.y = canvas.height / 2 - 100;
	      var tryAgain = new createjs.Text("try again!", "50px Arial", "white");
	      tryAgain.cursor = "pointer";
	      tryAgain.addEventListener("mouseover", function () {
	        tryAgain.color = "yellow";
	      });
	      tryAgain.addEventListener("mouseout", function () {
	        tryAgain.color = "white";
	      });
	      tryAgain.addEventListener("click", function () {
	        $('#canvas').hide(), $('.welcome-screen').show();
	        $('#scoreTitle').remove();
	        $('#score').remove();
	        $('#lives').remove();
	        $('#livesTitle').remove();
	        $('#levelTitle').remove();
	        $('#level').remove();
	      });
	      tryAgain.x = canvas.width / 2 - 100;
	      tryAgain.y = canvas.width / 2;
	      stage.addChild(text, tryAgain);
	    })();
	  } else {
	    $('#lives').html(newLives.toString());
	  }
	  createjs.Ticker.setPaused(true);
	  delayTicker(1000);
	};
	
	var delayTicker = function delayTicker(delay) {
	  var startTime = createjs.Ticker.getTime();
	  while (1) {
	    if (createjs.Ticker.getTime() - startTime > delay) {
	      break;
	    }
	  }
	  createjs.Ticker.setPaused(false);
	};
	
	var collisionTest = function collisionTest(alien, bullet) {
	  var alienX1 = alien.localToGlobal(0, 0).x;
	  var alienX2 = alien.localToGlobal(0, 0).x + alien.image.width * 2;
	  var alienY1 = alien.localToGlobal(0, 0).y;
	  var alienY2 = alien.localToGlobal(0, 0).y + alien.image.height * 2;
	
	  var bulletX1 = bullet.x;
	  var bulletX2 = bullet.x + bullet.image.width * 2;
	  var bulletY1 = bullet.y;
	  var bulletY2 = bullet.y + bullet.image.height * 2;
	
	  if ((bulletX1 >= alienX1 && bulletX1 <= alienX2 || bulletX2 >= alienX1 && bulletX2 <= alienX2) && (bulletY1 <= alienY2 && bulletY1 >= alienY1 || bulletY2 <= alienY2 && bulletY2 >= alienY1)) {
	    return true;
	  } else {
	    return false;
	  }
	};
	
	exports.incrementScore = incrementScore;
	exports.nextLevel = nextLevel;
	exports.updateLives = updateLives;
	exports.collisionTest = collisionTest;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _bullet = __webpack_require__(3);
	
	var _bullet2 = _interopRequireDefault(_bullet);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Alien = function () {
	  function Alien(stage) {
	    _classCallCheck(this, Alien);
	
	    this.stage = stage;
	    this.right = true;
	    this.bullets = [];
	    this.moveRate = 2;
	  }
	
	  _createClass(Alien, [{
	    key: 'draw',
	    value: function draw() {
	      this.aliens = new createjs.Container();
	      this.aliens.name = "alienContainer";
	
	      for (var i = 0; i < 5; i++) {
	        for (var j = 0; j < 11; j++) {
	          var x = j * 75;
	          var y = i * 75;
	          var bitmap = void 0;
	          if (i < 2) {
	            bitmap = new createjs.Bitmap('assets/images/alien2.png');
	          } else if (i < 4) {
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
	      this.aliens.x = canvas.width / 2 - 400;
	      this.aliens.y = 200;
	      this.stage.addChild(this.aliens);
	      this.stage.update();
	    }
	  }, {
	    key: 'move',
	    value: function move() {
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
	  }, {
	    key: 'fireAlienBullets',
	    value: function fireAlienBullets() {
	      var bullet = _bullet2.default.drawAlienBullet(this.stage);
	      this.bullets.push(bullet);
	      this.stage.addChild(bullet);
	      this.stage.update();
	    }
	  }, {
	    key: 'moveAlienBullets',
	    value: function moveAlienBullets() {
	      for (var i = 0; i < this.bullets.length; i++) {
	        if (this.bullets[i].y > canvas.height - 20) {
	          stage.removeChild(this.bullets[i]);
	          this.bullets.splice(i, 1);
	        }
	        this.bullets[i].y += 30;
	      }
	    }
	  }, {
	    key: 'removeAllAlienBullets',
	    value: function removeAllAlienBullets() {
	      for (var i = 0; i < this.bullets; i++) {
	        stage.removeChild(this.bullets[i]);
	      }
	      this.bullets = [];
	    }
	  }]);
	
	  return Alien;
	}();
	
	exports.default = Alien;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map