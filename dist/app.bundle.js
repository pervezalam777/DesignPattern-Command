/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _newsagency_newsagency__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newsagency/newsagency */ "./src/newsagency/newsagency.ts");
/* harmony import */ var _reporter_reporter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reporter/reporter */ "./src/reporter/reporter.ts");
/* harmony import */ var _subscribers_subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscribers/subscriber */ "./src/subscribers/subscriber.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Bootstrap =
/*#__PURE__*/
function () {
  function Bootstrap() {
    _classCallCheck(this, Bootstrap);
  }

  _createClass(Bootstrap, [{
    key: "initialize",
    value: function initialize() {
      var timesOfIndia = _newsagency_newsagency__WEBPACK_IMPORTED_MODULE_0__["NewsAgencyFactory"].create();
      var reporterOne = _reporter_reporter__WEBPACK_IMPORTED_MODULE_1__["ReporterFactory"].create();
      reporterOne.attachTo(timesOfIndia);
      var reporterTwo = _reporter_reporter__WEBPACK_IMPORTED_MODULE_1__["ReporterFactory"].create();
      reporterTwo.attachTo(timesOfIndia);
      var subscriberOne = _subscribers_subscriber__WEBPACK_IMPORTED_MODULE_2__["SubscriberFactory"].create("Vijay");
      timesOfIndia.subscribe(subscriberOne);
      var subscriberTwo = _subscribers_subscriber__WEBPACK_IMPORTED_MODULE_2__["SubscriberFactory"].create("Raj");
      timesOfIndia.subscribe(subscriberTwo);
      reporterOne.notifyNews("PM Modi to visit UP CM today");
      reporterTwo.notifyNews("Rahul Gandhi is on amarnath yatra");
    }
  }]);

  return Bootstrap;
}();

var boot = new Bootstrap();
boot.initialize();

/***/ }),

/***/ "./src/newsagency/newsagency.ts":
/*!**************************************!*\
  !*** ./src/newsagency/newsagency.ts ***!
  \**************************************/
/*! exports provided: NewsAgency, NewsAgencyFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsAgency", function() { return NewsAgency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsAgencyFactory", function() { return NewsAgencyFactory; });
/* harmony import */ var _observerable_subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observerable/subject */ "./src/observerable/subject.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var NewsAgency =
/*#__PURE__*/
function () {
  function NewsAgency() {
    _classCallCheck(this, NewsAgency);

    _defineProperty(this, "subjectSubscribers", void 0);

    this.subjectSubscribers = new _observerable_subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
  }

  _createClass(NewsAgency, [{
    key: "subscribe",
    value: function subscribe(observer) {
      return this.subjectSubscribers.subscribe(observer);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(observer) {
      return this.subjectSubscribers.unsubscribe(observer);
    }
  }, {
    key: "notify",
    value: function notify(request) {
      if (request.type === "politics") {
        return this.subjectSubscribers.notify(request);
      }

      return false;
    }
  }]);

  return NewsAgency;
}();
var NewsAgencyFactory =
/*#__PURE__*/
function () {
  function NewsAgencyFactory() {
    _classCallCheck(this, NewsAgencyFactory);
  }

  _createClass(NewsAgencyFactory, null, [{
    key: "create",
    value: function create() {
      return new NewsAgency();
    }
  }]);

  return NewsAgencyFactory;
}();

/***/ }),

/***/ "./src/observerable/subject.ts":
/*!*************************************!*\
  !*** ./src/observerable/subject.ts ***!
  \*************************************/
/*! exports provided: Subject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return Subject; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Subject =
/*#__PURE__*/
function () {
  function Subject() {
    _classCallCheck(this, Subject);

    _defineProperty(this, "subscriberList", []);
  }

  _createClass(Subject, [{
    key: "subscribe",
    value: function subscribe(observer) {
      if (this.getIndex(observer) === -1) {
        this.subscriberList.push(observer);
        return true;
      }

      return false;
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(observer) {
      var index = this.getIndex(observer);

      if (index > -1) {
        this.subscriberList.splice(index, 1);
        return true;
      }

      return false;
    }
  }, {
    key: "getIndex",
    value: function getIndex(observer) {
      var index = this.subscriberList.findIndex(function (value) {
        return value === observer;
      });
      return index;
    }
  }, {
    key: "notify",
    value: function notify(request) {
      this.subscriberList.forEach(function (value) {
        return value.update(request);
      });
      return true;
    }
  }]);

  return Subject;
}();

/***/ }),

