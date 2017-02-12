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
	    this.pressedKeys = {};
	
	    this.play = this.play.bind(this);
	    this.setHeader = this.setHeader.bind(this);
	    this.togglePause = this.togglePause.bind(this);
	    this.init();
	  }
	
	  _createClass(SpaceInvadersGame, [{
	    key: 'init',
	    value: function init() {
	      var _this = this;
	
	      $('.play-btn').click(function () {
	        $('.welcome-screen').hide(), $('#canvas').show();
	        _this.setHeader();
	        _this.play();
	      });
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
	        pauseBM.x = canvas.width - pauseBM.image.width - 40;
	        pauseBM.y = 20;
	        pauseBM.name = 'pauseBM';
	        _this2.stage.addChild(pauseBM);
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
	      livesTitle.style.right = '89px';
	
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
	      lives.style.left = '50px';
	      lives.style.right = '0px';
	
	      document.body.appendChild(scoreTitle);
	      document.body.appendChild(score);
	      document.body.appendChild(livesTitle);
	      document.body.appendChild(lives);
	
	      //need this
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
	        _bullet2.default.moveBullets(this.stage, this.spaceship);
	        _bullet2.default.checkHits(this.stage, this.spaceship, this.aliens);
	        _bullet2.default.checkIfDamaged(this.stage, this.aliens);
	        var randomNum = Math.floor(Math.random() * 30) + 1;
	        if (randomNum == 3) {
	          this.aliens.fireAlienBullets();
	        }
	        _bullet2.default.moveAlienBullets(this.stage, this.aliens);
	        this.stage.update();
	      }
	    }
	  }, {
	    key: 'togglePause',
	    value: function togglePause() {
	      var _this4 = this;
	
	      var isPaused = !createjs.Ticker.getPaused();
	      createjs.Ticker.setPaused(isPaused);
	      if (isPaused) {
	        (function () {
	          var pauseBM = _this4.stage.getChildByName('pauseBM');
	          _this4.stage.removeChild(pauseBM);
	          var playImg = new Image();
	          playImg.src = 'assets/images/play-icon.png';
	          playImg.onload = function () {
	            var playBM = new createjs.Bitmap(playImg);
	            playBM.addEventListener('click', _this4.togglePause);
	            playBM.x = canvas.width - playBM.image.width - 40;
	            playBM.y = 40;
	            playBM.name = "playBM";
	            _this4.stage.addChild(playBM);
	            _this4.stage.update();
	          };
	        })();
	      } else {
	        (function () {
	          var playBM = _this4.stage.getChildByName('playBM');
	          _this4.stage.removeChild(playBM);
	          var pauseImg = new Image();
	          pauseImg.src = 'assets/images/pause-icon.png';
	          pauseImg.onload = function () {
	            var pauseBM = new createjs.Bitmap(pauseImg);
	            pauseBM.addEventListener('click', _this4.togglePause);
	            pauseBM.x = canvas.width - pauseBM.image.width - 40;
	            pauseBM.y = 40;
	            pauseBM.name = 'pauseBM';
	            _this4.stage.addChild(pauseBM);
	            _this4.stage.update();
	          };
	        })();
	      }
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
	          e.preventDefault();
	          this.spaceship.fire();
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
	      return bullet;
	    }
	  }, {
	    key: 'drawAlienBullet',
	    value: function drawAlienBullet(stage) {
	      var aliens = stage.getChildByName('alienContainer').children;
	      var randNum = Math.floor(Math.random() * aliens.length) + 1;
	      var x = aliens[randNum].localToGlobal(0, 0).x + aliens[randNum].image.width / 2;
	      var y = aliens[randNum].localToGlobal(0, 0).y + aliens[randNum].image.height;
	
	      var bullet = new createjs.Bitmap('/assets/images/alienbullet.png');
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
	    key: 'moveBullets',
	    value: function moveBullets(stage, spaceship) {
	      var bullets = spaceship.bullets;
	      for (var i = 0; i < bullets.length; i++) {
	        bullets[i].y -= 30;
	        if (bullets[i].y < 200) {
	          stage.removeChild(bullets[i]);
	          spaceship.bullets.splice(i, 1);
	        }
	      }
	    }
	  }, {
	    key: 'moveAlienBullets',
	    value: function moveAlienBullets(stage, alien) {
	      var bullets = alien.bullets;
	      var deleteBulletIndexs = [];
	
	      for (var i = 0; i < bullets.length; i++) {
	        if (bullets[i].y > canvas.height - 20) {
	          stage.removeChild(bullets[i]);
	          alien.bullets.splice(i, 1);
	        }
	        bullets[i].y += 10;
	      }
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
	          alien.draw();
	        } else {
	          for (var i = 0; i < bullets.length; i++) {
	            for (var j = 0; j < aliens.length; j++) {
	              var bullet = bullets[i];
	              var _alien = aliens[j];
	              if (bullet.y <= _alien.localToGlobal(0, 0).y + _alien.image.height && bullet.x <= _alien.localToGlobal(0, 0).x + _alien.image.width && bullet.x >= _alien.localToGlobal(0, 0).x) {
	                (0, _helper.incrementScore)();
	                spaceship.bullets.splice(i, 1);
	                alienContainer.removeChild(_alien);
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
	
	  }, {
	    key: 'checkIfDamaged',
	    value: function checkIfDamaged(stage, alien) {
	      var bullets = alien.bullets;
	      var spaceship = stage.getChildByName("spaceship");
	      if (bullets.length > 0) {
	        for (var i = 0; i < bullets.length; i++) {
	          if (bullets[i].y + bullets[i].image.height >= spaceship.y && bullets[i].x <= spaceship.x + spaceship.image.width && bullets[i].x + bullets[i].image.width >= spaceship.x) {
	            //hit
	            (0, _helper.updateLives)(stage);
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
	
	// const newWave = (stage) => {
	//   stage.
	// }
	
	var gotHit = function gotHit() {};
	
	var updateLives = function updateLives(stage) {
	  var lives = $('#lives').html();
	  var newLives = parseInt(lives) - 1;
	  if (newLives === 0) {
	    $('#lives').html(newLives.toString());
	    stage.removeAllChildren();
	    var text = new createjs.Text("Game Over", "20px Arial", "#ff7700");
	    text.x = canvas.width / 2 - 50;
	    text.y = canvas.height / 2 - 20;
	    stage.addChild(text);
	    stage.update();
	  } else {
	    $('#lives').html(newLives.toString());
	  }
	  createjs.Ticker.setPaused(true);
	  var delay = 500;
	  var startTime = createjs.Ticker.getTime();
	  while (1) {
	    if (createjs.Ticker.getTime() - startTime > delay) {
	      break;
	    }
	  }
	  createjs.Ticker.setPaused(false);
	};
	
	var gameOver = function gameOver() {};
	
	var collisionTest = function collisionTest(alien, bullet) {
	  var alienX1 = alien.localToGlobal(0, 0).x;
	  var alienX2 = alien.localToGlobal(0, 0).x + alien.image.width;
	  var alienY1 = alien.localToGlobal(0, 0).y;
	  var alienY2 = alien.localToGlobal(0, 0).y + alien.image.height;
	
	  var bulletX1 = bullet.x;
	  var bulletX2 = bullet.x + bullet.image.width;
	  var bulletY1 = bullet.y;
	  var bulletY2 = bullet.y + bullet.image.height;
	
	  if ((bulletX1 >= alienX1 && bulletX1 <= alienX2 || bulletX2 >= alienX1 && bulletX2 <= alienX2) && (bulletY1 <= alienY2 && bulletY1 >= alienY1 || bulletY2 <= alienY2 && bulletY2 >= alienY1)) {
	    return true;
	  } else {
	    return false;
	  }
	};
	
	exports.incrementScore = incrementScore;
	exports.updateLives = updateLives;
	exports.gameOver = gameOver;
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
	          this.aliens.x += 10;
	        }
	      } else {
	        if (this.aliens.x < 20) {
	          this.right = !this.right;
	          this.aliens.y += 40;
	        } else {
	          this.aliens.x -= 10;
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
	  }]);
	
	  return Alien;
	}();
	
	exports.default = Alien;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map