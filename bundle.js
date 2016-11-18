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
	
	var _space_invaders = __webpack_require__(1);
	
	var _space_invaders2 = _interopRequireDefault(_space_invaders);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	document.addEventListener('DOMContentLoaded', function () {
	  var canvas = document.getElementById('canvas');
	  var stage = new createjs.Stage('canvas');
	  var spaceInvaders = new _space_invaders2.default(stage, canvas);
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
	
	var _alien = __webpack_require__(3);
	
	var _alien2 = _interopRequireDefault(_alien);
	
	var _bullet = __webpack_require__(4);
	
	var _bullet2 = _interopRequireDefault(_bullet);
	
	var _background = __webpack_require__(5);
	
	var _background2 = _interopRequireDefault(_background);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SpaceInvaders = function () {
	  function SpaceInvaders(stage, canvas) {
	    _classCallCheck(this, SpaceInvaders);
	
	    this.stage = stage;
	    this.canvas = this.canvas;
	
	    this.pressedKeys = {};
	    this.init();
	  }
	
	  _createClass(SpaceInvaders, [{
	    key: 'init',
	    value: function init() {
	      var _this = this;
	
	      (0, _background2.default)(this.stage);
	      $('.play-button').click(function () {
	        $('.start-menu').hide();
	        $('.pause-button').click(function () {
	          return _this.togglePause();
	        });
	        _this.play();
	      });
	    }
	  }, {
	    key: 'play',
	    value: function play() {
	      var _this2 = this;
	
	      // stage.removeChild(1,2)
	      this.spaceship = new _spaceship2.default(this.stage, this.canvas);
	      this.alien = new _alien2.default(this.stage, this.canvas);
	      this.alien.draw(4);
	      this.spaceship.draw();
	      createjs.Ticker.setFPS(40);
	      createjs.Ticker.on("tick", function () {
	        return _this2.handleTick();
	      });
	      document.addEventListener("keydown", this.keyDown.bind(this));
	      document.addEventListener("keyup", this.keyUp.bind(this));
	    }
	  }, {
	    key: 'handleTick',
	    value: function handleTick() {
	      if (!createjs.Ticker.getPaused()) {
	        this.alien.moveAliens();
	        _bullet2.default.moveBullets(this.stage, this.spaceship);
	        _bullet2.default.moveAlienBullets(this.stage, this.alien);
	        _bullet2.default.checkHits(this.stage, this.spaceship);
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
	      var paused = !createjs.Ticker.getPaused();
	      createjs.Ticker.setPaused(paused);
	      var pausedValue = paused ? "unpause" : "pause";
	      $('.pause-button').attr('value', pausedValue);
	    }
	  }, {
	    key: 'keyDown',
	    value: function keyDown(e) {
	      var keycode = e.which || window.event.keycode;
	
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
	  }, {
	    key: 'keyUp',
	    value: function keyUp(e) {
	      var keycode = e.which || window.event.keycode;
	      this.spaceship;
	    }
	  }]);
	
	  return SpaceInvaders;
	}();
	
	exports.default = SpaceInvaders;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _bullet = __webpack_require__(4);
	
	var _bullet2 = _interopRequireDefault(_bullet);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Spaceship = function () {
	  function Spaceship(stage) {
	    _classCallCheck(this, Spaceship);
	
	    this.stage = stage;
	    this.x = canvas.width / 2 - 15;
	    this.y = canvas.height - 30;
	    this.bullets = [];
	  }
	
	  _createClass(Spaceship, [{
	    key: 'draw',
	    value: function draw() {
	      var _this = this;
	
	      var img = new Image();
	      img.src = 'assets/spaceship.png';
	      var x = this.x;
	      var y = this.y;
	      img.onload = function (event) {
	        var bitmap = new createjs.Bitmap('assets/spaceship.png');
	        bitmap.x = x;
	        bitmap.y = y;
	        bitmap.height = 20;
	        bitmap.width = 20;
	        bitmap.name = "spaceship";
	        _this.stage.addChild(bitmap);
	        _this.stage.update();
	      };
	    }
	  }, {
	    key: 'move',
	    value: function move(keycode) {
	      var spaceship = this.stage.getChildByName("spaceship");
	      if (keycode == 37) {
	        //left 37
	        if (spaceship.x > 40) {
	          spaceship.x -= 10;
	          this.x = spaceship.x;
	        }
	      } else if (keycode == 39) {
	        //right 39
	        if (spaceship.x + 30 < canvas.width - 40) {
	          spaceship.x += 10;
	          this.x = spaceship.x;
	        }
	      }
	      this.stage.update();
	    }
	  }, {
	    key: 'fire',
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
	
	var _bullet = __webpack_require__(4);
	
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
	        for (var j = 0; j < 8; j++) {
	          var x = j * 20;
	          var y = i * 10;
	          var img = new Image();
	          img.src = 'assets/alien.png';
	          var bitmap = new createjs.Bitmap('assets/alien.png');
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

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _helper = __webpack_require__(6);
	
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
	    value: function checkHits(stage, spaceship) {
	      var alienContainer = stage.getChildByName('alienContainer');
	      var bullets = spaceship.bullets;
	      if (alienContainer && bullets.length > 0) {
	        var aliens = alienContainer.children;
	        if (aliens.length == 0) {
	          // newWave();
	        } else {
	          for (var i = 0; i < bullets.length; i++) {
	            for (var j = 0; j < aliens.length; j++) {
	              var bullet = bullets[i];
	              var alien = aliens[j];
	              if (bullet.y <= alien.localToGlobal(0, 0).y + alien.height && bullet.x <= alien.localToGlobal(0, 0).x + alien.width && bullet.x >= alien.localToGlobal(0, 0).x) {
	                (0, _helper.incrementScore)();
	                spaceship.bullets.splice(i, 1);
	                alienContainer.removeChild(alien);
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
	            (0, _helper.updateLives)();
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
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Background = function Background(stage) {
	  var img = new Image();
	  img.src = "assets/starsbackground.jpg";
	  img.onload = function () {
	    var bitmap = new createjs.Bitmap(img);
	    bitmap.x = 0;
	    bitmap.y = 0;
	    bitmap.name = "background";
	    stage.addChild(bitmap);
	    stage.update();
	  };
	};
	
	exports.default = Background;

/***/ },
/* 6 */
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
	
	var updateLives = function updateLives() {
	  var lives = $('.lives').html();
	  var newLives = parseInt(lives) - 1;
	  if (newLives === 0) {
	    //game over
	  } else {
	    $('.lives').html(newLives.toString());
	  }
	};
	
	exports.incrementScore = incrementScore;
	exports.updateLives = updateLives;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map