/***/ "./src/reporter/reporter.ts":
/*!**********************************!*\
  !*** ./src/reporter/reporter.ts ***!
  \**********************************/
/*! exports provided: Reporter, ReporterFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reporter", function() { return Reporter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporterFactory", function() { return ReporterFactory; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Reporter =
/*#__PURE__*/
function () {
  function Reporter() {
    _classCallCheck(this, Reporter);

    _defineProperty(this, "newsAgencyToReport", null);
  }

  _createClass(Reporter, [{
    key: "attachTo",
    value: function attachTo(agency) {
      this.newsAgencyToReport = agency;
    }
  }, {
    key: "notifyNews",
    value: function notifyNews(data) {
      var news = {
        type: "politics",
        action: "breaking news",
        payload: data
      };
      this.newsAgencyToReport.notify(news);
    }
  }]);

  return Reporter;
}();
var ReporterFactory =
/*#__PURE__*/
function () {
  function ReporterFactory() {
    _classCallCheck(this, ReporterFactory);
  }

  _createClass(ReporterFactory, null, [{
    key: "create",
    value: function create() {
      return new Reporter();
    }
  }]);

  return ReporterFactory;
}();

/***/ }),

/***/ "./src/subscribers/subscriber.ts":
/*!***************************************!*\
  !*** ./src/subscribers/subscriber.ts ***!
  \***************************************/
