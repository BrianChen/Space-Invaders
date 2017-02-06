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
	
	    // setHeader() {
	    //   let pauseImg = new Image();
	    //   pauseImg.src = 'assets/images/pause-icon.png';
	    //   pauseImg.onload = () => {
	    //     let pauseBM = new createjs.Bitmap(pauseImg);
	    //     pauseBM.addEventListener('click', this.togglePause)
	    //     pauseBM.x = canvas.width - pauseBM.image.width - 40;
	    //     pauseBM.y = 20;
	    //     this.stage.addChild(pauseBM);
	    //     this.stage.update();
	    //   }
	    // }
	
	  }, {
	    key: 'play',
	    value: function play() {
	      this.stage.removeAllChildren();
	      this.spaceship = new _spaceship2.default(this.stage);
	      // this.aliens = new Alien(this.stage);
	      // this.aliens.draw(5);
	      this.spaceship.draw();
	      // createjs.Ticker.setFPS(40);
	      // createjs.Ticker.on("tick", () => this.handleTick());
	      document.addEventListener("keydown", this.keyDown.bind(this));
	    }
	  }, {
	    key: 'handleTick',
	    value: function handleTick() {
	      if (!createjs.Ticker.getPaused()) {
	        // this.alien.moveAliens();
	        // Bullet.moveBullets(this.stage, this.spaceship);
	        // Bullet.moveAlienBullets(this.stage, this.alien);
	        _bullet2.default.checkHits(this.stage, this.spaceship, this.alien);
	        _bullet2.default.checkIfDamaged(this.stage, this.alien);
	        var randomNum = Math.floor(Math.random() * 50) + 1;
	        if (randomNum == 5) {
	          this.alien.fireAlienBullets();
	        }
	        this.stage.update();
	      }
	    }
	  }, {
	    key: 'togglePause',
	    value: function togglePause() {
	      debugger;
	      var isPaused = !createjs.Ticker.getPaused();
	      createjs.Ticker.setPaused(isPaused);
	      if (isPaused) {
	        this.stage.removeChild('pauseBM');
	        var playImg = new Image();
	        playImg.src = 'assets/images/play-icon.png';
	        var playBM = new createjs.Bitmap(playImg);
	        playBM.addEventListener('click', this.togglePause);
	        playBM.x = canvas.width - playBM.image.width - 40;
	        playBM.y = 40;
	        playBM.name = "playBM";
	        this.stage.addChild(playBM);
	        this.stage.update();
	      } else {
	        $('.fa-pause').hide();
	        $('.fa-play').show();
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
	
	    // keyUp(e) {
	    //   let keycode = e.which || window.event.keycode;
	    //   this.spaceship
	    // }
	
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
	        bitmap.x = canvas.width / 2 - bitmap.image.width / 2;
	        bitmap.y = canvas.height - bitmap.image.height - 20;
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
	    //
	    //   fire() {
	    //     let bullet = Bullet.drawSpaceshipBullet(this.x, this.y)
	    //     this.bullets.push(bullet);
	    //     this.stage.addChild(bullet);
	    //     this.stage.update();
	    //   }
	
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
	      var bullet = new createjs.Shape();
	      bullet.graphics.beginFill("yellow").drawRect(0, 0, 2, 5);
	      bullet.x = x + 15;
	      bullet.y = y;
	      bullet.width = 2;
	      bullet.height = 5;
	      return bullet;
	    }
	  }, {
	    key: 'drawAlienBullet',
	    value: function drawAlienBullet(stage) {
	      var aliens = stage.getChildByName('alienContainer').children;
	      var randNum = Math.floor(Math.random() * aliens.length) + 1;
	      var x = aliens[randNum].localToGlobal(0, 0).x + aliens[randNum].width / 2;
	      var y = aliens[randNum].localToGlobal(0, 0).y + aliens[randNum].height;
	
	      var bullet = new createjs.Shape();
	      bullet.graphics.beginFill("red").drawRect(0, 0, 2, 3);
	      bullet.x = x;
	      bullet.y = y;
	      bullet.width = 2;
	      bullet.height = 3;
	      return bullet;
	    }
	  }, {
	    key: 'moveBullets',
	    value: function moveBullets(stage, spaceship) {
	      var bullets = spaceship.bullets;
	      for (var i = 0; i < bullets.length; i++) {
	        bullets[i].y -= 3;
	        if (bullets[i].y < 0) {
	          spaceship.bullets.splice(i, 1);
	          stage.removeChild(bullets[i]);
	        }
	      }
	    }
	  }, {
	    key: 'moveAlienBullets',
	    value: function moveAlienBullets(stage, alien) {
	      var bullets = alien.bullets;
	      var deleteBulletIndexs = [];
	      for (var i = 0; i < bullets.length; i++) {
	        bullets[i].y += 1;
	        if (bullets[i].y > canvas.height) {
	          deleteBulletIndexs.push(i);
	        }
	      }
	      for (var j = 0; j < deleteBulletIndexs.length; j++) {
	        alien.bullets.splice(j, 1);
	        stage.removeChild(bullets[j]);
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
	          alien.draw(4);
	        } else {
	          for (var i = 0; i < bullets.length; i++) {
	            for (var j = 0; j < aliens.length; j++) {
	              var bullet = bullets[i];
	              var _alien = aliens[j];
	              if (bullet.y <= _alien.localToGlobal(0, 0).y + _alien.height && bullet.x <= _alien.localToGlobal(0, 0).x + _alien.width && bullet.x >= _alien.localToGlobal(0, 0).x) {
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
	  }, {
	    key: 'checkIfDamaged',
	    value: function checkIfDamaged(stage, alien) {
	      var bullets = alien.bullets;
	      var spaceship = stage.getChildByName("spaceship");
	      if (bullets.length > 0) {
	        for (var i = 0; i < bullets.length; i++) {
	          if (bullets[i].y + bullets[i].height >= spaceship.y && bullets[i].x <= spaceship.x + spaceship.width && bullets[i].x + bullets[i].width >= spaceship.x) {
	            //hit
	            (0, _helper.updateLives)(stage);
	            alien.bullets.splice(i, 1);
	            stage.removeChild(bullets[i]);
	            spaceship.x = canvas.width / 2 - 15;
	            spaceship.y = canvas.height - 30;
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
	  var score = $('.score').html();
	  var newScore = parseInt(score) + 100;
	  $('.score').html(newScore.toString());
	};
	
	// const newWave = (stage) => {
	//   stage.
	// }
	
	var gotHit = function gotHit() {};
	
	var updateLives = function updateLives(stage) {
	  var lives = $('.lives').html();
	  var newLives = parseInt(lives) - 1;
	  if (newLives === 0) {
	    $('.lives').html(newLives.toString());
	    stage.removeAllChildren();
	    var text = new createjs.Text("Game Over", "20px Arial", "#ff7700");
	    text.x = canvas.width / 2 - 50;
	    text.y = canvas.height / 2 - 20;
	    stage.addChild(text);
	    stage.update();
	  } else {
	    $('.lives').html(newLives.toString());
	  }
	};
	
	var gameOver = function gameOver() {};
	
	exports.incrementScore = incrementScore;
	exports.updateLives = updateLives;
	exports.gameOver = gameOver;

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
	    value: function draw(rows) {
	      this.aliens = new createjs.Container();
	      this.aliens.name = "alienContainer";
	
	      for (var i = 0; i < rows; i++) {
	        for (var j = 0; j < 11; j++) {
	          var x = j * 20;
	          var y = i * 10;
	          var img = new Image();
	          img.src = 'assets/alien.png';
	          var bitmap = new createjs.Bitmap('assets/images/alien.png');
	          bitmap.x = x;
	          bitmap.y = y;
	          bitmap.width = 30;
	          bitmap.height = 5;
	          this.aliens.addChild(bitmap);
	        }
	      }
	      this.aliens.x = canvas.width / 2 - 80;
	      this.stage.addChild(this.aliens);
	      this.stage.update();
	    }
	  }, {
	    key: 'moveAliens',
	    value: function moveAliens() {
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