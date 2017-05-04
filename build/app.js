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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ((text = 'No Data provided to component') => {
	const element = document.createElement('div');
	element.innerHTML = text;
	return element;
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ReferenceError: window is not defined\n    at C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\style-loader\\index.js!C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\css-loader\\index.js!C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\postcss-loader\\index.js!C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\app\\main.css:106:10\n    at C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\style-loader\\index.js!C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\css-loader\\index.js!C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\postcss-loader\\index.js!C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\app\\main.css:96:47\n    at module.exports.module.exports (C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\style-loader\\index.js!C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\css-loader\\index.js!C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\postcss-loader\\index.js!C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\app\\main.css:134:68)\n    at Object.<anonymous> (C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\style-loader\\index.js!C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\css-loader\\index.js!C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\postcss-loader\\index.js!C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\app\\main.css:589:36)\n    at __webpack_require__ (C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\style-loader\\index.js!C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\css-loader\\index.js!C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\postcss-loader\\index.js!C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\app\\main.css:21:30)\n    at C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\style-loader\\index.js!C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\css-loader\\index.js!C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\postcss-loader\\index.js!C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\app\\main.css:67:18\n    at Object.<anonymous> (C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\style-loader\\index.js!C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\css-loader\\index.js!C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\postcss-loader\\index.js!C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\app\\main.css:70:10)\n    at Module._compile (module.js:570:32)\n    at Object.exec (C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\webpack\\lib\\NormalModule.js:126:12)\n    at Object.<anonymous> (C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\extract-text-webpack-plugin\\loader.js:112:21)\n    at Compiler.<anonymous> (C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\webpack\\lib\\Compiler.js:291:10)\n    at C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\webpack\\lib\\Compiler.js:494:13\n    at next (C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\tapable\\lib\\Tapable.js:138:11)\n    at Compiler.<anonymous> (C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\extract-text-webpack-plugin\\loader.js:93:4)\n    at next (C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\tapable\\lib\\Tapable.js:140:14)\n    at Compiler.<anonymous> (C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\webpack\\lib\\CachePlugin.js:62:5)\n    at Compiler.applyPluginsAsyncSeries (C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\tapable\\lib\\Tapable.js:142:13)\n    at C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\webpack\\lib\\Compiler.js:491:10\n    at Compilation.applyPluginsAsyncSeries (C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\tapable\\lib\\Tapable.js:131:46)\n    at self.applyPluginsAsync.err (C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\webpack\\lib\\Compilation.js:645:19)\n    at Compilation.applyPluginsAsyncSeries (C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\tapable\\lib\\Tapable.js:131:46)\n    at self.applyPluginsAsync.err (C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\webpack\\lib\\Compilation.js:636:11)\n    at Compilation.applyPluginsAsyncSeries (C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\tapable\\lib\\Tapable.js:131:46)\n    at self.applyPluginsAsync.err (C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\webpack\\lib\\Compilation.js:631:10)\n    at Compilation.applyPluginsAsyncSeries (C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\tapable\\lib\\Tapable.js:131:46)\n    at sealPart2 (C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\webpack\\lib\\Compilation.js:627:9)\n    at Compilation.applyPluginsAsyncSeries (C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\tapable\\lib\\Tapable.js:131:46)\n    at Compilation.seal (C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\webpack\\lib\\Compilation.js:575:8)\n    at C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\webpack\\lib\\Compiler.js:488:16\n    at C:\\MyProjects\\Tuts\\surviveJS\\webpack-demo\\node_modules\\tapable\\lib\\Tapable.js:225:11");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__main_css__);



document.body.appendChild(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__component__["a" /* default */])());
document.body.appendChild(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__component__["a" /* default */])('Hot Module Reloading'));
document.body.appendChild(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__component__["a" /* default */])('Using dev/prod configs in webpack'));

/***/ })
/******/ ]);