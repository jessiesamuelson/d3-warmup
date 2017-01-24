var D3APP =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// var d3app = {
	//   h: 300,
	//   w: 900,
	//   init: function() {
	//     this.svg = d3.select('#root')
	//       .append('svg')
	//       .attr('height', this.h)
	//       .attr('width', this.w);
	//   },
	//   generateData: function() {
	//     const test = 'lol';
	//     var lol = test + 'sldkfj';
	//   }
	// };
	//
	//

	var D3APP = exports.D3APP = function () {
	  function D3APP(d, h, w) {
	    _classCallCheck(this, D3APP);

	    this.d = d;
	    this.h = h, this.w = w;
	    this.pad = 1;
	    this.data = this.genData();
	    this.init();
	    this.render();
	  }

	  _createClass(D3APP, [{
	    key: 'init',
	    value: function init() {
	      this.svg = d3.select('#root').append('svg').attr('height', this.h).attr('width', this.w);
	    }
	  }, {
	    key: 'setScales',
	    value: function setScales() {
	      this.scale = d3.scale.linear().domain([0, d3.max(this.data, function (d) {
	        return d;
	      })]).range([0, this.w]);
	    }
	  }, {
	    key: 'drawBars',
	    value: function drawBars() {
	      var _this = this;

	      this.bars = this.svg.selectAll('rect').data(this.data).enter().append('rect');

	      this.bars.attr('x', function (d, i) {
	        return i * (_this.w / _this.data.length);
	      }).attr('y', function (d, i) {
	        return _this.h - d;
	      }).attr('width', this.w / this.data.length - this.pad).attr('height', function (d, i) {
	        return _this.scale(d);
	      }).attr('fill', function (d, i) {
	        return 'rgb(0,0, ' + d * 2 + ')';
	      });
	      return this;
	    }
	  }, {
	    key: 'drawLabels',
	    value: function drawLabels() {
	      var _this2 = this;

	      this.labels = this.svg.selectAll('text').data(this.data).enter().append('text').text(function (d, i) {
	        return d;
	      }).attr('x', function (d, i) {
	        return i * (_this2.w / _this2.data.length) + 5;
	      }).attr('y', function (d, i) {
	        return _this2.h - d + 12;
	      }).attr('font-size', 10).attr('fill', '#ffffff');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      this.setScales().drawBars().drawLabels();
	    }
	  }, {
	    key: 'genData',
	    value: function genData() {
	      var data = [];
	      for (var i = 0; i < 40; i++) {
	        data.push(Math.round(Math.random() * 100));
	      }
	      return data;
	    }
	  }]);

	  return D3APP;
	}();

	module.exports = D3APP;

/***/ }
/******/ ]);