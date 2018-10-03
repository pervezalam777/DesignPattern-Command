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

/***/ "./src/calculator/basiccalculator.ts":
/*!*******************************************!*\
  !*** ./src/calculator/basiccalculator.ts ***!
  \*******************************************/
/*! exports provided: BasicCalculator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicCalculator", function() { return BasicCalculator; });
/* harmony import */ var _commands_commandFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../commands/commandFactory */ "./src/commands/commandFactory.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var BasicCalculator =
/*#__PURE__*/
function () {
  function BasicCalculator() {
    _classCallCheck(this, BasicCalculator);

    _defineProperty(this, "currentValue", 0);

    _defineProperty(this, "callStack", []);

    _defineProperty(this, "undoCallStack", []);

    _defineProperty(this, "futureCallStack", []);

    _defineProperty(this, "commandFactory", void 0);

    this.commandFactory = new _commands_commandFactory__WEBPACK_IMPORTED_MODULE_0__["CommandFactory"]();
  }

  _createClass(BasicCalculator, [{
    key: "initialize",
    value: function initialize() {// Left for future dependency
    }
  }, {
    key: "keepOperationForFuture",
    value: function keepOperationForFuture(operation, value) {
      var command = this.commandFactory.createCommand(operation, value);
      this.futureCallStack.push(command);
      return false;
    }
  }, {
    key: "performPendingOperation",
    value: function performPendingOperation() {
      var command = this.futureCallStack.shift();
      var value = this.currentValue;

      while (command) {
        this.callStack.push(command);
        value = command.execute(this.currentValue);
        command = this.futureCallStack.shift();
      }

      return value;
    }
  }, {
    key: "performOperation",
    value: function performOperation(operation, value) {
      var command = this.commandFactory.createCommand(operation, value);
      this.currentValue = command.execute(this.currentValue);
      this.callStack.push(command);
      return this.currentValue;
    }
  }, {
    key: "undoOperation",
    value: function undoOperation() {
      var command = this.callStack.pop();

      if (command && command.canUndo()) {
        this.undoCallStack.push(command);
        return command.undo(this.currentValue);
      }

      return -1;
    }
  }, {
    key: "redoOperation",
    value: function redoOperation() {
      var command = this.undoCallStack.pop();

      if (command && command.canRedo()) {
        this.callStack.push(command);
        return command.execute(this.currentValue);
      }

      return -1;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.callStack = [];
      this.undoCallStack = [];
      this.currentValue = 0;
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.currentValue;
    }
  }]);

  return BasicCalculator;
}();

/***/ }),

/***/ "./src/commands/command.ts":
/*!*********************************!*\
  !*** ./src/commands/command.ts ***!
  \*********************************/
/*! exports provided: Command */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Command", function() { return Command; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Command =
/*#__PURE__*/
function () {
  function Command(exeInvoker, undoInvoker, value) {
    _classCallCheck(this, Command);

    _defineProperty(this, "exeInvoker", void 0);

    _defineProperty(this, "undoInvoker", void 0);

    _defineProperty(this, "value", void 0);

    this.exeInvoker = exeInvoker;
    this.undoInvoker = undoInvoker;
    this.value = value;
  }

  _createClass(Command, [{
    key: "execute",
    value: function execute(curent) {
      return this.exeInvoker.performAction(curent, this.value);
    }
  }, {
    key: "canUndo",
    value: function canUndo() {
      return this.undo !== undefined;
    }
  }, {
    key: "canRedo",
    value: function canRedo() {
      return this.exeInvoker !== undefined;
    }
  }, {
    key: "undo",
    value: function undo(curent) {
      return this.undoInvoker.performAction(curent, this.value);
    }
  }, {
    key: "redo",
    value: function redo(curent) {
      return this.execute(curent);
    }
  }]);

  return Command;
}();

/***/ }),

/***/ "./src/commands/commandFactory.ts":
/*!****************************************!*\
  !*** ./src/commands/commandFactory.ts ***!
  \****************************************/
