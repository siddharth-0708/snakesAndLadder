"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatesnakesandladder"]("main",{

/***/ "./src/board/Board.tsx":
/*!*****************************!*\
  !*** ./src/board/Board.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Board_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board.module.css */ \"./src/board/Board.module.css\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _redux_toolkitRedux_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/toolkitRedux/reducer */ \"./src/redux/toolkitRedux/reducer.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n// import './Board.css';\n\n\n\n// import loaderImage from './assets/board.jpeg'\n\n// console.log(\"image is \", loaderImage);\n\nconsole.log(\"haha\", _Board_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nfunction Board(data) {\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n  var mystate = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {\n    return state.count;\n  });\n  console.log(\"...state is \", mystate);\n  function clicked() {\n    console.log(\"clickeedddd\");\n    dispatch(_redux_toolkitRedux_reducer__WEBPACK_IMPORTED_MODULE_1__.reducer1.actions.increment());\n  }\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n      onClick: clicked,\n      className: _Board_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"].boardClass,\n      children: \"Board!\"\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(\"div\", {\n      children: [\"board count is \", mystate]\n    })]\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Board);\n\n//# sourceURL=webpack://snakesandladder/./src/board/Board.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4efb36ead5033e438463")
/******/ })();
/******/ 
/******/ }
);