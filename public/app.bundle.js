var D3APP =
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
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var D3APP = function () {
	  function D3APP(d, h, w) {
	    var _this = this;
	
	    _classCallCheck(this, D3APP);
	
	    this.h = h, this.w = w;
	    this.dur = 800;
	    this.count = 20;
	    this.pad = 1;
	    this.data = this.genData();
	    this.init();
	    this.setScales();
	    // this.render();
	    this.update();
	    this.interval = setInterval(function () {
	      _this.update();
	    }, this.dur);
	  }
	
	  _createClass(D3APP, [{
	    key: 'update',
	    value: function update() {
	      var _this2 = this;
	
	      var data = this.shiftData();
	      var bars = d3.select('svg').selectAll('rect').data(data);
	      // ENTER:
	      bars.enter().append('rect').attr('x', function (d, i) {
	        return i * (_this2.w / _this2.data.length);
	      }).attr('y', function (d, i) {
	        return _this2.h - _this2.yScale(d);
	      }).attr('width', this.w / this.data.length - this.pad).attr('height', function (d, i) {
	        return _this2.yScale(d);
	      }).attr('fill', function (d, i) {
	        return _this2.colorScale(d);
	      });
	      // EXIT:
	      bars.exit().remove();
	      bars.transition().duration(this.dur).attr('x', function (d, i) {
	        return i * (_this2.w / _this2.data.length);
	      }).attr('y', function (d, i) {
	        return _this2.h - _this2.yScale(d);
	      }).attr('width', this.w / this.data.length - this.pad).attr('height', function (d, i) {
	        return _this2.yScale(d);
	      }).attr('fill', function (d, i) {
	        return _this2.colorScale(d);
	      });
	    }
	  }, {
	    key: 'setScales',
	    value: function setScales() {
	      this.yScale = d3.scaleLinear().domain([0, d3.max(this.data, function (d) {
	        return d;
	      })]).range([0, this.h]);
	      this.colorScale = d3.scaleLinear().domain([0, d3.max(this.data, function (d) {
	        return d;
	      })]).range(['black', 'lemonchiffon']);
	      return this;
	    }
	  }, {
	    key: 'drawBars',
	    value: function drawBars() {
	      var _this3 = this;
	
	      this.bars = this.svg.selectAll('rect').data(this.data);
	      var enteredBars = this.bars.enter();
	      console.log('enteredBars ~~>', enteredBars);
	      enteredBars.append('rect').attr('x', function (d, i) {
	        return i * (_this3.w / _this3.data.length);
	      }).attr('y', function (d, i) {
	        return _this3.h - _this3.yScale(d);
	      }).attr('width', this.w / this.data.length - this.pad).attr('height', function (d, i) {
	        return _this3.yScale(d);
	      }).attr('fill', function (d, i) {
	        return _this3.colorScale(d);
	      });
	      return this;
	    }
	  }, {
	    key: 'drawLabels',
	    value: function drawLabels() {
	      var _this4 = this;
	
	      this.labels = this.svg.selectAll('text').data(this.data).enter().append('text').text(function (d, i) {
	        return d;
	      }).attr('x', function (d, i) {
	        return i * (_this4.w / _this4.data.length) + 5;
	      }).attr('y', function (d, i) {
	        return _this4.h - _this4.yScale(d) + 12;
	      }).attr('font-size', 10).attr('fill', '#ffffff');
	      return this;
	    }
	  }, {
	    key: 'genData',
	    value: function genData() {
	      var data = [];
	      for (var i = 0; i < this.count; i++) {
	        data.push(this.randomInt());
	      }
	      return data;
	    }
	  }, {
	    key: 'randomInt',
	    value: function randomInt() {
	      return Math.round(Math.random() * 100);
	    }
	  }, {
	    key: 'shiftData',
	    value: function shiftData() {
	      this.data.push(this.randomInt());
	      return this.data;
	    }
	  }, {
	    key: 'init',
	    value: function init() {
	      this.svg = d3.select('#root').append('svg').attr('height', this.h).attr('width', this.w);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      this.setScales().drawBars().drawLabels();
	    }
	  }]);
	
	  return D3APP;
	}();
	
	module.exports = D3APP;

/***/ }
/******/ ]);
//# sourceMappingURL=app.bundle.js.map