/*! exports provided: COMMAND_CONST, CommandFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMAND_CONST", function() { return COMMAND_CONST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandFactory", function() { return CommandFactory; });
/* harmony import */ var _operations_add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../operations/add */ "./src/operations/add.ts");
/* harmony import */ var _operations_substract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operations/substract */ "./src/operations/substract.ts");
/* harmony import */ var _command__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./command */ "./src/commands/command.ts");
/* harmony import */ var _operations_multiply__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operations/multiply */ "./src/operations/multiply.ts");
/* harmony import */ var _operations_divide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../operations/divide */ "./src/operations/divide.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var COMMAND_CONST = {
  ADDITION: "addition",
  SUBSTRACT: "substract",
  MULTIPLY: "multiply",
  DIVIDE: "divide"
};
var CommandFactory =
/*#__PURE__*/
function () {
  function CommandFactory() {
    _classCallCheck(this, CommandFactory);
  }

  _createClass(CommandFactory, [{
    key: "createCommand",
    value: function createCommand(name, value) {
      switch (name) {
        case COMMAND_CONST.ADDITION:
          return this.addCommand(value);

        case COMMAND_CONST.SUBSTRACT:
          return this.subCommand(value);

        case COMMAND_CONST.MULTIPLY:
          return this.multiCommand(value);

        case COMMAND_CONST.DIVIDE:
          return this.divideCommand(value);

        default:
          return this.addCommand(value);
      }
    }
  }, {
    key: "addCommand",
    value: function addCommand(value) {
      var execute = new _operations_add__WEBPACK_IMPORTED_MODULE_0__["Addition"]();
      var undo = new _operations_substract__WEBPACK_IMPORTED_MODULE_1__["Substract"]();
      return new _command__WEBPACK_IMPORTED_MODULE_2__["Command"](execute, undo, value);
    }
  }, {
    key: "subCommand",
    value: function subCommand(value) {
      var execute = new _operations_substract__WEBPACK_IMPORTED_MODULE_1__["Substract"]();
      var undo = new _operations_add__WEBPACK_IMPORTED_MODULE_0__["Addition"]();
      return new _command__WEBPACK_IMPORTED_MODULE_2__["Command"](execute, undo, value);
    }
  }, {
    key: "multiCommand",
    value: function multiCommand(value) {
      var execute = new _operations_multiply__WEBPACK_IMPORTED_MODULE_3__["Multiply"]();
      var undo = new _operations_divide__WEBPACK_IMPORTED_MODULE_4__["Divide"]();
      return new _command__WEBPACK_IMPORTED_MODULE_2__["Command"](execute, undo, value);
    }
  }, {
    key: "divideCommand",
    value: function divideCommand(value) {
      var execute = new _operations_divide__WEBPACK_IMPORTED_MODULE_4__["Divide"]();
      var undo = new _operations_multiply__WEBPACK_IMPORTED_MODULE_3__["Multiply"]();
      return new _command__WEBPACK_IMPORTED_MODULE_2__["Command"](execute, undo, value);
    }
  }]);

  return CommandFactory;
}();

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calculator_basiccalculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculator/basiccalculator */ "./src/calculator/basiccalculator.ts");
/* harmony import */ var _commands_commandFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commands/commandFactory */ "./src/commands/commandFactory.ts");
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
      var basicCal = new _calculator_basiccalculator__WEBPACK_IMPORTED_MODULE_0__["BasicCalculator"]();
      basicCal.initialize();
      var value = basicCal.performOperation(_commands_commandFactory__WEBPACK_IMPORTED_MODULE_1__["COMMAND_CONST"].ADDITION, 10);
      value = basicCal.performOperation(_commands_commandFactory__WEBPACK_IMPORTED_MODULE_1__["COMMAND_CONST"].ADDITION, 20);
      console.log(value);
      value = basicCal.performOperation(_commands_commandFactory__WEBPACK_IMPORTED_MODULE_1__["COMMAND_CONST"].MULTIPLY, 30);
      console.log(value);
      value = basicCal.performOperation(_commands_commandFactory__WEBPACK_IMPORTED_MODULE_1__["COMMAND_CONST"].MULTIPLY, 30);
      console.log(value);
      value = basicCal.undoOperation();
      console.log(value);
    }
  }]);

  return Bootstrap;
}();

var boot = new Bootstrap();
boot.initialize();

/***/ }),

