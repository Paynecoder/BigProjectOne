/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./hooks/answerContext.js":
/*!********************************!*\
  !*** ./hooks/answerContext.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AnswersProvider\": () => (/* binding */ AnswersProvider),\n/* harmony export */   \"useAnswers\": () => (/* binding */ useAnswers)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst AnswersContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction useAnswers() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AnswersContext);\n}\nfunction AnswersProvider({ children  }) {\n    const [answers, setAnswers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const updateAnswers = (answer)=>{\n        if (answer !== null) {\n            setAnswers((prevAnswers)=>[\n                    ...prevAnswers,\n                    answer\n                ]);\n        }\n    };\n    const resetUser = ()=>{\n        setAnswers([]);\n        setScore(0);\n    };\n    const updateScore = ()=>{\n        setScore((prevScore)=>prevScore + 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnswersContext.Provider, {\n        value: {\n            answers,\n            updateAnswers,\n            updateScore,\n            score,\n            resetUser\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\apple\\\\Desktop\\\\brrilliant\\\\hooks\\\\answerContext.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy9hbnN3ZXJDb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBdUU7QUFFdkUsTUFBTUksK0JBQWlCSixvREFBYUE7QUFFN0IsU0FBU0ssYUFBYTtJQUMzQixPQUFPSixpREFBVUEsQ0FBQ0c7QUFDcEIsQ0FBQztBQUVNLFNBQVNFLGdCQUFnQixFQUFFQyxTQUFRLEVBQUUsRUFBRTtJQUM1QyxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUN6QyxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQUM7SUFFbkMsTUFBTVUsZ0JBQWdCLENBQUNDLFNBQVc7UUFDaEMsSUFBSUEsV0FBVyxJQUFJLEVBQUU7WUFDbkJKLFdBQVcsQ0FBQ0ssY0FBZ0I7dUJBQUlBO29CQUFhRDtpQkFBTztRQUN0RCxDQUFDO0lBQ0g7SUFFQSxNQUFNRSxZQUFZLElBQU07UUFDdEJOLFdBQVcsRUFBRTtRQUNiRSxTQUFTO0lBQ1g7SUFFQSxNQUFNSyxjQUFjLElBQU07UUFDeEJMLFNBQVMsQ0FBQ00sWUFBY0EsWUFBWTtJQUN0QztJQUNBLHFCQUNFLDhEQUFDYixlQUFlYyxRQUFRO1FBQ3RCQyxPQUFPO1lBQ0xYO1lBQ0FJO1lBQ0FJO1lBQ0FOO1lBQ0FLO1FBQ0Y7a0JBRUNSOzs7Ozs7QUFHUCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJyaWxsaWFudC8uL2hvb2tzL2Fuc3dlckNvbnRleHQuanM/MjlmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBBbnN3ZXJzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBbnN3ZXJzKCkge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KEFuc3dlcnNDb250ZXh0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFuc3dlcnNQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbYW5zd2Vycywgc2V0QW5zd2Vyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3QgdXBkYXRlQW5zd2VycyA9IChhbnN3ZXIpID0+IHtcclxuICAgIGlmIChhbnN3ZXIgIT09IG51bGwpIHtcclxuICAgICAgc2V0QW5zd2VycygocHJldkFuc3dlcnMpID0+IFsuLi5wcmV2QW5zd2VycywgYW5zd2VyXSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVzZXRVc2VyID0gKCkgPT4ge1xyXG4gICAgc2V0QW5zd2VycyhbXSk7XHJcbiAgICBzZXRTY29yZSgwKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB1cGRhdGVTY29yZSA9ICgpID0+IHtcclxuICAgIHNldFNjb3JlKChwcmV2U2NvcmUpID0+IHByZXZTY29yZSArIDEpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxBbnN3ZXJzQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIGFuc3dlcnMsXHJcbiAgICAgICAgdXBkYXRlQW5zd2VycyxcclxuICAgICAgICB1cGRhdGVTY29yZSxcclxuICAgICAgICBzY29yZSxcclxuICAgICAgICByZXNldFVzZXIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQW5zd2Vyc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFuc3dlcnNDb250ZXh0IiwidXNlQW5zd2VycyIsIkFuc3dlcnNQcm92aWRlciIsImNoaWxkcmVuIiwiYW5zd2VycyIsInNldEFuc3dlcnMiLCJzY29yZSIsInNldFNjb3JlIiwidXBkYXRlQW5zd2VycyIsImFuc3dlciIsInByZXZBbnN3ZXJzIiwicmVzZXRVc2VyIiwidXBkYXRlU2NvcmUiLCJwcmV2U2NvcmUiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/answerContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/variables.css */ \"./styles/variables.css\");\n/* harmony import */ var _styles_variables_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_variables_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_answerContext_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/answerContext.js */ \"./hooks/answerContext.js\");\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hooks_answerContext_js__WEBPACK_IMPORTED_MODULE_3__.AnswersProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\apple\\\\Desktop\\\\brrilliant\\\\pages\\\\_app.js\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\apple\\\\Desktop\\\\brrilliant\\\\pages\\\\_app.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNFO0FBQzJCO0FBRTVDLFNBQVNDLElBQUksRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUNwRCxxQkFDRTtrQkFDRSw0RUFBQ0gsb0VBQWVBO3NCQUNkLDRFQUFDRTtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7QUFJaEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JycmlsbGlhbnQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuaW1wb3J0IFwiQC9zdHlsZXMvdmFyaWFibGVzLmNzc1wiO1xyXG5pbXBvcnQgeyBBbnN3ZXJzUHJvdmlkZXIgfSBmcm9tIFwiQC9ob29rcy9hbnN3ZXJDb250ZXh0LmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxBbnN3ZXJzUHJvdmlkZXI+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L0Fuc3dlcnNQcm92aWRlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkFuc3dlcnNQcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/variables.css":
/*!******************************!*\
  !*** ./styles/variables.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();