/*! exports provided: Subscriber, SubscriberFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subscriber", function() { return Subscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriberFactory", function() { return SubscriberFactory; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Subscriber =
/*#__PURE__*/
function () {
  function Subscriber(name) {
    _classCallCheck(this, Subscriber);

    _defineProperty(this, "name", void 0);

    this.name = name;
  }

  _createClass(Subscriber, [{
    key: "update",
    value: function update(news) {
      console.log(this.name, "I have got the news");
      console.log(this.name, news.type, ":", news.payload);
    }
  }]);

  return Subscriber;
}();
var SubscriberFactory =
/*#__PURE__*/
function () {
  function SubscriberFactory() {
    _classCallCheck(this, SubscriberFactory);
  }

  _createClass(SubscriberFactory, null, [{
    key: "create",
    value: function create(name) {
      return new Subscriber(name);
    }
  }]);

  return SubscriberFactory;
}();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9uZXdzYWdlbmN5L25ld3NhZ2VuY3kudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29ic2VydmVyYWJsZS9zdWJqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9yZXBvcnRlci9yZXBvcnRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3Vic2NyaWJlcnMvc3Vic2NyaWJlci50cyJdLCJuYW1lcyI6WyJCb290c3RyYXAiLCJ0aW1lc09mSW5kaWEiLCJOZXdzQWdlbmN5RmFjdG9yeSIsImNyZWF0ZSIsInJlcG9ydGVyT25lIiwiUmVwb3J0ZXJGYWN0b3J5IiwiYXR0YWNoVG8iLCJyZXBvcnRlclR3byIsInN1YnNjcmliZXJPbmUiLCJTdWJzY3JpYmVyRmFjdG9yeSIsInN1YnNjcmliZSIsInN1YnNjcmliZXJUd28iLCJub3RpZnlOZXdzIiwiYm9vdCIsImluaXRpYWxpemUiLCJOZXdzQWdlbmN5Iiwic3ViamVjdFN1YnNjcmliZXJzIiwiU3ViamVjdCIsIm9ic2VydmVyIiwidW5zdWJzY3JpYmUiLCJyZXF1ZXN0IiwidHlwZSIsIm5vdGlmeSIsImdldEluZGV4Iiwic3Vic2NyaWJlckxpc3QiLCJwdXNoIiwiaW5kZXgiLCJzcGxpY2UiLCJmaW5kSW5kZXgiLCJ2YWx1ZSIsImZvckVhY2giLCJ1cGRhdGUiLCJSZXBvcnRlciIsImFnZW5jeSIsIm5ld3NBZ2VuY3lUb1JlcG9ydCIsImRhdGEiLCJuZXdzIiwiYWN0aW9uIiwicGF5bG9hZCIsIlN1YnNjcmliZXIiLCJuYW1lIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFH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T0FBekI7QUFLWSxXQUFLRCxrQkFBakIsQ0FBcUNaLE1BQXJDLENBQTRDYyxJQUE1QztBQUNIO0FBakJMOztBQUFBO0FBQUE7QUFvQk8sSUFBTS9CLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSw2QkFDbUM7QUFDM0IsYUFBTyxJQUFJMkIsUUFBSixFQUFQO0FBQ0g7QUFITDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJPLElBQU1PLFVBQWI7QUFBQTtBQUFBO0FBRUksc0JBQVlDLElBQVosRUFBd0I7QUFBQTs7QUFBQTs7QUFDcEIsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0g7O0FBSkw7QUFBQTtBQUFBLDJCQU1XSixJQU5YLEVBTThCO0FBQ3RCSyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLRixJQUFqQixFQUF1QixxQkFBdkI7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVksS0FBS0YsSUFBakIsRUFBdUJKLElBQUksQ0FBQ2YsSUFBNUIsRUFBa0MsR0FBbEMsRUFBdUNlLElBQUksQ0FBQ0UsT0FBNUM7QUFDSDtBQVRMOztBQUFBO0FBQUE7QUFZTyxJQUFNN0IsaUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSwyQkFDeUIrQixJQUR6QixFQUNnRDtBQUN4QyxhQUFPLElBQUlELFVBQUosQ0FBZUMsSUFBZixDQUFQO0FBQ0g7QUFITDs7QUFBQTtBQUFBLEkiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHsgTmV3c0FnZW5jeUZhY3RvcnksIE5ld3NBZ2VuY3kgfSBmcm9tIFwiLi9uZXdzYWdlbmN5L25ld3NhZ2VuY3lcIjtcbmltcG9ydCB7IFJlcG9ydGVyLCBSZXBvcnRlckZhY3RvcnkgfSBmcm9tIFwiLi9yZXBvcnRlci9yZXBvcnRlclwiO1xuaW1wb3J0IHsgU3Vic2NyaWJlciwgU3Vic2NyaWJlckZhY3RvcnkgfSBmcm9tIFwiLi9zdWJzY3JpYmVycy9zdWJzY3JpYmVyXCI7XG5cbmNsYXNzIEJvb3RzdHJhcCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpeyBcblxuICAgIH1cblxuICAgIHB1YmxpYyBpbml0aWFsaXplKCl7XG4gICAgICAgbGV0IHRpbWVzT2ZJbmRpYTpOZXdzQWdlbmN5ID0gTmV3c0FnZW5jeUZhY3RvcnkuY3JlYXRlKCk7XG5cbiAgICAgICBsZXQgcmVwb3J0ZXJPbmU6UmVwb3J0ZXIgPSBSZXBvcnRlckZhY3RvcnkuY3JlYXRlKCk7XG4gICAgICAgcmVwb3J0ZXJPbmUuYXR0YWNoVG8odGltZXNPZkluZGlhKTtcblxuICAgICAgIGxldCByZXBvcnRlclR3bzpSZXBvcnRlciA9IFJlcG9ydGVyRmFjdG9yeS5jcmVhdGUoKTtcbiAgICAgICByZXBvcnRlclR3by5hdHRhY2hUbyh0aW1lc09mSW5kaWEpO1xuXG4gICAgICAgbGV0IHN1YnNjcmliZXJPbmU6U3Vic2NyaWJlciA9IFN1YnNjcmliZXJGYWN0b3J5LmNyZWF0ZShcIlZpamF5XCIpO1xuICAgICAgIHRpbWVzT2ZJbmRpYS5zdWJzY3JpYmUoc3Vic2NyaWJlck9uZSlcblxuICAgICAgIGxldCBzdWJzY3JpYmVyVHdvOlN1YnNjcmliZXIgPSBTdWJzY3JpYmVyRmFjdG9yeS5jcmVhdGUoXCJSYWpcIik7XG4gICAgICAgdGltZXNPZkluZGlhLnN1YnNjcmliZShzdWJzY3JpYmVyVHdvKTtcblxuXG4gICAgICAgcmVwb3J0ZXJPbmUubm90aWZ5TmV3cyhcIlBNIE1vZGkgdG8gdmlzaXQgVVAgQ00gdG9kYXlcIik7XG4gICAgICAgcmVwb3J0ZXJUd28ubm90aWZ5TmV3cyhcIlJhaHVsIEdhbmRoaSBpcyBvbiBhbWFybmF0aCB5YXRyYVwiKTtcblxuICAgIH1cbn0gICBcblxubGV0IGJvb3QgPSBuZXcgQm9vdHN0cmFwKCk7XG5ib290LmluaXRpYWxpemUoKTsiLCJpbXBvcnQgeyBJU3ViamVjdCB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2lzdWJqZWN0XCI7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tIFwiLi4vb2JzZXJ2ZXJhYmxlL3N1YmplY3RcIjtcclxuaW1wb3J0IHsgSU9ic2VydmVyIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaW9ic2VydmVyXCI7XHJcbmltcG9ydCB7IElOb3RpZmljYXRpb24gfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pbm90aWZpY2F0aW9uXCI7XHJcbmltcG9ydCB7IElOb3RpZmllciB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2lub3RpZmllclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5ld3NBZ2VuY3kgaW1wbGVtZW50cyBJTm90aWZpZXIge1xyXG4gICAgcHJpdmF0ZSBzdWJqZWN0U3Vic2NyaWJlcnM6SVN1YmplY3QgfCBJTm90aWZpZXJcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5zdWJqZWN0U3Vic2NyaWJlcnMgPSBuZXcgU3ViamVjdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZShvYnNlcnZlcjpJT2JzZXJ2ZXIpOmJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAoPElTdWJqZWN0PnRoaXMuc3ViamVjdFN1YnNjcmliZXJzKS5zdWJzY3JpYmUob2JzZXJ2ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHVuc3Vic2NyaWJlKG9ic2VydmVyOklPYnNlcnZlcik6Ym9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICg8SVN1YmplY3Q+dGhpcy5zdWJqZWN0U3Vic2NyaWJlcnMpLnVuc3Vic2NyaWJlKG9ic2VydmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBub3RpZnkocmVxdWVzdDpJTm90aWZpY2F0aW9uKTpib29sZWFuIHtcclxuICAgICAgICBpZihyZXF1ZXN0LnR5cGUgPT09IFwicG9saXRpY3NcIil7XHJcbiAgICAgICAgICAgIHJldHVybiAgKDxJTm90aWZpZXI+dGhpcy5zdWJqZWN0U3Vic2NyaWJlcnMpLm5vdGlmeShyZXF1ZXN0KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdzQWdlbmN5RmFjdG9yeSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZSgpOk5ld3NBZ2VuY3l7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBOZXdzQWdlbmN5KCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJU3ViamVjdCB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2lzdWJqZWN0XCI7XHJcbmltcG9ydCB7IElPYnNlcnZlciB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2lvYnNlcnZlclwiO1xyXG5pbXBvcnQgeyBJTm90aWZpY2F0aW9uIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaW5vdGlmaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBJTm90aWZpZXIgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pbm90aWZpZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdWJqZWN0IGltcGxlbWVudHMgSVN1YmplY3QsIElOb3RpZmllciB7XHJcbiAgICBwcml2YXRlIHN1YnNjcmliZXJMaXN0OkFycmF5PElPYnNlcnZlcj4gPSBbXVxyXG5cclxuICAgIHB1YmxpYyBzdWJzY3JpYmUob2JzZXJ2ZXI6SU9ic2VydmVyKTpib29sZWFuIHtcclxuICAgICAgICBpZih0aGlzLmdldEluZGV4KG9ic2VydmVyKSA9PT0gLTEpe1xyXG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZXJMaXN0LnB1c2gob2JzZXJ2ZXIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1bnN1YnNjcmliZShvYnNlcnZlcjpJT2JzZXJ2ZXIpOmJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuZ2V0SW5kZXgob2JzZXJ2ZXIpO1xyXG4gICAgICAgIGlmKGluZGV4ID4gLTEpe1xyXG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZXJMaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5kZXgob2JzZXJ2ZXI6SU9ic2VydmVyKTpudW1iZXJ7XHJcbiAgICAgICAgbGV0IGluZGV4Om51bWJlciA9IHRoaXMuc3Vic2NyaWJlckxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kSW5kZXgodmFsdWUgPT4gdmFsdWUgPT09IG9ic2VydmVyKVxyXG4gICAgICAgIHJldHVybiBpbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbm90aWZ5KHJlcXVlc3Q6SU5vdGlmaWNhdGlvbik6Ym9vbGVhbiB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVyTGlzdC5mb3JFYWNoKHZhbHVlID0+IHZhbHVlLnVwZGF0ZShyZXF1ZXN0KSlcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gICBcclxufSIsImltcG9ydCB7IElOb3RpZmllciB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2lub3RpZmllclwiO1xyXG5pbXBvcnQgeyBJTm90aWZpY2F0aW9uIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaW5vdGlmaWNhdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlcG9ydGVyIHtcclxuICAgIHByaXZhdGUgbmV3c0FnZW5jeVRvUmVwb3J0OklOb3RpZmllciB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB9IFxyXG5cclxuICAgIGF0dGFjaFRvKGFnZW5jeTpJTm90aWZpZXIpe1xyXG4gICAgICAgIHRoaXMubmV3c0FnZW5jeVRvUmVwb3J0ID0gYWdlbmN5O1xyXG4gICAgfVxyXG5cclxuICAgIG5vdGlmeU5ld3MoZGF0YTpzdHJpbmcpe1xyXG4gICAgICAgIHZhciBuZXdzOklOb3RpZmljYXRpb24gPSB7XHJcbiAgICAgICAgICAgIHR5cGU6XCJwb2xpdGljc1wiLCBcclxuICAgICAgICAgICAgYWN0aW9uOlwiYnJlYWtpbmcgbmV3c1wiLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBkYXRhXHJcbiAgICAgICAgfTtcclxuICAgICAgICAoPElOb3RpZmllcj50aGlzLm5ld3NBZ2VuY3lUb1JlcG9ydCkubm90aWZ5KG5ld3MpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSZXBvcnRlckZhY3Rvcnkge1xyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUoKTpSZXBvcnRlcntcclxuICAgICAgICByZXR1cm4gbmV3IFJlcG9ydGVyKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJT2JzZXJ2ZXIgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pb2JzZXJ2ZXJcIjtcclxuaW1wb3J0IHsgSU5vdGlmaWNhdGlvbiB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2lub3RpZmljYXRpb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdWJzY3JpYmVyIGltcGxlbWVudHMgSU9ic2VydmVyIHtcclxuICAgIHByaXZhdGUgbmFtZTpzdHJpbmdcclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShuZXdzOklOb3RpZmljYXRpb24pe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubmFtZSwgXCJJIGhhdmUgZ290IHRoZSBuZXdzXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubmFtZSwgbmV3cy50eXBlLCBcIjpcIiwgbmV3cy5wYXlsb2FkKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3Vic2NyaWJlckZhY3Rvcnkge1xyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUobmFtZTpzdHJpbmcpOlN1YnNjcmliZXJ7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdWJzY3JpYmVyKG5hbWUpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=