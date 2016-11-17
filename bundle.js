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
	      createjs.Ticker.setFPS(3);
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
	        _bullet2.default.moveBullets(this.stage);
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
	      debugger;
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
	      img.onload = function (event) {
	        var bitmap = new createjs.Bitmap('assets/spaceship.png');
	        bitmap.x = _this.x;
	        bitmap.y = _this.y;
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
	          spaceship.x -= 30;
	          this.x = spaceship.x;
	        }
	      } else if (keycode == 39) {
	        //right 39
	        if (spaceship.x + 30 < canvas.width - 40) {
	          spaceship.x += 30;
	          this.x = spaceship.x;
	        }
	      }
	      this.stage.update();
	    }
	  }, {
	    key: 'fire',
	    value: function fire() {
	      var bullet = new _bullet2.default(this.stage, this.x, this.y);
	      this.bullets.push(bullet);
	      bullet.draw();
	    }
	  }]);
	
	  return Spaceship;
	}();
	
	exports.default = Spaceship;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Alien = function () {
	  function Alien(stage) {
	    _classCallCheck(this, Alien);
	
	    this.stage = stage;
	    this.right = true;
	  }
	
	  _createClass(Alien, [{
	    key: 'draw',
	    value: function draw(rows) {
	      this.aliens = new createjs.Container();
	
	      for (var i = 0; i < rows; i++) {
	        for (var j = 0; j < 8; j++) {
	          var x = j * 20;
	          var y = i * 10;
	          var img = new Image();
	          img.src = 'assets/alien.png';
	          var bitmap = new createjs.Bitmap('assets/alien.png');
	          bitmap.x = x;
	          bitmap.y = y;
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
	          this.aliens.y += 10;
	        } else {
	          this.aliens.x += 20;
	        }
	      } else {
	        if (this.aliens.x < 20) {
	          this.right = !this.right;
	          this.aliens.y += 10;
	        } else {
	          this.aliens.x -= 20;
	        }
	      }
	    }
	  }]);
	
	  return Alien;
	}();
	
	exports.default = Alien;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Bullet = function () {
	  function Bullet(stage, x, y) {
	    _classCallCheck(this, Bullet);
	
	    this.stage = stage;
	    this.x = x;
	    this.y = y;
	  }
	
	  _createClass(Bullet, [{
	    key: 'draw',
	    value: function draw() {
	      var bulletContainer = void 0;
	      if (this.stage.getChildByName('bulletContainer')) {
	        bulletContainer = this.stage.getChildByName('bulletContainer');
	      } else {
	        bulletContainer = new createjs.Container();
	        bulletContainer.name = 'bulletContainer';
	      }
	
	      var bulletShape = new createjs.Shape();
	      bulletShape.graphics.beginFill("yellow").drawRect(this.x + 15, this.y, 2, 5);
	      bulletContainer.addChild(bulletShape);
	      this.stage.addChild(bulletContainer);
	      this.stage.update();
	    }
	  }], [{
	    key: 'moveBullets',
	    value: function moveBullets(stage) {
	      if (stage.getChildByName('bulletContainer')) {
	        var bullets = stage.getChildByName('bulletContainer').children;
	        for (var i = 0; i < bullets.length; i++) {
	          bullets[i].y -= 15;
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

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map