/***/ "./src/operations/add.ts":
/*!*******************************!*\
  !*** ./src/operations/add.ts ***!
  \*******************************/
/*! exports provided: Addition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Addition", function() { return Addition; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Addition =
/*#__PURE__*/
function () {
  function Addition() {
    _classCallCheck(this, Addition);
  }

  _createClass(Addition, [{
    key: "performAction",
    value: function performAction(first, second) {
      return first + second;
    }
  }]);

  return Addition;
}();

/***/ }),

/***/ "./src/operations/divide.ts":
/*!**********************************!*\
  !*** ./src/operations/divide.ts ***!
  \**********************************/
/*! exports provided: Divide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Divide", function() { return Divide; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Divide =
/*#__PURE__*/
function () {
  function Divide() {
    _classCallCheck(this, Divide);
  }

  _createClass(Divide, [{
    key: "performAction",
    value: function performAction(first, second) {
      return first / second;
    }
  }]);

  return Divide;
}();

/***/ }),

/***/ "./src/operations/multiply.ts":
/*!************************************!*\
  !*** ./src/operations/multiply.ts ***!
  \************************************/
/*! exports provided: Multiply */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Multiply", function() { return Multiply; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Multiply =
/*#__PURE__*/
function () {
  function Multiply() {
    _classCallCheck(this, Multiply);
  }

  _createClass(Multiply, [{
    key: "performAction",
    value: function performAction(first, second) {
      return first * second;
    }
  }]);

  return Multiply;
}();

/***/ }),

/***/ "./src/operations/substract.ts":
/*!*************************************!*\
  !*** ./src/operations/substract.ts ***!
  \*************************************/
/*! exports provided: Substract */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Substract", function() { return Substract; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Substract =
/*#__PURE__*/
function () {
  function Substract() {
    _classCallCheck(this, Substract);
  }

  _createClass(Substract, [{
    key: "performAction",
    value: function performAction(first, second) {
      return first - second;
    }
  }]);

  return Substract;
}();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGN1bGF0b3IvYmFzaWNjYWxjdWxhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tYW5kcy9jb21tYW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tYW5kcy9jb21tYW5kRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29wZXJhdGlvbnMvYWRkLnRzIiwid2VicGFjazovLy8uL3NyYy9vcGVyYXRpb25zL2RpdmlkZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb3BlcmF0aW9ucy9tdWx0aXBseS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb3BlcmF0aW9ucy9zdWJzdHJhY3QudHMiXSwibmFtZXMiOlsiQmFzaWNDYWxjdWxhdG9yIiwiY29tbWFuZEZhY3RvcnkiLCJDb21tYW5kRmFjdG9yeSIsIm9wZXJhdGlvbiIsInZhbHVlIiwiY29tbWFuZCIsImNyZWF0ZUNvbW1hbmQiLCJmdXR1cmVDYWxsU3RhY2siLCJwdXNoIiwic2hpZnQiLCJjdXJyZW50VmFsdWUiLCJjYWxsU3RhY2siLCJleGVjdXRlIiwicG9wIiwiY2FuVW5kbyIsInVuZG9DYWxsU3RhY2siLCJ1bmRvIiwiY2FuUmVkbyIsIkNvbW1hbmQiLCJleGVJbnZva2VyIiwidW5kb0ludm9rZXIiLCJjdXJlbnQiLCJwZXJmb3JtQWN0aW9uIiwidW5kZWZpbmVkIiwiQ09NTUFORF9DT05TVCIsIkFERElUSU9OIiwiU1VCU1RSQUNUIiwiTVVMVElQTFkiLCJESVZJREUiLCJuYW1lIiwiYWRkQ29tbWFuZCIsInN1YkNvbW1hbmQiLCJtdWx0aUNvbW1hbmQiLCJkaXZpZGVDb21tYW5kIiwiQWRkaXRpb24iLCJTdWJzdHJhY3QiLCJNdWx0aXBseSIsIkRpdmlkZSIsIkJvb3RzdHJhcCIsImJhc2ljQ2FsIiwiaW5pdGlhbGl6ZSIsInBlcmZvcm1PcGVyYXRpb24i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LEVBRXFEO0FBQzdDLGFBQU9ELEtBQUssR0FBR0MsTUFBZjtBQUNIO0FBSkw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FPLElBQU1aLFNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxrQ0FFa0JXLEtBRmxCLEVBRWdDQyxNQUZoQyxFQUVxRDtBQUM3QyxhQUFPRCxLQUFLLEdBQUdDLE1BQWY7QUFDSDtBQUpMOztBQUFBO0FBQUEsSSIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgeyBJQ29tbWFuZCB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2ljb21tYW5kXCI7XHJcbmltcG9ydCB7IENvbW1hbmRGYWN0b3J5LCBDT01NQU5EX0NPTlNUIH0gZnJvbSBcIi4uL2NvbW1hbmRzL2NvbW1hbmRGYWN0b3J5XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzaWNDYWxjdWxhdG9yIHtcclxuICAgIHByaXZhdGUgY3VycmVudFZhbHVlOm51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGNhbGxTdGFjazpBcnJheTxJQ29tbWFuZD4gPSBbXTtcclxuICAgIHByaXZhdGUgdW5kb0NhbGxTdGFjazpBcnJheTxJQ29tbWFuZD4gPSBbXTtcclxuICAgIHByaXZhdGUgZnV0dXJlQ2FsbFN0YWNrOkFycmF5PElDb21tYW5kPiA9IFtdO1xyXG4gICAgcHJpdmF0ZSBjb21tYW5kRmFjdG9yeTpDb21tYW5kRmFjdG9yeTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmNvbW1hbmRGYWN0b3J5ID0gbmV3IENvbW1hbmRGYWN0b3J5KCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGluaXRpYWxpemUoKXtcclxuICAgICAgICAvLyBMZWZ0IGZvciBmdXR1cmUgZGVwZW5kZW5jeVxyXG4gICAgfVxyXG5cclxuICAgIGtlZXBPcGVyYXRpb25Gb3JGdXR1cmUob3BlcmF0aW9uOnN0cmluZywgdmFsdWU6bnVtYmVyKTpib29sZWFue1xyXG4gICAgICAgIGxldCBjb21tYW5kOklDb21tYW5kID0gdGhpcy5jb21tYW5kRmFjdG9yeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY3JlYXRlQ29tbWFuZChvcGVyYXRpb24sIHZhbHVlKTtcclxuICAgICAgICB0aGlzLmZ1dHVyZUNhbGxTdGFjay5wdXNoKGNvbW1hbmQpOyAgICAgICAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHBlcmZvcm1QZW5kaW5nT3BlcmF0aW9uKCk6bnVtYmVye1xyXG4gICAgICAgIGxldCBjb21tYW5kOklDb21tYW5kID0gPElDb21tYW5kPiB0aGlzLmZ1dHVyZUNhbGxTdGFjay5zaGlmdCgpO1xyXG4gICAgICAgIGxldCB2YWx1ZTpudW1iZXIgPSB0aGlzLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICB3aGlsZShjb21tYW5kKXtcclxuICAgICAgICAgICAgdGhpcy5jYWxsU3RhY2sucHVzaChjb21tYW5kKTtcclxuICAgICAgICAgICAgdmFsdWUgPSBjb21tYW5kLmV4ZWN1dGUodGhpcy5jdXJyZW50VmFsdWUpO1xyXG4gICAgICAgICAgICBjb21tYW5kID0gPElDb21tYW5kPiB0aGlzLmZ1dHVyZUNhbGxTdGFjay5zaGlmdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcGVyZm9ybU9wZXJhdGlvbihvcGVyYXRpb246c3RyaW5nLCB2YWx1ZTpudW1iZXIpOm51bWJlcntcclxuICAgICAgICBsZXQgY29tbWFuZDpJQ29tbWFuZCA9IHRoaXMuY29tbWFuZEZhY3RvcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNyZWF0ZUNvbW1hbmQob3BlcmF0aW9uLCB2YWx1ZSlcclxuICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IGNvbW1hbmQuZXhlY3V0ZSh0aGlzLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgICAgdGhpcy5jYWxsU3RhY2sucHVzaChjb21tYW5kKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50VmFsdWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVuZG9PcGVyYXRpb24oKTpudW1iZXJ7XHJcbiAgICAgICAgbGV0IGNvbW1hbmQ6SUNvbW1hbmQgPSA8SUNvbW1hbmQ+IHRoaXMuY2FsbFN0YWNrLnBvcCgpO1xyXG4gICAgICAgIGlmKGNvbW1hbmQgJiYgY29tbWFuZC5jYW5VbmRvKCkpe1xyXG4gICAgICAgICAgICB0aGlzLnVuZG9DYWxsU3RhY2sucHVzaChjb21tYW5kKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbW1hbmQudW5kbyh0aGlzLmN1cnJlbnRWYWx1ZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZG9PcGVyYXRpb24oKTpudW1iZXIge1xyXG4gICAgICAgIGxldCBjb21tYW5kOklDb21tYW5kID0gPElDb21tYW5kPiB0aGlzLnVuZG9DYWxsU3RhY2sucG9wKCk7XHJcbiAgICAgICAgaWYoY29tbWFuZCAmJiBjb21tYW5kLmNhblJlZG8oKSl7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbFN0YWNrLnB1c2goY29tbWFuZCk7XHJcbiAgICAgICAgICAgIHJldHVybiBjb21tYW5kLmV4ZWN1dGUodGhpcy5jdXJyZW50VmFsdWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldCgpe1xyXG4gICAgICAgIHRoaXMuY2FsbFN0YWNrID0gW107XHJcbiAgICAgICAgdGhpcy51bmRvQ2FsbFN0YWNrID0gW107XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZhbHVlKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50VmFsdWU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJQ29tbWFuZCB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2ljb21tYW5kXCI7XHJcbmltcG9ydCB7SU9wZXJhdGlvbn0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaW9wZXJhdGlvblwiXHJcblxyXG5leHBvcnQgY2xhc3MgQ29tbWFuZCBpbXBsZW1lbnRzIElDb21tYW5kIHtcclxuICAgIHByaXZhdGUgZXhlSW52b2tlcjpJT3BlcmF0aW9uXHJcbiAgICBwcml2YXRlIHVuZG9JbnZva2VyOklPcGVyYXRpb25cclxuICAgIHByaXZhdGUgdmFsdWU6bnVtYmVyIFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGV4ZUludm9rZXI6SU9wZXJhdGlvbiwgdW5kb0ludm9rZXI6SU9wZXJhdGlvbiwgdmFsdWU6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLmV4ZUludm9rZXIgPSBleGVJbnZva2VyO1xyXG4gICAgICAgIHRoaXMudW5kb0ludm9rZXIgPSB1bmRvSW52b2tlcjtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZXhlY3V0ZShjdXJlbnQ6bnVtYmVyKTpudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlSW52b2tlci5wZXJmb3JtQWN0aW9uKGN1cmVudCwgdGhpcy52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjYW5VbmRvKCk6Ym9vbGVhbntcclxuICAgICAgICByZXR1cm4gdGhpcy51bmRvICE9PSB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBjYW5SZWRvKCk6Ym9vbGVhbntcclxuICAgICAgICByZXR1cm4gdGhpcy5leGVJbnZva2VyICE9PSB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICB1bmRvKGN1cmVudDpudW1iZXIpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudW5kb0ludm9rZXIucGVyZm9ybUFjdGlvbihjdXJlbnQsIHRoaXMudmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgcmVkbyhjdXJlbnQ6bnVtYmVyKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoY3VyZW50KTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBJQ29tbWFuZCB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2ljb21tYW5kXCI7XHJcbmltcG9ydCB7IElPcGVyYXRpb24gfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pb3BlcmF0aW9uXCI7XHJcbmltcG9ydCB7IEFkZGl0aW9uIH0gZnJvbSBcIi4uL29wZXJhdGlvbnMvYWRkXCI7XHJcbmltcG9ydCB7IFN1YnN0cmFjdCB9IGZyb20gXCIuLi9vcGVyYXRpb25zL3N1YnN0cmFjdFwiO1xyXG5pbXBvcnQgeyBDb21tYW5kIH0gZnJvbSBcIi4vY29tbWFuZFwiO1xyXG5pbXBvcnQgeyBNdWx0aXBseSB9IGZyb20gXCIuLi9vcGVyYXRpb25zL211bHRpcGx5XCI7XHJcbmltcG9ydCB7IERpdmlkZSB9IGZyb20gXCIuLi9vcGVyYXRpb25zL2RpdmlkZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENPTU1BTkRfQ09OU1QgPSB7XHJcbiAgICBBRERJVElPTjpcImFkZGl0aW9uXCIsXHJcbiAgICBTVUJTVFJBQ1Q6XCJzdWJzdHJhY3RcIixcclxuICAgIE1VTFRJUExZOlwibXVsdGlwbHlcIixcclxuICAgIERJVklERTpcImRpdmlkZVwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb21tYW5kRmFjdG9yeSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXt9XHJcblxyXG4gICAgY3JlYXRlQ29tbWFuZChuYW1lOnN0cmluZywgdmFsdWU6bnVtYmVyKTpJQ29tbWFuZCB7XHJcbiAgICAgICAgc3dpdGNoKG5hbWUpe1xyXG4gICAgICAgICAgICBjYXNlIENPTU1BTkRfQ09OU1QuQURESVRJT046XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hZGRDb21tYW5kKHZhbHVlKTtcclxuICAgICAgICAgICAgY2FzZSBDT01NQU5EX0NPTlNULlNVQlNUUkFDVDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN1YkNvbW1hbmQodmFsdWUpO1xyXG4gICAgICAgICAgICBjYXNlIENPTU1BTkRfQ09OU1QuTVVMVElQTFk6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tdWx0aUNvbW1hbmQodmFsdWUpO1xyXG4gICAgICAgICAgICBjYXNlIENPTU1BTkRfQ09OU1QuRElWSURFOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGl2aWRlQ29tbWFuZCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hZGRDb21tYW5kKHZhbHVlKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWRkQ29tbWFuZCh2YWx1ZTpudW1iZXIpOklDb21tYW5kIHtcclxuICAgICAgICBsZXQgZXhlY3V0ZTpJT3BlcmF0aW9uID0gbmV3IEFkZGl0aW9uKCk7XHJcbiAgICAgICAgbGV0IHVuZG86SU9wZXJhdGlvbiA9IG5ldyBTdWJzdHJhY3QoKTtcclxuICAgICAgICByZXR1cm4gbmV3IENvbW1hbmQoZXhlY3V0ZSwgdW5kbywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YkNvbW1hbmQodmFsdWU6bnVtYmVyKTpJQ29tbWFuZCB7XHJcbiAgICAgICAgbGV0IGV4ZWN1dGU6SU9wZXJhdGlvbiA9IG5ldyBTdWJzdHJhY3QoKTtcclxuICAgICAgICBsZXQgdW5kbzpJT3BlcmF0aW9uID0gbmV3IEFkZGl0aW9uKCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb21tYW5kKGV4ZWN1dGUsIHVuZG8sIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBtdWx0aUNvbW1hbmQodmFsdWU6bnVtYmVyKTpJQ29tbWFuZCB7XHJcbiAgICAgICAgbGV0IGV4ZWN1dGU6SU9wZXJhdGlvbiA9IG5ldyBNdWx0aXBseSgpO1xyXG4gICAgICAgIGxldCB1bmRvOklPcGVyYXRpb24gPSBuZXcgRGl2aWRlKCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb21tYW5kKGV4ZWN1dGUsIHVuZG8sIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXZpZGVDb21tYW5kKHZhbHVlOm51bWJlcik6SUNvbW1hbmQge1xyXG4gICAgICAgIGxldCBleGVjdXRlOklPcGVyYXRpb24gPSBuZXcgRGl2aWRlKCk7XHJcbiAgICAgICAgbGV0IHVuZG86SU9wZXJhdGlvbiA9IG5ldyBNdWx0aXBseSgpO1xyXG4gICAgICAgIHJldHVybiBuZXcgQ29tbWFuZChleGVjdXRlLCB1bmRvLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgQmFzaWNDYWxjdWxhdG9yIH0gZnJvbSBcIi4vY2FsY3VsYXRvci9iYXNpY2NhbGN1bGF0b3JcIjtcbmltcG9ydCB7IENPTU1BTkRfQ09OU1QgfSBmcm9tIFwiLi9jb21tYW5kcy9jb21tYW5kRmFjdG9yeVwiO1xuXG5jbGFzcyBCb290c3RyYXAge1xuXG4gICAgY29uc3RydWN0b3IoKXsgfVxuXG4gICAgcHVibGljIGluaXRpYWxpemUoKXtcbiAgICAgICAgbGV0IGJhc2ljQ2FsOkJhc2ljQ2FsY3VsYXRvciA9IG5ldyBCYXNpY0NhbGN1bGF0b3IoKTtcbiAgICAgICAgYmFzaWNDYWwuaW5pdGlhbGl6ZSgpO1xuXG4gICAgICAgIGxldCB2YWx1ZTpudW1iZXIgPSBiYXNpY0NhbC5wZXJmb3JtT3BlcmF0aW9uKENPTU1BTkRfQ09OU1QuQURESVRJT04sIDEwKTtcbiAgICAgICAgdmFsdWUgPSBiYXNpY0NhbC5wZXJmb3JtT3BlcmF0aW9uKENPTU1BTkRfQ09OU1QuQURESVRJT04sIDIwKTtcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuXG4gICAgICAgIHZhbHVlID0gYmFzaWNDYWwucGVyZm9ybU9wZXJhdGlvbihDT01NQU5EX0NPTlNULk1VTFRJUExZLCAzMCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcblxuICAgICAgICB2YWx1ZSA9IGJhc2ljQ2FsLnBlcmZvcm1PcGVyYXRpb24oQ09NTUFORF9DT05TVC5NVUxUSVBMWSwgMzApO1xuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG5cbiAgICAgICAgdmFsdWUgPSBiYXNpY0NhbC51bmRvT3BlcmF0aW9uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcblxuICAgIH1cbn0gICBcblxubGV0IGJvb3QgPSBuZXcgQm9vdHN0cmFwKCk7XG5ib290LmluaXRpYWxpemUoKTsiLCJpbXBvcnQge0lPcGVyYXRpb259IGZyb20gXCIuLi9pbnRlcmZhY2VzL2lvcGVyYXRpb25cIlxyXG5cclxuZXhwb3J0IGNsYXNzIEFkZGl0aW9uIGltcGxlbWVudHMgSU9wZXJhdGlvbiB7XHJcbiAgICBcclxuICAgIHBlcmZvcm1BY3Rpb24oZmlyc3Q6bnVtYmVyLCBzZWNvbmQ6bnVtYmVyKTpudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIGZpcnN0ICsgc2Vjb25kO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtJT3BlcmF0aW9ufSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pb3BlcmF0aW9uXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBEaXZpZGUgaW1wbGVtZW50cyBJT3BlcmF0aW9uIHtcclxuICAgIFxyXG4gICAgcGVyZm9ybUFjdGlvbihmaXJzdDpudW1iZXIsIHNlY29uZDpudW1iZXIpOm51bWJlcntcclxuICAgICAgICByZXR1cm4gZmlyc3QgLyBzZWNvbmQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0lPcGVyYXRpb259IGZyb20gXCIuLi9pbnRlcmZhY2VzL2lvcGVyYXRpb25cIlxyXG5cclxuZXhwb3J0IGNsYXNzIE11bHRpcGx5IGltcGxlbWVudHMgSU9wZXJhdGlvbiB7XHJcbiAgICBcclxuICAgIHBlcmZvcm1BY3Rpb24oZmlyc3Q6bnVtYmVyLCBzZWNvbmQ6bnVtYmVyKTpudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIGZpcnN0ICogc2Vjb25kO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtJT3BlcmF0aW9ufSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pb3BlcmF0aW9uXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBTdWJzdHJhY3QgaW1wbGVtZW50cyBJT3BlcmF0aW9uIHtcclxuICAgIFxyXG4gICAgcGVyZm9ybUFjdGlvbihmaXJzdDpudW1iZXIsIHNlY29uZDpudW1iZXIpOm51bWJlcntcclxuICAgICAgICByZXR1cm4gZmlyc3QgLSBzZWNvbmQ7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9